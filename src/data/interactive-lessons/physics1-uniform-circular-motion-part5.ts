export const physics1UniformCircularMotionPart5Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc5-intro',
      type: 'text' as const,
      content: `
# 🌀 Non-Uniform Circular Motion Intro

**Part 5 of 7 — Uniform Circular Motion**

What happens when an object moves in a circle but its **speed is changing**? This is **non-uniform circular motion**, and it requires an additional component of acceleration beyond centripetal.

**In this lesson you will learn:**
- The difference between uniform and non-uniform circular motion
- Tangential acceleration vs. centripetal acceleration
- How to find total acceleration in non-uniform circular motion
- Real-world examples of non-uniform circular motion
      `
    },
    {
      id: 'uc5-tangential',
      type: 'text' as const,
      content: `
## Two Components of Acceleration

In non-uniform circular motion, acceleration has **two perpendicular components**:

### 1. Centripetal (Radial) Acceleration — $a_c$
- Direction: toward the center
- Magnitude: $a_c = v^2/r$
- Changes the **direction** of velocity

### 2. Tangential Acceleration — $a_t$
- Direction: tangent to the circle (along velocity direction)
- Magnitude: $a_t = \\Delta v / \\Delta t$ (rate of speed change)
- Changes the **speed** (magnitude of velocity)

### Total Acceleration

Since $\\vec{a}_c$ and $\\vec{a}_t$ are perpendicular:

$$a_{\\text{total}} = \\sqrt{a_c^2 + a_t^2}$$

The angle of total acceleration relative to the radius:

$$\\tan\\phi = \\frac{a_t}{a_c}$$

| Type of Motion | $a_c$ | $a_t$ |
|---------------|-------|-------|
| Uniform circular | $v^2/r$ (constant) | 0 |
| Non-uniform circular (speeding up) | $v^2/r$ (changing) | Positive (along $\\vec{v}$) |
| Non-uniform circular (slowing down) | $v^2/r$ (changing) | Negative (opposite $\\vec{v}$) |
      `
    },
    {
      id: 'uc5-examples',
      type: 'text' as const,
      content: `
## Real-World Examples

### Car on a Circular On-Ramp
A car accelerating from 20 m/s to 30 m/s while going around a curve of radius 100 m:
- Has centripetal acceleration: $a_c = v^2/r$ (increasing as $v$ increases)
- Has tangential acceleration: $a_t > 0$ (speeding up)
- Total acceleration is **not** directed toward the center

### Roller Coaster Loop
At different points of a vertical loop:
- Speed changes due to gravity (not uniform)
- $a_c = v^2/r$ changes because $v$ changes
- Gravity provides both centripetal and tangential components depending on position

### A Ball on a String in a Vertical Circle
- At the top: gravity adds to centripetal acceleration, speed is minimum
- At the bottom: gravity opposes centripetal acceleration, speed is maximum
- At the sides: gravity is entirely tangential (changing speed)

### Key AP Insight
On the AP exam, most circular motion problems assume **uniform** circular motion. Non-uniform circular motion appears mainly in:
- Vertical circle problems
- "Car speeds up around a curve" scenarios
- Conceptual questions about acceleration components
      `
    },
    {
      id: 'uc5-quiz',
      type: 'multiple-choice' as const,
      content: `
**Non-Uniform Circular Motion** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A car moves around a circular track while speeding up. The total acceleration vector points:',
            options: [
              'Directly toward the center',
              'Directly tangent to the circle',
              'At an angle between tangent and center-directed',
              'Directly away from the center'
            ],
            correctAnswer: 2,
            explanation: 'The total acceleration is the vector sum of centripetal (toward center) and tangential (along motion). The resultant is at an angle between these two directions.'
          },
          {
            question: 'An object moves in a circle while slowing down. The tangential acceleration is:',
            options: [
              'Zero',
              'In the same direction as velocity',
              'Opposite to the direction of velocity',
              'Toward the center'
            ],
            correctAnswer: 2,
            explanation: 'Tangential acceleration opposes velocity when the object slows down (like brakes on a car — deceleration is tangential and backward).'
          },
          {
            question: 'At what point in a vertical circular loop (ball on a string) does gravity provide ONLY tangential acceleration?',
            options: [
              'At the top',
              'At the bottom',
              'At the side (3 o\'clock or 9 o\'clock position)',
              'Gravity always has a centripetal component'
            ],
            correctAnswer: 2,
            explanation: 'At the sides, gravity is perpendicular to the radius (tangent to the circle), so it acts entirely as tangential acceleration — only changing speed, not direction.'
          }
        ]
      }
    },
    {
      id: 'uc5-calculations',
      type: 'input-boxes' as const,
      content: `
**Non-Uniform Circular Motion Calculations** 🧮

1) A car moves at 15 m/s around a curve of radius 50 m while accelerating at $a_t = 2$ m/s². What is the centripetal acceleration (in m/s²)?

