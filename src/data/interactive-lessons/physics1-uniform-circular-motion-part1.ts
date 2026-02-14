export const physics1UniformCircularMotionPart1Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc1-intro',
      type: 'text' as const,
      content: `
# 🔄 Circular Motion Basics

**Part 1 of 7 — Uniform Circular Motion**

An object moving in a circle at constant speed is in **uniform circular motion**. While the speed stays the same, the **direction** of motion is constantly changing — which means the velocity is changing, and there must be an acceleration!

**In this lesson you will learn:**
- Period, frequency, and angular speed
- The relationship $v = 2\\pi r / T$
- How to convert between period and frequency
- Calculating speed for objects in circular paths
      `
    },
    {
      id: 'uc1-definitions',
      type: 'text' as const,
      content: `
## Key Definitions

### Period ($T$)
The time for **one complete revolution** (one full circle).
- Units: seconds (s)
- Example: A Ferris wheel completes one rotation in 60 s → $T = 60$ s

### Frequency ($f$)
The **number of revolutions per second**.
- Units: hertz (Hz) = 1/s = rev/s
- $f = 1/T$ and $T = 1/f$

### Speed in Circular Motion

The distance traveled in one revolution is the **circumference**: $C = 2\\pi r$.

$$v = \\frac{\\text{distance}}{\\text{time}} = \\frac{2\\pi r}{T} = 2\\pi r f$$

| Quantity | Symbol | Units | Formula |
|----------|--------|-------|---------|
| Period | $T$ | s | $T = 1/f = 2\\pi r/v$ |
| Frequency | $f$ | Hz | $f = 1/T = v/(2\\pi r)$ |
| Speed | $v$ | m/s | $v = 2\\pi r/T = 2\\pi rf$ |

### Important Note
In uniform circular motion, **speed is constant** but **velocity is not** (because the direction changes continuously).
      `
    },
    {
      id: 'uc1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Circular Motion Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A car drives around a circular track at constant speed. Which quantity is constant?',
            options: [
              'Velocity',
              'Speed',
              'Acceleration',
              'Both speed and velocity'
            ],
            correctAnswer: 1,
            explanation: 'Speed (magnitude of velocity) stays constant in uniform circular motion. Velocity changes because the direction changes. The magnitude of acceleration is also constant, but its direction changes.'
          },
          {
            question: 'A wheel spins at 5 revolutions per second. Its period is:',
            options: [
              '5 s',
              '0.5 s',
              '0.2 s',
              '2 s'
            ],
            correctAnswer: 2,
            explanation: '$T = 1/f = 1/5 = 0.2$ s. Each revolution takes 0.2 seconds.'
          },
          {
            question: 'If the radius of a circular path doubles and the period stays the same, the speed:',
            options: [
              'Stays the same',
              'Doubles',
              'Halves',
              'Quadruples'
            ],
            correctAnswer: 1,
            explanation: '$v = 2\\pi r/T$. If $r$ doubles and $T$ is constant, $v$ doubles.'
          }
        ]
      }
    },
    {
      id: 'uc1-calculations',
      type: 'input-boxes' as const,
      content: `
**Speed and Period Calculations** 🧮

1) A merry-go-round has radius 4 m and completes one revolution in 8 s. What is the speed of a rider on the edge (in m/s, use $\\pi \\approx 3.14$, round to 3 significant figures)?

2) A satellite orbits Earth at $v = 7800$ m/s in a circular orbit of radius $6.7 \\times 10^6$ m. What is its orbital period (in seconds, round to nearest 100)?

3) A fan blade tip is 0.3 m from the center and spins at 20 Hz. What is its speed (in m/s, round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.1', '5400', '37.7', '3.10', '37.70'],
        hint1: '$v = 2\\pi r/T = 2\\pi(4)/8$.',
        hint2: '$T = 2\\pi r/v = 2\\pi(6.7 \\times 10^6)/7800$.',
        hint3: '$v = 2\\pi rf = 2\\pi(0.3)(20)$.',
        explanation: '1) $v = 2(3.14)(4)/8 = 25.12/8 = 3.14 \\approx 3.1$ m/s. 2) $T = 2(3.14)(6.7 \\times 10^6)/7800 = 42.1 \\times 10^6/7800 = 5397 \\approx 5400$ s ($\\approx 90$ min). 3) $v = 2(3.14)(0.3)(20) = 37.68 \\approx 37.7$ m/s.'
      }
    },
    {
      id: 'uc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connections** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a car goes around a track twice as fast (half the period), its speed:',
            options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'],
            correctIndex: 1,
            explanation: '$v = 2\\pi r/T$. Halving $T$ doubles $v$.'
          },
          {
            label: 'A point near the edge of a spinning disc compared to a point near the center has:',
            options: ['The same speed', 'Greater speed', 'Less speed', 'Greater period'],
            correctIndex: 1,
            explanation: 'Both points have the same period (they\'re on the same disc), but $v = 2\\pi r/T$. Larger $r$ → greater speed.'
          },
          {
            label: 'The SI unit for frequency is:',
            options: ['seconds', 'hertz', 'radians per second', 'meters per second'],
            correctIndex: 1,
            explanation: 'Frequency is measured in hertz (Hz), where 1 Hz = 1 revolution per second = 1 s$^{-1}$.'
          },
          {
            label: 'RPM (revolutions per minute) can be converted to Hz by:',
            options: ['Multiplying by 60', 'Dividing by 60', 'Multiplying by $2\\pi$', 'Dividing by $2\\pi$'],
            correctIndex: 1,
            explanation: 'RPM gives rev/min. To get rev/s (Hz), divide by 60. Example: 120 RPM = 120/60 = 2 Hz.'
          }
        ]
      }
    },
    {
      id: 'uc1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Circular Motion Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The International Space Station orbits Earth every 92 minutes at a radius of $6.78 \\times 10^6$ m. Its orbital speed is approximately:',
            options: [
              '3,800 m/s',
              '7,700 m/s',
              '11,200 m/s',
              '15,000 m/s'
            ],
            correctAnswer: 1,
            explanation: '$T = 92 \\times 60 = 5520$ s. $v = 2\\pi r/T = 2\\pi(6.78 \\times 10^6)/5520 \\approx 42.6 \\times 10^6/5520 \\approx 7717$ m/s $\\approx 7700$ m/s.'
          },
          {
            question: 'A record player spins at 33.3 RPM. The period of rotation is approximately:',
            options: [
              '0.56 s',
              '1.8 s',
              '3.3 s',
              '33.3 s'
            ],
            correctAnswer: 1,
            explanation: '$f = 33.3/60 = 0.555$ Hz. $T = 1/f = 1/0.555 = 1.80$ s.'
          }
        ]
      }
    }
  ]
}
