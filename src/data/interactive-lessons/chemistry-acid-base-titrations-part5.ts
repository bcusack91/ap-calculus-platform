export const chemAcidBaseTitrationsPart5Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at5-intro',
      type: 'text' as const,
      content: `
# 🎨 Acid-Base Indicators

**Part 5 of 7 — Choosing the Right Indicator**

An indicator is a weak acid (or base) that changes color in a specific pH range. Choosing the right indicator is critical — its color change should occur as close to the equivalence point as possible.
      `
    },
    {
      id: 'at5-how-indicators-work',
      type: 'text' as const,
      content: `
## How Indicators Work

An indicator ($HIn$) is itself a weak acid with different colored forms:

$$HIn(aq) \\rightleftharpoons H^+(aq) + In^-(aq)$$

$$\\text{Color A} \\quad\\quad\\quad\\quad\\quad \\text{Color B}$$

### Color Change Rules

- **Acidic solution** ($[H^+]$ high): Equilibrium shifts left → $HIn$ form dominates → **Color A**
- **Basic solution** ($[H^+]$ low): Equilibrium shifts right → $In^-$ form dominates → **Color B**
- **Transition range**: Both forms present → intermediate color

### The Transition Range

The indicator changes color when:

$$\\frac{[In^-]}{[HIn]} = \\frac{1}{10} \\text{ to } \\frac{10}{1}$$

Using Henderson-Hasselbalch for the indicator:

$$pH = pK_{In} \\pm 1$$

The indicator changes color over approximately **2 pH units** centered on its $pK_{In}$.
      `
    },
    {
      id: 'at5-common-indicators',
      type: 'text' as const,
      content: `
## Common Indicators

| Indicator | $pK_{In}$ | pH Range | Acid Color | Base Color |
|-----------|----------|----------|------------|------------|
| Thymol blue | 1.7 | 1.2 – 2.8 | Red | Yellow |
| Methyl orange | 3.4 | 3.1 – 4.4 | Red | Yellow |
| Methyl red | 5.0 | 4.4 – 6.2 | Red | Yellow |
| Bromothymol blue | 7.1 | 6.0 – 7.6 | Yellow | Blue |
| Phenolphthalein | 9.1 | 8.2 – 10.0 | Colorless | Pink |
| Alizarin yellow | 11.0 | 10.1 – 12.0 | Yellow | Red |

### Choosing the Right Indicator

**Match the indicator range to the equivalence point pH!**

| Titration Type | Equivalence pH | Best Indicator |
|---------------|----------------|----------------|
| Strong acid + Strong base | 7 | Bromothymol blue |
| Weak acid + Strong base | 8 – 10 | Phenolphthalein |
| Strong acid + Weak base | 3 – 5 | Methyl orange or methyl red |
      `
    },
    {
      id: 'at5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Indicator Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For titrating $CH_3COOH$ with $NaOH$ (equivalence pH ≈ 8.7), the best indicator is:',
            options: [
              'Methyl orange (range 3.1 – 4.4)',
              'Bromothymol blue (range 6.0 – 7.6)',
              'Phenolphthalein (range 8.2 – 10.0)',
              'Methyl red (range 4.4 – 6.2)'
            ],
            correctAnswer: 2,
            explanation: 'The equivalence point is at pH ≈ 8.7 (basic because $A^-$ hydrolyzes). Phenolphthalein changes color in the range 8.2 – 10.0, which includes pH 8.7. The other indicators change too early.'
          },
          {
            question: 'An indicator with $pK_{In} = 5.0$ changes color in which pH range?',
            options: [
              'pH 3 – 5',
              'pH 4 – 6',
              'pH 5 – 7',
              'pH 5 only'
            ],
            correctAnswer: 1,
            explanation: 'The transition range is $pK_{In} \\pm 1 = 5.0 \\pm 1 = 4.0$ to $6.0$.'
          },
          {
            question: 'Why would phenolphthalein be a poor choice for titrating $NH_3$ with $HCl$?',
            options: [
              'It is too expensive',
              'Its color change range (8.2-10.0) doesn\'t match the equivalence pH (~5)',
              'It only works with strong acids',
              'It changes color too slowly'
            ],
            correctAnswer: 1,
            explanation: 'The equivalence point of $NH_3 + HCl$ is at pH ≈ 5 (acidic — $NH_4^+$ hydrolyzes). Phenolphthalein changes at pH 8-10, far from the equivalence point. Methyl red or methyl orange would be better.'
          }
        ]
      }
    },
    {
      id: 'at5-practice',
      type: 'dropdown-select' as const,
      content: `
**Indicator Selection Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $HCl + NaOH$ (equivalence pH = 7), use',
            options: ['methyl orange', 'bromothymol blue', 'phenolphthalein', 'alizarin yellow']
          },
          {
            label: 'For $HCOOH + NaOH$ (equivalence pH ≈ 8.4), use',
            options: ['methyl orange', 'methyl red', 'phenolphthalein', 'thymol blue']
          },
          {
            label: 'For $NH_3 + HCl$ (equivalence pH ≈ 5.1), use',
            options: ['phenolphthalein', 'alizarin yellow', 'methyl red', 'thymol blue']
          },
          {
            label: 'Phenolphthalein is colorless in',
            options: ['acidic solution', 'basic solution', 'neutral solution only', 'all solutions']
          }
        ],
        correctAnswers: ['bromothymol blue', 'phenolphthalein', 'methyl red', 'acidic solution'],
        hint1: 'Bromothymol blue range (6.0-7.6) brackets pH 7.',
        hint2: 'Phenolphthalein range (8.2-10.0) brackets pH 8.4.',
        hint3: 'Methyl red range (4.4-6.2) brackets pH 5.1.',
        explanation: 'Match indicator range to equivalence pH. Bromothymol blue for pH 7, phenolphthalein for pH 8-9, methyl red for pH 5. Phenolphthalein is colorless in acid (its $HIn$ form), pink in base ($In^-$ form).'
      }
    },
    {
      id: 'at5-ph-meter',
      type: 'text' as const,
      content: `
## pH Meters vs. Indicators

### Advantages of pH Meters

- Continuous pH readings throughout the titration
- More precise than indicators
- Can identify the exact equivalence point
- Can generate a complete titration curve
- No color interpretation needed

### When Indicators Are Still Used

- Quick, inexpensive field tests
- Visual demonstration in teaching
- When a pH meter is not available
- For routine quality control with known endpoints

### Finding Equivalence with a pH Meter

Plot pH vs. volume. The equivalence point is at the **inflection point** — where the curve is steepest (maximum $\\Delta pH/\\Delta V$).

Alternatively, plot the **first derivative** ($\\Delta pH/\\Delta V$ vs. $V$). The equivalence point is at the **peak** of this graph.
      `
    },
    {
      id: 'at5-input-drill',
      type: 'input-boxes' as const,
      content: `
**Indicator Calculations** 🧮

1) An indicator has $K_{In} = 1.0 \\times 10^{-7}$. What is its $pK_{In}$?

