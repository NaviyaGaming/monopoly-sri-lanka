// ─── Hyper-Realistic 3D WebGL Casino Dice Engine (Three.js) ────────────────
// Features:
// - Real-time WebGL PBR physical materials with specular reflection and clearcoat
// - High-resolution 512x512 procedural canvas textures for all 6 faces
// - Luxury casino ruby-red pip on Face 1 with glossy specular glints
// - Deep recessed obsidian pips on Faces 2–6 with inner shadows
// - True 3D physics: gravity, multi-bounce restitution, angular momentum, table collisions
// - Dynamic height-tracking floor shadows that scale & blur with bounce elevation
// - Procedural landing thuds and doubles celebration
// - Smooth fallback & zero CPU consumption when idle

import * as THREE from 'three';
import { sfx } from './fx';

let shown: [number, number] = [3, 4];
let isRolling = false;

export function isDiceRolling(): boolean {
  return isRolling;
}

export function getCurrentRoll(): [number, number] {
  return [shown[0], shown[1]];
}

// ─── Face Angles Mapping ──────────────────────────────────────────────────
// Maps face value (1..6) to Euler angles that orient that face in +Y (facing camera/up)
const TARGET_ANGLES: Record<number, { x: number; y: number; z: number }> = {
  1: { x: -Math.PI / 2, y: 0, z: 0 },
  6: { x: Math.PI / 2, y: 0, z: 0 },
  2: { x: 0, y: 0, z: 0 },
  5: { x: Math.PI, y: 0, z: 0 },
  3: { x: 0, y: 0, z: Math.PI / 2 },
  4: { x: 0, y: 0, z: -Math.PI / 2 },
};

// ─── Procedural High-Res Texture Generator ─────────────────────────────────

const textureCache = new Map<number, THREE.CanvasTexture>();

