export const physics1ProjectileMotionPart2Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `
# 📐 Angled Launch

**Part 2 of 7 — Projectile Motion**

Most projectiles aren't launched horizontally — they're launched **at an angle**. This lesson covers how to decompose the initial velocity into components and solve the full 2D problem.
      `
    },
    {
      id: 'pm2-components',
      type: 'text' as const,
      content: `
## Decomposing the Launch Velocity

When a projectile is launched at speed $v_0$ at angle $\\theta$ above the horizontal:

$$v_{0x} = v_0\\cos\\theta$$

$$v_{0y} = v_0\\sin\\theta$$

### Complete Equations

| Horizontal ($a_x = 0$) | Vertical ($a_y = -g$) |
|---|---|
| $x = v_0\\cos\\theta \\cdot t$ | $\\Delta y = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2$ |
| $v_x = v_0\\cos\\theta$ | $v_y = v_0\\sin\\theta - gt$ |
| | $v_y^2 = (v_0\\sin\\theta)^2 - 2g\\Delta y$ |

### Special Cases

- $\\theta = 0°$: Horizontal launch ($v_{0y} = 0$)
- $\\theta = 90°$: Straight up ($v_{0x} = 0$)
- $\\theta = 45°$: Equal components ($v_{0x} = v_{0y}$)
      `
    },
    {
      id: 'pm2-trig-review',
      type: 'text' as const,
      content: `
## Quick Trig Reference

For AP Physics problems, you should know these common values:

| Angle | $\\cos\\theta$ | $\\sin\\theta$ |
|-------|------------|------------|
| 30° | $\\frac{\\sqrt{3}}{2} \\approx 0.866$ | $\\frac{1}{2} = 0.5$ |
| 37° | $0.8$ | $0.6$ |
| 45° | $\\frac{\\sqrt{2}}{2} \\approx 0.707$ | $\\frac{\\sqrt{2}}{2} \\approx 0.707$ |
| 53° | $0.6$ | $0.8$ |
| 60° | $\\frac{1}{2} = 0.5$ | $\\frac{\\sqrt{3}}{2} \\approx 0.866$ |

**Memory trick**: 37° and 53° are complementary and use the 3-4-5 ratio scaled by $\\frac{1}{5}$.
      `
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Component Decomposition Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched at 40 m/s at 30° above horizontal. What is $v_{0x}$? (Use $\\cos 30° \\approx 0.866$)',
            options: [
              '20 m/s',
              '34.6 m/s',
              '40 m/s',
              '28.3 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{0x} = 40\\cos 30° = 40(0.866) = 34.6$ m/s.'
          },
          {
            question: 'A ball is launched at 40 m/s at 30° above horizontal. What is $v_{0y}$?',
            options: [
              '34.6 m/s',
              '20 m/s',
              '28.3 m/s',
              '40 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{0y} = 40\\sin 30° = 40(0.5) = 20$ m/s.'
          },
          {
            question: 'Which launch angle gives the largest $v_{0y}$ for a given launch speed?',
            options: [
              '30°',
              '45°',
              '60°',
              '90°'
            ],
            correctAnswer: 3,
            explanation: '$v_{0y} = v_0\\sin\\theta$. Since $\\sin\\theta$ is maximized at $\\theta = 90°$ (where $\\sin 90° = 1$), $v_{0y}$ is largest at 90°.'
          }
        ]
      }
    },
    {
      id: 'pm2-input1',
      type: 'input-boxes' as const,
      content: `
**Angled Launch Problem** 🧮

A football is kicked at 25 m/s at 53° above horizontal from ground level. Use $g = 10$ m/s², $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) $v_{0x}$ (in m/s)

2) $v_{0y}$ (in m/s)

3) Velocity in the $y$-direction after 2 seconds (in m/s)

4) Position in the $y$-direction after 2 seconds (in meters)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['15', '20', '0', '20'],
        hint1: '$v_{0x} = 25(0.6)$ and $v_{0y} = 25(0.8)$',
        hint2: '$v_y = v_{0y} - gt = 20 - 10(2)$',
        hint3: '$\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 = 20(2) - 5(4)$',
        explanation: '1) $v_{0x} = 15$ m/s. 2) $v_{0y} = 20$ m/s. 3) $v_y = 20 - 20 = 0$ m/s (at the top!). 4) $\\Delta y = 40 - 20 = 20$ m.'
      }
    },
    {
      id: 'pm2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Understanding** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing the launch angle (with the same speed) will increase:',
            options: ['$v_{0x}$', '$v_{0y}$', 'both $v_{0x}$ and $v_{0y}$', 'neither'],
            correctIndex: 1,
            explanation: 'Increasing $\\theta$ increases $\\sin\\theta$ (up to 90°), so $v_{0y} = v_0\\sin\\theta$ increases. But $\\cos\\theta$ decreases, so $v_{0x}$ decreases.'
          },
          {
            label: 'At $\\theta = 45°$, the relationship between components is:',
            options: ['$v_{0x} > v_{0y}$', '$v_{0x} < v_{0y}$', '$v_{0x} = v_{0y}$', 'cannot determine'],
            correctIndex: 2,
            explanation: '$\\cos 45° = \\sin 45°$, so $v_{0x} = v_0\\cos 45° = v_0\\sin 45° = v_{0y}$.'
          },
          {
            label: 'For $\\theta > 45°$:',
            options: ['$v_{0x} > v_{0y}$', '$v_{0x} < v_{0y}$', '$v_{0x} = v_{0y}$', 'depends on $v_0$'],
            correctIndex: 1,
            explanation: 'For angles above 45°, $\\sin\\theta > \\cos\\theta$, so $v_{0y} > v_{0x}$.'
          }
        ]
      }
    },
    {
      id: 'pm2-exit',
      type: 'input-boxes' as const,
      content: `
**Exit Problem** ✅

A golf ball is hit at 50 m/s at 37° above horizontal. Use $g = 10$ m/s², $\\cos 37° = 0.8$, $\\sin 37° = 0.6$.

1) $v_{0x}$ (in m/s)

2) $v_{0y}$ (in m/s)

3) Check: $\\sqrt{v_{0x}^2 + v_{0y}^2}$ should equal the launch speed (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '30', '50'],
        hint1: '$v_{0x} = 50\\cos 37° = 50(0.8)$',
        hint2: '$v_{0y} = 50\\sin 37° = 50(0.6)$',
        hint3: '$\\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900}$',
        explanation: '1) $v_{0x} = 40$ m/s. 2) $v_{0y} = 30$ m/s. 3) $\\sqrt{1600 + 900} = \\sqrt{2500} = 50$ m/s ✓. The components always recombine to give the original speed.'
      }
    }
  ]
}