2) What is the lower limit of its transition range? (1 decimal place)

3) What is the upper limit of its transition range? (1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '6.0', '8.0'],
        hint1: '$pK_{In} = -\\log(K_{In})$.',
        hint2: 'Lower = $pK_{In} - 1$.',
        hint3: 'Upper = $pK_{In} + 1$.',
        explanation: '1) $pK_{In} = -\\log(1.0 \\times 10^{-7}) = 7.0$. 2) $7.0 - 1 = 6.0$. 3) $7.0 + 1 = 8.0$. This indicator transitions between pH 6.0 and 8.0.'
      }
    },
    {
      id: 'at5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Indicators** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student titrates a weak acid with $NaOH$ using methyl orange (range 3.1-4.4). The color changes before the equivalence point is reached. This means:',
            options: [
              'The indicator was appropriate',
              'The indicator changed too early — the equivalence pH is higher than 4.4',
              'The acid was actually a strong acid',
              'More indicator should have been added'
            ],
            correctAnswer: 1,
            explanation: 'For weak acid + strong base, equivalence pH > 7. Methyl orange changes at pH 3-4, which is in the buffer region (before equivalence). The student would underestimate the volume needed. Phenolphthalein would be more appropriate.'
          },
          {
            question: 'At the endpoint when using phenolphthalein, the solution has just turned faint pink. This means:',
            options: [
              'pH is approximately 8.2 (entering the transition range)',
              'pH is exactly 7',
              'pH is approximately 14',
              'The indicator has decomposed'
            ],
            correctAnswer: 0,
            explanation: 'Phenolphthalein is colorless below pH ≈ 8.2 and turns pink above it. The first appearance of faint pink indicates the pH has just entered the transition range at about pH 8.2.'
          }
        ]
      }
    }
  ]
}
