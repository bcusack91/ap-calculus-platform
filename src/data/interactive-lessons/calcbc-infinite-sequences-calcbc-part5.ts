export const calcbcSequencesPart5Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq5-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Telescoping & $p$-Series

**Part 5 of 7 — Special Series Types**

### Telescoping Series

A **telescoping** series has partial sums where most terms cancel:

$$\\sum_{n=1}^\\infty \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = \\lim_{N\\to\\infty}\\left(1 - \\frac{1}{N+1}\\right) = 1$$

**How to recognize:** Partial fractions often reveal telescoping structure.

### $p$-Series

$$\\boxed{\\sum_{n=1}^\\infty \\frac{1}{n^p} \\text{ converges if and only if } p > 1}$$

| Series | $p$ | Converges? |
|--------|-----|-----------|
| $\\sum 1/n$ | $1$ | No (harmonic) |
| $\\sum 1/n^2$ | $2$ | Yes ($= \\pi^2/6$) |
| $\\sum 1/\\sqrt{n}$ | $1/2$ | No |
| $\\sum 1/n^3$ | $3$ | Yes |

> **AP Tip:** The $p$-series test and geometric series test are the most fundamental — many other tests compare to these.`
    },
    {
      id: 'seq5-telescope',
      type: 'text' as const,
      content: `### Telescoping Example

Find $\\sum_{n=1}^\\infty \\frac{1}{n(n+2)}$.

**Step 1.** Partial fractions: $\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$

**Step 2.** Write partial sums:
$$S_N = \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{2} - \\frac{1}{4}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots\\right]$$

Most terms telescope! Surviving terms:
$$S_N = \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{N+1} - \\frac{1}{N+2}\\right)$$

$$\\sum_{n=1}^\\infty \\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{3}{2}\\right) = \\frac{3}{4}$$`
    },
    {
      id: 'seq5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{1}{n^{0.99}}$:',
            options: ['Diverges ($p = 0.99 \\le 1$)', 'Converges ($p$ is close to $1$)', 'Converges (terms go to $0$)', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$p = 0.99 < 1$, so the $p$-series diverges. Being "close to $1$" from below is not enough. The boundary is sharp.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = $',
            options: ['$1$', '$\\infty$', '$1/2$', '$0$'],
            correctAnswer: 0,
            explanation: 'Telescoping: $S_N = 1 - \\frac{1}{N+1} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'seq5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{1}{n^{3/2}}$ is a $p$-series with $p = 3/2$. It:',
            options: ['Converges (since $3/2 > 1$)', 'Diverges', 'Cannot be determined', 'Equals $\\pi^2/6$'],
            correctAnswers: ['Converges (since $3/2 > 1$)'],
            hints: ['$p$-series converges iff $p > 1$.'],
            explanation: '$p = 3/2 > 1$, so the series converges. (The exact sum has no simple closed form.)'
          },
          {
            label: 'To sum $\\sum \\frac{1}{n(n+1)}$, first use:',
            options: ['Partial fractions: $\\frac{1}{n} - \\frac{1}{n+1}$', 'The ratio test', 'Integration', 'The $n$th term test'],
            correctAnswers: ['Partial fractions: $\\frac{1}{n} - \\frac{1}{n+1}$'],
            hints: ['This is a classic telescoping series.'],
            explanation: '$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Then $S_N = 1 - \\frac{1}{N+1} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'seq5-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$. (The series telescopes to a simple value.)',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$.', '$S_N = 1 - \\frac{1}{N+1}$.'],
        explanation: '$S_N = (1 - 1/2) + (1/2 - 1/3) + \\cdots + (1/N - 1/(N+1)) = 1 - 1/(N+1) \\to 1$.'
      }
    },
    {
      id: 'seq5-summary',
      type: 'text' as const,
      content: `### Summary

- Telescoping series: write partial sums, identify cancellation
- $p$-series: $\\sum 1/n^p$ converges iff $p > 1$
- The harmonic series ($p = 1$) is the critical boundary case
- Partial fractions often reveal hidden telescoping

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
