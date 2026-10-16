export const chemWeakAcidsBasesKaKbPart5Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk5-intro',
      type: 'text' as const,
      content: `# 📈 Percent Ionization and Polyprotic Acids

**Part 5 of 7 — Advanced Weak Acid Concepts**

---

### Topics in This Part

| Section |
|---------|
| ⚛️ Percent Ionization |
| Key Trend |
| Mathematical Proof |
| Example: 0.10 M vs 0.010 M Acetic Acid |
| 🧪 Polyprotic Acids |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'wk5-percent-ionization',
      type: 'text' as const,
      content: `
## ⚛️ Percent Ionization

$$\\boxed{\\text{Percent ionization} = \\frac{[H^+]_{eq}}{[HA]_0} \\times 100\\%}$$


---

### Key Trend

> 🔑 **Key Concept:** For a given weak acid, **diluting** the solution **increases** percent ionization.

Why? Le Chatelier\'s principle: dilution shifts the equilibrium $HA \\rightleftharpoons H^+ + A^-$ to the **right** (toward more ions, since there are more moles of product than reactant).


---

### Mathematical Proof

$$[H^+] = \\sqrt{K_a \\cdot C}$$

$$\\text{\\% ionization} = \\frac{\\sqrt{K_a \\cdot C}}{C} \\times 100 = \\frac{\\sqrt{K_a}}{\\sqrt{C}} \\times 100$$

As $C$ decreases, $\\frac{1}{\\sqrt{C}}$ increases, so percent ionization increases!


---

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
## 🧪 Polyprotic Acids

Polyprotic acids can donate **more than one proton**. Each dissociation has its own $K_a$.


---

### Diprotic Acid Example: $H_2CO_3$

$$H_2CO_3 \\rightleftharpoons H^+ + HCO_3^- \\qquad K_{a1} = 4.3 \\times 10^{-7}$$

$$HCO_3^- \\rightleftharpoons H^+ + CO_3^{2-} \\qquad K_{a2} = 4.7 \\times 10^{-11}$$


---

### Triprotic Acid Example: $H_3PO_4$

$$H_3PO_4 \\rightleftharpoons H^+ + H_2PO_4^- \\qquad K_{a1} = 7.5 \\times 10^{-3}$$

$$H_2PO_4^- \\rightleftharpoons H^+ + HPO_4^{2-} \\qquad K_{a2} = 6.2 \\times 10^{-8}$$

$$HPO_4^{2-} \\rightleftharpoons H^+ + PO_4^{3-} \\qquad K_{a3} = 4.8 \\times 10^{-13}$$


---

### Critical Rule

$$\\boxed{K_{a1} \\gg K_{a2} \\gg K_{a3}}$$

Each successive dissociation is **much weaker** because it\'s harder to remove $H^+$ from an increasingly negative ion.


---

### Which Species Dominate?

Because each step is so much weaker than the one before, a solution of a weak diprotic acid such as $H_2CO_3$ contains:

| Species | Relative amount |
|---------|-----------------|
| $H_2CO_3$ | Largest (mostly un-ionized) |
| $H_3O^+$ and $HCO_3^-$ | Small, roughly equal |
| $CO_3^{2-}$ | Very small |

> 💡 **Tip:** Nearly all the $H_3O^+$ comes from the first ionization. Reason qualitatively about which species are present in large or small amounts; calculating the concentration of every species in a polyprotic solution is not on the AP exam (CED 8.5 exclusion).
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
              'Stay the same; $K_a$ is fixed',
              'Increase by a factor of about 3.2',
              'Increase by a factor of 10'
            ],
            correctAnswer: 2,
            explanation: 'Percent ionization $\\propto 1/\\sqrt{C}$. Decreasing $C$ by 10× increases percent ionization by $\\sqrt{10} \\approx 3.2\\times$. $K_a$ does stay the same, but the fraction ionized does not; a factor of 10 forgets the square root.'
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
            explanation: '$K_{a1} \\gg K_{a2} \\gg K_{a3}$, so virtually all the $H^+$ comes from the first dissociation. The later steps add a negligible amount of $H^+$, so neither the smallest constant, an average, nor a product describes the pH.'
          },
          {
            question: 'For $H_2CO_3$, why is $K_{a2} \\ll K_{a1}$?',
            options: [
              'The ion $HCO_3^-$ is larger, so its O–H bond is stronger',
              'Removing $H^+$ from the anion $HCO_3^-$ is harder',
              '$K_{a2}$ includes $[H_2O]$ while $K_{a1}$ does not',
              '$H^+$ from the first step pushes the second one backward'
            ],
            correctAnswer: 1,
            explanation: 'Removing a positive $H^+$ from a negatively charged $HCO_3^-$ requires overcoming electrostatic attraction, making the second dissociation much less favorable. $H^+$ from the first step does suppress how far the second step goes (common-ion effect), but it does not change the constant $K_{a2}$; water never appears in either $K_a$ expression.'
          }
        ]
      }
    },
    {
      id: 'wk5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Percent Ionization Calculations** 🧮

**1)** What is the percent ionization of 0.050 M $HF$ ($K_a = 6.8 \\times 10^{-4}$)? (1 decimal place)

