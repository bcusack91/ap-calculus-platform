export const physics2PhaseChangesPart1Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc1-intro',
      type: 'text' as const,
      content: `
# 🧊 States of Matter & Phase Transitions

**Part 1 of 7 — The Big Picture**

All matter exists in one of several **phases** (states): solid, liquid, or gas. In AP Physics 2, understanding how matter transitions between these phases — and the energy involved — is essential for thermodynamics problems.

### The Three Common Phases

| Phase | Molecular Behavior | Shape | Volume |
|-------|-------------------|-------|--------|
| **Solid** | Vibrate in fixed positions | Definite | Definite |
| **Liquid** | Slide past each other | Indefinite | Definite |
| **Gas** | Move freely, far apart | Indefinite | Indefinite |

The key difference is the **strength of intermolecular bonds** relative to the kinetic energy of the molecules.
      `
    },
    {
      id: 'pc1-transitions',
      type: 'text' as const,
      content: `
## The Six Phase Transitions

Every phase change has a name — and a reverse process:

| Transition | Direction | Example |
|-----------|-----------|---------|
| **Melting** (fusion) | Solid → Liquid | Ice → Water |
| **Freezing** | Liquid → Solid | Water → Ice |
| **Vaporization** | Liquid → Gas | Water → Steam |
| **Condensation** | Gas → Liquid | Steam → Water droplets |
| **Sublimation** | Solid → Gas (skipping liquid) | Dry ice → CO₂ gas |
| **Deposition** | Gas → Solid (skipping liquid) | Frost forming on windows |

### Energy Rules

- **Melting, vaporization, sublimation** → require energy input (endothermic)
- **Freezing, condensation, deposition** → release energy (exothermic)

During any phase change, the **temperature stays constant** even though energy is being added or removed. All the energy goes into breaking or forming intermolecular bonds rather than changing kinetic energy.
      `
    },
    {
      id: 'pc1-transitions-quiz',
      type: 'multiple-choice' as const,
      content: `
**Phase Transitions Check** 🔄
      `,
      exercise: {
        questions: [
          {
            question: 'Which phase transition goes directly from solid to gas without passing through the liquid phase?',
            options: [
              'Vaporization',
              'Deposition',
              'Sublimation',
              'Condensation'
            ],
            correctAnswer: 2,
            explanation: 'Sublimation is the direct transition from solid to gas. Dry ice (solid CO₂) is a classic example — it sublimates at atmospheric pressure rather than melting.'
          },
          {
            question: 'During a phase change, which quantity remains constant?',
            options: [
              'Internal energy',
              'Temperature',
              'Pressure (always)',
              'Volume'
            ],
            correctAnswer: 1,
            explanation: 'Temperature remains constant during a phase change. The energy being added (or removed) goes entirely into breaking (or forming) intermolecular bonds, not into changing the kinetic energy of the molecules.'
          }
        ]
      }
    },
    {
      id: 'pc1-phase-diagram',
      type: 'text' as const,
      content: `
## Phase Diagrams

A **phase diagram** maps out which phase a substance is in as a function of **temperature** (x-axis) and **pressure** (y-axis).

### Key Features

- **Phase regions**: Large areas labeled solid, liquid, and gas where the substance exists in that phase
- **Phase boundaries**: Lines separating regions — along these lines, two phases coexist in equilibrium
- **Triple point**: The unique temperature and pressure where **all three phases coexist** simultaneously
- **Critical point**: The endpoint of the liquid-gas boundary — above this temperature and pressure, there is no distinction between liquid and gas (called a **supercritical fluid**)

### Water's Phase Diagram

For water at standard atmospheric pressure ($1.01 \\times 10^5$ Pa):
- **Melting point**: 0°C (273 K)
- **Boiling point**: 100°C (373 K)
- **Triple point**: 0.01°C at 611 Pa
- **Critical point**: 374°C at $2.21 \\times 10^7$ Pa

Water is unusual because its solid-liquid boundary line slopes **to the left** (negative slope), meaning increasing pressure lowers the melting point. This is why ice skating works — pressure under the blade can melt ice.
      `
    },
    {
      id: 'pc1-diagram-quiz',
      type: 'multiple-choice' as const,
      content: `
**Phase Diagram Concepts** 📊
      `,
      exercise: {
        questions: [
          {
            question: 'At the triple point of a substance:',
            options: [
              'The substance can only exist as a liquid',
              'All three phases coexist in equilibrium',
              'The substance becomes a supercritical fluid',
              'The substance has zero internal energy'
            ],
            correctAnswer: 1,
            explanation: 'The triple point is the unique combination of temperature and pressure where solid, liquid, and gas phases all coexist in thermodynamic equilibrium.'
          },
          {
            question: 'Above the critical point, a substance:',
            options: [
              'Is always a solid',
              'Cannot exist',
              'Becomes a supercritical fluid with no liquid-gas distinction',
              'Has zero vapor pressure'
            ],
            correctAnswer: 2,
            explanation: 'Above the critical temperature and pressure, there is no phase boundary between liquid and gas. The substance exists as a supercritical fluid with properties of both phases.'
          }
        ]
      }
    },
    {
      id: 'pc1-concept-drill',
      type: 'dropdown-select' as const,
      content: `
**Phase Transition Identification** 🎯

Identify the phase transition in each scenario:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Wet clothes drying on a clothesline',
            options: ['Melting', 'Vaporization', 'Sublimation', 'Condensation']
          },
          {
            label: 'Frost forming on a cold window overnight',
            options: ['Freezing', 'Deposition', 'Condensation', 'Sublimation']
          },
          {
            label: 'A snowball shrinking on a cold, dry winter day (below 0°C) without melting',
            options: ['Vaporization', 'Melting', 'Sublimation', 'Deposition']
          },
          {
            label: 'Water droplets forming on the outside of a cold glass',
            options: ['Condensation', 'Deposition', 'Freezing', 'Vaporization']
          }
        ],
        correctAnswers: ['Vaporization', 'Deposition', 'Sublimation', 'Condensation'],
        hint1: 'Clothes drying: liquid water becomes water vapor (liquid → gas).',
        hint2: 'Frost: water vapor in air goes directly to ice crystals (gas → solid).',
        hint3: 'Snow shrinking below 0°C without melting: solid → gas directly. Cold glass: gas → liquid.',
        explanation: 'Drying = vaporization (liquid → gas). Frost = deposition (gas → solid). Snow shrinking in cold = sublimation (solid → gas). Water droplets on glass = condensation (gas → liquid).'
      }
    }
  ]
}
