export const chemReactionQuotientLeChatPart2Data = {
  topicSlug: 'reaction-quotient-le-chatelier',
  sections: [
    {
      id: 'ql2-intro',
      type: 'text' as const,
      content: `
# 🔄 Comparing Q and K

**Part 2 of 7 — Predicting the Direction of Shift**

By comparing Q to K, you can predict exactly which direction a reaction will shift to reach equilibrium. This is one of the most powerful tools in equilibrium chemistry.
      `
    },
    {
      id: 'ql2-three-cases',
      type: 'text' as const,
      content: `
## The Three Cases

### Case 1: $Q < K$ — Shift Right (→)

$$Q < K \\implies \\frac{\\text{products}}{\\text{reactants}} < \\text{equilibrium ratio}$$

- There are **too few products** (or too many reactants)
- The system shifts **right** (forward) to make more products
- Q increases until $Q = K$

### Case 2: $Q > K$ — Shift Left (←)

$$Q > K \\implies \\frac{\\text{products}}{\\text{reactants}} > \\text{equilibrium ratio}$$

- There are **too many products** (or too few reactants)
- The system shifts **left** (reverse) to make more reactants
- Q decreases until $Q = K$

### Case 3: $Q = K$ — At Equilibrium

$$Q = K \\implies \\text{system is at equilibrium}$$

- No net change occurs
- Forward and reverse rates are equal

### Memory Aid

Think of Q as "chasing" K:
- $Q < K$: Q needs to increase → more products → shift right
- $Q > K$: Q needs to decrease → more reactants → shift left
      `
    },
    {
      id: 'ql2-visual',
      type: 'text' as const,
      content: `
## Visual Summary

$$\\underbrace{Q = 0}_{\\text{pure reactants}} \\quad \\xleftarrow{\\text{shift right}} \\quad Q < K \\quad \\longrightarrow \\quad \\underbrace{Q = K}_{\\text{EQUILIBRIUM}} \\quad \\longleftarrow \\quad Q > K \\quad \\xrightarrow{\\text{shift left}} \\quad \\underbrace{Q = \\infty}_{\\text{pure products}}$$

### Worked Example

$\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$, $K_c = 5.0$ at 700 K

Given: $[\\text{CO}] = 0.10$, $[\\text{H}_2\\text{O}] = 0.10$, $[\\text{CO}_2] = 0.20$, $[\\text{H}_2] = 0.20$ M

$$Q_c = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]} = \\frac{(0.20)(0.20)}{(0.10)(0.10)} = \\frac{0.04}{0.01} = 4.0$$

Since $Q = 4.0 < K = 5.0$:
- The system shifts **right** to produce more CO₂ and H₂
- $[\\text{CO}]$ and $[\\text{H}_2\\text{O}]$ will decrease
- $[\\text{CO}_2]$ and $[\\text{H}_2]$ will increase
      `
    },
    {
      id: 'ql2-predict-shift',
      type: 'multiple-choice' as const,
      content: `
**Predicting the Direction of Shift** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $Q = 100$ and $K = 10$, the reaction will:',
            options: [
              'Shift right to make more products',
              'Shift left to make more reactants',
              'Remain at equilibrium',
              'Not react at all'
            ],
            correctAnswer: 1,
            explanation: '$Q > K$ means too many products relative to equilibrium. The system shifts left (reverse direction) to consume products and form reactants until $Q = K$.'
          },
          {
            question: 'A reaction mixture has $Q = 0.001$ and $K = 0.001$. What happens?',
            options: [
              'Shifts right',
              'Shifts left',
              'Nothing — the system is at equilibrium',
              'The reaction reverses'
            ],
            correctAnswer: 2,
            explanation: '$Q = K$, so the system is at equilibrium. No net change occurs, regardless of the numerical value.'
          },
          {
            question: 'Starting with only reactants (no products) for a reaction with $K = 10^6$:',
            options: [
              'Q = K, so the system is already at equilibrium',
              'Q = 0 < K, so the reaction shifts right (strongly)',
              'Q > K, so the reaction shifts left',
              'The reaction will not proceed'
            ],
            correctAnswer: 1,
            explanation: 'With no products, $Q = 0$. Since $Q < K$, the system shifts right. With $K = 10^6$, the reaction will shift strongly to the right, producing mostly products.'
          }
        ]
      }
    },
    {
      id: 'ql2-calculations',
      type: 'input-boxes' as const,
      content: `
**Q vs K Calculations** 🧮

For: $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, $K_c = 0.36$ at 100°C

Current state: $[\\text{N}_2\\text{O}_4] = 0.50$ M, $[\\text{NO}_2] = 0.20$ M

1) Calculate $Q_c$. (Enter as a decimal to 2 places)

2) Does the reaction shift right or left? (Enter "right" or "left")

3) At equilibrium, will $[\\text{NO}_2]$ be higher or lower than 0.20 M? (Enter "higher" or "lower")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.08', 'right', 'higher'],
        hint1: '$Q_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\frac{(0.20)^2}{0.50}$',
        hint2: '$Q = 0.08 < K = 0.36$, so the reaction shifts right.',
        hint3: 'Shifting right means producing more NO₂.',
        explanation: '1) $Q = (0.20)^2/0.50 = 0.04/0.50 = 0.08$. 2) $Q = 0.08 < K = 0.36$, so shift right (toward products). 3) Shifting right produces more NO₂, so $[\\text{NO}_2]$ increases above 0.20 M.'
      }
    },
    {
      id: 'ql2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Q vs K — Quick Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When $Q < K$, the system needs more',
            options: ['reactants', 'products', 'catalyst', 'inert gas']
          },
          {
            label: 'When $Q > K$, Q must _____ to reach equilibrium',
            options: ['increase', 'decrease', 'stay the same', 'become negative']
          },
          {
            label: 'Adding more product to a system at equilibrium makes Q',
            options: ['increase (Q > K)', 'decrease (Q < K)', 'stay the same', 'equal to zero']
          },
          {
            label: 'Removing reactant from a system at equilibrium makes Q',
            options: ['increase (Q > K)', 'decrease (Q < K)', 'stay the same', 'undefined']
          }
        ],
        correctAnswers: [
          'products',
          'decrease',
          'increase (Q > K)',
          'increase (Q > K)'
        ],
        hint1: '$Q < K$: the product/reactant ratio is too small.',
        hint2: '$Q > K$: Q must decrease (shift left) until $Q = K$.',
        hint3: 'Adding product increases the numerator of Q; removing reactant decreases the denominator.',
        explanation: 'When $Q < K$, more products are needed (shift right). When $Q > K$, Q decreases via shift left. Adding product increases Q above K. Removing reactant increases Q above K (smaller denominator → larger ratio).'
      }
    },
    {
      id: 'ql2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Comparing Q and K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{A}(g) \\rightleftharpoons \\text{B}(g)$, $K = 4.0$. If $[\\text{A}] = 0.50$ M and $[\\text{B}] = 1.0$ M, the system will:',
            options: [
              'Shift right because Q < K',
              'Shift left because Q > K',
              'Stay at equilibrium because Q = K',
              'Not react'
            ],
            correctAnswer: 0,
            explanation: '$Q = [\\text{B}]/[\\text{A}] = 1.0/0.50 = 2.0$. Since $Q = 2.0 < K = 4.0$, the system shifts right to produce more B.'
          },
          {
            question: 'As a reaction shifts right to approach equilibrium (Q < K), which is true?',
            options: [
              'Q decreases toward K',
              'Q increases toward K',
              'K increases toward Q',
              'Both Q and K change'
            ],
            correctAnswer: 1,
            explanation: 'When $Q < K$, the reaction shifts right, producing more products and consuming reactants. This increases the product/reactant ratio, so Q increases until $Q = K$. K stays constant (temperature is constant).'
          }
        ]
      }
    }
  ]
}
