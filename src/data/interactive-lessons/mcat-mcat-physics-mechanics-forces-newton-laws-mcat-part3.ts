export const mcatMechForcesPart3Data = {
  topicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  sections: [
    {
      id: 'frc3-intro',
      type: 'text' as const,
      content: `# Forces & Newton's Laws

**Part 3 of 4 — Tension, Apparent Weight & Circular Motion**

### Tension

An ideal (massless) rope carries the same tension everywhere along its length; pulleys only redirect it. Tension pulls **away** from the object along the rope — ropes pull, never push.

**Accelerating load:** tension is no longer just the weight. A bucket hauled upward with acceleration $a$ has $T - mg = ma$, so $T = m(g + a)$.

**Atwood machine:** two masses over one ideal pulley share one tension and one acceleration magnitude, $a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$.

### Apparent Weight (Elevators)

A scale reads the **normal force** it exerts, not your actual weight. In an elevator, apply $F_{net} = ma$ vertically to the person:

$N - mg = ma \\Rightarrow N = m(g + a)$

with $a$ positive for **upward** acceleration:

| Elevator motion | Acceleration | Scale reads |
|---|---|---|
| At rest or constant velocity | $0$ | $mg$ (true weight) |
| Accelerating upward | $+a$ | $m(g+a)$ — heavier |
| Accelerating downward | $-a$ | $m(g-a)$ — lighter |
| Free fall (cable cut) | $-g$ | $0$ — "weightless" |

Direction of **velocity** is irrelevant; only acceleration matters. Moving down while slowing is an upward acceleration — the scale reads heavy.

### Uniform Circular Motion

An object moving in a circle at constant speed still accelerates, because its velocity direction changes. The acceleration points **toward the center**:

$a_c = \\frac{v^2}{r} \\qquad F_c = \\frac{mv^2}{r}$

Centripetal force is not a new force — it is the **net inward force**, always supplied by real forces: **static** friction for a car on a flat curve (gripping tires do not slide), tension for a ball on a string, gravity for the Moon. At the bottom of a vertical loop $N - mg$ points up toward the center, so $N = mg + mv^2/r$: you feel heavy.

There is no outward "centrifugal force" acting on the object; the outward fling you feel is your inertia trying to continue in a straight line.

### Newton's Law of Gravitation

Gravity acts between any two masses. Near Earth's surface it is simply the weight $mg$; for an orbiting moon or satellite it supplies the centripetal force:

$F = \\frac{Gm_1m_2}{r^2}$

where $r$ is the center-to-center distance and $G$ is the universal gravitational constant (a passage supplies its value when needed). What the MCAT tests is the scaling:

- **Inverse square in distance.** Double $r$ and the force falls to $\\frac{1}{4}$; triple it and the force falls to $\\frac{1}{9}$.
- **Linear in each mass.** Double either mass and the force doubles; double both and it quadruples.`
    },
    {
      id: 'frc3-worked',
      type: 'text' as const,
      content: `### Worked Example — The Elevator Scale

**Problem.** A $50\\;\\text{kg}$ patient stands on a scale in an elevator ($g = 10\\;\\text{m/s}^2$).

- **(a)** What does the scale read while the elevator accelerates upward at $2\\;\\text{m/s}^2$?
- **(b)** What does it read while the elevator accelerates downward at $2\\;\\text{m/s}^2$?
- **(c)** What does it read while the elevator moves upward at a constant $3\\;\\text{m/s}$?

**(a) Accelerating upward.** Upward acceleration adds to $g$:

$N = m(g + a) = 50(10 + 2) = 600\\;\\text{N}$

**(b) Accelerating downward.** The acceleration now points down, so its magnitude $a = 2\\;\\text{m/s}^2$ is subtracted:

$N = m(g - a) = 50(10 - 2) = 400\\;\\text{N}$

**(c) Constant velocity.** Constant velocity means zero acceleration:

$a = 0 \\Rightarrow N = mg = 500\\;\\text{N}$

The scale cannot tell constant-velocity motion from standing still — only acceleration registers.

### Worked Example — Rounding a Curve

**Problem.** A $1000\\;\\text{kg}$ car rounds a flat curve of radius $50\\;\\text{m}$ at $10\\;\\text{m/s}$.

- **(a)** How much centripetal force does the car need?
- **(b)** What supplies that force, and what happens if the road cannot?
- **(c)** How much force would the car need at $20\\;\\text{m/s}$?

**(a) Required centripetal force.**

$F_c = \\frac{mv^2}{r} = \\frac{(1000)(10)^2}{50} = \\frac{100000}{50} = 2000\\;\\text{N}$

**(b) What supplies it?** Static friction from the road on the tires, pointing toward the center of the curve. If the road cannot supply the $2000\\;\\text{N}$ from (a) (ice), the car does not fly outward — it continues in a **straight line**, which the curve then bends away from.

**(c) Speed sensitivity.** $F_c \\propto v^2$: doubling the speed to $20\\;\\text{m/s}$ quadruples the $2000\\;\\text{N}$ to $8000\\;\\text{N}$ — why speeding into curves fails so abruptly.`
    },
    {
      id: 'frc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tension, Apparent Weight & Circular Motion** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $60\\;\\text{kg}$ person stands on a scale in an elevator accelerating downward at $3\\;\\text{m/s}^2$ ($g = 10\\;\\text{m/s}^2$). The scale reads:`,
            options: [`$420\\;\\text{N}$`, `$600\\;\\text{N}$`, `$780\\;\\text{N}$`, `$180\\;\\text{N}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$N = m(g - a) = 60(10 - 3) = 420$ N. Downward acceleration lightens the scale reading. $600$ N is the true weight, which ignores the acceleration; $780$ N would be upward acceleration; and $180$ N is only $ma$.`
          },
          {
            question: `An elevator's cable snaps and the car free-falls. A scale under a passenger now reads:`,
            options: [`$mg$`, `$2mg$`, `$0$`, `$mg/2$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `With $a = -g$, $N = m(g - g) = 0$: passenger and scale fall together, so the scale pushes with nothing. This is the same "weightlessness" as orbiting astronauts — gravity still acts; support forces vanish. $mg$ ignores the acceleration, $2mg$ adds $g$ as if the car accelerated upward, and $mg/2$ would need a downward acceleration of only $g/2$.`
          },
          {
            question: `For an object in uniform circular motion, the net force points:`,
            options: [`Along the direction of motion`, `Toward the center of the circle`, `Radially outward`, `Opposite to the motion`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The velocity direction is changing toward the center, so acceleration — and net force — points centripetally (inward). An outward "centrifugal force" on the object is not a real force.`
          },
          {
            question: `A car travels at $20\\;\\text{m/s}$ around a curve of radius $100\\;\\text{m}$. Its centripetal acceleration is:`,
            options: [`$0.2\\;\\text{m/s}^2$`, `$400\\;\\text{m/s}^2$`, `$40\\;\\text{m/s}^2$`, `$4\\;\\text{m/s}^2$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$a_c = v^2/r = 400/100 = 4\\;\\text{m/s}^2$. Forgetting to square gives $0.2$, forgetting to divide by $r$ leaves $400$, and $40$ drops a zero from the radius; sanity-check with units and magnitude.`
          },
          {
            question: `What force supplies the centripetal force for a car rounding a flat (unbanked) curve?`,
            options: [`Static friction from the road on the tires`, `Kinetic friction, as the tires move`, `The normal force from the road`, `Gravity acting on the car`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The tire tread grips without sliding, so it is STATIC friction that points toward the curve's center. Moving tires do not make the friction kinetic: kinetic friction would mean skidding. On a flat road, the normal force and gravity are vertical and cannot point inward.`
          },
          {
            question: `A $5\\;\\text{kg}$ bucket is hauled up a well by a rope, accelerating upward at $2\\;\\text{m/s}^2$ ($g = 10\\;\\text{m/s}^2$). The tension in the rope is:`,
            options: [`$50\\;\\text{N}$`, `$40\\;\\text{N}$`, `$60\\;\\text{N}$`, `$10\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Newton's second law on the bucket: $T - mg = ma$, so $T = m(g + a) = 5(10 + 2) = 60$ N. $50$ N is the weight alone, true only at constant velocity; $40$ N subtracts the acceleration as if the bucket sped up downward; $10$ N is only the net force $ma$.`
          }
        ]
      }
    },
    {
      id: 'frc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Ideal ropes.** A massless rope carries one tension throughout; pulleys only redirect it, and ropes only pull.
- **Scales read the normal force.** $N = m(g + a)$ with upward $a$ positive, so only acceleration changes the reading.
- **Centripetal acceleration.** Constant-speed circular motion accelerates inward, $a_c = v^2/r$; doubling $v$ quadruples $F_c$.
- **Real forces supply it.** The inward net force always comes from friction, tension, gravity or a normal force.

**Common traps**

- **Velocity sets the reading.** Moving down while slowing is an upward acceleration, so the scale reads heavy.
- **Weightless means no gravity.** In free fall gravity still acts; the scale reads zero because the support force vanishes.
- **Centrifugal force.** No outward force acts on the object; the outward fling is inertia carrying it straight.
- **Kinetic friction on curves.** Gripping tires use static friction; kinetic friction would mean the car is skidding.`
    }
  ]
};
