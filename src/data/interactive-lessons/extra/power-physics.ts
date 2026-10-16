import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Power (AP Physics 1).
 * Registry key / DB Topic.slug: 'power-physics'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / input-boxes / dropdown-select) →
 * worked examples with full step-by-step math → Exit Quiz.
 * Arc: what power is → P = W/t and the watt → P = Fv (instantaneous power) →
 * power and kinematics → energy graphs & negative power → power on inclines and against
 * friction → mixed mastery + Exit Quiz. (Efficiency and kWh/hp conversions were removed:
 * not in the AP Physics 1 CED, Topic 3.5.)
 * Uses g = 9.8 m/s^2 throughout (AP Physics 1 convention; values pre-checked).
 * LaTeX uses DOUBLED backslashes (template-literal strings); inline $...$, display $$...$$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow1-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 1 of 7 — What Power Means**

---

### Topics in This Part

| Section |
|---------|
| Energy vs. Power — the Key Distinction |
| The Definition: $P = \\dfrac{W}{t}$ |
| The Watt and Its Size |

> 🔑 **Key Concept:** **Work** (or energy) tells you *how much* gets transferred. **Power** tells you *how fast* it gets transferred. Two machines can do the exact same job — the more powerful one just does it sooner.`,
      },
      {
        id: 'pow1-energy-vs-power',
        type: 'text' as const,
        content: `## Energy vs. Power

Imagine two elevators that each lift a $500\\ \\text{kg}$ load up the same $20\\ \\text{m}$ shaft.

- Both do the **same work** on the load — the same energy is transferred.
- But one takes $10\\ \\text{s}$ and the other takes $40\\ \\text{s}$.

The fast elevator isn't doing *more* work — it's doing the **same work in less time**. That "work per time" is exactly what **power** measures.

$$\\boxed{P = \\frac{W}{t}}$$

where $W$ is the work done (in joules, $\\text{J}$) and $t$ is the time interval (in seconds, $\\text{s}$).

> 💡 Because energy and work share the same unit (the joule), you'll also see power written as $P = \\dfrac{\\Delta E}{t}$ — energy transferred per unit time. They're the same formula.`,
      },
      {
        id: 'pow1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two cranes lift identical crates to the same height. Crane A finishes in 5 s; Crane B finishes in 20 s. Which statement is correct?',
              options: [
                'Crane A does more work, and Crane A is more powerful.',
                'They do the same work, but Crane A is more powerful.',
                'They do the same work, and they have the same power.',
                'Crane B does more work because it takes longer.',
              ],
              correctAnswer: 1,
              explanation: 'Same crate, same height ⇒ same work (same energy transferred). Power is work ÷ time, and Crane A does that same work in less time, so Crane A has the greater power.',
            },
            {
              question: 'Power is best described as the rate at which:',
              options: [
                'force is applied',
                'energy is transferred or work is done',
                'distance is covered',
                'mass is moved',
              ],
              correctAnswer: 1,
              explanation: 'Power is energy (or work) per unit time — the rate of energy transfer. It is not a force, a distance, or a mass.',
            },
          ],
        },
      },
      {
        id: 'pow1-watt',
        type: 'text' as const,
        content: `## The Watt

The SI unit of power is the **watt** ($\\text{W}$), named for James Watt:

$$1\\ \\text{watt} = 1\\ \\frac{\\text{joule}}{\\text{second}} = 1\\ \\frac{\\text{J}}{\\text{s}}$$

So a $60\\ \\text{W}$ light bulb converts $60\\ \\text{J}$ of electrical energy every second.

| Device | Typical power |
|--------|---------------|
| LED bulb | $\\sim 10\\ \\text{W}$ |
| Human at rest | $\\sim 100\\ \\text{W}$ |
| Microwave oven | $\\sim 1000\\ \\text{W} = 1\\ \\text{kW}$ |
| Compact car engine | $\\sim 75{,}000\\ \\text{W} = 75\\ \\text{kW}$ |

> ⚠️ **Watch the symbols:** $W$ (italic) is *work* in joules, while $\\text{W}$ (upright) is the unit *watt*. Context tells them apart — but never confuse "the work was $W$" with "the unit is the watt."`,
      },
      {
        id: 'pow1-first-calc',
        type: 'input-boxes' as const,
        content: `**First Calculations** 🧮

Use $P = \\dfrac{W}{t}$.

