export const mcatMechMomentumPart1Data = {
  topicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  sections: [
    {
      id: 'mom1-intro',
      type: 'text' as const,
      content: `# Momentum & Collisions

**Part 1 of 4 — Momentum & Impulse**

### Momentum: Inertia in Motion

$p = mv$

Momentum is a **vector** (direction matters — assign signs on a line) with units $\\text{kg}\\cdot\\text{m/s}$. A slow truck and a fast baseball can carry the same momentum, and then the same impulse stops either one; what differs is their kinetic energy, since at equal momentum $KE = p^2/2m$ is far larger for the light, fast ball.

### Impulse: How Momentum Changes

$J = F\\Delta t = \\Delta p = m\\Delta v$

Impulse (units $\\text{N}\\cdot\\text{s}$, identical to $\\text{kg}\\cdot\\text{m/s}$) is force integrated over time. On a **force-time graph, impulse is the area under the curve** — the exact analog of displacement under a $v$-$t$ curve.

The rearrangement passages use most:

$F = \\frac{\\Delta p}{\\Delta t}$

For a FIXED momentum change, force and collision time are inversely related. Stretch out $\\Delta t$ and the force shrinks:

- **Airbags and crumple zones** extend the stopping time of your body, cutting peak force
- **Bending your knees** on landing extends $\\Delta t$
- **Following through** on a swing lengthens contact time, boosting $\\Delta p$ for a given force

None of these change the momentum you must lose — only how violently you lose it.

### Sign Care: Reversals Count Double

An object that bounces changes momentum MORE than one that stops. Coming in at $+mv$ and leaving at $-mv$ gives $|\\Delta p| = 2mv$, versus $mv$ for sticking. Walls hit by bouncy balls feel larger impulses than walls hit by clay.`
    },
    {
      id: 'mom1-worked',
      type: 'text' as const,
      content: `### Worked Example — Bat Meets Ball

**Problem.** A $0.15\\;\\text{kg}$ baseball arrives at $40\\;\\text{m/s}$ and leaves the bat at $30\\;\\text{m/s}$ in the **opposite** direction. Bat-ball contact lasts $5\\;\\text{ms}$.

- **(a)** Taking the ball's outgoing direction as positive, what are its initial and final velocities?
- **(b)** What is the ball's momentum change?
- **(c)** What average force does the bat exert, and how does it compare with the ball's weight?
- **(d)** What average force would deliver the same momentum change over $0.5\\;\\text{s}$ instead, as an airbag does?

**(a) Sign convention.** Outgoing is positive, so $v_0 = -40\\;\\text{m/s}$ and $v_f = +30\\;\\text{m/s}$.

**(b) Momentum change.** $\\Delta p = m(v_f - v_0) = 0.15(30 - (-40)) = 0.15(70) = 10.5\\;\\text{kg}\\cdot\\text{m/s}$. The reversal makes the speeds ADD; $0.15(40 - 30) = 1.5$ is the classic sign error, off by a factor of seven.

**(c) Average force.** With $\\Delta p = 10.5\\;\\text{kg}\\cdot\\text{m/s}$ from (b): $F = \\dfrac{\\Delta p}{\\Delta t} = \\dfrac{10.5}{0.005} = 2100\\;\\text{N}$, roughly $1400\\times$ the ball's weight ($1.5\\;\\text{N}$). Collision forces dwarf gravity, so gravity can be ignored *during* the brief contact.

**(d) Airbag contrast.** The same $10.5\\;\\text{kg}\\cdot\\text{m/s}$ over $0.5\\;\\text{s}$ (a hundred times longer) gives $F = 10.5/0.5 = 21\\;\\text{N}$, a hundredfold drop. Same impulse, same area on the $F$-$t$ graph: low and wide instead of tall and narrow.`
    },
    {
      id: 'mom1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Momentum & Impulse** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $1000\\;\\text{kg}$ car travels at $20\\;\\text{m/s}$. Its momentum is:`,
            options: [`$5 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$`, `$2 \\times 10^3\\;\\text{kg}\\cdot\\text{m/s}$`, `$2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$`, `$2 \\times 10^5\\;\\text{kg}\\cdot\\text{m/s}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$p = mv = (1000)(20) = 20000 = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$. Watch the power of ten — three of the choices differ only there.`
          },
          {
            question: `On a force-versus-time graph of a collision, the impulse delivered equals:`,
            options: [`The slope of the curve at its steepest point`, `The area under the curve`, `The peak force reached during contact`, `The peak force divided by the contact time`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$J = F\\Delta t$ generalizes to the area under the $F$-$t$ curve. The slope of an $F$-$t$ graph is how fast the force changes, not an impulse, the peak force alone ignores how long the force acts, and peak force divided by contact time has units of $\\text{N/s}$, not $\\text{N}\\cdot\\text{s}$: the same area can be tall-and-narrow or low-and-wide.`
          },
          {
            question: `During a crash, an airbag protects the occupant primarily because it:`,
            options: [`Increases the impulse on the occupant`, `Decreases the occupant's momentum change`, `Increases the occupant's momentum change`, `Increases the stopping time`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The momentum change is fixed — the occupant must stop either way, so the impulse is unchanged. $F = \\Delta p/\\Delta t$: a longer stopping time means a smaller average force on the occupant.`
          },
          {
            question: `A $50\\;\\text{N}$ average force acts on an object for $0.2\\;\\text{s}$. The impulse delivered is:`,
            options: [`$10\\;\\text{N}\\cdot\\text{s}$`, `$250\\;\\text{N}\\cdot\\text{s}$`, `$0.004\\;\\text{N}\\cdot\\text{s}$`, `$50.2\\;\\text{N}\\cdot\\text{s}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$J = F\\Delta t = (50)(0.2) = 10\\;\\text{N}\\cdot\\text{s}$ — which is also the object's momentum change in $\\text{kg}\\cdot\\text{m/s}$. $250$ divides force by time, $0.004$ divides time by force, and $50.2$ adds the two instead of multiplying.`
          },
          {
            question: `A clay ball and a rubber ball of equal mass hit a wall at equal speeds. The clay sticks; the rubber ball bounces straight back at its incoming speed. Which receives the larger impulse from the wall?`,
            options: [`The clay ball`, `Both receive equal impulses`, `The rubber ball`, `Impulse cannot be compared without the contact times`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Sticking: $|\\Delta p| = mv$. Bouncing: $|\\Delta p| = 2mv$ — the reversal doubles the momentum change. Impulse equals $\\Delta p$ regardless of contact time, so no timing data is needed.`
          }
        ]
      }
    },
    {
      id: 'mom1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Momentum is a vector.** $p = mv$ in $\\text{kg}\\cdot\\text{m/s}$; set a sign convention before touching any numbers.
- **Impulse is an area.** $J = F\\Delta t = \\Delta p$, the area under the force-time curve.
- **Force trades with time.** For a fixed $\\Delta p$, a longer $\\Delta t$ means a smaller force: airbags, crumple zones, bent knees.
- **Collision forces dwarf gravity.** The bat exerts about $1400\\times$ the ball's weight, so gravity is ignored during impact.

**Common traps**

- **Ignoring the reversal.** A bounce changes velocity by the SUM of the speeds: $30 - (-40) = 70\\;\\text{m/s}$, not $10$.
- **Bounce equals stick.** Bouncing straight back takes $2mv$ of impulse; sticking takes only $mv$.
- **Cushions cut momentum change.** Airbags and padding leave $\\Delta p$ and the impulse unchanged; they only lower the force.
- **Impulse needs contact time.** Impulse equals $\\Delta p$, so impulses compare without knowing how long contact lasted.`
    }
  ]
};
