export const chemSolubilityKspPart5Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk5-intro',
      type: 'text' as const,
      content: `# 💎 Selective Precipitation

**Part 5 of 7 — Separating Ions by Adding Precipitating Agents**

---

### Topics in This Part

| Section |
|---------|
| 📏 The Principle |
| Which precipitates first? |
| Strategy |
| 🧪 Worked Example |
| Step 1: Find $[\\text{Cl}^-]$ to begin precipitating each |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sk5-principle',
      type: 'text' as const,
      content: `
## 📏 The Principle

Consider a solution containing both $\\text{Ag}^+$ and $\\text{Pb}^{2+}$. Adding $\\text{Cl}^-$ can precipitate both:

- $\\text{AgCl}$: $K_{sp} = 1.8 \\times 10^{-10}$
- $\\text{PbCl}_2$: $K_{sp} = 1.7 \\times 10^{-5}$


---

### Which precipitates first?

The salt requiring the **lower** $[\\text{Cl}^-]$ to reach $Q_{sp} = K_{sp}$ precipitates first.

For $\\text{AgCl}$: $[\\text{Cl}^-] = \\frac{K_{sp}}{[\\text{Ag}^+]}$

For $\\text{PbCl}_2$: $[\\text{Cl}^-] = \\sqrt{\\frac{K_{sp}}{[\\text{Pb}^{2+}]}}$

Since $K_{sp}(\\text{AgCl})$ is much smaller, AgCl precipitates at a much lower $[\\text{Cl}^-]$ — it precipitates **first**.


---

### Strategy

1. Calculate the $[\\text{reagent}]$ needed to start precipitating each ion
2. The ion requiring less reagent precipitates first
3. Increase reagent until just before the second ion begins to precipitate
4. Filter to separate the first precipitate

