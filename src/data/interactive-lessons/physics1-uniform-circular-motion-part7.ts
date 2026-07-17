export const physics1UniformCircularMotionPart7Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Uniform Circular Motion**

This final lesson brings together all circular motion concepts for AP exam preparation. We'll cover AP-style questions, common pitfalls, and exam strategies.

**In this lesson you will:**
- Tackle AP-style multiple choice questions
- Identify common exam mistakes
- Connect circular motion to Newton's Laws (preview of centripetal force)
- Review the complete circular motion toolkit
      `
    },
    {
      id: 'uc7-toolkit',
      type: 'text' as const,
      content: `
## Your Circular Motion Toolkit

### Essential Formulas
| Formula | What It Gives |
|---------|---------------|
| $v = 2\\pi r/T$ | Speed from radius and period |
| $a_c = v^2/r$ | Centripetal acceleration from speed and radius |
| $a_c = 4\\pi^2 r/T^2$ | Centripetal acceleration from radius and period |
| $v = r\\omega$ | Speed from angular velocity |
| $a_c = r\\omega^2$ | Centripetal acceleration from angular velocity |
| $T = 1/f$ | Period-frequency relationship |
| $\\omega = 2\\pi f$ | Angular velocity from frequency |

### Key Concepts Checklist
✅ Speed is constant; velocity is not (direction changes)
✅ Acceleration points toward the center — always
✅ $\\vec{v} \\perp \\vec{a}_c$ (velocity perpendicular to acceleration)
✅ No outward ("centrifugal") force in an inertial frame
✅ If string breaks, object goes straight (tangent), not outward
✅ Non-uniform: add tangential acceleration, use Pythagorean theorem
      `
    },
    {
      id: 'uc7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes

### Mistake 1: Confusing $a_c \\propto r$ vs. $a_c \\propto 1/r$
- At constant speed: $a_c = v^2/r$ → bigger $r$ means **less** $a_c$
- At constant period: $a_c = 4\\pi^2r/T^2$ → bigger $r$ means **more** $a_c$
- Always check what's being held constant!

### Mistake 2: Saying acceleration = 0 because speed is constant
- Acceleration is zero only when velocity (including direction) is constant
- Circular motion always has centripetal acceleration

### Mistake 3: Using diameter instead of radius
- Common error: forgetting to divide by 2
- Always double-check: is the problem giving diameter or radius?

### Mistake 4: Forgetting unit conversions
- RPM → Hz: divide by 60
- Minutes → seconds: multiply by 60
- km → m: multiply by 1000
      `
    },
    {
      id: 'uc7-ap-mc',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object moves in a circle at constant speed. If the radius is tripled and the speed is doubled, the centripetal acceleration:',
            options: [
              'Increases by a factor of 4/3',
              'Decreases by a factor of 3/4',
              'Increases by a factor of 3',
              'Decreases by a factor of 3'
            ],
            correctAnswer: 0,
            explanation: '$a_c = v^2/r$. New: $a_c\' = (2v)^2/(3r) = 4v^2/(3r) = (4/3)(v^2/r) = (4/3)a_c$. It increases by factor 4/3.'
          },
          {
            question: 'Planet X has twice the orbital radius and twice the orbital speed of Planet Y. The ratio of their orbital periods $T_X/T_Y$ is:',
            options: [
              '1/2',
              '1',
              '2',
              '4'
            ],
            correctAnswer: 1,
            explanation: '$T = 2\\pi r/v$. $T_X/T_Y = (2\\pi r_X/v_X)/(2\\pi r_Y/v_Y) = (r_X v_Y)/(r_Y v_X) = (2r_Y \\cdot v_Y)/(r_Y \\cdot 2v_Y) = 1$. Same period!'
          },
          {
            question: 'A ball on a string moves in a horizontal circle. The string is then shortened to half its original length while maintaining the same speed. The centripetal acceleration:',
            options: [
              'Halves',
              'Doubles',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$a_c = v^2/r$. Same $v$, half $r$: $a_c\' = v^2/(r/2) = 2v^2/r = 2a_c$. Doubles.'
          }
        ]
      }
    },
    {
      id: 'uc7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

1) Mars orbits the Sun at $r = 2.28 \\times 10^{11}$ m with period $T = 687$ days. What is Mars\'s orbital speed (in m/s, round to nearest 100)?

