export const physics1FluidsDensityPressurePart3Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp3-intro',
      type: 'text' as const,
      content: `
# 🌊 Hydrostatic Pressure: $P = \\rho g h$

**Part 3 of 7 — Fluids: Density & Pressure**

When you dive into a pool, you feel pressure on your ears within a few feet. The pressure of a static fluid increases linearly with depth. This is the workhorse equation of AP fluids.

**In this lesson you will learn:**
- Why pressure increases with depth
- The equation $P = \\rho g h$ (gauge form) and $P_{abs} = P_0 + \\rho g h$
- That pressure depends only on **vertical depth**, not container shape
- How to calculate pressure differences between two depths
      `
    },
    {
      id: 'fdp3-derivation',
      type: 'text' as const,
      content: `
## Why Pressure Increases with Depth

Imagine a horizontal slab of fluid at depth $h$. The fluid above presses down with weight:

$$W = mg = \\rho V g = \\rho (Ah) g$$

That weight produces pressure:

$$P_{from\\ fluid} = \\frac{W}{A} = \\rho g h$$

### The Equations

**Gauge pressure** (pressure due to fluid alone):
$$P_{gauge} = \\rho g h$$

**Absolute pressure** (gauge + atmosphere on top):
$$P_{abs} = P_0 + \\rho g h$$

Where:
- $\\rho$: fluid density (kg/m³)
- $g = 9.8$ m/s² (often $g = 10$ on AP estimates)
- $h$: depth **below the free surface** (m)
- $P_0$: pressure at the surface (often $P_{atm} = 1.013\\times10^{5}$ Pa)

### The Surprising Truth: Shape Doesn't Matter

Pressure at depth $h$ is the same whether you're at the bottom of a thin tube or a vast lake — only $\\rho$, $g$, and $h$ matter.

### Quick Mental Math
- 10 m of water adds about 1 atm (~$10^{5}$ Pa).
- Every 10 m deeper in seawater ≈ 1 additional atm.
      `
    },
    {
      id: 'fdp3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Hydrostatic Pressure Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a static fluid, pressure depends on:',
            options: [
              'Container shape',
              'Total fluid mass',
              'Depth below the surface (and density)',
              'Surface area at the bottom'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h$ depends only on density and depth — not shape, not volume, not bottom area.'
          },
          {
            question: 'Two open containers (one narrow, one wide) hold water filled to the same height. Pressure at the bottom of the narrow one is:',
            options: [
              'Less than the wide one',
              'Equal to the wide one',
              'Greater than the wide one',
              'Cannot tell without volume'
            ],
            correctAnswer: 1,
            explanation: 'Same fluid, same depth → same pressure. The "hydrostatic paradox."'
          },
          {
            question: 'The gauge pressure 5 m below the surface of fresh water (g = 10) is approximately:',
            options: [
              '500 Pa',
              '5000 Pa',
              '50,000 Pa',
              '500,000 Pa'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h = 1000(10)(5) = 50{,}000$ Pa = 50 kPa.'
          }
        ]
      }
    },
    {
      id: 'fdp3-calculations',
      type: 'input-boxes' as const,
      content: `
**Hydrostatic Calculations** 🧮 (use $g = 9.8$ m/s², $\\rho_{water} = 1000$ kg/m³, $\\rho_{Hg} = 13{,}600$ kg/m³)

1) Gauge pressure at the bottom of a 3.0 m deep fresh water pool (Pa)?

2) Absolute pressure at 10 m depth in fresh water with $P_{atm} = 1.0\\times10^{5}$ Pa (Pa)?

3) Gauge pressure at the bottom of a 0.76 m mercury column (Pa)? (This is the original definition of 1 atm.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['29400', '198000', '101293'],
        hint1: '$P = \\rho g h$.',
        hint2: '$P_{abs} = P_0 + \\rho g h$.',
        hint3: 'Mercury column: $P = \\rho_{Hg}(9.8)(0.76)$.',
        explanation: '1) $P = 1000(9.8)(3.0) = 29{,}400$ Pa. 2) $P_{abs} = 1.0\\times10^{5} + 1000(9.8)(10) = 198{,}000$ Pa ≈ 2 atm. 3) $P = 13600(9.8)(0.76) ≈ 101{,}293$ Pa ≈ 1 atm — original definition of mmHg!'
      }
    },
    {
      id: 'fdp3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Hydrostatic Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two points in seawater are 4 m and 10 m deep. The pressure DIFFERENCE between them is approximately (g = 10, ρ = 1030):',
            options: ['~6 kPa', '~62 kPa', '~103 kPa', '~620 kPa'],
            correctIndex: 1,
            explanation: '$\\Delta P = \\rho g \\Delta h = 1030(10)(6) = 61{,}800$ Pa ≈ 62 kPa.'
          },
          {
            label: 'Doubling the depth in a fluid doubles the:',
            options: ['Density', 'Gauge pressure', 'Absolute pressure', 'Atmospheric pressure'],
            correctIndex: 1,
            explanation: '$P_{gauge} = \\rho g h$ is linear in $h$. Absolute = $P_0 + \\rho g h$ doesn\'t double because $P_0$ is fixed.'
          },
          {
            label: 'A fish at depth $h$ in salt water vs the same depth in fresh water experiences:',
            options: ['Less pressure', 'Same pressure', 'More pressure', 'Zero pressure'],
            correctIndex: 2,
            explanation: 'Salt water is denser → larger $\\rho g h$ → greater pressure.'
          },
          {
            label: 'Pressure at the bottom of an open container depends on:',
            options: ['Container width', 'Volume of fluid', 'Depth and fluid density', 'Mass of container'],
            correctIndex: 2,
            explanation: '$P = P_0 + \\rho g h$ depends only on $\\rho$ and $h$ (and surface pressure).'
          }
        ]
      }
    },
    {
      id: 'fdp3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Hydrostatic Pressure** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the gauge pressure at a depth of 25 m in fresh water? (g = 10, ρ = 1000)',
            options: [
              '2.5 kPa',
              '25 kPa',
              '250 kPa',
              '2500 kPa'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h = 1000(10)(25) = 250{,}000$ Pa = 250 kPa.'
          },
          {
            question: 'A swimming pool, lake, and ocean inlet all have water 4 m deep at one location. The gauge pressure at the bottom of the:',
            options: [
              'Lake is greatest because it has more water',
              'Ocean is greatest only because of saltwater density',
              'All three are equal because depth and density determine pressure',
              'Pool is greatest because pressure is concentrated'
            ],
            correctAnswer: 1,
            explanation: 'Pool and lake (fresh water) have equal pressure. The salty ocean has slightly higher density → slightly higher $P$. Volume/area do not matter.'
          }
        ]
      }
    }
  ]
}
