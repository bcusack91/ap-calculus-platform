export const chemEntropySecondLawPart1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1-intro',
      type: 'text' as const,
      content: `
# 🎲 What Is Entropy?

**Part 1 of 7 — Disorder, Microstates, and S = k ln W**

Why do ice cubes melt at room temperature but never spontaneously re-freeze? Why does gas expand to fill a container? The answer lies in **entropy** — a measure of the number of ways energy and matter can be distributed in a system.
      `
    },
    {
      id: 'en1-disorder',
      type: 'text' as const,
      content: `
## Entropy and "Disorder"

Entropy ($S$) is often described as a measure of **disorder** or **randomness**. While this is a helpful starting point, the more precise definition involves **microstates**.

### Everyday Examples of Increasing Entropy

| Process | Lower Entropy | Higher Entropy |
|---------|--------------|----------------|
| Ice melting | Solid (ordered) | Liquid (disordered) |
| Gas expanding | Compressed gas | Expanded gas |
| Dissolving salt | Crystalline solid | Ions in solution |
| Shuffling cards | Ordered deck | Random arrangement |

### Key Insight

Systems naturally tend toward states of **higher entropy**. This is not because nature "prefers disorder" — it is because there are vastly more disordered arrangements than ordered ones.
      `
    },
    {
      id: 'en1-microstates',
      type: 'text' as const,
      content: `
## Microstates and the Boltzmann Equation

### What Is a Microstate?

A **microstate** ($W$) is a specific arrangement of particles and energy in a system. The more microstates available, the higher the entropy.

### Boltzmann's Equation

$$S = k_B \\ln W$$

| Symbol | Meaning | Value |
|--------|---------|-------|
| $S$ | Entropy | J/K |
| $k_B$ | Boltzmann constant | $1.38 \\times 10^{-23}$ J/K |
| $W$ | Number of microstates | dimensionless |
| $\\ln$ | Natural logarithm | — |

### Example: Two Coins

- 2 coins have $2^2 = 4$ microstates: HH, HT, TH, TT
- The "disordered" state (one H, one T) has 2 microstates → most probable
- The "ordered" states (both H or both T) have 1 microstate each

### Scaling Up

For $10^{23}$ particles (a mole), the number of microstates is astronomically large. The probability of all gas molecules spontaneously gathering in one corner is essentially **zero** — not because it violates any law, but because the number of "spread out" microstates vastly outnumbers "concentrated" ones.

### Entropy Is Extensive

Entropy depends on the amount of substance — double the amount, double the entropy.
      `
    },
    {
      id: 'en1-entropy-units',
      type: 'text' as const,
      content: `
## Units and Properties of Entropy

### Units

Entropy is measured in **J/K** (joules per kelvin) or **J/(mol·K)** for molar entropy.

Note: Unlike enthalpy (kJ), entropy uses **joules** — a common source of unit errors on the AP exam!

### Key Properties

| Property | Description |
|----------|-------------|
| State function | Depends only on current state, not path |
| Extensive | Proportional to amount of substance |
| Always positive | $S > 0$ for any real substance (at $T > 0$ K) |
| Increases with T | Higher temperature = more microstates |

### Entropy Is NOT Conserved

Unlike energy, entropy can be **created** (in irreversible processes). The total entropy of the universe always increases for spontaneous processes.
      `
    },
    {
      id: 'en1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Entropy Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the Boltzmann equation S = k ln W, a larger W means:',
            options: [
              'Lower entropy',
              'Higher entropy',
              'Lower temperature',
              'Fewer particles'
            ],
            correctAnswer: 1,
            explanation: 'Since $S = k_B \\ln W$, a larger $W$ (more microstates) gives a larger $S$ (higher entropy). More ways to arrange = more entropy.'
          },
          {
            question: 'Which has the highest entropy?',
            options: [
              '1 mol H₂O(s) at 0°C',
              '1 mol H₂O(l) at 25°C',
              '1 mol H₂O(g) at 100°C',
              '1 mol H₂O(l) at 0°C'
            ],
            correctAnswer: 2,
            explanation: 'Gases have far more microstates than liquids or solids. Water vapor at 100°C has the most freedom of motion and the highest entropy of the choices.'
          },
          {
            question: 'Entropy is measured in:',
            options: [
              'kJ/mol',
              'J/K or J/(mol·K)',
              'atm·L',
              'kg·m/s²'
            ],
            correctAnswer: 1,
            explanation: 'Entropy has units of J/K (or J/(mol·K) for molar entropy). Note: joules, not kilojoules! This is a common AP exam unit trap.'
          }
        ]
      }
    },
    {
      id: 'en1-microstate-drill',
      type: 'input-boxes' as const,
      content: `
**Microstate Counting** 🧮

**1)** How many microstates does a system of 3 coins have? ($W = 2^n$)

**2)** For 4 coins, what fraction of microstates have ALL heads? (express as a simplified fraction like 1/16)

**3)** If system A has $W = 100$ microstates and system B has $W = 200$ microstates, which has higher entropy? (type A or B)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '1/16', 'B'],
        hint1: '$W = 2^3$',
        hint2: '$W_{\\text{total}} = 2^4 = 16$. Only 1 microstate has all heads (HHHH).',
        hint3: '$S = k \\ln W$. Larger W means larger S.',
        explanation: '1) $W = 2^3 = 8$ microstates. 2) $2^4 = 16$ total microstates, only 1 is all heads: probability = 1/16. 3) Since $S = k \\ln W$ and $\\ln 200 > \\ln 100$, system B has higher entropy.'
      }
    },
    {
      id: 'en1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Entropy Basics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Entropy is a',
            options: ['path function', 'state function', 'conserved quantity', 'vector']
          },
          {
            label: 'As temperature increases, entropy',
            options: ['decreases', 'increases', 'stays constant', 'becomes zero']
          },
          {
            label: 'A gas expanding into a vacuum undergoes an entropy',
            options: ['decrease', 'increase', 'no change', 'reversal']
          },
          {
            label: 'The Boltzmann constant k_B has units of',
            options: ['J/mol', 'J/K', 'kJ/mol', 'K/J']
          }
        ],
        correctAnswers: ['state function', 'increases', 'increase', 'J/K'],
        hint1: 'Like enthalpy, entropy depends only on the current state.',
        hint2: 'Higher T means more kinetic energy and more accessible microstates.',
        hint3: 'Expanding into more volume = more positions available = more microstates.',
        explanation: 'Entropy is a state function. Higher T increases molecular motion and microstates. Gas expansion increases volume and accessible positions. k_B has units J/K to give S in J/K.'
      }
    },
    {
      id: 'en1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — What Is Entropy?** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why do gas molecules spread out to fill their container?',
            options: [
              'They are repelled by each other',
              'There are vastly more spread-out microstates than concentrated ones',
              'The container walls push them apart',
              'The temperature forces expansion'
            ],
            correctAnswer: 1,
            explanation: 'Gas molecules spread out because the number of microstates where molecules are spread throughout the container vastly exceeds the microstates where they are concentrated in one spot. It is overwhelmingly more probable.'
          },
          {
            question: 'Which process involves a DECREASE in entropy?',
            options: [
              'Ice melting to water',
              'Water evaporating to steam',
              'Water freezing to ice',
              'A gas expanding into a vacuum'
            ],
            correctAnswer: 2,
            explanation: 'Freezing converts liquid (more disordered) to solid (more ordered), decreasing the number of microstates and thus entropy. All other options increase entropy.'
          }
        ]
      }
    }
  ]
}
