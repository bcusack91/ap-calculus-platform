export const physics2ThermoLawsPart5Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl5-intro',
      type: 'text' as const,
      content: `
# 🌌 The Second Law & Entropy

**Part 5 of 7 — Nature's Arrow of Time**

The first law says energy is conserved. It does not say which way energy will move. A hot pan cools in a cold kitchen; the kitchen never spontaneously heats the pan. The Second Law of Thermodynamics explains this one-way behavior using a quantity called **entropy**. AP Physics 2 treats entropy qualitatively: you reason about whether it increases, decreases, or stays the same, rather than calculating it.
      `
    },
    {
      id: 'tl5-second-law',
      type: 'text' as const,
      content: `
## The Second Law of Thermodynamics

> The total entropy of an **isolated system** can never decrease. It stays constant only if every process the system undergoes is reversible.

$$\\Delta S_{\\text{isolated}} \\geq 0$$

### What It Predicts About Heating

Energy transfers by thermal processes **spontaneously** from a higher-temperature system to a lower-temperature system, never the reverse. Moving energy from cold to hot is possible, but only if something else does work (as a refrigerator's compressor does).

### Why, at the Molecular Level

When atoms of two systems collide, energy is most likely to pass from the **higher-energy** atom to the **lower-energy** atom. After many collisions, the most probable state by far is the one in which both systems have the **same temperature**. Energy flowing from cold to hot is not forbidden by any single collision; it is just overwhelmingly improbable for the whole system.
      `
    },
    {
      id: 'tl5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Second Law Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which process would violate the Second Law of Thermodynamics?',
            options: [
              'An ice cube warming up in a glass of warm water',
              'Energy flowing on its own from a cold object to a hot object',
              'A refrigerator moving energy from cold to hot using electricity',
              'A sliding box warming up as friction slows it to a stop'
            ],
            correctAnswer: 1,
            explanation: 'Spontaneous energy transfer from cold to hot would decrease the total entropy of an isolated system. A refrigerator moves energy from cold to hot only because its compressor does work, and friction converting kinetic energy to internal energy increases entropy.'
          },
          {
            question: 'The entropy of a system can decrease when:',
            options: [
              'Energy leaves it and the surroundings gain at least as much',
              'The system is perfectly isolated from its surroundings',
              'The system is left alone long enough to reach equilibrium',
              'The atoms in the system collide with one another'
            ],
            correctAnswer: 0,
            explanation: 'A closed system can lose entropy when energy is transferred out of it, for example a gas cooled by its surroundings, but the surroundings gain at least as much. An isolated system can never lose entropy, and reaching equilibrium maximizes it.'
          }
        ]
      }
    },
    {
      id: 'tl5-entropy',
      type: 'text' as const,
      content: `
## What Entropy Describes

Entropy can be described in two equivalent ways:

1. **The tendency of energy to spread out.** Energy that starts concentrated in one place (a hot spot, a fast-moving object) tends to disperse among more atoms and more locations.
2. **The unavailability of energy to do work.** Once energy has spread out evenly, there is no temperature difference left to drive a useful process, even though the total energy is unchanged.

### Key Properties

| Property | What it means |
|---|---|
| State function | Entropy depends only on the current state of a system, not on how it got there |
| Maximum at equilibrium | An isolated system has its greatest entropy once it reaches thermodynamic equilibrium |
| Isolated systems | Move spontaneously toward equilibrium, so their entropy rises (or, ideally, stays the same) |
| Closed systems | Can lose entropy if energy is transferred out, but the surroundings then gain at least as much |

### Reversible vs. Irreversible

A **reversible** process is an idealization that could run backward with no change to the rest of the universe; the total entropy stays constant. Every real process is **irreversible** and increases the total entropy. Examples:

- A hot block and a cold block reaching a common temperature
- A gas rushing into an empty chamber when a valve opens
- Friction turning kinetic energy into internal energy
- A drop of dye spreading through a glass of water

> AP Physics 2 asks for qualitative reasoning about entropy only. Calculations such as $\\Delta S = Q/T$ are not tested.
      `
    },
    {
      id: 'tl5-entropy-quiz',
      type: 'multiple-choice' as const,
      content: `
**Entropy Reasoning** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A hot block and a cold block touch inside a sealed, insulated box. As they approach a common temperature, the entropy of the two-block system:',
            options: [
              'Increases, reaching its maximum at thermal equilibrium',
              'Decreases, because the temperatures become more uniform',
              'Stays constant, because no energy leaves the insulated box',
              'Increases only until half of the energy has transferred'
            ],
            correctAnswer: 0,
            explanation: 'The box is an isolated system, so its entropy can only increase as energy spreads from the hot block to the cold one, and it peaks at equilibrium. Uniform temperature corresponds to high entropy, not low, and constant total energy does not mean constant entropy.'
          },
          {
            question: 'Entropy is a state function. This means that:',
            options: [
              'It depends only on the present state',
              'Its change depends on the path between states',
              'It can change only when work is done on the system',
              'It is the same for every system at the same temperature'
            ],
            correctAnswer: 0,
            explanation: 'Like internal energy, entropy depends only on the present state (for a gas, values such as $P$, $V$ and $T$), not on the history. Heat and work are the quantities that depend on the path.'
          }
        ]
      }
    },
    {
      id: 'tl5-entropy-drill',
      type: 'dropdown-select' as const,
      content: `
**Entropy Direction Drill** 🔧

For each situation, choose what happens to the entropy named.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A gas in an insulated container expands into an empty second chamber when a valve opens. The entropy of the gas',
            options: ['increases', 'decreases', 'stays the same', 'drops to zero']
          },
          {
            label: 'A cup of hot coffee cools to room temperature. The entropy of the coffee alone',
            options: ['increases', 'decreases', 'stays the same', 'drops to zero']
          },
          {
            label: 'For the same cooling coffee, the entropy of the coffee plus the room',
            options: ['increases', 'decreases', 'stays the same', 'drops to zero']
          },
          {
            label: 'An ideal gas goes through one complete cycle and returns exactly to its starting state. Its entropy change for the cycle',
            options: ['is positive', 'is negative', 'is zero', 'cannot be known']
          }
        ],
        correctAnswers: ['increases', 'decreases', 'increases', 'is zero'],
        hint1: 'In an isolated system, energy spreading into more space increases entropy.',
        hint2: 'A closed system that loses energy to cooler surroundings can lose entropy, but the total for system plus surroundings cannot decrease.',
        hint3: 'Entropy is a state function, so returning to the same state means returning to the same entropy.',
        explanation: 'Free expansion spreads the gas into more space, raising its entropy. The coffee loses energy, so its own entropy drops, but the room gains more, so the total rises. After a full cycle the gas is back in its original state, so its entropy change is zero.'
      }
    }
  ]
}
