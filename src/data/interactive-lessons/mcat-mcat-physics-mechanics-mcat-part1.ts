export const mcatPhysMechPart1Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 1 of 7 — Kinematics**

### The Big 5 Kinematic Equations

$$v = v_0 + at$$
$$\\Delta x = v_0 t + \\tfrac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a\\Delta x$$
$$\\Delta x = \\tfrac{1}{2}(v_0 + v)t$$
$$\\Delta x = vt - \\tfrac{1}{2}at^2$$

### Projectile Motion

- Horizontal: $a_x = 0$, $v_x = v_0\\cos\\theta = \\text{constant}$
- Vertical: $a_y = -g = -9.8\\;\\text{m/s}^2$
- Time to reach max height: $t = \\frac{v_0\\sin\\theta}{g}$
- Range: $R = \\frac{v_0^2\\sin(2\\theta)}{g}$ (max at 45°)

### MCAT Tip: Free Fall

All objects fall at the same rate regardless of mass (ignoring air resistance). $g \\approx 10\\;\\text{m/s}^2$ for quick calculations on the MCAT.

### Relative Motion Shortcut

In one-dimensional motion, use relative velocity directly:

$$v_{A/B} = v_A - v_B$$

This simplifies chase and meeting-time questions.`
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
            explanation: `Use $v^2 = v_0^2 - 2g\\Delta y$. At max height, $v = 0$: $0 = 400 - 20\\Delta y \\implies \\Delta y = 20$ m.`
          },
          {
            question: `A projectile is launched at 30° above horizontal. Compared to 60°, it has:`,
            options: [`The same range (complementary angles)`, `A longer range`, `A shorter range`, `The same max height`],
            correctAnswer: 0,
            explanation: `Complementary angles (30° and 60°) give the same range: $R = v_0^2\\sin(2\\theta)/g$. $\\sin(60°) = \\sin(120°)$. But 60° reaches a greater height.`
          },
          {
            question: `Two runners move in the same direction at 8 m/s and 5 m/s. Their relative speed is:`,
            options: [`3 m/s`, `13 m/s`, `1.6 m/s`, `40 m/s`],
            correctAnswer: 0,
            explanation: `For same-direction motion, relative speed is the difference in speeds: $8 - 5 = 3$ m/s.`
          },
          {
            question: `For horizontal projectile motion (ignoring air resistance), horizontal acceleration is:`,
            options: [`0`, `$g$`, `$g\\sin\\theta$`, `Depends on mass`],
            correctAnswer: 0,
            explanation: `No horizontal net force means $a_x = 0$, so horizontal velocity remains constant.`
          }
        ]
      }
    },
    {
      id: 'pm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Use $g \\approx 10\\;\\text{m/s}^2$ for MCAT calculations
- Projectile motion: separate into x (constant velocity) and y (constant acceleration)
- Complementary angles give same range; 45° gives maximum range
- Relative velocity questions are often one subtraction when set up correctly.`
    }
  ]
};
