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

Momentum is a **vector** (direction matters — assign signs on a line) with units $\\text{kg}\\cdot\\text{m/s}$. A slow truck and a fast baseball can carry the same momentum; what differs is how hard each is to stop *quickly*.

### Impulse: How Momentum Changes

$J = F\\Delta t = \\Delta p = m\\Delta v$

Impulse (units $\\text{N}\\cdot\\text{s}$, identical to $\\text{kg}\\cdot\\text{m/s}$) is force integrated over time. On a **force-time graph, impulse is the area under the curve** — the exact analog of displacement under a $v$-$t$ curve.

The rearrangement the MCAT tests relentlessly:

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

A $0.15\\;\\text{kg}$ baseball arrives at $40\\;\\text{m/s}$ and leaves the bat at $30\\;\\text{m/s}$ in the **opposite** direction. Bat-ball contact lasts $5\\;\\text{ms}$.

**Step 1 — Set a sign convention.** Let the ball's outgoing direction be positive. Then $v_0 = -40\\;\\text{m/s}$ and $v_f = +30\\;\\text{m/s}$.

**Step 2 — Momentum change.**

$\\Delta p = m(v_f - v_0) = 0.15(30 - (-40)) = 0.15(70) = 10.5\\;\\text{kg}\\cdot\\text{m/s}$

The reversal makes the speeds ADD — treating it as $0.15(40 - 30) = 1.5$ is the classic sign error, off by a factor of seven.

**Step 3 — Average force.**

$F = \\frac{\\Delta p}{\\Delta t} = \\frac{10.5}{0.005} = 2100\\;\\text{N}$

Roughly $1400\\times$ the ball's own weight ($1.5\\;\\text{N}$) — collision forces dwarf gravity, which is why we can usually ignore gravity *during* the brief contact.

**Step 4 — Airbag contrast.** If the same $10.5\\;\\text{kg}\\cdot\\text{m/s}$ were removed over $0.5\\;\\text{s}$ instead (a hundred times longer), the force would drop a hundredfold to $21\\;\\text{N}$. Same impulse, same shaded area on the $F$-$t$ graph — just low and wide instead of tall and narrow.`
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
            explanation: `$p = mv = (1000)(20) = 20000 = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$. Watch the power of ten — the choices differ only there.`
          },
          {
            question: `On a force-versus-time graph of a collision, the impulse delivered equals:`,
            options: [`The slope of the curve`, `The area under the curve`, `The peak force`, `The peak force divided by the contact time`],
            correctAnswer: 1,
            explanation: `$J = F\\Delta t$ generalizes to the area under the $F$-$t$ curve. Slope of $F$-$t$ has no standard meaning; the same area can be tall-and-narrow or low-and-wide.`
          },
          {
            question: `During a crash, an airbag protects the occupant primarily because it:`,
            options: [`Increases the impulse on the occupant`, `Decreases the occupant's momentum change`, `Increases the occupant's momentum change`, `Increases the stopping time, decreasing the average force`],
            correctAnswer: 3,
            explanation: `The momentum change is fixed — the occupant must stop either way. $F = \\Delta p/\\Delta t$: a longer $\\Delta t$ means a smaller force. The impulse is unchanged.`
          },
          {
            question: `A $50\\;\\text{N}$ average force acts on an object for $0.2\\;\\text{s}$. The impulse delivered is:`,
            options: [`$10\\;\\text{N}\\cdot\\text{s}$`, `$250\\;\\text{N}\\cdot\\text{s}$`, `$0.004\\;\\text{N}\\cdot\\text{s}$`, `$52\\;\\text{N}\\cdot\\text{s}$`],
            correctAnswer: 0,
            explanation: `$J = F\\Delta t = (50)(0.2) = 10\\;\\text{N}\\cdot\\text{s}$ — which is also the object's momentum change in $\\text{kg}\\cdot\\text{m/s}$.`
          },
          {
            question: `A clay ball and a rubber ball of equal mass hit a wall at equal speeds. The clay sticks; the rubber ball bounces straight back at its incoming speed. Which receives the larger impulse from the wall?`,
            options: [`The clay ball`, `Both receive equal impulses`, `The rubber ball`, `Impulse cannot be compared without the contact times`],
            correctAnswer: 2,
            explanation: `Sticking: $|\\Delta p| = mv$. Bouncing: $|\\Delta p| = 2mv$ — the reversal doubles the momentum change. Impulse equals $\\Delta p$ regardless of contact time, so no timing data is needed.`
          }
        ]
      }
    },
    {
      id: 'mom1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $p = mv$ is a vector — set a sign convention before touching numbers
- Impulse $J = F\\Delta t = \\Delta p$; on an $F$-$t$ graph it is the area under the curve
- Fixed $\\Delta p$: force and stopping time trade off inversely (airbags, crumple zones, bent knees)
- Bouncing doubles the momentum change relative to sticking ($2mv$ vs. $mv$)
- Collision forces dwarf gravity, so gravity is negligible during brief impacts
- Reversal problems: speeds ADD in $\\Delta v$ when direction flips`
    }
  ]
};
