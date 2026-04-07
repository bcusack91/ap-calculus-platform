export const chemGibbsFreeEnergyPart6Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop — Gibbs Free Energy

**Part 6 of 7 — Practice and Integration**

This workshop brings together all the Gibbs free energy tools: calculating ΔG from ΔH and ΔS, using formation values, the four sign cases, ΔG°-K relationships, and non-standard conditions.
      `
    },
    {
      id: 'gf6-strategy-review',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Flowchart

### What Are You Given? → What Method to Use?

| Given | Method |
|-------|--------|
| $\\Delta H$ and $\\Delta S$ (or $S°$) | $\\Delta G = \\Delta H - T\\Delta S$ |
| $\\Delta G°_f$ values | $\\Delta G° = \\sum \\Delta G°_f(\\text{prod}) - \\sum \\Delta G°_f(\\text{react})$ |
| $K$ (equilibrium constant) | $\\Delta G° = -RT\\ln K$ |
| $\\Delta G°$ and $Q$ | $\\Delta G = \\Delta G° + RT\\ln Q$ |


---

### Common Unit Traps

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
              '−100 kJ',
              '+29,600 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G° = \\Delta H° - T\\Delta S° = -200 - (298)(0.100) = -200 - 29.8 = -229.8$ kJ. Remember to convert ΔS to kJ/K!'
          },
          {
            question: 'A reaction has K = 2.5 × 10⁻⁴ at 298 K. ΔG° is:',
            options: [
              '−20.5 kJ',
              '+20.5 kJ',
              '−8.3 kJ',
              '+8.3 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -RT\\ln K = -(8.314)(298)\\ln(2.5 \\times 10^{-4}) = -(2478)(-8.294) = +20{,}553$ J $= +20.5$ kJ.'
          },
          {
            question: 'A reaction has ΔG° = −15 kJ at 300 K. Q = 100. Is the forward reaction spontaneous?',
            options: [
              'Yes — ΔG = −15 kJ (Q doesn\'t matter)',
              'Yes — ΔG = −3.5 kJ',
              'No — ΔG = +8.5 kJ',
              'No — ΔG = −26.5 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = -15{,}000 + (8.314)(300)\\ln(100) = -15{,}000 + (2494)(4.605) = -15{,}000 + 11{,}483 = -3{,}517$ J $= -3.5$ kJ. Still spontaneous, but less so.'
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
        boxes: 3,
        correctAnswers: ['-10', '20', '3000'],
        hint1: '$\\Delta G° = 50 - (400)(0.150)$',
        hint2: '$K = e^{-\\Delta G°/(RT)} = e^{10000/(8.314 \\times 400)}$',
        hint3: '$K = e^{20000/(8.314 \\times 298)} = e^{8.07}$',
        explanation: '1) $\\Delta G° = 50 - 60 = -10$ kJ. 2) $K = e^{10000/(3326)} = e^{3.01} \\approx 20$. 3) $K = e^{20000/2478} = e^{8.07} \\approx 3200 \\approx 3000$.'
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
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'ΔG° = −RT ln K', 'ΔG = ΔG° + RT ln Q']
          },
          {
            label: 'To find K from ΔG°, use',
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'K = e^{−ΔG°/(RT)}', 'ΔG = ΔG° + RT ln Q']
          },
          {
            label: 'To determine if a reaction proceeds forward at non-standard conditions, use',
            options: ['ΔG = ΔH − TΔS', 'Σ products − Σ reactants', 'ΔG° = −RT ln K', 'ΔG = ΔG° + RT ln Q']
          },
          {
            label: 'To find the crossover temperature between spontaneous and nonspontaneous, use',
            options: ['T = ΔH/ΔS', 'T = ΔG/ΔS', 'T = −RT ln K', 'T = ΔG° + RT ln Q']
          }
        ],
        correctAnswers: ['Σ products − Σ reactants', 'K = e^{−ΔG°/(RT)}', 'ΔG = ΔG° + RT ln Q', 'T = ΔH/ΔS'],
        hint1: 'Same pattern as ΔH° and ΔS° calculations.',
        hint2: 'Rearrange ΔG° = −RT ln K.',
        hint3: 'This is the equation that accounts for current conditions via Q.',
        explanation: 'Formation values: products − reactants. K from ΔG°: K = e^{−ΔG°/(RT)}. Non-standard: ΔG = ΔG° + RT ln Q. Crossover: set ΔG = 0, T = ΔH/ΔS.'
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
            question: 'A student calculates ΔG° = −20 kJ/mol at 298 K but finds Q = 10⁸. The forward reaction is:',
            options: [
              'Still spontaneous because ΔG° < 0',
              'Nonspontaneous because Q is very large (past equilibrium)',
              'At equilibrium',
              'Impossible to determine'
            ],
            correctAnswer: 1,
            explanation: '$K = e^{20000/2478} = e^{8.07} \\approx 3200$. Since $Q = 10^8 \\gg K \\approx 3200$, the system is past equilibrium. $\\Delta G > 0$, so the reverse reaction is spontaneous.'
          },
          {
            question: 'Which of these will NOT change the value of ΔG° for a reaction?',
            options: [
              'Changing the temperature',
              'Changing the concentrations of reactants',
              'Neither — both change ΔG°',
              'Both — neither changes ΔG°'
            ],
            correctAnswer: 1,
            explanation: 'ΔG° is defined at standard conditions (1 atm, 1 M) and depends on temperature (via ΔG° = ΔH° − TΔS°). Changing concentrations changes Q and therefore ΔG, but not ΔG°.'
          }
        ]
      }
    }
  ]
}
