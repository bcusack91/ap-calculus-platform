export const physics1UniformCircularMotionPart6Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Uniform Circular Motion**

Time to put it all together! In this workshop, we'll tackle a variety of circular motion problems — from simple calculations to multi-step AP-level scenarios.

**In this lesson you will:**
- Apply $v = 2\\pi r/T$ and $a_c = v^2/r$ in context
- Solve problems with multiple rotational quantities
- Connect circular motion to real-world applications
- Practice AP-level problem-solving strategies
      `
    },
    {
      id: 'uc6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step 1: Identify the Circular Motion
- What object is moving in a circle?
- What is the radius?
- What provides the centripetal force? (Preview of next topic!)

### Step 2: Choose the Right Formula
| Given | Find | Use |
|-------|------|-----|
| $v$ and $r$ | $a_c$ | $a_c = v^2/r$ |
| $T$ and $r$ | $v$ | $v = 2\\pi r/T$ |
| $T$ and $r$ | $a_c$ | $a_c = 4\\pi^2 r/T^2$ |
| $f$ and $r$ | $v$ | $v = 2\\pi rf$ |
| $\\omega$ and $r$ | $v$ | $v = r\\omega$ |

### Step 3: Convert Units
- RPM → Hz: divide by 60
- Hz → rad/s: multiply by $2\\pi$
- km/h → m/s: divide by 3.6
- Diameter → radius: divide by 2

### Step 4: Solve and Check
- Does the answer have correct units?
- Is the magnitude reasonable?
      `
    },
    {
      id: 'uc6-warm-up',
      type: 'input-boxes' as const,
      content: `
**Warm-Up Calculations** 🧮

1) A 0.5 m radius wheel makes 120 RPM. What is the speed of a point on the rim (in m/s, round to 1 decimal place)?

2) A satellite in low Earth orbit has period $T = 90$ min and orbital radius $r = 6.6 \\times 10^6$ m. What is its orbital speed (in m/s, round to nearest 100)?

3) Earth orbits the Sun at $v \\approx 30{,}000$ m/s in a roughly circular orbit of radius $1.5 \\times 10^{11}$ m. What is Earth's centripetal acceleration (in m/s², to 3 decimal places)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.3', '7700', '0.006'],
        hint1: 'Convert 120 RPM to Hz ($f = 2$ Hz), then $v = 2\\pi rf$.',
        hint2: 'Convert 90 min to seconds. $v = 2\\pi r/T$.',
        hint3: '$a_c = v^2/r$.',
        explanation: '1) $f = 120/60 = 2$ Hz. $v = 2\\pi(0.5)(2) = 2\\pi = 6.28 \\approx 6.3$ m/s. 2) $T = 90 \\times 60 = 5400$ s. $v = 2\\pi(6.6 \\times 10^6)/5400 = 41.5 \\times 10^6/5400 = 7685 \\approx 7700$ m/s. 3) $a_c = (3 \\times 10^4)^2/(1.5 \\times 10^{11}) = 9 \\times 10^8/1.5 \\times 10^{11} = 6 \\times 10^{-3} = 0.006$ m/s².'
      }
    },
    {
      id: 'uc6-applied-quiz',
      type: 'multiple-choice' as const,
      content: `
**Applied Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A centrifuge with radius 0.1 m produces an acceleration of $1000g$ ($g = 10$ m/s²). Its rotation frequency is approximately:',
            options: [
              '16 Hz',
              '50 Hz',
              '160 Hz',
              '500 Hz'
            ],
            correctAnswer: 1,
            explanation: '$a_c = 4\\pi^2 rf^2$. $10{,}000 = 4\\pi^2(0.1)f^2 = 3.95f^2$. $f^2 = 2532$. $f = 50.3 \\approx 50$ Hz.'
          },
          {
            question: 'Two runners race on a circular track. Runner A is on the inside lane (radius 30 m) and Runner B is on the outside lane (radius 33 m). If both complete a lap in 60 s, the speed difference between them is:',
            options: [
              '0.31 m/s',
              '0.52 m/s',
              '1.05 m/s',
              '3.14 m/s'
            ],
            correctAnswer: 0,
            explanation: '$v_A = 2\\pi(30)/60 = \\pi \\approx 3.14$ m/s. $v_B = 2\\pi(33)/60 = 1.1\\pi \\approx 3.46$ m/s. Difference: $0.31$ m/s.'
          },
          {
            question: 'A hamster runs in a wheel of diameter 20 cm at a speed of 1 m/s. The wheel\'s rotation frequency is:',
            options: [
              '0.5 Hz',
              '1.6 Hz',
              '3.2 Hz',
              '10 Hz'
            ],
            correctAnswer: 1,
            explanation: '$r = 0.10$ m. $v = 2\\pi rf \\Rightarrow f = v/(2\\pi r) = 1/(2\\pi \\times 0.10) = 1/0.628 \\approx 1.59 \\approx 1.6$ Hz.'
          }
        ]
      }
    },
    {
      id: 'uc6-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge Problems** 🧮

1) A vinyl record (radius 15 cm) plays at 33.3 RPM. How much farther does a point on the outer edge travel in 1 minute compared to a point 5 cm from the center? (in meters, round to 1 decimal place)

