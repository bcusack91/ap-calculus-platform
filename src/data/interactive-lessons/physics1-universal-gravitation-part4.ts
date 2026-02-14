export const physics1UniversalGravitationPart4Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug4-intro',
      type: 'text' as const,
      content: `
# 🪐 Kepler's Third Law: $T^2 \\propto r^3$

**Part 4 of 7 — Universal Gravitation**

Kepler discovered three laws of planetary motion decades before Newton explained them. The Third Law — the relationship between orbital period and radius — is one of the most powerful tools in astrophysics.

**In this lesson you will learn:**
- Kepler's Third Law: $T^2 \\propto r^3$
- How to derive it from Newton's Law of Gravitation
- Using Kepler's Law to compare orbits
- Calculating unknown orbital properties
      `
    },
    {
      id: 'ug4-derivation',
      type: 'text' as const,
      content: `
## Deriving Kepler's Third Law

Starting from gravity = centripetal force:

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r} = \\frac{m(2\\pi r/T)^2}{r} = \\frac{4\\pi^2 mr}{T^2}$$

Cancel $m$ and rearrange:

$$T^2 = \\frac{4\\pi^2}{GM} r^3$$

### The Key Relationship

$$T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3$$

This is a **linear relationship between $T^2$ and $r^3$**.

### Comparing Two Orbits (Same Central Body)

$$\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$$

This ratio form is incredibly useful — you don't even need to know $G$ or $M$!

### Kepler's Three Laws Summary

| Law | Statement |
|-----|-----------|
| 1st (Ellipses) | Planets orbit in ellipses with the Sun at one focus |
| 2nd (Equal Areas) | A line from the Sun sweeps equal areas in equal times |
| 3rd (Harmonics) | $T^2 \\propto r^3$ for all objects orbiting the same body |

### Important: Same Central Body Only!

$T^2/r^3 = 4\\pi^2/(GM)$ depends on $M$ — the mass of the body being orbited. You can only compare orbits around the **same** central body.
      `
    },
    {
      id: 'ug4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Kepler's Third Law Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Earth\'s orbital period is 1 year and its orbital radius is 1 AU. A planet at 4 AU would have a period of:',
            options: [
              '4 years',
              '8 years',
              '16 years',
              '64 years'
            ],
            correctAnswer: 1,
            explanation: '$T^2/T_E^2 = r^3/r_E^3$. $T^2/1 = 4^3 = 64$. $T = \\sqrt{64} = 8$ years.'
          },
          {
            question: 'If a planet\'s orbital period doubles, its orbital radius increases by a factor of:',
            options: [
              '$2$',
              '$\\sqrt[3]{4} \\approx 1.59$',
              '$4$',
              '$8$'
            ],
            correctAnswer: 1,
            explanation: '$T^2 \\propto r^3$. $(2T)^2 = kr^{\\prime 3}$. $4T^2 = kr^{\\prime 3}$. $r^{\\prime 3} = 4r^3$. $r\' = r \\cdot 4^{1/3} = r \\cdot \\sqrt[3]{4} \\approx 1.587r$.'
          },
          {
            question: 'Mars and Jupiter both orbit the Sun. If Mars orbits at 1.52 AU with period 1.88 years, and Jupiter orbits at 5.20 AU, Jupiter\'s period is about:',
            options: [
              '6.4 years',
              '11.9 years',
              '18.5 years',
              '27.0 years'
            ],
            correctAnswer: 1,
            explanation: '$T_J^2/T_M^2 = r_J^3/r_M^3$. $T_J^2 = 1.88^2 \\times (5.20/1.52)^3 = 3.534 \\times (3.421)^3 = 3.534 \\times 40.08 = 141.6$. $T_J = 11.9$ years.'
          }
        ]
      }
    },
    {
      id: 'ug4-calculations',
      type: 'input-boxes' as const,
      content: `
**Kepler's Third Law Calculations** 🧮

1) Earth orbits the Sun at 1 AU with $T = 1$ year. What is the orbital period of an asteroid at 2.5 AU (in years, round to 1 decimal place)?

2) A moon orbits a planet with period 10 days at radius $r$. Another moon orbits the same planet at radius $2r$. What is its period (in days, round to 1 decimal place)?

3) Jupiter's moon Io orbits at $r_1 = 4.22 \\times 10^8$ m with $T_1 = 1.77$ days. Europa orbits at $r_2 = 6.71 \\times 10^8$ m. What is Europa's period (in days, round to 2 decimal places)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.0', '28.3', '3.55'],
        hint1: '$T^2 = r^3$ in AU/years. $T = (2.5)^{3/2}$.',
        hint2: '$T_2^2/T_1^2 = (2r/r)^3 = 8$. $T_2 = T_1\\sqrt{8}$.',
        hint3: '$T_2/T_1 = (r_2/r_1)^{3/2}$.',
        explanation: '1) $T = (2.5)^{3/2} = 2.5 \\times \\sqrt{2.5} = 2.5 \\times 1.581 = 3.95 \\approx 4.0$ years. 2) $T_2 = 10\\sqrt{8} = 10 \\times 2.828 = 28.28 \\approx 28.3$ days. 3) $T_2 = 1.77 \\times (6.71/4.22)^{3/2} = 1.77 \\times (1.590)^{3/2} = 1.77 \\times 2.004 = 3.547 \\approx 3.55$ days.'
      }
    },
    {
      id: 'ug4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Kepler's Law Applications** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A graph of $T^2$ vs $r^3$ for planets in our solar system would be:',
            options: ['A curve', 'A straight line through the origin', 'A parabola', 'A horizontal line'],
            correctIndex: 1,
            explanation: '$T^2 = (4\\pi^2/GM_{Sun}) r^3$. This is $y = kx$ where $y = T^2$, $x = r^3$, and $k = 4\\pi^2/(GM_{Sun})$. A straight line through the origin!'
          },
          {
            label: 'The slope of a $T^2$ vs $r^3$ graph for objects orbiting Earth would be:',
            options: ['The same as for objects orbiting the Sun', 'Different — it depends on the central body\'s mass', 'Always equal to 1', 'Infinite'],
            correctIndex: 1,
            explanation: 'Slope $= 4\\pi^2/(GM)$. Different central masses give different slopes. Earth\'s slope would be much steeper than the Sun\'s (since $M_E \\ll M_{Sun}$).'
          },
          {
            label: 'Neptune orbits about 30 times farther from the Sun than Earth. Neptune\'s year is approximately:',
            options: ['30 Earth years', '90 Earth years', '165 Earth years', '900 Earth years'],
            correctIndex: 2,
            explanation: '$T = r^{3/2} = 30^{3/2} = 30\\sqrt{30} = 30 \\times 5.48 = 164.3 \\approx 165$ Earth years.'
          }
        ]
      }
    },
    {
      id: 'ug4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Kepler's Third Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A new exoplanet orbits its star with a period 8 times that of another planet in the same system. The ratio of their orbital radii is:',
            options: [
              '2',
              '4',
              '8',
              '64'
            ],
            correctAnswer: 1,
            explanation: '$T_2/T_1 = 8$. $(r_2/r_1)^3 = (T_2/T_1)^2 = 64$. $r_2/r_1 = 64^{1/3} = 4$.'
          },
          {
            question: 'Kepler\'s Third Law can be used to determine:',
            options: [
              'The mass of an orbiting satellite',
              'The mass of the central body being orbited',
              'The color of a planet',
              'The shape of an orbit'
            ],
            correctAnswer: 1,
            explanation: '$T^2 = 4\\pi^2 r^3/(GM)$. If you know $T$ and $r$, you can solve for $M$ — the mass of the central body. This is how we "weigh" stars and planets!'
          }
        ]
      }
    }
  ]
}
