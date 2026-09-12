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
- At the apex, the velocity is **purely horizontal** (not zero, unless launched straight up)
- Range is maximized at $45^\\circ$; complementary angles (e.g., $30^\\circ$ and $60^\\circ$) give the same range

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

A projectile is launched at $50\\;\\text{m/s}$ at $37^\\circ$ above the horizontal ($g = 10\\;\\text{m/s}^2$).

**Step 1 — Resolve the launch velocity.**

$v_x = 50\\cos 37^\\circ = 50(0.8) = 40\\;\\text{m/s}$

$v_{y0} = 50\\sin 37^\\circ = 50(0.6) = 30\\;\\text{m/s}$

**Step 2 — Time to apex and max height.**

$t_{up} = \\frac{30}{10} = 3\\;\\text{s}, \\qquad H = \\frac{(30)^2}{2(10)} = \\frac{900}{20} = 45\\;\\text{m}$

**Step 3 — Total time and range.**

$T = 2(3) = 6\\;\\text{s}, \\qquad R = v_x T = (40)(6) = 240\\;\\text{m}$

### Worked Example — Horizontal Launch

A ball leaves a table $45\\;\\text{m}$ high (a cliff, really) moving horizontally at $20\\;\\text{m/s}$.

**Fall time** (vertical motion starts from $v_{y0} = 0$):

$45 = 5t^2 \\Rightarrow t^2 = 9 \\Rightarrow t = 3\\;\\text{s}$

**Horizontal distance:** $x = (20)(3) = 60\\;\\text{m}$

**Landing velocity:** $v_x = 20\\;\\text{m/s}$ (unchanged), $v_y = (10)(3) = 30\\;\\text{m/s}$, so the landing speed is

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
            explanation: `Fall time: $5 = 5t^2 \\Rightarrow t = 1$ s. Horizontal distance: $x = (10)(1) = 10$ m. The horizontal speed does not affect the fall time.`
          },
          {
            question: `At the highest point of its arc, a projectile launched at an angle has a velocity that is:`,
            options: [`Purely horizontal and nonzero`, `Zero`, `Purely vertical`, `Equal to its launch velocity`],
            correctAnswer: 0,
            explanation: `Only $v_y$ passes through zero at the apex; $v_x = v_0\\cos\\theta$ never changes. Velocity is zero at the top only for a perfectly vertical throw.`
          },
          {
            question: `One bullet is dropped and another is fired horizontally from the same height at the same instant (level ground, no air resistance). Which lands first?`,
            options: [`The dropped bullet`, `The fired bullet`, `They land at the same time`, `It depends on the fired bullet's speed`],
            correctAnswer: 2,
            explanation: `Vertical motion is identical for both: same initial $v_y = 0$, same $g$. Horizontal velocity is irrelevant to fall time — the signature fact of projectile independence.`
          },
          {
            question: `A projectile is launched at $40\\;\\text{m/s}$ at $30^\\circ$ above horizontal ($g = 10\\;\\text{m/s}^2$). Its total flight time over level ground is:`,
            options: [`2 s`, `4 s`, `8 s`, `6 s`],
            correctAnswer: 1,
            explanation: `$v_{y0} = 40\\sin 30^\\circ = 20$ m/s, so $t_{up} = 20/10 = 2$ s and total $T = 4$ s. Answering 2 s counts only the rise; 8 s doubles twice.`
          },
          {
            question: `Over level ground, a launch angle of $20^\\circ$ gives the same range as a launch angle of:`,
            options: [`$40^\\circ$`, `$45^\\circ$`, `$160^\\circ$`, `$70^\\circ$`],
            correctAnswer: 3,
            explanation: `Complementary angles ($20^\\circ + 70^\\circ = 90^\\circ$) give equal ranges because $R \\propto \\sin(2\\theta)$ and $\\sin 40^\\circ = \\sin 140^\\circ$. The higher angle spends longer in the air but covers ground more slowly.`
          }
        ]
      }
    },
    {
      id: 'kin3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Split every projectile into independent $x$ (constant velocity) and $y$ (free fall) motions
- Fall time comes from the vertical equation alone; range = $v_x \\times$ (total time)
- Memorize the 3-4-5 values: $\\sin 37^\\circ \\approx 0.6$, $\\cos 37^\\circ \\approx 0.8$
- Apex velocity is horizontal, not zero; complementary launch angles share a range
- Sanity-check answers: a fall from bed height lands at about $6\\;\\text{m/s}$, not $36$`
    }
  ]
};
