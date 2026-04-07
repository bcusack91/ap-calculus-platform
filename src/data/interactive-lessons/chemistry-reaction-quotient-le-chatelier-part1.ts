export const chemReactionQuotientLeChatPart1Data = {
  topicSlug: 'reaction-quotient-le-chatelier',
  sections: [
    {
      id: 'ql1-intro',
      type: 'text' as const,
      content: `
# 🔄 The Reaction Quotient Q

**Part 1 of 7 — Same Expression as K, but at Any Time**

The reaction quotient $Q$ has the exact same mathematical form as the equilibrium constant $K$, but it uses **current** concentrations (or pressures) rather than equilibrium values. It tells us where the system is relative to equilibrium.
      `
    },
    {
      id: 'ql1-definition',
      type: 'text' as const,
      content: `
## Defining Q

For the general reaction:

$$aA + bB \\rightleftharpoons cC + dD$$

$$Q_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b} \\quad \\text{(using current concentrations)}$$

$$Q_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b} \\quad \\text{(using current pressures)}$$

### Key Distinction

| | $K$ | $Q$ |
|--|-----|-----|
| Uses | Equilibrium concentrations only | Any concentrations at any time |
| Value | Fixed at a given temperature | Changes as concentrations change |
| Meaning | Where equilibrium lies | Where the system is right now |

### Q at Special Times

- At $t = 0$ (only reactants): $Q = 0$ (numerator = 0)
- At equilibrium: $Q = K$
- If only products present: $Q = \\infty$ (denominator = 0)
      `
    },
    {
      id: 'ql1-calculating-q',
      type: 'text' as const,
      content: `
## Calculating Q

### Example

For: $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, $K_c = 0.50$ at 400°C

Current concentrations: $[\\text{N}_2] = 1.0$ M, $[\\text{H}_2] = 2.0$ M, $[\\text{NH}_3] = 3.0$ M

$$Q_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(3.0)^2}{(1.0)(2.0)^3} = \\frac{9.0}{8.0} = 1.125$$

Since $Q_c = 1.125 > K_c = 0.50$:
- The system has **too many products** relative to equilibrium
- The reaction will shift to the **left** (toward reactants) to reach equilibrium

### The Rules for Solids and Liquids

Just like with $K$, pure solids and pure liquids are **excluded** from the $Q$ expression.
      `
    },
    {
      id: 'ql1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Understanding Q** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The reaction quotient Q differs from K in that:',
            options: [
              'Q uses different exponents than K',
              'Q uses current concentrations, not equilibrium ones',
              'Q excludes gases but K includes them',
              'Q can only be calculated for gaseous reactions'
            ],
            correctAnswer: 1,
            explanation: 'Q and K have the identical mathematical expression. The only difference is that K uses equilibrium concentrations while Q uses whatever concentrations exist at any given moment.'
          },
          {
            question: 'At the start of a reaction where only reactants are present (no products), Q equals:',
            options: [
              'K',
              '1',
              '0',
              'Infinity'
            ],
            correctAnswer: 2,
            explanation: 'With no products present, the numerator of Q is zero (all product concentrations are 0), so $Q = 0$.'
          },
          {
            question: 'When Q = K, the system is:',
            options: [
              'Shifting to the right',
              'Shifting to the left',
              'At equilibrium',
              'Not reacting'
            ],
            correctAnswer: 2,
            explanation: 'By definition, when the reaction quotient equals the equilibrium constant ($Q = K$), the system is at equilibrium and no net change occurs.'
          }
        ]
      }
    },
    {
      id: 'ql1-calculating-practice',
      type: 'input-boxes' as const,
      content: `
**Calculating Q** 🧮

For the reaction: $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, $K_c = 50$ at 448°C.

Current concentrations: $[\\text{H}_2] = 0.10$ M, $[\\text{I}_2] = 0.10$ M, $[\\text{HI}] = 0.50$ M

**1)** Calculate $Q_c$. (Enter as a whole number)

**2)** Is $Q > K$, $Q < K$, or $Q = K$? (Enter "Q > K", "Q < K", or "Q = K")

**3)** If you start with only reactants and no products, what is the initial value of Q? (Enter as a number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', 'Q < K', '0'],
        hint1: '$Q_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.50)^2}{(0.10)(0.10)}$',
        hint2: 'Compare: $Q = 25$ vs $K = 50$.',
        hint3: 'No products means the numerator is 0.',
        explanation: '1) $Q_c = \\frac{(0.50)^2}{(0.10)(0.10)} = \\frac{0.25}{0.01} = 25$. 2) $Q = 25 < K = 50$, so $Q < K$. 3) With no products, all product terms are 0, so $Q = 0$.'
      }
    },
    {
      id: 'ql1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Q Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Q is calculated using',
            options: ['equilibrium concentrations', 'initial concentrations only', 'current concentrations at any time', 'standard concentrations']
          },
          {
            label: 'Q has the same mathematical form as',
            options: ['the rate law', 'the equilibrium constant K', 'the enthalpy change', 'the activation energy']
          },
          {
            label: 'If a system is at equilibrium and you calculate Q, you will find',
            options: ['Q = 0', 'Q = 1', 'Q = K', 'Q > K']
          },
          {
            label: 'Pure solids in Q expressions are',
            options: ['included in the numerator', 'included in the denominator', 'excluded', 'set equal to 1']
          }
        ],
        correctAnswers: [
          'current concentrations at any time',
          'the equilibrium constant K',
          'Q = K',
          'excluded'
        ],
        hint1: 'Q can be calculated at any point during the reaction.',
        hint2: 'Q and K use the same products-over-reactants expression.',
        hint3: 'At equilibrium, Q equals K by definition.',
        explanation: 'Q uses current concentrations at any time (not just equilibrium). It has the same form as K. At equilibrium, Q = K. Pure solids and liquids are excluded, just as with K.'
      }
    },
    {
      id: 'ql1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Reaction Quotient** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, current concentrations are $[\\text{PCl}_5] = 0.50$, $[\\text{PCl}_3] = 0.20$, $[\\text{Cl}_2] = 0.10$ M. What is Q?',
            options: [
              '$0.40$',
              '$0.04$',
              '$12.5$',
              '$25$'
            ],
            correctAnswer: 1,
            explanation: '$Q = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{(0.20)(0.10)}{0.50} = \\frac{0.020}{0.50} = 0.04$.'
          },
          {
            question: 'Q can change over time because:',
            options: [
              'Temperature is changing',
              'Concentrations change as the reaction progresses',
              'The stoichiometric coefficients change',
              'The equilibrium expression changes'
            ],
            correctAnswer: 1,
            explanation: 'Q changes because the concentrations of reactants and products change as the reaction proceeds. The expression itself stays the same; only the values plugged in change.'
          }
        ]
      }
    }
  ]
}
