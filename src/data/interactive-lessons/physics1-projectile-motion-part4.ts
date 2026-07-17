export const physics1ProjectileMotionPart4Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `
# ⬆️ Maximum Height

**Part 4 of 7 — Projectile Motion**

The **maximum height** of a projectile is the highest point in its trajectory. At this point, the vertical velocity is momentarily zero. Let's derive the formula and practice using it.
      `
    },
    {
      id: 'pm4-derivation',
      type: 'text' as const,
      content: `
## Deriving the Maximum Height Formula

At the maximum height, $v_y = 0$. Using $v_y^2 = v_{0y}^2 - 2g\\Delta y$:

$$0 = v_{0y}^2 - 2g h_{max}$$

$$\\boxed{h_{max} = \\frac{v_{0y}^2}{2g} = \\frac{(v_0\\sin\\theta)^2}{2g} = \\frac{v_0^2\\sin^2\\theta}{2g}}$$

### Time to Reach Maximum Height

Using $v_y = v_{0y} - gt_{up}$ with $v_y = 0$:

$$t_{up} = \\frac{v_{0y}}{g} = \\frac{v_0\\sin\\theta}{g}$$

Note: This is exactly **half** the total flight time for ground-to-ground launches!

$$t_{up} = \\frac{t_{flight}}{2}$$

### Key Observations

- $h_{max}$ depends on $v_{0y}$ (vertical component) only
- $h_{max} \\propto v_{0y}^2$: doubling $v_{0y}$ **quadruples** the max height
- For a given speed, $h_{max}$ is greatest at $\\theta = 90°$ (straight up)
      `
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the maximum height of a projectile, which statement is true?',
            options: [
              '$v_x = 0$ and $v_y = 0$',
              '$v_x \\neq 0$ and $v_y = 0$',
              '$v_x = 0$ and $v_y \\neq 0$',
              '$v_x \\neq 0$ and $v_y \\neq 0$'
            ],
            correctAnswer: 1,
            explanation: 'At max height, $v_y = 0$ (momentarily stopped rising). But $v_x$ is constant and non-zero throughout the flight (assuming $\\theta \\neq 90°$).'
          },
          {
            question: 'The acceleration at the maximum height is:',
            options: [
              '0 (velocity is momentarily zero)',
              '$g$ upward',
              '$g$ downward',
              'Depends on the launch angle'
            ],
            correctAnswer: 2,
            explanation: 'Gravity is always $g$ downward, regardless of the projectile\'s position. Even though $v_y = 0$ at the top, the acceleration is still $g$ downward — that\'s what makes it start falling.'
          },
          {
            question: 'A ball launched at 60° will reach a _____ maximum height than the same ball launched at 30° with the same speed.',
            options: [
              'lower',
              'same',
              'higher',
              'cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$h = \\frac{v_0^2\\sin^2\\theta}{2g}$. Since $\\sin 60° > \\sin 30°$, the 60° launch reaches a higher maximum height.'
          }
        ]
      }
    },
    {
      id: 'pm4-calculations1',
      type: 'input-boxes' as const,
      content: `
**Maximum Height Calculations** 🧮

A ball is launched at 50 m/s at 37° above horizontal. Use $g = 10$ $m/s^{2}$, $\\sin 37° = 0.6$.

1) $v_{0y}$ (in m/s)

2) Maximum height (in meters)

3) Time to reach maximum height (in seconds)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '45', '3'],
        hint1: '$v_{0y} = 50\\sin 37° = 50(0.6)$',
        hint2: '$h = \\frac{v_{0y}^2}{2g} = \\frac{30^2}{20}$',
        hint3: '$t_{up} = \\frac{v_{0y}}{g} = \\frac{30}{10}$',
        explanation: '1) $v_{0y} = 30$ m/s. 2) $h = \\frac{900}{20} = 45$ m. 3) $t_{up} = \\frac{30}{10} = 3$ s.'
      }
    },
    {
      id: 'pm4-comparison',
      type: 'dropdown-select' as const,
      content: `
**Comparing Heights at Different Angles** 🔍

All launches are at the same speed $v_0$.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which angle gives the greatest maximum height?',
            options: ['30°', '45°', '60°', '90°'],
            correctIndex: 3,
            explanation: '$h = v_0^2\\sin^2\\theta/(2g)$ is maximized when $\\sin\\theta$ is maximized, which occurs at $\\theta = 90°$.'
          },
          {
            label: 'What is the ratio $h_{60°}/h_{30°}$ (same speed)?',
            options: ['1', '2', '3', '4'],
            correctIndex: 2,
            explanation: '$h \\propto \\sin^2\\theta$. $\\frac{h_{60}}{h_{30}} = \\frac{\\sin^2 60°}{\\sin^2 30°} = \\frac{(\\sqrt{3}/2)^2}{(1/2)^2} = \\frac{3/4}{1/4} = 3$.'
          },
          {
            label: 'If the maximum height is 20 m, the initial vertical velocity was (use $g = 10$ $m/s^{2}$):',
            options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
            correctIndex: 1,
            explanation: '$h = \\frac{v_{0y}^2}{2g}$, so $v_{0y} = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20$ m/s.'
          }
        ]
      }
    },
    {
      id: 'pm4-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** 🏆

A ball is launched from ground level and reaches a maximum height of 31.25 m. The total time of flight is 5 s. Use $g = 10$ $m/s^{2}$.

1) $v_{0y}$ (in m/s)

2) Total time of flight from $t = 2v_{0y}/g$ confirms what value? (in seconds)

3) What was the launch speed if $\\theta = 53°$? ($\\sin 53° = 0.8$) (in m/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '5', '31.25'],
        hint1: '$v_{0y} = \\sqrt{2gh} = \\sqrt{2(10)(31.25)}$',
        hint2: '$v_{0y} = \\sqrt{625} = 25$ m/s. $t = 2(25)/10$',
        hint3: '$v_{0y} = v_0\\sin 53°$, so $v_0 = \\frac{v_{0y}}{\\sin 53°} = \\frac{25}{0.8}$',
        explanation: '1) $v_{0y} = \\sqrt{625} = 25$ m/s. 2) $t = 50/10 = 5$ s ✓. 3) $v_0 = 25/0.8 = 31.25$ m/s.'
      }
    },
    {
      id: 'pm4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A projectile reaches a max height of 80 m. Using $g = 10$ $m/s^{2}$, what was $v_{0y}$?',
            options: [
              '20 m/s',
              '30 m/s',
              '40 m/s',
              '80 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v_{0y} = \\sqrt{2gh} = \\sqrt{2(10)(80)} = \\sqrt{1600} = 40$ m/s.'
          },
          {
            question: 'Two balls are launched at the same speed. Ball A at 37° ($\\sin 37° = 0.6$) and Ball B at 53° ($\\sin 53° = 0.8$). The ratio $h_B/h_A$ is:',
            options: [
              '4/3',
              '3/4',
              '16/9',
              '9/16'
            ],
            correctAnswer: 2,
            explanation: '$h \\propto \\sin^2\\theta$. $\\frac{h_B}{h_A} = \\frac{\\sin^2 53°}{\\sin^2 37°} = \\frac{0.64}{0.36} = \\frac{16}{9}$.'
          }
        ]
      }
    }
  ]
}
