export const mcatSciPassagePart7Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp7-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 7 of 7 — Psych/Soc Passage Tactics**

### Psych/Soc Passage Features

- Describe research studies in psychology or sociology
- Often include statistics (mean, standard deviation, p-values)
- Test application of theories to new scenarios

### Common Statistical Concepts

| Concept | Meaning |
|---------|---------|
| **Mean** | Average |
| **Standard deviation** | Spread of data around the mean |
| **p-value** | Probability result occurred by chance ($p < 0.05$ = significant) |
| **Correlation ($r$)** | Strength and direction of linear relationship ($-1$ to $+1$) |
| **Confidence interval** | Range likely to contain true value |

### Psych/Soc Question Strategy

1. **Identify the theory being tested**: What psychological/sociological concept applies?
2. **Match the scenario to the theory**: Don't just know definitions — apply them
3. **Watch for bait answers**: Answers that use correct psych terms but wrong context
4. **Eliminate**: If two answers are similar, usually neither is correct — look for the one that's distinctly right

### Research Methods in Psych/Soc Passages

- **Operationalization**: How abstract concepts are measured (e.g., "happiness" measured by survey score)
- **Sampling bias**: Sample doesn't represent population
- **Self-report bias**: Participants may not report truthfully
- **Hawthorne effect**: Behavior changes because subjects know they're being observed`
    },
    {
      id: 'sp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Psych/Soc Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A study on exercise and mood has $p = 0.03$. This means:',
            options: ['There is a 3% probability the results occurred by chance — the result is statistically significant', 'There is a 97% chance the hypothesis is true', 'The effect size is large', 'The study has high reliability'],
            correctAnswer: 0,
            explanation: '$p < 0.05$ means statistically significant — there\'s less than a 5% chance the results are due to random chance. However, p-value does NOT tell you effect size, clinical significance, or the probability the hypothesis is true (common MCAT trap).'
          }
        ]
      }
    },
    {
      id: 'sp7-summary',
      type: 'text' as const,
      content: `### Science Passage Strategy — Complete! ✅

Master these passage-reading and question-answering strategies across all three science sections. The MCAT rewards methodical reading, strategic elimination, and the ability to connect passage data with your content knowledge.`
    }
  ]
};
