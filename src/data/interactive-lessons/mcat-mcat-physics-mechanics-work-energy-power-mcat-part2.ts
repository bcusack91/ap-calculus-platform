export const mcatMechWorkPart2Data = {
  topicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  sections: [
    {
      id: 'wke2-intro',
      type: 'text' as const,
      content: `# Work, Energy & Power

**Part 2 of 4 — Potential Energy & Conservation of Energy**

### Stored Energy

**Gravitational:** $U_g = mgh$ — measured from any reference height you choose; only **changes** in $U_g$ matter.

**Elastic (spring):** $U_s = \\tfrac{1}{2}kx^2$, where $x$ is the stretch or compression from natural length. Doubling the compression quadruples the stored energy.

### Conservative vs. Nonconservative Forces

| Conservative (gravity, spring, electrostatic) | Nonconservative (friction, air resistance, applied pushes) |
|---|---|
| Work is path-independent | Work depends on the path taken |
| Zero net work around a closed loop | Removes (or adds) mechanical energy |
| Has a potential energy | No potential energy exists |

The work done by gravity depends only on the **height change**, never on the path — a winding trail and a vertical ladder to the same summit involve identical work against gravity.

### Conservation of Mechanical Energy

With only conservative forces doing work:

$KE_0 + U_0 = KE_f + U_f$

When friction or another nonconservative force acts:

$KE_0 + U_0 = KE_f + U_f + E_{lost}$

where $E_{lost}$ appears as heat and sound. Total energy is always conserved; **mechanical** energy is conserved only in the frictionless idealization.

**High-yield consequences:**

- Drop from height $h$: landing speed $v = \\sqrt{2gh}$ — independent of mass
- Doubling the drop height multiplies speed by $\\sqrt{2}$, not 2
- A pendulum or frictionless ramp delivers the same final speed as a straight drop through the same height — the path is irrelevant`
    },
    {
      id: 'wke2-worked',
      type: 'text' as const,
      content: `### Worked Example — Playground Slide with Friction

A $50\\;\\text{kg}$ child starts from rest atop a $5\\;\\text{m}$ slide and reaches the bottom moving at $8\\;\\text{m/s}$. How much energy did friction remove? ($g = 10\\;\\text{m/s}^2$)

**Step 1 — Energy available.**

$U_0 = mgh = (50)(10)(5) = 2500\\;\\text{J}$

**Step 2 — Energy that arrived as motion.**

$KE_f = \\tfrac{1}{2}(50)(8)^2 = (25)(64) = 1600\\;\\text{J}$

**Step 3 — The books must balance.**

$E_{lost} = 2500 - 1600 = 900\\;\\text{J}$

Friction converted $900\\;\\text{J}$ into heat along the slide. Without friction the child would have arrived at $v = \\sqrt{2gh} = \\sqrt{100} = 10\\;\\text{m/s}$.

### Worked Example — Spring Launcher

A spring with $k = 200\\;\\text{N/m}$ is compressed $0.1\\;\\text{m}$ behind a $0.1\\;\\text{kg}$ ball on a frictionless horizontal track.

**Stored energy:**

$U_s = \\tfrac{1}{2}(200)(0.1)^2 = \\tfrac{1}{2}(200)(0.01) = 1\\;\\text{J}$

**Launch speed:** all of it becomes kinetic energy:

$1 = \\tfrac{1}{2}(0.1)v^2 \\Rightarrow v^2 = 20 \\Rightarrow v \\approx 4.5\\;\\text{m/s}$

Estimate the root: $\\sqrt{20}$ sits between $\\sqrt{16} = 4$ and $\\sqrt{25} = 5$, nearer $4.5$ — MCAT answer choices are spaced for exactly this kind of bracketing.`
    },
    {
      id: 'wke2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Potential Energy & Conservation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A pendulum is released from rest at a height $0.8\\;\\text{m}$ above its lowest point ($g = 10\\;\\text{m/s}^2$). Its speed at the bottom is:`,
            options: [`$4\\;\\text{m/s}$`, `$8\\;\\text{m/s}$`, `$16\\;\\text{m/s}$`, `$2\\;\\text{m/s}$`],
            correctAnswer: 0,
            explanation: `$v = \\sqrt{2gh} = \\sqrt{2(10)(0.8)} = \\sqrt{16} = 4$ m/s. Answering $16$ forgets the square root.`
          },
          {
            question: `A spring with $k = 200\\;\\text{N/m}$ is compressed $0.1\\;\\text{m}$. The stored elastic potential energy is:`,
            options: [`$2\\;\\text{J}$`, `$20\\;\\text{J}$`, `$0.5\\;\\text{J}$`, `$1\\;\\text{J}$`],
            correctAnswer: 3,
            explanation: `$U_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.01) = 1$ J. Forgetting the $\\tfrac{1}{2}$ gives $2$ J; forgetting to square $x$ gives $10$ J territory.`
          },
          {
            question: `Which of the following forces is nonconservative?`,
            options: [`Gravity`, `Kinetic friction`, `The spring force`, `The electrostatic force`],
            correctAnswer: 1,
            explanation: `Friction's work depends on path length (a longer slide loses more energy) and always drains mechanical energy — no potential energy can be defined for it. The other three are the classic conservative trio.`
          },
          {
            question: `A ball dropped from height $h$ lands at speed $v$. Dropped from height $2h$, it lands at:`,
            options: [`$2v$`, `$4v$`, `$v\\sqrt{2}$`, `$v$`],
            correctAnswer: 2,
            explanation: `$v = \\sqrt{2gh} \\propto \\sqrt{h}$: doubling the height multiplies the speed by $\\sqrt{2} \\approx 1.4$. Speed doubles only when the height quadruples.`
          },
          {
            question: `A ball thrown straight up returns to the thrower's hand moving slower than it was launched. The best explanation is:`,
            options: [`Air resistance did negative work on the ball throughout the flight`, `Gravity did net negative work over the round trip`, `The ball's mass decreased during flight`, `Potential energy was permanently destroyed at the peak`],
            correctAnswer: 0,
            explanation: `Over the round trip gravity's work cancels (down $h$, up $h$ — conservative). Air resistance opposes motion BOTH ways, doing negative work the entire flight and draining mechanical energy into heat.`
          }
        ]
      }
    },
    {
      id: 'wke2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $U_g = mgh$ (only changes matter); $U_s = \\tfrac{1}{2}kx^2$ (quadruples when $x$ doubles)
- Conservative forces (gravity, spring, electrostatic) do path-independent work and own a potential energy; friction does not
- Frictionless: $KE_0 + U_0 = KE_f + U_f$; with friction, add an $E_{lost}$ term and balance the books
- $v = \\sqrt{2gh}$ for any frictionless descent through height $h$ — mass and path both irrelevant
- Speed scales as $\\sqrt{h}$, not $h$
- Energy audits (available minus arrived = lost) are the standard MCAT passage calculation`
    }
  ]
};
