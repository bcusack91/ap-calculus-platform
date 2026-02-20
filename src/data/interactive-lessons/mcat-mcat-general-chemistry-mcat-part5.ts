export const mcatGenChemPart5Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc5-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 5 of 7 — Thermodynamics**

### Key Equations

$$\\Delta G = \\Delta H - T\\Delta S$$

$$\\Delta G° = -RT\\ln K$$

$$\\Delta G = \\Delta G° + RT\\ln Q$$

### Spontaneity Table

| $\\Delta H$ | $\\Delta S$ | $\\Delta G$ | Spontaneous? |
|-----------|-----------|-----------|-------------|
| − | + | Always − | Always |
| + | − | Always + | Never |
| − | − | Depends on T | Low T |
| + | + | Depends on T | High T |

### Hess's Law

$\\Delta H_{rxn} = \\sum \\Delta H_f°(\\text{products}) - \\sum \\Delta H_f°(\\text{reactants})$

Standard enthalpy of formation for elements in their standard state = 0.`
    },
    {
      id: 'gc5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Thermodynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta H = +30$ kJ/mol and $\\Delta S = +100$ J/(mol$\\cdot$K). At what temperature does it become spontaneous?`,
            options: [`Above 300 K`, `Below 300 K`, `At all temperatures`, `Never spontaneous`],
            correctAnswer: 0,
            explanation: `$\\Delta G = 0$ when $T = \\Delta H / \\Delta S = 30{,}000 / 100 = 300$ K. Above 300 K, $T\\Delta S > \\Delta H$, so $\\Delta G < 0$ (spontaneous). Watch units: convert kJ to J!`
          },
          {
            question: `If $K_{eq} > 1$ at standard conditions, then $\\Delta G°$ is:`,
            options: [`Negative`, `Positive`, `Zero`, `Cannot determine`],
            correctAnswer: 0,
            explanation: `$\\Delta G° = -RT\\ln K$. If $K > 1$, then $\\ln K > 0$, so $\\Delta G° < 0$.`
          }
        ]
      }
    },
    {
      id: 'gc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $\\Delta G < 0$: spontaneous. $\\Delta G > 0$: non-spontaneous.
- Know the spontaneity table cold
- Watch unit conversions: $\\Delta H$ often in kJ, $\\Delta S$ in J
- $K > 1 \\implies \\Delta G° < 0$; $K < 1 \\implies \\Delta G° > 0$`
    }
  ]
};
