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

where $\\theta$ is the angle between the **force** and the **displacement**. Work is a scalar, measured in joules ($1\\;\\text{J} = 1\\;\\text{N}\\cdot\\text{m}$, and since $1\\;\\text{N} = 1\\;\\text{kg}\\cdot\\text{m/s}^2$, $1\\;\\text{J} = 1\\;\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$), and it can be positive, negative, or zero:

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

**Problem.** A $6\\;\\text{kg}$ sled starts from rest and is pulled $10\\;\\text{m}$ across snow by a rope exerting $50\\;\\text{N}$ at $37^\\circ$ above the horizontal. Friction opposes with $10\\;\\text{N}$. ($\\cos 37^\\circ \\approx 0.8$)

- **(a)** How much work does the rope do on the sled?
- **(b)** How much work does friction do?
- **(c)** How much work do gravity and the normal force do?
- **(d)** What is the net work, and how fast is the sled moving after $10\\;\\text{m}$?
- **(e)** If friction had done $-325\\;\\text{J}$ instead, what would the final speed be?

**(a) Work by the rope.** Only the horizontal component moves the sled forward: $W_{rope} = Fd\\cos\\theta = (50)(10)(0.8) = 400\\;\\text{J}$

**(b) Work by friction.** Friction points opposite the displacement: $W_{fric} = -(10)(10) = -100\\;\\text{J}$

**(c) Gravity and the normal force.** Both are perpendicular to the horizontal displacement, so each does zero work.

**(d) Net work and final speed.** With $+400\\;\\text{J}$ from (a) and $-100\\;\\text{J}$ from (b), $W_{net} = 300\\;\\text{J}$. Then $W_{net} = \\Delta KE$: $300 = \\tfrac{1}{2}(6)v^2 \\Rightarrow v^2 = 100 \\Rightarrow v = 10\\;\\text{m/s}$. No acceleration and no time: the theorem jumps straight from forces and distance to speed.

**(e) The sign logic.** Net work would be $400 - 325 = 75\\;\\text{J}$, so $75 = \\tfrac{1}{2}(6)v^2 \\Rightarrow v^2 = 25 \\Rightarrow v = 5\\;\\text{m/s}$. Positive net work speeds an object up, and more negative work from friction leaves less of it.`
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
            yield: 'HIGH',
            explanation: `The support force is vertical; the displacement is horizontal. $W = Fd\\cos 90^\\circ = 0$. Muscular fatigue is not mechanical work.`
          },
          {
            question: `A $20\\;\\text{N}$ force pushes a box $5\\;\\text{m}$ in the direction of the force. The work done by the force is:`,
            options: [`$100\\;\\text{J}$`, `$4\\;\\text{J}$`, `$25\\;\\text{J}$`, `$50\\;\\text{J}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$W = Fd\\cos 0^\\circ = (20)(5)(1) = 100$ J. Dividing force by distance gives $4$ J, adding them gives $25$ J, and borrowing the $\\tfrac{1}{2}$ from kinetic energy gives $50$ J; work is simply force times distance.`
          },
          {
            question: `If a car's speed doubles, its kinetic energy:`,
            options: [`Doubles`, `Quadruples`, `Halves`, `Stays the same`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `$KE = \\tfrac{1}{2}mv^2 \\propto v^2$, so $2v$ gives $4\\times$ the KE — and roughly $4\\times$ the braking distance, since the brakes must remove it over distance.`
          },
          {
            question: `A net work of how many joules is required to accelerate a $2\\;\\text{kg}$ object from $3\\;\\text{m/s}$ to $5\\;\\text{m/s}$?`,
            options: [`$4\\;\\text{J}$`, `$25\\;\\text{J}$`, `$34\\;\\text{J}$`, `$16\\;\\text{J}$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `$W_{net} = \\Delta KE = \\tfrac{1}{2}(2)(5^2 - 3^2) = 25 - 9 = 16$ J. The trap is computing $\\tfrac{1}{2}m(v_f - v_0)^2 = 4$ J — square the speeds BEFORE subtracting. $25$ J is the final kinetic energy alone, ignoring the $9$ J the object already had, and $34$ J adds the two kinetic energies instead of subtracting them.`
          },
          {
            question: `A box slides across a rough floor and comes to rest. The work done by friction on the box during the slide is:`,
            options: [`Positive`, `Negative`, `Zero`, `Equal to $+\\tfrac{1}{2}mv_0^2$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Friction points opposite the displacement ($\\theta = 180^\\circ$), so its work is negative — specifically $-\\tfrac{1}{2}mv_0^2$, removing all the kinetic energy as heat.`
          }
        ]
      }
    },
    {
      id: 'wke1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Work is $Fd\\cos\\theta$.** Only the force component along the displacement does work; work is a scalar in joules.
- **Perpendicular forces do no work.** The normal force, the centripetal force and a tray carried level all do zero work.
- **Net work equals $\\Delta KE$.** $W_{net} = \\Delta KE$ links force, distance and speed whenever time is not involved.
- **KE grows as $v^2$.** Double the speed and the kinetic energy quadruples, and so does the braking distance.

**Common traps**

- **Holding still as work.** A weight held still has $d = 0$, so no mechanical work is done, however tired the muscles get.
- **Subtracting speeds first.** Square each speed, then subtract: $\\tfrac{1}{2}m(v_f^2 - v_0^2)$, not $\\tfrac{1}{2}m(v_f - v_0)^2$.
- **One force, not the net.** The work-energy theorem needs the work of ALL forces, friction included, not just the push.
- **Full force on a slanted rope.** Only the component $F\\cos\\theta$ along the motion does work; the vertical part does none.`
    }
  ]
};
