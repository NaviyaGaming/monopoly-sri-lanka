// ─── Smooth Beautiful Dice Renderer (Richup.io Style) ───────────────────────
// Features:
// - Tactile porcelain rounded-square dice with subtle bevel & drop shadows
// - Deep engraved pips with authentic casino ruby-red dot for 1
// - Organic natural resting angles (-2.5° and +3°)
// - Rapid tumbling animation with dynamic face cycling and physical bounce
// - Elegant doubles celebratory ring (no blown-out wash)
// - Interactive hover lift on player's turn

let shown: [number, number] = [3, 4];
let isRolling = false;

// Pip positions on a 3x3 grid (row, col)
const PIP_CONFIG: Record<number, Array<[number, number]>> = {
  1: [[2, 2]],
  2: [[1, 3], [3, 1]],
  3: [[1, 3], [2, 2], [3, 1]],
  4: [[1, 1], [1, 3], [3, 1], [3, 3]],
  5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
  6: [[1, 1], [1, 3], [2, 1], [2, 3], [3, 1], [3, 3]],
};

function createDieFace(value: number): HTMLElement {
  const die = document.createElement('div');
  die.className = 'richup-die';
  die.dataset.val = String(value);

  const pips = PIP_CONFIG[value] || PIP_CONFIG[1];
  const isOne = value === 1;

  for (const [r, c] of pips) {
    const pip = document.createElement('span');
    pip.className = `die-pip${isOne ? ' pip-red' : ''}`;
    pip.style.gridRow = String(r);
    pip.style.gridColumn = String(c);
    die.appendChild(pip);
  }

  return die;
}

function updateDieElement(dieEl: HTMLElement, value: number): void {
  dieEl.innerHTML = '';
  dieEl.dataset.val = String(value);

  const pips = PIP_CONFIG[value] || PIP_CONFIG[1];
  const isOne = value === 1;

  for (const [r, c] of pips) {
    const pip = document.createElement('span');
    pip.className = `die-pip${isOne ? ' pip-red' : ''}`;
    pip.style.gridRow = String(r);
    pip.style.gridColumn = String(c);
    dieEl.appendChild(pip);
  }
}

export async function renderDice(
  holder: HTMLElement,
  roll: [number, number] | null,
  tumbleMs = 0,
): Promise<void> {
  if (roll) shown = [roll[0], roll[1]];

  // If rolling is in progress, avoid double trigger
  if (isRolling && tumbleMs > 0) return;

  holder.innerHTML = '';
  holder.className = 'dice-row richup-dice-stage';

  // Wrapper for Die 1 with shadow
  const wrap1 = document.createElement('div');
  wrap1.className = 'die-wrapper die-1';
  const shadow1 = document.createElement('div');
  shadow1.className = 'die-floor-shadow';
  const die1 = createDieFace(shown[0]);
  wrap1.append(shadow1, die1);

  // Wrapper for Die 2 with shadow
  const wrap2 = document.createElement('div');
  wrap2.className = 'die-wrapper die-2';
  const shadow2 = document.createElement('div');
  shadow2.className = 'die-floor-shadow';
  const die2 = createDieFace(shown[1]);
  wrap2.append(shadow2, die2);

  holder.append(wrap1, wrap2);

  const isDoubles = shown[0] === shown[1];

  if (tumbleMs > 0) {
    isRolling = true;
    holder.classList.add('is-rolling');
    die1.classList.add('rolling-tumble-1');
    die2.classList.add('rolling-tumble-2');

    // Rapid face cycling during roll
    const intervalTime = 50;
    const steps = Math.floor(tumbleMs / intervalTime);
    let stepCount = 0;

    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        stepCount++;
        const temp1 = Math.floor(Math.random() * 6) + 1;
        const temp2 = Math.floor(Math.random() * 6) + 1;
        updateDieElement(die1, temp1);
        updateDieElement(die2, temp2);

        if (stepCount >= steps) {
          clearInterval(interval);
          updateDieElement(die1, shown[0]);
          updateDieElement(die2, shown[1]);
          resolve();
        }
      }, intervalTime);
    });

    // Impact settle bounce
    die1.classList.remove('rolling-tumble-1');
    die2.classList.remove('rolling-tumble-2');
    die1.classList.add('settle-bounce');
    die2.classList.add('settle-bounce');

    setTimeout(() => {
      die1.classList.remove('settle-bounce');
      die2.classList.remove('settle-bounce');
      holder.classList.remove('is-rolling');
      isRolling = false;

      if (isDoubles) {
        holder.classList.add('doubles-ring');
        setTimeout(() => holder.classList.remove('doubles-ring'), 2200);
      }
    }, 280);
  } else {
    if (isDoubles) {
      holder.classList.add('doubles-ring');
    }
  }
}
