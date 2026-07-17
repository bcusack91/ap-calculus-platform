export const physics1CentripetalForcePart1Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf1-intro',
      type: 'text' as const,
      content: `
# 💪 Centripetal Force: $F_c = mv^2/r$

**Part 1 of 7 — Centripetal Force**

"Centripetal force" is NOT a new type of force. It's a **label** for whichever real force (or combination of forces) causes an object to move in a circle. Understanding this distinction is one of the most important concepts in AP Physics 1.

**In this lesson you will learn:**
- The formula $F_c = mv^2/r$
- Why centripetal force is not a new force
- How to apply Newton's Second Law to circular motion
- The connection between $F = ma$ and $a_c = v^2/r$
      `
    },
    {
      id: 'cf1-newtons-law',
      type: 'text' as const,
      content: `
## Newton's Second Law for Circular Motion

Newton's Second Law says $\\vec{F}_{net} = m\\vec{a}$.

For circular motion, the acceleration is centripetal: $a_c = v^2/r$, directed toward the center.

Therefore, the **net force toward the center** must be:

$$F_c = ma_c = \\frac{mv^2}{r}$$

### Equivalent Forms

$$F_c = \\frac{mv^2}{r} = m\\omega^2 r = \\frac{4\\pi^2 mr}{T^2}$$

### THE KEY INSIGHT

**Centripetal force is not a new force!** It is the **net radial force** — the sum of all real forces pointing toward (or away from) the center.

| Real Force | When It Provides Centripetal Force |
|-----------|-----------------------------------|
| Tension | Ball on a string |
| Friction | Car on a curve |
| Gravity | Orbiting satellite |
| Normal force | Banked turn, loop-the-loop |
| Combination | Most real-world situations |

### Common AP Mistake
❌ Drawing "centripetal force" as a separate force on a free body diagram
✅ Identifying which real force(s) provide the centripetal acceleration
      `
    },
    {
      id: 'cf1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Centripetal Force Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball swings in a horizontal circle on a string. The centripetal force is provided by:',
            options: [
              'The centripetal force (it\'s its own force)',
              'The tension in the string',
              'The weight of the ball',
              'The normal force'
            ],
            correctAnswer: 1,
            explanation: 'The string tension pulls the ball toward the center of the circle. Tension IS the centripetal force in this case — "centripetal force" just describes what the tension is doing.'
          },
          {
            question: 'On a free body diagram of an object in circular motion, you should:',
            options: [
              'Draw a centripetal force arrow pointing toward the center',
              'Draw a centrifugal force arrow pointing outward',
              'Draw only the real forces (tension, gravity, normal, friction, etc.)',
              'Draw both centripetal and centrifugal forces'
            ],
            correctAnswer: 2,
            explanation: 'Never draw "centripetal force" as a separate force. Only draw real forces. Then, the net radial component of these forces equals $mv^2/r$.'
          },
          {
            question: 'If the net centripetal force on an object moving in a circle suddenly becomes zero, the object will:',
            options: [
              'Stop immediately',
              'Continue in a circle',
              'Fly outward radially',
              'Move in a straight line tangent to the circle'
            ],
            correctAnswer: 3,
            explanation: 'Newton\'s 1st Law: no net force → no acceleration → the object continues with its current velocity, which is tangent to the circle.'
          }
        ]
      }
    },
    {
      id: 'cf1-calculations',
      type: 'input-boxes' as const,
      content: `
**Centripetal Force Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 0.5 kg ball moves in a circle of radius 2 m at 4 m/s. What centripetal force is required (in N)?

2) A 1500 kg car rounds a curve of radius 100 m at 25 m/s. What centripetal force is needed (in N)?

3) A 60 kg person on a merry-go-round sits 3 m from the center. The ride makes one revolution every 6 s. What centripetal force acts on the person (in N, round to nearest whole number)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '9375', '197'],
        hint1: '$F_c = mv^2/r$.',
        hint2: '$F_c = mv^2/r$.',
        hint3: 'First find $v = 2\\pi r/T$, then $F_c = mv^2/r$.',
        explanation: '1) $F_c = 0.5(16)/2 = 4$ N. 2) $F_c = 1500(625)/100 = 9375$ N. 3) $v = 2\\pi(3)/6 = \\pi = 3.14$ m/s. $F_c = 60(9.87)/3 = 197.4 \\approx 197$ N.'
      }
    },
    {
      id: 'cf1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Force Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car turns on a flat road. The centripetal force is provided by:',
            options: ['The engine', 'Friction between tires and road', 'The normal force', 'Gravity'],
            correctIndex: 1,
            explanation: 'On a flat road, static friction between the tires and road surface provides the inward (centripetal) force needed to turn.'
          },
          {
            label: 'The Moon orbits Earth. The centripetal force is:',
            options: ['The Moon\'s inertia', 'Gravity', 'Tidal forces', 'Magnetic force'],
            correctIndex: 1,
            explanation: 'Gravity pulls the Moon toward Earth, providing the centripetal force for its orbit.'
          },
          {
            label: 'A coin sits on a spinning turntable without sliding. The centripetal force is:',
            options: ['Gravity', 'Normal force', 'Static friction', 'The spinning motion itself'],
            correctIndex: 2,
            explanation: 'Static friction between the coin and turntable surface provides the inward force. If the turntable spins too fast, friction can\'t provide enough centripetal force and the coin slides off.'
          },
          {
            label: 'Doubling the speed while keeping radius and mass constant changes the required centripetal force by a factor of:',
            options: ['2', '4', '1/2', '1/4'],
            correctIndex: 1,
            explanation: '$F_c = mv^2/r$. Doubling $v$: $F_c \\propto (2v)^2 = 4v^2$. The required force quadruples.'
          }
        ]
      }
    },
    {
      id: 'cf1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Centripetal Force** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball on a string moves in a horizontal circle. If the tension is 50 N and the radius is 0.8 m, the speed of the ball is:',
            options: [
              '2.5 m/s',
              '4.5 m/s',
              '5.0 m/s',
              '25 m/s'
            ],
            correctAnswer: 1,
            explanation: '$F_c = mv^2/r \\Rightarrow v = \\sqrt{F_c r/m} = \\sqrt{50(0.8)/2} = \\sqrt{20} \\approx 4.47 \\approx 4.5$ m/s.'
          },
          {
            question: 'A satellite orbits Earth. If the orbit radius doubles (same mass), the gravitational force (which provides centripetal force) changes. For the satellite to maintain a circular orbit, its speed must:',
            options: [
              'Double',
              'Stay the same',
              'Decrease',
              'Quadruple'
            ],
            correctAnswer: 2,
            explanation: 'Gravity weakens with distance ($F \\propto 1/r^2$). With less force but larger radius, $F = mv^2/r$ requires less speed. Specifically, $v = \\sqrt{GM/r}$, so larger $r$ → smaller $v$.'
          }
        ]
      }
    }
  ]
}
