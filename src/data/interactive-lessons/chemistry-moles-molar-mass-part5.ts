export const chemMolesMolarMassPart5Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm5-intro',
      type: 'text' as const,
      content: `
# 🔬 Empirical and Molecular Formulas

**Part 5 of 7 — From Ratios to Real Formulas**

In Part 4, we learned how to find the **empirical formula** — the simplest whole-number ratio of atoms. But many compounds share the same empirical formula. To find the **molecular formula** (the actual number of atoms in each molecule), we need one more piece of information: the **molar mass**.
      `
    },
    {
      id: 'mm5-definitions',
      type: 'text' as const,
      content: `
## Empirical vs. Molecular Formulas

| Formula Type | Definition | Example (for glucose) |
|-------------|-----------|----------------------|
| **Empirical** | Simplest whole-number ratio of atoms | CH₂O |
| **Molecular** | Actual number of atoms per molecule | C₆H₁₂O₆ |

### Key Relationship

$$\\text{Molecular formula} = n \\times (\\text{Empirical formula})$$

where:

$$n = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}}$$

$n$ must be a **positive integer** (1, 2, 3, ...).

### Examples of Empirical ↔ Molecular

| Empirical | $M_{\\text{emp}}$ (g/mol) | $M_{\\text{mol}}$ (g/mol) | $n$ | Molecular |
|-----------|--------------------------|--------------------------|-----|-----------|
| CH₂O | 30.03 | 30.03 | 1 | CH₂O (formaldehyde) |
| CH₂O | 30.03 | 60.05 | 2 | C₂H₄O₂ (acetic acid) |
| CH₂O | 30.03 | 180.16 | 6 | C₆H₁₂O₆ (glucose) |
| CH | 13.02 | 78.11 | 6 | C₆H₆ (benzene) |
      `
    },
    {
      id: 'mm5-step-by-step',
      type: 'text' as const,
      content: `
## Step-by-Step Method

### Finding the Empirical Formula from Experimental Data

1. Start with mass or percent of each element
2. Convert to moles: $n_i = m_i / M_i$
3. Divide all by the smallest mole value
4. If needed, multiply to get whole numbers

### Finding the Molecular Formula

5. Calculate the molar mass of the empirical formula ($M_{\\text{emp}}$)
6. Divide the given molecular molar mass by $M_{\\text{emp}}$: $n = M_{\\text{mol}} / M_{\\text{emp}}$
7. Multiply all subscripts in the empirical formula by $n$

### Worked Example

> **Problem:** A compound is 40.0% C, 6.7% H, and 53.3% O by mass. Its molar mass is 180.2 g/mol. Find the molecular formula.

**Solution:**

**Step 1–4** (from Part 4): Empirical formula = CH₂O

**Step 5:** $M_{\\text{emp}} = 12.01 + 2(1.008) + 16.00 = 30.03$ g/mol

**Step 6:**

$$n = \\frac{M_{\\text{mol}}}{M_{\\text{emp}}} = \\frac{180.2 \\text{ g/mol}}{30.03 \\text{ g/mol}} = 6.00$$

**Step 7:** Molecular formula = $\\text{C}_{1 \\times 6}\\text{H}_{2 \\times 6}\\text{O}_{1 \\times 6} = \\text{C}_6\\text{H}_{12}\\text{O}_6$ (glucose!)
      `
    },
    {
      id: 'mm5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Empirical & Molecular Formula Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The empirical formula of a compound is NO₂. If the molar mass is 92.02 g/mol, what is the molecular formula? ($M_{\\text{NO}_2} = 46.01$ g/mol)',
            options: [
              'NO₂',
              'N₂O₃',
              'N₂O₄',
              'N₃O₆'
            ],
            correctAnswer: 2,
            explanation: '$n = 92.02/46.01 = 2$. Molecular formula = $2 \\times \\text{NO}_2 = \\text{N}_2\\text{O}_4$.'
          },
          {
            question: 'A compound has the molecular formula C₄H₈O₂. What is its empirical formula?',
            options: [
              'CHO',
              'CH₂O',
              'C₂H₄O',
              'C₄H₈O₂'
            ],
            correctAnswer: 2,
            explanation: 'Divide all subscripts by their GCF. The subscripts are 4, 8, 2, and GCF = 2. Dividing: $4/2 = 2$, $8/2 = 4$, $2/2 = 1$. The empirical formula is C₂H₄O. This cannot be simplified further since 2, 4, and 1 share no common factor.'
          },
          {
            question: 'If the empirical and molecular formulas are the same, then $n$ equals:',
            options: [
              '0',
              '1',
              '2',
              'It depends on the compound'
            ],
            correctAnswer: 1,
            explanation: 'When $n = 1$, the molecular formula equals the empirical formula. This happens when the molar mass equals the empirical formula mass.'
          }
        ]
      }
    },
    {
      id: 'mm5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Empirical & Molecular Formula Drill** 🧮

> **Given:** H = 1.008, C = 12.01, N = 14.01, O = 16.00, P = 30.97

**1)** A compound is 43.6% P and 56.4% O by mass. What is the mole ratio of P to O? Give as the number of O per 1 P (to 3 significant figures).

