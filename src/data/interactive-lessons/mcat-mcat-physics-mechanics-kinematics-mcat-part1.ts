export const mcatMechKinPart1Data = {
  topicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  sections: [
    {
      id: 'kin1-intro',
      type: 'text' as const,
      content: `# Kinematics: Describing Motion

**Part 1 of 4 — Motion Concepts & Graphs**

Kinematics is the language of motion — it describes *how* things move without asking *why*. On the MCAT, kinematics questions reward precise vocabulary and fast graph reading far more than heavy algebra.

### Scalars vs. Vectors

| Scalar (magnitude only) | Vector (magnitude + direction) |
|---|---|
| Distance | Displacement |
| Speed | Velocity |
| Time, mass, energy | Acceleration, force, momentum |

- **Distance** is the total path length traveled — it never decreases.
- **Displacement** $\\Delta x = x_f - x_0$ is the straight-line change in position. Walk one full lap around a track: distance $= 400\\;\\text{m}$, displacement $= 0$.

### Velocity and Speed

$\\bar{v} = \\frac{\\Delta x}{\\Delta t} \\quad \\text{(average velocity, uses displacement)}$

$\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}$

Average speed is always greater than or equal to the magnitude of average velocity; they are equal only for straight-line motion that never reverses direction.

**Instantaneous velocity** is the velocity at a single moment: the slope of the tangent line to the $x$-$t$ graph at that instant. Its magnitude is the instantaneous speed.

### Acceleration

$\\bar{a} = \\frac{\\Delta v}{\\Delta t}$

Acceleration is any change in *velocity* — speeding up, slowing down, **or turning**. A car rounding a curve at constant speed is accelerating because the direction of its velocity changes.

**Sign convention:** "deceleration" simply means acceleration pointing opposite to the velocity. An object moving in the $+x$ direction and slowing down has a negative acceleration.`
    },
    {
      id: 'kin1-graphs',
      type: 'text' as const,
      content: `### Reading Motion Graphs (High Yield)

The MCAT loves graph questions because they test understanding, not computation. Memorize this table:

| Graph | Slope gives | Area under curve gives |
|---|---|---|
| Position vs. time ($x$-$t$) | Velocity | — |
| Velocity vs. time ($v$-$t$) | Acceleration | Displacement |
| Acceleration vs. time ($a$-$t$) | — | Change in velocity |

Key readings:

- A **horizontal line** on an $x$-$t$ graph means the object is at rest.
- A **straight, sloped line** on an $x$-$t$ graph means constant velocity.
- A **curved** $x$-$t$ graph means the velocity is changing (acceleration).
- On a $v$-$t$ graph, crossing the time axis means the object **reverses direction**.
- Area below the time axis on a $v$-$t$ graph counts as *negative* displacement.

### Worked Example — Average Speed vs. Average Velocity

**Problem.** A nurse walks $300\\;\\text{m}$ east down a hospital corridor in $40\\;\\text{s}$, realizes she forgot a chart, and walks $100\\;\\text{m}$ back west in $10\\;\\text{s}$.

- **(a)** What total distance does she walk, and how long does the whole trip take?
- **(b)** What is her average speed?
- **(c)** What are her displacement and her average velocity?
- **(d)** Why is the average speed larger than the magnitude of the average velocity?

**(a) Distance and time.** Distance adds every leg regardless of direction: $d = 300 + 100 = 400\\;\\text{m}$, and $t = 40 + 10 = 50\\;\\text{s}$.

**(b) Average speed.** With $d = 400\\;\\text{m}$ and $t = 50\\;\\text{s}$ from (a): $\\text{speed} = \\frac{400}{50} = 8\\;\\text{m/s}$.

**(c) Displacement and average velocity.** The west leg subtracts: $\\Delta x = 300 - 100 = 200\\;\\text{m east}$, so $\\bar{v} = \\frac{200}{50} = 4\\;\\text{m/s east}$.

**(d) Why they differ.** The path doubled back on itself, so the $100\\;\\text{m}$ walked west adds to the distance but cancels part of the displacement: $8\\;\\text{m/s}$ of speed against $4\\;\\text{m/s}$ of velocity.`
    },
    {
      id: 'kin1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Motion Concepts & Graphs** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient walks 30 m east, then 40 m north. The magnitude of the displacement is:`,
            options: [`70 m`, `10 m`, `50 m`, `35 m`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Displacement is the straight-line vector from start to finish: $\\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ m (a 3-4-5 triangle). The 70 m answer is the *distance* traveled, 10 m subtracts the legs as if they were opposite, and 35 m averages them.`
          },
          {
            question: `A velocity-time graph shows a horizontal line at $v = 6\\;\\text{m/s}$ for $5\\;\\text{s}$. The displacement during this interval is:`,
            options: [`30 m`, `1.2 m`, `11 m`, `0 m`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Displacement is the area under a $v$-$t$ graph: $(6)(5) = 30$ m. Dividing ($6/5 = 1.2$) or adding ($6+5=11$) are the classic errors, and 0 m reads the zero slope (no acceleration) as no motion.`
          },
          {
            question: `The slope of a position-time graph at a given instant equals the object's:`,
            options: [`Instantaneous acceleration`, `Displacement from the origin`, `Total distance traveled so far`, `Instantaneous velocity`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Slope of $x$-$t$ is $\\Delta x/\\Delta t$, which is velocity; at a single instant it is the slope of the tangent line, the instantaneous velocity. Slope of a $v$-$t$ graph (not $x$-$t$) gives acceleration. The displacement from the origin is the graph's height at that instant, not its slope, and distance traveled is never read from a slope.`
          },
          {
            question: `A car moving in the $+x$ direction applies its brakes. While slowing, its acceleration is:`,
            options: [`Along $+x$, the way the car moves`, `In the $-x$ direction`, `Zero, since the car still moves forward`, `Perpendicular to the motion`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Slowing down means the acceleration points opposite to the velocity. With velocity in $+x$, the braking acceleration is in $-x$. Acceleration along the motion would speed the car up; zero acceleration would mean constant velocity, even though the car is still moving forward; and a perpendicular acceleration would turn the car without slowing it.`
          },
          {
            question: `Can an object have zero velocity but nonzero acceleration at the same instant?`,
            options: [`No — zero velocity forces zero acceleration`, `Only if its mass is changing`, `Yes — e.g., a ball at the top of a vertical throw`, `Only in circular motion`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At the peak of a vertical throw, $v = 0$ for an instant but $a = g = 10\\;\\text{m/s}^2$ downward the whole time — which is exactly why the ball doesn't stay up there. Acceleration depends on how velocity changes, not on mass, and it is not limited to circular motion.`
          }
        ]
      }
    },
    {
      id: 'kin1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Scalars vs. vectors.** Distance and speed are scalars; displacement, velocity and acceleration are vectors.
- **Speed vs. velocity.** Average speed $\\geq |\\bar{v}|$, equal only for straight-line motion that never reverses direction.
- **Acceleration is any change.** Speeding up, slowing down and turning at constant speed all change the velocity.
- **Slopes and areas.** Slope of $x$-$t$ is velocity, slope of $v$-$t$ is acceleration, area under $v$-$t$ is displacement.

**Common traps**

- **Distance as displacement.** Walking $30\\;\\text{m}$ east then $40\\;\\text{m}$ north covers $70\\;\\text{m}$ of path but only $50\\;\\text{m}$ of displacement.
- **Zero velocity, zero acceleration.** At the top of a throw $v = 0$, yet $a = g$ downward the whole time.
- **Braking as positive acceleration.** An object slowing while it moves in $+x$ has its acceleration pointing in $-x$.
- **Area below the axis.** Area below the time axis of a $v$-$t$ graph is negative displacement: the object moved backward.`
    }
  ]
};
