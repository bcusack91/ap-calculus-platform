export const chemEntropySecondLawV2Part1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1v2-intro',
      type: 'text' as const,
      content: `
# 🃏 Entropy: Nature's Shuffle

**Part 1 of 7 — Why Things Spread Out**

Imagine dropping a single drop of red food coloring into a glass of water. It doesn't stay as a dot — it diffuses until the entire glass is uniformly pink. **Why?** The answer: **entropy**.
      `
    },
    {
      id: 'en1v2-analogy',
      type: 'text' as const,
      content: `
## The Bedroom Analogy

Think of your bedroom. There's exactly **one** way for everything to be perfectly organized: shoes paired, books alphabetized, clothes folded. But there are **billions** of ways for it to be messy.

This is the core idea of entropy: **there are far more disordered arrangements than ordered ones**.

### From Bedrooms to Molecules

| Scenario | Ordered States | Disordered States |
|----------|---------------|------------------|
| Bedroom | 1 perfectly clean arrangement | Billions of messy ones |
| 4 gas molecules in a box | 1 arrangement where all are in the left half | 15 arrangements where they're spread out |
| $10^{23}$ molecules | $1$ "concentrated" state | $\\sim 10^{10^{22}}$ "spread" states |

### The Punch Line

Nature doesn't have a preference for disorder — it just plays the odds. When there are overwhelmingly more disordered states, that's what you'll observe.
      `
    },
    {
      id: 'en1v2-boltzmann',
      type: 'text' as const,
      content: `
## Boltzmann's Big Idea

Ludwig Boltzmann connected probability to thermodynamics with one equation:

$$S = k_B \\ln W$$

### Breaking It Down

- $S$ = entropy (measured in J/K)
- $k_B = 1.38 \\times 10^{-23}$ J/K (the Boltzmann constant — connects microscopic to macroscopic)
- $W$ = number of microstates (possible arrangements)
- $\\ln$ = natural logarithm

### Why Logarithm?

When you combine two independent systems, their microstates **multiply**: $W_{\\text{total}} = W_A \\times W_B$. But we want entropy to be **additive**: $S_{\\text{total}} = S_A + S_B$. The logarithm converts multiplication into addition!

### Boltzmann's Tombstone

This equation was so important that it's literally **engraved on Boltzmann's tombstone** in Vienna. It bridges the microscopic world (individual particles) and the macroscopic world (things we can measure like temperature and pressure).
      `
    },
    {
      id: 'en1v2-properties',
      type: 'text' as const,
      content: `
## Key Properties of Entropy

| Property | What It Means | Why It Matters |
|----------|---------------|----------------|
| **State function** | Only depends on current state | Path doesn't matter — only start and end points |
| **Extensive** | Doubles when amount doubles | 2 mol has twice the entropy of 1 mol |
| **Always positive** ($T > 0$) | No substance has zero entropy above 0 K | Even crystals have thermal vibrations |
| **Units: J/K** | Not kJ! | Common AP exam trap — watch your units |

### Entropy vs Energy: What's Different?

Energy is **conserved** — it can neither be created nor destroyed. Entropy is **NOT conserved** — it can be **created** in irreversible processes. In fact, the total entropy of the universe always increases for any spontaneous process.

This is the key to understanding why some reactions happen and others don't!
      `
    },
    {
      id: 'en1v2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Food coloring spreads in water because:',
            options: [
              'Water molecules push the dye apart',
              'The dye is lighter than water',
              'Spread-out microstates vastly outnumber concentrated ones',
              'Chemical bonds break between dye molecules'
            ],
            correctAnswer: 2,
            explanation: 'The number of microstates where dye molecules are spread throughout the water is astronomically larger than the states where they are concentrated in one spot.'
          },
          {
            question: 'Why does Boltzmann use a logarithm in S = k ln W?',
            options: [
              'To make the numbers smaller',
              'So entropy is additive when combining systems',
              'Because entropy is always negative',
              'To convert temperature to energy'
            ],
            correctAnswer: 1,
            explanation: 'When combining two systems, $W_{\\text{total}} = W_A \\times W_B$, but $\\ln(W_A \\times W_B) = \\ln W_A + \\ln W_B$, so $S_{\\text{total}} = S_A + S_B$.'
          },
          {
            question: 'Unlike energy, entropy:',
            options: [
              'Is always conserved',
              'Can be created in irreversible processes',
              'Has units of kJ/mol',
              'Decreases in all spontaneous processes'
            ],
            correctAnswer: 1,
            explanation: 'Energy is conserved (First Law). Entropy can be created (Second Law) — the total entropy of the universe increases for every spontaneous process.'
          }
        ]
      }
    },
    {
      id: 'en1v2-counting-drill',
      type: 'input-boxes' as const,
      content: `
**Microstate Counting Practice** 🧮

**1)** A system of 5 coins has how many total microstates? ($W = 2^n$)

**2)** What is the probability that all 5 coins show heads? (express as a fraction like 1/32)

**3)** If $W$ doubles, does entropy double? (type yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '1/32', 'no'],
        hint1: '$W = 2^5$',
        hint2: 'Only 1 of the $2^5$ microstates has all heads.',
        hint3: 'Since $S = k \\ln W$, doubling W gives $S_2 = k \\ln(2W) = k \\ln 2 + k \\ln W$. It increases by $k \\ln 2$, not doubles.',
        explanation: '1) $W = 2^5 = 32$. 2) Probability = 1/32 (one favored microstate out of 32). 3) No — since $\\ln(2W) = \\ln 2 + \\ln W$, entropy increases by $k\\ln 2$, not by a factor of 2. The logarithm prevents simple doubling.'
      }
    },
    {
      id: 'en1v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Statements** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'More microstates means',
            options: ['lower entropy', 'higher entropy', 'same entropy', 'lower temperature']
          },
          {
            label: 'Entropy has units of',
            options: ['kJ/mol', 'J/K', 'atm', 'mol/L']
          },
          {
            label: 'When combining two systems, microstates',
            options: ['add', 'multiply', 'subtract', 'stay the same']
          },
          {
            label: 'A solid changing to a liquid is an entropy',
            options: ['decrease', 'increase', 'no change', 'reversal']
          }
        ],
        correctAnswers: ['higher entropy', 'J/K', 'multiply', 'increase'],
        hint1: '$S = k \\ln W$ — S increases with W.',
        hint2: 'Be careful: J not kJ!',
        hint3: '$W_{\\text{total}} = W_A \\times W_B$ for independent systems.',
        explanation: 'More microstates = higher $S$. Entropy uses J/K (not kJ). Microstates multiply for combined systems ($\\ln$ makes entropy additive). Melting increases disorder → higher entropy.'
      }
    },
    {
      id: 'en1v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A glass of ice water sits in a warm room. Why does the ice melt?',
            options: [
              'The warm room provides activation energy',
              'The liquid state has more microstates, making it overwhelmingly more probable',
              'Ice is chemically unstable',
              'Gravity pulls the ice apart'
            ],
            correctAnswer: 1,
            explanation: 'Liquid water at room temperature has vastly more accessible microstates than solid ice. The system evolves toward the state with higher probability (higher entropy).'
          },
          {
            question: 'Which statement about entropy is FALSE?',
            options: [
              'Entropy is a state function',
              'Entropy is conserved in all processes',
              'Entropy has units of J/K',
              'Entropy is always positive above 0 K'
            ],
            correctAnswer: 1,
            explanation: 'Entropy is NOT conserved — it can be created in irreversible processes. Energy is the conserved quantity (First Law). Entropy always increases in the universe (Second Law).'
          }
        ]
      }
    }
  ]
}
