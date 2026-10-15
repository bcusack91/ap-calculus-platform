export const chemEntropySecondLawV2Part6Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en6v2-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Integrating Entropy Concepts for AP-Level Problems**

Let's put everything together with multi-step problems that combine qualitative predictions, $\\Delta S°$ calculations, and reasoning about thermodynamic favorability.
      `
    },
    {
      id: 'en6v2-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Step-by-Step Approach

1. **Identify** what the problem is asking: the sign of $\\Delta S$? A value of $\\Delta S°$? Whether the process is favored, and at which temperatures?
2. **Predict** the sign qualitatively (phase/gas rules)
3. **Calculate** using the appropriate formula
4. **Check** — does the sign match your prediction?


---

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $\\Delta S°_{\\text{rxn}} = \\sum nS°_{\\text{prod}} - \\sum nS°_{\\text{react}}$ | Standard entropy change from tables |
| $\\Delta G° = \\Delta H° - T\\Delta S°$ | Favorability at a given temperature ($\\Delta G° < 0$ → favored) |
| $T = \\Delta H° / \\Delta S°$ | Temperature where favorability switches ($\\Delta G° = 0$) |


---

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

$S°$ values (J/(mol·K)): $CH_{4}$ = 186.3, $O_{2}$ = 205.0, $CO_{2}$ = 213.7, $H_{2}O(g)$ = 188.7

**1)** Calculate $\\Delta S°_{\\text{sys}}$ in J/(mol·K). Round to 1 decimal.

**2)** Calculate $\\Delta G°$ at 298 K in kJ/mol. Round to the nearest whole number.

**3)** Is the reaction thermodynamically favored at 298 K? (type yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5.2', '-800', 'yes'],
        hint1: '$\\Delta S° = [213.7 + 2(188.7)] - [186.3 + 2(205.0)]$',
        hint2: '$\\Delta G° = -802 - (298)(-0.0052)$ — convert ΔS° to kJ first.',
        hint3: 'Is $\\Delta G° < 0$?',
        explanation: '1) $\\Delta S° = [213.7 + 377.4] - [186.3 + 410.0] = 591.1 - 596.3 = -5.2$ J/(mol·K). 2) $\\Delta G° = -802 - (298)(-0.0052) = -802 + 1.5 \\approx -800$ kJ/mol. 3) Yes — $\\Delta G° < 0$, and strongly so.'
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
              'Combustion always has a positive $\\Delta S_{\\text{sys}}$, despite the gas count',
              'The large heat release outweighs the tiny entropy decrease',
              'Reactions in the gas phase are always spontaneous because gases mix freely',
              'ΔH plays no role, because only entropy decides favorability'
            ],
            correctAnswer: 1,
            explanation: 'With ΔH° = −802 kJ and ΔS° = −5.2 J/K, the −TΔS° term is only about +1.5 kJ at 298 K, so ΔG° is strongly negative. Favorability depends on both ΔH and ΔS; here the energy factor dominates.'
          },
          {
            question: 'If you ran this reaction at 1000 K instead of 298 K, what would change?',
            options: [
              'Nothing — the reaction would be equally spontaneous',
              'The −TΔS° term grows, so ΔG° is slightly less negative but still favored',
              'ΔS° would turn positive, which makes it even more favored',
              'ΔG° would turn positive, making it unfavored'
            ],
            correctAnswer: 1,
            explanation: 'Because ΔS° < 0, the −TΔS° term is positive and grows with T: at 1000 K it is about +5 kJ. ΔG° ≈ −797 kJ, still strongly negative. The sign of ΔS° does not change with temperature, and ΔG° stays far below zero.'
          }
        ]
      }
    },
    {
      id: 'en6v2-problem3',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Is This Reaction Spontaneous?** 🧮

A reaction has $\\Delta H° = +150$ kJ and $\\Delta S° = +400$ J/K.

**1)** At $T = 300$ K, calculate the $T\\Delta S°$ term in kJ.

**2)** At $T = 300$ K, calculate $\\Delta G°$ in kJ.

**3)** At what temperature (in K) does this reaction switch from unfavored to favored? ($T = \\Delta H° / \\Delta S°$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '30', '375'],
        hint1: '$T\\Delta S° = (300)(0.400)$ kJ',
        hint2: '$\\Delta G° = 150 - 120$',
        hint3: 'Crossover when $\\Delta G° = 0$: $T = 150{,}000/400$',
        explanation: '1) $T\\Delta S° = (300 \\text{ K})(0.400 \\text{ kJ/K}) = 120$ kJ. 2) $\\Delta G° = 150 - 120 = +30$ kJ, so the reaction is not favored at 300 K. 3) $T = 150{,}000/400 = 375$ K. Above 375 K, $T\\Delta S°$ exceeds $\\Delta H°$ and the reaction becomes favored.'
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
              'Spontaneous — the positive $\\Delta S$ drives it',
              'Nonspontaneous — the endothermic $\\Delta H$ dominates',
              'At equilibrium at every low temperature',
              'Spontaneous — endothermic reactions favor low T'
            ],
            correctAnswer: 1,
            explanation: 'At low T, the favorable −TΔS term is small, so the unfavorable positive ΔH dominates and ΔG > 0. The process becomes favored only at high temperature, where TΔS outweighs ΔH.'
          }
        ]
      }
    }
  ]
}