function generateFaceTexture(value: number): THREE.CanvasTexture {
  if (textureCache.has(value)) {
    return textureCache.get(value)!;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // 1. Ivory Porcelain Background with subtle gradient & ambient occlusion
  const bgGrad = ctx.createRadialGradient(256, 256, 120, 256, 256, 360);
  bgGrad.addColorStop(0, '#ffffff');
  bgGrad.addColorStop(0.7, '#f8fafc');
  bgGrad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = bgGrad;

  // Rounded Die Face Border
  const r = 52;
  ctx.beginPath();
  ctx.roundRect(14, 14, 484, 484, r);
  ctx.fill();

  // Subtle outer edge stroke (bevel highlight)
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#cbd5e1';
  ctx.stroke();

  // 2. Pip Layout Grid
  const PIP_GRID: Record<number, Array<[number, number]>> = {
    1: [[256, 256]],
    2: [[156, 356], [356, 156]],
    3: [[156, 356], [256, 256], [356, 156]],
    4: [[156, 156], [356, 156], [156, 356], [356, 356]],
    5: [[156, 156], [356, 156], [256, 256], [156, 356], [356, 356]],
    6: [[156, 156], [356, 156], [156, 256], [356, 256], [156, 356], [356, 356]],
  };

  const pips = PIP_GRID[value] || PIP_GRID[1];
  const isAce = value === 1;
  const pipRadius = isAce ? 54 : 38;

  for (const [px, py] of pips) {
    // Pip Outer Inset Shadow (Engraved Depth)
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;

    ctx.beginPath();
    ctx.arc(px, py, pipRadius, 0, Math.PI * 2);
    ctx.fillStyle = isAce ? '#dc2626' : '#0f172a';
    ctx.fill();
    ctx.restore();

    // Pip Inner Radial Gradient (Glossy Depth)
    const pipGrad = ctx.createRadialGradient(
      px - pipRadius * 0.35,
      py - pipRadius * 0.35,
      2,
      px,
      py,
      pipRadius,
    );

    if (isAce) {
      pipGrad.addColorStop(0, '#f87171');
      pipGrad.addColorStop(0.3, '#dc2626');
      pipGrad.addColorStop(0.8, '#991b1b');
      pipGrad.addColorStop(1, '#450a0a');
    } else {
      pipGrad.addColorStop(0, '#475569');
      pipGrad.addColorStop(0.25, '#1e293b');
      pipGrad.addColorStop(0.8, '#0f172a');
      pipGrad.addColorStop(1, '#020617');
    }

    ctx.beginPath();
    ctx.arc(px, py, pipRadius, 0, Math.PI * 2);
    ctx.fillStyle = pipGrad;
    ctx.fill();

    // Specular Reflection Glint Dot (Acrylic shine)
    ctx.beginPath();
    ctx.arc(
      px - pipRadius * 0.38,
      py - pipRadius * 0.38,
      pipRadius * 0.22,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  textureCache.set(value, texture);
  return texture;
}

// ─── Shadow Texture Generator ──────────────────────────────────────────────

let shadowTexture: THREE.CanvasTexture | null = null;
function getShadowTexture(): THREE.CanvasTexture {
  if (shadowTexture) return shadowTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 60);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
  grad.addColorStop(0.4, 'rgba(0, 0, 0, 0.35)');
  grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.12)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  shadowTexture = new THREE.CanvasTexture(canvas);
  return shadowTexture;
}

// ─── Three.js Scene Singleton ─────────────────────────────────────────────

interface DieEntity {
  mesh: THREE.Mesh;
  shadow: THREE.Mesh;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  rot: THREE.Quaternion;
  angVel: THREE.Vector3;
  targetEuler: THREE.Euler;
  targetQuat: THREE.Quaternion;
  bounces: number;
}

let sceneInstance: {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  die1: DieEntity;
  die2: DieEntity;
  activeHolder: HTMLElement | null;
  animFrameId: number | null;
} | null = null;

function initScene(holder: HTMLElement): typeof sceneInstance {
  if (sceneInstance) {
    if (sceneInstance.activeHolder !== holder) {
      sceneInstance.activeHolder = holder;
      holder.innerHTML = '';
      holder.appendChild(sceneInstance.renderer.domElement);
    }
    return sceneInstance;
  }

  const width = 290;
  const height = 135;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 6.4, 5.2);
  camera.lookAt(0, 0.45, 0);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xfffbeb, 1.4);
  mainLight.position.set(4, 9, 5);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 512;
  mainLight.shadow.mapSize.height = 512;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x6ee7b7, 0.6);
  fillLight.position.set(-5, 6, -3);
  scene.add(fillLight);

  // Shared Materials Array for 6 Faces:
  // Indices: 0: +X (3), 1: -X (4), 2: +Y (2), 3: -Y (5), 4: +Z (1), 5: -Z (6)
  const materials = [
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(3), roughness: 0.16, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(4), roughness: 0.16, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(2), roughness: 0.16, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(5), roughness: 0.16, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(1), roughness: 0.16, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ map: generateFaceTexture(6), roughness: 0.16, metalness: 0.05 }),
  ];

  const geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);

  // Shadow Geometry & Material
  const shadowGeo = new THREE.PlaneGeometry(1.8, 1.8);
  const shadowMat1 = new THREE.MeshBasicMaterial({
    map: getShadowTexture(),
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  const shadowMat2 = new THREE.MeshBasicMaterial({
    map: getShadowTexture(),
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });

  const shadowMesh1 = new THREE.Mesh(shadowGeo, shadowMat1);
  shadowMesh1.rotation.x = -Math.PI / 2;
  shadowMesh1.position.y = 0.02;
  scene.add(shadowMesh1);

  const shadowMesh2 = new THREE.Mesh(shadowGeo, shadowMat2);
  shadowMesh2.rotation.x = -Math.PI / 2;
  shadowMesh2.position.y = 0.02;
  scene.add(shadowMesh2);

  const mesh1 = new THREE.Mesh(geometry, materials);
  mesh1.castShadow = true;
  scene.add(mesh1);

  const mesh2 = new THREE.Mesh(geometry, materials);
  mesh2.castShadow = true;
  scene.add(mesh2);

  const die1: DieEntity = {
    mesh: mesh1,
    shadow: shadowMesh1,
    pos: new THREE.Vector3(-1.1, 0.5, 0),
    vel: new THREE.Vector3(),
    rot: new THREE.Quaternion(),
    angVel: new THREE.Vector3(),
    targetEuler: new THREE.Euler(),
    targetQuat: new THREE.Quaternion(),
    bounces: 0,
  };

  const die2: DieEntity = {
    mesh: mesh2,
    shadow: shadowMesh2,
    pos: new THREE.Vector3(1.1, 0.5, 0),
    vel: new THREE.Vector3(),
    rot: new THREE.Quaternion(),
    angVel: new THREE.Vector3(),
    targetEuler: new THREE.Euler(),
    targetQuat: new THREE.Quaternion(),
    bounces: 0,
  };

  holder.innerHTML = '';
  holder.appendChild(renderer.domElement);

  sceneInstance = {
    renderer,
    scene,
    camera,
    die1,
    die2,
    activeHolder: holder,
    animFrameId: null,
  };

  return sceneInstance;
}

// ─── Main Render & Roll Function ──────────────────────────────────────────

export async function renderDice(
  holder: HTMLElement,
  roll: [number, number] | null,
  tumbleMs = 0,
): Promise<void> {
  if (roll) shown = [roll[0], roll[1]];
  if (isRolling && tumbleMs > 0) return;

  holder.className = 'dice-row richup-dice-stage';

  // Ensure Three.js canvas exists in holder
  let canvasContainer = holder.querySelector('.dice-canvas-wrap') as HTMLElement;
  if (!canvasContainer) {
    canvasContainer = document.createElement('div');
    canvasContainer.className = 'dice-canvas-wrap';
    holder.appendChild(canvasContainer);
  }

  const s = initScene(canvasContainer);
  if (!s) return;

  const ang1 = TARGET_ANGLES[shown[0]] || TARGET_ANGLES[1];
  const ang2 = TARGET_ANGLES[shown[1]] || TARGET_ANGLES[2];
  const isDoubles = shown[0] === shown[1];

  const restingYaw1 = -0.12; // Natural resting yaw ~ -7 deg
  const restingYaw2 = 0.15;  // Natural resting yaw ~ +8.5 deg

  s.die1.targetEuler.set(ang1.x, ang1.y + restingYaw1, ang1.z, 'XYZ');
  s.die1.targetQuat.setFromEuler(s.die1.targetEuler);

  s.die2.targetEuler.set(ang2.x, ang2.y + restingYaw2, ang2.z, 'XYZ');
  s.die2.targetQuat.setFromEuler(s.die2.targetEuler);

  if (tumbleMs > 0) {
    isRolling = true;
    holder.classList.add('is-rolling');

    // Launch dice into air with physical trajectories & high angular spin
    s.die1.pos.set(-1.6, 3.4, -0.9);
    s.die1.vel.set(0.65 + Math.random() * 0.35, 1.8 + Math.random() * 0.6, 0.7 + Math.random() * 0.35);
    s.die1.angVel.set(16 + Math.random() * 8, 14 + Math.random() * 8, 12 + Math.random() * 8);
    s.die1.bounces = 0;

    s.die2.pos.set(1.5, 3.6, -0.7);
    s.die2.vel.set(-0.65 - Math.random() * 0.35, 2.0 + Math.random() * 0.6, 0.65 + Math.random() * 0.35);
    s.die2.angVel.set(-15 - Math.random() * 8, 17 + Math.random() * 8, -13 - Math.random() * 8);
    s.die2.bounces = 0;

    const gravity = -26.0;
    const restitution = 0.52;
    const startTime = performance.now();

    await new Promise<void>((resolve) => {
      let lastTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / tumbleMs);
        const dt = Math.min(0.033, (now - lastTime) / 1000);
        lastTime = now;

        const updateDiePhysics = (die: DieEntity, restX: number) => {
          if (progress < 0.82) {
            // Ballistic flight & gravity
            die.vel.y += gravity * dt;
            die.pos.x += die.vel.x * dt;
            die.pos.y += die.vel.y * dt;
            die.pos.z += die.vel.z * dt;

            // Rotation
            const deltaRot = new THREE.Quaternion().setFromEuler(
              new THREE.Euler(
                die.angVel.x * dt,
                die.angVel.y * dt,
                die.angVel.z * dt,
                'XYZ',
              ),
            );
            die.rot.multiply(deltaRot);

            // Table collision at y = 0.5
            if (die.pos.y <= 0.5) {
              die.pos.y = 0.5;
              if (Math.abs(die.vel.y) > 0.8) {
                die.vel.y = -die.vel.y * restitution;
                die.vel.x *= 0.68;
                die.vel.z *= 0.68;
                die.angVel.multiplyScalar(0.68);
                die.bounces++;
                if (die.bounces === 1) sfx('dice');
                else sfx('dice_land');
              } else {
                die.vel.set(0, 0, 0);
              }
            }
          } else {
            // Settle smoothly into final resting slot & target orientation
            const settleAlpha = (progress - 0.82) / 0.18;
            const ease = 1 - Math.pow(1 - settleAlpha, 3);

            die.pos.x = THREE.MathUtils.lerp(die.pos.x, restX, ease * 0.35);
            die.pos.y = THREE.MathUtils.lerp(die.pos.y, 0.5, ease);
            die.pos.z = THREE.MathUtils.lerp(die.pos.z, 0, ease * 0.35);

            die.rot.slerp(die.targetQuat, 0.22);
          }

          // Apply to mesh
          die.mesh.position.copy(die.pos);
          die.mesh.quaternion.copy(die.rot);

          // Update dynamic floor shadow
          die.shadow.position.x = die.pos.x;
          die.shadow.position.z = die.pos.z;
          const heightAbove = Math.max(0, die.pos.y - 0.5);
          const shadowScale = 1.0 + heightAbove * 0.45;
          die.shadow.scale.set(shadowScale, shadowScale, shadowScale);
          (die.shadow.material as THREE.MeshBasicMaterial).opacity = Math.max(
            0.12,
            0.6 - heightAbove * 0.16,
          );
        };

        updateDiePhysics(s.die1, -1.15);
        updateDiePhysics(s.die2, 1.15);

        s.renderer.render(s.scene, s.camera);

        if (progress < 1) {
          s.animFrameId = requestAnimationFrame(animate);
        } else {
          // Final snap
          s.die1.pos.set(-1.15, 0.5, 0);
          s.die1.mesh.position.copy(s.die1.pos);
          s.die1.mesh.quaternion.copy(s.die1.targetQuat);

          s.die2.pos.set(1.15, 0.5, 0);
          s.die2.mesh.position.copy(s.die2.pos);
          s.die2.mesh.quaternion.copy(s.die2.targetQuat);

          s.die1.shadow.position.set(-1.15, 0.02, 0);
          s.die1.shadow.scale.set(1, 1, 1);
          (s.die1.shadow.material as THREE.MeshBasicMaterial).opacity = 0.55;

          s.die2.shadow.position.set(1.15, 0.02, 0);
          s.die2.shadow.scale.set(1, 1, 1);
          (s.die2.shadow.material as THREE.MeshBasicMaterial).opacity = 0.55;

          s.renderer.render(s.scene, s.camera);

          sfx('dice_land');
          holder.classList.remove('is-rolling');
          isRolling = false;

          if (isDoubles) {
            holder.classList.add('doubles-ring');
            sfx('fanfare');
            setTimeout(() => holder.classList.remove('doubles-ring'), 2200);
          }

          resolve();
        }
      };

      s.animFrameId = requestAnimationFrame(animate);
    });
  } else {
    // Static display
    s.die1.pos.set(-1.15, 0.5, 0);
    s.die1.mesh.position.copy(s.die1.pos);
    s.die1.mesh.quaternion.copy(s.die1.targetQuat);

    s.die2.pos.set(1.15, 0.5, 0);
    s.die2.mesh.position.copy(s.die2.pos);
    s.die2.mesh.quaternion.copy(s.die2.targetQuat);

    s.die1.shadow.position.set(-1.15, 0.02, 0);
    s.die1.shadow.scale.set(1, 1, 1);
    (s.die1.shadow.material as THREE.MeshBasicMaterial).opacity = 0.55;

    s.die2.shadow.position.set(1.15, 0.02, 0);
    s.die2.shadow.scale.set(1, 1, 1);
    (s.die2.shadow.material as THREE.MeshBasicMaterial).opacity = 0.55;

    if (isDoubles) {
      holder.classList.add('doubles-ring');
    }

    s.renderer.render(s.scene, s.camera);
  }

  // Prominent Results Display Banner
  renderResultDisplay(holder, shown, isDoubles, tumbleMs > 0);
}

function renderResultDisplay(
  holder: HTMLElement,
  dice: [number, number],
  isDoubles: boolean,
  animated = false,
): void {
  const existing = holder.querySelector('.dice-result-container');
  if (existing) existing.remove();

  const container = document.createElement('div');
  container.className = `dice-result-container${animated ? ' anim-slide-in' : ''}`;
  const total = dice[0] + dice[1];

  container.innerHTML = `
    <div class="dice-result-meta">
      <span class="dice-val-pill">DICE 1: <b>${dice[0]}</b></span>
      <span class="dice-divider">+</span>
      <span class="dice-val-pill">DICE 2: <b>${dice[1]}</b></span>
      <span class="dice-total-pill">TOTAL: <b>${total}</b></span>
    </div>
    ${isDoubles ? `
      <div class="dice-doubles-callout">
        <span>🎲 DOUBLES! (${dice[0]}+${dice[1]}) — Bonus turn granted!</span>
      </div>` : ''}
  `;

  holder.appendChild(container);
}
