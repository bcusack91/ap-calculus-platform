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

**Work as area.** On a graph of force against displacement, the work done is the area under the curve. A spring's force rises linearly from $0$ to $kx$, so the work to compress it is the triangle's area, $\\tfrac{1}{2}(x)(kx) = \\tfrac{1}{2}kx^2$: exactly the energy it stores.

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

**Problem.** A $50\\;\\text{kg}$ child starts from rest at the top of a slide $5\\;\\text{m}$ high and reaches the bottom moving at $8\\;\\text{m/s}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** How much gravitational potential energy does the child start with?
- **(b)** How much kinetic energy does the child have at the bottom?
- **(c)** How much energy did friction remove?
- **(d)** How fast would the child have arrived on a frictionless slide?

**(a) Energy available.** Measuring height from the bottom: $U_0 = mgh = (50)(10)(5) = 2500\\;\\text{J}$

**(b) Energy that arrived as motion.** $KE_f = \\tfrac{1}{2}(50)(8)^2 = (25)(64) = 1600\\;\\text{J}$

**(c) The books must balance.** With $2500\\;\\text{J}$ from (a) and $1600\\;\\text{J}$ from (b): $E_{lost} = 2500 - 1600 = 900\\;\\text{J}$, converted into heat along the slide.

**(d) The frictionless benchmark.** All $2500\\;\\text{J}$ would become kinetic energy: $v = \\sqrt{2gh} = \\sqrt{100} = 10\\;\\text{m/s}$.

### Worked Example — Spring Launcher

**Problem.** A spring with $k = 200\\;\\text{N/m}$ is compressed $0.1\\;\\text{m}$ behind a $0.1\\;\\text{kg}$ ball on a frictionless horizontal track.

- **(a)** How much energy does the compressed spring store?
- **(b)** How fast is the ball moving when it leaves the spring?

**(a) Stored energy.** $U_s = \\tfrac{1}{2}(200)(0.1)^2 = \\tfrac{1}{2}(200)(0.01) = 1\\;\\text{J}$

**(b) Launch speed.** All $1\\;\\text{J}$ from (a) becomes kinetic energy: $1 = \\tfrac{1}{2}(0.1)v^2 \\Rightarrow v^2 = 20 \\Rightarrow v \\approx 4.5\\;\\text{m/s}$. Estimate the root: $\\sqrt{20}$ sits between $\\sqrt{16} = 4$ and $\\sqrt{25} = 5$, nearer $4.5$; MCAT answer choices are spaced for exactly this kind of bracketing.`
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
            yield: 'ULTRA_HIGH',
            explanation: `$v = \\sqrt{2gh} = \\sqrt{2(10)(0.8)} = \\sqrt{16} = 4$ m/s. Answering $16$ forgets the square root, $8$ m/s is $gh$ with both the factor of 2 and the root missing, and $2$ m/s puts the $\\tfrac{1}{2}$ on the wrong side ($\\tfrac{1}{2}mgh = mv^2$, so $v^2 = gh/2 = 4$).`
          },
          {
            question: `A spring with $k = 300\\;\\text{N/m}$ is compressed $0.2\\;\\text{m}$. The stored elastic potential energy is:`,
            options: [`$30\\;\\text{J}$`, `$12\\;\\text{J}$`, `$3\\;\\text{J}$`, `$6\\;\\text{J}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$U_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(300)(0.04) = 6$ J. Forgetting to square $x$ gives $\\tfrac{1}{2}(300)(0.2) = 30$ J; dropping the $\\tfrac{1}{2}$ gives $(300)(0.04) = 12$ J; applying the $\\tfrac{1}{2}$ twice gives $3$ J.`
          },
          {
            question: `A force on a cart rises steadily from $0$ to $60\\;\\text{N}$ as the cart moves $0.3\\;\\text{m}$ along the force. How much work does the force do?`,
            options: [`$18\\;\\text{J}$`, `$200\\;\\text{J}$`, `$9\\;\\text{J}$`, `$2.7\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Work is the area under the force-versus-displacement graph, here a triangle: $\\tfrac{1}{2}(0.3)(60) = 9$ J. $18$ J is the full rectangle, as if the force were $60$ N the whole way; $200$ is the slope $60/0.3$, a stiffness in N/m rather than a work; $2.7$ J plugs the peak force in as if it were $k$ in $\\tfrac{1}{2}kx^2$.`
          },
          {
            question: `Which of the following forces is nonconservative?`,
            options: [`Gravity near Earth's surface`, `Kinetic friction`, `A spring's restoring force`, `The electrostatic force`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Friction's work depends on path length (a longer slide loses more energy) and always drains mechanical energy — no potential energy can be defined for it. The other three are the classic conservative trio.`
          },
          {
            question: `A ball dropped from height $h$ lands at speed $v$. Dropped from height $2h$, it lands at:`,
            options: [`$2v$`, `$4v$`, `$v\\sqrt{2}$`, `$v$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$v = \\sqrt{2gh} \\propto \\sqrt{h}$: doubling the height multiplies the speed by $\\sqrt{2} \\approx 1.4$. Speed doubles only when the height quadruples.`
          },
          {
            question: `A ball thrown straight up returns to the thrower's hand moving slower than it was launched. The best explanation is:`,
            options: [`Air resistance did negative work on the ball throughout the flight`, `Gravity did net negative work over the round trip`, `Air resistance acted only on the way up, while the ball slowed`, `Potential energy was permanently destroyed at the peak`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Over the round trip gravity's work cancels (down $h$, up $h$ — conservative). Air resistance opposes motion BOTH ways, doing negative work the entire flight and draining mechanical energy into heat. Drag does not switch off on the way down: it points upward then, against the falling ball. Potential energy is not destroyed at the peak; it converts back into kinetic energy on the descent.`
          }
        ]
      }
    },
    {
      id: 'wke2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Two stored energies.** $U_g = mgh$ from any chosen reference, since only changes matter; a spring stores $U_s = \\tfrac{1}{2}kx^2$.
- **Conservative forces.** Gravity, springs and electrostatics do path-independent work and have a potential energy; friction does not.
- **Balance the energy books.** $KE_0 + U_0 = KE_f + U_f + E_{lost}$: available minus arrived is what friction removed.
- **Landing speed $\\sqrt{2gh}$.** Any frictionless drop, swing or slide through height $h$ gives this speed, whatever the mass.

**Common traps**

- **Speed linear in height.** $v \\propto \\sqrt{h}$, so doubling the height multiplies the speed by $\\sqrt{2}$, not by 2.
- **Spring energy linear in $x$.** $U_s \\propto x^2$: doubling the compression quadruples the stored energy.
- **Gravity's work depending on path.** A winding trail and a ladder to the same height cost the same $mgh$; only friction depends on path.
- **Mechanical as total energy.** Total energy is always conserved; mechanical energy is conserved only when friction does no work.`
    }
  ]
};
