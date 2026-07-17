export const physics1UniversalGravitationPart1Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug1-intro',
      type: 'text' as const,
      content: `
# 🌍 Newton's Law of Universal Gravitation

**Part 1 of 7 — Universal Gravitation**

Newton's great insight was that the same force that makes an apple fall from a tree also keeps the Moon in orbit around Earth. Every object with mass attracts every other object with mass — this is **universal gravitation**.

**In this lesson you will learn:**
- Newton's Law of Universal Gravitation: $F = Gm_1m_2/r^2$
- The gravitational constant $G$
- How gravitational force depends on mass and distance
- Calculating gravitational force between objects
      `
    },
    {
      id: 'ug1-law',
      type: 'text' as const,
      content: `
## The Law of Universal Gravitation

Every two objects with mass attract each other with a force:

$$F = \\frac{Gm_1 m_2}{r^2}$$

| Symbol | Meaning | Value/Units |
|--------|---------|-------------|
| $F$ | Gravitational force | Newtons (N) |
| $G$ | Universal gravitational constant | $6.67 \\times 10^{-11}$ $N\\cdot m^{2}/kg^{2}$ |
| $m_1, m_2$ | Masses of the two objects | kg |
| $r$ | Distance between **centers** of the objects | m |

### Key Features

1. **Inverse-square law**: $F \\propto 1/r^2$
   - Double the distance → force is $1/4$ as strong
   - Triple the distance → force is $1/9$ as strong

2. **Proportional to both masses**: $F \\propto m_1 m_2$
   - Double one mass → force doubles
   - Double both masses → force quadruples

3. **Always attractive**: gravity only pulls, never pushes

4. **Newton's 3rd Law applies**: the force on $m_1$ due to $m_2$ equals the force on $m_2$ due to $m_1$ (same magnitude, opposite direction)

### Why Don't We Feel Gravity Between Everyday Objects?

$G$ is incredibly small: $6.67 \\times 10^{-11}$. Two 100 kg people standing 1 m apart attract each other with only $F = 6.67 \\times 10^{-7}$ N — about the weight of a grain of sand!
      `
    },
    {
      id: 'ug1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gravitational Force Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Earth pulls on the Moon with gravitational force $F$. The Moon pulls on Earth with force:',
            options: [
              'Much less than $F$ (Moon is smaller)',
              'Much more than $F$ (Earth is bigger)',
              'Exactly $F$ (Newton\'s 3rd Law)',
              'Zero (Moon is in free fall)'
            ],
            correctAnswer: 2,
            explanation: 'Newton\'s 3rd Law: the gravitational force is an interaction between two objects. Earth pulls Moon with force $F$, and Moon pulls Earth with the same force $F$ in the opposite direction.'
          },
          {
            question: 'If the distance between two objects is tripled, the gravitational force becomes:',
            options: [
              '1/3 as strong',
              '1/6 as strong',
              '1/9 as strong',
              '3 times as strong'
            ],
            correctAnswer: 2,
            explanation: '$F \\propto 1/r^2$. Triple $r$: $F\' = F/3^2 = F/9$. The force drops to 1/9 of its original value.'
          },
          {
            question: 'Two objects each have mass $m$ and are separated by distance $d$. If one mass is doubled AND the distance is doubled, the force:',
            options: [
              'Doubles',
              'Halves',
              'Stays the same',
              'Quarters'
            ],
            correctAnswer: 1,
            explanation: '$F\' = G(2m)(m)/(2d)^2 = 2Gm^2/(4d^2) = (1/2)Gm^2/d^2 = F/2$. The force is halved.'
          }
        ]
      }
    },
    {
      id: 'ug1-calculations',
      type: 'input-boxes' as const,
      content: `
**Gravitational Force Calculations** 🧮

Use $G = 6.67 \\times 10^{-11}$ $N\\cdot m^{2}/kg^{2}$.

1) Find the gravitational force between Earth ($5.97 \\times 10^{24}$ kg) and the Moon ($7.35 \\times 10^{22}$ kg) separated by $3.84 \\times 10^8$ m. Express in scientific notation as $X \\times 10^{20}$ N. What is $X$ (round to 3 significant figures)?

2) Two 70 kg people stand 2 m apart. What is the gravitational force between them (in N, express in scientific notation, give the coefficient to 3 significant figures, e.g., "8.17" for $8.17 \\times 10^{-8}$ N)?

3) At Earth's surface, $r = 6.37 \\times 10^6$ m. Calculate $g = GM/r^2$ where $M = 5.97 \\times 10^{24}$ kg. What value do you get (in $m/s^{2}$, round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.98', '8.17', '9.8'],
        hint1: '$F = Gm_1m_2/r^2$. Compute numerator and denominator separately.',
        hint2: '$F = G(70)(70)/4$.',
        hint3: '$g = GM/r^2$. This should give the familiar $9.8$ $m/s^{2}$!',
        explanation: '1) $F = 6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24} \\times 7.35 \\times 10^{22} / (3.84 \\times 10^8)^2 = 6.67 \\times 5.97 \\times 7.35 / 14.75 \\times 10^{-11+24+22-16} = 292.6/14.75 \\times 10^{19} = 19.8 \\times 10^{19} = 1.98 \\times 10^{20}$. 2) $F = 6.67 \\times 10^{-11}(4900)/4 = 6.67 \\times 1225 \\times 10^{-11} = 8171 \\times 10^{-11} = 8.17 \\times 10^{-8}$ N. 3) $g = 6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24} / (6.37 \\times 10^6)^2 = 3.98 \\times 10^{14}/4.06 \\times 10^{13} = 9.81 \\approx 9.8$ $m/s^{2}$.'
      }
    },
    {
      id: 'ug1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Proportional Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If you move from Earth\'s surface to an altitude equal to Earth\'s radius (doubling your distance from Earth\'s center), your weight:',
            options: ['Halves', 'Quarters', 'Drops to 1/8', 'Stays the same'],
            correctIndex: 1,
            explanation: '$F \\propto 1/r^2$. Doubling $r$ (from $R$ to $2R$): $F\' = F/4$. Your weight drops to one quarter.'
          },
          {
            label: 'On a planet with twice Earth\'s mass and twice Earth\'s radius, surface gravity is:',
            options: ['Same as Earth', 'Half of Earth\'s', 'Twice Earth\'s', 'Four times Earth\'s'],
            correctIndex: 1,
            explanation: '$g = GM/R^2$. $g\' = G(2M)/(2R)^2 = 2GM/(4R^2) = (1/2)GM/R^2 = g/2$. Gravity is half.'
          },
          {
            label: 'The gravitational force between two protons ($m \\approx 10^{-27}$ kg) separated by $10^{-15}$ m is approximately:',
            options: ['About $10^{-34}$ N', 'About $10^{-24}$ N', 'About $10^{-14}$ N', 'About $10^{-4}$ N'],
            correctIndex: 0,
            explanation: '$F = Gm^2/r^2 \\approx (6.67 \\times 10^{-11})(10^{-27})^2/(10^{-15})^2 = 6.67 \\times 10^{-11-54+30} = 6.67 \\times 10^{-35} \\approx 10^{-34}$ N. Gravity between subatomic particles is negligibly weak compared to the strong nuclear force ($\\sim 10^4$ N at this distance).'
          }
        ]
      }
    },
    {
      id: 'ug1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Universal Gravitation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 50 kg astronaut is on the surface of a planet with mass $0.1 M_E$ and radius $0.5 R_E$. The astronaut\'s weight compared to their Earth weight is:',
            options: [
              'Half',
              '0.4 times',
              'Same',
              'Double'
            ],
            correctAnswer: 1,
            explanation: '$g_{planet} = G(0.1M_E)/(0.5R_E)^2 = 0.1/(0.25) \\times GM_E/R_E^2 = 0.4g_E$. Weight = $0.4 \\times$ Earth weight.'
          },
          {
            question: 'The gravitational constant $G$ is:',
            options: [
              'Different on every planet',
              'The same everywhere in the universe',
              'Only valid near Earth\'s surface',
              'Equal to $9.8$ $m/s^{2}$'
            ],
            correctAnswer: 1,
            explanation: '$G$ is a universal constant — the same value everywhere. It should not be confused with $g$ (gravitational field strength), which varies from place to place.'
          }
        ]
      }
    }
  ]
}
