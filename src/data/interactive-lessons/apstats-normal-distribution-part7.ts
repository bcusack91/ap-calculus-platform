export const apStatsNormalDistPart7Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p7-intro',
      type: 'text' as const,
      content: `# 📋 Normal Distribution Review

**Part 7 of 7 — Summary and Applications**

---

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $z = \\frac{x - \\mu}{\\sigma}$ | Convert any value to standard normal |
| $x = \\mu + z\\sigma$ | Convert from z-score back to original units |
| $P(a \\leq Z \\leq b) = P(Z \\leq b) - P(Z \\leq a)$ | Find probability between two values |
| $P(X \\leq x_a) = p/100$ | $x_a$ is the $p$th percentile |

---

### Common z-Values to Know

| Confidence Level | z* |
|-----------------|-----|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |`
    },
    {
      id: 'apstats-normaldistribution-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Final Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\sigma$ doubles but $\\mu$ stays the same, the normal curve becomes:',
            options: ['Taller and narrower', 'Shorter and wider', 'Shifted to the right', 'Unchanged in shape'],
            correctAnswer: 1,
            explanation: 'Larger $\\sigma$ means more spread, so the curve is wider and, because the total area stays 1, shorter. Shifting left or right is controlled by $\\mu$, which did not change.'
          },
          {
            question: 'To find the top 5% of a distribution, you need the z-score for:',
            options: ['5th percentile', '95th percentile', '50th percentile', '97.5th percentile'],
            correctAnswer: 1,
            explanation: 'Top 5% means 95% of values are below the cutoff, so it is the 95th percentile ($z = 1.645$). The 5th percentile marks the bottom 5%, and the 97.5th percentile is the cutoff for a top 2.5%.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mastery Review** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'The Empirical Rule applies to:', options: ['Any distribution', 'Normal distributions only', 'Skewed distributions', 'Uniform distributions'] },
          { label: 'A z-score of −1.5 means:', options: ['1.5 SDs above mean', '1.5 SDs below mean', 'At the mean', '1.5 percentile'] },
          { label: 'The total area under any normal curve is:', options: ['1', '0.5', '100', 'Equal to $\\sigma$'] }
        ],
        correctAnswers: ['Normal distributions only', '1.5 SDs below mean', '1'],
        hint1: 'The 68-95-99.7 rule is specific to normal distributions.',
        hint2: 'Negative z = below mean.',
        hint3: 'Total probability is always 1.',
        explanation: 'Empirical Rule: normal only. z = −1.5: below mean. The total area under a normal curve is 1 (100% of the probability).'
      }
    }
  ]
};