> 🔑 **Key Concept:** In selective precipitation, the salt with the smallest $K_{sp}$ generally precipitates first because it reaches saturation ($Q_{sp} = K_{sp}$) at the lowest reagent concentration.
      `
    },
    {
      id: 'sk5-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** A solution contains $[\\text{Ag}^+] = 0.010$ M and $[\\text{Pb}^{2+}] = 0.010$ M. NaCl is added slowly. Which precipitates first, and can they be separated?

> **Solution:**


---

### Step 1: Find $[\\text{Cl}^-]$ to begin precipitating each

**AgCl**: $[\\text{Cl}^-] = \\frac{K_{sp}}{[\\text{Ag}^+]} = \\frac{1.8 \\times 10^{-10}}{0.010} = 1.8 \\times 10^{-8}$ M

**$PbCl_{2}$**: $[\\text{Cl}^-] = \\sqrt{\\frac{K_{sp}}{[\\text{Pb}^{2+}]}} = \\sqrt{\\frac{1.7 \\times 10^{-5}}{0.010}} = \\sqrt{1.7 \\times 10^{-3}} = 0.041$ M


---

### Step 2: Order of precipitation

AgCl precipitates first (at $[\\text{Cl}^-] = 1.8 \\times 10^{-8}$ M).
$PbCl_{2}$ doesn\'t start precipitating until $[\\text{Cl}^-] = 0.041$ M.


---

### Step 3: Can we separate them completely?

When $[\\text{Cl}^-] = 0.041$ M (just before $PbCl_{2}$ starts), what is $[\\text{Ag}^+]$?

$[\\text{Ag}^+] = \\frac{K_{sp}}{[\\text{Cl}^-]} = \\frac{1.8 \\times 10^{-10}}{0.041} = 4.4 \\times 10^{-9}$ M

This is essentially zero compared to the initial 0.010 M — virtually **all** $Ag^{+}$ has precipitated before any $Pb^{2+}$ does. Excellent separation!

> 💡 **Tip:** When $K_{sp}$ values differ by several orders of magnitude, selective precipitation gives nearly complete separation. The greater the difference, the cleaner the separation.
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
              'The ion whose salt has the largest $K_{sp}$, since it forms most easily',
              'The ion needing the least reagent to reach $Q_{sp} = K_{sp}$',
              'The ion present at the highest starting concentration in the mixture',
              'All of the ions together, once any $Q_{sp}$ exceeds its $K_{sp}$'
            ],
            correctAnswer: 1,
            explanation: 'The ion that reaches $Q_{sp} = K_{sp}$ at the lowest reagent concentration precipitates first. For salts of the same formula type at similar concentrations, this is the one with the smallest $K_{sp}$ — not the largest. Concentration matters too, which is why the comparison is made through the reagent concentration each ion needs rather than through $K_{sp}$ or concentration alone.'
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

A solution contains $[\\text{Ca}^{2+}] = 0.020$ M and $[\\text{Ba}^{2+}] = 0.020$ M. $Na_{2}SO_{4}$ is added slowly.

$K_{sp}(\\text{CaSO}_4) = 4.9 \\times 10^{-5}$
$K_{sp}(\\text{BaSO}_4) = 1.1 \\times 10^{-10}$

Both salts are 1:1 type: $K_{sp} = [\\text{M}^{2+}][\\text{SO}_4^{2-}]$

**1)** $[\\text{SO}_4^{2-}]$ needed to start precipitating $BaSO_{4}$? (Enter in scientific notation, e.g. 3.0e-7)

**2)** $[\\text{SO}_4^{2-}]$ needed to start precipitating $CaSO_{4}$? (Enter in scientific notation, e.g. 1.2e-4)

**3)** Which precipitates first? (Enter "BaSO4" or "CaSO4")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        questions: [{ question: '1)', answer: '5.5e-9', acceptableAnswers: ['5.5e-9'] }, { question: '2)', answer: '2.45e-3', acceptableAnswers: ['2.45e-3', '2.5e-3'] }, { question: '3)', answer: 'BaSO4', acceptableAnswers: ['BaSO4', 'BaSO₄'] }],
        hint1: '$[\\text{SO}_4^{2-}] = K_{sp}/[\\text{Ba}^{2+}] = 1.1 \\times 10^{-10}/0.020$',
        hint2: '$[\\text{SO}_4^{2-}] = K_{sp}/[\\text{Ca}^{2+}] = 4.9 \\times 10^{-5}/0.020$',
        hint3: 'The one requiring less $SO_{4}^{2-}$ precipitates first.',
        explanation: '1) $[\\text{SO}_4^{2-}] = 1.1 \\times 10^{-10}/0.020 = 5.5 \\times 10^{-9}$ M. 2) $[\\text{SO}_4^{2-}] = 4.9 \\times 10^{-5}/0.020 = 2.45 \\times 10^{-3}$ M. 3) $BaSO_{4}$ precipitates first (requires far less $SO_{4}^{2-}$).'
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
            options: ['within a factor of two of each other', 'orders of magnitude apart', 'both very large', 'larger than the ion concentrations']
          },
          {
            label: 'After the first ion is fully precipitated, you can separate it by',
            options: ['evaporation', 'filtration', 'distillation', 'chromatography']
          }
        ],
        correctAnswers: [
          'first',
          'orders of magnitude apart',
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
            question: 'A solution has $[\\text{I}^-] = 0.10$ M and $[\\text{Cl}^-] = 0.10$ M. $AgNO_{3}$ is added. $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$, $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$. Which precipitates first?',
            options: [
              'AgCl — its $K_{sp}$ is larger, so it forms more readily',
              'AgI — it has the smaller $K_{sp}$ and reaches saturation first',
              'Both at once, since the two anion concentrations are equal',
              'Neither, since $AgNO_{3}$ is a soluble salt'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{Ag}^+]$ needed for AgI: $8.5 \\times 10^{-17}/0.10 = 8.5 \\times 10^{-16}$ M. For AgCl: $1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M. AgI precipitates first at a much lower $[\\text{Ag}^+]$. Equal anion concentrations do not mean equal onset points, because the two $K_{sp}$ values differ by a factor of about two million.'
          },
          {
            question: 'For the above problem, when AgCl just begins to precipitate ($[\\text{Ag}^+] = 1.8 \\times 10^{-9}$ M), what fraction of $I^{-}$ remains in solution?',
            options: [
              'About 50% — half has precipitated before AgCl starts',
              'About 100% — none has precipitated',
              'Essentially 0% — virtually all $I^{-}$ has precipitated',
              'About 10% of the original iodide is left'
            ],
            correctAnswer: 2,
            explanation: 'When $[\\text{Ag}^+] = 1.8 \\times 10^{-9}$: $[\\text{I}^-] = K_{sp}(\\text{AgI})/[\\text{Ag}^+] = 8.5 \\times 10^{-17}/(1.8 \\times 10^{-9}) = 4.7 \\times 10^{-8}$ M. This is $4.7 \\times 10^{-5}\\%$ of the original 0.10 M — essentially all $I^{-}$ has been removed.'
          }
        ]
      }
    }
  ]
}
