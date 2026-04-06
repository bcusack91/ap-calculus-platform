export const chemEntropySecondLawV2Part7Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en7v2-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This section reviews all entropy concepts and presents AP-style questions that combine multiple ideas.
      `
    },
    {
      id: 'en7v2-summary',
      type: 'text' as const,
      content: `
## Concept Map

### The Big Picture

| Concept | Key Equation | When to Use |
|---------|-------------|-------------|
| Boltzmann equation | $S = k_B \\ln W$ | Connecting microstates to entropy |
| Third Law | $S(0\\ \\text{K}) = 0$ | Absolute entropy values |
| Standard entropy change | $\\Delta S° = \\sum nS°_p - \\sum nS°_r$ | Quantitative $\\Delta S$ calculations |
| Surroundings entropy | $\\Delta S_{\\text{surr}} = -\\Delta H/T$ | Connecting enthalpy to spontaneity |
| Second Law | $\\Delta S_{\\text{univ}} > 0$ | Determining spontaneity |
| Crossover temperature | $T = \\Delta H/\\Delta S$ | When spontaneity changes |

### Predicting $\\Delta S$ Sign — Quick Rules

1. More gas molecules produced → **positive**
2. Phase: solid→liquid→gas → **positive**
3. Dissolving → usually **positive**
4. Heating → **positive**
5. Mixing → **positive**
      `
    },
    {
      id: 'en7v2-ap-question1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Free Response** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Consider the dissolution of ammonium nitrate: NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq). This process is endothermic ($\\Delta H > 0$) but spontaneous at room temperature. Which statement best explains this?',
            options: [
              'The decrease in enthalpy drives the reaction',
              'The increase in system entropy ($\\Delta S_{\\text{sys}} > 0$) is large enough to overcome the unfavorable $\\Delta H$',
              'Endothermic reactions are always spontaneous',
              'The entropy of the surroundings increases'
            ],
            correctAnswer: 1,
            explanation: 'The solid dissolving into ions significantly increases entropy ($\\Delta S_{\\text{sys}} > 0$). At room temperature, $T\\Delta S$ exceeds $\\Delta H$, so $\\Delta G < 0$ (or equivalently, $\\Delta S_{\\text{univ}} > 0$).'
          },
          {
            question: 'At what temperature would the dissolution of NH₄NO₃ become nonspontaneous if $\\Delta H = +25.7$ kJ and $\\Delta S = +108.7$ J/K?',
            options: [
              'Below 236 K',
              'Above 236 K',
              'At all temperatures',
              'Below 108.7 K'
            ],
            correctAnswer: 0,
            explanation: '$T_{\\text{crossover}} = \\Delta H/\\Delta S = 25{,}700/108.7 = 236$ K. Below this temperature, the process becomes nonspontaneous.'
          }
        ]
      }
    },
    {
      id: 'en7v2-ap-question2',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

For the reaction: $\\text{2 SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to \\text{2 SO}_3\\text{(g)}$

Given: $\\Delta H° = -198$ kJ, $\\Delta S° = -187$ J/K

1) Is this reaction spontaneous at 298 K? Calculate $\\Delta G°$ in kJ. ($\\Delta G° = \\Delta H° - T\\Delta S°$)

2) At what temperature (K) does this reaction become nonspontaneous? Round to nearest whole number.

3) Is this reaction entropy-favored or enthalpy-favored? (type entropy or enthalpy)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-142.3', '1059', 'enthalpy'],
        hint1: '$\\Delta G° = -198 - 298(-0.187)$. Watch units: convert $\\Delta S$ to kJ/K!',
        hint2: '$T = \\Delta H/\\Delta S = -198{,}000/(-187)$',
        hint3: '$\\Delta S < 0$ means entropy opposes the reaction. What drives it?',
        explanation: '1) $\\Delta G° = -198 - 298(-0.187) = -198 + 55.7 = -142.3$ kJ. Spontaneous! 2) $T = 198{,}000/187 = 1059$ K. Above this, nonspontaneous. 3) Enthalpy-favored: the exothermic $\\Delta H$ drives spontaneity while $\\Delta S < 0$ opposes it.'
      }
    },
    {
      id: 'en7v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify These Reactions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\Delta H < 0$, $\\Delta S > 0$ — spontaneous at',
            options: ['all temperatures', 'high T only', 'low T only', 'no temperatures']
          },
          {
            label: '$\\Delta H > 0$, $\\Delta S < 0$ — spontaneous at',
            options: ['all temperatures', 'high T only', 'low T only', 'no temperatures']
          },
          {
            label: '$\\Delta H < 0$, $\\Delta S < 0$ — spontaneous at',
            options: ['all temperatures', 'high T only', 'low T only', 'no temperatures']
          },
          {
            label: '$\\Delta H > 0$, $\\Delta S > 0$ — spontaneous at',
            options: ['all temperatures', 'high T only', 'low T only', 'no temperatures']
          }
        ],
        correctAnswers: ['all temperatures', 'no temperatures', 'low T only', 'high T only'],
        hint1: 'Both factors favor spontaneity.',
        hint2: 'Both factors oppose spontaneity.',
        hint3: 'Favored by enthalpy but opposed by entropy — low T minimizes the $T\\Delta S$ penalty.',
        explanation: '−H, +S: always spontaneous. +H, −S: never spontaneous. −H, −S: low T (enthalpy wins). +H, +S: high T (entropy wins).'
      }
    },
    {
      id: 'en7v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A chemist discovers a reaction that is exothermic with $\\Delta H = -50$ kJ and has $\\Delta S = -200$ J/K. Above what temperature will this reaction become nonspontaneous?',
            options: ['125 K', '250 K', '400 K', 'It is always spontaneous'],
            correctAnswer: 1,
            explanation: '$T = |\\Delta H/\\Delta S| = 50{,}000/200 = 250$ K. Above 250 K, the $T\\Delta S$ term makes $\\Delta G > 0$.'
          },
          {
            question: 'Which is the BEST single-sentence summary of the Second Law?',
            options: [
              'Energy cannot be created or destroyed',
              'Every spontaneous process increases the total entropy of the universe',
              'Entropy of a crystal is zero at 0 K',
              'Exothermic reactions are always spontaneous'
            ],
            correctAnswer: 1,
            explanation: 'The Second Law: $\\Delta S_{\\text{univ}} > 0$ for all spontaneous processes. The First Law conserves energy, the Third Law sets entropy to zero at 0 K.'
          }
        ]
      }
    }
  ]
}
