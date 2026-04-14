export const calcbcPowerSeriesPart3Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: `# Power Series — Operations

**Part 3 of 7 — Differentiation, Integration, and Manipulation**

### Term-by-Term Differentiation

If $f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n$ with radius $R > 0$, then:

$$\\boxed{f'(x) = \\sum_{n=1}^\\infty n a_n (x-c)^{n-1}}$$

The derivative has the **same radius** $R$ (but possibly different endpoint behavior).

### Term-by-Term Integration

$$\\boxed{\\int f(x)\\,dx = C + \\sum_{n=0}^\\infty \\frac{a_n (x-c)^{n+1}}{n+1}}$$

Also has radius $R$ (but possibly different endpoint behavior).

### Example: From Geometric to $\\ln$

$\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n,\\quad |x| < 1$

Integrate both sides:

$-\\ln(1-x) = \\sum_{n=0}^\\infty \\frac{x^{n+1}}{n+1} = \\sum_{n=1}^\\infty \\frac{x^n}{n}$

So $\\ln(1-x) = -\\sum_{n=1}^\\infty \\frac{x^n}{n}$, or equivalently $\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.

> **AP Tip:** Deriving series by differentiating/integrating known series is a VERY common AP technique.`
    },
    {
      id: 'ps3-manipulation',
      type: 'text' as const,
      content: `### Substitution

Replace $x$ with an expression in a known series:

$\\frac{1}{1-x} = \\sum x^n \\implies \\frac{1}{1+x^2} = \\sum (-x^2)^n = \\sum (-1)^n x^{2n}$

Then integrate: $\\arctan x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}$

### Addition and Multiplication

- **Addition:** $\\sum a_n x^n + \\sum b_n x^n = \\sum (a_n + b_n) x^n$ (radius = min of the two)
- **Multiplication by $x^k$:** $x^k \\sum a_n x^n = \\sum a_n x^{n+k}$ (radius unchanged)

### Radius Under Operations

| Operation | New Radius |
|-----------|-----------|
| Differentiation | Same $R$ |
| Integration | Same $R$ |
| Substitution $x \\to g(x)$ | Solve $|g(x)| < R$ |
| Addition | $\\min(R_1, R_2)$ |
| Multiplication by polynomial | Same $R$ |`
    },
    {
      id: 'ps3-mc1',
      type: 'multiple-choice' as const,
      content: '**Operations Practice**',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty x^n/(n+1)$ and $R = 1$, then $f\'(x) = $',
            options: ['$\\sum_{n=1}^\\infty \\frac{n x^{n-1}}{n+1}$', '$\\sum_{n=0}^\\infty \\frac{x^{n+1}}{(n+1)(n+2)}$', '$\\sum_{n=0}^\\infty x^n$', '$\\sum_{n=1}^\\infty \\frac{x^n}{n}$'],
            correctAnswer: 0,
            explanation: 'Differentiate term by term: $d/dx[x^n/(n+1)] = nx^{n-1}/(n+1)$. The $n=0$ term vanishes, so sum starts at $n=1$.'
          },
          {
            question: 'Starting from $1/(1-x) = \\sum x^n$, find the series for $1/(1-x)^2$:',
            options: ['$\\sum_{n=1}^\\infty n x^{n-1}$ (differentiate)', '$\\sum n^2 x^n$', '$\\sum x^{2n}$', '$\\sum x^n / n$'],
            correctAnswer: 0,
            explanation: '$d/dx[1/(1-x)] = 1/(1-x)^2$. Differentiating the series: $\\sum_{n=1}^\\infty n x^{n-1}$.'
          },
          {
            question: 'The power series for $e^{-x^2}$ can be found by:',
            options: ['Substituting $-x^2$ for $x$ in $e^x = \\sum x^n/n!$', 'Differentiating $e^x$', 'Integrating $e^x$', 'Using partial fractions'],
            correctAnswer: 0,
            explanation: '$e^u = \\sum u^n/n!$. Set $u = -x^2$: $e^{-x^2} = \\sum (-x^2)^n/n! = \\sum (-1)^n x^{2n}/n!$.'
          }
        ]
      }
    },
    {
      id: 'ps3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Manipulation Techniques**',
      exercise: {
        dropdowns: [
          {
            label: 'To find the series for $x/(1+x)^2$, start with $1/(1+x) = \\sum (-1)^n x^n$ and:',
            options: ['Differentiate to get $-1/(1+x)^2 = \\sum (-1)^n n x^{n-1}$, then multiply by $-x$', 'Integrate twice', 'Square the series', 'Use substitution $x \\to -x$'],
            correctAnswers: ['Differentiate to get $-1/(1+x)^2 = \\sum (-1)^n n x^{n-1}$, then multiply by $-x$'],
            hints: ['$d/dx[1/(1+x)] = -1/(1+x)^2$.'],
            explanation: 'Differentiate: $-1/(1+x)^2 = \\sum_{n=1}^\\infty (-1)^n n x^{n-1}$. Multiply by $-x$: $x/(1+x)^2 = \\sum_{n=1}^\\infty (-1)^{n+1} n x^n$.'
          },
          {
            label: '$\\int_0^x \\frac{\\sin t}{t}\\,dt$ has no elementary antiderivative. Using $\\sin t = \\sum (-1)^n t^{2n+1}/(2n+1)!$, the series is:',
            options: ['$\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)(2n+1)!}$', '$\\sum (-1)^n x^{2n}/(2n)!$', '$\\sum (-1)^n x^n/n$', 'Cannot be expressed as a series'],
            correctAnswers: ['$\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)(2n+1)!}$'],
            hints: ['$\\sin t / t = \\sum (-1)^n t^{2n}/(2n+1)!$. Integrate from $0$ to $x$.'],
            explanation: '$\\sin t/t = \\sum (-1)^n t^{2n}/(2n+1)!$. Integrate: $\\int_0^x = \\sum (-1)^n x^{2n+1}/((2n+1)(2n+1)!)$.'
          }
        ]
      }
    },
    {
      id: 'ps3-input',
      type: 'input-box' as const,
      content: '**Series Derivation**',
      exercise: {
        question: 'Using $1/(1-x) = \\sum x^n$, find the coefficient of $x^3$ in the series for $1/(1-x)^2$. (Hint: differentiate.)',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['$1/(1-x)^2 = \\sum_{n=1}^\\infty n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$'],
        explanation: '$1/(1-x)^2 = \\sum_{n=0}^\\infty (n+1)x^n$. The coefficient of $x^3$ is $n+1 = 4$ (when $n = 3$).'
      }
    },
    {
      id: 'ps3-summary',
      type: 'text' as const,
      content: `### Summary

- Differentiate and integrate power series term by term
- Radius stays the same (endpoints may change)
- Substitution lets you build new series from known ones
- Key chain: $1/(1-x) \\to \\ln(1-x) \\to \\arctan x$ via integration/substitution

> **Next:** Part 4 — Representing Functions as Power Series.`
    }
  ]
};
