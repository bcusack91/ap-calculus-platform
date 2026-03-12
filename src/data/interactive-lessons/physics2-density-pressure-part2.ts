export const physics2DensityPressurePart2Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp2-intro',
      type: 'text' as const,
      content: `
# 🏊 Pressure in Fluids — Depth & Pascal's Law

**Part 2 of 7 — How Pressure Varies**

Pressure in a fluid isn't constant — it increases with depth. This one idea explains why your ears hurt at the bottom of a pool and why dams are thicker at the base.
      `
    },
    {
      id: 'dp2-depth-pressure',
      type: 'text' as const,
      content: `
## Pressure vs. Depth

For a static (non-moving) fluid of uniform density:

$$P = P_0 + \\rho g h$$

Where:
- $P$ = absolute pressure at depth $h$
- $P_0$ = pressure at the surface (usually $P_{\\text{atm}}$)
- $\\rho$ = fluid density (kg/m³)
- $g = 9.8$ m/s² (or 10 for AP estimates)
- $h$ = depth below the surface (m)

### Key Insights

1. **Pressure depends only on depth** — not on the shape of the container
2. **At the same depth, pressure is the same** everywhere in a connected fluid
3. **Pressure increases linearly** with depth ($\\rho g$ per meter)

### How much does pressure increase per meter in water?

$$\\Delta P = \\rho g \\Delta h = (1000)(9.8)(1) = 9800 \\text{ Pa/m} \\approx 10{,}000 \\text{ Pa/m}$$

Every meter of depth adds roughly 0.1 atm of pressure!
      `
    },
    {
      id: 'dp2-pascals-law',
      type: 'text' as const,
      content: `
## Pascal's Law

> **A pressure change applied to an enclosed fluid is transmitted undiminished to every point in the fluid and to the walls of the container.**

### Hydraulic Systems

This principle makes hydraulic lifts possible:

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$

A small force on a small piston creates the same pressure as a large force on a large piston.

**Force multiplication:** $F_2 = F_1 \\times \\frac{A_2}{A_1}$

### Example

A hydraulic lift has pistons with areas $A_1 = 0.01$ m² and $A_2 = 0.5$ m². You push with 100 N on the small piston.

$$F_2 = 100 \\times \\frac{0.5}{0.01} = 100 \\times 50 = 5000 \\text{ N}$$

You amplified the force by 50×! But there's a trade-off: the small piston moves 50× farther than the large piston (conservation of energy: $W = Fd$).
      `
    },
    {
      id: 'dp2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Depth & Pascal's Law
      `,
      exercise: {
        questions: [
          {
            question: 'A swimming pool has a deep end (3 m) and a shallow end (1 m). At the bottom of the deep end vs. shallow end, the pressure is:',
            options: [
              'Same — both are at the bottom',
              'Higher at the deep end — pressure increases with depth',
              'Higher at the shallow end — less water above',
              'Cannot compare without knowing the pool\'s width'
            ],
            correctAnswer: 1,
            explanation: '$P = P_0 + \\rho g h$. Greater depth $h$ → greater pressure. The shape or width of the pool doesn\'t matter — only depth.'
          },
          {
            question: 'Two connected containers of different shapes are filled with the same liquid. The liquid level in both is:',
            options: [
              'Higher in the wider container',
              'Higher in the narrower container',
              'The same height in both',
              'Depends on the liquid\'s density'
            ],
            correctAnswer: 2,
            explanation: 'At any connected point, the pressure must be equal. Since $P = P_0 + \\rho g h$, equal pressure requires equal depth → equal height. This is called "communicating vessels."'
          },
          {
            question: 'In a hydraulic system, if you double the area of the output piston while keeping the input the same, the output force:',
            options: [
              'Stays the same',
              'Doubles',
              'Quadruples',
              'Halves'
            ],
            correctAnswer: 1,
            explanation: '$F_2 = F_1(A_2/A_1)$. Doubling $A_2$ doubles $F_2$. The pressure is the same on both sides — the larger area just means more total force.'
          }
        ]
      }
    },
    {
      id: 'dp2-depth-drill',
      type: 'input-boxes' as const,
      content: `
**Depth-Pressure Drill** (use $g = 10$ m/s², $P_{\\text{atm}} = 10^5$ Pa, $\\rho_{\\text{water}} = 1000$ kg/m³)

1) Gauge pressure at 5 m depth in water (in Pa)
2) Absolute pressure at 5 m depth (in Pa)
3) Depth at which absolute pressure is 2 atm (in m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50000', '150000', '10'],
        hint1: 'Gauge pressure = $\\rho g h = (1000)(10)(5)$.',
        hint2: 'Absolute = $P_{\\text{atm}} + \\rho g h = 10^5 + 50{,}000$.',
        hint3: '$2 \\times 10^5 = 10^5 + (1000)(10)h$. Solve for $h$.',
        explanation: 'Gauge: $\\rho g h = 50{,}000$ Pa. Absolute: $10^5 + 50{,}000 = 150{,}000$ Pa = 1.5 atm. For 2 atm: $2 \\times 10^5 = 10^5 + 10{,}000h \\Rightarrow h = 10$ m.'
      }
    },
    {
      id: 'dp2-hydraulic-drill',
      type: 'input-boxes' as const,
      content: `
**Hydraulic Lift Drill**

A car (mass 1500 kg, weight 15,000 N) sits on a hydraulic lift piston with area $A_2 = 0.25$ m².

1) Pressure under the car piston (in Pa)
2) Area of small input piston needed if you can push with 300 N (in m²)
3) How far must the small piston move to raise the car 0.10 m? (in m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60000', '0.005', '5', '0.0050'],
        hint1: '$P = F/A = 15{,}000 / 0.25$.',
        hint2: '$A_1 = F_1/P = 300/60{,}000$.',
        hint3: 'Work in = work out: $F_1 d_1 = F_2 d_2$. So $d_1 = F_2 d_2 / F_1 = 15{,}000 \\times 0.10 / 300$.',
        explanation: 'P = 60,000 Pa. $A_1 = 300/60{,}000 = 0.005$ m². By conservation of energy: $d_1 = (15{,}000)(0.10)/300 = 5$ m. You push 5 m to lift the car 10 cm!'
      }
    },
    {
      id: 'dp2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A dam holds back a lake. Where on the dam is the water pressure greatest?',
            options: [
              'At the top (nearest the surface)',
              'At the middle',
              'At the bottom (greatest depth)',
              'Pressure is uniform on the dam'
            ],
            correctAnswer: 2,
            explanation: '$P = P_0 + \\rho g h$. The bottom of the dam has the greatest depth $h$, so the greatest pressure. This is why dams are built thicker at the base.'
          },
          {
            question: 'Pascal\'s Law says pressure is transmitted "undiminished." This works because:',
            options: [
              'Fluids are compressible',
              'Fluids cannot exert forces',
              'Fluids are essentially incompressible (for liquids) so the pressure change reaches everywhere instantly',
              'Only in a vacuum'
            ],
            correctAnswer: 2,
            explanation: 'Liquids are nearly incompressible. A pressure increase at one point is transmitted throughout the fluid — the basis of all hydraulic systems.'
          }
        ]
      }
    }
  ]
}
