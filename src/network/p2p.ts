// ─── P2P Serverless Multiplayer Network (Richup style) ───────────────────
// Uses WebRTC via public PeerJS cloud to connect friends anywhere in the world
// without needing any backend server! Runs 100% on GitHub Pages.

import { Peer, type DataConnection } from 'peerjs';
import type { GameState } from '../engine/types';

export interface RoomMeta {
  roomId: string;
  hostName: string;
  isHost: boolean;
  playersCount: number;
  maxPlayers: number;
}

export interface LobbyPlayer {
  id: number;
  name: string;
  tokenKey: string;
  isHost: boolean;
  isBot?: boolean;
}

export interface LobbySettings {
  startingCash: number;
  maxRounds: number;
}

export type NetMessage =
  | { type: 'join'; name: string; tokenKey: string }
  | { type: 'welcome'; playerId: number; state?: GameState | null }
  | { type: 'state'; state: GameState }
  | { type: 'action'; fnName: string; args: any[]; playerId?: number }
  | { type: 'chat'; sender: string; text: string; time: string }
  | { type: 'emote'; sender: string; emoji: string }
  | { type: 'lobby_update'; players: LobbyPlayer[]; settings: LobbySettings }
  | { type: 'lobby_chat'; sender: string; text: string; time: string }
  | { type: 'start_game'; state: GameState };

let peer: Peer | null = null;
let connections: DataConnection[] = [];
let hostConnection: DataConnection | null = null;
let isHost = false;
let currentRoomId = '';

export function getRoomId(): string {
  return currentRoomId;
}

export function isOnlineHost(): boolean {
  return isHost;
}

export function isOnlineClient(): boolean {
  return hostConnection !== null;
}

/**
 * Host creates a room with an 6-letter room code (e.g. "pola-k8b2")
 */
export async function createOnlineRoom(
  hostName: string,
  onPlayerJoin: (conn: DataConnection, data: { name: string; tokenKey: string }) => void,
  onMessage: (msg: NetMessage, fromConn: DataConnection) => void,
  onPlayerLeave?: (conn: DataConnection) => void,
): Promise<string> {
  // Clean up any existing connection
  disconnectOnline();

  const code = Math.random().toString(36).substring(2, 7);
  const roomId = `pola-${code}`;
  currentRoomId = roomId;
  isHost = true;

  return new Promise((resolve, reject) => {
    peer = new Peer(roomId, {
      debug: 1,
    });

    peer.on('open', (id) => {
      resolve(id);
    });

    peer.on('error', (err) => {
      reject(err);
    });

    peer.on('connection', (conn) => {
      connections.push(conn);

      conn.on('data', (raw: any) => {
        const msg = raw as NetMessage;
        if (msg.type === 'join') {
          onPlayerJoin(conn, { name: msg.name, tokenKey: msg.tokenKey });
        } else {
          onMessage(msg, conn);
        }
      });

      conn.on('close', () => {
        connections = connections.filter(c => c !== conn);
        onPlayerLeave?.(conn);
      });
    });
  });
}

/**
 * Client joins an existing room by its room ID
 */
export async function joinOnlineRoom(
  roomId: string,
  playerName: string,
  tokenKey: string,
  onMessage: (msg: NetMessage) => void,
  onDisconnect?: () => void,
): Promise<void> {
  disconnectOnline();
  currentRoomId = roomId;
  isHost = false;

  return new Promise((resolve, reject) => {
    peer = new Peer({ debug: 1 });

    peer.on('open', () => {
      const conn = peer!.connect(roomId, { reliable: true });
      hostConnection = conn;

      conn.on('open', () => {
        conn.send({ type: 'join', name: playerName, tokenKey } as NetMessage);
        resolve();
      });

      conn.on('data', (raw: any) => {
        onMessage(raw as NetMessage);
      });

      conn.on('close', () => {
        hostConnection = null;
        onDisconnect?.();
      });

      conn.on('error', (err) => {
        reject(err);
      });
    });

    peer.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Broadcast message from host to all connected players
 */
export function broadcastMessage(msg: NetMessage): void {
  for (const conn of connections) {
    if (conn.open) {
      conn.send(msg);
    }
  }
}

/**
 * Send action from client to host
 */
export function sendToHost(msg: NetMessage): void {
  if (hostConnection && hostConnection.open) {
    hostConnection.send(msg);
  }
}

export function disconnectOnline(): void {
  if (hostConnection) {
    try { hostConnection.close(); } catch {}
    hostConnection = null;
  }
  for (const conn of connections) {
    try { conn.close(); } catch {}
  }
  connections = [];
  if (peer) {
    try { peer.destroy(); } catch {}
    peer = null;
  }
  isHost = false;
  currentRoomId = '';
}
