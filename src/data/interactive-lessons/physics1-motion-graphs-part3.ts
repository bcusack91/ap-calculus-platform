export const physics1MotionGraphsPart3Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg3-intro',
      type: 'text' as const,
      content: `
# 📉 Acceleration-Time Graphs

**Part 3 of 7 — Motion Graphs**

The third type of motion graph completes the picture. Acceleration-time ($a$-$t$) graphs show how acceleration varies over time. Just like with $v$-$t$ graphs, the **area** under the curve carries physical meaning.
      `
    },
    {
      id: 'mg3-reading',
      type: 'text' as const,
      content: `
## Reading $a$-$t$ Graphs

On an acceleration-time graph:

| Feature | Meaning |
|---------|---------|
| **Value at any time** | Acceleration at that instant |
| **Horizontal line** | Constant acceleration |
| **Line at $a = 0$** | Zero acceleration (constant velocity) |
| **Positive value** | Acceleration in + direction |
| **Negative value** | Acceleration in − direction |

### Area Under the Curve

$$\\text{Area under } a\\text{-}t \\text{ graph} = \\int a \\, dt = \\Delta v$$

The area under the $a$-$t$ graph gives the **change in velocity**, NOT the velocity itself.

To find the velocity at any time:
$$v(t) = v_0 + \\text{area under } a\\text{-}t \\text{ from } 0 \\text{ to } t$$
      `
    },
    {
      id: 'mg3-constant-accel',
      type: 'text' as const,
      content: `
## Constant Acceleration Case

When $a$ is constant, the $a$-$t$ graph is a **horizontal line**.

### Finding $\\Delta v$

The area is simply a rectangle:

$$\\Delta v = a \\times \\Delta t$$

### Example

An $a$-$t$ graph shows $a = 3$ $m/s^{2}$ from $t = 0$ to $t = 5$ s. If $v_0 = 2$ m/s:

$$\\Delta v = (3)(5) = 15 \\text{ m/s}$$
$$v_f = v_0 + \\Delta v = 2 + 15 = 17 \\text{ m/s}$$

### Free Fall on an $a$-$t$ Graph

For an object in free fall (taking up as positive):
- The $a$-$t$ graph is a horizontal line at $a = -9.8$ $m/s^{2}$
- It stays constant the entire time the object is in the air
      `
    },
    {
      id: 'mg3-varying-accel',
      type: 'text' as const,
      content: `
## Non-Constant Acceleration

When acceleration changes with time:

- The $a$-$t$ graph is no longer a horizontal line
- The area under the curve must be calculated using geometry (triangles, trapezoids) or calculus
- The kinematic equations ($v = v_0 + at$, etc.) **no longer apply** because they assume constant $a$

### Example

If acceleration increases linearly from 0 to 6 $m/s^{2}$ over 4 s:

$$\\Delta v = \\text{area of triangle} = \\frac{1}{2}(4)(6) = 12 \\text{ m/s}$$

> **Key Chain:** $a$-$t$ area → $\\Delta v$ → use with $v_0$ to get $v$
      `
    },
    {
      id: 'mg3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Acceleration-Time Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does the area under an $a$-$t$ graph represent?',
            options: [
              'Displacement',
              'Position',
              'Change in velocity',
              'Total distance'
            ],
            correctAnswer: 2,
            explanation: 'The area under an $a$-$t$ graph equals $\\int a \\, dt = \\Delta v$ (the change in velocity).'
          },
          {
            question: 'An $a$-$t$ graph shows a constant value of $-2$ $m/s^{2}$ for 5 s. If $v_0 = +10$ m/s, what is the final velocity?',
            options: [
              '0 m/s',
              '+12 m/s',
              '-10 m/s',
              '+20 m/s'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta v = a \\times \\Delta t = (-2)(5) = -10$ m/s. $v_f = v_0 + \\Delta v = 10 + (-10) = 0$ m/s.'
          },
          {
            question: 'For an object in free fall (upward positive), the $a$-$t$ graph is:',
            options: [
              'A line sloping downward',
              'A horizontal line at $a = +9.8$ $m/s^{2}$',
              'A horizontal line at $a = -9.8$ $m/s^{2}$',
              'A parabola'
            ],
            correctAnswer: 2,
            explanation: 'In free fall, $a = -g = -9.8$ $m/s^{2}$ is constant, so the $a$-$t$ graph is a horizontal line at $-9.8$ $m/s^{2}$.'
          }
        ]
      }
    },
    {
      id: 'mg3-calculations',
      type: 'input-boxes' as const,
      content: `
**$a$-$t$ Graph Calculations** 🧮

An $a$-$t$ graph shows acceleration increasing linearly from $a = 0$ at $t = 0$ to $a = 8$ $m/s^{2}$ at $t = 4$ s. The initial velocity is $v_0 = 5$ m/s.

1) What is the change in velocity from $t = 0$ to $t = 4$ s? (in m/s)

2) What is the velocity at $t = 4$ s? (in m/s)

3) If the acceleration then remains constant at 8 $m/s^{2}$ for another 3 s (from $t = 4$ to $t = 7$ s), what is $\\Delta v$ during that interval? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '21', '24'],
        hint1: 'Area of the triangle: $\\frac{1}{2}(4)(8) = 16$ m/s',
        hint2: '$v(4) = v_0 + \\Delta v = 5 + 16$',
        hint3: 'Rectangle area: $(8)(3) = 24$ m/s',
        explanation: '1) $\\Delta v = \\frac{1}{2}(4)(8) = 16$ m/s. 2) $v = 5 + 16 = 21$ m/s. 3) $\\Delta v = (8)(3) = 24$ m/s.'
      }
    },
    {
      id: 'mg3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**$a$-$t$ Graph Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the $a$-$t$ graph is a horizontal line at $a = 0$, the object has:',
            options: ['zero velocity', 'constant velocity', 'increasing velocity', 'zero position'],
            correctIndex: 1,
            explanation: 'Zero acceleration means the velocity is not changing — the object moves at constant velocity (which could be zero).'
          },
          {
            label: 'The area under an $a$-$t$ graph that is below the time axis represents:',
            options: ['positive $\\Delta v$', 'negative $\\Delta v$', 'displacement', 'distance'],
            correctIndex: 1,
            explanation: 'Area below the time axis on an $a$-$t$ graph means negative acceleration contributes a negative change in velocity.'
          },
          {
            label: 'To find displacement from an $a$-$t$ graph, you need to first find:',
            options: ['the slope', 'the velocity function (then integrate again)', 'the area squared', 'nothing — displacement is read directly'],
            correctIndex: 1,
            explanation: 'From $a$-$t$ you get $\\Delta v$ (area). You need the velocity as a function of time, then integrate velocity to get displacement. It\'s a two-step process.'
          }
        ]
      }
    },
    {
      id: 'mg3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Acceleration-Time Graphs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An $a$-$t$ graph shows $a = +4$ $m/s^{2}$ from $t = 0$ to $t = 3$ s, then $a = -2$ $m/s^{2}$ from $t = 3$ to $t = 6$ s. If $v_0 = 0$, what is $v$ at $t = 6$ s?',
            options: [
              '6 m/s',
              '12 m/s',
              '18 m/s',
              '0 m/s'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta v_1 = (4)(3) = 12$ m/s. $\\Delta v_2 = (-2)(3) = -6$ m/s. $v(6) = 0 + 12 - 6 = 6$ m/s.'
          },
          {
            question: 'What information can you NOT directly read from an $a$-$t$ graph?',
            options: [
              'Acceleration at a specific time',
              'Change in velocity over an interval',
              'Position of the object',
              'Whether acceleration is positive or negative'
            ],
            correctAnswer: 2,
            explanation: 'Position cannot be directly obtained from an $a$-$t$ graph. You would need to integrate twice (first to get velocity, then to get position) and know both initial velocity and initial position.'
          }
        ]
      }
    }
  ]
}
