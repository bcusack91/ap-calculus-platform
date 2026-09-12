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

$p_{total,\\;before} = p_{total,\\;after}$

$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$

This holds for EVERY collision — sticky, bouncy, or explosive. Friction and gravity are usually negligible over the brief contact, which is why "conservation of momentum" is the default tool the instant two things hit.

### The Collision Taxonomy (High Yield)

| Type | Momentum | Kinetic energy | Signature |
|---|---|---|---|
| Elastic | Conserved | Conserved | Objects bounce apart; no deformation or heat |
| Inelastic | Conserved | Some lost | Objects bounce apart, but KE decreases |
| Perfectly inelastic | Conserved | Maximum possible loss | Objects **stick together**, one final velocity |

The discrimination the MCAT tests: **momentum is conserved in all three; kinetic energy only in elastic collisions.** "Perfectly inelastic" does not mean all KE vanishes — the stuck pair usually still moves (momentum demands it). It means the most KE is lost that momentum conservation allows.

Truly elastic collisions are rare macroscopically (billiard balls approximately; gas molecules genuinely). Car crashes, tackles, and bullets embedding in blocks are perfectly inelastic.

### One Special Case Worth Memorizing

Equal masses, head-on **elastic** collision, one initially at rest: they **exchange velocities**. The mover stops dead; the target departs at the incoming speed — the Newton's-cradle result.`
    },
    {
      id: 'mom2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Perfectly Inelastic Collision, Fully Audited

A $2\\;\\text{kg}$ cart moving at $6\\;\\text{m/s}$ hits a stationary $4\\;\\text{kg}$ cart and couples to it.

**Step 1 — Momentum before.**

$p = (2)(6) + (4)(0) = 12\\;\\text{kg}\\cdot\\text{m/s}$

**Step 2 — Final velocity of the pair.**

$v' = \\frac{p}{m_{total}} = \\frac{12}{6} = 2\\;\\text{m/s}$

**Step 3 — Kinetic energy audit.**

$KE_{before} = \\tfrac{1}{2}(2)(6)^2 = 36\\;\\text{J}, \\qquad KE_{after} = \\tfrac{1}{2}(6)(2)^2 = 12\\;\\text{J}$

Two-thirds of the kinetic energy ($24\\;\\text{J}$) became heat, sound, and deformation. Momentum survived intact; kinetic energy did not — the defining fingerprint of an inelastic collision.

**The classic trap:** setting $\\tfrac{1}{2}m_1v_1^2 = \\tfrac{1}{2}(m_1+m_2)v'^2$ for a sticking collision. That equation assumes elastic behavior and gives $v' = \\sqrt{12} \\approx 3.5\\;\\text{m/s}$ — wrong. When objects stick, momentum is the ONLY conserved quantity you may use across the impact.

**Sanity habit:** the stuck pair must move slower than the incoming object (mass grew, momentum did not), and its velocity must lie between the two initial velocities.`
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
            explanation: `Momentum conservation follows from Newton's third law alone, so it holds for elastic, inelastic, and perfectly inelastic collisions alike. Kinetic energy is conserved only in the elastic case, and individual momenta certainly change — that is what colliding means.`
          },
          {
            question: `A $3\\;\\text{kg}$ cart moving at $4\\;\\text{m/s}$ collides with a stationary $1\\;\\text{kg}$ cart and they stick together. Their common final speed is:`,
            options: [`$4\\;\\text{m/s}$`, `$1\\;\\text{m/s}$`, `$3\\;\\text{m/s}$`, `$12\\;\\text{m/s}$`],
            correctAnswer: 2,
            explanation: `$p = (3)(4) = 12\\;\\text{kg}\\cdot\\text{m/s}$ shared by $4\\;\\text{kg}$: $v' = 12/4 = 3\\;\\text{m/s}$. Check: slower than the incoming $4\\;\\text{m/s}$, as sticking requires.`
          },
          {
            question: `Which collision type loses the maximum kinetic energy consistent with momentum conservation?`,
            options: [`Elastic`, `Any collision between unequal masses`, `Any collision where one object is initially at rest`, `Perfectly inelastic`],
            correctAnswer: 3,
            explanation: `Sticking together minimizes the final KE for the fixed total momentum — that is the definition of perfectly inelastic. Note the KE rarely drops to zero: the stuck pair must keep moving to carry the momentum.`
          },
          {
            question: `Two skaters, $50\\;\\text{kg}$ and $100\\;\\text{kg}$, stand at rest and push off each other. If the $50\\;\\text{kg}$ skater moves away at $2\\;\\text{m/s}$, the $100\\;\\text{kg}$ skater moves at:`,
            options: [`$2\\;\\text{m/s}$ in the same direction`, `$1\\;\\text{m/s}$ in the opposite direction`, `$4\\;\\text{m/s}$ in the opposite direction`, `$1\\;\\text{m/s}$ in the same direction`],
            correctAnswer: 1,
            explanation: `Total momentum starts at zero and must stay zero: $(50)(2) = (100)v \\Rightarrow v = 1\\;\\text{m/s}$, oppositely directed. The heavier skater moves slower in inverse proportion to mass.`
          },
          {
            question: `A billiard ball moving at speed $v$ strikes an identical stationary ball head-on in a nearly elastic collision. Just afterward:`,
            options: [`Both balls move forward at $v/2$`, `The incoming ball continues at $v$ and the target stays put`, `The incoming ball stops and the target moves forward at $v$`, `Both balls rebound backward`],
            correctAnswer: 2,
            explanation: `Equal masses in an elastic head-on collision exchange velocities. Both-at-$v/2$ is the perfectly INELASTIC outcome — it conserves momentum but loses half the KE, so it cannot be the elastic answer.`
          }
        ]
      }
    },
    {
      id: 'mom2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- With no external force, total momentum is conserved in EVERY collision — the third law guarantees it
- Kinetic energy is conserved only in elastic collisions; perfectly inelastic (sticking) loses the maximum KE allowed
- Perfectly inelastic: one final velocity, $v' = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}$
- Never write a KE-conservation equation across a sticking collision — momentum only
- Equal masses, elastic, target at rest: velocities exchange (Newton's cradle)
- Push-offs and recoils are collisions run backward: total momentum stays zero`
    }
  ]
};