**1)** A motor does $1200\\ \\text{J}$ of work in $4\\ \\text{s}$. Power $= \\,?\\ \\text{W}$
**2)** A pump transfers $9000\\ \\text{J}$ of energy in $30\\ \\text{s}$. Power $= \\,?\\ \\text{W}$
**3)** A $50\\ \\text{W}$ bulb runs for $20\\ \\text{s}$. Energy used $= \\,?\\ \\text{J}$  *(rearrange: $W = Pt$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['300', '300', '1000'],
          hint1: '$P = W/t = 1200/4 = 300\\ \\text{W}$.',
          hint2: '$P = 9000/30 = 300\\ \\text{W}$ — same power, just larger numbers.',
          hint3: 'Rearrange $P = W/t$ to $W = Pt = 50 \\times 20 = 1000\\ \\text{J}$.',
          explanation: '1) $1200/4 = 300\\ \\text{W}$.  2) $9000/30 = 300\\ \\text{W}$.  3) $W = Pt = 50\\cdot 20 = 1000\\ \\text{J}$.',
        },
      },
      {
        id: 'pow1-units-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Units** 🔽

Match each quantity to its correct SI unit.`,
        exercise: {
          dropdowns: [
            { label: 'Power is measured in:', options: ['watts ($\\text{W}$)', 'joules ($\\text{J}$)', 'newtons ($\\text{N}$)', 'seconds ($\\text{s}$)'] },
            { label: 'Work (or energy) is measured in:', options: ['joules ($\\text{J}$)', 'watts ($\\text{W}$)', 'newtons ($\\text{N}$)', 'meters ($\\text{m}$)'] },
            { label: 'One watt equals:', options: ['$1\\ \\text{J/s}$', '$1\\ \\text{J}\\cdot\\text{s}$', '$1\\ \\text{N/s}$', '$1\\ \\text{s/J}$'] },
          ],
          correctAnswers: ['watts ($\\text{W}$)', 'joules ($\\text{J}$)', '$1\\ \\text{J/s}$'],
          hint1: 'Power is the rate of energy transfer; its SI unit is the watt.',
          hint2: 'Work and energy share the joule.',
          hint3: 'A watt is one joule per second: $1\\ \\text{W} = 1\\ \\text{J/s}$.',
          explanation: 'Power is in watts, energy/work is in joules, and $1\\ \\text{W} = 1\\ \\text{J/s}$.',
        },
      },
      {
        id: 'pow1-wrapup',
        type: 'text' as const,
        content: `## What You've Got So Far

You can now (1) tell power apart from energy, (2) use $P = \\dfrac{W}{t}$, and (3) read the watt as joules per second.

> 🔑 **Carry this forward:** Every power problem is just "find the energy transferred, then divide by the time." In Part 2 we'll connect $W$ to the work you already know — $W = Fd$ — to build the most-used power formulas in AP Physics 1.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow2-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 2 of 7 — Power From Work: $P = \\dfrac{Fd}{t}$**

---

> 🔑 **The Idea:** Work done by a constant force along the motion is $W = Fd$. Drop that into $P = \\dfrac{W}{t}$ and you get the second master formula for power.`,
      },
      {
        id: 'pow2-derivation',
        type: 'text' as const,
        content: `## Building the Formula

Start with the two definitions you know:

$$W = Fd \\qquad\\text{and}\\qquad P = \\frac{W}{t}$$

Substitute the first into the second:

$$\\boxed{P = \\frac{W}{t} = \\frac{Fd}{t}}$$

Here $F$ is the force component **along the direction of motion**, $d$ is the displacement, and $t$ is the time.

### Worked Example: Lifting a Box

You lift a $15\\ \\text{kg}$ box straight up $2.0\\ \\text{m}$ in $3.0\\ \\text{s}$ at constant speed. Find your power output.

**Step 1 — Find the force.** At constant speed the lifting force equals the weight:
$$F = mg = (15)(9.8) = 147\\ \\text{N}$$

**Step 2 — Find the work.**
$$W = Fd = (147)(2.0) = 294\\ \\text{J}$$

**Step 3 — Find the power.**
$$P = \\frac{W}{t} = \\frac{294}{3.0} = 98\\ \\text{W}$$

> 💡 When you lift at **constant velocity**, the work you do equals the gravitational potential energy gained, $\\Delta U = mgh$. That's why $W = mgh$ shows up so often in power problems.`,
      },
      {
        id: 'pow2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

A $2.0\\ \\text{kg}$ object is lifted $5.0\\ \\text{m}$ in $4.0\\ \\text{s}$ at constant speed. Choose what happens at each stage. *(Use $g = 9.8\\ \\text{m/s}^2$.)*`,
        exercise: {
          dropdowns: [
            { label: 'Lifting force $F = mg$:', options: ['$19.6\\ \\text{N}$', '$2.0\\ \\text{N}$', '$9.8\\ \\text{N}$', '$98\\ \\text{N}$'] },
            { label: 'Work done $W = Fd$:', options: ['$98\\ \\text{J}$', '$19.6\\ \\text{J}$', '$39.2\\ \\text{J}$', '$10\\ \\text{J}$'] },
            { label: 'Power $P = W/t$:', options: ['$24.5\\ \\text{W}$', '$98\\ \\text{W}$', '$4.9\\ \\text{W}$', '$392\\ \\text{W}$'] },
          ],
          correctAnswers: ['$19.6\\ \\text{N}$', '$98\\ \\text{J}$', '$24.5\\ \\text{W}$'],
          hint1: '$F = mg = (2.0)(9.8) = 19.6\\ \\text{N}$.',
          hint2: '$W = Fd = (19.6)(5.0) = 98\\ \\text{J}$.',
          hint3: '$P = W/t = 98/4.0 = 24.5\\ \\text{W}$.',
          explanation: '$F = mg = 19.6\\ \\text{N}$, then $W = Fd = 98\\ \\text{J}$, then $P = W/t = 98/4.0 = 24.5\\ \\text{W}$.',
        },
      },
      {
        id: 'pow2-horizontal',
        type: 'text' as const,
        content: `## Horizontal Pushes, Too

The formula isn't just for lifting. Any force doing work over a distance works:

### Worked Example: Pushing a Crate

You push a crate with a steady $80\\ \\text{N}$ horizontal force, sliding it $12\\ \\text{m}$ across a floor in $6.0\\ \\text{s}$.

$$W = Fd = (80)(12) = 960\\ \\text{J}$$
$$P = \\frac{W}{t} = \\frac{960}{6.0} = 160\\ \\text{W}$$

> ⚠️ **Force must be along the motion.** If a force is perpendicular to the displacement (like the normal force on a flat floor, or gravity on a horizontal slide), it does **zero work** and contributes **zero power**. Only the component of force *in the direction of motion* counts.`,
      },
      {
        id: 'pow2-drill',
        type: 'input-boxes' as const,
        content: `**Power From Force and Distance** 🧮

Use $P = \\dfrac{Fd}{t}$. *(Use $g = 9.8\\ \\text{m/s}^2$ where needed.)*

**1)** A $200\\ \\text{N}$ force pushes a box $10\\ \\text{m}$ in $5.0\\ \\text{s}$. Power $= \\,?\\ \\text{W}$
**2)** A crane lifts a $100\\ \\text{kg}$ beam $6.0\\ \\text{m}$ in $12\\ \\text{s}$ at constant speed. Power $= \\,?\\ \\text{W}$
**3)** A $400\\ \\text{N}$ force does work over $15\\ \\text{m}$ in $10\\ \\text{s}$. Power $= \\,?\\ \\text{W}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['400', '490', '600'],
          hint1: '$W = (200)(10) = 2000\\ \\text{J}$, so $P = 2000/5.0 = 400\\ \\text{W}$.',
          hint2: 'Force $= mg = (100)(9.8) = 980\\ \\text{N}$; $W = (980)(6.0) = 5880\\ \\text{J}$; $P = 5880/12 = 490\\ \\text{W}$.',
          hint3: '$W = (400)(15) = 6000\\ \\text{J}$, so $P = 6000/10 = 600\\ \\text{W}$.',
          explanation: '1) $P = (200)(10)/5.0 = 400\\ \\text{W}$.  2) $F = mg = 980\\ \\text{N}$, $P = (980)(6.0)/12 = 490\\ \\text{W}$.  3) $P = (400)(15)/10 = 600\\ \\text{W}$.',
        },
      },
      {
        id: 'pow2-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $10\\ \\text{kg}$ box is carried horizontally across a level floor at constant speed. How much power does the carrying (upward) force deliver to the box?',
              options: [
                'Zero, because the upward force is perpendicular to the horizontal motion and does no work.',
                '$98\\ \\text{W}$, because $F = mg$ always does work.',
                'It depends on how fast the person walks.',
                'Exactly $mg$ times the distance.',
              ],
              correctAnswer: 0,
              explanation: 'The support force is vertical while the displacement is horizontal. A force perpendicular to the motion does zero work, so it delivers zero power — no matter the speed.',
            },
            {
              question: 'A $300\\ \\text{N}$ force pushes an object $9.0\\ \\text{m}$ along the direction of the force in $3.0\\ \\text{s}$. The power is:',
              options: ['$300\\ \\text{W}$', '$900\\ \\text{W}$', '$2700\\ \\text{W}$', '$100\\ \\text{W}$'],
              correctAnswer: 1,
              explanation: '$W = Fd = (300)(9.0) = 2700\\ \\text{J}$, so $P = W/t = 2700/3.0 = 900\\ \\text{W}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow3-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 3 of 7 — Power From Speed: $P = Fv$**

---

> 🔑 **The Shortcut:** When something moves at a steady speed against a steady force, you don't need to track distance and time separately — you can get power straight from force and velocity: $P = Fv$.`,
      },
      {
        id: 'pow3-derivation',
        type: 'text' as const,
        content: `## Deriving $P = Fv$

Start from $P = \\dfrac{Fd}{t}$ and group the $d$ and $t$ together:

$$P = \\frac{Fd}{t} = F \\cdot \\frac{d}{t}$$

But $\\dfrac{d}{t}$ is just the speed $v$. So:

$$\\boxed{P = Fv}$$

This is **instantaneous power** when $v$ is the speed at a single instant, and **average power** when $v$ is the average speed.

| Symbol | Meaning | Unit |
|--------|---------|------|
| $P$ | power | $\\text{W}$ |
| $F$ | force along the motion | $\\text{N}$ |
| $v$ | speed | $\\text{m/s}$ |

> 💡 Check the units: $\\text{N}\\cdot\\dfrac{\\text{m}}{\\text{s}} = \\dfrac{\\text{N}\\cdot\\text{m}}{\\text{s}} = \\dfrac{\\text{J}}{\\text{s}} = \\text{W}$. ✓ Everything is consistent.`,
      },
      {
        id: 'pow3-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A car drives at a constant speed on a flat road. The engine provides a forward force that exactly balances air drag. If the car now drives faster (still at constant speed) and drag increases, what happens to the power needed?',
              options: [
                'Power stays the same because speed is constant.',
                'Power increases, because both $F$ and $v$ are larger in $P = Fv$.',
                'Power decreases because less time is needed.',
                'Power becomes zero at constant velocity.',
              ],
              correctAnswer: 1,
              explanation: 'At constant velocity the net force is zero, but the engine still does work against drag. In $P = Fv$, a larger drag force $F$ and a larger speed $v$ both push the required power up.',
            },
            {
              question: 'A tractor pulls a plow with a steady $5000\\ \\text{N}$ force at $2\\ \\text{m/s}$. Its power output is:',
              options: ['$2500\\ \\text{W}$', '$5000\\ \\text{W}$', '$10{,}000\\ \\text{W}$', '$10{,}000\\ \\text{J}$'],
              correctAnswer: 2,
              explanation: '$P = Fv = (5000)(2) = 10{,}000\\ \\text{W}$. The answer is a power, so its unit is the watt, not the joule.',
            },
          ],
        },
      },
      {
        id: 'pow3-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — Cruising Car

A car's engine pushes it forward with $1500\\ \\text{N}$ while it cruises at a steady $25\\ \\text{m/s}$.

$$P = Fv = (1500)(25) = 37{,}500\\ \\text{W} = 37.5\\ \\text{kW}$$

### Example 2 — Solve for Force

A $20{,}000\\ \\text{W}$ motor drives a conveyor belt at $4.0\\ \\text{m/s}$. What force does it apply?

Rearrange $P = Fv$ to $F = \\dfrac{P}{v}$:

$$F = \\frac{20{,}000}{4.0} = 5000\\ \\text{N}$$

> ⚠️ **Slower means stronger.** For a *fixed* power, $F = \\dfrac{P}{v}$ means force and speed trade off. That's why cars shift to low gear (low speed, high force) to climb a steep hill — the engine power is capped, so the only way to get more force is to go slower.`,
      },
      {
        id: 'pow3-drill',
        type: 'input-boxes' as const,
        content: `**Using $P = Fv$** 🧮

**1)** A motor applies $600\\ \\text{N}$ to move a load at $3.0\\ \\text{m/s}$. Power $= \\,?\\ \\text{W}$
**2)** A $4500\\ \\text{W}$ engine moves a cart at $9.0\\ \\text{m/s}$. Force $= \\,?\\ \\text{N}$  *(use $F = P/v$)*
**3)** A $2400\\ \\text{W}$ winch pulls with $800\\ \\text{N}$. Speed $= \\,?\\ \\text{m/s}$  *(use $v = P/F$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1800', '500', '3'],
          hint1: '$P = Fv = (600)(3.0) = 1800\\ \\text{W}$.',
          hint2: '$F = P/v = 4500/9.0 = 500\\ \\text{N}$.',
          hint3: '$v = P/F = 2400/800 = 3\\ \\text{m/s}$.',
          explanation: '1) $P = (600)(3.0) = 1800\\ \\text{W}$.  2) $F = 4500/9.0 = 500\\ \\text{N}$.  3) $v = 2400/800 = 3\\ \\text{m/s}$.',
        },
      },
      {
        id: 'pow3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Formula** 🔽

For each situation, choose the most direct power formula.`,
        exercise: {
          dropdowns: [
            { label: 'You know the work done and the time:', options: ['$P = W/t$', '$P = Fv$', '$P = Fd$', '$P = mgh$'] },
            { label: 'You know the steady force and the speed:', options: ['$P = Fv$', '$P = W/t$', '$P = mg$', '$P = \\tfrac{1}{2}mv^2$'] },
            { label: 'You know force, distance, and time (no speed given):', options: ['$P = Fd/t$', '$P = Fv$', '$P = mgh$', '$P = W$'] },
          ],
          correctAnswers: ['$P = W/t$', '$P = Fv$', '$P = Fd/t$'],
          hint1: 'Work over time is the basic definition: $P = W/t$.',
          hint2: 'Force times speed gives power directly: $P = Fv$.',
          hint3: 'With force, distance, and time but no speed, use $P = Fd/t$ (which equals $Fv$ since $v = d/t$).',
          explanation: 'All three are the same relationship written for the quantities you happen to know: $P = W/t = Fd/t = Fv$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow4-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 4 of 7 — Power and Kinematics**

---

> 🔑 **The Connection:** When an object speeds up, work goes into **kinetic energy**. Average power is then the change in kinetic energy divided by the time it took.`,
      },
      {
        id: 'pow4-ke',
        type: 'text' as const,
        content: `## Power From Kinetic Energy

By the **work-energy theorem**, the net work done on an object equals its change in kinetic energy:

$$W_{\\text{net}} = \\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2$$

Divide by the time and you get average power:

$$\\boxed{P_{\\text{avg}} = \\frac{\\Delta KE}{t}}$$

### Worked Example: Accelerating a Cart

A $4.0\\ \\text{kg}$ cart starts from rest and reaches $6.0\\ \\text{m/s}$ in $3.0\\ \\text{s}$. Find the average power delivered.

**Step 1 — Change in kinetic energy** (starts from rest, so $KE_i = 0$):
$$\\Delta KE = \\tfrac{1}{2}(4.0)(6.0)^2 - 0 = \\tfrac{1}{2}(4.0)(36) = 72\\ \\text{J}$$

**Step 2 — Average power:**
$$P_{\\text{avg}} = \\frac{\\Delta KE}{t} = \\frac{72}{3.0} = 24\\ \\text{W}$$

> 💡 This is **average** power. The *instantaneous* power at the end (when $v = 6.0\\ \\text{m/s}$) is larger, because at higher speed $P = Fv$ is bigger even though the force is the same.`,
      },
      {
        id: 'pow4-drill1',
        type: 'input-boxes' as const,
        content: `**Power From $\\Delta KE$** 🧮

Use $P_{\\text{avg}} = \\dfrac{\\Delta KE}{t}$ with $\\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2$.

**1)** A $2.0\\ \\text{kg}$ ball accelerates from rest to $10\\ \\text{m/s}$ in $5.0\\ \\text{s}$.
&nbsp;&nbsp;&nbsp;$\\Delta KE = \\,?\\ \\text{J}$
**2)** Same ball: average power $= \\,?\\ \\text{W}$
**3)** A $1000\\ \\text{kg}$ car goes from rest to $20\\ \\text{m/s}$ in $8.0\\ \\text{s}$. Average power $= \\,?\\ \\text{W}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '20', '25000'],
          hint1: '$\\Delta KE = \\tfrac{1}{2}(2.0)(10)^2 - 0 = \\tfrac{1}{2}(2.0)(100) = 100\\ \\text{J}$.',
          hint2: '$P = \\Delta KE/t = 100/5.0 = 20\\ \\text{W}$.',
          hint3: '$\\Delta KE = \\tfrac{1}{2}(1000)(20)^2 = 200{,}000\\ \\text{J}$; $P = 200{,}000/8.0 = 25{,}000\\ \\text{W}$.',
          explanation: '1) $\\Delta KE = \\tfrac{1}{2}(2.0)(100) = 100\\ \\text{J}$.  2) $P = 100/5.0 = 20\\ \\text{W}$.  3) $\\Delta KE = \\tfrac{1}{2}(1000)(400) = 200{,}000\\ \\text{J}$, so $P = 200{,}000/8.0 = 25{,}000\\ \\text{W}$.',
        },
      },
      {
        id: 'pow4-instant',
        type: 'text' as const,
        content: `## Average vs. Instantaneous Power

This trips students up, so let's nail it down:

| | Average power | Instantaneous power |
|---|---|---|
| Formula | $P_{\\text{avg}} = \\dfrac{W}{t} = \\dfrac{\\Delta KE}{t}$ | $P = Fv$ (with $v$ at one instant) |
| Time | over a whole interval | at a single moment |
| Use when | total energy & total time known | force & current speed known |

### Worked Example: Both at Once

A constant $50\\ \\text{N}$ force accelerates a cart. At the moment the cart is moving at $2.0\\ \\text{m/s}$, the **instantaneous** power is:

$$P = Fv = (50)(2.0) = 100\\ \\text{W}$$

Later, when the cart reaches $8.0\\ \\text{m/s}$, the same force delivers:

$$P = Fv = (50)(8.0) = 400\\ \\text{W}$$

> ⚠️ Same force, four times the power — because power depends on speed, not just force. A constant force does **not** mean constant power.`,
      },
      {
        id: 'pow4-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A constant net force pushes an object that starts from rest. As the object speeds up, the instantaneous power delivered by that force:',
              options: [
                'stays constant, because the force is constant',
                'increases, because $P = Fv$ and $v$ keeps growing',
                'decreases, because the object needs less push',
                'is zero until the object reaches top speed',
              ],
              correctAnswer: 1,
              explanation: 'With $F$ constant, $P = Fv$ grows in direct proportion to the speed. As $v$ rises from zero, the instantaneous power rises right along with it.',
            },
            {
              question: 'A $3.0\\ \\text{kg}$ object goes from rest to $4.0\\ \\text{m/s}$ in $2.0\\ \\text{s}$. Its average power is:',
              options: ['$6.0\\ \\text{W}$', '$12\\ \\text{W}$', '$24\\ \\text{W}$', '$48\\ \\text{W}$'],
              correctAnswer: 1,
              explanation: '$\\Delta KE = \\tfrac{1}{2}(3.0)(4.0)^2 = \\tfrac{1}{2}(3.0)(16) = 24\\ \\text{J}$. Then $P = \\Delta KE/t = 24/2.0 = 12\\ \\text{W}$.',
            },
          ],
        },
      },
      {
        id: 'pow4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Work Through the KE Power** 🔽

A $5.0\\ \\text{kg}$ cart starts from rest and reaches $4.0\\ \\text{m/s}$ in $2.0\\ \\text{s}$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Final kinetic energy $\\tfrac{1}{2}mv_f^2$:', options: ['$40\\ \\text{J}$', '$20\\ \\text{J}$', '$80\\ \\text{J}$', '$10\\ \\text{J}$'] },
            { label: 'Change in KE (started from rest):', options: ['$40\\ \\text{J}$', '$0\\ \\text{J}$', '$20\\ \\text{J}$', '$100\\ \\text{J}$'] },
            { label: 'Average power $\\Delta KE/t$:', options: ['$20\\ \\text{W}$', '$40\\ \\text{W}$', '$80\\ \\text{W}$', '$10\\ \\text{W}$'] },
          ],
          correctAnswers: ['$40\\ \\text{J}$', '$40\\ \\text{J}$', '$20\\ \\text{W}$'],
          hint1: '$\\tfrac{1}{2}(5.0)(4.0)^2 = \\tfrac{1}{2}(5.0)(16) = 40\\ \\text{J}$.',
          hint2: 'Starting from rest, $\\Delta KE = 40 - 0 = 40\\ \\text{J}$.',
          hint3: '$P = \\Delta KE/t = 40/2.0 = 20\\ \\text{W}$.',
          explanation: '$KE_f = \\tfrac{1}{2}(5.0)(16) = 40\\ \\text{J}$; from rest $\\Delta KE = 40\\ \\text{J}$; $P = 40/2.0 = 20\\ \\text{W}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow5-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 5 of 7 — Energy Graphs and Negative Power**

