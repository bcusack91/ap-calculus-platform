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

**Problem.** A $1000\\;\\text{kg}$ car heading east at $20\\;\\text{m/s}$ collides at an intersection with a $1000\\;\\text{kg}$ car heading north at $20\\;\\text{m/s}$. They lock together.

- **(a)** What are the east and north components of the total momentum?
- **(b)** What are the wreck's velocity components?
- **(c)** In what direction, and at what speed, does the wreck leave?
- **(d)** Why doesn't the wreck leave at $20\\;\\text{m/s}$?

**(a) Each component separately.** $p_x = (1000)(20) = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$ east and $p_y = (1000)(20) = 2 \\times 10^4\\;\\text{kg}\\cdot\\text{m/s}$ north; each is conserved on its own.

**(b) Velocity components.** Sharing the momenta from (a) over the total mass of $2000\\;\\text{kg}$: $v_x = 10\\;\\text{m/s}$ and $v_y = 10\\;\\text{m/s}$.

**(c) Direction and speed.** Equal components from (b) mean $45^\\circ$ north of east, at $v = \\sqrt{10^2 + 10^2} = 10\\sqrt{2} \\approx 14\\;\\text{m/s}$.

**(d) Why not 20.** Each car's momentum had to be shared with the other car's mass, which was not moving in that direction, so each velocity component halves to $10\\;\\text{m/s}$ and the speeds do not simply carry over.

### Worked Example — Center of Mass Bookkeeping

**Problem.** A $60\\;\\text{kg}$ skater and a $40\\;\\text{kg}$ skater stand $10\\;\\text{m}$ apart on frictionless ice and pull on a rope between them.

- **(a)** Where do they meet?
- **(b)** Would pulling harder, or pulling first, change the meeting point?
- **(c)** How far does each skater travel?

**(a) Meeting point.** Put the heavier skater at $x = 0$: $x_{cm} = \\dfrac{(60)(0) + (40)(10)}{100} = 4\\;\\text{m}$ from the heavier skater. They meet at the center of mass.

**(b) Internal forces.** No. The rope forces are internal, so no matter who pulls harder or when, the center of mass stays fixed and so does the meeting point.

**(c) Distances.** With the meeting point $4\\;\\text{m}$ from the heavier skater (a), the $60\\;\\text{kg}$ skater travels $4\\;\\text{m}$ and the $40\\;\\text{kg}$ skater $6\\;\\text{m}$: displacements in inverse ratio to mass, exactly like recoil speeds.`
    },
    {
      id: 'mom4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Momentum** 🎯`,
      exercise: {
        questions: [
          {
            question: `A projectile explodes into fragments at the top of its arc (ignore air resistance). Before any fragment lands, the center of mass of the fragments:`,
            options: [`Stops moving at the explosion point`, `Rises higher than the original trajectory`, `Continues along the original parabolic path`, `Drops straight down from the apex`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The explosion is internal; the only external force is still gravity. The center of mass keeps following the parabola the intact shell would have flown. Individual fragments scatter, but their mass-weighted average does not. Stopping, rising higher or dropping straight down would each need an external force the explosion does not supply.`
          },
          {
            question: `An MCAT passage states two vehicles "lock together on impact" and asks for their common speed afterward. The correct approach is:`,
            options: [`Conserve momentum across the collision`, `Conserve kinetic energy across the collision`, `Conserve both momentum and kinetic energy`, `Set the impulse on each car equal to zero`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `"Lock together" flags a perfectly inelastic collision: momentum is the only conserved quantity across the impact. KE conservation would apply only to a stated elastic collision; the impulse on each car is decidedly nonzero, since each car's momentum changes.`
          },
          {
            question: `A $1000\\;\\text{kg}$ car moving east at $15\\;\\text{m/s}$ and an identical car moving north at $15\\;\\text{m/s}$ stick together in a crash. The wreck moves:`,
            options: [`Due east at $15.0\\;\\text{m/s}$`, `$45^\\circ$ north of east at $7.5\\;\\text{m/s}$`, `$45^\\circ$ north of east at $15.0\\;\\text{m/s}$`, `$45^\\circ$ north of east at $10.6\\;\\text{m/s}$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Equal masses and speeds give equal momentum components, so the direction bisects at $45^\\circ$. Each component of velocity is $7.5\\;\\text{m/s}$ (momentum now shared by $2000\\;\\text{kg}$), so $v = 7.5\\sqrt{2} \\approx 10.6\\;\\text{m/s}$. $15.0\\;\\text{m/s}$ carries the original speed over, $7.5\\;\\text{m/s}$ mistakes one component for the speed, and a due-east wreck ignores the northbound car's momentum.`
          },
          {
            question: `A force-plate study finds cushioned landing surfaces reduce peak impact force in runners. The best physical explanation is that the cushioning:`,
            options: [`Reduces the runner's momentum change during footstrike`, `Lengthens the foot's contact time`, `Absorbs the runner's momentum so less reaches the leg`, `Decreases the impulse delivered to the leg`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The momentum change (and hence impulse) is set by the runner's motion and cannot be reduced — momentum is not "absorbed." Cushioning stretches the contact time $\\Delta t$ over which that fixed $\\Delta p$ occurs, and $F = \\Delta p/\\Delta t$ falls accordingly. Same area under the F-t curve, lower peak.`
          },
          {
            question: `Across which of the following events is MECHANICAL kinetic energy conserved?`,
            options: [`Two helium atoms colliding at low energy`, `A bullet embedding in a block`, `A firecracker exploding at rest`, `Two railroad cars coupling together`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Noble-gas atoms colliding at low energy have no way to store energy internally (no bonds to stretch, no electrons excited), so their collisions are genuinely elastic and conserve KE. Embedding and coupling are perfectly inelastic (the most KE momentum allows is lost); an explosion CREATES kinetic energy from chemical energy. All four conserve momentum.`
          }
        ]
      }
    },
    {
      id: 'mom4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **CM ignores internal forces.** Only external forces move the center of mass; collisions, explosions and rope-pulling cannot.
- **Shell CM finishes the parabola.** After a mid-flight explosion, the fragments' center of mass follows the original path.
- **Name the tool.** "Stick": momentum only; "elastic": add KE; "how high after": momentum, then energy; "average force": impulse.
- **Padding stretches time.** Cushioning keeps $\\Delta p$ fixed and extends $\\Delta t$, lowering the peak force.

**Common traps**

- **Wreck keeps 20 m/s.** Equal cars at $20\\;\\text{m/s}$ east and north lock and leave at about $14\\;\\text{m/s}$, $45^\\circ$ north of east.
- **Harder puller moves the CM.** Rope forces are internal, so the skaters meet at the same fixed point whoever pulls.
- **Equal displacements.** Skaters cover distances inverse to mass: the $60\\;\\text{kg}$ one moves $4\\;\\text{m}$, the $40\\;\\text{kg}$ one $6\\;\\text{m}$.
- **Momentum gets absorbed.** Cushions never reduce $\\Delta p$ or the impulse; only the peak force falls.`
    }
  ]
};
