export const mcatMechMomentumPart4Data = {
  topicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  sections: [
    {
      id: 'mom4-intro',
      type: 'text' as const,
      content: `# Momentum & Collisions

**Part 4 of 4 — MCAT Integration: Center of Mass, 2-D Collisions & Passage Strategy**

### Center of Mass: The System's Representative Point

$x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}$

The center of mass sits closer to the heavier object, and it moves as if the total mass were concentrated there with only EXTERNAL forces acting. Internal forces — collisions, explosions, people pulling ropes — cannot budge it:

- A shell explodes mid-flight: the fragments scatter, but their center of mass **continues along the original parabola** (until pieces land)
- Two skaters pull on a rope between them: they meet AT the center of mass, which never moves
- A person walks toward the bow of a free-floating canoe: the canoe slides backward so the system's center of mass stays put

This is momentum conservation restated: constant total momentum means constant center-of-mass velocity.

### Choosing the Tool (the Real MCAT Skill)

| The question says... | Use |
|---|---|
| "They stick together" / "embeds" | Momentum only across the impact |
| "Perfectly elastic" | Momentum AND kinetic energy |
| "How high / how far after the collision" | Momentum through impact, then energy |
| "Average force during impact" | Impulse: $F = \\Delta p/\\Delta t$ |
| "Where do they meet?" (internal forces only) | Center of mass is fixed |

### Impulse in Physiology and Safety

Force plates in gait labs record the $F$-$t$ curve of each footfall; the area is the impulse, fixed by the runner's momentum change. Cushioned shoes, bent knees, and gymnastic mats cannot alter that area — they stretch it in time, lowering the peak force that bone and cartilage must bear. Passage answers about padding, airbags, or landing technique are all the same sentence: **same** $\\Delta p$**, longer** $\\Delta t$**, smaller peak** $F$.`
    },
    {
      id: 'mom4-worked',
      type: 'text' as const,
      content: `### Worked Example — A 2-D Perfectly Inelastic Crash

A $1000\\;\\text{kg}$ car heading east at $20\\;\\text{m/s}$ collides at an intersection with a $1000\\;\\text{kg}$ car heading north at $20\\;\\text{m/s}$. They lock together.

**Step 1 — Conserve each component separately.**

$p_x = (1000)(20) = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s (east)}$

$p_y = (1000)(20) = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s (north)}$

**Step 2 — Final velocity components.** Total mass $2000\\;\\text{kg}$:

$v_x = 10\\;\\text{m/s}, \\qquad v_y = 10\\;\\text{m/s}$

**Step 3 — Direction and speed.** Equal components mean $45^\\circ$ north of east, with speed

$v = \\sqrt{10^2 + 10^2} = 10\\sqrt{2} \\approx 14\\;\\text{m/s}$

Note the wreck does NOT leave at $20\\;\\text{m/s}$: each car's momentum had to be shared with the other car's mass in a direction it was not moving.

### Worked Example — Center of Mass Bookkeeping

A $60\\;\\text{kg}$ skater and a $40\\;\\text{kg}$ skater, $10\\;\\text{m}$ apart on frictionless ice, pull on a rope. Where do they meet?

$x_{cm} = \\frac{(60)(0) + (40)(10)}{100} = 4\\;\\text{m from the heavier skater}$

No matter who pulls harder or when, the meeting point is fixed at the center of mass — internal forces cannot move it. The heavier skater travels $4\\;\\text{m}$; the lighter one travels $6\\;\\text{m}$: displacements in inverse ratio to mass, exactly like recoil speeds.`
    },
    {
      id: 'mom4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Momentum** 🎯`,
      exercise: {
        questions: [
          {
            question: `A projectile explodes into fragments at the top of its arc (ignore air resistance). Before any fragment lands, the center of mass of the fragments:`,
            options: [`Stops moving at the explosion point`, `Rises higher than the original trajectory`, `Continues along the original parabolic path`, `Drops straight down from the explosion point`],
            correctAnswer: 2,
            explanation: `The explosion is internal; the only external force is still gravity. The center of mass keeps following the parabola the intact shell would have flown. Individual fragments scatter, but their mass-weighted average does not.`
          },
          {
            question: `An MCAT passage states two vehicles "lock together on impact" and asks for their common speed afterward. The correct approach is:`,
            options: [`Conserve momentum across the collision`, `Conserve kinetic energy across the collision`, `Conserve both momentum and kinetic energy`, `Set the impulse equal to zero`],
            correctAnswer: 0,
            explanation: `"Lock together" flags a perfectly inelastic collision: momentum is the only conserved quantity across the impact. KE conservation would apply only to a stated elastic collision; the impulse on each car is decidedly nonzero.`
          },
          {
            question: `A $1000\\;\\text{kg}$ car moving east at $20\\;\\text{m/s}$ and an identical car moving north at $20\\;\\text{m/s}$ stick together in a crash. The wreck moves:`,
            options: [`Due east at $20\\;\\text{m/s}$`, `Due north at $10\\;\\text{m/s}$`, `Northeast at $20\\;\\text{m/s}$`, `At $45^\\circ$ north of east at about $14\\;\\text{m/s}$`],
            correctAnswer: 3,
            explanation: `Equal masses and speeds give equal momentum components, so the direction bisects at $45^\\circ$. Each component of velocity is $10\\;\\text{m/s}$ (momentum now shared by $2000\\;\\text{kg}$), so $v = 10\\sqrt{2} \\approx 14\\;\\text{m/s}$ — not $20$.`
          },
          {
            question: `A force-plate study finds cushioned landing surfaces reduce peak impact force in runners. The best physical explanation is that the cushioning:`,
            options: [`Reduces the runner's momentum change during footstrike`, `Extends the contact time over which the fixed momentum change occurs`, `Absorbs the runner's momentum so less reaches the leg`, `Decreases the impulse delivered to the leg`],
            correctAnswer: 1,
            explanation: `The momentum change (and hence impulse) is set by the runner's motion and cannot be reduced — momentum is not "absorbed." Cushioning stretches $\\Delta t$, and $F = \\Delta p/\\Delta t$ falls accordingly. Same area under the F-t curve, lower peak.`
          },
          {
            question: `Across which of the following events is MECHANICAL kinetic energy conserved?`,
            options: [`An elastic collision between two gas molecules`, `A bullet embedding in a block`, `A firecracker exploding at rest`, `Two railroad cars coupling together`],
            correctAnswer: 0,
            explanation: `Elastic collisions conserve KE by definition, and molecular collisions are the textbook genuine example. Embedding and coupling are perfectly inelastic (KE destroyed); an explosion CREATES kinetic energy from chemical energy. All four conserve momentum.`
          }
        ]
      }
    },
    {
      id: 'mom4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- The center of mass moves under external forces only; collisions, explosions, and rope-pulling cannot shift it
- Exploding projectile: the fragments' center of mass finishes the original parabola
- 2-D collisions: conserve $p_x$ and $p_y$ as separate equations; sticking crashes leave at the momentum-vector angle
- Tool choice is the tested skill: "stick" means momentum only; "elastic" adds KE; "how high after" chains momentum into energy; "average force" means impulse
- Padding and cushioning never reduce $\\Delta p$ — they stretch $\\Delta t$ to shrink peak force
- Displacements toward a shared center of mass scale inversely with mass, just like recoil speeds`
    }
  ]
};
