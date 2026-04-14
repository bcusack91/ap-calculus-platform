export const calcbcRadConvPart2Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc2-intro',
      type: 'text' as const,
      content: `# Endpoint Testing

**Part 2 of 7 — Completing the Interval**

### The Endpoint Testing Process

At $x = a + R$ and $x = a - R$, substitute and get a **numeric series**.

Then apply whichever convergence test fits:

| Endpoint series type | Test to use |
|---------------------|------------|
| $\\sum 1/n^p$ | $p$-Series ($p > 1$: converges) |
| $\\sum (-1)^n/n^p$ | AST ($p > 0$: converges) |
| $\\sum 1/n$ | Harmonic (diverges) |
| $\\sum (-1)^n$ | Divergence Test (diverges) |
| $\\sum 1/n(\\ln n)^p$ | Integral Test |

### Four Possible IOC Outcomes

$$\\boxed{(a-R, a+R) \\quad [a-R, a+R) \\quad (a-R, a+R] \\quad [a-R, a+R]}$$

> **Key Fact:** There's no shortcut — every endpoint produces a different series that must be checked individually.`
    },
    {
      id: 'rc2-examples',
      type: 'text' as const,
      content: `### Complete Example: $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x+1)^n}{n \\cdot 3^n}$

**Step 1 — Find $R$:**

$|c_{n+1}/c_n| = \\frac{n}{(n+1) \\cdot 3} \\to \\frac{1}{3}$. $R = 3$.

Center $a = -1$: open interval $(-4, 2)$.

**Step 2 — Right endpoint $x = 2$:**

$\\sum \\frac{(-1)^n (3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n}{n}$

Alternating harmonic → **converges** (AST).

**Step 3 — Left endpoint $x = -4$:**

$\\sum \\frac{(-1)^n (-3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n \\cdot (-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{1}{n}$

Harmonic → **diverges**.

**IOC: $(-4, 2]$**

### Common Endpoint Patterns

| $c_n$ | Right endpoint ($x = a + R$) | Left endpoint ($x = a - R$) |
|-------|------------------------------|----------------------------|
| $1/n$ | $\\sum 1/n$ (div) | $\\sum (-1)^n/n$ (conv) |
| $1/n^2$ | $\\sum 1/n^2$ (conv) | $\\sum (-1)^n/n^2$ (conv) |
| $(-1)^n/n$ | $\\sum (-1)^n \\cdot 1/n$ (conv) | $\\sum 1/n$ (div) |`
    },
    {
      id: 'rc2-mc1',
      type: 'multiple-choice' as const,
      content: '**Endpoint Testing**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$, $R = 1$. At $x = 1$: $\\sum 1/n^2$. At $x = -1$: $\\sum (-1)^n/n^2$. IOC:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: '$x = 1$: $\\sum 1/n^2$ converges ($p = 2$). $x = -1$: $\\sum (-1)^n/n^2$ converges (AST or absolute). Both endpoints included.'
          },
          {
            question: 'At an endpoint you get $\\sum (-1)^n \\sqrt{n}$. This:',
            options: ['Diverges (terms $\\to \\infty$, fails Divergence Test)', 'Converges by AST', 'Converges absolutely', 'Is inconclusive'],
            correctAnswer: 0,
            explanation: '$|(-1)^n\\sqrt{n}| = \\sqrt{n} \\to \\infty \\neq 0$. Diverges by Divergence Test.'
          },
          {
            question: 'For $\\sum n! x^n$, $R = 0$. How many endpoints to check?',
            options: ['None — $R = 0$ means the series converges only at $x = 0$', 'Two', 'One', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'When $R = 0$, the IOC is just $\\{0\\}$. No endpoints to check.'
          }
        ]
      }
    },
    {
      id: 'rc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Endpoint Analysis**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(x-5)^n}{n\\sqrt{n} \\cdot 2^n}$, $R = 2$. At $x = 7$ ($= 5 + 2$):: $\\sum 1/(n\\sqrt{n})$. This:',
            options: ['Converges ($p$-series with $p = 3/2 > 1$)', 'Diverges (harmonic-like)', 'Inconclusive', 'Alternates'],
            correctAnswers: ['Converges ($p$-series with $p = 3/2 > 1$)'],
            hints: ['$1/(n \\cdot n^{1/2}) = 1/n^{3/2}$, a $p$-series.'],
            explanation: '$\\sum 1/n^{3/2}$ converges since $p = 3/2 > 1$.'
          },
          {
            label: 'Same series at $x = 3$ ($= 5 - 2$): $\\sum (-1)^n/(n^{3/2})$. This:',
            options: ['Converges (AST or absolutely since $\\sum 1/n^{3/2}$ converges)', 'Diverges', 'Inconclusive', 'Need more terms'],
            correctAnswers: ['Converges (AST or absolutely since $\\sum 1/n^{3/2}$ converges)'],
            hints: ['If $\\sum |a_n|$ converges, then $\\sum a_n$ converges absolutely.'],
            explanation: '$\\sum |a_n| = \\sum 1/n^{3/2}$ converges, so the series converges absolutely. IOC: $[3, 7]$.'
          }
        ]
      }
    },
    {
      id: 'rc2-input',
      type: 'input-box' as const,
      content: '**Full IOC**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(x+4)^n}{n \\cdot 7^n}$. $R = 7$, center $a = -4$. The IOC is $(-11, 3]$, $[-11, 3)$, $(-11, 3)$, or $[-11, 3]$? Enter in interval notation.',
        correctAnswer: '[-11, 3)',
        acceptableAnswers: ['[-11, 3)', '[-11,3)'],
        hints: ['$x = 3$: $(3+4)^n/(n \\cdot 7^n) = 1/n$ → harmonic, diverges.', '$x = -11$: $(-7)^n/(n \\cdot 7^n) = (-1)^n/n$ → alternating harmonic, converges.'],
        explanation: '$x = 3$: $\\sum 1/n$ diverges. $x = -11$: $\\sum (-1)^n/n$ converges. IOC: $[-11, 3)$.'
      }
    },
    {
      id: 'rc2-summary',
      type: 'text' as const,
      content: `### Summary

- Always check both endpoints when $0 < R < \\infty$
- Substitute $x = a \\pm R$ to get a numeric series
- Apply the appropriate convergence test to each
- Four possible bracket combinations: use $[$ for convergent, $($ for divergent

> **Next:** Part 3 — Special Cases and Tricky Series.`
    }
  ]
};
