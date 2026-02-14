export const chemSolubilityKspPart5Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk5-intro',
      type: 'text' as const,
      content: `
# 💎 Selective Precipitation

**Part 5 of 7 — Separating Ions by Adding Precipitating Agents**

When a solution contains multiple ions that can form insoluble salts with the same reagent, you can selectively precipitate them by controlling the reagent concentration. The ion with the **smallest $K_{sp}$** precipitates first.
      `
    },
    {
      id: 'sk5-principle',
      type: 'text' as const,
      content: `
## The Principle

Consider a solution containing both $\\text{Ag}^+$ and $\\text{Pb}^{2+}$. Adding $\\text{Cl}^-$ can precipitate both:

- $\\text{AgCl}$: $K_{sp} = 1.8 \\times 10^{-10}$
- $\\text{PbCl}_2$: $K_{sp} = 1.7 \\times 10^{-5}$

### Which precipitates first?

The salt requiring the **lower** $[\\text{Cl}^-]$ to reach $Q_{sp} = K_{sp}$ precipitates first.

For $\\text{AgCl}$: $[\\text{Cl}^-] = \\frac{K_{sp}}{[\\text{Ag}^+]}$

For $\\text{PbCl}_2$: $[\\text{Cl}^-] = \\sqrt{\\frac{K_{sp}}{[\\text{Pb}^{2+}]}}$

Since $K_{sp}(\\text{AgCl})$ is much smaller, AgCl precipitates at a much lower $[\\text{Cl}^-]$ — it precipitates **first**.

### Strategy

1. Calculate the $[\\text{reagent}]$ needed to start precipitating each ion
2. The ion requiring less reagent precipitates first
3. Increase reagent until just before the second ion begins to precipitate
4. Filter to separate the first precipitate
      `
    },
    {
      id: 'sk5-example',
      type: 'text' as const,
      content: `
## Worked Example

A solution contains $[\\text{Ag}^+] = 0.010$ M and $[\\text{Pb}^{2+}] = 0.010$ M. NaCl is added slowly.

### Step 1: Find $[\\text{Cl}^-]$ to begin precipitating each

**AgCl**: $[\\text{Cl}^-] = \\frac{K_{sp}}{[\\text{Ag}^+]} = \\frac{1.8 \\times 10^{-10}}{0.010} = 1.8 \\times 10^{-8}$ M

**PbCl₂**: $[\\text{Cl}^-] = \\sqrt{\\frac{K_{sp}}{[\\text{Pb}^{2+}]}} = \\sqrt{\\frac{1.7 \\times 10^{-5}}{0.010}} = \\sqrt{1.7 \\times 10^{-3}} = 0.041$ M

### Step 2: Order of precipitation

AgCl precipitates first (at $[\\text{Cl}^-] = 1.8 \\times 10^{-8}$ M).
PbCl₂ doesn\'t start precipitating until $[\\text{Cl}^-] = 0.041$ M.

### Step 3: Can we separate them completely?

When $[\\text{Cl}^-] = 0.041$ M (just before PbCl₂ starts), what is $[\\text{Ag}^+]$?

$[\\text{Ag}^+] = \\frac{K_{sp}}{[\\text{Cl}^-]} = \\frac{1.8 \\times 10^{-10}}{0.041} = 4.4 \\times 10^{-9}$ M

This is essentially zero compared to the initial 0.010 M — virtually **all** Ag⁺ has precipitated before any Pb²⁺ does. Excellent separation!
      `
    },
    {
      id: 'sk5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Selective Precipitation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When slowly adding a precipitating agent to a mixture of ions, which ion precipitates first?',
            options: [
              'The ion with the largest $K_{sp}$',
              'The ion that reaches $Q_{sp} = K_{sp}$ at the lowest reagent concentration',
              'The ion with the highest concentration',
              'All ions precipitate simultaneously'
            ],
            correctAnswer: 1,
            explanation: 'The ion that reaches $Q_{sp} = K_{sp}$ at the lowest reagent concentration precipitates first. This is generally the one whose salt has the smallest $K_{sp}$.'
          },
          {
            question: 'For effective separation by selective precipitation, the $K_{sp}$ values should be:',
            options: [
              'As close together as possible',
              'As far apart as possible',
              'Both very large',
              'Both very small'
            ],
            correctAnswer: 1,
            explanation: 'Widely separated $K_{sp}$ values mean one ion precipitates completely before the other begins, giving clean separation.'
          }
        ]
      }
    },
    {
      id: 'sk5-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Selective Precipitation** 🧮

A solution contains $[\\text{Ca}^{2+}] = 0.020$ M and $[\\text{Ba}^{2+}] = 0.020$ M. Na₂SO₄ is added slowly.

$K_{sp}(\\text{CaSO}_4) = 4.9 \\times 10^{-5}$
$K_{sp}(\\text{BaSO}_4) = 1.1 \\times 10^{-10}$

Both salts are 1:1 type: $K_{sp} = [\\text{M}^{2+}][\\text{SO}_4^{2-}]$

1) $[\\text{SO}_4^{2-}]$ needed to start precipitating BaSO₄? (Enter in scientific notation, e.g. 5.5e-9)