**2)** A 0.20 M $HNO_2$ solution has $[H_3O^+] = 9.4 \\times 10^{-3}$ M at equilibrium. What is the percent ionization? (1 decimal place)

**3)** If the HF solution in (1) is diluted to 0.0050 M, does its percent ionization **increase** or **decrease**?
      `,
      exercise: {
        questions: [{ question: '1)', answer: '11.0', acceptableAnswers: ['11.0'] }, { question: '2)', answer: '4.7', acceptableAnswers: ['4.7', '4.70'] }, { question: '3)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }],
        hint1: '$[H^+] = \\sqrt{K_a \\cdot C}$, then divide by $C$ and multiply by 100.',
        hint2: 'Percent ionization = (equilibrium $[H_3O^+]$ / initial concentration) × 100.',
        hint3: 'Dilution shifts the ionization equilibrium toward more ions.',
        explanation: '1) $[H^+] = \\sqrt{(6.8 \\times 10^{-4})(0.050)} = 5.83 \\times 10^{-3}$; $\\% = (5.83 \\times 10^{-3}/0.050) \\times 100 = 11.7\\%$. Since >5%, use the quadratic $x^2 + (6.8 \\times 10^{-4})x - 3.4 \\times 10^{-5} = 0$: $x = 5.50 \\times 10^{-3}$; $\\% = 11.0\\%$. 2) $(9.4 \\times 10^{-3}/0.20) \\times 100 = 4.7\\%$ (CED 8.3.A.5). 3) Increase: percent ionization rises as a weak acid is diluted (roughly in proportion to $1/\\sqrt{C}$).'
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
            label: 'Compared with $K_{a1}$, the value of $K_{a2}$ for a diprotic acid is',
            options: ['much larger', 'much smaller', 'exactly equal', 'always zero']
          },
          {
            label: 'The $K_a$ of $HSO_4^-$ is the same as',
            options: ['$K_{a1}$ of $H_{2}SO_{4}$', '$K_{a2}$ of $H_{2}SO_{4}$', '$K_{b}$ of $SO_{4}^{2-}$', '$K_{a1}$ × $K_{a2}$ of $H_{2}SO_{4}$']
          }
        ],
        correctAnswers: ['increases', 'much smaller', '$K_{a2}$ of $H_{2}SO_{4}$'],
        hint1: 'Le Chatelier: dilution favors more ions.',
        hint2: 'Is it easier or harder to remove $H^+$ from a negative ion?',
        hint3: '$HSO_4^-$ is the intermediate species in the dissociation of $H_2SO_4$.',
        explanation: 'Dilution increases percent ionization. $K_{a2} \\ll K_{a1}$ because the second proton must leave a negative ion. $HSO_4^-$ dissociation corresponds to $K_{a2}$ of $H_2SO_4$.'
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
            question: 'For 0.0010 M acetic acid ($K_a = 1.8 \\times 10^{-5}$), the small-x approximation gives $[H^+] = \\sqrt{K_a C} = 1.3 \\times 10^{-4}$ M. What does the 5% check show?',
            options: [
              'x is 13% of 0.0010 M, so the quadratic is needed',
              'x is 1.3% of 0.0010 M, so the approximation holds',
              'x is less than 0.0010 M, so the approximation holds',
              'x is 0.13% of 0.0010 M, so the approximation holds'
            ],
            correctAnswer: 0,
            explanation: '$(1.3 \\times 10^{-4} / 0.0010) \\times 100\\% = 13\\%$, well above 5%, so subtracting x from 0.0010 M cannot be ignored and the quadratic must be solved. Dilute weak acids ionize more, which is why the approximation fails here. 1.3% and 0.13% misplace the decimal point, and x being smaller than C only guarantees a positive concentration, not a valid approximation.'
          },
          {
            question: 'In a 0.10 M solution of the weak diprotic acid $H_2CO_3$, which species is present in the LOWEST concentration?',
            options: [
              '$H_2CO_3$',
              '$HCO_3^-$',
              '$H_3O^+$',
              '$CO_3^{2-}$'
            ],
            correctAnswer: 3,
            explanation: 'Most $H_2CO_3$ stays un-ionized, a small amount ionizes to $H_3O^+$ and $HCO_3^-$, and because $K_{a2} \\ll K_{a1}$ only a tiny fraction of $HCO_3^-$ ionizes further to $CO_3^{2-}$. So carbonate is the least abundant species.'
          }
        ]
      }
    }
  ]
}