2) An amusement park ride spins riders in a circle of radius 8 m. If the maximum safe centripetal acceleration is $3g$ ($g = 10$ m/s²), what is the maximum allowed speed (in m/s, round to 1 decimal place)?

3) A wheel of radius 0.4 m accelerates from rest to 10 rad/s in 5 s. What is the tangential acceleration of a point on the rim (in m/s²)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20.9', '15.5', '0.8'],
        hint1: 'In 1 min at 33.3 RPM, both points complete 33.3 revolutions. Distance = circumference × revolutions. Find the difference.',
        hint2: '$a_c = v^2/r \\Rightarrow v = \\sqrt{a_c \\cdot r}$.',
        hint3: '$a_t = r\\alpha$ where $\\alpha = \\Delta\\omega/\\Delta t$.',
        explanation: '1) $d_{outer} = 2\\pi(0.15)(33.3) = 31.4$ m. $d_{inner} = 2\\pi(0.05)(33.3) = 10.5$ m. Difference: $31.4 - 10.5 = 20.9$ m. 2) $v = \\sqrt{30 \\times 8} = \\sqrt{240} = 15.49 \\approx 15.5$ m/s. 3) $\\alpha = 10/5 = 2$ rad/s². $a_t = r\\alpha = 0.4 \\times 2 = 0.8$ m/s².'
      }
    },
    {
      id: 'uc6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If you double both the radius and the period, the speed:',
            options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
            correctIndex: 2,
            explanation: '$v = 2\\pi r/T$. Doubling both $r$ and $T$: $v = 2\\pi(2r)/(2T) = 2\\pi r/T$. Speed is unchanged!'
          },
          {
            label: 'A point moves in a circle of radius 1 m at $v = 10$ m/s. Its centripetal acceleration compared to gravity ($g = 10$ m/s²) is:',
            options: ['About 1g', 'About 10g', 'About 100g', 'Much less than g'],
            correctIndex: 1,
            explanation: '$a_c = v^2/r = 100/1 = 100$ m/s² $= 10g$.'
          },
          {
            label: 'The Earth rotates once every 24 hours. A person on the equator ($r \\approx 6400$ km) experiences centripetal acceleration of about:',
            options: ['0.03 m/s²', '0.3 m/s²', '3 m/s²', '10 m/s²'],
            correctIndex: 0,
            explanation: '$T = 86400$ s. $a_c = 4\\pi^2(6.4 \\times 10^6)/(86400)^2 = 2.53 \\times 10^8/7.46 \\times 10^9 = 0.034 \\approx 0.03$ m/s². Very small compared to $g$!'
          }
        ]
      }
    },
    {
      id: 'uc6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A GPS satellite orbits at radius $2.66 \\times 10^7$ m with period $T = 12$ hours. Its orbital speed is approximately:',
            options: [
              '1,900 m/s',
              '3,900 m/s',
              '7,800 m/s',
              '11,200 m/s'
            ],
            correctAnswer: 1,
            explanation: '$T = 12 \\times 3600 = 43200$ s. $v = 2\\pi(2.66 \\times 10^7)/43200 = 1.67 \\times 10^8/43200 \\approx 3866 \\approx 3900$ m/s.'
          },
          {
            question: 'A washing machine drum (radius 0.25 m) spins at 1200 RPM. The centripetal acceleration at the drum wall is approximately:',
            options: [
              '400 m/s²',
              '1,200 m/s²',
              '4,000 m/s²',
              '40,000 m/s²'
            ],
            correctAnswer: 2,
            explanation: '$f = 1200/60 = 20$ Hz. $a_c = 4\\pi^2(0.25)(20)^2 = 4(9.87)(0.25)(400) = 3948 \\approx 4000$ m/s² (about $400g$!).'
          }
        ]
      }
    }
  ]
}
