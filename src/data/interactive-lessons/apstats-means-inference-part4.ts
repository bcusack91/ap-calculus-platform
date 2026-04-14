export const apStatsMeansInfPart4Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p4-intro',
      type: 'text' as const,
      content: `# 📊 Two-Sample t-Procedures

**Part 4 of 7 — Comparing Two Means**

---

### Two-Sample t-Interval

$$(\\\\bar{x}_1 - \\\\bar{x}_2) \\\\pm t^* \\\\sqrt{\\\\frac{s_1^2}{n_1} + \\\\frac{s_2^2}{n_2}}$$

### Two-Sample t-Test

$$t = \\\\frac{(\\\\bar{x}_1 - \\\\bar{x}_2) - 0}{\\\\sqrt{\\\\frac{s_1^2}{n_1} + \\\\frac{s_2^2}{n_2}}}$$

---

### Degrees of Freedom

Use the calculator’s Welch’s approximation (complex formula), or the conservative approach:

$$df = \\\\min(n_1 - 1, n_2 - 1)$$

### Key Point

Do NOT pool variances unless told the populations have equal variance (which is rare on the AP exam).`
    },    {
      id: 'meansinference-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The two-sample t-test compares:',
            options: ['Two proportions', 'Two means from independent groups', 'Before and after on the same subjects', 'A mean to a known value'],
            correctAnswer: 1,
            explanation: 'Two-sample t-procedures compare means from two independent groups.'
          },
          {
            question: 'The conservative degrees of freedom for two-sample t is:',
            options: ['$n_1 + n_2 - 2$', '$\\\\min(n_1 - 1, n_2 - 1)$', '$n_1 + n_2$', '$(n_1 - 1)(n_2 - 1)$'],
            correctAnswer: 1,
            explanation: 'The conservative approach uses the smaller of $n_1 - 1$ and $n_2 - 1$.'
          },
          {
            question: 'You should NOT pool variances when:',
            options: ['Sample sizes are equal', 'Population variances are unknown or unequal', 'The test is one-tailed', 'Using a CI instead of a test'],
            correctAnswer: 1,
            explanation: 'Don’t assume equal variances unless you have strong evidence and are told to do so.'
          }
        ]
      }
    },    {
      id: 'meansinference-p4-input',
      type: 'input-boxes' as const,
      content: `
**Two-Sample Comparison** 🧮

Group A: $\\\\bar{x}_1 = 78, s_1 = 10, n_1 = 30$. Group B: $\\\\bar{x}_2 = 72, s_2 = 12, n_2 = 25$.

**1)** Point estimate for $\\\\mu_1 - \\\\mu_2$?

**2)** Conservative $df = ?$

**3)** $SE = \\\\sqrt{10^2/30 + 12^2/25}$ = ? (round to 2 places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '24', '3.10'],
        hint1: '$78 - 72$',
        hint2: '$\\\\min(29, 24)$',
        hint3: '$\\\\sqrt{100/30 + 144/25} = \\\\sqrt{3.33 + 5.76}$',
        explanation: '1) $78 - 72 = 6$. 2) $\\\\min(29, 24) = 24$. 3) $\\\\sqrt{9.09} \\\\approx 3.10$.'
      }
    }
  ]
};