**2)** The empirical formula from question 1 is P₂O₅. Calculate $M_{\\text{emp}}$ in g/mol. (to 3 significant figures)

**3)** If the molar mass of the compound is 283.88 g/mol, what is $n$ (the multiplier to get the molecular formula)? (whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '141.94', '2'],
        hint1: 'Assume 100 g: 43.6 g P and 56.4 g O. Convert to moles: P: $43.6/30.97$, O: $56.4/16.00$. Divide O moles by P moles.',
        hint2: '$M_{\\text{P}_2\\text{O}_5} = 2(30.97) + 5(16.00)$.',
        hint3: '$n = M_{\\text{mol}}/M_{\\text{emp}} = 283.88/141.94$.',
        explanation: '1) P: $43.6/30.97 = 1.408$ mol; O: $56.4/16.00 = 3.525$ mol. Ratio O/P: $3.525/1.408 = 2.503 \\approx 2.5$. Since 2.5 = 5/2, multiply both by 2: P₂O₅. 2) $M = 2(30.97) + 5(16.00) = 61.94 + 80.00 = 141.94$ g/mol. 3) $n = 283.88/141.94 = 2$. So the molecular formula is P₄O₁₀.'
      }
    },
    {
      id: 'mm5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Formulas — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The empirical formula represents the ______ ratio of atoms',
            options: ['exact', 'simplest whole-number', 'mass', 'volume']
          },
          {
            label: 'To find the molecular formula from the empirical formula, you also need the',
            options: ['density', 'molar mass', 'boiling point', 'color']
          },
          {
            label: 'If a compound has empirical formula CH₂ and molar mass 42.08 g/mol, the value of n is',
            options: ['1', '2', '3', '4']
          },
          {
            label: 'Benzene (C₆H₆) and acetylene (C₂H₂) have the same',
            options: ['molecular formula', 'molar mass', 'empirical formula', 'physical properties']
          }
        ],
        correctAnswers: ['simplest whole-number', 'molar mass', '3', 'empirical formula'],
        hint1: 'Empirical means simplest — all subscripts reduced to the smallest integers.',
        hint2: 'You need $M_{\\text{mol}}$ to calculate $n = M_{\\text{mol}}/M_{\\text{emp}}$.',
        hint3: '$M_{\\text{CH}_2} = 12.01 + 2(1.008) = 14.03$ g/mol. $n = 42.08/14.03 = ?$',
        explanation: 'The empirical formula is the simplest whole-number ratio. You need the molar mass to find $n$. For CH₂: $M_{\\text{emp}} = 14.03$, $n = 42.08/14.03 = 3$, so molecular formula is C₃H₆. Benzene (C₆H₆) and acetylene (C₂H₂) both simplify to empirical formula CH.'
      }
    },
    {
      id: 'mm5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Empirical & Molecular Formulas** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A compound contains 92.3% C and 7.7% H by mass, and has a molar mass of 78.11 g/mol. What is its molecular formula?',
            options: [
              'CH',
              'C₂H₂',
              'C₆H₆',
              'C₈H₈'
            ],
            correctAnswer: 2,
            explanation: 'Assume 100 g: C: $92.3/12.01 = 7.69$ mol, H: $7.7/1.008 = 7.64$ mol. Ratio ≈ 1:1, so empirical formula = CH ($M_{\\text{emp}} = 13.02$ g/mol). $n = 78.11/13.02 = 6.0$. Molecular formula = C₆H₆ (benzene).'
          },
          {
            question: 'A compound has empirical formula HO and molar mass 34.02 g/mol. What is its molecular formula?',
            options: [
              'HO',
              'H₂O',
              'H₂O₂',
              'H₃O₃'
            ],
            correctAnswer: 2,
            explanation: '$M_{\\text{HO}} = 1.008 + 16.00 = 17.01$ g/mol. $n = 34.02/17.01 = 2$. Molecular formula = H₂O₂ (hydrogen peroxide).'
          }
        ]
      }
    }
  ]
}
