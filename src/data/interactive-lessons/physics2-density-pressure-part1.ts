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
- $\\rho$ (rho) = density $(kg/m^{3})$
- $m$ = mass (kg)
- $V$ = volume $(m^{3})$

### Key Densities to Know

| Substance | Density $(kg/m^{3})$ |
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

- **Units:** Pascal (Pa) = $N/m^{2}$
- **Type:** Scalar — pressure at a point acts equally in all directions
- **Other units:** 1 atm = 101,325 Pa ≈ $10^5$ Pa

### Atmospheric Pressure

The atmosphere presses on everything at Earth's surface:

$$P_{\\text{atm}} \\approx 1.01 \\times 10^5 \\text{ Pa}$$

That's about 10 N per $cm^{2}$ — roughly the weight of a 1 kg mass on your fingertip!

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
            question: 'A block of metal has mass 5.4 kg and volume 0.002 $m^{3}$. Its density is:',
            options: [
              '0.00037 $kg/m^{3}$',
              '2700 $kg/m^{3}$',
              '0.0108 $kg/m^{3}$',
              '27,000 $kg/m^{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\rho = m/V = 5.4/0.002 = 2700$ $kg/m^{3}$. This matches aluminum! Dividing $V/m$ gives 0.00037, multiplying $m \\times V$ gives 0.0108, and a decimal slip gives 27,000.'
          },
          {
            question: 'An object with density 800 $kg/m^{3}$ is placed in water $(1000 kg/m^{3})$. It will:',
            options: [
              'Sink to the bottom',
              'Float with part above the surface',
              'Hover at any depth (neutrally buoyant)',
              'Float completely submerged, just under the surface'
            ],
            correctAnswer: 1,
            explanation: '$\\rho_{\\text{object}} < \\rho_{\\text{water}}$, so it floats with part above the surface. The fraction submerged equals $\\rho_{\\text{obj}}/\\rho_{\\text{fluid}} = 800/1000 = 80\\%$, so 20% sticks out. Only an object exactly as dense as water hovers at any depth.'
          },
          {
            question: 'A 600 N force is spread over an area of 0.03 $m^{2}$. The pressure is:',
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

1) Volume of the sphere (in $m^{3}$, round to 3 significant figures)

2) Density of the sphere (in $kg/m^{3}$, round to nearest integer)

3) Will it sink or float in water? (type "sink" or "float")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.000524', '2865', 'sink'],
        hint1: '$V = \\frac{4}{3}\\pi (0.05)^3 = \\frac{4}{3}\\pi (1.25 \\times 10^{-4})$.',
        hint2: '$V \\approx 5.24 \\times 10^{-4}\ \\text{m}^3 \\approx 0.000524\ \\text{m}^3$. Then $\\rho = 1.5 / 0.000524$.',
        hint3: '$\\rho \\approx 2865$ $kg/m^{3}$. Since $2865 > 1000$, it sinks.',
        explanation: '$V = (4/3)\\pi(0.05)^3 \\approx 5.24 \\times 10^{-4}$ $m^{3}$. To 3 significant figures: $0.000524$ $m^{3}$. $\\rho = 1.5/(5.236 \\times 10^{-4}) \\approx 2865$ $kg/m^{3}$. Since this is greater than water (1000), it sinks.'
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
              'They lower the force your weight exerts on the snow',
              'They spread the same weight over a larger area',
              'They raise the pressure, packing snow into a firm base',
              'They make the snow denser so it can hold more weight'
            ],
            correctAnswer: 1,
            explanation: 'Your weight (the force) stays the same, but spreading it over a larger area means $P = F/A$ decreases. Less pressure on the snow = less sinking.'
          },
          {
            question: 'A tire pressure gauge reads 0 Pa. This means:',
            options: [
              'There is a perfect vacuum inside the tire',
              'Inside pressure equals atmospheric pressure',
              'The absolute pressure inside the tire is 0 Pa',
              'The air inside exerts no force on the tire walls'
            ],
            correctAnswer: 1,
            explanation: 'A gauge reads pressure above atmospheric. Gauge pressure = 0 means the inside pressure equals atmospheric pressure, so the absolute pressure is still about 101,325 Pa and the air still pushes on the walls (balanced by the atmosphere outside).'
          }
        ]
      }
    }
  ]
}
