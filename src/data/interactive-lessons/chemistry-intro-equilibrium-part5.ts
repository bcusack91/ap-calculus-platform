export const chemIntroEquilibriumPart5Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Magnitude of K and Extent of Reaction

**Part 5 of 7 — What K Tells Us About the Reaction**

The numerical value of the equilibrium constant tells you how far a reaction proceeds toward products before reaching equilibrium. Understanding the magnitude of K is crucial for predicting whether products or reactants dominate at equilibrium.
      `
    },
    {
      id: 'ie5-large-k',
      type: 'text' as const,
      content: `
## Large K: Products Favored

When $K \\gg 1$ (say, $K > 10^3$):

$$K = \\frac{[\\text{products}]}{[\\text{reactants}]} \\gg 1$$

This means the **numerator** (products) is much larger than the **denominator** (reactants).

### Interpretation
- The reaction lies **far to the right**
- At equilibrium, mostly **products** are present
- The forward reaction is strongly favored
- The reaction goes "nearly to completion"

### Examples

| Reaction | $K$ | Interpretation |
|----------|-----|---------------|
| $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{H}_2\\text{O}(g)$ | $\\sim 10^{80}$ | Essentially complete |
| $\\text{Ag}^+(aq) + 2\\,\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq)$ | $1.7 \\times 10^7$ | Strong complex forms readily |
      `
    },
    {
      id: 'ie5-small-k',
      type: 'text' as const,
      content: `
## Small K: Reactants Favored

When $K \\ll 1$ (say, $K < 10^{-3}$):

$$K = \\frac{[\\text{products}]}{[\\text{reactants}]} \\ll 1$$

The **denominator** (reactants) is much larger than the **numerator** (products).

### Interpretation
- The reaction lies **far to the left**
- At equilibrium, mostly **reactants** remain
- The forward reaction barely proceeds
- Very little product forms

### Examples

| Reaction | $K$ | Interpretation |
|----------|-----|---------------|
| $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g)$ | $4.7 \\times 10^{-31}$ (at 25°C) | Virtually no NO at equilibrium |
| $2\\,\\text{HF}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{F}_2(g)$ | $\\sim 10^{-13}$ | HF very stable |

## Intermediate K

When $K \\approx 1$ (roughly $10^{-3} < K < 10^3$):
- Significant amounts of **both** reactants and products present
- Neither side is strongly favored
- The equilibrium position is roughly in the middle
      `
    },
    {
      id: 'ie5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Interpreting K Values** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has $K_c = 3.2 \\times 10^{-15}$. At equilibrium:',
            options: [
              'Mostly products are present',
              'Mostly reactants are present',
              'Equal amounts of products and reactants',
              'No reaction has occurred'
            ],
            correctAnswer: 1,
            explanation: '$K \\ll 1$ means reactants dominate at equilibrium. The reaction barely proceeds to the right.'
          },
          {
            question: 'Which reaction goes closest to completion?',
            options: [
              'Reaction A: $K = 2.5$',
              'Reaction B: $K = 1.0 \\times 10^{-8}$',
              'Reaction C: $K = 4.0 \\times 10^{12}$',
              'Reaction D: $K = 0.50$'
            ],
            correctAnswer: 2,
            explanation: '$K = 4.0 \\times 10^{12}$ is the largest value, meaning the equilibrium lies farthest to the right — nearly complete conversion to products.'
          },
          {
            question: 'If $K = 1.0$ for a reaction, then at equilibrium:',
            options: [
              'There are no products',
              'There are no reactants',
              'The concentrations of products and reactants are comparable',
              'The reaction is irreversible'
            ],
            correctAnswer: 2,
            explanation: 'When $K = 1$, the numerator (products) and denominator (reactants) of the equilibrium expression are equal, meaning comparable amounts of both are present.'
          }
        ]
      }
    },
    {
      id: 'ie5-temperature',
      type: 'text' as const,
      content: `
## K Depends on Temperature