2) $[\\text{SO}_4^{2-}]$ needed to start precipitating CaSO₄? (Enter in scientific notation, e.g. 2.5e-3)

3) Which precipitates first? (Enter "BaSO4" or "CaSO4")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.5e-9', '2.5e-3', 'BaSO4'],
        hint1: '$[\\text{SO}_4^{2-}] = K_{sp}/[\\text{Ba}^{2+}] = 1.1 \\times 10^{-10}/0.020$',
        hint2: '$[\\text{SO}_4^{2-}] = K_{sp}/[\\text{Ca}^{2+}] = 4.9 \\times 10^{-5}/0.020$',
        hint3: 'The one requiring less SO₄²⁻ precipitates first.',
        explanation: '1) $[\\text{SO}_4^{2-}] = 1.1 \\times 10^{-10}/0.020 = 5.5 \\times 10^{-9}$ M. 2) $[\\text{SO}_4^{2-}] = 4.9 \\times 10^{-5}/0.020 = 2.45 \\times 10^{-3} \\approx 2.5 \\times 10^{-3}$ M. 3) BaSO₄ precipitates first (requires far less SO₄²⁻).'
      }
    },
    {
      id: 'sk5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Separation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The ion with the smaller K_sp value generally precipitates',
            options: ['last', 'first', 'never', 'simultaneously']
          },
          {
            label: 'Selective precipitation works best when K_sp values are',
            options: ['identical', 'very different (orders of magnitude apart)', 'both very large', 'unknown']
          },
          {
            label: 'After the first ion is fully precipitated, you can separate it by',
            options: ['evaporation', 'filtration', 'distillation', 'chromatography']
          }
        ],
        correctAnswers: [
          'first',
          'very different (orders of magnitude apart)',
          'filtration'
        ],
        hint1: 'Smaller $K_{sp}$ → reaches saturation at lower reagent concentration → precipitates first.',
        hint2: 'Large differences in $K_{sp}$ ensure one precipitates completely before the other starts.',
        hint3: 'Filter the precipitate from the solution.',
        explanation: 'Smaller $K_{sp}$ precipitates first. Large $K_{sp}$ differences ensure clean separation. Filter to isolate the precipitate.'
      }
    },
    {
      id: 'sk5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Selective Precipitation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solution has $[\\text{I}^-] = 0.10$ M and $[\\text{Cl}^-] = 0.10$ M. AgNO₃ is added. $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$, $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$. Which precipitates first?',
            options: [
              'AgCl — it is more common',
              'AgI — it has the smaller $K_{sp}$ and reaches saturation first',
              'Both precipitate simultaneously',
              'Neither precipitates'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{Ag}^+]$ needed for AgI: $8.5 \\times 10^{-17}/0.10 = 8.5 \\times 10^{-16}$ M. For AgCl: $1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M. AgI precipitates first at a much lower $[\\text{Ag}^+]$.'
          },
          {
            question: 'For the above problem, when AgCl just begins to precipitate ($[\\text{Ag}^+] = 1.8 \\times 10^{-9}$ M), what fraction of I⁻ remains in solution?',
            options: [
              'About 50%',
              'About 100% — none has precipitated',
              'Essentially 0% — virtually all I⁻ has precipitated',
              'About 10%'
            ],
            correctAnswer: 2,
            explanation: 'When $[\\text{Ag}^+] = 1.8 \\times 10^{-9}$: $[\\text{I}^-] = K_{sp}(\\text{AgI})/[\\text{Ag}^+] = 8.5 \\times 10^{-17}/(1.8 \\times 10^{-9}) = 4.7 \\times 10^{-8}$ M. This is $4.7 \\times 10^{-5}\\%$ of the original 0.10 M — essentially all I⁻ has been removed.'
          }
        ]
      }
    }
  ]
}
