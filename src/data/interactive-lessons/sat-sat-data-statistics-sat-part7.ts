export const satDataStatsPart7Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Putting It All Together**

You've learned all the core data & statistics concepts:
- Mean, median, mode and when to use each
- Range, IQR, standard deviation
- Two-way tables (marginal, joint, and conditional probability)
- Scatterplots, residuals, correlation ($r$ and $r^2$)
- Probability rules (complement, AND, OR)
- Study design, sampling bias, and margin of error

Now let's practice mixed problems — just like on the real SAT!
      `
    },
    {
      id: 'sat-ds7-warmup',
      type: 'input-boxes' as const,
      content: `
**Warm-Up** 🧮

1) The mean of 4 numbers is 20. Three are 15, 22, 28. What is the fourth?

2) $Q_1 = 10$, $Q_3 = 26$. What is the IQR?

3) If actual = 45 and residual = $-3$, what was the predicted value?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '16', '48'],
        hint1: 'Sum = $20 \\times 4 = 80$. Known = $15+22+28 = 65$.',
        hint2: 'IQR = $Q_3 - Q_1$.',
        hint3: 'Residual = actual − predicted. So $-3 = 45 - \\text{predicted}$.',
        explanation: '1) $80 - 65 = 15$. 2) $26 - 10 = 16$. 3) Predicted = $45+3 = 48$.'
      }
    },
    {
      id: 'sat-ds7-mixed1',
      type: 'multiple-choice' as const,
      content: `
**Mixed SAT Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '500 adults surveyed: 320 support a policy. Margin of error ±4.5%. Valid conclusion?',
            options: [
              'Exactly 64% of all adults support the policy',
              'Between 59.5% and 68.5% likely support it',
              'The survey proves the policy is popular',
              'At most 64% support it'
            ],
            correctAnswer: 1,
            explanation: 'Sample proportion = $320/500 = 64\\%$. With ±4.5%, true value is likely between 59.5% and 68.5%.'
          },
          {
            question: 'Correlation between daily TV hours and GPA is $r = -0.65$. Best interpretation?',
            options: [
              'TV causes lower grades',
              '65% of GPA variation is explained by TV',
              'Moderately strong negative association between TV and GPA',
              'Reducing TV increases GPA by 0.65'
            ],
            correctAnswer: 2,
            explanation: '$r = -0.65$ shows a moderately strong negative **association** (not causation). $r^2 = 0.42$ (not 65%) would be explained variation.'
          }
        ]
      }
    },
    {
      id: 'sat-ds7-cheat-sheet',
      type: 'text' as const,
      content: `
**Quick Reference — SAT Statistics Cheat Sheet** 📝

| Concept | Key Formula/Fact |
|---------|-----------------|
| Mean | $\\bar{x} = \\sum x_i / n$ |
| Median | Middle value (sort first!) |
| SD effects | Add constant → no change. Multiply by $c$ → SD × $|c|$ |
| IQR | $Q_3 - Q_1$ |
| $P(A \\text{ or } B)$ | $P(A) + P(B) - P(A \\cap B)$ |
| $P(A \\text{ and } B)$ | $P(A) \\times P(B)$ if independent |
| $P(A|B)$ | $P(A \\cap B) / P(B)$ |
| Residual | actual − predicted |
| $r$ | Strength + direction of linear fit |
| $r^2$ | Fraction of variation explained |
| Causation | Only from randomized experiments |
| Margin of error | Decreases with $\\sqrt{n}$ |
      `
    },
    {
      id: 'sat-ds7-final',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A class of 25 has mean score 78. The lowest score (42) is removed. New mean?',
            options: [
              '79.5',
              '80.0',
              '79.0',
              '80.5'
            ],
            correctAnswer: 0,
            explanation: 'Original sum = $78 \\times 25 = 1950$. Remove 42 → new sum = $1908$. New mean = $1908/24 = 79.5$.'
          },
          {
            question: 'Line of best fit: $y = -0.4x + 85$. The point $(50, 62)$ has residual:',
            options: [
              '$-3$',
              '$3$',
              '$-5$',
              '$5$'
            ],
            correctAnswer: 0,
            explanation: 'Predicted: $-0.4(50)+85 = 65$. Residual = $62-65 = -3$ (below the line).'
          }
        ]
      }
    }
  ]
}
