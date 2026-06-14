export const mcatPhysMechPart1Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 1 of 7 — Kinematics**

### The Big 5 Kinematic Equations

$v = v_0 + at$

$\\Delta x = v_0 t + \\tfrac{1}{2}at^2$

$v^2 = v_0^2 + 2a\\Delta x$

$\\Delta x = \\tfrac{1}{2}(v_0 + v)t$

$\\Delta x = vt - \\tfrac{1}{2}at^2$

### Projectile Motion

- Horizontal: $a_x = 0$, so $v_x = v_0\\cos\\theta$ is constant
- Vertical: $a_y = -g = -9.8\\;\\text{m/s}^2$
- Time to reach max height: $t = \\frac{v_0\\sin\\theta}{g}$
- Range: $R = \\frac{v_0^2\\sin(2\\theta)}{g}$ (maximum at $45°$)

### MCAT Tip: Free Fall

All objects fall at the same rate regardless of mass (ignoring air resistance). Use $g \\approx 10\\;\\text{m/s}^2$ for quick calculations on the MCAT.

### Relative Motion Shortcut

In one-dimensional motion, use relative velocity directly: $v_{A/B} = v_A - v_B$. This simplifies chase and meeting-time questions.`
    },
    {
      id: 'pm1-worked',
      type: 'text' as const,
      content: `### Worked Example — Horizontal Projectile off a Cliff

A ball rolls off a $20\\;\\text{m}$ high table with a horizontal speed of $5\\;\\text{m/s}$. Using $g = 10\\;\\text{m/s}^2$, how long is it in the air and how far does it land from the base?

**Step 1 — Treat the vertical motion separately.** The initial vertical velocity is zero, so

$\\Delta y = \\tfrac{1}{2} g t^2 \\Rightarrow 20 = \\tfrac{1}{2}(10) t^2 = 5 t^2$

**Step 2 — Solve for the time of flight.**

$t^2 = \\frac{20}{5} = 4 \\Rightarrow t = 2\\;\\text{s}$

**Step 3 — Use the horizontal motion (constant velocity).**

$x = v_x t = (5)(2) = 10\\;\\text{m}$

The ball lands $10\\;\\text{m}$ from the base after $2\\;\\text{s}$. Key MCAT insight: the horizontal speed has NO effect on the fall time — vertical and horizontal motions are independent.`
    },
    {
      id: 'pm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Kinematics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A ball is thrown upward at 20 m/s. Using $g = 10\\;\\text{m/s}^2$, the maximum height is:`,
            options: [`20 m`, `40 m`, `10 m`, `200 m`],
            correctAnswer: 0,
            explanation: `Use $v^2 = v_0^2 - 2g\\Delta y$. At max height $v = 0$: $0 = 400 - 20\\Delta y \\Rightarrow \\Delta y = 20$ m.`
          },
          {
            question: `A projectile is launched at 30° above horizontal. Compared to 60°, it has:`,
            options: [`The same range (complementary angles)`, `A longer range`, `A shorter range`, `The same max height`],
            correctAnswer: 0,
            explanation: `Complementary angles ($30°$ and $60°$) give the same range: $R = v_0^2\\sin(2\\theta)/g$, and $\\sin(60°) = \\sin(120°)$. But the $60°$ launch reaches a greater height.`
          },
          {
            question: `Two runners move in the same direction at 8 m/s and 5 m/s. Their relative speed is:`,
            options: [`3 m/s`, `13 m/s`, `1.6 m/s`, `40 m/s`],
            correctAnswer: 0,
            explanation: `For same-direction motion, relative speed is the difference: $8 - 5 = 3$ m/s.`
          },
          {
            question: `For horizontal projectile motion (ignoring air resistance), the horizontal acceleration is:`,
            options: [`0`, `$g$`, `$g\\sin\\theta$`, `Depends on mass`],
            correctAnswer: 0,
            explanation: `With no horizontal net force, $a_x = 0$, so the horizontal velocity stays constant.`
          },
          {
            question: `A car accelerates uniformly from rest at $3\\;\\text{m/s}^2$ for $4\\;\\text{s}$. The distance traveled is:`,
            options: [`24 m`, `12 m`, `48 m`, `6 m`],
            correctAnswer: 0,
            explanation: `$\\Delta x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(3)(4)^2 = \\tfrac{1}{2}(3)(16) = 24$ m.`
          },
          {
            question: `An object dropped from rest falls for $3\\;\\text{s}$. Using $g = 10\\;\\text{m/s}^2$, its speed just before landing is:`,
            options: [`30 m/s`, `15 m/s`, `45 m/s`, `10 m/s`],
            correctAnswer: 0,
            explanation: `$v = v_0 + gt = 0 + (10)(3) = 30$ m/s. In free fall, speed grows by about $10\\;\\text{m/s}$ each second.`
          }
        ]
      }
    },
    {
      id: 'pm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Use $g \\approx 10\\;\\text{m/s}^2$ for fast MCAT calculations
- Projectile motion: split into x (constant velocity) and y (constant acceleration); they are independent
- Complementary angles give the same range; $45°$ gives the maximum range
- Relative-velocity problems often reduce to a single subtraction when set up correctly`
    }
  ]
};
