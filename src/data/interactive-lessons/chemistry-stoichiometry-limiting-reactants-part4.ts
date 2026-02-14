export const chemStoichiometryLimitingReactantsPart4Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl4-intro',
      type: 'text' as const,
      content: `
# 📊 Theoretical, Actual, and Percent Yield

**Part 4 of 7 — How Efficient Is Your Reaction?**

In the real world, reactions rarely produce as much product as calculations predict. The **percent yield** measures how efficient a reaction actually is compared to the theoretical maximum.
      `
    },
    {
      id: 'sl4-definitions',
      type: 'text' as const,
      content: `
## Three Types of Yield

### Theoretical Yield
The **maximum** amount of product that could form based on stoichiometric calculations (assuming the limiting reactant is completely converted).

### Actual Yield
The amount of product **actually obtained** in the lab (measured experimentally).

### Percent Yield
The ratio of actual to theoretical yield, expressed as a percentage:

$$\\% \\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$$

### Key Facts

| Fact | Detail |
|------|--------|
| Percent yield is always ≤ 100% | You can\'t create more product than the theoretical maximum |
| 100% yield is ideal but rare | Side reactions, incomplete reactions, and losses reduce yield |
| Percent yield is unitless | It\'s a ratio — grams/grams cancels out |
      `
    },
    {
      id: 'sl4-why-less',
      type: 'text' as const,
      content: `
## Why Is Actual Yield Less Than Theoretical?

### Common Reasons for Reduced Yield

1. **Incomplete reactions** — not all reactant converts to product
2. **Side reactions** — reactants form unintended products
3. **Loss during transfer** — product sticks to glassware, spatulas, filter paper
4. **Impure reactants** — some of the starting material isn\'t what you think
5. **Equilibrium** — reversible reactions don\'t go to completion
6. **Evaporation** — volatile products may escape

### In Practice

- Industrial processes aim for yields of **60–90%**
- Pharmaceutical synthesis may involve many steps, each with <100% yield
- Multi-step synthesis: overall yield = product of individual yields
  - Example: 3 steps at 80% each → $0.80^3 = 0.512 = 51.2\\%$ overall
      `
    },
    {
      id: 'sl4-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

**Problem:** In the reaction $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$, a student starts with 54.0 g of Al ($M = 26.98$) and excess Cl₂. The student obtains 200.0 g of AlCl₃ ($M = 133.34$). What is the percent yield?

### Step 1: Find Theoretical Yield

Moles Al: $54.0 / 26.98 = 2.001$ mol

Moles AlCl₃ (theoretical): $2.001 \\times \\frac{2}{2} = 2.001$ mol

Grams AlCl₃ (theoretical): $2.001 \\times 133.34 = 266.8$ g

### Step 2: Calculate Percent Yield

$$\\% \\text{ yield} = \\frac{200.0}{266.8} \\times 100 = 75.0\\%$$

### Answer: 75.0%

This means 75% of the theoretical product was actually recovered. The remaining 25% was lost to various factors.
      `
    },
    {
      id: 'sl4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Percent Yield Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The theoretical yield is determined by:',
            options: [
              'Measuring the actual mass of product in the lab',
              'Stoichiometric calculations using the limiting reactant',
              'Averaging the results of multiple trials',
              'Dividing actual yield by percent yield'
            ],
            correctAnswer: 1,
            explanation: 'The theoretical yield is calculated using stoichiometry (grams → moles → mole ratio → moles → grams) based on the limiting reactant. It represents the maximum possible product.'
          },
          {
            question: 'A reaction has a theoretical yield of 50.0 g and an actual yield of 42.5 g. The percent yield is:',
            options: [
              '42.5%',
              '50.0%',
              '85.0%',
              '117.6%'
            ],
            correctAnswer: 2,
            explanation: '$\\% \\text{ yield} = \\frac{42.5}{50.0} \\times 100 = 85.0\\%$'
          },
          {
            question: 'A percent yield greater than 100% might indicate:',
            options: [
              'The reaction was very efficient',
              'The product is contaminated with impurities or water',
              'The limiting reactant was completely consumed',
              'Extra product was synthesized from nothing'
            ],
            correctAnswer: 1,
            explanation: 'A yield > 100% is physically impossible if the product is pure. It typically means the product contains impurities (like water or unreacted starting material) that add to the measured mass.'
          },
          {
            question: 'In a two-step synthesis where each step has 90% yield, the overall yield is:',
            options: [
              '90%',
              '81%',
              '180%',
              '45%'
            ],
            correctAnswer: 1,
            explanation: 'Overall yield = $0.90 \\times 0.90 = 0.81 = 81\\%$. Each step compounds the losses, so multi-step syntheses have progressively lower overall yields.'
          }
        ]
      }
    },
    {
      id: 'sl4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Percent Yield Calculations** 🧮

1) Theoretical yield = 80.0 g, actual yield = 68.0 g. Percent yield = ? (to 1 decimal place)

2) A student calculates a theoretical yield of 120.0 g and achieves 92% yield. What mass of product was obtained? (to 1 decimal place)

3) A reaction produces 35.0 g of product. If the percent yield is 70.0%, what was the theoretical yield? (to 1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['85.0', '110.4', '50.0'],
        hint1: '$\\% \\text{ yield} = (68.0/80.0) \\times 100$.',
        hint2: 'Actual = theoretical × (% yield / 100) = 120.0 × 0.92.',
        hint3: 'Theoretical = actual / (% yield / 100) = 35.0 / 0.70.',
        explanation: '1) $(68.0/80.0) \\times 100 = 85.0\\%$. 2) $120.0 \\times 0.92 = 110.4$ g. 3) $35.0 / 0.70 = 50.0$ g.'
      }
    },
    {
      id: 'sl4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Yield Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The percent yield formula is',
            options: ['(theoretical/actual) × 100', '(actual/theoretical) × 100', 'actual − theoretical', 'actual + theoretical']
          },
          {
            label: 'A reaction with 100% yield means',
            options: ['all reactant became product with no losses', 'twice as much product was formed', 'no reaction occurred', 'the reaction was exothermic']
          },
          {
            label: 'The actual yield is always measured in the',
            options: ['textbook', 'periodic table', 'laboratory', 'balanced equation']
          },
          {
            label: 'If a 3-step synthesis has 90%, 80%, and 70% yields, the overall yield is approximately',
            options: ['80%', '50%', '240%', '20%']
          }
        ],
        correctAnswers: ['(actual/theoretical) × 100', 'all reactant became product with no losses', 'laboratory', '50%'],
        hint1: 'Actual goes on top, theoretical on the bottom.',
        hint2: 'Ideal case: no side reactions, no losses.',
        hint3: 'You physically measure what you collect.',
        explanation: 'Percent yield = (actual/theoretical) × 100. 100% means perfect conversion. Actual yield is experimentally measured. Overall: $0.90 \\times 0.80 \\times 0.70 = 0.504 \\approx 50\\%$.'
      }
    },
    {
      id: 'sl4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Percent Yield** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student reacts 10.0 g of Mg ($M = 24.31$) with excess HCl. The theoretical yield of MgCl₂ ($M = 95.21$) is 39.2 g, but only 33.3 g are collected. The percent yield is:',
            options: [
              '75.0%',
              '80.0%',
              '85.0%',
              '90.0%'
            ],
            correctAnswer: 2,
            explanation: '$\\% \\text{ yield} = \\frac{33.3}{39.2} \\times 100 = 85.0\\%$. Verification: $10.0/24.31 = 0.4114$ mol Mg → $0.4114$ mol MgCl₂ → $0.4114 \\times 95.21 = 39.2$ g (theoretical). $33.3/39.2 \\times 100 = 85.0\\%$.'
          },
          {
            question: 'If a reaction has a percent yield of 60% and you need 100 g of product, how many grams of theoretical yield must you aim for?',
            options: [
              '60 g',
              '100 g',
              '140 g',
              '167 g'
            ],
            correctAnswer: 3,
            explanation: 'Theoretical = actual needed / (% yield / 100) = 100 / 0.60 = 166.7 ≈ 167 g. You need to start with enough reactant to theoretically produce 167 g to actually get 100 g.'
          }
        ]
      }
    }
  ]
}
