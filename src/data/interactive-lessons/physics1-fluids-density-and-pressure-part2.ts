export const physics1FluidsDensityPressurePart2Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp2-intro',
      type: 'text' as const,
      content: `
# 📐 Pressure: $P = F/A$

**Part 2 of 7 — Fluids: Density & Pressure**

Pressure is force spread over an area. Whether it's the pressure of a finger pushing on a thumbtack or atmospheric pressure pressing on your skin, every fluid problem hinges on this definition.

**In this lesson you will learn:**
- The definition $P = F/A$
- The pascal (Pa) and useful conversions (kPa, atm, mmHg)
- How pressure differs from force
- Common AP traps with units
      `
    },
    {
      id: 'fdp2-definition',
      type: 'text' as const,
      content: `
## Definition of Pressure

$$P = \\frac{F_\\perp}{A}$$

- $F_\\perp$: force perpendicular (normal) to the surface (N)
- $A$: area over which the force acts $(m^{2})$
- $P$: pressure (Pa = $N/m^{2}$)

### Useful Pressure Conversions

| Unit | Equivalent |
|------|-----------|
| 1 Pa | 1 $N/m^{2}$ |
| 1 kPa | 1000 Pa |
| 1 atm | $1.013\\times10^{5}$ Pa ≈ 101 kPa |
| 1 atm | 760 mmHg |

### Pressure ≠ Force

A nail and a hammer driving on the same hand exert similar **forces** but very different **pressures** because the nail's contact area is tiny.

$$P_{nail} = \\frac{F}{A_{small}} \\gg P_{hand} = \\frac{F}{A_{large}}$$

### Pressure in Solids vs Fluids

In a static fluid, pressure acts in **all directions** at every point — not just downward. This is why a balloon under water gets squeezed evenly from every side.
      `
    },
    {
      id: 'fdp2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pressure Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Pressure is force per unit:',
            options: ['Length', 'Area', 'Volume', 'Time'],
            correctAnswer: 1,
            explanation: '$P = F/A$. The SI unit pascal (Pa) is $N/m^{2}$.'
          },
          {
            question: 'Two equal forces are applied to two surfaces. The smaller surface experiences:',
            options: [
              'Less pressure',
              'The same pressure',
              'Greater pressure',
              'No pressure'
            ],
            correctAnswer: 2,
            explanation: 'Same $F$, smaller $A$ → larger $P = F/A$. (Why a sharp blade cuts more easily than a dull one.)'
          },
          {
            question: 'Which is true about pressure in a static fluid?',
            options: [
              'It only acts downward (gravity direction)',
              'It acts in all directions equally at a given depth',
              'It only acts on the container walls',
              'It is zero everywhere except the bottom'
            ],
            correctAnswer: 1,
            explanation: 'Static fluid pressure is isotropic — equal in all directions at a given depth (Pascal\'s observation).'
          }
        ]
      }
    },
    {
      id: 'fdp2-calculations',
      type: 'input-boxes' as const,
      content: `
**Pressure Calculations** 🧮

1) A 200 N force pushes on a $4.0\\times10^{-2}$ $m^{2}$ surface. Pressure (Pa)?

2) An adult of mass 80 kg stands on one foot of area 0.020 $m^{2}$ ($g = 9.8$). Pressure under the foot (Pa)?

3) A force of 50 N is applied to a tack of contact area $1.0\\times10^{-6}$ $m^{2}$. Pressure (Pa)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5000', '39200', '50000000'],
        hint1: '$P = F/A$.',
        hint2: '$F = mg$, then $P = F/A$.',
        hint3: '$P = F/A$. Watch the small area.',
        explanation: '1) $P = 200/0.04 = 5000$ Pa. 2) $F = 80(9.8) = 784$ N; $P = 784/0.020 = 39{,}200$ Pa. 3) $P = 50/(1.0\\times10^{-6}) = 5.0\\times10^{7}$ Pa = 50 MPa — why a tack pierces wood so easily!'
      }
    },
    {
      id: 'fdp2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Force vs Pressure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A skier on snow vs the same skier on a single ski tip pressing into snow. Compared to standing on both skis, the tip exerts:',
            options: ['Less pressure', 'Same pressure', 'Greater pressure', 'No pressure'],
            correctIndex: 2,
            explanation: 'Same weight (force), much smaller contact area → much greater pressure. That\'s why ski tips dig in.'
          },
          {
            label: '1 atm equals approximately:',
            options: ['10 Pa', '1000 Pa', '$1.0\\times10^{5}$ Pa', '$1.0\\times10^{7}$ Pa'],
            correctIndex: 2,
            explanation: '1 atm = 101,325 Pa ≈ $1.0\\times10^{5}$ Pa.'
          },
          {
            label: 'A 1 m × 2 m board has a 100 N force on it. The pressure is:',
            options: ['100 Pa', '50 Pa', '200 Pa', '20 Pa'],
            correctIndex: 1,
            explanation: '$A = 2$ $m^{2}$. $P = 100/2 = 50$ Pa.'
          },
          {
            label: 'Doubling the area while keeping force constant changes the pressure by:',
            options: ['×2', '×½', '×4', '×¼'],
            correctIndex: 1,
            explanation: '$P = F/A$. Doubling $A$ halves $P$.'
          }
        ]
      }
    },
    {
      id: 'fdp2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Pressure** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 75 kg person lies face-down on a bed of nails with 1500 nails in contact, each tip area $1.0\\times10^{-6}$ $m^{2}$. Pressure under each nail (g = 9.8) is approximately:',
            options: [
              '$4.9\\times10^{2}$ Pa',
              '$4.9\\times10^{5}$ Pa',
              '$7.4\\times10^{8}$ Pa',
              '$7.4\\times10^{2}$ Pa'
            ],
            correctAnswer: 1,
            explanation: 'Total weight $W = 735$ N; total contact area $= 1500\\times1.0\\times10^{-6} = 1.5\\times10^{-3}$ $m^{2}$. $P = 735/1.5\\times10^{-3} = 4.9\\times10^{5}$ Pa — far below skin\'s pierce threshold.'
          },
          {
            question: 'Atmospheric pressure of 101 kPa pushes on a windowpane of area 1.5 $m^{2}$. The total atmospheric force on it (assuming pressure inside ≈ outside) is:',
            options: [
              '~150 N — but balanced by interior pressure',
              '~$1.5\\times10^{5}$ N — but balanced by interior pressure',
              '~$1.5\\times10^{8}$ N — net inward force',
              'Zero, because pressure has no force'
            ],
            correctAnswer: 1,
            explanation: '$F = PA = 101{,}000 \\times 1.5 \\approx 1.5\\times10^{5}$ N. Glass survives because indoor pressure pushes back equally — net force ≈ 0.'
          }
        ]
      }
    }
  ]
}