2) A coin sits on a turntable 12 cm from the center, spinning at 78 RPM. What is the centripetal acceleration of the coin (in $m/s^{2}$, round to 3 significant figures)?

3) A space station creates artificial gravity by spinning. If the station has radius 50 m, what angular velocity $\\omega$ is needed to produce $g = 10$ $m/s^{2}$ at the rim (in rad/s, round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24100', '80.1', '0.45'],
        hint1: 'Convert days to seconds: $T = 687 \\times 24 \\times 3600$. Then $v = 2\\pi r/T$.',
        hint2: 'Convert 78 RPM to Hz. Then $a_c = 4\\pi^2 rf^2$.',
        hint3: '$a_c = r\\omega^2 \\Rightarrow \\omega = \\sqrt{a_c/r}$.',
        explanation: '1) $T = 687 \\times 86400 = 5.935 \\times 10^7$ s. $v = 2\\pi(2.28 \\times 10^{11})/(5.935 \\times 10^7) = 1.433 \\times 10^{12}/5.935 \\times 10^7 = 24{,}140 \\approx 24{,}100$ m/s. 2) $f = 78/60 = 1.3$ Hz. $a_c = 4\\pi^2(0.12)(1.3)^2 = 39.48(0.12)(1.69) = 8.01$ $m/s^{2}$. Hmm, let me redo: $4(9.87)(0.12)(1.69) = 4 \\times 0.12 \\times 9.87 \\times 1.69 = 7.99 \\approx 8.0$. Actually $4\\pi^2 \\times 0.12 \\times 1.69 = 39.48 \\times 0.2028 = 8.01$ $m/s^{2}$. 3) $\\omega = \\sqrt{10/50} = \\sqrt{0.2} = 0.447 \\approx 0.45$ rad/s.'
      }
    },
    {
      id: 'uc7-conceptual-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a string holding a ball in circular motion breaks, the ball moves:',
            options: ['Radially outward', 'In a straight line tangent to the circle', 'Spirals outward', 'Continues in a circle briefly'],
            correctIndex: 1,
            explanation: 'Newton\'s 1st Law: without a net force, the ball continues with its current velocity — which is tangent to the circle at the moment of release.'
          },
          {
            label: 'A geosynchronous satellite orbits with $T = 24$ hours. Compared to the ISS ($T = 90$ min), the geosynchronous satellite has:',
            options: ['Greater speed', 'Less speed', 'The same speed', 'Cannot compare'],
            correctIndex: 1,
            explanation: 'The geosynchronous orbit is much farther out. Despite larger $r$, the much larger $T$ dominates: $v = 2\\pi r/T$. Geo satellites orbit at ~3 km/s vs ISS ~7.7 km/s.'
          },
          {
            label: 'The net force on an object in uniform circular motion does work equal to:',
            options: ['$\\frac{1}{2}mv^2$', '$mv^2/r$ per revolution', 'Zero', '$2\\pi r \\times F$'],
            correctIndex: 2,
            explanation: 'Centripetal force is perpendicular to displacement (velocity). Work = $F \\cdot d \\cdot \\cos90° = 0$. No work means no change in KE — consistent with constant speed!'
          }
        ]
      }
    },
    {
      id: 'uc7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Uniform Circular Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about uniform circular motion is INCORRECT?',
            options: [
              'Speed is constant',
              'Acceleration is constant in magnitude',
              'Velocity is constant',
              'The net force points toward the center'
            ],
            correctAnswer: 2,
            explanation: 'Velocity is NOT constant — its direction continuously changes. Speed (magnitude of velocity) is constant, and the acceleration magnitude is constant, but the acceleration direction also changes (always toward center).'
          },
          {
            question: 'A planet orbits a star. If the orbital radius increases by a factor of 4 while the orbital speed decreases by half, the period:',
            options: [
              'Doubles',
              'Quadruples',
              'Increases by factor 8',
              'Stays the same'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi r/v$. $T\' = 2\\pi(4r)/(v/2) = 2\\pi \\cdot 8r/v = 8T$. Period increases by factor 8.'
          }
        ]
      }
    }
  ]
}
