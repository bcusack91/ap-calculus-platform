export const mcatMechKinPart3Data = {
  topicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  sections: [
    {
      id: 'kin3-intro',
      type: 'text' as const,
      content: `# Kinematics: Describing Motion

**Part 3 of 4 — Projectiles & Free Fall in Practice**

### The One Rule of Projectile Motion

**Horizontal and vertical motions are completely independent.** Gravity acts only vertically.

| Direction | Acceleration | Velocity |
|---|---|---|
| Horizontal ($x$) | $a_x = 0$ | $v_x = v_0\\cos\\theta$ = constant |
| Vertical ($y$) | $a_y = -g$ | $v_y = v_0\\sin\\theta - gt$ |

Consequences the MCAT tests over and over:

- A bullet **fired horizontally** and one **dropped** from the same height hit the ground **at the same time**
- The horizontal speed never changes the fall time
- An object released from a moving carrier (a crate from a plane in level flight) starts with the carrier's horizontal velocity, so with no air resistance it stays directly below the carrier as it falls
- At the apex, the velocity is **purely horizontal** (not zero, unless launched straight up)
- Over level ground, the range is $R = \\frac{v_0^2\\sin 2\\theta}{g}$: it is maximized at $45^\\circ$, and complementary angles (e.g., $30^\\circ$ and $60^\\circ$) give the same range because they share $\\sin 2\\theta$
- With air resistance (qualitative only), the range shrinks and the best launch angle drops below $45^\\circ$

### MCAT-Friendly Trig Values

The MCAT hands you triangles you can do in your head. Memorize:

$\\sin 30^\\circ = 0.5, \\quad \\cos 30^\\circ \\approx 0.87$

$\\sin 37^\\circ \\approx 0.6, \\quad \\cos 37^\\circ \\approx 0.8 \\quad \\text{(the 3-4-5 triangle)}$

$\\sin 45^\\circ = \\cos 45^\\circ \\approx 0.7$

$\\sin 53^\\circ \\approx 0.8, \\quad \\cos 53^\\circ \\approx 0.6$`
    },
    {
      id: 'kin3-worked',
      type: 'text' as const,
      content: `### Worked Example — Angled Launch (3-4-5 numbers)

**Problem.** A projectile is launched over level ground at $50\\;\\text{m/s}$ at $37^\\circ$ above the horizontal ($g = 10\\;\\text{m/s}^2$).

- **(a)** What are the horizontal and vertical components of the launch velocity?
- **(b)** How long does the projectile take to reach the apex?
- **(c)** How high does it rise?
- **(d)** What are the total flight time and the range?

**(a) Resolve the launch velocity.** $v_x = 50\\cos 37^\\circ = 50(0.8) = 40\\;\\text{m/s}$ and $v_{y0} = 50\\sin 37^\\circ = 50(0.6) = 30\\;\\text{m/s}$.

**(b) Time to apex.** Only the vertical motion matters, and $v_y = 0$ at the apex: with $v_{y0} = 30\\;\\text{m/s}$ from (a), $t_{up} = \\frac{30}{10} = 3\\;\\text{s}$.

**(c) Maximum height.** With $v_{y0} = 30\\;\\text{m/s}$ from (a), $H =\\frac{(30)^2}{2(10)} = \\frac{900}{20} = 45\\;\\text{m}$

**(d) Total time and range.** With $t_{up} = 3\\;\\text{s}$ from (b), symmetry gives $T = 2(3) = 6\\;\\text{s}$, and the horizontal speed of $40\\;\\text{m/s}$ from (a) never changes: $R = v_x T = (40)(6) = 240\\;\\text{m}$.

### Worked Example — Horizontal Launch

**Problem.** A ball leaves the edge of a $45\\;\\text{m}$ cliff moving horizontally at $20\\;\\text{m/s}$ ($g = 10\\;\\text{m/s}^2$).

- **(a)** How long does the ball take to reach the ground?
- **(b)** How far from the base of the cliff does it land?
- **(c)** How fast is it moving when it lands?

**(a) Fall time.** The vertical motion starts from $v_{y0} = 0$: $45 = 5t^2 \\Rightarrow t^2 = 9 \\Rightarrow t = 3\\;\\text{s}$.

**(b) Horizontal distance.** With $t = 3\\;\\text{s}$ from (a) and $v_x$ unchanged: $x = (20)(3) = 60\\;\\text{m}$.

**(c) Landing speed.** $v_x = 20\\;\\text{m/s}$ (unchanged) and, with $t = 3\\;\\text{s}$ from (a), $v_y = (10)(3) = 30\\;\\text{m/s}$, so

$v = \\sqrt{20^2 + 30^2} = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36\\;\\text{m/s}$

On the MCAT, estimate: $\\sqrt{1300}$ is a bit more than $\\sqrt{1225} = 35$.`
    },
    {
      id: 'kin3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Projectiles & Free Fall** 🎯`,
      exercise: {
        questions: [
          {
            question: `A ball rolls off a $5\\;\\text{m}$ high table at $10\\;\\text{m/s}$ ($g = 10\\;\\text{m/s}^2$). It lands a horizontal distance from the table's base of:`,
            options: [`5 m`, `20 m`, `1 m`, `10 m`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Fall time: $y = 5t^2$ with $y = 5$ m gives $t = 1$ s. Horizontal distance: $x = (10)(1) = 10$ m. The horizontal speed does not affect the fall time. The 5 m answer just repeats the height, 20 m doubles the correct distance, and 1 m confuses the fall time with a distance.`
          },
          {
            question: `At the highest point of its arc, a projectile launched at an angle has a velocity that is:`,
            options: [`Purely horizontal and nonzero`, `Zero`, `Purely vertical`, `Equal to its launch velocity`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Only $v_y$ passes through zero at the apex; $v_x = v_0\\cos\\theta$ never changes. Velocity is zero at the top only for a perfectly vertical throw. It cannot equal the launch velocity, because the vertical component has vanished.`
          },
          {
            question: `One bullet is dropped and another is fired horizontally from the same height at the same instant (level ground, no air resistance). Which lands first?`,
            options: [`The dropped bullet`, `The fired bullet`, `They land at the same time`, `It depends on the speed`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Vertical motion is identical for both: same initial $v_y = 0$, same $g$. Horizontal velocity is irrelevant to fall time, however fast the second bullet is fired — the signature fact of projectile independence.`
          },
          {
            question: `A projectile is launched at $40\\;\\text{m/s}$ at $30^\\circ$ above horizontal ($g = 10\\;\\text{m/s}^2$). Its total flight time over level ground is:`,
            options: [`2 s`, `4 s`, `8 s`, `7 s`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$v_{y0} = 40\\sin 30^\\circ = 20$ m/s, so $t_{up} = 20/10 = 2$ s and total $T = 4$ s. Answering 2 s counts only the rise; 8 s doubles twice; 7 s swaps sine and cosine ($40\\cos 30^\\circ \\approx 35$ m/s gives $T \\approx 7$ s).`
          },
          {
            question: `Over level ground, a launch angle of $20^\\circ$ gives the same range as a launch angle of:`,
            options: [`$40^\\circ$`, `$45^\\circ$`, `$140^\\circ$`, `$70^\\circ$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Complementary angles ($20^\\circ + 70^\\circ = 90^\\circ$) give equal ranges because $R = v_0^2\\sin(2\\theta)/g$ and $\\sin 40^\\circ = \\sin 140^\\circ$. The higher angle spends longer in the air but covers ground more slowly. Choosing $140^\\circ$ applies that identity to $\\theta$ instead of $2\\theta$ (and would aim the launch backward); $40^\\circ$ doubles the angle instead of complementing it; $45^\\circ$ is the maximum-range angle, which no other angle matches.`
          }
        ]
      }
    },
    {
      id: 'kin3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Independent motions.** The horizontal velocity stays constant while the vertical motion is free fall; gravity acts only vertically.
- **Time from $y$ alone.** The vertical equation sets the flight time; the range is $v_x$ times that time.
- **MCAT trig values.** $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$; $\\sin 30^\\circ = 0.5$ and $\\sin 45^\\circ \\approx 0.7$.
- **Range and angle.** Over level ground range peaks at $45^\\circ$, and complementary angles such as $30^\\circ$ and $60^\\circ$ share a range.

**Common traps**

- **Zero velocity at the apex.** Only $v_y$ is zero at the top; $v_x$ is unchanged, so the speed is not zero.
- **Faster means a longer fall.** A bullet fired horizontally lands at the same time as one dropped from the same height.
- **Counting only the rise.** $v_{y0}/g$ is the time to the apex; over level ground the flight lasts twice as long.
- **Swapping sine and cosine.** For an angle above the horizontal, $v_x = v_0\\cos\\theta$ and $v_y = v_0\\sin\\theta$.`
    }
  ]
};
