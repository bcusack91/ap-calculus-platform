export const calcbcPowerSeriesPart6Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps6-intro',
      type: 'text' as const,
      content: `# Power Series — Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

### Workshop Focus Areas

| Skill | What to Practice |
|-------|-----------------|
| Finding $R$ | Ratio Test on coefficients |
| Endpoint testing | Substitute $x = c \\pm R$, test convergence |
| Series manipulation | Substitution, differentiation, integration |
| Coefficient extraction | $a_n = f^{(n)}(c)/n!$ |
| Series building | From known series to new functions |`
    },
    {
      id: 'ps6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{n(x-1)^n}{4^n}$. The radius of convergence is:',
            options: ['$4$', '$1$', '$1/4$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = (n+1)\\cdot 4^n/(n \\cdot 4^{n+1}) = (n+1)/(4n) \\to 1/4$. So $R = 1/(1/4) = 4$.'
          },
          {
            question: 'The first three nonzero terms of $\\ln(1+x^2)$ are:',
            options: ['$x^2 - x^4/2 + x^6/3$', '$x - x^2/2 + x^3/3$', '$x^2 - x^3/3 + x^4/4$', '$1 + x^2 - x^4/2$'],
            correctAnswer: 0,
            explanation: '$\\ln(1+u) = u - u^2/2 + u^3/3 - \\cdots$. Set $u = x^2$: $\\ln(1+x^2) = x^2 - x^4/2 + x^6/3 - \\cdots$.'
          },
          {
            question: '$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1}$ represents:',
            options: ['$\\arctan x$', '$\\sin x$', '$\\ln(1+x)$', '$\\tanh^{-1} x$'],
            correctAnswer: 0,
            explanation: 'This is the Maclaurin series for $\\arctan x = x - x^3/3 + x^5/5 - \\cdots = \\sum (-1)^n x^{2n+1}/(2n+1)$.'
          },
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty a_n x^n$ with $a_n = 2^n/n!$, then $\\int_0^1 f(x)\\,dx =$',
            options: ['$(e^2 - 1)/2$', '$e^2$', '$e^2 - 1$', '$2(e-1)$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\sum (2x)^n/n! = e^{2x}$. $\\int_0^1 e^{2x}\\,dx = [e^{2x}/2]_0^1 = (e^2-1)/2$.'
          }
        ]
      }
    },
    {
      id: 'ps6-dropdown',
      type: 'dropdown-select' as const,
      content: '**IOC Workshop**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(x+2)^n}{n \\cdot 5^n}$. Interval of convergence:',
            options: ['$[-7, 3)$', '$(-7, 3)$', '$[-7, 3]$', '$(-7, 3]$'],
            correctAnswers: ['$[-7, 3)$'],
            hints: ['$R = 5$, center $c = -2$. Test $x = 3$ ($\\sum 1/n$) and $x = -7$ ($\\sum (-1)^n/n$).'],
            explanation: '$R = 5$, center $-2$. At $x = 3$: $\\sum 5^n/(n\\cdot 5^n) = \\sum 1/n$ diverges. At $x = -7$: $\\sum (-5)^n/(n\\cdot 5^n) = \\sum (-1)^n/n$ converges. IOC: $[-7, 3)$.'
          },
          {
            label: '$\\sum_{n=0}^\\infty \\frac{x^n}{n^2 + 1}$. Radius of convergence:',
            options: ['$R = 1$ (ratio of coefficients $\\to 1$)', '$R = \\infty$', '$R = 0$', '$R = 2$'],
            correctAnswers: ['$R = 1$ (ratio of coefficients $\\to 1$)'],
            hints: ['$|a_{n+1}/a_n| = (n^2+1)/((n+1)^2+1) \\to 1$.'],
            explanation: '$R = 1/\\lim|a_{n+1}/a_n| = 1/1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'ps6-input',
      type: 'input-box' as const,
      content: '**Series Evaluation**',
      exercise: {
        question: 'Using $e^x = \\sum x^n/n!$, find $\\sum_{n=0}^\\infty (-1)^n/n!$ as a decimal rounded to 3 places.',
        correctAnswer: '0.368',
        acceptableAnswers: ['0.368', '.368', '0.3679'],
        hints: ['Set $x = -1$: $e^{-1} = \\sum (-1)^n/n!$.'],
        explanation: '$\\sum (-1)^n/n! = e^{-1} = 1/e \\approx 0.368$.'
      }
    },
    {
      id: 'ps6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Ratio Test is the go-to for finding $R$
- Endpoint testing is mandatory on the AP exam
- Building series from known ones is faster than computing derivatives
- $f^{(n)}(c) = n! \\cdot a_n$ is a powerful shortcut

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
