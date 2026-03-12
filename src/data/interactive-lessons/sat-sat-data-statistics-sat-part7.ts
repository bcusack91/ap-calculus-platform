export const satDataStatsPart7Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds7-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 7 of 7 — Review & SAT Mixed Practice**

### Data & Statistics Quick Reference

| Concept | Key Point |
|---------|-----------|
| Mean | Sum ÷ count; affected by outliers |
| Median | Middle value; resistant to outliers |
| SD | Measures spread; add → same, multiply → changes |
| Scatterplot slope | Predicted change in $y$ per unit $x$ |
| Residual | Actual − predicted |
| Two-way tables | Watch the denominator! |
| Probability AND | Multiply (if independent) |
| Probability OR | Add, then subtract overlap |
| Causation | Only from randomized experiments |

### Common SAT Question Types

1. **Calculate** the mean/median from given data
2. **Interpret** a slope or y-intercept in context
3. **Read** a two-way table for conditional probability
4. **Evaluate** whether a study conclusion is valid
5. **Compare** standard deviations visually`
    },
    {
      id: 'ds7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The mean of a dataset is 50. If every value is multiplied by 3 and then 10 is added, the new mean is:',
            options: ['$160$', '$150$', '$180$', '$60$'],
            correctAnswer: 0,
            explanation: 'First multiply: mean $= 50 \\times 3 = 150$. Then add: mean $= 150 + 10 = 160$.'
          },
          {
            question: 'A regression equation for test scores is $\\hat{y} = 5.2x + 30$ where $x$ = hours studied. A student studies 10 hours and scores 90. The residual is:',
            options: ['$8$', '$-8$', '$82$', '$0$'],
            correctAnswer: 0,
            explanation: 'Predicted: $5.2(10) + 30 = 82$. Residual = actual − predicted $= 90 - 82 = 8$ (above the line).'
          },
          {
            question: 'A survey of 500 randomly selected adults found that 60% support a new policy. Which conclusion is most appropriate?',
            options: ['About 60% of all adults likely support the policy', 'Exactly 60% of all adults support the policy', 'The policy should be implemented', 'More research is needed before drawing any conclusion'],
            correctAnswer: 0,
            explanation: 'Random sample → can generalize to the population. "About 60%" is appropriate (with margin of error). We can\'t say "exactly" from a sample.'
          }
        ]
      }
    },
    {
      id: 'ds7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Statistics questions are about 25-30% of SAT math — they're heavily tested
- Always identify whether a question asks about the whole population or a subgroup
- Interpret slopes, intercepts, and residuals in the context of the problem
- Correlation ≠ causation — this appears on almost every SAT`
    }
  ]
};
