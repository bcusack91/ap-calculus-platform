export const physics2ThermoLawsPart5Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl5-intro',
      type: 'text' as const,
      content: `
# 🌌 The Second Law & Entropy

**Part 5 of 7 — Nature's Arrow of Time**

The Second Law of Thermodynamics tells us which processes can happen spontaneously and which cannot. It introduces **entropy**, a measure of disorder that always increases in the universe.
      `
    },
    {
      id: 'tl5-second-law',
      type: 'text' as const,
      content: `
## The Second Law of Thermodynamics

There are several equivalent statements of the Second Law:

### Clausius Statement
> Heat cannot spontaneously flow from a cold object to a hot object without external work being done.

### Kelvin-Planck Statement
> No cyclic process can convert heat entirely into work (there must always be waste heat).

### Entropy Statement
> The total entropy of an isolated system can never decrease; it can only increase or remain the same.

$$\\Delta S_{\\text{universe}} \\geq 0$$

All three statements are equivalent — if one is violated, all are violated.
      `
    },
    {
      id: 'tl5-entropy',
      type: 'text' as const,
      content: `
## Entropy ($S$)

Entropy is a measure of the **number of microscopic arrangements** (microstates) consistent with the macroscopic state. More microstates → higher entropy → more "disorder."

### Entropy Change

For a reversible process at constant temperature:

$$\\Delta S = \\frac{Q}{T}$$

where $T$ is in Kelvin and $Q$ is the heat transferred.

### Key Properties

- Entropy is a **state variable** (path-independent for the system)
- Units: J/K
- Adding heat to a system **increases** its entropy
- Removing heat **decreases** its entropy
- Spontaneous processes always **increase** the total entropy of the universe

### Reversible vs. Irreversible Processes

| Type | $\\Delta S_{\\text{universe}}$ | Example |
|------|--------------------------|---------|
| **Reversible** | $= 0$ | Ideal Carnot cycle |
| **Irreversible** | $> 0$ | Friction, free expansion, heat conduction across $\\Delta T$ |

All real processes are irreversible → entropy of the universe always increases.

### Heat Death of the Universe

If entropy always increases, the universe will eventually reach a state of **maximum entropy** — uniform temperature everywhere, no energy gradients, no ability to do work. This is called the "heat death" of the universe.
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
            question: 'Which process violates the Second Law of Thermodynamics?',
            options: [
              'An ice cube melting in warm water',
              'Heat spontaneously flowing from a cold object to a hot object',
              'A refrigerator moving heat from cold to hot using electricity',
              'A ball rolling downhill and heating up due to friction'
            ],
            correctAnswer: 1,
            explanation: 'Heat flowing spontaneously from cold to hot violates the Clausius statement of the Second Law. A refrigerator can move heat from cold to hot, but it requires work input — that does not violate the law.'
          },
          {
            question: 'The entropy of a system can decrease when:',
            options: [
              'Never — entropy can only increase',
              'Heat is removed from the system (but the surroundings gain more entropy)',
              'The system is perfectly insulated',
              'The system does work on its surroundings'
            ],
            correctAnswer: 1,
            explanation: 'A system\'s entropy can decrease (e.g., freezing water), but the surroundings must gain at least as much entropy. The total entropy of system + surroundings (the universe) never decreases.'
          }
        ]
      }
    },
    {
      id: 'tl5-entropy-quiz',
      type: 'multiple-choice' as const,
      content: `
**Entropy Calculations** 📐
      `,
      exercise: {
        questions: [
          {
            question: '500 J of heat flows from a reservoir at 500 K to a reservoir at 250 K. The total entropy change of the universe is:',
            options: [
              '0 J/K',
              '1 J/K',
              '2 J/K',
              '−1 J/K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S_{\\text{hot}} = -Q/T_H = -500/500 = -1$ J/K. $\\Delta S_{\\text{cold}} = +Q/T_C = 500/250 = +2$ J/K. Total: $\\Delta S = -1 + 2 = +1$ J/K > 0, as expected.'
          },
          {
            question: 'A reversible Carnot engine absorbs 1000 J at 400 K and rejects heat at 200 K. The total entropy change per cycle is:',
            options: [
              '+2.5 J/K',
              '+5.0 J/K',
              '0 J/K',
              '−2.5 J/K'
            ],
            correctAnswer: 2,
            explanation: 'A Carnot engine is reversible, so $\\Delta S_{\\text{universe}} = 0$ per cycle. Check: $Q_C = Q_H(T_C/T_H) = 1000(200/400) = 500$ J. $\\Delta S = -1000/400 + 500/200 = -2.5 + 2.5 = 0$.'
          }
        ]
      }
    },
    {
      id: 'tl5-entropy-drill',
      type: 'input-boxes' as const,
      content: `
**Entropy Change Drill** 🔧

Use $\\Delta S = Q/T$ (with $T$ in Kelvin).

1) 600 J of heat is added to a reservoir at 300 K. What is $\\Delta S$ of the reservoir (in J/K)?

2) 800 J of heat flows from a 400 K reservoir to a 200 K reservoir. What is $\\Delta S_{\\text{universe}}$ (in J/K)?

3) A Carnot engine absorbs 2000 J at 500 K and rejects heat at 250 K. How much heat is rejected $Q_C$ (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '1000'],
        hint1: '$\\Delta S = Q/T = 600/300 = 2$ J/K.',
        hint2: '$\\Delta S = -Q/T_H + Q/T_C = -800/400 + 800/200 = -2 + 4 = 2$ J/K.',
        hint3: 'Carnot is reversible: $\\Delta S = 0$. So $Q_H/T_H = Q_C/T_C$. $Q_C = Q_H(T_C/T_H) = 2000(250/500) = 1000$ J.',
        explanation: 'For entropy changes, heat gained gives positive $\\Delta S$ and heat lost gives negative $\\Delta S$. For Carnot engines, $Q_H/T_H = Q_C/T_C$.'
      }
    }
  ]
}
