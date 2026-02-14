export const chemWeakAcidsBasesKaKbPart5Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk5-intro',
      type: 'text' as const,
      content: `
# 📈 Percent Ionization and Polyprotic Acids

**Part 5 of 7 — Advanced Weak Acid Concepts**

This part covers two important topics: how concentration affects the degree of dissociation, and how acids with multiple ionizable protons behave.
      `
    },
    {
      id: 'wk5-percent-ionization',
      type: 'text' as const,
      content: `
## Percent Ionization

$$\\text{Percent ionization} = \\frac{[H^+]_{eq}}{[HA]_0} \\times 100\\%$$

### Key Trend

For a given weak acid, **diluting** the solution **increases** percent ionization.

Why? Le Chatelier\'s principle: dilution shifts the equilibrium $HA \\rightleftharpoons H^+ + A^-$ to the **right** (toward more ions, since there are more moles of product than reactant).

### Mathematical Proof

$$[H^+] = \\sqrt{K_a \\cdot C}$$

$$\\text{\\% ionization} = \\frac{\\sqrt{K_a \\cdot C}}{C} \\times 100 = \\frac{\\sqrt{K_a}}{\\sqrt{C}} \\times 100$$

As $C$ decreases, $\\frac{1}{\\sqrt{C}}$ increases, so percent ionization increases!

### Example: 0.10 M vs 0.010 M Acetic Acid

| Concentration | $[H^+]$ | % Ionization |
|--------------|---------|-------------|
| 0.10 M | $1.34 \\times 10^{-3}$ | 1.3% |
| 0.010 M | $4.24 \\times 10^{-4}$ | 4.2% |
| 0.0010 M | $1.34 \\times 10^{-4}$ | 13.4% |
      `
    },
    {
      id: 'wk5-polyprotic',
      type: 'text' as const,
      content: `
## Polyprotic Acids

Polyprotic acids can donate **more than one proton**. Each dissociation has its own $K_a$.

### Diprotic Acid Example: $H_2SO_3$

$$H_2SO_3 \\rightleftharpoons H^+ + HSO_3^- \\qquad K_{a1} = 1.5 \\times 10^{-2}$$

$$HSO_3^- \\rightleftharpoons H^+ + SO_3^{2-} \\qquad K_{a2} = 6.3 \\times 10^{-8}$$

### Triprotic Acid Example: $H_3PO_4$

$$H_3PO_4 \\rightleftharpoons H^+ + H_2PO_4^- \\qquad K_{a1} = 7.5 \\times 10^{-3}$$

$$H_2PO_4^- \\rightleftharpoons H^+ + HPO_4^{2-} \\qquad K_{a2} = 6.2 \\times 10^{-8}$$

$$HPO_4^{2-} \\rightleftharpoons H^+ + PO_4^{3-} \\qquad K_{a3} = 4.8 \\times 10^{-13}$$

### Critical Rule

$$K_{a1} \\gg K_{a2} \\gg K_{a3}$$

Each successive dissociation is **much weaker** because it\'s harder to remove $H^+$ from an increasingly negative ion.

### Practical Consequence

For pH calculations, **only the first dissociation matters** (in most cases). The second and third contribute negligible additional $[H^+]$.
      `
    },
    {
      id: 'wk5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Percent Ionization & Polyprotic Acids** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you dilute a 0.10 M weak acid solution to 0.010 M, the percent ionization will:',
            options: [
              'Decrease by a factor of 10',
              'Stay the same (only $K_a$ matters)',
              'Increase by a factor of about 3.2',
              'Increase by a factor of 10'
            ],
            correctAnswer: 2,
            explanation: 'Percent ionization $\\propto 1/\\sqrt{C}$. Decreasing $C$ by 10× increases percent ionization by $\\sqrt{10} \\approx 3.2\\times$.'
          },
          {
            question: 'For the triprotic acid $H_3PO_4$, the pH of a solution is determined primarily by:',
            options: [
              '$K_{a3}$ (the smallest)',
              '$K_{a1}$ (the largest)',
              'The average of all three $K_a$ values',
              'The product $K_{a1} \\times K_{a2} \\times K_{a3}$'
            ],
            correctAnswer: 1,
            explanation: '$K_{a1} \\gg K_{a2} \\gg K_{a3}$, so virtually all the $H^+$ comes from the first dissociation. Use only $K_{a1}$ for pH calculations.'
          },
          {
            question: 'For $H_2CO_3$, why is $K_{a2} \\ll K_{a1}$?',
            options: [
              'The molecule gets bigger',
              'It\'s harder to remove $H^+$ from the negatively charged $HCO_3^-$',
              '$K_{a2}$ includes water',
              'The temperature changes'
            ],
            correctAnswer: 1,
            explanation: 'Removing a positive $H^+$ from a negatively charged $HCO_3^-$ requires overcoming electrostatic attraction, making the second dissociation much less favorable.'
          }
        ]
      }
    },
    {
      id: 'wk5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Percent Ionization & Polyprotic Calculations** 🧮

1) What is the percent ionization of 0.050 M $HF$ ($K_a = 6.8 \\times 10^{-4}$)? (1 decimal place)

