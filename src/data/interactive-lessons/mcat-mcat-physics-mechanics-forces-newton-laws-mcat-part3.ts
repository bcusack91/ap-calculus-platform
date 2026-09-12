export const mcatMechForcesPart3Data = {
  topicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  sections: [
    {
      id: 'frc3-intro',
      type: 'text' as const,
      content: `# Forces & Newton's Laws

**Part 3 of 4 — Tension, Apparent Weight & Circular Motion**

### Tension

An ideal (massless) rope transmits the same tension everywhere along its length, and pulleys merely redirect it. Tension pulls **away** from the object along the rope — ropes can pull, never push.

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

Centripetal force is not a new force — it is the **net inward force**, always supplied by real forces:

- Car on a flat curve: **static** friction (the tires grip, they do not slide)
- Ball on a string: tension
- Moon around Earth: gravity
- Bottom of a vertical loop: $N - mg$ points up toward the center, so $N = mg + mv^2/r$ — you feel heavy

There is no outward "centrifugal force" acting on the object; the outward fling you feel is your inertia trying to continue in a straight line.`
    },
    {
      id: 'frc3-worked',
      type: 'text' as const,
      content: `### Worked Example — The Elevator Scale

A $50\\;\\text{kg}$ patient stands on a scale in an elevator ($g = 10\\;\\text{m/s}^2$).

**Case 1 — accelerating upward at** $2\\;\\text{m/s}^2$:

$N = m(g + a) = 50(10 + 2) = 600\\;\\text{N}$

**Case 2 — accelerating downward at** $2\\;\\text{m/s}^2$:

$N = m(g - a) = 50(10 - 2) = 400\\;\\text{N}$

**Case 3 — constant velocity** $3\\;\\text{m/s}$ **upward:**

$a = 0 \\Rightarrow N = mg = 500\\;\\text{N}$

The scale cannot tell constant-velocity motion from standing still — only acceleration registers.

### Worked Example — Rounding a Curve

A $1000\\;\\text{kg}$ car rounds a flat curve of radius $50\\;\\text{m}$ at $10\\;\\text{m/s}$.

**Step 1 — Required centripetal force.**

$F_c = \\frac{mv^2}{r} = \\frac{(1000)(10)^2}{50} = \\frac{100000}{50} = 2000\\;\\text{N}$

**Step 2 — What supplies it?** Static friction from the road on the tires, pointing toward the center of the curve. If the road cannot supply $2000\\;\\text{N}$ (ice), the car does not fly outward — it continues in a **straight line**, which the curve then bends away from.

**Step 3 — Speed sensitivity.** $F_c \\propto v^2$: doubling the speed to $20\\;\\text{m/s}$ quadruples the needed force to $8000\\;\\text{N}$ — why speeding into curves fails so abruptly.`
    },
    {
      id: 'frc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tension, Apparent Weight & Circular Motion** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $50\\;\\text{kg}$ person stands on a scale in an elevator accelerating downward at $2\\;\\text{m/s}^2$ ($g = 10\\;\\text{m/s}^2$). The scale reads:`,
            options: [`$400\\;\\text{N}$`, `$500\\;\\text{N}$`, `$600\\;\\text{N}$`, `$100\\;\\text{N}$`],
            correctAnswer: 0,
            explanation: `$N = m(g - a) = 50(10 - 2) = 400$ N. Downward acceleration lightens the scale reading; $600$ N would be upward acceleration.`
          },
          {
            question: `The elevator cable snaps and the car free-falls. The scale under the passenger now reads:`,
            options: [`$mg$`, `$2mg$`, `Zero`, `$mg/2$`],
            correctAnswer: 2,
            explanation: `With $a = -g$, $N = m(g - g) = 0$: passenger and scale fall together, so the scale pushes with nothing. This is the same "weightlessness" as orbiting astronauts — gravity still acts; support forces vanish.`
          },
          {
            question: `For an object in uniform circular motion, the net force points:`,
            options: [`Tangent to the circle, along the motion`, `Toward the center of the circle`, `Radially outward`, `Opposite to the motion`],
            correctAnswer: 1,
            explanation: `The velocity direction is changing toward the center, so acceleration — and net force — points centripetally (inward). An outward "centrifugal force" on the object is not a real force.`
          },
          {
            question: `A car travels at $20\\;\\text{m/s}$ around a curve of radius $100\\;\\text{m}$. Its centripetal acceleration is:`,
            options: [`$0.2\\;\\text{m/s}^2$`, `$2\\;\\text{m/s}^2$`, `$40\\;\\text{m/s}^2$`, `$4\\;\\text{m/s}^2$`],
            correctAnswer: 3,
            explanation: `$a_c = v^2/r = 400/100 = 4\\;\\text{m/s}^2$. Forgetting to square gives $0.2$; sanity-check with units and magnitude.`
          },
          {
            question: `What force supplies the centripetal force for a car rounding a flat (unbanked) curve?`,
            options: [`Static friction from the road on the tires`, `Kinetic friction from the road on the tires`, `The normal force`, `Gravity`],
            correctAnswer: 0,
            explanation: `The tire tread grips without sliding, so it is STATIC friction that points toward the curve's center. Kinetic friction would mean skidding; on a flat road, normal force and gravity are vertical and cannot point inward.`
          }
        ]
      }
    },
    {
      id: 'frc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Ideal ropes carry one tension throughout; pulleys redirect it; ropes only pull
- Scales read the normal force: $N = m(g + a)$ with upward $a$ positive — velocity direction is irrelevant
- Free fall reads zero: "weightlessness" is missing support force, not missing gravity
- Circular motion at constant speed still accelerates inward: $a_c = v^2/r$, $F_c = mv^2/r$
- Centripetal force is the net inward force, always supplied by a real force (friction, tension, gravity, normal)
- $F_c \\propto v^2$: doubling speed quadruples the required inward force`
    }
  ]
};
