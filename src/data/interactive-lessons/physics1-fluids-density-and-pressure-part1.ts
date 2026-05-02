export const physics1FluidsDensityPressurePart1Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp1-intro',
      type: 'text' as const,
      content: `
# 🌊 Density: $\\rho = m/V$

**Part 1 of 7 — Fluids: Density & Pressure**

Density is the most fundamental fluid property. Whether an object floats or sinks, why pressure increases with depth, and how hydraulic systems work all start from density.

**In this lesson you will learn:**
- The definition $\\rho = m/V$
- SI units (kg/m³) and common conversions (g/cm³ ↔ kg/m³)
- Densities of common fluids (water, air, mercury)
- How density connects to mass and volume in problem solving
      `
    },
    {
      id: 'fdp1-definition',
      type: 'text' as const,
      content: `
## Definition

$$\\rho = \\frac{m}{V}$$

- $m$: mass (kg)
- $V$: volume (m³)
- $\\rho$: density (kg/m³, read "rho")

### Reference Densities (memorize for AP)

| Substance | Density (kg/m³) |
|-----------|-----------------|
| Air (sea level) | ~1.2 |
| Wood (avg) | ~600–800 |
| Ice | 917 |
| Fresh water | 1000 |
| Sea water | ~1030 |
| Aluminum | 2700 |
| Iron / Steel | ~7800 |
| Mercury | 13,600 |

### Key Conversion

$$1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$$

So water = 1.00 g/cm³ = 1000 kg/m³.

### Why Density Matters
- Floats vs sinks → compare $\\rho_{obj}$ to $\\rho_{fluid}$
- Hydrostatic pressure $P = \\rho g h$ depends on density
- Buoyant force $F_b = \\rho g V$ depends on **fluid** density
      `
    },
    {
      id: 'fdp1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Density Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Density is best described as:',
            options: [
              'How heavy an object feels',
              'Mass per unit volume',
              'Weight per unit area',
              'Force per unit time'
            ],
            correctAnswer: 1,
            explanation: '$\\rho = m/V$ — mass per unit volume. Heaviness depends on weight ($W = mg$), not density alone.'
          },
          {
            question: 'Two cubes have the same mass. Cube A has half the side length of Cube B. Cube A\'s density compared to Cube B\'s is:',
            options: [
              'Same',
              '2× as dense',
              '4× as dense',
              '8× as dense'
            ],
            correctAnswer: 3,
            explanation: 'Half the side length → volume = $(1/2)^3 = 1/8$. Same mass / smaller volume → $8\\times$ density.'
          },
          {
            question: 'Which density value is closest to that of fresh water?',
            options: [
              '1 kg/m³',
              '100 kg/m³',
              '1000 kg/m³',
              '10,000 kg/m³'
            ],
            correctAnswer: 2,
            explanation: 'Fresh water = 1000 kg/m³ (or 1.00 g/cm³). Memorize this — it shows up in nearly every fluids problem.'
          }
        ]
      }
    },
    {
      id: 'fdp1-calculations',
      type: 'input-boxes' as const,
      content: `
**Density Calculations** 🧮

Use SI units throughout.

1) A 6.0 kg block has volume $2.0\\times10^{-3}$ m³. Density (kg/m³)?

2) A cube of metal with side length 0.10 m has mass 7.8 kg. Density (kg/m³)?

3) A 500 mL container is filled with mercury. Mass (kg)? (Hint: 500 mL = $5.0\\times10^{-4}$ m³, $\\rho_{Hg} = 13{,}600$ kg/m³)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '7800', '6.8'],
        hint1: '$\\rho = m/V$.',
        hint2: 'Volume of cube $= s^3$.',
        hint3: '$m = \\rho V$.',
        explanation: '1) $\\rho = 6.0/2.0\\times10^{-3} = 3000$ kg/m³. 2) $V = (0.10)^3 = 1.0\\times10^{-3}$ m³, $\\rho = 7.8/1.0\\times10^{-3} = 7800$ kg/m³ (steel/iron). 3) $m = 13{,}600 \\times 5.0\\times10^{-4} = 6.8$ kg.'
      }
    },
    {
      id: 'fdp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Density Comparisons** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 1 kg block of feathers and a 1 kg block of iron — which has greater density?',
            options: ['Feathers', 'Iron', 'Same', 'Cannot tell'],
            correctIndex: 1,
            explanation: 'Same mass; iron occupies far less volume → much greater density (~7800 vs ~80 kg/m³).'
          },
          {
            label: 'Ice (917 kg/m³) is placed in fresh water (1000 kg/m³). It will:',
            options: ['Sink immediately', 'Float partially submerged', 'Float fully out of water', 'Dissolve'],
            correctIndex: 1,
            explanation: 'Ice is less dense than water → floats. About 92% submerged (since 917/1000 ≈ 0.92).'
          },
          {
            label: 'Density has SI units of:',
            options: ['kg', 'kg/m', 'kg/m²', 'kg/m³'],
            correctIndex: 3,
            explanation: 'Density is mass per unit volume → kg/m³.'
          },
          {
            label: '1.0 g/cm³ in SI units is:',
            options: ['1.0 kg/m³', '10 kg/m³', '100 kg/m³', '1000 kg/m³'],
            correctIndex: 3,
            explanation: '$1\\text{ g/cm}^3 \\times (10^{-3}\\text{ kg/g}) / (10^{-6}\\text{ m}^3/\\text{cm}^3) = 1000$ kg/m³.'
          }
        ]
      }
    },
    {
      id: 'fdp1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Density** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg object has volume $5.0\\times10^{-3}$ m³. Its density is:',
            options: [
              '$200$ kg/m³',
              '$800$ kg/m³',
              '$1250$ kg/m³',
              '$0.0125$ kg/m³'
            ],
            correctAnswer: 1,
            explanation: '$\\rho = m/V = 4 / 5.0\\times10^{-3} = 800$ kg/m³ (typical for soft wood).'
          },
          {
            question: 'A piece of brass (density 8500 kg/m³) has mass 1.7 kg. Its volume is:',
            options: [
              '$2.0\\times10^{-4}$ m³',
              '$5.0\\times10^{-4}$ m³',
              '$2.0\\times10^{-3}$ m³',
              '$8.5\\times10^{-3}$ m³'
            ],
            correctAnswer: 0,
            explanation: '$V = m/\\rho = 1.7 / 8500 = 2.0\\times10^{-4}$ m³.'
          }
        ]
      }
    }
  ]
}
