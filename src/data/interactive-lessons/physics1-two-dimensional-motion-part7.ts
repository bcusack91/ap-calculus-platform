export const physics1TwoDimensionalMotionPart7Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Two-Dimensional Motion**

Congratulations on completing the Two-Dimensional Motion unit! This final lesson ties all the concepts together and prepares you with **AP-style questions** covering vectors, components, relative motion, and the independence principle.
      `
    },
    {
      id: 'td7-summary',
      type: 'text' as const,
      content: `
## Unit Summary

### Vectors

- Vectors have **magnitude** and **direction**
- Components: $A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$
- Magnitude: $A = \\sqrt{A_x^2 + A_y^2}$
- Direction: $\\theta = \\tan^{-1}(A_y / A_x)$

### Vector Addition

- **Graphical**: tip-to-tail method
- **Component**: add $x$-components, add $y$-components, then find resultant

### Independence Principle

- Horizontal and vertical motions are **independent**
- $a_x = 0$, $a_y = -g$ (for projectiles)
- **Time** links the two directions

### Relative Motion

- $\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}$ — add velocities in the subscript chain
- Always specify the reference frame
      `
    },
    {
      id: 'td7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A projectile is launched at angle $\\theta$ above the horizontal. At the top of its trajectory, which is true?',
            options: [
              'Both velocity and acceleration are zero',
              'Velocity is zero but acceleration is $g$ downward',
              'Velocity is horizontal and acceleration is $g$ downward',
              'Velocity is horizontal and acceleration is zero'
            ],
            correctAnswer: 2,
            explanation: 'At the top, $v_y = 0$ but $v_x$ is still non-zero, so velocity is horizontal. Acceleration due to gravity is always $g$ downward, regardless of position.'
          },
          {
            question: 'Two projectiles are launched from the same point with the same speed but at complementary angles (e.g., 30° and 60°). Which has the greater range?',
            options: [
              'The 30° launch',
              'The 60° launch',
              'They have equal range',
              'Cannot determine without knowing the speed'
            ],
            correctAnswer: 2,
            explanation: 'Complementary angles ($\\theta$ and $90° - \\theta$) give the same range because $\\sin 2(30°) = \\sin 60°$ and $\\sin 2(60°) = \\sin 120° = \\sin 60°$. The range formula gives the same result.'
          },
          {
            question: 'A ball is thrown horizontally from a building. Which graph best represents the horizontal velocity ($v_x$) vs. time?',
            options: [
              'A horizontal line (constant)',
              'A line with positive slope',
              'A line with negative slope',
              'A parabola'
            ],
            correctAnswer: 0,
            explanation: 'Since $a_x = 0$, the horizontal velocity remains constant. The $v_x$ vs. $t$ graph is a horizontal line.'
          }
        ]
      }
    },
    {
      id: 'td7-calculations',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Problem** 🧮

A cannon fires a shell at 50 m/s at 53° above horizontal from ground level. Use $g = 10$ m/s², $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) Horizontal component of initial velocity (in m/s)

2) Vertical component of initial velocity (in m/s)

3) Maximum height (in meters)

4) Total time of flight (in seconds)

5) Horizontal range (in meters)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['30', '40', '80', '8', '240'],
        hint1: '$v_{0x} = 50\\cos 53°$, $v_{0y} = 50\\sin 53°$',
        hint2: 'Max height: $h = \\frac{v_{0y}^2}{2g}$. Time: $t = \\frac{2v_{0y}}{g}$',
        hint3: 'Range: $x = v_{0x} \\cdot t_{total}$',
        explanation: '1) $v_{0x} = 50(0.6) = 30$ m/s. 2) $v_{0y} = 50(0.8) = 40$ m/s. 3) $h = \\frac{40^2}{2(10)} = \\frac{1600}{20} = 80$ m. 4) $t = \\frac{2(40)}{10} = 8$ s. 5) $x = 30(8) = 240$ m.'
      }
    },
    {
      id: 'td7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The launch angle that maximizes the range of a projectile (on flat ground) is:',
            options: ['30°', '45°', '60°', '90°'],
            correctIndex: 1,
            explanation: 'Range $R = \\frac{v_0^2 \\sin 2\\theta}{g}$ is maximized when $\\sin 2\\theta = 1$, which gives $2\\theta = 90°$, so $\\theta = 45°$.'
          },
          {
            label: 'A projectile\'s speed is minimum at:',
            options: ['launch', 'maximum height', 'just before landing', 'halfway up'],
            correctIndex: 1,
            explanation: 'At maximum height, $v_y = 0$ so $v = \\sqrt{v_x^2 + 0} = v_x$. This is the minimum speed since the total speed at any other point includes a non-zero $v_y$.'
          },
          {
            label: 'If the launch speed is doubled (same angle), the range is multiplied by:',
            options: ['2', '4', '8', '16'],
            correctIndex: 1,
            explanation: 'Range $R = \\frac{v_0^2 \\sin 2\\theta}{g}$. Since $R \\propto v_0^2$, doubling $v_0$ multiplies range by $2^2 = 4$.'
          }
        ]
      }
    },
    {
      id: 'td7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A boat aims directly north at 4 m/s in a river flowing east at 3 m/s. The boat\'s speed relative to the ground is:',
            options: [
              '1 m/s',
              '5 m/s',
              '7 m/s',
              '3.5 m/s'
            ],
            correctAnswer: 1,
            explanation: 'The velocities are perpendicular: $v = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ m/s. This is a classic 3-4-5 right triangle.'
          },
          {
            question: 'An airplane flies at 300 km/h heading north. A wind blows from the west at 100 km/h (i.e., toward the east). The plane\'s actual direction of travel is:',
            options: [
              'Due north',
              'North of east',
              'East of north',
              'Due east'
            ],
            correctAnswer: 2,
            explanation: 'The wind pushes the plane eastward while it aims north. The resultant velocity points east of north (between north and east, but closer to north since the northward component is larger).'
          }
        ]
      }
    },
    {
      id: 'td7-frq',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 📝

A rescue helicopter hovers at 80 m altitude. It drops a supply package while a person on the ground is 120 m away horizontally. The package must be dropped with a horizontal velocity to reach the person. Use $g = 10$ m/s².

1) Time for the package to fall 80 m (in seconds)

2) Required horizontal velocity (in m/s)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['4', '30'],
        hint1: '$80 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t^2 = 16$, $t = 4$ s. Then $v_{0x} = \\frac{120}{t}$',
        hint3: '$v_{0x} = \\frac{120}{4} = 30$ m/s',
        explanation: '1) $80 = 5t^2$, $t = 4$ s. 2) $v_{0x} = \\frac{\\Delta x}{t} = \\frac{120}{4} = 30$ m/s.'
      }
    },
    {
      id: 'td7-final',
      type: 'multiple-choice' as const,
      content: `
**Final Assessment** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT a vector quantity?',
            options: [
              'Velocity',
              'Displacement',
              'Speed',
              'Acceleration'
            ],
            correctAnswer: 2,
            explanation: 'Speed is a scalar (magnitude only). Velocity, displacement, and acceleration are all vectors (magnitude and direction).'
          },
          {
            question: 'A rock is thrown at 20 m/s at 60° above horizontal from a cliff 30 m high. Using $g = 10$ m/s² and $\\sin 60° \\approx 0.866$, what is $v_{0y}$?',
            options: [
              '10 m/s',
              '17.3 m/s',
              '20 m/s',
              '14.1 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{0y} = v_0\\sin\\theta = 20\\sin 60° = 20(0.866) = 17.3$ m/s.'
          }
        ]
      }
    }
  ]
}
