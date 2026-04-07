export const chemEntropySecondLawV2Part3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en3v2-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Second Law: Nature's Direction

**Part 3 of 7 — Why Processes Have a Preferred Direction**

Drop a ball — it falls. Mix hot and cold water — they equalize. A broken egg doesn't reassemble. All of these are examples of the **Second Law of Thermodynamics** in action.
      `
    },
    {
      id: 'en3v2-statement',
      type: 'text' as const,
      content: `
## The Second Law — Three Formulations

| Formulation | Statement |
|-------------|-----------|
| **Entropy** | The total entropy of the universe increases for every spontaneous process: $\\Delta S_{\\text{univ}} > 0$ |
| **Clausius** | Heat cannot spontaneously flow from cold to hot |
| **Kelvin–Planck** | No heat engine can convert heat entirely into work |

All three say the same thing in different ways: **nature has a preferred direction**.

### The Universe as a Whole

$$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$$

- Spontaneous: $\\Delta S_{\\text{univ}} > 0$
- Equilibrium: $\\Delta S_{\\text{univ}} = 0$
- Nonspontaneous: $\\Delta S_{\\text{univ}} < 0$ (would require external work)

**Key Insight:** A system's entropy CAN decrease — as long as the surroundings' entropy increases by a greater amount.
      `
    },
    {
      id: 'en3v2-surroundings',
      type: 'text' as const,
      content: `
## Entropy of the Surroundings

The surroundings gain or lose entropy through heat transfer:

$$\\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T}$$

| Reaction Type | $\\Delta H_{\\text{sys}}$ | Heat to Surroundings | $\\Delta S_{\\text{surr}}$ |
|--------------|----------------------|---------------------|------------------------|
| Exothermic | Negative (−) | Releases heat | **Positive** (+) |
| Endothermic | Positive (+) | Absorbs heat | **Negative** (−) |

### Why Does Temperature Matter?

Adding heat to cold surroundings makes more of a difference than adding the same heat to hot surroundings — like the difference between giving \\$100 to a student versus a billionaire.
      `
    },
    {
      id: 'en3v2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Second Law Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a process to be spontaneous, which must be true?',
            options: [
              '$\\Delta S_{\\text{sys}} > 0$',
              '$\\Delta S_{\\text{surr}} > 0$',
              '$\\Delta S_{\\text{univ}} > 0$',
              '$\\Delta H < 0$'
            ],
            correctAnswer: 2,
            explanation: 'The Second Law requires $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$ for spontaneity. The system alone can have negative entropy change.'
          },
          {
            question: 'An exothermic reaction releases 50 kJ at 250 K. What is $\\Delta S_{\\text{surr}}$?',
            options: [
              '−200 J/K',
              '+200 J/K',
              '−50 J/K',
              '+50 J/K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-50{,}000)/250 = +200$ J/K. Exothermic reactions increase the entropy of the surroundings.'
          },
          {
            question: "Can a system's entropy decrease in a spontaneous process?",
            options: [
              'No — entropy must always increase',
              "Yes — as long as the surroundings' entropy increases by more",
              'Only at absolute zero',
              'Only for gases'
            ],
            correctAnswer: 1,
            explanation: "A system can lose entropy (e.g., water freezing) as long as the surroundings gain even more entropy, so $\\Delta S_{\\text{univ}} > 0$."
          }
        ]
      }
    },
    {
      id: 'en3v2-calculations',
      type: 'input-boxes' as const,
      content: `
**Second Law Calculations** 🧮

**1)** A reaction has $\\Delta H = -80$ kJ at $T = 400$ K. Calculate $\\Delta S_{\\text{surr}}$ in J/K.

**2)** If $\\Delta S_{\\text{sys}} = -100$ J/K and $\\Delta S_{\\text{surr}} = +200$ J/K, what is $\\Delta S_{\\text{univ}}$ in J/K?

**3)** Is the process in question 2 spontaneous? (type yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '100', 'yes'],
        hint1: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-80{,}000)/400$',
        hint2: '$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$',
        hint3: 'Spontaneous when $\\Delta S_{\\text{univ}} > 0$.',
        explanation: '1) $\\Delta S_{\\text{surr}} = 80{,}000/400 = 200$ J/K. 2) $\\Delta S_{\\text{univ}} = -100 + 200 = 100$ J/K. 3) Yes — $\\Delta S_{\\text{univ}} > 0$.'
      }
    },
    {
      id: 'en3v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Statements** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exothermic reactions make $\\Delta S_{\\text{surr}}$',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'At higher temperatures, the same $\\Delta H$ produces a',
            options: ['larger $\\Delta S_{\\text{surr}}$', 'smaller $\\Delta S_{\\text{surr}}$', 'same $\\Delta S_{\\text{surr}}$', 'negative $\\Delta S_{\\text{surr}}$']
          },
          {
            label: 'At equilibrium, $\\Delta S_{\\text{univ}}$ equals',
            options: ['a large positive number', 'a large negative number', 'zero', 'infinity']
          }
        ],
        correctAnswers: ['positive', 'smaller $\\Delta S_{\\text{surr}}$', 'zero'],
        hint1: 'Exothermic = heat released to surroundings.',
        hint2: '$\\Delta S_{\\text{surr}} = -\\Delta H/T$. Larger T in denominator means smaller magnitude.',
        hint3: 'No net driving force at equilibrium.',
        explanation: 'Exothermic → positive $\\Delta S_{\\text{surr}}$. Higher T reduces the magnitude of $\\Delta S_{\\text{surr}}$. At equilibrium, $\\Delta S_{\\text{univ}} = 0$ — no net change.'
      }
    },
    {
      id: 'en3v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water freezing at −10°C is spontaneous even though the system loses entropy. How?',
            options: [
              "The Second Law doesn't apply to phase changes",
              'The heat released to surroundings increases $\\Delta S_{\\text{surr}}$ by more than $\\Delta S_{\\text{sys}}$ decreases',
              "The system's entropy actually increases during freezing",
              'Freezing violates the Second Law'
            ],
            correctAnswer: 1,
            explanation: "Freezing is exothermic — the released heat increases the surroundings' entropy enough to make $\\Delta S_{\\text{univ}} > 0$."
          }
        ]
      }
    }
  ]
}
