export const calcbcTaylorPart1Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm1-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series — The General Formula

**Part 1 of 7 — Taylor Polynomial Construction**

### Taylor Series Centered at $x = c$

$$\\boxed{f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x - c)^n}$$

$= f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2 + \\frac{f'''(c)}{3!}(x-c)^3 + \\cdots$

### Maclaurin Series (Special Case: $c = 0$)

$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots$$

### Taylor Polynomials

The $n$th-degree Taylor polynomial is the partial sum:

$$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(c)}{k!}(x-c)^k$$

| Degree | Polynomial | Approximation Quality |
|--------|-----------|---------------------|
| $T_0$ | $f(c)$ | Constant (matches value) |
| $T_1$ | $f(c) + f'(c)(x-c)$ | Linear (matches slope) |
| $T_2$ | $+ f''(c)(x-c)^2/2$ | Quadratic (matches concavity) |

> **AP Tip:** "Write the $n$th-degree Taylor polynomial" means $T_n(x)$. "Write the first four nonzero terms of the Taylor series" may give a higher-degree polynomial.`
    },
    {
      id: 'tm1-example',
      type: 'text' as const,
      content: `### Example: Taylor Series for $e^x$ at $c = 0$

$f(x) = e^x \\implies f^{(n)}(x) = e^x \\implies f^{(n)}(0) = 1$ for all $n$

$$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24} + \\cdots$$

### Example: Taylor Series for $\\sin x$ at $c = 0$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ |
|-----|-------------|-------------|
| 0 | $\\sin x$ | $0$ |
| 1 | $\\cos x$ | $1$ |
| 2 | $-\\sin x$ | $0$ |
| 3 | $-\\cos x$ | $-1$ |
| 4 | $\\sin x$ | $0$ |

Pattern repeats with period 4: $0, 1, 0, -1, 0, 1, 0, -1, \\ldots$

$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$`
    },
    {
      id: 'tm1-mc1',
      type: 'multiple-choice' as const,
      content: '**Taylor Polynomial Basics**',
      exercise: {
        questions: [
          {
            question: 'The coefficient of $(x-c)^n$ in the Taylor series of $f$ about $c$ is:',
            options: ['$f^{(n)}(c)/n!$', '$f^{(n)}(c)$', '$f(c)/n!$', '$f^{(n)}(0)/n!$'],
            correctAnswer: 0,
            explanation: 'By definition: $a_n = f^{(n)}(c)/n!$.'
          },
          {
            question: 'The 3rd-degree Maclaurin polynomial for $\\cos x$ is:',
            options: ['$1 - x^2/2$', '$1 - x^2/2 + x^4/24$', '$x - x^3/6$', '$1 - x + x^2/2 - x^3/6$'],
            correctAnswer: 0,
            explanation: '$\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$. The 3rd-degree polynomial includes terms up to $x^3$: since the $x^3$ coefficient is $0$, $T_3(x) = 1 - x^2/2$.'
          },
          {
            question: 'A Maclaurin series is a Taylor series centered at:',
            options: ['$c = 0$', '$c = 1$', 'Any $c$', '$c = \\pi$'],
            correctAnswer: 0,
            explanation: 'Maclaurin = Taylor centered at $0$. Named after Colin Maclaurin.'
          }
        ]
      }
    },
    {
      id: 'tm1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Building Taylor Polynomials**',
      exercise: {
        dropdowns: [
          {
            label: 'For $f(x) = \\ln x$ centered at $c = 1$: $f(1) = 0$, $f\'(1) = 1$, $f\'\'(1) = -1$. The $T_2(x)$ is:',
            options: ['$(x-1) - (x-1)^2/2$', '$x - x^2/2$', '$(x-1) + (x-1)^2/2$', '$1 + (x-1) - (x-1)^2/2$'],
            correctAnswers: ['$(x-1) - (x-1)^2/2$'],
            hints: ['$T_2 = f(1) + f\'(1)(x-1) + f\'\'(1)(x-1)^2/2!$.'],
            explanation: '$T_2 = 0 + 1\\cdot(x-1) + (-1)(x-1)^2/2 = (x-1) - (x-1)^2/2$.'
          },
          {
            label: 'The key difference between "4th-degree Taylor polynomial" and "first 4 nonzero terms" is:',
            options: ['Degree polynomial has exactly terms through $x^4$; nonzero terms skips zeros', 'They are the same thing', 'Degree is always larger', 'Nonzero terms is always larger'],
            correctAnswers: ['Degree polynomial has exactly terms through $x^4$; nonzero terms skips zeros'],
            hints: ['For $\\sin x$: $T_4 = x - x^3/6$ (only 2 nonzero terms), but "first 4 nonzero terms" = $x - x^3/6 + x^5/120 - x^7/5040$.'],
            explanation: '$T_4(\\sin x) = x - x^3/6$ (no $x^4$ term). First 4 nonzero terms goes up to $x^7$. They\'re different!'
          }
        ]
      }
    },
    {
      id: 'tm1-input',
      type: 'input-box' as const,
      content: '**Derivative Extraction**',
      exercise: {
        question: 'The Maclaurin series for $f$ has $a_4 = 5/24$. Find $f^{(4)}(0)$. (Enter a whole number.)',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['$a_4 = f^{(4)}(0)/4! = f^{(4)}(0)/24$.'],
        explanation: '$f^{(4)}(0)/4! = 5/24$, so $f^{(4)}(0) = 24 \\cdot 5/24 = 5$.'
      }
    },
    {
      id: 'tm1-summary',
      type: 'text' as const,
      content: `### Summary

- Taylor series: $\\sum f^{(n)}(c)(x-c)^n/n!$
- Maclaurin series: Taylor at $c = 0$
- $T_n(x)$ = partial sum through degree $n$
- Know the difference between "degree $n$" and "first $k$ nonzero terms"

> **Next:** Part 2 — Computing Taylor Series from Scratch.`
    }
  ]
};
