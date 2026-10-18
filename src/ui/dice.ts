// ─── Realistic 3D Dice Renderer & Physics-feel Motion ─────────────────────
// Inspired by rich modern board games (Richup.io style).
// Features:
// - Isometric 3D perspective display with dynamic shadows & bevels
// - Indented dots (pips) with realistic specular highlights
// - True 3D tumbling physics (bounces, pitch/yaw/roll, arc toss, squash impact)
// - Double-six / doubles celebratory glow and particle pop
// - Interactive 3D hover tilt when it's the player's turn to roll
// - High-contrast readable pips (with Sri Lankan gem-red 1 & 4 accents)

let shown: [number, number] = [1, 6];
let isRolling = false;

// Pip positions on a 3x3 grid (1..9):
// 1 2 3
// 4 5 6
// 7 8 9
const PIPS: Record<number, number[]> = {
  1: [5],
  2: [3, 7],
  3: [3, 5, 7],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

// Target Euler rotations (x, y, z) that position face V squarely toward camera.
// Faces:
// 1: front  (0, 0, 0)
// 2: bottom (90, 0, 0)
// 3: right  (0, -90, 0)
// 4: left   (0, 90, 0)
// 5: top    (-90, 0, 0)
// 6: back   (0, 180, 0)
const FACE_ROTATIONS: Record<number, [number, number, number]> = {
  1: [0, 0, 0],
  2: [90, 0, 0],
  3: [0, -90, 0],
  4: [0, 90, 0],
  5: [-90, 0, 0],
  6: [0, 180, 0],
};

function buildDie(dieId: number): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = `die-rig die-rig-${dieId}`;

  // Floor shadow that responds to bounce height
  const shadow = document.createElement('div');
  shadow.className = 'die-shadow';
  wrap.appendChild(shadow);

  const cube = document.createElement('div');
  cube.className = 'die-cube-3d';

  for (let v = 1; v <= 6; v++) {
    const face = document.createElement('div');
    face.className = `die-face-3d face-${v}`;

    // Traditional red pip for 1 (and ruby accent for 4)
    const isRuby = v === 1 || v === 4;

    for (const p of PIPS[v]) {
      const pip = document.createElement('span');
      pip.className = `pip-3d${isRuby ? ' pip-ruby' : ''}`;
      const r = Math.ceil(p / 3);
      const c = ((p - 1) % 3) + 1;
      pip.style.gridRow = String(r);
      pip.style.gridColumn = String(c);
      face.appendChild(pip);
    }
    cube.appendChild(face);
  }

  wrap.appendChild(cube);
  return wrap;
}

/**
 * Animate a single die tumbling through 3D space with arc toss, spins, and impact settling.
 */
async function rollDie(dieRig: HTMLElement, targetValue: number, durationMs: number, dieIndex: number): Promise<void> {
  const cube = dieRig.querySelector<HTMLElement>('.die-cube-3d')!;
  const shadow = dieRig.querySelector<HTMLElement>('.die-shadow')!;
  const [baseX, baseY, baseZ] = FACE_ROTATIONS[targetValue];

  if (durationMs <= 0) {
    cube.style.transition = 'none';
    cube.style.transform = `rotateX(${baseX}deg) rotateY(${baseY}deg) rotateZ(${baseZ}deg)`;
    shadow.style.transform = 'scale(1)';
    shadow.style.opacity = '0.5';
    return;
  }

  // Tumble spins: 2 to 4 full revolutions plus natural variation between the two dice
  const spinsX = 360 * (2 + Math.floor(Math.random() * 2)) * (dieIndex === 0 ? 1 : -1);
  const spinsY = 360 * (2 + Math.floor(Math.random() * 2)) * (dieIndex === 0 ? 1 : -1);
  const spinsZ = 180 * (Math.random() > 0.5 ? 1 : -1);

  // Phase 1: Toss arc in CSS keyframes / transitions
  dieRig.classList.add('is-tossing');
  cube.style.transition = `transform ${durationMs}ms cubic-bezier(0.18, 0.89, 0.32, 1.15)`;
  cube.style.transform = `rotateX(${baseX + spinsX}deg) rotateY(${baseY + spinsY}deg) rotateZ(${baseZ + spinsZ}deg)`;

  shadow.style.transition = `transform ${durationMs}ms ease, opacity ${durationMs}ms ease`;
  shadow.style.transform = 'scale(0.65)';
  shadow.style.opacity = '0.2';

  await new Promise(r => setTimeout(r, durationMs * 0.75));
  shadow.style.transform = 'scale(1.15)';
  shadow.style.opacity = '0.7';

  await new Promise(r => setTimeout(r, durationMs * 0.25));
  dieRig.classList.remove('is-tossing');

  // Phase 2: Settle on precise target face without residual spin
  cube.style.transition = 'transform 180ms cubic-bezier(0.2, 1.2, 0.3, 1)';
  cube.style.transform = `rotateX(${baseX}deg) rotateY(${baseY}deg) rotateZ(${baseZ}deg)`;
  shadow.style.transform = 'scale(1)';
  shadow.style.opacity = '0.55';

  await new Promise(r => setTimeout(r, 190));
}

/**
 * Render or animate the 3D dice stage.
 */
export async function renderDice(
  holder: HTMLElement,
  roll: [number, number] | null,
  tumbleMs = 0,
): Promise<void> {
  if (roll) shown = [roll[0], roll[1]];

  // Clear previous stage
  holder.innerHTML = '';
  holder.className = 'dice-arena-3d';

  const d1 = buildDie(1);
  const d2 = buildDie(2);
  holder.append(d1, d2);

  const isDoubles = shown[0] === shown[1];

  if (tumbleMs > 0) {
    isRolling = true;
    holder.classList.add('rolling');

    // Give slight offset to second die for organic stagger
    await Promise.all([
      rollDie(d1, shown[0], tumbleMs, 0),
      rollDie(d2, shown[1], Math.round(tumbleMs * 1.05), 1),
    ]);

    isRolling = false;
    holder.classList.remove('rolling');

    if (isDoubles) {
      holder.classList.add('doubles-glow');
      setTimeout(() => holder.classList.remove('doubles-glow'), 1800);
    }
  } else {
    // Settle immediately on currently shown values
    await Promise.all([
      rollDie(d1, shown[0], 0, 0),
      rollDie(d2, shown[1], 0, 1),
    ]);
    if (isDoubles) {
      holder.classList.add('doubles-glow');
    }
  }
}
