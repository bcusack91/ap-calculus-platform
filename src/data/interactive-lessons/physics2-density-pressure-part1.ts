export const physics2DensityPressurePart1Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp1-intro',
      type: 'text' as const,
      content: `
# 💧 Density & Pressure — Foundations

**Part 1 of 7 — The Language of Fluids**

Fluid mechanics is one of the most intuitive and testable topics on the AP Physics 2 exam. You already have everyday experience with fluids — now we'll make it precise.

A **fluid** is anything that flows: liquids *and* gases. Both obey the same fundamental laws.
      `
    },
    {
      id: 'dp1-density',
      type: 'text' as const,
      content: `
## Density

$$\\rho = \\frac{m}{V}$$

Where:
- $\\rho$ (rho) = density (kg/m³)
- $m$ = mass (kg)
- $V$ = volume (m³)

### Key Densities to Know

| Substance | Density (kg/m³) |
|:---:|:---:|
| Water | 1000 |
| Ice | 917 |
| Air (sea level) | 1.29 |
| Mercury | 13,600 |
| Aluminum | 2700 |
| Iron/Steel | 7800 |
| Gold | 19,300 |

### Why Density Matters

Density determines whether an object **sinks or floats**:
- Object denser than fluid → **sinks**
- Object less dense than fluid → **floats**
- Object same density as fluid → **neutrally buoyant** (hovers)

Ice floats because $\\rho_{\\text{ice}} = 917 < 1000 = \\rho_{\\text{water}}$.
      `
    },
    {
      id: 'dp1-pressure-intro',
      type: 'text' as const,
      content: `
## What Is Pressure?

$$P = \\frac{F}{A}$$

**Pressure** is the force exerted per unit area, perpendicular to a surface.

- **Units:** Pascal (Pa) = N/m²
- **Type:** Scalar — pressure at a point acts equally in all directions
- **Other units:** 1 atm = 101,325 Pa ≈ $10^5$ Pa

### Atmospheric Pressure

The atmosphere presses on everything at Earth's surface:

$$P_{\\text{atm}} \\approx 1.01 \\times 10^5 \\text{ Pa}$$

That's about 10 N per cm² — roughly the weight of a 1 kg mass on your fingertip!

### Gauge vs. Absolute Pressure

- **Absolute pressure:** The total pressure at a point (includes atmospheric)
- **Gauge pressure:** The pressure *above* atmospheric: $P_{\\text{gauge}} = P_{\\text{abs}} - P_{\\text{atm}}$
- A tire gauge reading of "32 psi" is gauge pressure. The actual (absolute) pressure inside is $32 + 14.7 \\approx 47$ psi.
      `
    },
    {
      id: 'dp1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Density & Pressure Basics
      `,
      exercise: {
        questions: [
          {
            question: 'A block of metal has mass 5.4 kg and volume 0.002 m³. Its density is:',
            options: [
              '270 kg/m³',
              '2700 kg/m³',
              '0.0108 kg/m³',
              '27,000 kg/m³'
            ],
            correctAnswer: 1,
            explanation: '$\\rho = m/V = 5.4/0.002 = 2700$ kg/m³. This matches aluminum!'
          },
          {
            question: 'An object with density 800 kg/m³ is placed in water (1000 kg/m³). It will:',
            options: [
              'Sink to the bottom',
              'Float with part above the surface',
              'Hover at any depth (neutrally buoyant)',
              'Dissolve'
            ],
            correctAnswer: 1,
            explanation: '$\\rho_{\\text{object}} < \\rho_{\\text{water}}$, so it floats. The fraction submerged equals $\\rho_{\\text{obj}}/\\rho_{\\text{fluid}} = 800/1000 = 80\\%$.'
          },
          {
            question: 'A 600 N force is spread over an area of 0.03 m². The pressure is:',
            options: [
              '18 Pa',
              '200 Pa',
              '20,000 Pa',
              '18,000 Pa'
            ],
            correctAnswer: 2,
            explanation: '$P = F/A = 600/0.03 = 20{,}000$ Pa = 20 kPa.'
          }
        ]
      }
    },
    {
      id: 'dp1-density-drill',
      type: 'input-boxes' as const,
      content: `
**Density Calculation Drill**

A solid sphere has radius $r = 0.05$ m and mass $m = 1.5$ kg. (Volume of sphere: $V = \\frac{4}{3}\\pi r^3$)

1) Volume of the sphere (in m³, round to 3 significant figures)

2) Density of the sphere (in kg/m³, round to nearest integer)

3) Will it sink or float in water? (type "sink" or "float")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.00052', '2885', 'sink'],
        hint1: '$V = \\frac{4}{3}\\pi (0.05)^3 = \\frac{4}{3}\\pi (1.25 \\times 10^{-4})$.',
        hint2: '$V \\approx 5.24 \\times 10^{-4}\ \\text{m}^3 \\approx 0.00052\ \\text{m}^3$. Then $\\rho = 1.5 / 0.00052$.',
        hint3: '$\\rho \\approx 2885$ kg/m³. Since $2885 > 1000$, it sinks.',
        explanation: '$V = (4/3)\\pi(0.05)^3 \\approx 5.24 \\times 10^{-4}$ m³. Rounded: $0.00052$ m³. $\\rho = 1.5/0.00052 \\approx 2885$ kg/m³. Since this is greater than water (1000), it sinks. Accept values in range 2860-2890.'
      }
    },
    {
      id: 'dp1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Why do snowshoes prevent you from sinking into snow?',
            options: [
              'They make you lighter',
              'They increase the area, decreasing the pressure on the snow',
              'They decrease the area, increasing the pressure',
              'They change the density of snow'
            ],
            correctAnswer: 1,
            explanation: 'Your weight (force) stays the same, but the larger area means $P = F/A$ decreases. Less pressure = less sinking.'
          },
          {
            question: 'A tire pressure gauge reads 0 Pa. This means:',
            options: [
              'There is a vacuum inside the tire',
              'The tire is at atmospheric pressure (no excess)',
              'The tire has no air at all',
              'The gauge is broken'
            ],
            correctAnswer: 1,
            explanation: 'Gauge pressure = 0 means the inside pressure equals atmospheric pressure. The absolute pressure is still ~101,325 Pa.'
          }
        ]
      }
    }
  ]
}
