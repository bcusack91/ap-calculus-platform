export const apStatsChiSquarePart1Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p1-intro',
      type: 'text' as const,
      content: `# 📊 Chi-Square Goodness-of-Fit Test

**Part 1 of 7 — Testing Categorical Distributions**

---

### When to Use Chi-Square Goodness-of-Fit

Use when you want to test whether **observed frequencies** match **expected frequencies** for a categorical variable.

**Example:** A die is rolled 60 times. Do the results suggest it is fair?

| Outcome | 1 | 2 | 3 | 4 | 5 | 6 |
|---------|---|---|---|---|---|---|
| Observed | 8 | 12 | 7 | 15 | 9 | 9 |
| Expected | 10 | 10 | 10 | 10 | 10 | 10 |

---

### The Chi-Square Statistic

$$\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$$

where $O_i$ = observed count and $E_i$ = expected count.

**For the die example:**
$$\\chi^2 = \\frac{(8-10)^2}{10} + \\frac{(12-10)^2}{10} + \\cdots = \\frac{4+4+9+25+1+1}{10} = 4.4$$

---

### Hypotheses

- $H_0$: The observed distribution matches the expected distribution
- $H_a$: The observed distribution does NOT match the expected

---

### Conditions

1. **Random** sample or random assignment
2. **Expected counts** ≥ 5 for all categories
3. **Independence** — observations are independent

> 🔑 Chi-square tests are always **right-tailed** — larger $\\chi^2$ values provide more evidence against $H_0$.`
    },
    {
      id: 'apstats-chisquaretests-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Goodness-of-Fit Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A chi-square goodness-of-fit test is used when comparing:',
            options: ['Two means', 'Observed vs. expected frequencies', 'Two proportions', 'Correlation coefficients'],
            correctAnswer: 1,
            explanation: 'Goodness-of-fit tests compare observed counts to expected counts for a single categorical variable.'
          },
          {
            question: 'Degrees of freedom for a goodness-of-fit test with $k$ categories:',
            options: ['$k$', '$k - 1$', '$k - 2$', '$n - 1$'],
            correctAnswer: 1,
            explanation: 'df = $k - 1$, where $k$ is the number of categories.'
          },
          {
            question: 'If all observed counts equal expected counts, $\\chi^2 =$',
            options: ['$0$', '$1$', '$k$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'When $O_i = E_i$ for all $i$, each term $(O_i - E_i)^2/E_i = 0$, so $\\chi^2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p1-input',
      type: 'input-boxes' as const,
      content: `
**Chi-Square Calculation** 🧮

A bag should contain equal numbers of 4 colors. From 80 candies: Red=24, Blue=18, Green=22, Yellow=16.

**1)** Expected count for each color = 80/4 = ?

**2)** Compute $\\chi^2 = \\frac{(24-20)^2}{20} + \\frac{(18-20)^2}{20} + \\frac{(22-20)^2}{20} + \\frac{(16-20)^2}{20}$

**3)** Degrees of freedom = $k - 1$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '2', '3'],
        hint1: '$80/4 = 20$ per color.',
        hint2: '$(16+4+4+16)/20 = 40/20 = 2$.',
        hint3: '$4 - 1 = 3$ degrees of freedom.',
        explanation: '1) 20 each. 2) $\\chi^2 = 2$. 3) df = 3.'
      }
    }
  ]
};
