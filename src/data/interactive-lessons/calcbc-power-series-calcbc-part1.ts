export const calcbcPowerSeriesPart1Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps1-intro',
      type: 'text' as const,
      content: `# Power Series — Definition & Convergence

**Part 1 of 7 — Introduction to Power Series**

### What Is a Power Series?

A power series centered at $x = c$ is:

$$\\boxed{\\sum_{n=0}^\\infty a_n (x - c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + \\cdots}$$

When $c = 0$, this is a **Maclaurin-type** power series: $\\sum a_n x^n$.

### Key Terminology

| Term | Meaning |
|------|---------|
| **Center** $c$ | The point about which the series is expanded |
| **Coefficients** $a_n$ | The constants multiplying each power |
| **Radius of convergence** $R$ | Series converges for $|x - c| < R$ |
| **Interval of convergence** | Full interval including endpoint analysis |

### Three Convergence Possibilities

For any power series, exactly ONE is true:
1. Converges only at $x = c$ (radius $R = 0$)
2. Converges for all $x$ (radius $R = \\infty$)
3. Converges for $|x - c| < R$ and diverges for $|x - c| > R$ (finite $R > 0$)

> **AP Tip:** The Ratio Test is the primary tool for finding the radius of convergence.`
    },
    {
      id: 'ps1-ratio',
      type: 'text' as const,
      content: `### Finding the Radius with the Ratio Test

For $\\sum a_n (x-c)^n$, apply the Ratio Test:

$$L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| \\cdot |x - c|$$

Converges when $L < 1$, i.e., $|x - c| < \\frac{1}{\\lim |a_{n+1}/a_n|}$.

$$\\boxed{R = \\frac{1}{\\lim_{n\\to\\infty} |a_{n+1}/a_n|}}$$

### Example: $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$

$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{n+1} \\to 0$

So $L = 0 \\cdot |x| = 0 < 1$ for all $x$. Radius $R = \\infty$. (This is the series for $e^x$.)

### Example: $\\sum_{n=0}^\\infty n! x^n$

$\\left|\\frac{a_{n+1}}{a_n}\\right| = n+1 \\to \\infty$

So $L = \\infty$ for any $x \\neq 0$. Radius $R = 0$. Converges only at $x = 0$.`
    },
    {
      id: 'ps1-mc1',
      type: 'multiple-choice' as const,
      content: '**Finding Radius of Convergence**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^\\infty \\frac{x^n}{3^n}$. The radius of convergence is:',
            options: ['$R = 3$', '$R = 1$', '$R = 1/3$', '$R = \\infty$'],
            correctAnswer: 0,
            explanation: 'This is geometric: $\\sum (x/3)^n$. Converges when $|x/3| < 1$, i.e., $|x| < 3$. So $R = 3$.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{n x^n}{2^n}$. The radius of convergence is:',
            options: ['$R = 2$', '$R = 1$', '$R = 1/2$', '$R = \\infty$'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = (n+1)\\cdot 2^n / (n \\cdot 2^{n+1}) = (n+1)/(2n) \\to 1/2$. So $R = 1/(1/2) = 2$.'
          },
          {
            question: 'A power series centered at $c = 3$ with $R = 5$ converges on which interval (before endpoint testing)?',
            options: ['$(-2, 8)$', '$(3, 8)$', '$(-5, 5)$', '$(0, 6)$'],
            correctAnswer: 0,
            explanation: '$|x - 3| < 5$ means $-5 < x - 3 < 5$, so $-2 < x < 8$. Endpoints must be tested separately.'
          }
        ]
      }
    },
    {
      id: 'ps1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Convergence Analysis**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=0}^\\infty (2x)^n$ converges when:',
            options: ['$|x| < 1/2$ (geometric, $r = 2x$)', '$|x| < 1$', '$|x| < 2$', 'All $x$'],
            correctAnswers: ['$|x| < 1/2$ (geometric, $r = 2x$)'],
            hints: ['Geometric series $\\sum r^n$ converges when $|r| < 1$.'],
            explanation: '$\\sum (2x)^n$ is geometric with ratio $r = 2x$. Converges when $|2x| < 1$, i.e., $|x| < 1/2$. $R = 1/2$.'
          },
          {
            label: 'If the Ratio Test gives $L = |x-1|/4$, the radius of convergence is:',
            options: ['$R = 4$ (converges when $|x-1|/4 < 1$)', '$R = 1/4$', '$R = 1$', 'Cannot determine'],
            correctAnswers: ['$R = 4$ (converges when $|x-1|/4 < 1$)'],
            hints: ['$L < 1$ means $|x-1| < 4$.'],
            explanation: '$L = |x-1|/4 < 1 \\iff |x-1| < 4$. So $R = 4$, centered at $c = 1$.'
          }
        ]
      }
    },
    {
      id: 'ps1-input',
      type: 'input-box' as const,
      content: '**Radius Computation**',
      exercise: {
        question: 'Find the radius of convergence of $\\sum_{n=0}^\\infty \\frac{n^2 x^n}{5^n}$. Enter $R$ as a whole number.',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['$|a_{n+1}/a_n| \\cdot |x| = ((n+1)^2/n^2) \\cdot |x|/5 \\to |x|/5$.'],
        explanation: '$\\frac{|(n+1)^2 x^{n+1}/5^{n+1}|}{|n^2 x^n/5^n|} = \\frac{(n+1)^2}{5n^2}|x| \\to |x|/5$. Converges when $|x|/5 < 1$, so $R = 5$.'
      }
    },
    {
      id: 'ps1-summary',
      type: 'text' as const,
      content: `### Summary

- Power series: $\\sum a_n(x-c)^n$ — an "infinite polynomial"
- Radius found via Ratio Test: $R = 1/\\lim|a_{n+1}/a_n|$
- Three possibilities: $R = 0$, $R = \\infty$, or finite $R$
- Endpoints must ALWAYS be tested separately

> **Next:** Part 2 — Interval of Convergence (Endpoint Testing).`
    }
  ]
};