2) For the same car, what is the magnitude of the total acceleration (in m/s², round to 3 significant figures)?

3) A ball moves in a vertical circle of radius 2 m. At the side of the circle, its speed is 5 m/s and its tangential acceleration is $g = 10$ m/s² (due to gravity). What is the total acceleration (in m/s², round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.5', '4.9', '16.0'],
        hint1: '$a_c = v^2/r = 15^2/50$.',
        hint2: '$a_{total} = \\sqrt{a_c^2 + a_t^2}$.',
        hint3: 'Find $a_c = v^2/r$ first, then $a_{total} = \\sqrt{a_c^2 + g^2}$.',
        explanation: '1) $a_c = 225/50 = 4.5$ m/s². 2) $a_{total} = \\sqrt{4.5^2 + 2^2} = \\sqrt{20.25 + 4} = \\sqrt{24.25} \\approx 4.9$ m/s². 3) $a_c = 25/2 = 12.5$ m/s². $a_{total} = \\sqrt{12.5^2 + 10^2} = \\sqrt{156.25 + 100} = \\sqrt{256.25} \\approx 16.0$ m/s².'
      }
    },
    {
      id: 'uc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Uniform vs. Non-Uniform** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In uniform circular motion, the tangential acceleration is:',
            options: ['Equal to centripetal acceleration', 'Zero', 'Constant and nonzero', 'Increasing'],
            correctIndex: 1,
            explanation: 'Uniform means constant speed, so $a_t = \\Delta v/\\Delta t = 0$. Only centripetal acceleration exists.'
          },
          {
            label: 'If both $a_c$ and $a_t$ have the same magnitude, the total acceleration vector makes an angle with the radius of:',
            options: ['0°', '30°', '45°', '90°'],
            correctIndex: 2,
            explanation: '$\\tan\\phi = a_t/a_c = 1 \\Rightarrow \\phi = 45°$. The total acceleration is at 45° between radial and tangential.'
          },
          {
            label: 'A Ferris wheel starting from rest has:',
            options: ['Only centripetal acceleration', 'Only tangential acceleration initially', 'Both from the very start', 'Neither — it is not yet moving'],
            correctIndex: 1,
            explanation: 'When $v = 0$, $a_c = v^2/r = 0$. But it\'s speeding up, so $a_t > 0$. Initially, only tangential acceleration exists.'
          }
        ]
      }
    },
    {
      id: 'uc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Non-Uniform Circular Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A particle has centripetal acceleration 6 m/s² and tangential acceleration 8 m/s². The total acceleration is:',
            options: [
              '10 m/s²',
              '14 m/s²',
              '2 m/s²',
              '7 m/s²'
            ],
            correctAnswer: 0,
            explanation: '$a_{total} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ m/s². This is a 3-4-5 right triangle (scaled by 2)!'
          },
          {
            question: 'In a vertical circle, the speed of a ball is greatest at the _____ and least at the _____.',
            options: [
              'top; bottom',
              'bottom; top',
              'sides; top',
              'left; right'
            ],
            correctAnswer: 1,
            explanation: 'Energy conservation: the ball exchanges PE and KE. At the bottom (lowest PE), KE and speed are maximum. At the top (highest PE), speed is minimum.'
          }
        ]
      }
    }
  ]
}
