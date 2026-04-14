export const apStatsMeansInfPart7Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Summary Table

| Procedure | Statistic | SE | df |
|-----------|-----------|----|----|
| One-sample t | $\\\\bar{x}$ | $s/\\\\sqrt{n}$ | $n-1$ |
| Two-sample t | $\\\\bar{x}_1 - \\\\bar{x}_2$ | $\\\\sqrt{s_1^2/n_1 + s_2^2/n_2}$ | $\\\\min(n_1-1, n_2-1)$ |
| Matched pairs | $\\\\bar{d}$ | $s_d/\\\\sqrt{n}$ | $n-1$ |

### Key Reminders

- t-procedures are **robust** against non-Normality for large $n$
- Check for outliers with small samples
- Use a Normal probability plot to assess Normality for small $n$
- Degrees of freedom determine the shape of the t-distribution`
    },    {
      id: 'meansinference-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The t-distribution is “robust” means:',
            options: ['It gives exact results', 'It works well even with moderate departures from Normality', 'It has no assumptions', 'It is the same as the Normal'],
            correctAnswer: 1,
            explanation: 'Robust: t-procedures give reliable results even when the population isn’t perfectly Normal.'
          },
          {
            question: 'Which would MOST invalidate a t-procedure with $n = 10$?',
            options: ['Slightly skewed data', 'A strong outlier', 'A large standard deviation', 'Small effect size'],
            correctAnswer: 1,
            explanation: 'With small samples, outliers strongly influence $\\\\bar{x}$ and $s$, violating procedure assumptions.'
          },
          {
            question: '$\\\\bar{x} = 50, s = 8, n = 64$. 95% CI for $\\\\mu$ is approximately:',
            options: ['$(48, 52)$', '$(49, 51)$', '$(46, 54)$', '$(42, 58)$'],
            correctAnswer: 0,
            explanation: '$SE = 8/8 = 1$. With large $df$, $t^* \\\\approx 2$. CI: $50 \\\\pm 2 = (48, 52)$.'
          }
        ]
      }
    },    {
      id: 'meansinference-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$n = 50$, $\\\\bar{x} = 25.3$, $s = 4.0$. Test $H_0: \\\\mu = 24$ vs. $H_a: \\\\mu \\\\neq 24$ at $\\\\alpha = 0.05$.

**1)** $t = ?$ (round to 2 places)

**2)** $df = ?$

**3)** With $|t| = 2.30$ and $df = 49$, is the result significant at $\\\\alpha = 0.05$? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.30', '49', 'yes'],
        hint1: '$(25.3 - 24)/(4/\\\\sqrt{50})$',
        hint2: '$n - 1$',
        hint3: 'For $df = 49$, $t^* \\\\approx 2.01$ for 95%',
        explanation: '1) $t = 1.3/0.566 \\\\approx 2.30$. 2) $df = 49$. 3) Yes — $|t| = 2.30 > t^*(49) \\\\approx 2.01$, so reject $H_0$.'
      }
    }
  ]
};
