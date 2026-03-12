export const physics1MotionGraphsPart2Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg2-intro',
      type: 'text' as const,
      content: `
# 📊 Velocity-Time Graphs

**Part 2 of 7 — Motion Graphs**

Velocity-time ($v$-$t$) graphs are arguably the most information-rich graphs in kinematics. From a single $v$-$t$ graph, you can determine **velocity**, **acceleration**, AND **displacement**.
      `
    },
    {
      id: 'mg2-slope',
      type: 'text' as const,
      content: `
## Slope = Acceleration

On a $v$-$t$ graph:

$$\\text{slope} = \\frac{\\Delta v}{\\Delta t} = a$$

| Feature | Meaning |
|---------|---------|
| **Positive slope** | Positive acceleration |
| **Negative slope** | Negative acceleration |
| **Zero slope (horizontal)** | Constant velocity ($a = 0$) |
| **Straight line** | Constant acceleration |
| **Curved line** | Changing acceleration |

### Example

A $v$-$t$ graph shows a straight line from $(0, 4)$ to $(6, 16)$:

$$a = \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2 \\text{ m/s}^2$$
      `
    },
    {
      id: 'mg2-area',
      type: 'text' as const,
      content: `
## Area Under the Curve = Displacement

The area between the $v$-$t$ curve and the time axis gives the **displacement**:

$$\\Delta x = \\int v \\, dt = \\text{area under } v\\text{-}t \\text{ graph}$$

### Sign Convention

- Area **above** the time axis → positive displacement
- Area **below** the time axis → negative displacement
- **Net displacement** = total area (with signs)

### Common Shapes

| Shape | Area Formula |
|-------|-------------|
| Rectangle | $\\text{base} \\times \\text{height}$ |
| Triangle | $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$ |
| Trapezoid | $\\frac{1}{2}(b_1 + b_2) \\times h$ |

### Example

A constant velocity of $v = 5$ m/s for $t = 4$ s:
- Area = rectangle = $5 \\times 4 = 20$ m
- This matches $\\Delta x = v \\cdot t = 20$ m ✓
      `
    },
    {
      id: 'mg2-combined',
      type: 'text' as const,
      content: `
## Putting It Together

From a single $v$-$t$ graph you can extract:

1. **Velocity** at any time → read directly from the graph
2. **Acceleration** → calculate the slope
3. **Displacement** → calculate the area under the curve
4. **Speed** → absolute value of velocity
5. **Direction of motion** → sign of velocity (above or below axis)

### Special Case: Crossing the Time Axis

When the $v$-$t$ graph crosses the time axis ($v = 0$):
- The object **momentarily stops**
- It then **reverses direction**
- The displacement before and after may partially cancel
      `
    },
    {
      id: 'mg2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Velocity-Time Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a $v$-$t$ graph, what does a horizontal line at $v = -3$ m/s represent?',
            options: [
              'An object decelerating',
              'An object at rest',
              'An object moving at constant velocity in the negative direction',
              'An object with negative acceleration'
            ],
            correctAnswer: 2,
            explanation: 'A horizontal line on a $v$-$t$ graph means constant velocity (zero slope = zero acceleration). The value $v = -3$ m/s means it\'s moving at 3 m/s in the negative direction.'
          },
          {
            question: 'The area under a $v$-$t$ graph that lies below the time axis represents:',
            options: [
              'Positive displacement',
              'Negative displacement',
              'Speed',
              'Acceleration'
            ],
            correctAnswer: 1,
            explanation: 'Area below the time axis represents negative velocity, contributing negative displacement. The object moves in the negative direction during that time interval.'
          },
          {
            question: 'A $v$-$t$ graph shows a straight line from $v = 10$ m/s at $t = 0$ to $v = 0$ at $t = 5$ s. What is the displacement?',
            options: [
              '10 m',
              '25 m',
              '50 m',
              '100 m'
            ],
            correctAnswer: 1,
            explanation: 'The area is a triangle: $\\Delta x = \\frac{1}{2}(\\text{base})(\\text{height}) = \\frac{1}{2}(5)(10) = 25$ m.'
          }
        ]
      }
    },
    {
      id: 'mg2-calculations',
      type: 'input-boxes' as const,
      content: `
**$v$-$t$ Graph Calculations** 🧮

A velocity-time graph shows:
- From $t = 0$ to $t = 4$ s: velocity increases linearly from 0 to 12 m/s
- From $t = 4$ to $t = 8$ s: velocity stays constant at 12 m/s

1) What is the acceleration during the first 4 seconds? (in m/s²)

2) What is the displacement from $t = 0$ to $t = 4$ s? (in meters)

3) What is the total displacement from $t = 0$ to $t = 8$ s? (in meters)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '24', '72'],
        hint1: 'Slope = $\\Delta v / \\Delta t = 12/4$',
        hint2: 'Area of a triangle: $\\frac{1}{2}(4)(12)$',
        hint3: 'Triangle (0–4 s) + rectangle (4–8 s): $24 + 12(4)$',
        explanation: '1) $a = 12/4 = 3$ m/s². 2) Triangle area: $\\frac{1}{2}(4)(12) = 24$ m. 3) $24 + 12(4) = 24 + 48 = 72$ m.'
      }
    },
    {
      id: 'mg2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**$v$-$t$ Graph Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The slope of a $v$-$t$ graph gives:',
            options: ['velocity', 'displacement', 'acceleration', 'position'],
            correctIndex: 2,
            explanation: 'Slope = $\\Delta v / \\Delta t = a$ (acceleration).'
          },
          {
            label: 'The area under a $v$-$t$ graph gives:',
            options: ['velocity', 'displacement', 'acceleration', 'speed'],
            correctIndex: 1,
            explanation: 'Area = $\\int v \\, dt = \\Delta x$ (displacement).'
          },
          {
            label: 'When a $v$-$t$ line crosses the time axis, the object:',
            options: ['stops permanently', 'reverses direction', 'has maximum acceleration', 'has maximum displacement'],
            correctIndex: 1,
            explanation: 'Crossing $v = 0$ means the object momentarily stops, then reverses direction (velocity changes sign).'
          }
        ]
      }
    },
    {
      id: 'mg2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Velocity-Time Graphs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A $v$-$t$ graph shows velocity going from $+8$ m/s to $-4$ m/s over 6 s in a straight line. What is the displacement?',
            options: [
              '12 m',
              '24 m',
              '36 m',
              '6 m'
            ],
            correctAnswer: 0,
            explanation: 'The area is a trapezoid (but crosses zero). The $v$-$t$ line crosses zero at $t = 4$ s (since $v = 8 - 2t$, $v=0$ when $t=4$). Positive triangle: $\\frac{1}{2}(4)(8) = 16$ m. Negative triangle: $\\frac{1}{2}(2)(4) = 4$ m. Net displacement $= 16 - 4 = 12$ m.'
          },
          {
            question: 'On a $v$-$t$ graph, the acceleration at $t = 3$ s for a curved line is found by:',
            options: [
              'Reading the $v$ value at $t = 3$ s',
              'Finding the area under the curve up to $t = 3$ s',
              'Drawing the tangent line at $t = 3$ s and finding its slope',
              'Averaging the velocity values'
            ],
            correctAnswer: 2,
            explanation: 'For a curved $v$-$t$ graph, the instantaneous acceleration is the slope of the tangent line at that point, just as instantaneous velocity is the slope of the tangent on an $x$-$t$ graph.'
          }
        ]
      }
    }
  ]
}
