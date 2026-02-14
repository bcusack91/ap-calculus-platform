export const physics1MomentumAndImpulsePart4Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi4-intro',
      type: 'text' as const,
      content: `
# 📊 Force-Time Graphs and Impulse

**Part 4 of 7 — Momentum and Impulse**

In real collisions, the force is rarely constant — it rises quickly, peaks, and then drops back to zero. **Force-time graphs** let us visualize these interactions and calculate impulse graphically.

The key insight: **the area under a force-time graph equals the impulse**.
      `
    },
    {
      id: 'mi4-area-impulse',
      type: 'text' as const,
      content: `
## Area Under the Curve = Impulse

Since impulse is $J = F\\Delta t$ for constant force, and more generally:

$$J = \\int_{t_i}^{t_f} F \\, dt$$

This integral is the **area** under the $F$-vs-$t$ graph.

### Common Graph Shapes

| Shape | Area Formula | Example |
|-------|-------------|---------|
| Rectangle | $F \\times \\Delta t$ | Constant force |
| Triangle | $\\frac{1}{2} \\times F_{\\text{max}} \\times \\Delta t$ | Linearly increasing/decreasing force |
| Trapezoid | $\\frac{1}{2}(F_1 + F_2) \\times \\Delta t$ | Force changes linearly between two values |

### Reading F-t Graphs

For any $F$-vs-$t$ graph:
1. Area **above** the time axis = **positive impulse** (force in + direction)
2. Area **below** the time axis = **negative impulse** (force in − direction)
3. **Total impulse** = sum of all areas (with signs)
      `
    },
    {
      id: 'mi4-example-graphs',
      type: 'text' as const,
      content: `
## Example: Rectangular Force Pulse

A constant force of $F = 500$ N acts on a ball for $\\Delta t = 0.01$ s:

$$J = F \\times \\Delta t = (500)(0.01) = 5 \\text{ N·s}$$

## Example: Triangular Force Pulse

A force increases linearly from 0 to $F_{\\text{max}} = 1000$ N over 0.01 s:

$$J = \\frac{1}{2} F_{\\text{max}} \\times \\Delta t = \\frac{1}{2}(1000)(0.01) = 5 \\text{ N·s}$$

### Key Insight

Both pulses deliver the **same impulse** (5 N·s), but the peak forces are very different! The average force for the triangle is $F_{\\text{avg}} = J/\\Delta t = 5/0.01 = 500$ N — half the peak value.

## Example: Multi-Part Graph

A force acts as follows:
- $t = 0$ to $t = 2$ s: $F = +10$ N (rectangle, area = $+20$ N·s)
- $t = 2$ to $t = 5$ s: $F = -5$ N (rectangle, area = $-15$ N·s)

Total impulse = $+20 + (-15) = +5$ N·s
      `
    },
    {
      id: 'mi4-avg-force',
      type: 'text' as const,
      content: `
## Average Force from a Graph

The **average force** is the constant force that would deliver the same impulse in the same time:

$$F_{\\text{avg}} = \\frac{J}{\\Delta t} = \\frac{\\text{Area under curve}}{\\text{Total time}}$$

### Real Collision Force Profiles

In a real collision (like a ball hitting a wall):
1. Force starts at zero
2. Rises rapidly to a **peak** value
3. Falls back to zero

The peak force is typically **much larger** than the average force. For a symmetric collision pulse:

$$F_{\\text{avg}} \\approx \\frac{F_{\\text{peak}}}{2}$$

This is why peak forces in collisions can be enormous even though the average force seems manageable.
      `
    },
    {
      id: 'mi4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — F-t Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A triangular force pulse has a peak of 600 N and lasts 0.02 s. What is the impulse?',
            options: [
              '12 N·s',
              '6 N·s',
              '3 N·s',
              '600 N·s'
            ],
            correctAnswer: 1,
            explanation: 'For a triangle: $J = \\frac{1}{2}F_{\\text{max}}\\Delta t = \\frac{1}{2}(600)(0.02) = 6$ N·s.'
          },
          {
            question: 'On a force-time graph, the impulse delivered between $t = 0$ and $t = 4$ s represents the:',
            options: [
              'Slope of the F-t curve',
              'Maximum value of F',
              'Area under the F-t curve',
              'Average value of F'
            ],
            correctAnswer: 2,
            explanation: 'Impulse is always the area under the force-time graph. This is because $J = \\int F \\, dt$, and integrals represent areas.'
          },
          {
            question: 'A force-time graph shows +20 N for 3 s, then −10 N for 2 s. What is the total impulse?',
            options: [
              '40 N·s',
              '60 N·s',
              '80 N·s',
              '20 N·s'
            ],
            correctAnswer: 0,
            explanation: 'Total impulse = area₁ + area₂ = $(+20)(3) + (-10)(2) = 60 + (-20) = +40$ N·s. Remember that areas below the axis are negative.'
          }
        ]
      }
    },
    {
      id: 'mi4-calculations',
      type: 'input-boxes' as const,
      content: `
**F-t Graph Calculations** 🧮

1) A rectangular force pulse of 400 N lasts 0.05 s. What is the impulse? (in N·s)

2) A triangular force pulse has peak 800 N and duration 0.04 s. What is the average force during the pulse? (in N)

3) A 2 kg object initially at rest receives a triangular impulse with peak 100 N lasting 0.5 s. What is the final speed? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '400', '12.5', '12.50'],
        hint1: '$J = F \\times \\Delta t = (400)(0.05)$',
        hint2: 'For a triangle: $J = \\frac{1}{2}(800)(0.04) = 16$ N·s. $F_{\\text{avg}} = J/\\Delta t = 16/0.04$',
        hint3: '$J = \\frac{1}{2}(100)(0.5) = 25$ N·s. $v_f = J/m = 25/2$',
        explanation: '1) $J = (400)(0.05) = 20$ N·s. 2) $J = \\frac{1}{2}(800)(0.04) = 16$ N·s. $F_{\\text{avg}} = 16/0.04 = 400$ N (half the peak for a triangle). 3) $J = \\frac{1}{2}(100)(0.5) = 25$ N·s. $v_f = J/m = 25/2 = 12.5$ m/s.'
      }
    },
    {
      id: 'mi4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**F-t Graph Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a force-time graph, the impulse is represented by the:',
            options: ['slope', 'area under the curve', 'maximum height', 'x-intercept'],
            correctIndex: 1,
            explanation: 'The impulse is the area under the F-t curve. This comes from $J = \\int F \\, dt$.'
          },
          {
            label: 'The average force during a collision is:',
            options: ['equal to the peak force', 'half the peak force', 'double the peak force', 'depends on the shape'],
            correctIndex: 3,
            explanation: 'The average force depends on the shape of the force profile. For a triangle, $F_{\\text{avg}} = F_{\\text{peak}}/2$. For a rectangle, $F_{\\text{avg}} = F_{\\text{peak}}$.'
          },
          {
            label: 'On an F-t graph, area below the time axis represents:',
            options: ['positive impulse', 'negative impulse', 'zero impulse', 'infinite impulse'],
            correctIndex: 1,
            explanation: 'Areas below the time axis represent forces in the negative direction, contributing negative impulse.'
          }
        ]
      }
    },
    {
      id: 'mi4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Force-Time Graphs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two different force profiles deliver the same impulse to identical objects initially at rest. How do the final velocities compare?',
            options: [
              'The higher peak force gives a greater final velocity',
              'The longer duration gives a greater final velocity',
              'The final velocities are equal',
              'Cannot be determined without more information'
            ],
            correctAnswer: 2,
            explanation: 'By the impulse-momentum theorem: $J = m\\Delta v$. Same impulse and same mass → same $\\Delta v$. The shape of the force profile does not matter — only the total impulse (area) determines the velocity change.'
          },
          {
            question: 'A 3 kg object at rest has a force applied: +15 N for 2 s, then −5 N for 6 s. What is the final velocity?',
            options: [
              '10 m/s',
              '0 m/s',
              '20 m/s',
              '5 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Total impulse = $(+15)(2) + (-5)(6) = 30 - 30 = 0$ N·s. Since $J = m\\Delta v = 0$, the object ends at rest: $v_f = 0$ m/s.'
          }
        ]
      }
    }
  ]
}
