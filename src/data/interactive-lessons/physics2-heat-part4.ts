export const physics2HeatPart4Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht4-intro',
      type: 'text' as const,
      content: `
# 🌊 Heat Transfer Mechanisms

**Part 4 of 7 — Conduction, Convection & Radiation**

There are three ways heat can transfer from one place to another. Each operates by a different physical mechanism, and understanding them is essential for AP Physics 2.

| Mechanism | Medium Required? | How It Works |
|---|---|---|
| Conduction | Yes (solid best) | Direct molecular collisions |
| Convection | Yes (fluids only) | Bulk fluid motion |
| Radiation | No (works in vacuum) | Electromagnetic waves |
      `
    },
    {
      id: 'ht4-conduction',
      type: 'text' as const,
      content: `
## Conduction — Energy Through Contact

**Conduction** is heat transfer through direct molecular collisions within a material or between materials in contact.

### The Rate Equation

$$\\frac{Q}{t} = \\frac{kA\\Delta T}{L}$$

Where:
- $Q/t$ = rate of heat flow (W = J/s)
- $k$ = thermal conductivity (W/(m·K))
- $A$ = cross-sectional area perpendicular to heat flow $(m^{2})$
- $\\Delta T$ = temperature difference across the material (K or °C)
- $L$ = thickness of the material (m)

### Thermal Conductivity Values

| Material | $k$ (W/(m·K)) |
|---|---|
| Copper | 390 |
| Aluminum | 205 |
| Steel | 50 |
| Glass | 0.84 |
| Wood | 0.15 |
| Styrofoam | 0.033 |
| Air | 0.024 |

### Key Insights
- **Metals** are excellent conductors (high $k$) because free electrons carry energy quickly
- **Insulators** (wood, foam, air) have low $k$ and resist heat flow
- Trapped air is one of the best insulators — this is why puffy jackets and double-pane windows work!
      `
    },
    {
      id: 'ht4-convection',
      type: 'text' as const,
      content: `
## Convection — Bulk Fluid Motion

**Convection** is heat transfer by the physical movement of a fluid (liquid or gas). It cannot occur in solids.

### Natural (Free) Convection
Driven by **buoyancy** — warm fluid rises, cool fluid sinks, creating circulation.

- Warm air rising from a heater
- Ocean currents driven by temperature differences
- Mantle convection inside Earth
- Boiling water in a pot

**The mechanism**: When fluid is heated, it expands and becomes less dense. The less-dense warm fluid rises, while cooler, denser fluid sinks to replace it. This creates a convection current.

### Forced Convection
Driven by an **external force** (fan, pump, wind).

- A fan blowing air over your skin
- A car radiator with a fan
- Forced-air heating systems
- Blood pumped through your body

### Why Convection Is Faster Than Conduction
In convection, energy is physically carried by moving fluid parcels — much faster than waiting for molecule-by-molecule energy transfer. This is why a fan cools you faster than still air, and why stirring soup helps it heat evenly.
      `
    },
    {
      id: 'ht4-radiation',
      type: 'text' as const,
      content: `
## Radiation — Electromagnetic Waves

**Radiation** is heat transfer via electromagnetic waves. It requires **no medium** — this is how the Sun heats the Earth across the vacuum of space.

### Stefan-Boltzmann Law

The power radiated by an object:

$$P = \\sigma \\varepsilon A T^4$$

Where:
- $P$ = radiated power (W)
- $\\sigma = 5.67 \\times 10^{-8}$ $W/(m^{2}\\cdot K^{4})$ — Stefan-Boltzmann constant
- $\\varepsilon$ = emissivity (0 to 1, dimensionless)
- $A$ = surface area $(m^{2})$
- $T$ = absolute temperature (K — must use kelvins!)

### Emissivity
- $\\varepsilon = 1$: **perfect blackbody** (absorbs and emits all radiation)
- $\\varepsilon = 0$: perfect reflector (emits no radiation)
- Dark, rough surfaces: $\\varepsilon$ close to 1
- Shiny, polished surfaces: $\\varepsilon$ close to 0

### Key Features
- Radiation intensity depends on $T^4$ — doubling the temperature increases radiated power by $2^4 = 16$ times!
- All objects above 0 K emit thermal radiation
- Net radiation: $P_{\\text{net}} = \\sigma \\varepsilon A (T_{\\text{object}}^4 - T_{\\text{surroundings}}^4)$
- Hotter objects radiate at shorter wavelengths (Wien's law)
      `
    },
    {
      id: 'ht4-mechanism-quiz',
      type: 'multiple-choice' as const,
      content: `
**Heat Transfer Mechanism Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Which heat transfer mechanism does NOT require a medium?',
            options: [
              'Conduction',
              'Convection',
              'Radiation',
              'All three require a medium'
            ],
            correctAnswer: 2,
            explanation: 'Radiation transfers energy via electromagnetic waves, which can travel through a vacuum. This is how the Sun heats the Earth. Conduction requires contact between particles; convection requires fluid flow.'
          },
          {
            question: 'A metal rod has one end in a flame and the other end in ice water. Heat flows through the rod primarily by:',
            options: [
              'Convection — hot air flows through the rod',
              'Radiation — the flame emits infrared waves',
              'Conduction — energy passes through molecular collisions in the solid',
              'All three equally'
            ],
            correctAnswer: 2,
            explanation: 'Within a solid rod, heat transfers by conduction — vibrating atoms pass energy to neighbors, and free electrons (in metals) carry energy along the rod. Convection cannot occur within a solid.'
          },
          {
            question: 'If the absolute temperature of a radiating object is tripled, the power it radiates increases by a factor of:',
            options: [
              '3',
              '9',
              '27',
              '81'
            ],
            correctAnswer: 3,
            explanation: '$P \\propto T^4$. If $T \\to 3T$: $P \\to (3T)^4 = 81T^4$. The power increases by a factor of $3^4 = 81$.'
          }
        ]
      }
    },
    {
      id: 'ht4-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Identify the Heat Transfer Mechanism** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sunlight warming your face',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Touching a hot stove burner',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Warm air rising from a campfire',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Heat flowing through a copper pipe wall',
            options: ['Conduction', 'Convection', 'Radiation']
          }
        ],
        correctAnswers: ['Radiation', 'Conduction', 'Convection', 'Conduction'],
        hint1: 'Sunlight travels through the vacuum of space — no medium needed.',
        hint2: 'Direct contact with a solid surface transfers energy molecule-to-molecule.',
        hint3: 'Rising air is bulk fluid movement carrying thermal energy.',
        explanation: 'Sunlight = radiation (EM waves through vacuum). Hot stove = conduction (direct contact). Rising air = convection (bulk fluid motion). Copper pipe wall = conduction (through a solid).'
      }
    },
    {
      id: 'ht4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Heat Transfer Mechanisms**
      `,
      exercise: {
        questions: [
          {
            question: 'A thermos bottle reduces heat transfer by all three mechanisms. Which feature reduces conduction?',
            options: [
              'The silvered (reflective) walls',
              'The vacuum between the double walls',
              'The sealed lid',
              'The outer plastic shell'
            ],
            correctAnswer: 1,
            explanation: 'A vacuum eliminates conduction because there are no molecules to collide and pass energy. The silvered walls reduce radiation (reflection). The sealed lid reduces convection (prevents air circulation).'
          },
          {
            question: 'On a cold winter night, you feel colder near a window even without a draft. This is primarily because:',
            options: [
              'Cold passes through the glass by conduction',
              'Your body radiates heat toward the cold glass surface (net radiation loss)',
              'Convection currents push cold air toward you',
              'The glass has a high specific heat'
            ],
            correctAnswer: 1,
            explanation: 'Your body constantly radiates infrared radiation in all directions. The cold window absorbs more of your radiation than it emits back, so there is a net radiative heat loss from your body toward the window. You perceive this as feeling cold on the window side.'
          }
        ]
      }
    }
  ]
}
