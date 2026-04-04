export const chemEquilibriumConstantsPart6Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece6-intro',
      type: 'text' as const,
      content: `
# 🔍 The Reaction Quotient $Q$

**Part 6 of 7 — Reaction Quotient $Q$**

The reaction quotient $Q$ has the same form as $K$ but uses **current** concentrations instead of equilibrium concentrations. Comparing $Q$ to $K$ lets us predict which direction a reaction will shift to reach equilibrium.
      `
    },
    {
      id: 'ece6-q-definition',
      type: 'text' as const,
      content: `
## What Is $Q$?

For: $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$

$$Q_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$

This looks exactly like $K_c$ — but the concentrations plugged in are the **current** (non-equilibrium) values, not the equilibrium concentrations.

### Comparing $Q$ to $K$

| Comparison | Meaning | Shift Direction |
|-----------|---------|----------------|
| $Q < K$ | Too many reactants, not enough products | Shifts **right** (toward products) |
| $Q = K$ | System is at equilibrium | **No shift** |
| $Q > K$ | Too many products, not enough reactants | Shifts **left** (toward reactants) |

### Intuition

Think of it this way:
- $Q < K$: The system needs to make **more products** to reach equilibrium → forward reaction
- $Q > K$: The system has **too many products** → reverse reaction
- $Q = K$: Already at equilibrium → no net change
      `
    },
    {
      id: 'ece6-mcq-q',
      type: 'multiple-choice' as const,
      content: `
**Predicting the Shift** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a reaction with $K = 10$, if the current concentrations give $Q = 25$, which way will the reaction shift?',
            options: [
              'Toward products (right)',
              'Toward reactants (left)',
              'No shift — at equilibrium',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: '$Q = 25 > K = 10$, so there are too many products. The reaction shifts left (toward reactants) to decrease $Q$ until $Q = K$.'
          },
          {
            question: 'If $Q = 0$ for a reaction, what does this tell us?',
            options: [
              'The system is at equilibrium',
              'No products are present yet — the reaction will proceed forward',
              'The reaction is complete',
              'The reaction cannot occur'
            ],
            correctAnswer: 1,
            explanation: '$Q = 0$ means the numerator (products) is zero — no products have formed yet. Since $Q < K$ (for any $K > 0$), the reaction will shift right to form products.'
          },
          {
            question: 'For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, $K_c = 0.36$ at a certain temperature. If $[\\text{N}_2\\text{O}_4] = 0.10\\;\\text{M}$ and $[\\text{NO}_2] = 0.30\\;\\text{M}$, which direction will the reaction shift?',
            options: [
              'Right — $Q < K$',
              'Left — $Q > K$',
              'No shift — at equilibrium',
              'Cannot determine without pressure'
            ],
            correctAnswer: 1,
            explanation: '$Q = \\frac{(0.30)^2}{0.10} = \\frac{0.09}{0.10} = 0.90$. Since $Q = 0.90 > K = 0.36$, the reaction shifts left to consume products.'
          }
        ]
      }
    },
    {
      id: 'ece6-example-calc',
      type: 'text' as const,
      content: `
## Worked Example: Using $Q$

### Problem

For $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$

$K_c = 5.10$ at 700 K

At a certain moment: $[\\text{CO}] = 0.20\\;\\text{M}$, $[\\text{H}_2\\text{O}] = 0.30\\;\\text{M}$, $[\\text{CO}_2] = 0.40\\;\\text{M}$, $[\\text{H}_2] = 0.50\\;\\text{M}$

**Step 1: Calculate $Q$**

$$Q = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]} = \\frac{(0.40)(0.50)}{(0.20)(0.30)} = \\frac{0.20}{0.060} = 3.33$$

**Step 2: Compare $Q$ to $K$**

$Q = 3.33 < K = 5.10$

**Step 3: Predict the shift**

Since $Q < K$, the reaction shifts **right** (forward) to produce more CO₂ and H₂.

### AP Test Strategy 💡

> Always calculate $Q$ first, then compare to $K$. Don't try to guess the direction without doing the math!
      `
    },
    {
      id: 'ece6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — The Reaction Quotient** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$Q$ uses _______ concentrations while $K$ uses _______ concentrations',
            options: ['equilibrium; current', 'current; equilibrium', 'initial; final', 'final; initial']
          },
          {
            label: 'When $Q < K$, the net reaction proceeds in the _______ direction',
            options: ['forward', 'reverse', 'no', 'random']
          },
          {
            label: 'When $Q > K$, we need to _______ $Q$ to reach equilibrium',
            options: ['increase', 'decrease', 'maintain', 'double']
          },
          {
            label: 'As a reaction approaches equilibrium from $Q < K$, the value of $Q$',
            options: ['increases toward K', 'decreases toward K', 'remains constant', 'oscillates']
          }
        ],
        correctAnswers: ['current; equilibrium', 'forward', 'decrease', 'increases toward K'],
        hint1: '$Q$ is computed from whatever concentrations exist right now.',
        hint2: 'When $Q < K$, products need to increase.',
        hint3: 'Making more products increases the numerator of $Q$.',
        explanation: '$Q$ uses current concentrations, $K$ uses equilibrium values. When $Q < K$, the forward reaction runs to make more products, increasing $Q$ until $Q = K$. When $Q > K$, $Q$ must decrease to reach $K$.'
      }
    },
    {
      id: 'ece6-input-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate and Compare** 🧮

For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, $K_c = 50.0$ at 448°C.

Current concentrations: $[\\text{H}_2] = 0.10\\;\\text{M}$, $[\\text{I}_2] = 0.20\\;\\text{M}$, $[\\text{HI}] = 0.40\\;\\text{M}$

1) Calculate $Q_c$ (enter a number with one decimal place)

2) Is $Q$ less than, equal to, or greater than $K$? (Enter "less", "equal", or "greater")

3) Will the reaction shift left, right, or not shift? (Enter "left", "right", or "none")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.0', 'less', 'right'],
        hint1: '$Q = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}$.',
        hint2: 'Compare your calculated $Q$ to $K = 50.0$.',
        hint3: 'When $Q < K$, the reaction moves toward products.',
        explanation: '$Q = \\frac{(0.40)^2}{(0.10)(0.20)} = \\frac{0.16}{0.020} = 8.0$. Since $Q = 8.0 < K = 50.0$, the reaction shifts right to make more HI.'
      }
    },
    {
      id: 'ece6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — Reaction Quotient $Q$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The key difference between $Q$ and $K$ is that:',
            options: [
              '$Q$ uses partial pressures and $K$ uses concentrations',
              '$Q$ can be calculated at any point, while $K$ is only for equilibrium',
              '$Q$ is always larger than $K$',
              '$Q$ applies only to gas-phase reactions'
            ],
            correctAnswer: 1,
            explanation: '$Q$ and $K$ have the same mathematical form, but $Q$ uses concentrations at any moment in time, while $K$ uses specifically the equilibrium concentrations. Both can be expressed in terms of concentrations or pressures.'
          },
          {
            question: 'A system has $Q = K$. If more product is suddenly added, what happens?',
            options: [
              '$Q$ stays equal to $K$',
              '$Q > K$ and the reaction shifts left',
              '$Q < K$ and the reaction shifts right',
              'The system reaches a new equilibrium with a different $K$'
            ],
            correctAnswer: 1,
            explanation: 'Adding product increases the numerator of $Q$, making $Q > K$. The reaction shifts left (reverse) to consume the extra product until $Q = K$ again. Note: $K$ itself does not change (temperature is constant).'
          }
        ]
      }
    }
  ]
}
