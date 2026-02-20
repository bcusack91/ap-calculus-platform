export const mcatSciPassagePart2Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 2 of 7 — Data Interpretation**

### Reading Graphs

| Graph Element | What to Identify |
|--------------|-----------------|
| X-axis | Independent variable (what's being changed) |
| Y-axis | Dependent variable (what's being measured) |
| Trend | Increasing, decreasing, plateauing, sigmoidal |
| Units | Must match answer choices |

### Common Data Patterns on the MCAT

| Pattern | Interpretation |
|---------|---------------|
| Linear increase | Direct proportional relationship |
| Inverse relationship | As X increases, Y decreases |
| Plateau | Maximum reached (saturation, $V_{max}$) |
| Sigmoidal (S-curve) | Cooperative binding (hemoglobin) or logistic growth |
| Logarithmic | pH scale, enzyme activity vs. pH |

### Table Interpretation Strategy

1. Read column headers (what's measured)
2. Identify controls vs. experimental conditions
3. Look for the biggest differences between groups
4. Check if changes are statistically meaningful (error bars, p-values)

### MCAT Trap: Correlation vs. Causation

A passage shows that A correlates with B. Answer choices may state "A causes B."
- Correlation $\\neq$ Causation unless the experiment was well-controlled
- Look for confounding variables!`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Data Interpretation** 🎯',
      exercise: {
        questions: [
          {
            question: 'A graph shows enzyme activity vs. substrate concentration with a plateau at high concentrations. The plateau indicates:',
            options: ['All enzyme active sites are saturated ($V_{max}$ reached)', 'The enzyme is denatured', 'Substrate is being consumed', 'The experiment failed'],
            correctAnswer: 0,
            explanation: 'At high substrate concentration, all enzyme active sites are occupied → increasing substrate further has no effect on rate → plateau at $V_{max}$. This is the classic Michaelis-Menten curve.'
          }
        ]
      }
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Always identify axes, units, and trends FIRST
- Plateaus = saturation. Sigmoidal = cooperativity. Linear = proportional.
- Tables: compare experimental to control groups
- Correlation $\\neq$ Causation — always look for confounding variables`
    }
  ]
};
