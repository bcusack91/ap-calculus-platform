export const physics1UniversalGravitationPart2Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug2-intro',
      type: 'text' as const,
      content: `
# 🌐 Gravitational Field: $g = GM/r^2$

**Part 2 of 7 — Universal Gravitation**

The gravitational field describes how massive objects modify the space around them, creating a region where other masses experience a gravitational force. This is the concept behind $g$ — and it's not always $9.8$ m/s²!

**In this lesson you will learn:**
- The gravitational field concept: $g = GM/r^2$
- How $g$ varies with altitude and location
- Surface gravity on different planets
- The relationship between weight and gravitational field
      `
    },
    {
      id: 'ug2-field',
      type: 'text' as const,
      content: `
## The Gravitational Field

### Definition

The gravitational field $\\vec{g}$ at a point in space tells you the gravitational force per unit mass that would be experienced by a test mass placed there:

$$\\vec{g} = \\frac{\\vec{F}}{m_{test}} \\quad \\Rightarrow \\quad g = \\frac{GM}{r^2}$$

- Direction: toward the center of the mass $M$ creating the field
- Units: N/kg (equivalent to m/s²)
- $g$ is a property of **space** — it exists whether or not a test mass is there

### Weight and Gravitational Field

$$W = mg$$

where $g$ is the local gravitational field strength. On Earth's surface: $g \\approx 9.8$ m/s².

### How $g$ Varies with Distance

$$g(r) = \\frac{GM}{r^2}$$

At Earth's surface ($r = R_E$): $g_0 = GM_E/R_E^2 \\approx 9.8$ m/s²

At altitude $h$ above the surface ($r = R_E + h$):

$$g(h) = \\frac{GM_E}{(R_E + h)^2} = g_0 \\left(\\frac{R_E}{R_E + h}\\right)^2$$

### Surface Gravity on Other Bodies

| Body | $g$ (m/s²) | Compared to Earth |
|------|-----------|------------------|
| Moon | 1.6 | 0.16$g$ |
| Mars | 3.7 | 0.38$g$ |
| Jupiter | 24.8 | 2.53$g$ |
| Sun | 274 | 28$g$ |
      `
    },
    {
      id: 'ug2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gravitational Field Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A planet has mass $4M_E$ and radius $2R_E$. Its surface gravity compared to Earth\'s is:',
            options: [
              'The same',
              'Twice as strong',
              'Four times as strong',
              'Half as strong'
            ],
            correctAnswer: 0,
            explanation: '$g = GM/R^2$. $g_{planet} = G(4M_E)/(2R_E)^2 = 4GM_E/(4R_E^2) = GM_E/R_E^2 = g_E$. Same surface gravity!'
          },
          {
            question: 'At what altitude above Earth (in terms of $R_E$) is the gravitational field half its surface value?',
            options: [
              '$R_E/2$',
              '$R_E$',
              '$(\\sqrt{2} - 1)R_E \\approx 0.41R_E$',
              '$2R_E$'
            ],
            correctAnswer: 2,
            explanation: '$g/2 = GM/(R_E + h)^2$. Also $g = GM/R_E^2$. So $(R_E + h)^2 = 2R_E^2$. $R_E + h = R_E\\sqrt{2}$. $h = (\\sqrt{2} - 1)R_E \\approx 0.414R_E \\approx 2640$ km.'
          },
          {
            question: 'An astronaut on the ISS (altitude ~400 km, $R_E \\approx 6400$ km) experiences a gravitational field approximately:',
            options: [
              'Zero — they\'re "weightless"',
              '88% of surface gravity',
              '50% of surface gravity',
              '10% of surface gravity'
            ],
            correctAnswer: 1,
            explanation: '$g = g_0(R_E/(R_E + h))^2 = g_0(6400/6800)^2 = g_0(0.941)^2 = 0.885g_0 \\approx 88\\%$. They float not because gravity is gone, but because they\'re in free fall!'
          }
        ]
      }
    },
    {
      id: 'ug2-calculations',
      type: 'input-boxes' as const,
      content: `
**Gravitational Field Calculations** 🧮

Use $G = 6.67 \\times 10^{-11}$ N·m²/kg², $g_E = 10$ m/s², $R_E = 6.4 \\times 10^6$ m.

1) What is the gravitational field strength at twice Earth's radius from Earth's center (in m/s²)?

2) Mars has mass $6.42 \\times 10^{23}$ kg and radius $3.39 \\times 10^6$ m. What is its surface gravity (in m/s², round to 3 significant figures)?

3) At what distance from Earth's center (in units of $R_E$, round to 3 significant figures) is $g = 1$ m/s²?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '3.7', '3.2', '2.50', '3.70', '3.20'],
        hint1: '$g \\propto 1/r^2$. At $2R_E$: $g = g_E/4$.',
        hint2: '$g = GM/R^2$.',
        hint3: '$g/g_E = (R_E/r)^2 \\Rightarrow r/R_E = \\sqrt{g_E/g}$.',
        explanation: '1) $g = 10/4 = 2.5$ m/s². 2) $g = 6.67 \\times 10^{-11}(6.42 \\times 10^{23})/(3.39 \\times 10^6)^2 = 4.28 \\times 10^{13}/1.15 \\times 10^{13} = 3.72 \\approx 3.7$ m/s². 3) $r/R_E = \\sqrt{10/1} = \\sqrt{10} = 3.162 \\approx 3.2$.'
      }
    },
    {
      id: 'ug2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Field Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The gravitational field inside a uniform spherical shell is:',
            options: ['Equal to surface gravity', 'Half of surface gravity', 'Zero', 'Infinite'],
            correctIndex: 2,
            explanation: 'Inside a uniform spherical shell, the gravitational field is exactly zero (Shell Theorem). All the gravitational pulls from different parts of the shell cancel.'
          },
          {
            label: 'The units N/kg and m/s² are:',
            options: ['Completely different', 'Equivalent — same physical dimension', 'Similar but not interchangeable', 'Only equal on Earth'],
            correctIndex: 1,
            explanation: '1 N = 1 kg·m/s², so 1 N/kg = 1 (kg·m/s²)/kg = 1 m/s². They are exactly the same unit.'
          },
          {
            label: 'If Earth somehow shrank to half its radius (same mass), surface gravity would:',
            options: ['Halve', 'Double', 'Quadruple', 'Stay the same'],
            correctIndex: 2,
            explanation: '$g = GM/R^2$. Halving $R$: $g\' = GM/(R/2)^2 = 4GM/R^2 = 4g$. Gravity quadruples.'
          }
        ]
      }
    },
    {
      id: 'ug2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gravitational Field** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 60 kg person weighs 600 N on Earth. On a planet where $g = 5$ m/s², they would weigh:',
            options: [
              '120 N',
              '300 N',
              '600 N',
              '1200 N'
            ],
            correctAnswer: 1,
            explanation: '$W = mg = 60 \\times 5 = 300$ N. Weight depends on the local $g$; mass stays the same.'
          },
          {
            question: 'Two planets have the same surface gravity. Planet A has twice the mass of Planet B. The ratio of their radii $R_A/R_B$ is:',
            options: [
              '$1$',
              '$\\sqrt{2}$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: '$g = GM/R^2$. Same $g$: $GM_A/R_A^2 = GM_B/R_B^2$. $M_A/R_A^2 = M_B/R_B^2$. $2M_B/R_A^2 = M_B/R_B^2$. $R_A^2 = 2R_B^2$. $R_A = \\sqrt{2}R_B$.'
          }
        ]
      }
    }
  ]
}
