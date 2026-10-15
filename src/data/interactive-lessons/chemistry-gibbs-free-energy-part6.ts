export const chemGibbsFreeEnergyPart6Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop — Gibbs Free Energy

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
      id: 'gf6-strategy-review',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Flowchart

> 💡 **Tip:** On the AP exam, identify what you're **given** first, then choose the correct equation.

### What Are You Given? → What Method to Use?

| Given | Method |
|-------|--------|
| $\\Delta H$ and $\\Delta S$ (or $S°$) | $\\Delta G = \\Delta H - T\\Delta S$ |
| $\\Delta G°_f$ values | $\\Delta G° = \\sum \\Delta G°_f(\\text{prod}) - \\sum \\Delta G°_f(\\text{react})$ |
| $K$ (equilibrium constant) | $\\Delta G° = -RT\\ln K$ |
| $\\Delta G°$ (or $K$) and a current mixture | Find $K$, then compare $Q$ with $K$ |


---

### Common Unit Traps

> ⚠️ **Warning:** Unit mismatches are the #1 source of errors in Gibbs free energy calculations!

| Quantity | Common Units | Watch Out |
|----------|-------------|-----------|
| $\\Delta H$ | kJ | Convert to J if using $R = 8.314$ J/(mol·K) |
| $\\Delta S$ | J/K | Convert to kJ/K if combining with ΔH in kJ |
| $\\Delta G$ | kJ or J | Match with $R$ |
| $T$ | K | Never use °C in these equations! |
      `
    },
    {
      id: 'gf6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed ΔG Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a reaction: ΔH° = −200 kJ, ΔS° = +100 J/K. At 298 K, ΔG° is:',
            options: [
              '−229.8 kJ',
              '−170.2 kJ',
              '−200.0 kJ',
              '−30,000 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G° = \\Delta H° - T\\Delta S° = -200 - (298)(0.100) = -200 - 29.8 = -229.8$ kJ. Remember to convert ΔS to kJ/K! Adding the $T\\Delta S$ term gives −170.2 kJ, ignoring entropy gives −200.0 kJ, and leaving ΔS in J/K gives $-200 - 29{,}800 \\approx -30{,}000$ kJ.'
          },
          {
            question: 'A reaction has K = $2.5 \\times 10^{-4}$ at 298 K. ΔG° is:',
            options: [
              '−20.5 kJ',
              '+20.5 kJ',
              '+8.9 kJ',
              '+20,553 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -RT\\ln K = -(8.314)(298)\\ln(2.5 \\times 10^{-4}) = -(2478)(-8.294) = +20{,}553$ J $= +20.5$ kJ. Dropping the minus sign gives −20.5 kJ, using $\\log$ instead of $\\ln$ gives +8.9 kJ, and reporting the joule value as kilojoules gives +20,553 kJ.'
          },
          {
            question: 'A reaction has ΔG° = −15 kJ at 300 K, so K ≈ 410. A mixture has Q = 100. Which way does the net reaction proceed?',
            options: [
              'Forward, because Q < K',
              'Reverse, because Q < K',
              'Neither, because ΔG° is negative',
              'Reverse, because Q is greater than 1'
            ],
            correctAnswer: 0,
            explanation: '$K = e^{15{,}000/(8.314 \\times 300)} = e^{6.01} \\approx 410$. Because $Q = 100 < K$, the mixture has too little product and the net reaction proceeds forward until $Q = K$. Q < K never means reverse, a negative ΔG° does not stop a mixture from shifting, and comparing Q with 1 instead of K is a common mistake.'
          }
        ]
      }
    },
    {
      id: 'gf6-calculation-workshop',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Calculation Workshop** 🧮

**1)** A reaction has $\\Delta H° = +50$ kJ and $\\Delta S° = +150$ J/K. What is $\\Delta G°$ at 400 K? (in kJ)

**2)** For the reaction in (1), what is $K$ at 400 K? (round to nearest whole number; use $e^{3.01} \\approx 20$)

**3)** A reaction has $\\Delta G° = -20$ kJ/mol. What is $K$ at 298 K? (round to nearest thousand; use $e^{8.07} \\approx 3200$)
      `,
      exercise: {
        questions: [{ question: '1)', answer: '-10', acceptableAnswers: ['-10'] }, { question: '2)', answer: '20', acceptableAnswers: ['20', '20.2'] }, { question: '3)', answer: '3000', acceptableAnswers: ['3000', '3200', '3.2e3'] }],
        hint1: '$\\Delta G° = 50 - (400)(0.150)$',
        hint2: '$K = e^{-\\Delta G°/(RT)} = e^{10000/(8.314 \\times 400)}$',
        hint3: '$K = e^{20000/(8.314 \\times 298)} = e^{8.07}$',
        explanation: '1) $\\Delta G° = 50 - 60 = -10$ kJ. 2) $K = e^{10000/(3326)} = e^{3.01} \\approx 20$. 3) $K = e^{20000/2478} = e^{8.07} \\approx 3200$, which rounds to 3000 to the nearest thousand.'
      }
    },
    {
      id: 'gf6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem Strategy Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find ΔG° from a table of ΔG°_f values, use',
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'ΔG° = −RT ln K', 'a comparison of Q with K']
          },
          {
            label: 'To find K from ΔG°, use',
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'K = e^{−ΔG°/(RT)}', 'T = ΔH/ΔS']
          },
          {
            label: 'To determine which way a particular mixture will shift, use',
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'a comparison of Q with K', 'T = ΔH/ΔS']
          },
          {
            label: 'To find the crossover temperature between spontaneous and nonspontaneous, use',
            options: ['T = ΔH/ΔS', 'T = ΔG/ΔS', 'T = −RT ln K', 'T = ΔS/ΔH']
          }
        ],
        correctAnswers: ['Σ products − Σ reactants', 'K = e^{−ΔG°/(RT)}', 'a comparison of Q with K', 'T = ΔH/ΔS'],
        hint1: 'Same pattern as ΔH° and ΔS° calculations.',
        hint2: 'Rearrange ΔG° = −RT ln K.',
        hint3: 'Q describes the current mixture; K describes equilibrium.',
        explanation: 'Formation values: products − reactants. K from ΔG°: K = e^{−ΔG°/(RT)}. Direction of shift: compare Q with K. Crossover: set ΔG = 0, T = ΔH/ΔS.'
      }
    },
    {
      id: 'gf6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student calculates ΔG° = −20 kJ/mol at 298 K but finds Q = $10^{8}$. The forward reaction is:',
            options: [
              'Favored, because ΔG° < 0 sets the direction',
              'Reverse, because Q is far greater than K',
              'At equilibrium, since both Q and K are very large',
              'Favored, because a large Q pushes it forward'
            ],
            correctAnswer: 1,
            explanation: '$K = e^{20000/2478} = e^{8.07} \\approx 3200$. Since $Q = 10^8 \\gg K \\approx 3200$, the mixture has far more product than at equilibrium, so the net reaction proceeds in reverse until Q = K.'
          },
          {
            question: 'Which of these will NOT change the value of ΔG° for a reaction?',
            options: [
              'Changing the temperature of the system',
              'Changing the concentrations of reactants',
              'Reversing the direction of the reaction',
              'Doubling all of the coefficients'
            ],
            correctAnswer: 1,
            explanation: 'ΔG° is defined at standard conditions (1 atm, 1 M) and depends on temperature (via ΔG° = ΔH° − TΔS°). Reversing the reaction flips the sign of ΔG°, and doubling the coefficients doubles it. Changing concentrations changes Q and therefore ΔG, but not ΔG°.'
          }
        ]
      }
    }
  ]
}
