export const chemNernstEquationConcentrationPart6Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop — Nernst Equation

**Part 6 of 7 — Practice and Integration**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'ne6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Toolkit

### Which Equation to Use?

| Given | Want | Equation |
|-------|------|----------|
| $E°$, concentrations | $E$ | $E = E° - (0.0592/n)\\log Q$ |
| $E°$ | $K$ | $\\log K = nE°/0.0592$ |
| $K$ | $E°$ | $E° = (0.0592/n)\\log K$ |
| Same electrodes, different conc. | $E$ | $E = (0.0592/n)\\log([\\text{conc}]/[\\text{dilute}])$ |
| $E°$ | $\\Delta G°$ | $\\Delta G° = -nFE°$ |


---

> ⚠️ **Common Pitfalls:**
> 1. **Forgetting to exclude solids/liquids from Q**
> 2. **Using 0.0592 at temperatures other than 25°C**
> 3. **Confusing log and ln** ($\\ln K = 2.303\\log K$)
> 4. **Getting Q upside down** (products over reactants!)
      `
    },
    {
      id: 'ne6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed Nernst Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the cell Zn | Zn²⁺(0.10 M) || Cu²⁺(1.5 M) | Cu, E° = 1.10 V, n = 2. E at 25°C is approximately:',
            options: [
              '1.07 V',
              '1.13 V',
              '1.10 V',
              '0.97 V'
            ],
            correctAnswer: 1,
            explanation: '$Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}] = 0.10/1.5 = 0.0667$. $E = 1.10 - (0.0296)\\log(0.0667) = 1.10 - (0.0296)(-1.18) = 1.10 + 0.035 = 1.13$ V.'
          },
          {
            question: 'A concentration cell has [Ag⁺] = 0.0001 M and 1.0 M. n = 1. E is:',
            options: [
              '0.0592 V',
              '0.1184 V',
              '0.2368 V',
              '0.1776 V'
            ],
            correctAnswer: 2,
            explanation: '$E = (0.0592/1)\\log(1.0/0.0001) = 0.0592 \\times \\log(10^4) = 0.0592 \\times 4 = 0.2368$ V.'
          },
          {
            question: 'A cell has E° = 0.20 V and n = 1. K at 25°C is approximately:',
            options: [
              '10³·⁴ ≈ 2500',
              '10⁶·⁸ ≈ 6 × 10⁶',
              '10¹·⁷ ≈ 50',
              '10⁰·² ≈ 1.6'
            ],
            correctAnswer: 0,
            explanation: '$\\log K = (1)(0.20)/0.0592 = 3.38$. $K = 10^{3.38} \\approx 2400 \\approx 2500$.'
          }
        ]
      }
    },
    {
      id: 'ne6-calculation-workshop',
      type: 'input-boxes' as const,
      content: `
**Calculation Workshop** 🧮

**1)** $E° = 0.80$ V, $n = 1$, $Q = 0.001$ at 25°C. Calculate $E$. (to 3 significant figures)

**2)** A concentration cell: $[\\text{Cu}^{2+}] = 0.01$ M and $1.0$ M, $n = 2$. Calculate $E$. (to 3 significant figures)

**3)** $E° = 1.50$ V, $n = 3$. Calculate $\\log K$. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.978', '0.0592', '76.0'],
        hint1: '$E = 0.80 - (0.0592)\\log(0.001) = 0.80 - (0.0592)(-3)$',
        hint2: '$E = (0.0592/2)\\log(1.0/0.01) = (0.0296)(2)$',
        hint3: '$\\log K = (3)(1.50)/0.0592$',
        explanation: '1) $E = 0.80 + 0.178 = 0.978$ V. 2) $E = 0.0296 \\times 2 = 0.0592$ V. 3) $\\log K = 4.50/0.0592 = 76.0$.'
      }
    },
    {
      id: 'ne6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem Strategy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find cell voltage at non-standard conditions, use',
            options: ['E° = (0.0592/n) log K', 'E = E° − (0.0592/n) log Q', 'ΔG° = −nFE°', 'E°(cell) = E°(cathode) − E°(anode)']
          },
          {
            label: 'For a concentration cell with a 1000× ratio and n = 1, E equals',
            options: ['0.0592 V', '0.1184 V', '0.1776 V', '0.2368 V']
          },
          {
            label: 'If a cell has E° = 0, it is a',
            options: ['dead battery', 'concentration cell', 'fuel cell', 'primary battery']
          },
          {
            label: 'The complete thermodynamic triangle connects ΔG°, E°, and K. Knowing any one gives',
            options: ['only ΔG°', 'only K', 'the other two', 'nothing useful']
          }
        ],
        correctAnswers: ['E = E° − (0.0592/n) log Q', '0.1776 V', 'concentration cell', 'the other two'],
        hint1: 'The Nernst equation with Q for non-standard conditions.',
        hint2: '$E = 0.0592 \\times \\log(1000) = 0.0592 \\times 3$',
        hint3: 'E° = 0 when both half-reactions are identical.',
        explanation: 'Nernst equation for non-standard E. Concentration cell with 1000×: E = 0.0592 × 3 = 0.1776 V. E° = 0 for concentration cells. The triangle: any one quantity gives the other two.'
      }
    },
    {
      id: 'ne6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student measures E = 1.05 V for a cell with E° = 1.10 V and n = 2 at 25°C. Q is approximately:',
            options: [
              '0.02',
              '2',
              '50',
              '500'
            ],
            correctAnswer: 2,
            explanation: '$1.05 = 1.10 - (0.0296)\\log Q$. $0.05 = (0.0296)\\log Q$. $\\log Q = 1.69$. $Q = 10^{1.69} \\approx 49 \\approx 50$.'
          },
          {
            question: 'Which change would INCREASE the cell voltage of a Zn-Cu cell?',
            options: [
              'Increase [Zn²⁺] (product)',
              'Decrease [Cu²⁺] (reactant)',
              'Increase [Cu²⁺] (reactant)',
              'Add more Zn solid'
            ],
            correctAnswer: 2,
            explanation: 'Increasing [Cu²⁺] (a reactant in the cathode) decreases Q, which increases E. Adding solid Zn does not affect Q (solids are not in Q). Increasing products or decreasing reactants would increase Q and decrease E.'
          }
        ]
      }
    }
  ]
}
