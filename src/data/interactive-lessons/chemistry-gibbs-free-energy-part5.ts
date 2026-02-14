export const chemGibbsFreeEnergyPart5Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf5-intro',
      type: 'text' as const,
      content: `
# 📊 Non-Standard Conditions — ΔG = ΔG° + RT ln Q

**Part 5 of 7 — Real-World Free Energy**

$\\Delta G°$ tells us about equilibrium, but real reactions rarely start at standard conditions. To determine spontaneity at any concentration, pressure, or composition, we need $\\Delta G$ (without the °), which uses the reaction quotient $Q$.
      `
    },
    {
      id: 'gf5-equation',
      type: 'text' as const,
      content: `
## The Non-Standard Free Energy Equation

$$\\Delta G = \\Delta G° + RT\\ln Q$$

| Symbol | Meaning |
|--------|---------|
| $\\Delta G$ | Free energy change at current conditions |
| $\\Delta G°$ | Free energy change at standard conditions |
| $R$ | 8.314 J/(mol·K) |
| $T$ | Temperature in K |
| $Q$ | Reaction quotient (current concentrations) |

### Recall: Q vs K

- $Q$ = reaction quotient (calculated from **current** concentrations)
- $K$ = equilibrium constant (concentrations **at equilibrium**)

$$Q = \\frac{[\\text{products}]^n}{[\\text{reactants}]^m}$$ (same form as K, but not at equilibrium)
      `
    },
    {
      id: 'gf5-interpretation',
      type: 'text' as const,
      content: `
## Interpreting ΔG, Q, and K

| Condition | $Q$ vs $K$ | $\\Delta G$ | Direction |
|-----------|-----------|-----------|-----------|
| $Q < K$ | Below equilibrium | $\\Delta G < 0$ | Forward reaction spontaneous |
| $Q = K$ | At equilibrium | $\\Delta G = 0$ | No net change |
| $Q > K$ | Above equilibrium | $\\Delta G > 0$ | Reverse reaction spontaneous |

### Key Insight

At equilibrium, $Q = K$ and $\\Delta G = 0$:

$$0 = \\Delta G° + RT\\ln K$$
$$\\Delta G° = -RT\\ln K$$

This is how we derived the $\\Delta G°$–$K$ relationship!

### The Big Picture

- $\\Delta G°$ tells you WHERE equilibrium lies (the value of $K$)
- $\\Delta G$ tells you WHICH DIRECTION the reaction will go from current conditions
- A reaction with $\\Delta G° > 0$ can still proceed forward if $Q$ is small enough
      `
    },
    {
      id: 'gf5-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$

$\\Delta G° = -33.0$ kJ/mol at 298 K

Calculate $\\Delta G$ when $P_{\\text{N}_2} = 1.0$ atm, $P_{\\text{H}_2} = 3.0$ atm, $P_{\\text{NH}_3} = 0.50$ atm.

**Step 1: Calculate Q**

$$Q = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2})(P_{\\text{H}_2})^3} = \\frac{(0.50)^2}{(1.0)(3.0)^3} = \\frac{0.25}{27} = 0.00926$$

**Step 2: Calculate ΔG**

$$\\Delta G = \\Delta G° + RT\\ln Q$$
$$= -33{,}000 + (8.314)(298)\\ln(0.00926)$$
$$= -33{,}000 + (2478)(-4.682)$$
$$= -33{,}000 + (-11{,}602)$$
$$= -44{,}602 \\text{ J} = -44.6 \\text{ kJ}$$

