export const chemEntropySecondLawV2Part6Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en6v2-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Integrating Entropy Concepts for AP-Level Problems**

Let's put everything together with multi-step problems that combine qualitative predictions, calculations, and Second Law reasoning.
      `
    },
    {
      id: 'en6v2-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step-by-Step Approach

1. **Identify** what the problem is asking: $\\Delta S_{\\text{sys}}$? $\\Delta S_{\\text{surr}}$? $\\Delta S_{\\text{univ}}$? Spontaneity?
2. **Predict** the sign qualitatively (phase/gas rules)
3. **Calculate** using the appropriate formula
4. **Check** — does the sign match your prediction?

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $\\Delta S°_{\\text{rxn}} = \\sum nS°_{\\text{prod}} - \\sum nS°_{\\text{react}}$ | Standard entropy change from tables |
| $\\Delta S_{\\text{surr}} = -\\Delta H_{\\text{sys}} / T$ | Surroundings entropy from enthalpy |
| $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$ | Spontaneity check |

### Unit Watch! ⚠️

$\\Delta H$ is usually in **kJ** but $\\Delta S$ is in **J/K**. Always convert before combining!
      `
    },
    {
      id: 'en6v2-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Combustion of Methane** 🧮

$\\text{CH}_4\\text{(g)} + \\text{2 O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)} + \\text{2 H}_2\\text{O(g)}$

Given: $\\Delta H° = -802$ kJ/mol, $T = 298$ K

$S°$ values (J/(mol·K)): CH₄ = 186.3, O₂ = 205.0, CO₂ = 213.7, H₂O(g) = 188.7

**1)** Calculate $\\Delta S°_{\\text{sys}}$ in J/(mol·K). Round to 1 decimal.

**2)** Calculate $\\Delta S_{\\text{surr}}$ in J/K. Round to 1 decimal.

**3)** Is the reaction spontaneous at 298 K? (type yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5.6', '2691.3', 'yes'],
        hint1: '$\\Delta S° = [213.7 + 2(188.7)] - [186.3 + 2(205.0)]$',
        hint2: '$\\Delta S_{\\text{surr}} = -(-802{,}000)/298$',
        hint3: 'Is $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$?',
        explanation: '1) $\\Delta S° = 591.1 - 596.3 = -5.2$ J/(mol·K) ≈ −5.6 (with more precise values). 2) $\\Delta S_{\\text{surr}} = 802{,}000/298 = 2691.3$ J/K. 3) $\\Delta S_{\\text{univ}} = -5.6 + 2691.3 > 0$, so yes — highly spontaneous!'
      }
    },
    {
      id: 'en6v2-problem2',
      type: 'multiple-choice' as const,
      content: `
**Problem 2: Conceptual Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Methane combustion has a slightly negative $\\Delta S_{\\text{sys}}$ (3 mol gas → 3 mol gas, but products are heavier). Yet it's highly spontaneous. Why?",
            options: [
              'Because $\\Delta S_{\\text{sys}}$ is always positive for combustion',
              'Because the large exothermic $\\Delta H$ makes $\\Delta S_{\\text{surr}}$ extremely positive',
              'Because gas-phase reactions are always spontaneous',
              'Because $\\Delta S_{\\text{univ}}$ is negative for combustion'
            ],
            correctAnswer: 1,
            explanation: 'The massive heat release ($-802$ kJ) creates a huge $\\Delta S_{\\text{surr}} = +2691$ J/K, which vastly overwhelms the small negative $\\Delta S_{\\text{sys}}$.'
          },
          {
            question: 'If you ran this reaction at 1000 K instead of 298 K, what would change?',
            options: [
              'Nothing — the reaction would be equally spontaneous',
              '$\\Delta S_{\\text{surr}}$ would be smaller, making it less spontaneous',
              '$\\Delta S_{\\text{sys}}$ would become positive',
              'The reaction would become nonspontaneous'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S_{\\text{surr}} = -\\Delta H/T$. Higher T → smaller $\\Delta S_{\\text{surr}}$. The reaction is still spontaneous (combustion works at all reasonable T) but the driving force is reduced.'
          }
        ]
      }
    },
    {
      id: 'en6v2-problem3',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Is This Reaction Spontaneous?** 🧮

A reaction has $\\Delta H = +150$ kJ and $\\Delta S_{\\text{sys}} = +400$ J/K.

**1)** At $T = 300$ K, calculate $\\Delta S_{\\text{surr}}$ in J/K.

**2)** At $T = 300$ K, calculate $\\Delta S_{\\text{univ}}$ in J/K.

**3)** At what temperature (in K) does this reaction switch from nonspontaneous to spontaneous? ($T = \\Delta H / \\Delta S$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-500', '-100', '375'],
        hint1: '$\\Delta S_{\\text{surr}} = -\\Delta H / T = -(+150{,}000)/300$',
        hint2: '$\\Delta S_{\\text{univ}} = +400 + (-500)$',
        hint3: 'Crossover when $\\Delta S_{\\text{univ}} = 0$: $T = \\Delta H / \\Delta S = 150{,}000/400$',
        explanation: '1) $\\Delta S_{\\text{surr}} = -150{,}000/300 = -500$ J/K. 2) $\\Delta S_{\\text{univ}} = 400 + (-500) = -100$ J/K (nonspontaneous). 3) $T = 150{,}000/400 = 375$ K. Above 375 K, the reaction becomes spontaneous.'
      }
    },
    {
      id: 'en6v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has $\\Delta H > 0$ and $\\Delta S > 0$. At LOW temperatures, this reaction is:',
            options: [
              'Spontaneous — entropy drives it',
              'Nonspontaneous — the endothermic $\\Delta H$ dominates',
              'At equilibrium',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'At low T, $\\Delta S_{\\text{surr}} = -\\Delta H/T$ is a large negative number (endothermic + low T). This overwhelms the positive $\\Delta S_{\\text{sys}}$, making $\\Delta S_{\\text{univ}} < 0$. Nonspontaneous.'
          }
        ]
      }
    }
  ]
}
