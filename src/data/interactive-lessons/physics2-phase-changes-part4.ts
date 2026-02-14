export const physics2PhaseChangesPart4Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc4-intro',
      type: 'text' as const,
      content: `
# 📐 Phase Diagrams, Critical Point & Vapor Pressure

**Part 4 of 7 — Reading Phase Diagrams Like a Pro**

Phase diagrams encode a wealth of information about how substances behave under different conditions of temperature and pressure. For AP Physics 2, you need to interpret these diagrams and understand the special points on them.
      `
    },
    {
      id: 'pc4-reading-diagrams',
      type: 'text' as const,
      content: `
## Reading a Phase Diagram

A phase diagram has:
- **x-axis**: Temperature ($T$)
- **y-axis**: Pressure ($P$)

### The Three Boundary Lines

1. **Solid-Liquid line** (fusion curve): Separates solid and liquid regions. Crossing this line = melting or freezing.
2. **Liquid-Gas line** (vaporization curve): Separates liquid and gas regions. Crossing this line = boiling or condensation.
3. **Solid-Gas line** (sublimation curve): Separates solid and gas regions. Crossing this line = sublimation or deposition.

### How to Trace a Process

To find what happens when you change conditions:
- **Heating at constant pressure**: Move right along a horizontal line
- **Compressing at constant temperature**: Move up along a vertical line
- Each time you cross a boundary line, a phase change occurs

### Example: Heating at 1 atm
Starting from a low temperature and moving right at $P = 1$ atm:
$$\\text{Solid} \\xrightarrow{\\text{melting}} \\text{Liquid} \\xrightarrow{\\text{boiling}} \\text{Gas}$$
      `
    },
    {
      id: 'pc4-special-points',
      type: 'text' as const,
      content: `
## Special Points on the Phase Diagram

### Triple Point
The **triple point** is where all three boundary lines meet — the unique $(T, P)$ where solid, liquid, and gas coexist in equilibrium.

- For water: $T_{\\text{tp}} = 0.01$°C, $P_{\\text{tp}} = 611$ Pa (well below atmospheric pressure)
- For CO₂: $T_{\\text{tp}} = -56.6$°C, $P_{\\text{tp}} = 5.18$ atm (above atmospheric pressure — this is why CO₂ sublimates at 1 atm!)

### Critical Point
The **critical point** is the endpoint of the liquid-gas boundary line. Above this temperature and pressure:
- There is **no distinction** between liquid and gas
- The substance is a **supercritical fluid**
- No amount of pressure can liquify the gas above the critical temperature

For water: $T_c = 374$°C, $P_c = 218$ atm

### Vapor Pressure
The **vapor pressure** of a liquid is the pressure exerted by its vapor when in equilibrium with the liquid phase. It:
- **Increases with temperature** (molecules escape faster at higher $T$)
- Equals atmospheric pressure at the **boiling point**
- Is described by the **Clausius-Clapeyron equation** (beyond AP scope, but the concept is tested)

A liquid boils when its vapor pressure equals the external pressure above it.
      `
    },
    {
      id: 'pc4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Phase Diagram Concepts** 📊
      `,
      exercise: {
        questions: [
          {
            question: 'CO₂ has a triple point pressure of 5.18 atm. At normal atmospheric pressure (1 atm), what happens when solid CO₂ is heated?',
            options: [
              'It melts into liquid CO₂, then boils',
              'It sublimates directly from solid to gas',
              'It stays solid indefinitely',
              'It becomes a supercritical fluid'
            ],
            correctAnswer: 1,
            explanation: 'Since 1 atm is below the triple-point pressure (5.18 atm), the horizontal line at $P = 1$ atm passes below the triple point. There is no liquid region at this pressure — the solid goes directly to gas (sublimation). This is why dry ice sublimates.'
          },
          {
            question: 'A liquid boils when:',
            options: [
              'Its temperature reaches a universal constant',
              'Its vapor pressure equals the external (atmospheric) pressure',
              'All intermolecular bonds are broken',
              'Its temperature exceeds the critical temperature'
            ],
            correctAnswer: 1,
            explanation: 'Boiling occurs when the vapor pressure of the liquid equals the external pressure. This is why water boils at a lower temperature at high altitude (lower atmospheric pressure) and at a higher temperature in a pressure cooker (higher external pressure).'
          }
        ]
      }
    },
    {
      id: 'pc4-vapor-pressure-quiz',
      type: 'multiple-choice' as const,
      content: `
**Vapor Pressure & Boiling** 🌡️
      `,
      exercise: {
        questions: [
          {
            question: 'At the top of Mount Everest, atmospheric pressure is about 0.33 atm. Water boils there at approximately:',
            options: [
              '100°C (boiling point is always the same)',
              'About 70°C (lower pressure → lower boiling point)',
              'About 130°C (lower pressure → higher boiling point)',
              '0°C (it freezes instead)'
            ],
            correctAnswer: 1,
            explanation: 'Lower external pressure means the vapor pressure equals it at a lower temperature. Water boils at about 70°C on Everest, making it difficult to cook food properly — the water is "boiling" but not very hot!'
          },
          {
            question: 'Above the critical temperature, which statement is true?',
            options: [
              'The substance is always a solid',
              'Increasing pressure will cause condensation into a liquid',
              'No distinct phase boundary exists between liquid and gas',
              'The substance has zero vapor pressure'
            ],
            correctAnswer: 2,
            explanation: 'Above the critical temperature, no amount of pressure can create a distinct liquid phase. The substance exists as a supercritical fluid — a state with properties intermediate between liquid and gas, with no phase boundary.'
          }
        ]
      }
    },
    {
      id: 'pc4-diagram-drill',
      type: 'dropdown-select' as const,
      content: `
**Phase Diagram Reading Drill** 🎯

For each process on a typical phase diagram:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Moving right (increasing T) along a horizontal line above the triple point pressure crosses:',
            options: ['No boundary lines', 'One boundary (sublimation only)', 'Two boundaries (melting then boiling)', 'Three boundaries']
          },
          {
            label: 'Moving right along a horizontal line BELOW the triple point pressure crosses:',
            options: ['Two boundaries (melting then boiling)', 'One boundary (sublimation line)', 'No boundaries', 'The critical point']
          },
          {
            label: 'Increasing pressure at constant temperature (above critical T) crosses:',
            options: ['The liquid-gas boundary', 'The solid-liquid boundary', 'No phase boundary', 'The sublimation curve']
          }
        ],
        correctAnswers: ['Two boundaries (melting then boiling)', 'One boundary (sublimation line)', 'No phase boundary'],
        hint1: 'Above the triple point, you pass through solid → liquid → gas as you heat.',
        hint2: 'Below the triple point pressure, the liquid region does not exist.',
        hint3: 'Above the critical temperature, there is no liquid-gas distinction.',
        explanation: 'Above the triple point: you cross two boundaries (solid→liquid→gas). Below: only sublimation (solid→gas). Above critical temperature: no phase boundary exists to cross.'
      }
    }
  ]
}