Since $\\Delta G < 0$ and $Q < K$, the forward reaction is spontaneous — more $\\text{NH}_3$ will form.
      `
    },
    {
      id: 'gf5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Non-Standard ΔG Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If Q < K for a reaction, then ΔG is:',
            options: [
              'Positive (reverse is spontaneous)',
              'Negative (forward is spontaneous)',
              'Zero (at equilibrium)',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'When $Q < K$, the system has not yet reached equilibrium. The forward reaction is spontaneous ($\\Delta G < 0$) to produce more products and increase $Q$ toward $K$.'
          },
          {
            question: 'A reaction has ΔG° = +20 kJ/mol. Under what conditions can it still proceed forward?',
            options: [
              'Never — positive ΔG° means it is always nonspontaneous',
              'When Q is very small (much less than K)',
              'Only at very high temperatures',
              'When a catalyst is added'
            ],
            correctAnswer: 1,
            explanation: 'Even with $\\Delta G° > 0$, if $Q$ is sufficiently small, the $RT\\ln Q$ term can be negative enough to make $\\Delta G < 0$. The reaction can proceed forward when $Q < K$.'
          },
          {
            question: 'At equilibrium:',
            options: [
              'ΔG = ΔG° and Q = 1',
              'ΔG = 0 and Q = K',
              'ΔG° = 0 and Q = K',
              'ΔG = 0 and Q = 1'
            ],
            correctAnswer: 1,
            explanation: 'At equilibrium, $Q = K$ and $\\Delta G = 0$. Substituting into $\\Delta G = \\Delta G° + RT\\ln Q$: $0 = \\Delta G° + RT\\ln K$, which gives $\\Delta G° = -RT\\ln K$.'
          }
        ]
      }
    },
    {
      id: 'gf5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Non-Standard ΔG Calculations** 🧮

For a reaction with $\\Delta G° = -10.0$ kJ/mol at $T = 298$ K:

1) What is $\\Delta G$ when $Q = 1$? (in kJ/mol)

2) What is $\\Delta G$ when $Q = K$ (at equilibrium)? (in kJ/mol)

3) If $Q > K$, is $\\Delta G$ positive or negative? (type "positive" or "negative")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-10.0', '0', 'positive', '-10.00'],
        hint1: '$\\Delta G = \\Delta G° + RT\\ln(1) = \\Delta G° + 0$.',
        hint2: 'At equilibrium, $\\Delta G = 0$ always.',
        hint3: 'If $Q > K$, the reaction has "overshot" equilibrium.',
        explanation: '1) $\\ln(1) = 0$, so $\\Delta G = \\Delta G° = -10.0$ kJ/mol. 2) At equilibrium, $\\Delta G = 0$ by definition. 3) When $Q > K$, $\\ln(Q/K) > 0$, and the system shifts backward: $\\Delta G > 0$.'
      }
    },
    {
      id: 'gf5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Q, K, and ΔG** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When Q = K, the system is',
            options: ['far from equilibrium', 'at equilibrium', 'at standard conditions', 'at absolute zero']
          },
          {
            label: 'When Q = 1, ΔG equals',
            options: ['0', 'ΔG°', 'RT', '−RT ln K']
          },
          {
            label: 'If ΔG° > 0 but Q < K, the forward reaction is',
            options: ['nonspontaneous', 'spontaneous', 'at equilibrium', 'impossible']
          },
          {
            label: 'Increasing product concentration causes Q to',
            options: ['decrease', 'increase', 'stay the same', 'equal K']
          }
        ],
        correctAnswers: ['at equilibrium', 'ΔG°', 'spontaneous', 'increase'],
        hint1: 'Q = K is the definition of equilibrium.',
        hint2: '$\\Delta G = \\Delta G° + RT\\ln(1) = \\Delta G° + 0$.',
        hint3: 'Forward is spontaneous whenever Q < K, regardless of the sign of ΔG°.',
        explanation: 'Q = K → equilibrium (ΔG = 0). Q = 1 → ΔG = ΔG°. Even if ΔG° > 0, Q < K → ΔG < 0 (forward spontaneous). Adding products increases Q.'
      }
    },
    {
      id: 'gf5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Non-Standard ΔG** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For a reaction with ΔG° = −30 kJ/mol at 298 K, if Q = 10⁶, then ΔG is approximately:',
            options: [
              '−30 kJ/mol',
              '+4.2 kJ/mol',
              '−64.2 kJ/mol',
              '0 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = -30{,}000 + (8.314)(298)\\ln(10^6) = -30{,}000 + (2478)(13.82) = -30{,}000 + 34{,}246 = +4{,}246$ J $\\approx +4.2$ kJ/mol. Even though ΔG° < 0, Q is so large (past equilibrium) that ΔG > 0.'
          },
          {
            question: 'The equation ΔG = ΔG° + RT ln Q reduces to ΔG° = −RT ln K when:',
            options: [
              'T = 298 K',
              'Q = 1',
              'Q = K (at equilibrium)',
              'ΔG° = 0'
            ],
            correctAnswer: 2,
            explanation: 'At equilibrium: $\\Delta G = 0$ and $Q = K$. Substituting: $0 = \\Delta G° + RT\\ln K$, giving $\\Delta G° = -RT\\ln K$.'
          }
        ]
      }
    }
  ]
}
