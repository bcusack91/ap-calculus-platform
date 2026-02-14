export const physics1OneDimensionalMotionPart2Data = {
  topicSlug: 'one-dimensional-motion',
  sections: [
    {
      id: 'om2-intro',
      type: 'text' as const,
      content: `
# 🏃 Average Velocity and Average Speed

**Part 2 of 7 — One-Dimensional Motion**

Now that we understand position and displacement, we can describe *how fast* an object moves. There are two closely related but distinct quantities: **average velocity** and **average speed**.
      `
    },
    {
      id: 'om2-avg-velocity',
      type: 'text' as const,
      content: `
## Average Velocity

**Average velocity** is the rate of change of position — displacement divided by elapsed time:

$$v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}$$

### Properties

| Property | Description |
|----------|-------------|
| **Vector quantity** | Has magnitude and direction (sign) |
| **SI unit** | m/s |
| **Sign** | Positive → moving in + direction; Negative → moving in − direction |
| **Path-independent** | Depends only on initial and final positions |

### Example

A car travels from $x_i = 20$ m at $t_i = 0$ s to $x_f = 80$ m at $t_f = 4$ s:

$$v_{\\text{avg}} = \\frac{80 - 20}{4 - 0} = \\frac{60}{4} = 15 \\text{ m/s}$$
      `
    },
    {
      id: 'om2-avg-speed',
      type: 'text' as const,
      content: `
## Average Speed

**Average speed** is the total distance traveled divided by the elapsed time:

$$\\text{average speed} = \\frac{\\text{total distance}}{\\Delta t}$$

### Velocity vs. Speed

| | Average Velocity | Average Speed |
|---|----------|-------------|
| **Uses** | Displacement | Distance |
| **Type** | Vector | Scalar |
| **Can be zero?** | Yes (round trip) | Only if no motion |
| **Can be negative?** | Yes | Never |

### Example

A runner goes 100 m east in 10 s, then 60 m west in 6 s:

- $v_{\\text{avg}} = \\frac{100 - 60}{10 + 6} = \\frac{40}{16} = 2.5$ m/s (east)
- Average speed $= \\frac{100 + 60}{16} = \\frac{160}{16} = 10$ m/s

> **Key insight:** Average speed ≥ |average velocity|, with equality only when the object doesn't reverse direction.
      `
    },
    {
      id: 'om2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Velocity and Speed** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A swimmer completes one full lap in a 50 m pool (50 m out and 50 m back) in 60 s. What is the average velocity?',
            options: [
              '1.67 m/s',
              '0 m/s',
              '0.83 m/s',
              '3.33 m/s'
            ],
            correctAnswer: 1,
            explanation: 'The swimmer returns to the starting position, so displacement = 0. Therefore $v_{\\text{avg}} = 0/60 = 0$ m/s. The average *speed* would be $100/60 = 1.67$ m/s.'
          },
          {
            question: 'A car moves at 20 m/s for 5 s, then at 10 m/s for 5 s, both in the same direction. What is the average velocity?',
            options: [
              '10 m/s',
              '15 m/s',
              '20 m/s',
              '30 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Total displacement = $(20)(5) + (10)(5) = 100 + 50 = 150$ m. Total time = 10 s. $v_{\\text{avg}} = 150/10 = 15$ m/s.'
          },
          {
            question: 'If an object has a negative average velocity, it means:',
            options: [
              'It is slowing down',
              'It is speeding up',
              'Its displacement is in the negative direction',
              'It is not moving'
            ],
            correctAnswer: 2,
            explanation: 'Negative average velocity means $\\Delta x < 0$: the object\'s net displacement is in the negative direction. It says nothing about whether the object is speeding up or slowing down.'
          }
        ]
      }
    },
    {
      id: 'om2-calculations',
      type: 'input-boxes' as const,
      content: `
**Velocity and Speed Calculations** 🧮

1) A bus travels 240 m east in 30 s. What is the average velocity? (in m/s)

2) A delivery truck drives 80 km in 2 hours, then returns 80 km in 3 hours. What is the average speed for the entire trip? (in km/h, round to 3 significant figures)

3) For the same delivery truck, what is the magnitude of the average velocity for the entire trip? (in km/h)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '32.0', '0', '32.00'],
        hint1: '$v_{\\text{avg}} = \\Delta x / \\Delta t = 240 / 30$',
        hint2: 'Average speed = total distance / total time = $(80 + 80) / (2 + 3)$',
        hint3: 'The truck returns to its starting point, so displacement = 0.',
        explanation: '1) $v_{\\text{avg}} = 240/30 = 8$ m/s. 2) Average speed = $(80 + 80)/(2 + 3) = 160/5 = 32.0$ km/h. 3) Since the truck returns to its starting point, displacement = 0, so $v_{\\text{avg}} = 0/5 = 0$ km/h.'
      }
    },
    {
      id: 'om2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Quick Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average velocity uses _____ in the numerator.',
            options: ['distance', 'displacement', 'acceleration', 'speed'],
            correctIndex: 1,
            explanation: 'Average velocity = displacement / time. It uses the net change in position (displacement).'
          },
          {
            label: 'If an object completes a round trip, its average velocity is:',
            options: ['maximum', 'equal to average speed', 'zero', 'undefined'],
            correctIndex: 2,
            explanation: 'A round trip means the object returns to its starting point, so displacement = 0 and average velocity = 0.'
          },
          {
            label: 'Average speed is always _____ the magnitude of average velocity.',
            options: ['less than', 'equal to', 'greater than or equal to', 'unrelated to'],
            correctIndex: 2,
            explanation: 'Since distance ≥ |displacement|, average speed ≥ |average velocity|. They are equal only when the object doesn\'t reverse direction.'
          }
        ]
      }
    },
    {
      id: 'om2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Average Velocity & Speed** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A bird flies 100 m north in 10 s, rests for 5 s, then flies 50 m south in 5 s. What is the average velocity for the entire trip?',
            options: [
              '2.5 m/s north',
              '5.0 m/s north',
              '7.5 m/s north',
              '10 m/s north'
            ],
            correctAnswer: 0,
            explanation: 'Displacement = 100 − 50 = 50 m north. Total time = 10 + 5 + 5 = 20 s. $v_{\\text{avg}} = 50/20 = 2.5$ m/s north.'
          },
          {
            question: 'A car has an average velocity of $-12$ m/s over a 5 s interval. What is the displacement?',
            options: [
              '+60 m',
              '-60 m',
              '+2.4 m',
              '-2.4 m'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta x = v_{\\text{avg}} \\times \\Delta t = (-12)(5) = -60$ m. The car moves 60 m in the negative direction.'
          }
        ]
      }
    }
  ]
}
