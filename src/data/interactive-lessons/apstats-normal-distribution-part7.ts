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
| $z = \frac{x - \mu}{\sigma}$ | Convert any value to standard normal |
| $x = \mu + z\sigma$ | Convert from z-score back to original units |
| $P(a \leq Z \leq b) = P(Z \leq b) - P(Z \leq a)$ | Find probability between two values |
| $Y = a + bX \Rightarrow N(a+b\mu, |b|\sigma)$ | Linear transformation |
| $X + Y \Rightarrow N(\mu_X + \mu_Y, \sqrt{\sigma_X^2+\sigma_Y^2})$ | Sum of independent normals |

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
            question: 'If $\sigma$ doubles but $\mu$ stays the same, the normal curve becomes:',
            options: ['Taller and narrower', 'Shorter and wider', 'Shifted right', 'Unchanged'],
            correctAnswer: 1,
            explanation: 'Larger $\sigma$ means more spread, so the curve is shorter (to maintain total area = 1) and wider.'
          },
          {
            question: 'To find the top 5% of a distribution, you need the z-score for:',
            options: ['5th percentile', '95th percentile', '50th percentile', '97.5th percentile'],
            correctAnswer: 1,
            explanation: 'Top 5% means 95% are below → 95th percentile → $z = 1.645$.'
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
          { label: 'Variances of independent RVs:', options: ['Always add', 'Always subtract', 'Add for sums, subtract for differences', 'Cannot be combined'] }
        ],
        correctAnswers: ['Normal distributions only', '1.5 SDs below mean', 'Always add'],
        hint1: 'The 68-95-99.7 rule is specific to normal distributions.',
        hint2: 'Negative z = below mean.',
        hint3: 'Variances always add, whether summing or subtracting.',
        explanation: 'Empirical Rule: normal only. z = −1.5: below mean. Variances add for both sums and differences.'
      }
    }
  ]
};