2) Find the pH of 0.10 M $H_3PO_4$ ($K_{a1} = 7.5 \\times 10^{-3}$). Use only the first dissociation. (2 decimal places)

3) For $H_2CO_3$ ($K_{a1} = 4.3 \\times 10^{-7}$, $K_{a2} = 4.7 \\times 10^{-11}$), what is $[CO_3^{2-}]$ in a 0.10 M solution? (Enter in scientific notation, e.g. 4.7e-11)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11.4', '1.62', '4.7e-11'],
        hint1: '$[H^+] = \\sqrt{K_a \\cdot C}$, then divide by $C$ and multiply by 100.',
        hint2: '$[H^+] = \\sqrt{(7.5 \\times 10^{-3})(0.10)}$. Check 5% rule — may need quadratic.',
        hint3: 'For diprotic acids, $[\\text{second anion}] \\approx K_{a2}$ regardless of initial concentration!',
        explanation: '1) $[H^+] = \\sqrt{(6.8 \\times 10^{-4})(0.050)} = 5.83 \\times 10^{-3}$; $\\% = (5.83 \\times 10^{-3}/0.050) \\times 100 = 11.7\\%$. Since >5%, use quadratic: $x = 5.7 \\times 10^{-3}$; $\\% = 11.4\\%$. 2) $x = \\sqrt{7.5 \\times 10^{-4}} = 0.0274$. Check: $27.4\\%$ > 5%, use quadratic: $x = 0.024$; $pH = 1.62$. 3) For any diprotic acid, $[\\text{second anion}] = K_{a2} = 4.7 \\times 10^{-11}$ M.'
      }
    },
    {
      id: 'wk5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Advanced Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As a weak acid is diluted, its percent ionization',
            options: ['increases', 'decreases', 'stays constant', 'first increases then decreases']
          },
          {
            label: 'For a diprotic acid, $[\\text{second anion}]$ approximately equals',
            options: ['$K_{a1}$', '$K_{a2}$', '$K_{a1} \\times K_{a2}$', 'zero']
          },
          {
            label: 'The $K_a$ of $HSO_4^-$ is the same as',
            options: ['$K_{a1}$ of $H_2SO_4$', '$K_{a2}$ of $H_2SO_4$', '$K_b$ of $SO_4^{2-}$', '$K_w$']
          }
        ],
        correctAnswers: ['increases', '$K_{a2}$', '$K_{a2}$ of $H_2SO_4$'],
        hint1: 'Le Chatelier: dilution favors more ions.',
        hint2: 'This is a remarkable simplification for diprotic acids.',
        hint3: '$HSO_4^-$ is the intermediate species in the dissociation of $H_2SO_4$.',
        explanation: 'Dilution increases percent ionization. For diprotic acids, $[\\text{second anion}] \\approx K_{a2}$ (a useful shortcut). $HSO_4^-$ dissociation corresponds to $K_{a2}$ of $H_2SO_4$.'
      }
    },
    {
      id: 'wk5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Percent Ionization & Polyprotic Acids** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At what concentration does the 5% approximation begin to fail for acetic acid ($K_a = 1.8 \\times 10^{-5}$)?',
            options: [
              'Below about 0.0072 M',
              'Above 1.0 M',
              'At exactly 0.10 M',
              'It never fails'
            ],
            correctAnswer: 0,
            explanation: 'The approximation fails when $C/K_a < 400$: $C < 400 \\times 1.8 \\times 10^{-5} = 0.0072$ M. Below this concentration, use the quadratic formula.'
          },
          {
            question: 'For a 0.10 M solution of $H_2SO_3$ ($K_{a1} = 1.5 \\times 10^{-2}$), the pH should be calculated using:',
            options: [
              'Both $K_{a1}$ and $K_{a2}$',
              'Only $K_{a1}$ (and possibly the quadratic formula)',
              'Only $K_{a2}$',
              'The average of $K_{a1}$ and $K_{a2}$'
            ],
            correctAnswer: 1,
            explanation: 'pH depends primarily on $K_{a1}$. Since $K_{a1} = 1.5 \\times 10^{-2}$ is relatively large and $C/K_{a1} = 6.7 < 400$, you\'ll need the quadratic formula, but only $K_{a1}$ matters for pH.'
          }
        ]
      }
    }
  ]
}
