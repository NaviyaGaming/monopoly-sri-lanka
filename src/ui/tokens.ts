// ─── 3D isometric Sri Lankan token avatars ───────────────────────────────
// Ported from the author's design: each token is an SVG miniature on a 3D
// pedestal with gradient lighting, tinted by the player's seat colour.

import type { TokenKey } from '../engine/types';

export interface TokenAvatar {
  key: TokenKey;
  icon: string;
  sound: 'tuktuk' | 'dancer' | 'elephant' | 'train';
  names: { en: string; si: string; ta: string };
  svg: (color: string) => string;
}

export const TOKEN_AVATARS: Record<TokenKey, TokenAvatar> = {
  tuktuk: {
    key: 'tuktuk',
    icon: '🛺',
    sound: 'tuktuk',
    names: { en: 'Colombo Tuk-Tuk', si: 'කොළඹ ත්‍රිරෝද රථය', ta: 'கொழும்பு முச்சக்கரவண்டி' },
    svg: (color) => `
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-tuk" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fde68a"/>
            <stop offset="55%" stop-color="${color}"/>
            <stop offset="100%" stop-color="#064e3b"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-tuk)" stroke="#fef08a" stroke-width="1.2"/>
        <path d="M8,15 C8,9 26,9 27,15 L25,16 L9,16 Z" fill="#facc15" stroke="#78350f" stroke-width="1"/>
        <rect x="9" y="15" width="16" height="8" rx="2.5" fill="${color}" stroke="#ffffff" stroke-width="1"/>
        <rect x="19" y="16" width="5" height="4" rx="1" fill="#bae6fd"/>
        <circle cx="12" cy="24" r="3" fill="#1e293b" stroke="#f8fafc" stroke-width="1"/>
        <circle cx="24" cy="24" r="3" fill="#1e293b" stroke="#f8fafc" stroke-width="1"/>
        <circle cx="27" cy="20" r="1.5" fill="#fef08a"/>
      </svg>`,
  },
  dancer: {
    key: 'dancer',
    icon: '💃',
    sound: 'dancer',
    names: { en: 'Kandyan Dancer', si: 'උඩරට නැටුම් ශිල්පියා', ta: 'கண்டி நடனக் கலைஞர்' },
    svg: (color) => `
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-dan" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="55%" stop-color="${color}"/>
            <stop offset="100%" stop-color="#3b0764"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-dan)" stroke="#fef08a" stroke-width="1.2"/>
        <path d="M7,14 C8,5 28,5 29,14 L25,16 L11,16 Z" fill="#fbbf24" stroke="#fffbeb" stroke-width="1"/>
        <polygon points="18,4 15,11 21,11" fill="#ef4444" stroke="#fef08a" stroke-width="0.8"/>
        <circle cx="18" cy="14" r="3.5" fill="#d97706" stroke="#fff" stroke-width="0.8"/>
        <path d="M11,25 L14,17 L22,17 L25,25 Z" fill="#f8fafc" stroke="#ef4444" stroke-width="1.2"/>
        <circle cx="18" cy="20" r="2" fill="#ef4444"/>
      </svg>`,
  },
  elephant: {
    key: 'elephant',
    icon: '🐘',
    sound: 'elephant',
    names: { en: 'Ceylon Elephant', si: 'දළදා පෙරහැර හස්තියා', ta: 'இலங்கை யானை' },
    svg: (color) => `
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-ele" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="55%" stop-color="${color}"/>
            <stop offset="100%" stop-color="#0c4a6e"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-ele)" stroke="#fef08a" stroke-width="1.2"/>
        <rect x="13" y="7" width="8" height="5" rx="2" fill="#fbbf24" stroke="#fff" stroke-width="0.8"/>
        <ellipse cx="17" cy="18" rx="8" ry="6" fill="#475569" stroke="#e2e8f0" stroke-width="1"/>
        <path d="M12,13 L22,13 L21,19 L13,19 Z" fill="#dc2626" stroke="#fde047" stroke-width="1"/>
        <circle cx="24" cy="16" r="4.5" fill="#64748b" stroke="#f8fafc" stroke-width="0.8"/>
        <path d="M27,17 Q30,22 26,23" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M26,19 L30,18" stroke="#fef9c3" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
  },
  train: {
    key: 'train',
    icon: '🚂',
    sound: 'train',
    names: { en: 'Yal Devi Train', si: 'යාල් දේවි දුම්රිය', ta: 'யாழ் தேவி இரயில்' },
    svg: (color) => `
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-trn" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fecdd3"/>
            <stop offset="55%" stop-color="${color}"/>
            <stop offset="100%" stop-color="#881337"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-trn)" stroke="#fef08a" stroke-width="1.2"/>
        <rect x="8" y="13" width="19" height="10" rx="2.5" fill="${color}" stroke="#ffffff" stroke-width="1"/>
        <rect x="10" y="9" width="6" height="5" rx="1" fill="#0f172a" stroke="#fbbf24" stroke-width="0.8"/>
        <rect x="20" y="8" width="3.5" height="5" rx="1" fill="#334155"/>
        <rect x="8" y="18" width="19" height="2" fill="#facc15"/>
        <circle cx="12" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="18" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="24" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
      </svg>`,
  },
};
