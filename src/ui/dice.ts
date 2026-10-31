// ─── Realistic 3D Six-Sided Casino Dice Engine (RICHUP Style) ──────────────
// Features:
// - Physical 3D CSS cubes with 6 realistic faces (1 to 6)
// - Opposite faces sum to 7 (1 vs 6, 2 vs 5, 3 vs 4)
// - Precision pips with luxury casino ruby-red center dot for 1
// - Multi-axis tumbling, elevation lift, and dynamic floor shadows
// - Natural organic resting tilts (-3.5° and +4°)
// - Elastic impact bounce with synthesized landing thud
// - Doubles celebratory ring and prominent result display

import { sfx } from './fx';

let shown: [number, number] = [3, 4];
let isRolling = false;

export function isDiceRolling(): boolean {
  return isRolling;
}

export function getCurrentRoll(): [number, number] {
  return [shown[0], shown[1]];
}

// Pip positions on a 3x3 grid (row, col)
const PIP_CONFIG: Record<number, Array<[number, number]>> = {
  1: [[2, 2]],
  2: [[1, 3], [3, 1]],
  3: [[1, 3], [2, 2], [3, 1]],
  4: [[1, 1], [1, 3], [3, 1], [3, 3]],
  5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
  6: [[1, 1], [1, 3], [2, 1], [2, 3], [3, 1], [3, 3]],
};

// Target rotations to bring face N front and center to the player
const FACE_ROTATIONS: Record<number, { x: number; y: number }> = {
  1: { x: 0, y: 0 },
  6: { x: 0, y: 180 },
  2: { x: -90, y: 0 },
  5: { x: 90, y: 0 },
  3: { x: 0, y: -90 },
  4: { x: 0, y: 90 },
};

function createFaceElement(value: number): HTMLElement {
  const face = document.createElement('div');
  face.className = `die-face face-${value}`;
  face.dataset.face = String(value);

  const pips = PIP_CONFIG[value] || PIP_CONFIG[1];
  const isOne = value === 1;

  for (const [r, c] of pips) {
    const pip = document.createElement('span');
    pip.className = `die-pip${isOne ? ' pip-red' : ''}`;
    pip.style.gridRow = String(r);
    pip.style.gridColumn = String(c);
    face.appendChild(pip);
  }

  return face;
}

function create3DCube(): HTMLElement {
  const cube = document.createElement('div');
  cube.className = 'die-3d-cube';

  // Build all 6 physical faces
  for (let val = 1; val <= 6; val++) {
    cube.appendChild(createFaceElement(val));
  }

  return cube;
}

export async function renderDice(
  holder: HTMLElement,
  roll: [number, number] | null,
  tumbleMs = 0,
): Promise<void> {
  if (roll) shown = [roll[0], roll[1]];

  // If rolling is actively underway, prevent duplicate invocations
  if (isRolling && tumbleMs > 0) return;

  holder.innerHTML = '';
  holder.className = 'dice-row richup-dice-stage';

  // Wrapper 1
  const wrap1 = document.createElement('div');
  wrap1.className = 'die-3d-wrapper die-1';
  const shadow1 = document.createElement('div');
  shadow1.className = 'die-floor-shadow';
  const cube1 = create3DCube();
  wrap1.append(shadow1, cube1);

  // Wrapper 2
  const wrap2 = document.createElement('div');
  wrap2.className = 'die-3d-wrapper die-2';
  const shadow2 = document.createElement('div');
  shadow2.className = 'die-floor-shadow';
  const cube2 = create3DCube();
  wrap2.append(shadow2, cube2);

  const scene = document.createElement('div');
  scene.className = 'dice-3d-scene';
  scene.append(wrap1, wrap2);

  holder.appendChild(scene);

  const rot1 = FACE_ROTATIONS[shown[0]] || { x: 0, y: 0 };
  const rot2 = FACE_ROTATIONS[shown[1]] || { x: 0, y: 0 };
  const isDoubles = shown[0] === shown[1];

  if (tumbleMs > 0) {
    isRolling = true;
    holder.classList.add('is-rolling');

    // Lift cubes and floor shadows into 3D roll state
    shadow1.classList.add('shadow-rolling');
    shadow2.classList.add('shadow-rolling');

    // Dynamic 3D spinning transitions
    const spinX1 = 720;
    const spinY1 = 1080;
    const spinX2 = -720;
    const spinY2 = 1440;

    cube1.style.transition = `transform ${tumbleMs * 0.85}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    cube2.style.transition = `transform ${tumbleMs * 0.85}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

    // Initial launch & multi-spin
    cube1.style.transform = `translateY(-38px) translateZ(30px) rotateX(${spinX1 + rot1.x}deg) rotateY(${spinY1 + rot1.y}deg) rotateZ(-180deg)`;
    cube2.style.transform = `translateY(-42px) translateZ(32px) rotateX(${spinX2 + rot2.x}deg) rotateY(${spinY2 + rot2.y}deg) rotateZ(180deg)`;

    // Settle down to table with realistic deceleration
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        cube1.style.transition = 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)';
        cube2.style.transition = 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)';

        cube1.style.transform = `translateY(0) rotateX(${rot1.x}deg) rotateY(${rot1.y}deg) rotateZ(-3.5deg)`;
        cube2.style.transform = `translateY(0) rotateX(${rot2.x}deg) rotateY(${rot2.y}deg) rotateZ(4deg)`;

        shadow1.classList.remove('shadow-rolling');
        shadow2.classList.remove('shadow-rolling');

        sfx('dice_land');

        setTimeout(() => {
          holder.classList.remove('is-rolling');
          isRolling = false;

          if (isDoubles) {
            holder.classList.add('doubles-ring');
            sfx('fanfare');
            setTimeout(() => holder.classList.remove('doubles-ring'), 2200);
          }
          resolve();
        }, 300);
      }, tumbleMs * 0.85);
    });
  } else {
    // Resting position
    cube1.style.transform = `rotateX(${rot1.x}deg) rotateY(${rot1.y}deg) rotateZ(-3.5deg)`;
    cube2.style.transform = `rotateX(${rot2.x}deg) rotateY(${rot2.y}deg) rotateZ(4deg)`;
    if (isDoubles) {
      holder.classList.add('doubles-ring');
    }
  }

  // Append Prominent Dice Result Banner
  renderResultDisplay(holder, shown, isDoubles, tumbleMs > 0);
}

function renderResultDisplay(
  holder: HTMLElement,
  dice: [number, number],
  isDoubles: boolean,
  animated = false,
): void {
  // Remove existing result banner if present
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
