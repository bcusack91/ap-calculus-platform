export const bioEnzymesPart2Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy2-kinetics',
      type: 'text' as const,
      content: `
## Enzyme Kinetics

### Reaction Rate

Enzyme-catalyzed reactions follow a characteristic pattern:

1. **Initial rate** increases linearly with substrate concentration
2. Rate begins to **plateau** as enzymes become saturated
3. **$V_{max}$** is reached when all enzyme active sites are occupied

### Key Terms

| Term | Definition |
|------|------------|
| **$V_{max}$** | Maximum reaction velocity (all enzymes saturated) |
| **$K_m$** | Substrate concentration at ½ $V_{max}$ |
| **Turnover number** | Reactions catalyzed per enzyme per second |

$K_m$ is a measure of enzyme-substrate affinity:
- **Low $K_m$** = high affinity (enzyme binds substrate tightly)
- **High $K_m$** = low affinity (enzyme requires more substrate)
      `
    },
    {
      id: 'enzy2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A low Km value indicates:',
            options: [
              'Low enzyme-substrate affinity',
              'High enzyme-substrate affinity',
              'The enzyme works slowly',
              'The reaction is endergonic'
            ],
            correctAnswer: 1,
            explanation: '$K_m$ is the substrate concentration needed to reach half of $V_{max}$. A low $K_m$ means less substrate is needed, indicating high affinity.'
          }
        ]
      }
    },
    {
      id: 'enzy2-factors',
      type: 'text' as const,
      content: `
## Substrate Concentration Effects

At low [S]: Reaction rate is proportional to substrate concentration (first-order kinetics)

At high [S]: Reaction rate levels off at $V_{max}$ (zero-order kinetics)

This is because at high concentrations, all enzyme active sites are occupied — the enzyme is **saturated**. Adding more substrate has no effect.
      `
    },
    {
      id: 'enzy2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When all enzyme active sites are occupied by substrate, the reaction is at:',
            options: [
              'Equilibrium',
              '$V_{max}$',
              'Zero rate',
              '$K_m$'
            ],
            correctAnswer: 1,
            explanation: 'When all enzyme molecules are bound to substrate (saturated), the reaction proceeds at its maximum velocity ($V_{max}$).'
          }
        ]
      }
    },
    {
      id: 'enzy2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At $V_{max}$, all enzymes are ___',
            options: ['denatured', 'inhibited', 'saturated', 'destroyed']
          },
          {
            label: '$K_m$ is measured in units of ___',
            options: ['time', 'concentration', 'energy', 'velocity']
          },
          {
            label: 'Adding more enzyme ___ the $V_{max}$',
            options: ['increases', 'decreases', 'does not change', 'halves']
          }
        ],
        correctAnswers: ['saturated', 'concentration', 'increases'],
        hint1: 'All active sites are filled.',
        hint2: 'It\'s a substrate concentration.',
        hint3: 'More enzyme molecules = more total capacity.',
        explanation: 'At Vmax, all enzymes are saturated. Km is a concentration (moles/liter). Adding more enzyme increases the total number of active sites, increasing Vmax.'
      }
    }
  ]
}
