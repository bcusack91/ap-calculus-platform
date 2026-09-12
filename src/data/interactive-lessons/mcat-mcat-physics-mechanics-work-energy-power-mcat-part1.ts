export const mcatMechWorkPart1Data = {
  topicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  sections: [
    {
      id: 'wke1-intro',
      type: 'text' as const,
      content: `# Work, Energy & Power

**Part 1 of 4 — Work & the Work-Energy Theorem**

### What Counts as Work

$W = Fd\\cos\\theta$

where $\\theta$ is the angle between the **force** and the **displacement**. Work is a scalar, measured in joules ($1\\;\\text{J} = 1\\;\\text{N}\\cdot\\text{m}$), and it can be positive, negative, or zero:

| Situation | $\\theta$ | Work |
|---|---|---|
| Force along motion | $0^\\circ$ | $+Fd$ |
| Force opposing motion (friction on a slide) | $180^\\circ$ | $-Fd$ |
| Force perpendicular to motion | $90^\\circ$ | $0$ |

Three "no work" traps the MCAT reuses constantly:

- A waiter carrying a tray **horizontally** at constant velocity: his upward support force is perpendicular to the motion — zero work.
- The **normal force** on a block sliding along a surface: perpendicular — zero work.
- The **centripetal force** in uniform circular motion: always perpendicular to velocity — zero work, which is why speed stays constant.

Holding a weight stationary does zero work on it ($d = 0$) even though your muscles burn energy — physiological effort is not mechanical work.

### Kinetic Energy and the Work-Energy Theorem

$KE = \\tfrac{1}{2}mv^2$

$W_{net} = \\Delta KE = KE_f - KE_0$

The **net** work (by all forces together) equals the change in kinetic energy. Because $KE \\propto v^2$, doubling speed quadruples kinetic energy — the reason braking distance quadruples too.

This theorem is the fastest route whenever a question links **force, distance, and speed** without mentioning time.`
    },
    {
      id: 'wke1-worked',
      type: 'text' as const,
      content: `### Worked Example — Pulling a Sled

A $6\\;\\text{kg}$ sled starts from rest and is pulled $10\\;\\text{m}$ across snow by a rope exerting $50\\;\\text{N}$ at $37^\\circ$ above the horizontal. Friction opposes with $10\\;\\text{N}$. ($\\cos 37^\\circ \\approx 0.8$)

**Step 1 — Work by the rope.** Only the horizontal component moves the sled forward:

$W_{rope} = Fd\\cos\\theta = (50)(10)(0.8) = 400\\;\\text{J}$

**Step 2 — Work by friction.** Friction points opposite the displacement:

$W_{fric} = -(10)(10) = -100\\;\\text{J}$

**Step 3 — Work by gravity and normal force.** Both are perpendicular to the horizontal displacement: zero.

**Step 4 — Net work and final speed.**

$W_{net} = 400 - 100 = 300\\;\\text{J}$

$W_{net} = \\Delta KE \\Rightarrow 300 = \\tfrac{1}{2}(6)v^2 \\Rightarrow v^2 = 100 \\Rightarrow v = 10\\;\\text{m/s}$

No kinematics, no acceleration, no time — the work-energy theorem jumps straight from forces and distance to speed.

**Check the sign logic:** positive net work speeds the sled up; if friction had done $-400\\;\\text{J}$ instead, net work would be zero and the sled would end at the same speed it started (here, rest — meaning it never gets going; you would need to check statics first).`
    },
    {
      id: 'wke1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Work & the Work-Energy Theorem** 🎯`,
      exercise: {
        questions: [
          {
            question: `A waiter carries a tray horizontally across a room at constant velocity. The work done on the tray by his upward supporting force is:`,
            options: [`Positive`, `Negative`, `Zero`, `Equal to $mgd$`],
            correctAnswer: 2,
            explanation: `The support force is vertical; the displacement is horizontal. $W = Fd\\cos 90^\\circ = 0$. Muscular fatigue is not mechanical work.`
          },
          {
            question: `A $20\\;\\text{N}$ force pushes a box $5\\;\\text{m}$ in the direction of the force. The work done by the force is:`,
            options: [`$100\\;\\text{J}$`, `$4\\;\\text{J}$`, `$25\\;\\text{J}$`, `$500\\;\\text{J}$`],
            correctAnswer: 0,
            explanation: `$W = Fd\\cos 0^\\circ = (20)(5)(1) = 100$ J. Dividing gives $4$; there is no reason to square anything here.`
          },
          {
            question: `If a car's speed doubles, its kinetic energy:`,
            options: [`Doubles`, `Quadruples`, `Halves`, `Stays the same`],
            correctAnswer: 1,
            explanation: `$KE = \\tfrac{1}{2}mv^2 \\propto v^2$, so $2v$ gives $4\\times$ the KE — and roughly $4\\times$ the braking distance, since the brakes must remove it over distance.`
          },
          {
            question: `A net work of how many joules is required to accelerate a $2\\;\\text{kg}$ object from $3\\;\\text{m/s}$ to $5\\;\\text{m/s}$?`,
            options: [`$4\\;\\text{J}$`, `$25\\;\\text{J}$`, `$34\\;\\text{J}$`, `$16\\;\\text{J}$`],
            correctAnswer: 3,
            explanation: `$W_{net} = \\Delta KE = \\tfrac{1}{2}(2)(5^2 - 3^2) = 25 - 9 = 16$ J. The trap is computing $\\tfrac{1}{2}m(v_f - v_0)^2 = 4$ J — square the speeds BEFORE subtracting.`
          },
          {
            question: `A box slides across a rough floor and comes to rest. The work done by friction on the box during the slide is:`,
            options: [`Positive`, `Negative`, `Zero`, `Equal to $+\\tfrac{1}{2}mv_0^2$`],
            correctAnswer: 1,
            explanation: `Friction points opposite the displacement ($\\theta = 180^\\circ$), so its work is negative — specifically $-\\tfrac{1}{2}mv_0^2$, removing all the kinetic energy as heat.`
          }
        ]
      }
    },
    {
      id: 'wke1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $W = Fd\\cos\\theta$: only the force component along the displacement does work
- Perpendicular forces do zero work: normal force, centripetal force, carrying a load horizontally
- Holding something still is zero mechanical work, whatever your muscles say
- $W_{net} = \\Delta KE$ — the shortcut whenever force, distance, and speed appear without time
- $KE \\propto v^2$: double the speed, quadruple the energy (and the stopping distance)
- Square speeds before subtracting when computing $\\Delta KE$`
    }
  ]
};
