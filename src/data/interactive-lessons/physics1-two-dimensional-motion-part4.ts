export const physics1TwoDimensionalMotionPart4Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `
# 🎯 Independence of Horizontal and Vertical Motion

**Part 4 of 7 — Two-Dimensional Motion**

One of the most powerful principles in 2D kinematics is that **horizontal and vertical motions are independent**. This means you can analyze each direction separately, using its own set of kinematic equations.
      `
    },
    {
      id: 'td4-principle',
      type: 'text' as const,
      content: `
## The Independence Principle

When an object moves in two dimensions (like a projectile), the motion in the **x-direction** and the motion in the **y-direction** are completely independent of each other.

### What This Means

- The horizontal velocity has **no effect** on the vertical motion
- The vertical velocity has **no effect** on the horizontal motion
- Gravity affects only the **vertical** component
- Each direction obeys its own kinematic equations

### Separate Equations

| Direction | Acceleration | Equations |
|-----------|-------------|-----------|
| Horizontal ($x$) | $a_x = 0$ (usually) | $x = x_0 + v_{0x} t$, $v_x = v_{0x}$ (constant) |
| Vertical ($y$) | $a_y = -g$ | $y = y_0 + v_{0y}t - \\frac{1}{2}gt^2$, $v_y = v_{0y} - gt$ |

### What Connects Them?

**Time** ($t$) is the same for both directions. This is the link between horizontal and vertical motion.
      `
    },
    {
      id: 'td4-demo',
      type: 'text' as const,
      content: `
## The Classic Demonstration

Imagine two balls released at the same time:
- **Ball A**: dropped from rest
- **Ball B**: launched horizontally from the same height

### Result

Both balls hit the ground **at the same time!** 🤯

Why? Because:
- Ball B has horizontal velocity, but that doesn't affect its vertical fall
- Both balls have the same initial vertical velocity ($v_{0y} = 0$) and the same vertical acceleration ($a_y = -g$)
- The vertical motion is identical for both

### This proves independence!

The horizontal motion of Ball B is completely separate from its vertical free fall. The only thing that determines when it hits the ground is the **height** and $g$.
      `
    },
    {
      id: 'td4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Independence of Motion** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown horizontally from a cliff. Ignoring air resistance, the horizontal velocity during flight:',
            options: [
              'Increases due to gravity',
              'Decreases due to gravity',
              'Remains constant',
              'Becomes zero at the highest point'
            ],
            correctAnswer: 2,
            explanation: 'Gravity acts only vertically. Since there is no horizontal acceleration ($a_x = 0$), the horizontal velocity remains constant throughout the flight.'
          },
          {
            question: 'A ball is dropped from rest. At the same instant, a second ball is thrown horizontally from the same height. Which hits the ground first?',
            options: [
              'The dropped ball',
              'The thrown ball',
              'They hit at the same time',
              'It depends on how fast the ball is thrown'
            ],
            correctAnswer: 2,
            explanation: 'Both have the same initial vertical velocity ($v_{0y} = 0$) and the same vertical acceleration ($-g$). The horizontal velocity of the thrown ball doesn\'t affect its vertical fall time.'
          },
          {
            question: 'For a projectile, the time to hit the ground depends on:',
            options: [
              'The horizontal velocity only',
              'The vertical motion only',
              'Both horizontal and vertical components equally',
              'The total speed'
            ],
            correctAnswer: 1,
            explanation: 'The time of flight is determined entirely by the vertical motion — the initial vertical velocity, the height, and gravitational acceleration.'
          }
        ]
      }
    },
    {
      id: 'td4-calculations',
      type: 'input-boxes' as const,
      content: `
**Independence of Motion Practice** 🧮

A ball is launched horizontally at 15 m/s from the top of a 20 m tall building. Use $g = 10$ $m/s^{2}$.

1) How long does it take to reach the ground? (in seconds)

2) How far from the base of the building does it land? (in meters)

3) What is the vertical velocity just before hitting the ground? (in m/s, magnitude only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '30', '20'],
        hint1: 'Vertical: $20 = \\frac{1}{2}(10)t^2$, solve for $t$',
        hint2: 'Horizontal: $x = v_{0x} \\cdot t = 15 \\times t$',
        hint3: '$v_y = gt = 10 \\times t$',
        explanation: '1) $20 = 5t^2$, $t^2 = 4$, $t = 2$ s. 2) $x = 15(2) = 30$ m. 3) $v_y = 10(2) = 20$ m/s.'
      }
    },
    {
      id: 'td4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Key Concepts Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In 2D motion, the quantity that links horizontal and vertical motion is:',
            options: ['velocity', 'acceleration', 'time', 'force'],
            correctIndex: 2,
            explanation: 'Time is the same in both directions. It\'s the variable that connects the horizontal and vertical equations.'
          },
          {
            label: 'For a horizontally launched projectile, $v_{0y}$ equals:',
            options: ['$v_0$', '$v_0\\cos\\theta$', '$v_0\\sin\\theta$', '0'],
            correctIndex: 3,
            explanation: 'A horizontal launch means all initial velocity is horizontal. The initial vertical velocity is zero.'
          },
          {
            label: 'The horizontal acceleration of a projectile (ignoring air resistance) is:',
            options: ['$g$', '$-g$', '0', 'depends on the angle'],
            correctIndex: 2,
            explanation: 'With no air resistance, there is no force in the horizontal direction, so $a_x = 0$ and horizontal velocity is constant.'
          }
        ]
      }
    },
    {
      id: 'td4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Independence of Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A package is dropped from a plane flying horizontally at 100 m/s. Ignoring air resistance, the package\'s horizontal velocity just before hitting the ground is:',
            options: [
              '0 m/s',
              '50 m/s',
              '100 m/s',
              'Greater than 100 m/s'
            ],
            correctAnswer: 2,
            explanation: 'The horizontal velocity stays constant at 100 m/s because there is no horizontal acceleration. Gravity only affects the vertical component.'
          },
          {
            question: 'A bullet is fired horizontally from a height of 1.25 m. Using $g = 10$ $m/s^{2}$, how long until it hits the ground?',
            options: [
              '0.25 s',
              '0.35 s',
              '0.5 s',
              '1.0 s'
            ],
            correctAnswer: 2,
            explanation: '$1.25 = \\frac{1}{2}(10)t^2 = 5t^2$, so $t^2 = 0.25$, $t = 0.5$ s. The horizontal speed of the bullet is irrelevant for the fall time!'
          }
        ]
      }
    }
  ]
}