---

> 🔑 **The Big Idea:** Power is the rate at which a system's energy changes (EK 3.5.A.1). That makes it the **slope** of an energy-versus-time graph — and it means power can be **negative** when a force takes energy out of a system.`,
      },
      {
        id: 'pow5-graphs',
        type: 'text' as const,
        content: `## Power as a Slope

Because $P = \\dfrac{\\Delta E}{\\Delta t}$, a graph of a system's energy versus time encodes the power:

| Graph of $E$ vs. $t$ | What it means |
|------|---------|
| Straight line rising | Constant positive power (energy added at a steady rate) |
| Steeper straight line | Greater constant power |
| Curve getting steeper | Power increasing |
| Flat line | Zero power — energy not changing |
| Line falling | Negative power — energy leaving the system |

### Average vs. Instantaneous

- **Average power** over an interval is the total energy change divided by the time: the slope of the line joining the two endpoints (EK 3.5.A.2).
- **Instantaneous power** is the slope of the tangent at one instant. For a constant force along the motion it equals $Fv$ (EK 3.5.A.4).

### Worked Example: Reading a Graph

A cart's kinetic energy rises from $0$ to $90\\ \\text{J}$ in the first $3.0\\ \\text{s}$, then stays at $90\\ \\text{J}$.

- From $0$ to $3.0\\ \\text{s}$: $P_{\\text{avg}} = \\dfrac{90 - 0}{3.0} = 30\\ \\text{W}$.
- After $3.0\\ \\text{s}$: the graph is flat, so the net power delivered to the cart is $0$ — it moves at constant speed.`,
      },
      {
        id: 'pow5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Graph** 🔽

A block's kinetic energy is graphed against time. Choose what each feature tells you.`,
        exercise: {
          dropdowns: [
            { label: 'A straight, rising line:', options: ['constant positive power', 'increasing power', 'zero power', 'negative power'] },
            { label: 'A horizontal line:', options: ['zero power', 'constant positive power', 'maximum power', 'negative power'] },
            { label: 'A line that slopes downward:', options: ['negative power', 'zero power', 'increasing power', 'constant positive power'] },
          ],
          correctAnswers: ['constant positive power', 'zero power', 'negative power'],
          hint1: 'Power is the slope of energy versus time. A straight line has a constant slope.',
          hint2: 'A flat line has zero slope: the energy is not changing.',
          hint3: 'A falling line has a negative slope: energy is leaving the block.',
          explanation: 'The slope of energy versus time is the power: a constant positive slope is constant positive power, a flat line is zero power, and a downward slope is negative power (energy removed).',
        },
      },
      {
        id: 'pow5-negative',
        type: 'text' as const,
        content: `## Negative Power

Work can be positive, negative or zero (EK 3.2.A.2), so power can be too. The power delivered by a force is

$$P = Fv\\cos\\theta$$

where $\\theta$ is the angle between the force and the velocity.

| Situation | Angle | Power delivered by the force |
|-----------|-------|------------------------------|
| Engine force along the motion | $0°$ | positive: adds energy |
| Friction or brakes on a moving car | $180°$ | negative: removes energy |
| Normal force on a block sliding on a floor | $90°$ | zero |

### Worked Example: Braking

A car moves at $20\\ \\text{m/s}$ while its brakes exert a $6000\\ \\text{N}$ friction force backward. At that instant the brakes deliver

$$P = (6000)(20)\\cos 180° = -120{,}000\\ \\text{W}$$

The car's kinetic energy is dropping at $120\\ \\text{kW}$; that energy becomes thermal energy in the brakes.

### Worked Example: Gravity on a Falling Ball

A $0.50\\ \\text{kg}$ ball falls at $6.0\\ \\text{m/s}$. Gravity points along the velocity, so gravity delivers $P = mgv = (0.50)(9.8)(6.0) = 29.4\\ \\text{W}$ at that instant. On the way **up** at the same speed, gravity delivers $-29.4\\ \\text{W}$: kinetic energy is being converted into gravitational potential energy.`,
      },
      {
        id: 'pow5-drill',
        type: 'input-boxes' as const,
        content: `**Signed Power Drills** 🧮

Use $P = Fv\\cos\\theta$ and $g = 9.8\\ \\text{m/s}^2$. Include a minus sign when the power is negative.

**1)** Friction of $40\\ \\text{N}$ acts on a crate sliding at $3.0\\ \\text{m/s}$. Power delivered by friction $= \\,?\\ \\text{W}$
**2)** A $2.0\\ \\text{kg}$ rock falls at $5.0\\ \\text{m/s}$. Power delivered by gravity $= \\,?\\ \\text{W}$
**3)** A sled's kinetic energy drops from $500\\ \\text{J}$ to $200\\ \\text{J}$ in $6.0\\ \\text{s}$. Average power delivered to the sled $= \\,?\\ \\text{W}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-120', '98', '-50'],
          hint1: 'Friction points opposite the velocity, so $\\cos 180° = -1$: $P = -(40)(3.0)$.',
          hint2: 'Gravity points along the falling velocity: $P = mgv = (2.0)(9.8)(5.0)$.',
          hint3: '$P_{\\text{avg}} = \\Delta K/\\Delta t = (200 - 500)/6.0$.',
          explanation: '1) $P = (40)(3.0)\\cos 180° = -120\\ \\text{W}$.  2) $P = (2.0)(9.8)(5.0) = 98\\ \\text{W}$.  3) $P = -300/6.0 = -50\\ \\text{W}$; the sled loses energy at $50\\ \\text{J}$ each second.',
        },
      },
      {
        id: 'pow5-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A ball is thrown straight up. While it rises, the power delivered to it by gravity is:',
              options: [
                'positive, because gravity keeps acting on the ball',
                'negative, because gravity points opposite the velocity',
                'zero, because gravity is a conservative force',
                'positive, because the potential energy is increasing',
              ],
              correctAnswer: 1,
              explanation: 'Gravity points down while the ball moves up, so $\\theta = 180°$ and $P = mgv\\cos 180° < 0$. Gravity is removing kinetic energy from the ball and storing it as gravitational potential energy of the ball–Earth system.',
            },
            {
              question: 'A graph of a car\'s kinetic energy versus time is a curve that keeps getting steeper. The power delivered to the car is:',
              options: [
                'constant, because the energy keeps rising',
                'increasing, because the slope keeps growing',
                'decreasing, because the car is speeding up',
                'zero, because the curve is not a straight line',
              ],
              correctAnswer: 1,
              explanation: 'Power is the slope of energy versus time. A curve that gets steeper has a growing slope, so the power is increasing — as expected for a constant force, since $P = Fv$ grows with speed.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow6-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 6 of 7 — Power on Inclines and Against Friction**

---

> 🔑 **The Strategy:** For a machine moving something at **constant speed**, the net force is zero. Use a free-body diagram to find the force the machine must supply, then multiply by the speed: $P = Fv$.`,
      },
      {
        id: 'pow6-friction',
        type: 'text' as const,
        content: `## Step 1: Find the Force From Newton's Laws

At constant velocity, the applied force balances everything opposing the motion (EK 2.4.A.3).

| Situation (constant speed) | Force the machine supplies |
|-----------|-------|
| Dragging a crate on a rough level floor | $F = f_k = \\mu_k mg$ |
| Lifting straight up | $F = mg$ |
| Pushing up a frictionless incline | $F = mg\\sin\\theta$ |
| Pushing up a rough incline | $F = mg\\sin\\theta + \\mu_k mg\\cos\\theta$ |

## Step 2: Multiply by the Speed

$$P = Fv$$

### Worked Example: A Winch on a Ramp

A winch pulls a $200\\ \\text{kg}$ crate up a $30°$ ramp at a steady $0.50\\ \\text{m/s}$. The coefficient of kinetic friction is $0.20$. Use $g = 9.8\\ \\text{m/s}^2$.

- Gravity along the ramp: $mg\\sin 30° = (200)(9.8)(0.50) = 980\\ \\text{N}$
- Friction: $\\mu_k mg\\cos 30° = (0.20)(200)(9.8)(0.866) \\approx 339\\ \\text{N}$
- Winch force: $F = 980 + 339 = 1319\\ \\text{N}$
- Power: $P = Fv = (1319)(0.50) \\approx 660\\ \\text{W}$`,
      },
      {
        id: 'pow6-convert',
        type: 'multiple-choice' as const,
        content: `**Force First, Then Power** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A worker drags a $50\\ \\text{kg}$ crate across a level floor at a constant $2.0\\ \\text{m/s}$. The coefficient of kinetic friction is $0.30$. What power does the worker deliver? (Use $g = 9.8\\ \\text{m/s}^2$.)',
              options: ['$\\approx 294\\ \\text{W}$', '$\\approx 147\\ \\text{W}$', '$\\approx 980\\ \\text{W}$', '$\\approx 74\\ \\text{W}$'],
              correctAnswer: 0,
              explanation: 'At constant speed the pull equals friction: $F = \\mu_k mg = (0.30)(50)(9.8) = 147\\ \\text{N}$. Then $P = Fv = (147)(2.0) = 294\\ \\text{W}$. Stopping at the force gives 147, and using $mg$ instead of friction gives 980.',
            },
            {
              question: 'The same motor pulls a cart up a frictionless ramp at constant speed. If the ramp is made steeper (same speed), the motor\'s power must:',
              options: ['increase, because $mg\\sin\\theta$ grows', 'decrease, because the ramp is shorter', 'stay the same, since the speed is unchanged', 'drop to zero, because the speed is constant'],
              correctAnswer: 0,
              explanation: 'The motor\'s force must balance $mg\\sin\\theta$, which grows with the angle, and $P = Fv$ at fixed $v$. Constant speed means zero net force, not zero applied force.',
            },
          ],
        },
      },
      {
        id: 'pow6-billing',
        type: 'text' as const,
        content: `## Where Does the Power Go?

Energy conservation splits the machine's power into the rates at which each kind of energy changes (EK 3.4.B.2, 3.5.A.1). For the winch on the ramp:

| Destination | Rate |
|-------------|------|
| Gravitational potential energy of the crate–Earth system | $mg\\sin\\theta \\cdot v = (980)(0.50) = 490\\ \\text{W}$ |
| Thermal energy from friction | $f_k v = (339)(0.50) \\approx 170\\ \\text{W}$ |
| Kinetic energy | $0$ (constant speed) |
| **Total** | $\\approx 660\\ \\text{W}$ |

> 💡 The rates add up to the winch's power, which is a good check on your arithmetic. If the winch suddenly delivered more power than this, the extra would go into kinetic energy and the crate would speed up.`,
      },
      {
        id: 'pow6-drill',
        type: 'input-boxes' as const,
        content: `**Incline Power** 🧮

Use $g = 9.8\\ \\text{m/s}^2$. A cyclist and bike ($80\\ \\text{kg}$ total) ride up a hill inclined at an angle whose $\\sin\\theta = 0.10$, at a steady $5.0\\ \\text{m/s}$. Ignore friction and air resistance.

**1)** Force needed along the slope $= \\,?\\ \\text{N}$
**2)** Power the cyclist must deliver $= \\,?\\ \\text{W}$
**3)** If the cyclist rides at $2.5\\ \\text{m/s}$ instead, the power needed $= \\,?\\ \\text{W}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['78.4', '392', '196'],
          hint1: '$F = mg\\sin\\theta = (80)(9.8)(0.10)$.',
          hint2: '$P = Fv = (78.4)(5.0)$.',
          hint3: 'The force is the same at any constant speed; only $v$ changes in $P = Fv$.',
          explanation: '1) $F = (80)(9.8)(0.10) = 78.4\\ \\text{N}$.  2) $P = (78.4)(5.0) = 392\\ \\text{W}$.  3) $P = (78.4)(2.5) = 196\\ \\text{W}$ — half the speed needs half the power, because the force is unchanged.',
        },
      },
      {
        id: 'pow6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Power or Energy?** 🔽

Classify each quantity. Remember: power is a *rate* (joules per second), energy is a *total* (joules).`,
        exercise: {
          dropdowns: [
            { label: 'A $60\\ \\text{W}$ light bulb rating:', options: ['power', 'energy'] },
            { label: 'The $2400\\ \\text{J}$ of work a winch does lifting a load:', options: ['energy', 'power'] },
            { label: 'A $746\\ \\text{J/s}$ engine output:', options: ['power', 'energy'] },
          ],
          correctAnswers: ['power', 'energy', 'power'],
          hint1: 'Watts are joules per second — a rate — so this is power.',
          hint2: 'Work measured in joules is a total amount of energy transferred.',
          hint3: 'Joules *per second* is a rate of energy transfer — that is power.',
          explanation: 'Watts (J/s) and joules per second are power; work or energy in joules is a total amount, not a rate.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'power-physics',
    sections: [
      {
        id: 'pow7-intro',
        type: 'text' as const,
        content: `# ⚡ Power

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) use $P = \\dfrac{W}{t}$, (2) use $P = \\dfrac{Fd}{t}$, (3) use $P = Fv$, (4) get power from $\\Delta KE$, (5) read power as the slope of an energy–time graph, including negative power, and (6) find the force from Newton's laws before using $P = Fv$. Time to put it all together.`,
      },
      {
        id: 'pow7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula |
|------|---------|
| Power from work & time | $P = \\dfrac{W}{t}$ |
| Power from force, distance, time | $P = \\dfrac{Fd}{t}$ |
| Power from force & speed | $P = Fv$ |
| Average power from speed change | $P_{\\text{avg}} = \\dfrac{\\Delta KE}{t}$ |
| Power delivered by one force | $P = Fv\\cos\\theta$ (negative if $F$ opposes $v$) |
| Energy from power & time | $W = Pt$ |

> ⚠️ **Top traps to avoid:** (1) the watt is power but the joule is energy; (2) only force *along the motion* gives power; (3) constant force ≠ constant power (since $P = Fv$ grows with speed); (4) constant speed means zero *net* force, not zero applied force.`,
      },
      {
        id: 'pow7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $600\\ \\text{kg}$ elevator rises $30\\ \\text{m}$ at constant speed in $20\\ \\text{s}$. What is the motor\'s power output? (Use $g = 9.8\\ \\text{m/s}^2$.)',
              options: ['$\\approx 8820\\ \\text{W}$', '$\\approx 900\\ \\text{W}$', '$\\approx 18{,}000\\ \\text{W}$', '$\\approx 294\\ \\text{W}$'],
              correctAnswer: 0,
              explanation: '$F = mg = (600)(9.8) = 5880\\ \\text{N}$; $W = Fd = (5880)(30) = 176{,}400\\ \\text{J}$; $P = W/t = 176{,}400/20 = 8820\\ \\text{W}$.',
            },
            {
              question: 'A $30{,}000\\ \\text{W}$ engine drives a boat at a steady $12\\ \\text{m/s}$. What forward force does it provide?',
              options: ['$2500\\ \\text{N}$', '$360{,}000\\ \\text{N}$', '$250\\ \\text{N}$', '$2500\\ \\text{W}$'],
              correctAnswer: 0,
              explanation: '$F = P/v = 30{,}000/12 = 2500\\ \\text{N}$. The answer is a force (newtons), not watts.',
            },
            {
              question: 'A $1500\\ \\text{kg}$ car slows while its brakes exert $4000\\ \\text{N}$ backward. At the instant its speed is $15\\ \\text{m/s}$, the power delivered by the brakes is:',
              options: ['$-60{,}000\\ \\text{W}$', '$+60{,}000\\ \\text{W}$', '$-267\\ \\text{W}$', '$-22{,}500\\ \\text{W}$'],
              correctAnswer: 0,
              explanation: 'The brake force points opposite the velocity, so $P = Fv\\cos 180° = -(4000)(15) = -60{,}000\\ \\text{W}$: kinetic energy leaves the car at $60\\ \\text{kJ}$ per second. Dividing instead of multiplying gives 267 W, and $-22{,}500$ uses the mass in place of the force.',
            },
          ],
        },
      },
      {
        id: 'pow7-final-drill',
        type: 'input-boxes' as const,
        content: `**Putting It Together** 🧮

*(Use $g = 9.8\\ \\text{m/s}^2$ where needed.)*

**1)** A $25\\ \\text{kg}$ load is lifted $4.0\\ \\text{m}$ in $5.0\\ \\text{s}$ at constant speed. Power $= \\,?\\ \\text{W}$
**2)** A $1200\\ \\text{W}$ motor drives a belt at $4.0\\ \\text{m/s}$. Force $= \\,?\\ \\text{N}$
**3)** A $2.0\\ \\text{kg}$ object goes from rest to $8.0\\ \\text{m/s}$ in $4.0\\ \\text{s}$. Average power $= \\,?\\ \\text{W}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['196', '300', '16'],
          hint1: '$F = mg = (25)(9.8) = 245\\ \\text{N}$; $W = (245)(4.0) = 980\\ \\text{J}$; $P = 980/5.0 = 196\\ \\text{W}$.',
          hint2: '$F = P/v = 1200/4.0 = 300\\ \\text{N}$.',
          hint3: '$\\Delta KE = \\tfrac{1}{2}(2.0)(8.0)^2 = \\tfrac{1}{2}(2.0)(64) = 64\\ \\text{J}$; $P = 64/4.0 = 16\\ \\text{W}$.',
          explanation: '1) $P = (245)(4.0)/5.0 = 196\\ \\text{W}$.  2) $F = 1200/4.0 = 300\\ \\text{N}$.  3) $\\Delta KE = \\tfrac{1}{2}(2.0)(64) = 64\\ \\text{J}$, so $P = 64/4.0 = 16\\ \\text{W}$.',
        },
      },
      {
        id: 'pow7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which equation is NOT a valid way to compute power?',
              options: ['$P = Fv$', '$P = W/t$', '$P = Fd/t$', '$P = Fd$'],
              correctAnswer: 3,
              explanation: '$Fd$ is *work* (energy), not power. Power must include time: $P = W/t = Fd/t = Fv$.',
            },
            {
              question: 'A constant force pushes a cart from rest. Compared with the start, the instantaneous power at higher speed is:',
              options: [
                'greater, because $P = Fv$ and $v$ has increased',
                'smaller, because the cart needs less force',
                'unchanged, because the force is constant',
                'zero, because acceleration is constant',
              ],
              correctAnswer: 0,
              explanation: 'With $F$ fixed, $P = Fv$ grows as the speed grows. Constant force does not mean constant power.',
            },
            {
              question: 'A $400\\ \\text{W}$ device runs for $30\\ \\text{s}$. How much energy does it use?',
              options: ['$12{,}000\\ \\text{J}$', '$13.3\\ \\text{J}$', '$400\\ \\text{J}$', '$12{,}000\\ \\text{W}$'],
              correctAnswer: 0,
              explanation: '$W = Pt = (400)(30) = 12{,}000\\ \\text{J}$. The answer is energy, measured in joules, not watts.',
            },
          ],
        },
      },
    ],
  },
]
