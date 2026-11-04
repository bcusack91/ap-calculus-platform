export const mcatMechMomentumPart2Data = {
  topicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  sections: [
    {
      id: 'mom2-intro',
      type: 'text' as const,
      content: `# Momentum & Collisions

**Part 2 of 4 — Conservation of Momentum & Collision Types**

### Why Momentum Is Conserved

During a collision, the objects exert third-law force pairs on each other — equal, opposite, and acting for the same contact time. The impulses they trade are equal and opposite, so the momentum one gains the other loses. If **no net external force** acts on the system:

$p_{\\text{total, before}} = p_{\\text{total, after}}$

$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$

This holds for EVERY collision — sticky, bouncy, or explosive. Friction and gravity are usually negligible over the brief contact, which is why "conservation of momentum" is the default tool the instant two things hit.

### The Collision Taxonomy (High Yield)

| Type | Momentum | Kinetic energy | Signature |
|---|---|---|---|
| Elastic | Conserved | Conserved | Objects bounce apart; no deformation or heat |
| Inelastic | Conserved | Some lost | Objects bounce apart, but KE decreases |
| Perfectly inelastic | Conserved | Maximum possible loss | Objects **stick together**, one final velocity |

The discrimination the MCAT tests: **momentum is conserved in all three; kinetic energy only in elastic collisions.** "Perfectly inelastic" does not mean all KE vanishes — the stuck pair usually still moves (momentum demands it). It means the most KE is lost that momentum conservation allows.

Truly elastic collisions are rare macroscopically (billiard balls approximately; gas molecules genuinely). Collisions where the objects lock together (coupled cars, tackles, embedded bullets) are perfectly inelastic; most car crashes are strongly inelastic.

### One Special Case Worth Memorizing

Equal masses, head-on **elastic** collision, one initially at rest: they **exchange velocities**. The mover stops dead; the target departs at the incoming speed — the Newton's-cradle result.`
    },
    {
      id: 'mom2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Perfectly Inelastic Collision, Fully Audited

**Problem.** A $2\\;\\text{kg}$ cart moving at $6\\;\\text{m/s}$ hits a stationary $4\\;\\text{kg}$ cart and couples to it.

- **(a)** What is the total momentum before the collision?
- **(b)** How fast does the coupled pair move, and is that speed sensible?
- **(c)** How much kinetic energy is lost in the collision?
- **(d)** What speed would a kinetic-energy equation wrongly predict, and why is it wrong?

**(a) Momentum before.** $p = (2)(6) + (4)(0) = 12\\;\\text{kg}\\cdot\\text{m/s}$

**(b) Final velocity.** With $p = 12\\;\\text{kg}\\cdot\\text{m/s}$ from (a): $v' = \\dfrac{p}{m_{total}} = \\dfrac{12}{6} = 2\\;\\text{m/s}$. Sanity check: the stuck pair moves slower than the incoming cart (mass grew, momentum did not), and its velocity lies between the two initial velocities.

**(c) Kinetic energy audit.** $KE_{before} = \\tfrac{1}{2}(2)(6)^2 = 36\\;\\text{J}$ and, with $v' = 2\\;\\text{m/s}$ from (b), $KE_{after} = \\tfrac{1}{2}(6)(2)^2 = 12\\;\\text{J}$. Two-thirds ($24\\;\\text{J}$) became heat, sound and deformation: momentum survived, kinetic energy did not.

**(d) The classic trap.** Setting $\\tfrac{1}{2}m_1v_1^2 = \\tfrac{1}{2}(m_1+m_2)v'^2$ assumes an elastic collision and gives $v' = \\sqrt{12} \\approx 3.5\\;\\text{m/s}$, which is wrong. When objects stick, momentum is the ONLY conserved quantity you may use across the impact.`
    },
    {
      id: 'mom2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Conservation & Collision Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a collision between two carts with no external forces, which quantity is conserved regardless of the collision type?`,
            options: [`Total momentum`, `Total kinetic energy`, `Both momentum and kinetic energy`, `Each cart's individual momentum`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Momentum conservation follows from Newton's third law alone, so it holds for elastic, inelastic, and perfectly inelastic collisions alike. Kinetic energy is conserved only in the elastic case, and individual momenta certainly change — that is what colliding means.`
          },
          {
            question: `A $3\\;\\text{kg}$ cart moving at $4\\;\\text{m/s}$ collides with a stationary $1\\;\\text{kg}$ cart and they stick together. Their common final speed is:`,
            options: [`$4\\;\\text{m/s}$`, `$1\\;\\text{m/s}$`, `$3\\;\\text{m/s}$`, `$12\\;\\text{m/s}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$p = (3)(4) = 12\\;\\text{kg}\\cdot\\text{m/s}$ shared by $4\\;\\text{kg}$: $v' = 12/4 = 3\\;\\text{m/s}$. Check: slower than the incoming $4\\;\\text{m/s}$, as sticking requires.`
          },
          {
            question: `Which collision type loses the maximum kinetic energy consistent with momentum conservation?`,
            options: [`Elastic`, `Any collision between unequal masses`, `Any collision where one object is initially at rest`, `Perfectly inelastic`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Sticking together minimizes the final KE for the fixed total momentum — that is the definition of perfectly inelastic. Note the KE rarely drops to zero: the stuck pair must keep moving to carry the momentum. Unequal masses or a target at rest say nothing about how much KE is lost; the collision type decides that.`
          },
          {
            question: `Two skaters, $50\\;\\text{kg}$ and $100\\;\\text{kg}$, stand at rest and push off each other. If the $50\\;\\text{kg}$ skater moves away at $2\\;\\text{m/s}$, the $100\\;\\text{kg}$ skater moves at:`,
            options: [`$2\\;\\text{m/s}$ in the same direction`, `$1\\;\\text{m/s}$ in the opposite direction`, `$2\\;\\text{m/s}$ in the opposite direction`, `$1\\;\\text{m/s}$ in the same direction`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Total momentum starts at zero and must stay zero: $(50)(2) = (100)v \\Rightarrow v = 1\\;\\text{m/s}$, oppositely directed. The heavier skater moves slower in inverse proportion to mass, so equal speeds of $2\\;\\text{m/s}$ would leave a net momentum, and any motion in the same direction could never sum to zero.`
          },
          {
            question: `A billiard ball moving at speed $v$ strikes an identical stationary ball head-on in a nearly elastic collision. Just afterward:`,
            options: [`Both balls move forward at $v/2$`, `The incoming ball continues at $v$; the target stays put`, `The incoming ball stops and the target moves forward at $v$`, `Both balls rebound backward`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Equal masses in an elastic head-on collision exchange velocities. Both-at-$v/2$ is the perfectly INELASTIC outcome — it conserves momentum but loses half the KE, so it cannot be the elastic answer. The incoming ball cannot pass through unchanged, and both balls rebounding would give the system backward momentum it never had.`
          }
        ]
      }
    },
    {
      id: 'mom2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Momentum always conserved.** With no net external force, total momentum is conserved in every type of collision.
- **KE only if elastic.** Kinetic energy is conserved only in elastic collisions; inelastic ones turn some into heat.
- **Sticking: one velocity.** Perfectly inelastic: $v' = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}$, with the most KE loss momentum allows.
- **Equal masses exchange.** Head-on, elastic, target at rest: the mover stops and the target leaves at $v$.

**Common traps**

- **KE across a sticking collision.** Equating KE before and after a sticking collision gives a wrong speed; use momentum only.
- **Perfectly inelastic means zero KE.** The stuck pair usually still moves, so some KE remains; only the most possible is lost.
- **Each object's momentum conserved.** Only the TOTAL is conserved; each object's own momentum changes in the collision.
- **Push-offs in one direction.** From rest, total momentum stays zero, so the two move apart with speeds inverse to mass.`
    }
  ]
};
