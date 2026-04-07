export const chemGibbsFreeEnergyPart4Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf4-intro',
      type: 'text' as const,
      content: `
# ⚖️ ΔG and Equilibrium

**Part 4 of 7 — ΔG° = −RT ln K**

One of the most powerful relationships in all of chemistry connects Gibbs free energy to the equilibrium constant. This equation bridges thermodynamics and equilibrium — two pillars of AP Chemistry.
      `
    },
    {
      id: 'gf4-relationship',
      type: 'text' as const,
      content: `
## The Key Equation

$$\\Delta G° = -RT\\ln K$$

| Symbol | Meaning | Value/Units |
|--------|---------|-------------|
| $\\Delta G°$ | Standard free energy change | J/mol (or kJ/mol) |
| $R$ | Gas constant | $8.314$ J/(mol·K) |
| $T$ | Temperature | K |
| $K$ | Equilibrium constant | dimensionless |

### What This Equation Tells Us

| If $\\Delta G°$ | Then $K$ | Meaning |
|---------------|---------|---------|
| $\\Delta G° < 0$ | $K > 1$ | Products favored at equilibrium |
| $\\Delta G° = 0$ | $K = 1$ | Neither favored |
| $\\Delta G° > 0$ | $K < 1$ | Reactants favored at equilibrium |

### Important Nuance

$\\Delta G° < 0$ does **NOT** mean the reaction goes to completion. It means $K > 1$, so products are **favored**, but reactants are still present at equilibrium.
      `
    },
    {
      id: 'gf4-solving-for-K',
      type: 'text' as const,
      content: `
## Solving for K from ΔG°

Rearranging: $K = e^{-\\Delta G°/(RT)}$

### Worked Example

Find $K$ at 25°C for a reaction with $\\Delta G° = -5.40$ kJ/mol.

$$K = e^{-\\Delta G°/(RT)} = e^{-(-5400)/(8.314 \\times 298)}$$

$$K = e^{5400/2477.6} = e^{2.180} = 8.85$$

### Solving for ΔG° from K

If $K = 1.0 \\times 10^{10}$ at 298 K:

$$\\Delta G° = -RT\\ln K = -(8.314)(298)\\ln(1.0 \\times 10^{10})$$

$$\\Delta G° = -(2477.6)(23.03) = -57{,}050 \\text{ J} = -57.1 \\text{ kJ}$$

### Converting Between ln and log

$$\\ln K = 2.303 \\log K$$

So: $\\Delta G° = -2.303 RT \\log K$
      `
    },
    {
      id: 'gf4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**ΔG° and K Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If ΔG° = 0, then K equals:',
            options: [
              '0',
              '1',
              'infinity',
              'undefined'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -RT\\ln K = 0$, so $\\ln K = 0$, which means $K = e^0 = 1$. Products and reactants are equally favored.'
          },
          {
            question: 'A large negative ΔG° means:',
            options: [
              'K << 1 (reactants favored)',
              'K ≈ 1 (neither favored)',
              'K >> 1 (products strongly favored)',
              'The reaction is at equilibrium'
            ],
            correctAnswer: 2,
            explanation: 'Negative ΔG° means $\\ln K > 0$, so $K > 1$. The more negative ΔG°, the larger K, meaning products are strongly favored at equilibrium.'
          },
          {
            question: 'If K = 10⁻⁵ for a reaction, ΔG° is:',
            options: [
              'Large and negative',
              'Small and negative',
              'Large and positive',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: '$K < 1$ means reactants are favored, which corresponds to $\\Delta G° > 0$. Since $K$ is very small ($10^{-5}$), $\\Delta G°$ is a large positive value.'
          }
        ]
      }
    },
    {
      id: 'gf4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**ΔG° and K Calculations** 🧮

Use $R = 8.314$ J/(mol·K), $T = 298$ K

**1)** If $\\Delta G° = -17.1$ kJ/mol, what is $K$? (round to nearest whole number)

**2)** If $K = 1.0 \\times 10^{5}$ at 298 K, what is $\\Delta G°$? (in kJ/mol, to 1 decimal)

**3)** If $\\Delta G° = +10.0$ kJ/mol, is $K$ greater than or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1000', '-28.5', 'less'],
        hint1: '$K = e^{17100/(8.314 \\times 298)} = e^{6.91}$',
        hint2: '$\\Delta G° = -(8.314)(298)\\ln(10^5) = -(2477.6)(11.51)$. Convert to kJ.',
        hint3: 'Positive ΔG° means $\\ln K < 0$, so $K < 1$.',
        explanation: '1) $K = e^{17100/2477.6} = e^{6.90} = 993 \\approx 1000$. 2) $\\Delta G° = -(8.314)(298)(11.513) = -28{,}528$ J $= -28.5$ kJ/mol. 3) Positive ΔG° → K < 1 (reactants favored).'
      }
    },
    {
      id: 'gf4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**ΔG° and Equilibrium** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If K = 1, then ΔG° is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'A reaction with K = 10⁸ has ΔG° that is',
            options: ['large positive', 'large negative', 'zero', 'small positive']
          },
          {
            label: 'The R in ΔG° = −RT ln K has the value',
            options: ['0.0821 L·atm/(mol·K)', '8.314 J/(mol·K)', '1.987 cal/(mol·K)', 'any of these, with consistent units']
          },
          {
            label: 'ΔG° tells you about equilibrium, while ΔG tells you about',
            options: ['the same thing', 'the direction the reaction proceeds from current conditions', 'the rate of reaction', 'the activation energy']
          }
        ],
        correctAnswers: ['zero', 'large negative', '8.314 J/(mol·K)', 'the direction the reaction proceeds from current conditions'],
        hint1: '$\\Delta G° = -RT\\ln 1 = -RT(0) = 0$.',
        hint2: 'Large K → products very favored → very negative ΔG°.',
        hint3: 'ΔG° is in J/mol, so R must be in J/(mol·K).',
        explanation: 'K = 1 → ΔG° = 0. K = 10⁸ → large negative ΔG°. R = 8.314 J/(mol·K) for energy calculations. ΔG° is about equilibrium position; ΔG is about the direction of spontaneous change from non-standard conditions.'
      }
    },
    {
      id: 'gf4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — ΔG° and K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has ΔG° = −40.0 kJ/mol at 298 K. What does this tell you about the equilibrium?',
            options: [
              'The reaction goes to completion',
              'K >> 1; products are strongly favored',
              'K < 1; reactants are favored',
              'The reaction never reaches equilibrium'
            ],
            correctAnswer: 1,
            explanation: '$K = e^{40000/(8.314 \\times 298)} = e^{16.1} \\approx 10^7$. Products are very strongly favored at equilibrium. But it does NOT go to completion — some reactants remain.'
          },
          {
            question: 'At 298 K, a reaction has K = 1.0 × 10⁻³. ΔG° is approximately:',
            options: [
              '−17.1 kJ/mol',
              '+17.1 kJ/mol',
              '−7.1 kJ/mol',
              '+7.1 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -RT\\ln K = -(8.314)(298)\\ln(10^{-3}) = -(2477.6)(-6.908) = +17{,}113$ J $\\approx +17.1$ kJ/mol. K < 1 → positive ΔG°.'
          }
        ]
      }
    }
  ]
}
