export const bioWaterPropertiesPart4Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate4-solvent',
      type: 'text' as const,
      content: `
## The Universal Solvent

Water is called the **universal solvent** because it dissolves more substances than any other liquid. This is due to its polarity.

### How Water Dissolves Ionic Compounds

When $NaCl$ dissolves:
1. The $\\delta^{-}$ oxygen of water surrounds $Na^+$ ions
2. The $\\delta^{+}$ hydrogen of water surrounds $Cl^-$ ions
3. The ions are pulled apart and surrounded by water — they are **hydrated**

### Hydrophilic vs. Hydrophobic

| Type | Meaning | Examples |
|------|---------|----------|
| **Hydrophilic** | Water-loving | Ions, polar molecules, sugars |
| **Hydrophobic** | Water-fearing | Fats, oils, nonpolar molecules |
| **Amphipathic** | Both | Phospholipids, soap |

Hydrophobic molecules are excluded from the aqueous environment, which is critical for membrane formation.
      `
    },
    {
      id: 'wate4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution with pH 4 has how many more $H^{+}$ ions than a solution with pH 7?',
            options: [
              '3 times more',
              '30 times more',
              '300 times more',
              '1,000 times more'
            ],
            correctAnswer: 3,
            explanation: 'Each pH unit = 10× difference. pH 4 to pH 7 = 3 units = $10^3$ = 1,000 times more $H^+$ ions.'
          }
        ]
      }
    },
    {
      id: 'wate4-ph',
      type: 'text' as const,
      content: `
## pH and Buffers

### The pH Scale

$$pH = -\\log[H^+]$$

| pH | $[H^+]$ (M) | Classification |
|----|-------------|----------------|
| 0 | $10^0$ | Strongly acidic |
| 7 | $10^{-7}$ | Neutral |
| 14 | $10^{-14}$ | Strongly basic |

Each pH unit represents a **10-fold change** in $[H^+]$.

### Biological Buffers

Buffers resist changes in pH by accepting or donating $H^+$ ions.

- **Carbonic acid buffer** in blood: $H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$
- Maintains blood pH at **7.35-7.45**
- Even small deviations can be fatal
- Enzymes function within narrow pH ranges
      `
    },
    {
      id: 'wate4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Phospholipids are classified as:',
            options: [
              'Hydrophilic',
              'Hydrophobic',
              'Amphipathic',
              'Nonpolar'
            ],
            correctAnswer: 2,
            explanation: 'Phospholipids have a hydrophilic (polar) head and hydrophobic (nonpolar) tails, making them amphipathic — essential for forming cell membranes.'
          }
        ]
      }
    },
    {
      id: 'wate4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A substance that dissolves in water is called ___',
            options: ['hydrophobic', 'hydrophilic', 'amphipathic', 'nonpolar']
          },
          {
            label: 'Blood pH is maintained near ___',
            options: ['6.0', '7.0', '7.4', '8.0']
          },
          {
            label: 'Buffers resist changes in ___',
            options: ['temperature', 'pH', 'pressure', 'volume']
          }
        ],
        correctAnswers: ['hydrophilic', '7.4', 'pH'],
        hint1: 'Hydro = water, philic = loving.',
        hint2: 'Normal blood pH is slightly above neutral.',
        hint3: 'Buffers accept or donate $H^{+}$ ions.',
        explanation: 'Hydrophilic means water-loving. Blood pH is tightly regulated near 7.4. Buffers resist pH changes by absorbing or releasing $H^{+}$.'
      }
    }
  ]
}
