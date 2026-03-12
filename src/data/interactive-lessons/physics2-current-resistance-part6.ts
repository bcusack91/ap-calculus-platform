export const physics2CurrentResistancePart6Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `
# 🔋 Real-World Applications

**Part 6 of 7 — Batteries, Bulbs, and Safety**

Real circuits aren't ideal. Batteries have internal resistance, wires have finite conductivity, and too much current can be dangerous. Let's see how the theory connects to the real world.
      `
    },
    {
      id: 'cr6-batteries',
      type: 'text' as const,
      content: `
## Batteries: EMF & Internal Resistance

A real battery isn't a perfect voltage source. It has:

- **EMF ($\\varepsilon$)**: the "ideal" voltage the battery would supply with no current flowing (open-circuit voltage)
- **Internal resistance ($r$)**: resistance inside the battery itself

### Terminal Voltage

When current $I$ flows through the battery:

$$V_{\\text{terminal}} = \\varepsilon - Ir$$

The internal resistance causes a voltage drop **inside** the battery, so the voltage available to the external circuit is less than the EMF.

### Key Relationships

| Condition | Terminal Voltage |
|-----------|-----------------|
| No current ($I = 0$) | $V = \\varepsilon$ (full EMF) |
| Small current | $V \\approx \\varepsilon$ (small drop) |
| Large current | $V \\ll \\varepsilon$ (significant drop) |
| Short circuit ($R_{\\text{ext}} = 0$) | $I = \\varepsilon / r$ (maximum current, dangerous!) |

### Current in the Full Circuit

With external resistance $R$:

$$I = \\frac{\\varepsilon}{R + r}$$

The total resistance is always $R + r$, and the EMF drives the current through both.

### Power Budget

$$P_{\\text{total}} = \\varepsilon I = I^2R + I^2r$$

- $I^2R$: useful power delivered to external circuit
- $I^2r$: wasted as heat inside the battery
      `
    },
    {
      id: 'cr6-safety',
      type: 'text' as const,
      content: `
## Circuit Safety Devices

### Fuses

A fuse contains a thin wire that **melts** when current exceeds its rating, breaking the circuit.

- **One-time use** — must be replaced after blowing
- Rated by current (e.g., 15 A, 20 A)
- The thin wire has high resistance → heats up quickly at high current

### Circuit Breakers

A circuit breaker uses a bimetallic strip or electromagnet to **trip** (open) the circuit when current is too high.

- **Resettable** — just flip the switch
- Standard in modern homes
- Also rated by current

### Ground Fault Circuit Interrupter (GFCI)

A GFCI detects when current flowing out differs from current flowing back (meaning some current is leaking through a person or water).

- Trips in milliseconds
- Required near water: bathrooms, kitchens, outdoors
- Can detect leakage as small as 5 mA

### Why These Matter

| Current through body | Effect |
|---------------------|--------|
| 1 mA | Barely perceptible |
| 10 mA | Painful shock |
| 100 mA | Can be fatal (ventricular fibrillation) |
| 1 A | Severe burns, likely fatal |

Safety devices prevent dangerous currents from flowing through the circuit — and through you.
      `
    },
    {
      id: 'cr6-battery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Battery & EMF Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery has EMF 9.0 V and internal resistance 0.50 $\\Omega$. When connected to a 4.0 $\\Omega$ resistor, the terminal voltage is:',
            options: [
              '9.0 V',
              '8.0 V',
              '7.0 V',
              '1.0 V'
            ],
            correctAnswer: 1,
            explanation: '$I = \\varepsilon/(R + r) = 9.0/(4.0 + 0.50) = 9.0/4.5 = 2.0$ A. $V = \\varepsilon - Ir = 9.0 - (2.0)(0.50) = 9.0 - 1.0 = 8.0$ V.'
          },
          {
            question: 'As a battery ages, its internal resistance typically:',
            options: [
              'Decreases',
              'Stays the same',
              'Increases',
              'Becomes negative'
            ],
            correctAnswer: 2,
            explanation: 'As a battery ages, chemical degradation increases internal resistance. This is why old batteries can still show nearly full EMF on a voltmeter (no current flowing) but can\'t deliver much current.'
          },
          {
            question: 'A battery with EMF 12 V and internal resistance 1.0 $\\Omega$ is short-circuited. The short-circuit current is:',
            options: [
              '0 A',
              '1.0 A',
              '12 A',
              'Infinite'
            ],
            correctAnswer: 2,
            explanation: 'Short circuit: $R_{\\text{ext}} = 0$. $I = \\varepsilon / r = 12/1.0 = 12$ A. This large current would rapidly overheat the battery — extremely dangerous!'
          }
        ]
      }
    },
    {
      id: 'cr6-safety-quiz',
      type: 'multiple-choice' as const,
      content: `
**Safety Concepts Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A GFCI outlet protects you by:',
            options: [
              'Limiting the voltage to a safe level',
              'Detecting when outgoing and returning current differ (leakage)',
              'Increasing the resistance of the circuit',
              'Providing a backup battery'
            ],
            correctAnswer: 1,
            explanation: 'A GFCI compares the current leaving the hot wire to the current returning on the neutral wire. If they differ (meaning current is leaking through an unintended path, like a person), it trips in milliseconds.'
          },
          {
            question: 'The difference between a fuse and a circuit breaker is:',
            options: [
              'Fuses work faster than circuit breakers',
              'Circuit breakers can be reset; fuses must be replaced',
              'Fuses work with AC; circuit breakers work with DC',
              'There is no difference'
            ],
            correctAnswer: 1,
            explanation: 'Both interrupt the circuit when current is too high. The key difference: a fuse melts and must be replaced, while a circuit breaker can be reset by flipping a switch.'
          }
        ]
      }
    },
    {
      id: 'cr6-application-drill',
      type: 'dropdown-select' as const,
      content: `
**Real-World Application Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A flashlight gets dimmer as batteries age because',
            options: ['EMF decreases only', 'Internal resistance increases', 'External resistance increases', 'The bulb wears out']
          },
          {
            label: 'Near a swimming pool, the required safety device is',
            options: ['A standard fuse', 'A regular circuit breaker', 'A GFCI outlet', 'A surge protector']
          },
          {
            label: 'To maximize power delivered to an external load, internal resistance should be',
            options: ['Equal to load resistance', 'As large as possible', 'As small as possible', 'Exactly zero']
          },
          {
            label: 'A car battery (12 V, low internal resistance) can deliver very high current, making short circuits',
            options: ['Harmless', 'Slightly warm', 'Extremely dangerous', 'Impossible']
          }
        ],
        correctAnswers: ['Internal resistance increases', 'A GFCI outlet', 'As small as possible', 'Extremely dangerous'],
        hint1: 'Aging batteries develop higher internal resistance, dropping the terminal voltage under load.',
        hint2: 'GFCIs are required anywhere near water to protect against electric shock.',
        hint3: 'Less internal resistance means less power wasted inside the battery.',
        hint4: 'Low internal resistance means a short circuit produces enormous current ($I = \\varepsilon/r$), causing rapid heating.',
        explanation: 'Internal resistance increases with age; GFCIs protect near water; minimal internal resistance maximizes useful power; low $r$ makes short circuits extremely dangerous.'
      }
    },
    {
      id: 'cr6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery with $\\varepsilon = 6.0$ V and $r = 0.20\\;\\Omega$ is connected to a $2.8\\;\\Omega$ resistor. What fraction of the battery\'s total power is delivered to the external resistor?',
            options: [
              '50%',
              '80%',
              '93%',
              '100%'
            ],
            correctAnswer: 2,
            explanation: 'Fraction = $R/(R + r) = 2.8/(2.8 + 0.2) = 2.8/3.0 = 0.933 = 93\\%$. The remaining 7% is wasted as heat inside the battery.'
          }
        ]
      }
    }
  ]
}
