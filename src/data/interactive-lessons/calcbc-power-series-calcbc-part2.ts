export const calcbcPowerSeriesPart2Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps2-intro',
      type: 'text' as const,
      content: `# Power Series — Interval of Convergence

**Part 2 of 7 — Endpoint Testing**

### From Radius to Interval

After finding $R$, the open interval $( c - R,\\ c + R )$ is guaranteed. But endpoints need individual testing.

### Endpoint Testing Procedure

1. Find $R$ using Ratio/Root Test
2. Substitute $x = c - R$ into $\\sum a_n(x-c)^n$ → get a numerical series
3. Substitute $x = c + R$ → get another numerical series
4. Test each for convergence (often $p$-series, alternating, geometric, etc.)

### Complete Example: $\\sum_{n=1}^\\infty \\frac{x^n}{n}$

**Step 1:** $|a_{n+1}/a_n| = n/(n+1) \\to 1$. So $R = 1$.

**Step 2:** At $x = 1$: $\\sum 1/n$ — **diverges** (harmonic)

**Step 3:** At $x = -1$: $\\sum (-1)^n/n$ — **converges** (alternating harmonic)

$$\\boxed{\\text{Interval of convergence: } [-1, 1)}$$

> **AP Tip:** The interval notation matters! Use brackets $[$ for included endpoints, parentheses $($ for excluded.`
    },
    {
      id: 'ps2-patterns',
      type: 'text' as const,
      content: `### Common Endpoint Patterns

| Series | $R$ | At $x = c+R$ | At $x = c-R$ | IOC |
|--------|-----|-------------|-------------|-----|
| $\\sum x^n/n$ | 1 | $\\sum 1/n$ div. | $\\sum(-1)^n/n$ conv. | $[-1,1)$ |
| $\\sum x^n/n^2$ | 1 | $\\sum 1/n^2$ conv. | $\\sum(-1)^n/n^2$ conv. | $[-1,1]$ |
| $\\sum x^n$ | 1 | $\\sum 1$ div. | $\\sum(-1)^n$ div. | $(-1,1)$ |
| $\\sum n! x^n$ | 0 | N/A | N/A | $\\{0\\}$ |
| $\\sum x^n/n!$ | $\\infty$ | N/A | N/A | $(-\\infty,\\infty)$ |

### Key Insight

At the positive endpoint ($x = c + R$): all terms are positive → test with $p$-series, comparison, etc.

At the negative endpoint ($x = c - R$): signs alternate → often use AST.

Common outcome: one endpoint includes (alternating convergence), one excludes (divergence).`
    },
    {
      id: 'ps2-mc1',
      type: 'multiple-choice' as const,
      content: '**Endpoint Testing Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(x-2)^n}{n \\cdot 3^n}$. The interval of convergence is:',
            options: ['$[-1, 5)$', '$(-1, 5)$', '$[-1, 5]$', '$(-1, 5]$'],
            correctAnswer: 0,
            explanation: '$R = 3$, centered at $c = 2$. At $x = 5$: $\\sum 1/n$ diverges. At $x = -1$: $\\sum (-1)^n/n$ converges. IOC: $[-1, 5)$.'
          },
          {
            question: '$\\sum_{n=0}^\\infty \\frac{(x+1)^n}{2^n}$. The interval is:',
            options: ['$(-3, 1)$', '$[-3, 1]$', '$(-3, 1]$', '$[-3, 1)$'],
            correctAnswer: 0,
            explanation: 'Geometric: $r = (x+1)/2$. $|r| < 1$ when $|x+1| < 2$, so $-3 < x < 1$. At $x = -3$: $\\sum (-1)^n$ diverges. At $x = 1$: $\\sum 1$ diverges. IOC: $(-3, 1)$.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n x^n}{n^2}$. The interval is:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: '$R = 1$. At $x = 1$: $\\sum (-1)^n/n^2$ converges absolutely. At $x = -1$: $\\sum (-1)^n(-1)^n/n^2 = \\sum 1/n^2$ converges. Both endpoints in: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'ps2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interval Determination**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{n(x-4)^n}{5^n}$. At $x = 9$ the endpoint series is:',
            options: ['$\\sum n$ — diverges', '$\\sum (-1)^n n$ — diverges', '$\\sum n/5^n$ — converges', '$\\sum 1/n$ — diverges'],
            correctAnswers: ['$\\sum n$ — diverges'],
            hints: ['$x = 9$: $(x-4)^n/5^n = (5/5)^n = 1$. Series becomes $\\sum n$.'],
            explanation: 'At $x = 9$: $\\sum n \\cdot 1^n = \\sum n$ diverges. Right endpoint not included.'
          },
          {
            label: 'For the same series at $x = -1$:',
            options: ['$\\sum (-1)^n n$ — diverges', '$\\sum n$ — converges', '$\\sum (-1)^n / n$ — converges', '$\\sum n / (-5)^n$ — converges'],
            correctAnswers: ['$\\sum (-1)^n n$ — diverges'],
            hints: ['$x = -1$: $(x-4)^n = (-5)^n$. Then $(-5)^n/5^n = (-1)^n$.'],
            explanation: 'At $x = -1$: $\\sum n(-1)^n$. Since $|a_n| = n \\to \\infty$, this diverges. IOC: $(-1, 9)$.'
          }
        ]
      }
    },
    {
      id: 'ps2-input',
      type: 'input-box' as const,
      content: '**Find the Left Endpoint**',
      exercise: {
        question: '$\\sum_{n=0}^\\infty \\frac{(x+3)^n}{4^n}$ has center $c = -3$ and radius $R = 4$. What is the LEFT endpoint of the open interval? Enter a number.',
        correctAnswer: '-7',
        acceptableAnswers: ['-7'],
        hints: ['Left endpoint: $c - R = -3 - 4$.'],
        explanation: 'Left endpoint: $c - R = -3 - 4 = -7$. The open interval is $(-7, 1)$. Test endpoints to determine if brackets or parentheses.'
      }
    },
    {
      id: 'ps2-summary',
      type: 'text' as const,
      content: `### Summary

- After finding $R$, always test both endpoints
- Positive endpoint often yields a positive-term series
- Negative endpoint often yields an alternating series
- Four possible IOC shapes: $(a,b)$, $[a,b)$, $(a,b]$, $[a,b]$
- AP exam ALWAYS expects endpoint testing — don't skip it!

> **Next:** Part 3 — Operations on Power Series.`
    }
  ]
};