The equilibrium constant is a **function of temperature only**.

### What Changes K?
- **Temperature** — the ONLY factor that changes K

### What Does NOT Change K?
- Changing concentrations
- Changing pressure/volume
- Adding a catalyst
- Adding an inert gas

These factors may shift the equilibrium **position** (where Q moves relative to K), but K itself remains constant at a given temperature.

### Temperature and K Direction

| Reaction Type | Increase T | K Changes |
|---------------|-----------|-----------|
| Exothermic ($\\Delta H < 0$) | Shifts left | K decreases |
| Endothermic ($\\Delta H > 0$) | Shifts right | K increases |

Think of heat as a "reactant" (endothermic) or "product" (exothermic).
      `
    },
    {
      id: 'ie5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**K Value Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A reaction with $K = 10^{10}$ is described as',
            options: ['reactant-favored', 'product-favored', 'at equal amounts', 'no reaction']
          },
          {
            label: 'Adding a catalyst to a system at equilibrium changes K by',
            options: ['increasing K', 'decreasing K', 'no change to K', 'doubling K']
          },
          {
            label: 'For an exothermic reaction, raising temperature causes K to',
            options: ['increase', 'decrease', 'stay the same', 'become zero']
          },
          {
            label: 'Changing the volume of the container at constant temperature causes K to',
            options: ['increase', 'decrease', 'stay the same', 'become negative']
          }
        ],
        correctAnswers: [
          'product-favored',
          'no change to K',
          'decrease',
          'stay the same'
        ],
        hint1: '$K \\gg 1$ means products dominate.',
        hint2: 'Catalysts speed up both forward and reverse reactions equally.',
        hint3: 'For exothermic reactions, think of heat as a product — adding heat shifts left.',
        explanation: '$K = 10^{10}$ is product-favored. Catalysts don\'t change K. For exothermic reactions, increasing T decreases K. Only temperature changes K — not pressure, volume, or catalysts.'
      }
    },
    {
      id: 'ie5-input-practice',
      type: 'input-boxes' as const,
      content: `
**K Magnitude Practice** 🧮

1) A reaction has $K = 2.0 \\times 10^{-20}$. Is the reaction product-favored or reactant-favored? (Enter "reactant-favored")

2) For the reaction $\\text{A} \\rightleftharpoons \\text{B}$, $K = 100$ at 300 K. If the reaction is exothermic and temperature increases to 400 K, does K increase or decrease? (Enter "decrease")

3) A catalyst is added to a reaction at equilibrium. Does the value of K change? (Enter "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reactant-favored', 'decrease', 'no'],
        hint1: '$K \\ll 1$ means the denominator (reactants) dominates.',
        hint2: 'Exothermic + higher temperature → heat is a "product" being added → shifts left → K decreases.',
        hint3: 'Catalysts do not change K — they only speed up the approach to equilibrium.',
        explanation: '1) $K = 2.0 \\times 10^{-20} \\ll 1$, so the reaction is reactant-favored. 2) For an exothermic reaction, increasing T shifts equilibrium left and decreases K. 3) Catalysts have no effect on K — they speed up both forward and reverse reactions equally.'
      }
    },
    {
      id: 'ie5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Magnitude of K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For an endothermic reaction, cooling the system will:',
            options: [
              'Increase K and shift right',
              'Decrease K and shift left',
              'Not change K',
              'Increase K and shift left'
            ],
            correctAnswer: 1,
            explanation: 'Endothermic: heat is a "reactant." Cooling removes heat, shifting left and decreasing K.'
          },
          {
            question: 'Which statement about K is correct?',
            options: [
              'K changes when concentration changes',
              'K changes when a catalyst is added',
              'K changes only with temperature',
              'K changes when pressure changes'
            ],
            correctAnswer: 2,
            explanation: 'The equilibrium constant K depends ONLY on temperature. Concentration, pressure, volume, and catalyst changes do not affect K.'
          }
        ]
      }
    }
  ]
}
