export const physics2DensityPressurePart6Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp6-intro',
      type: 'text' as const,
      content: `
# 🧪 Specific Gravity & Density Applications

**Part 6 of 7 — Practical Density Skills**

Before we wrap up density and pressure, let's cover specific gravity, density measurement techniques, and the multi-step problems that pull everything together.
      `
    },
    {
      id: 'dp6-specific-gravity',
      type: 'text' as const,
      content: `
## Specific Gravity

**Specific gravity** (SG) is the ratio of a substance's density to the density of water:

$$\\text{SG} = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water}}} = \\frac{\\rho}{1000\\ \\text{kg/m}^3}$$

Since it's a ratio, **SG has no units**.

| Substance | SG | Meaning |
|:---:|:---:|:---:|
| Gold | 19.3 | 19.3× denser than water |
| Mercury | 13.6 | 13.6× denser than water |
| Iron | 7.8 | 7.8× denser than water |
| Ice | 0.917 | Lighter than water → floats |
| Oil | ~0.8 | Lighter than water → floats |
| Air | 0.00129 | Much lighter than water |

### Quick Trick

In CGS units (g/cm³), the numerical value of density equals the specific gravity! Water has $\\rho = 1.00$ g/cm³, so SG = density in g/cm³.
      `
    },
    {
      id: 'dp6-floating-fraction',
      type: 'text' as const,
      content: `
## Fraction Submerged (Preview of Buoyancy)

When an object floats, the fraction submerged equals the ratio of densities:

$$\\frac{V_{\\text{submerged}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$$

### Examples

| Object | $\\rho$ | Fluid | Fraction Submerged |
|:---:|:---:|:---:|:---:|
| Ice in water | 917 | 1000 | 91.7% (only ~8% above surface!) |
| Wood ($\\rho = 600$) in water | 600 | 1000 | 60% |
| Ice in mercury | 917 | 13,600 | 6.7% (almost entirely above!) |

**Iceberg insight:** "The tip of the iceberg" is only ~8-10% of its total volume. The rest is hidden underwater.
      `
    },
    {
      id: 'dp6-density-quiz',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** — Specific Gravity & Floating
      `,
      exercise: {
        questions: [
          {
            question: 'A substance has SG = 0.75. It is:',
            options: [
              'Denser than water — it sinks',
              'Less dense than water — it floats',
              'Same density as water — neutrally buoyant',
              'Cannot tell without knowing the volume'
            ],
            correctAnswer: 1,
            explanation: 'SG < 1 means less dense than water. It will float with 75% of its volume submerged.'
          },
          {
            question: 'A cube of metal (SG = 3.0) is placed in mercury (SG = 13.6). The cube will:',
            options: [
              'Sink to the bottom',
              'Float with about 22% submerged',
              'Float with about 78% submerged',
              'Hover in the middle'
            ],
            correctAnswer: 1,
            explanation: 'Fraction submerged = $\\rho_{\\text{obj}}/\\rho_{\\text{fluid}} = 3.0/13.6 \\approx 0.22 = 22\\%$. Even metal floats on mercury!'
          }
        ]
      }
    },
    {
      id: 'dp6-synthesis-drill',
      type: 'input-boxes' as const,
      content: `
**Synthesis Drill** (use $g = 10$ m/s², $P_{\\text{atm}} = 10^5$ Pa)

A U-tube has water ($\\rho = 1000$ kg/m³) in the left arm and oil (SG = 0.80) in the right arm. The water surface is 0.20 m above the oil-water interface.

1) Density of the oil (in kg/m³)
2) Height of oil above the interface (in m)
3) Difference in surface levels — which is higher and by how much? (oil surface height − water surface height, in m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['800', '0.25', '0.05'],
        hint1: '$\\rho_{\\text{oil}} = \\text{SG} \\times 1000 = 0.80 \\times 1000$.',
        hint2: 'At the interface, pressures must be equal: $\\rho_w g h_w = \\rho_{\\text{oil}} g h_{\\text{oil}}$. Solve for $h_{\\text{oil}}$.',
        hint3: 'Oil column is 0.25 m, water column is 0.20 m. Oil surface is $0.25 - 0.20 = 0.05$ m higher.',
        explanation: '$\\rho_{\\text{oil}} = 800$ kg/m³. Equal pressure at interface: $(1000)(10)(0.20) = (800)(10)(h_{\\text{oil}})$, so $h_{\\text{oil}} = 0.25$ m. The oil surface is 0.05 m higher than the water surface (because oil is less dense, it needs a taller column for the same pressure).'
      }
    },
    {
      id: 'dp6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An object floats in water with 40% of its volume above the surface. Its density is:',
            options: [
              '400 kg/m³',
              '600 kg/m³',
              '1000 kg/m³',
              '1400 kg/m³'
            ],
            correctAnswer: 1,
            explanation: '40% above → 60% submerged. $\\rho_{\\text{obj}} = 0.60 \\times 1000 = 600$ kg/m³.'
          },
          {
            question: 'A hydrometer (a floating instrument that measures liquid density) floats higher in a denser liquid. Why?',
            options: [
              'The hydrometer becomes lighter in denser liquid',
              'Less volume needs to be submerged to displace enough weight of the denser fluid',
              'Denser liquids push objects out',
              'The hydrometer absorbs liquid'
            ],
            correctAnswer: 1,
            explanation: 'Fraction submerged = $\\rho_{\\text{obj}}/\\rho_{\\text{fluid}}$. As $\\rho_{\\text{fluid}}$ increases, the fraction decreases → the hydrometer rides higher. It displaces less volume but the same weight of fluid.'
          }
        ]
      }
    }
  ]
}
