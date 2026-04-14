export const calcbcSeriesAppsPart1Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa1-intro',
      type: 'text' as const,
      content: `# Series Applications — Using Taylor Series

**Part 1 of 7 — Approximating Functions**

### Why Use Series?

Taylor and Maclaurin series convert functions into polynomials, making them useful for:
- Approximating difficult function values
- Evaluating limits
- Computing integrals that have no closed-form antiderivative
- Solving differential equations

### Key Series to Know

| Function | Maclaurin Series | Interval |
|----------|-----------------|----------|
| $e^x$ | $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ | $(-\\infty, \\infty)$ |
| $\\sin x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $(-\\infty, \\infty)$ |
| $\\cos x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$ | $(-\\infty, \\infty)$ |
| $\\frac{1}{1-x}$ | $\\sum_{n=0}^\\infty x^n$ | $(-1, 1)$ |
| $\\ln(1+x)$ | $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$ | $(-1, 1]$ |
| $\\arctan x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}$ | $[-1, 1]$ |

$$\\boxed{\\text{Memorize these six — they appear on every BC exam}}$$`
    },
    {
      id: 'sa1-approx',
      type: 'text' as const,
      content: `### Approximating Function Values

To approximate $e^{0.1}$ using a 3rd-degree Maclaurin polynomial:

$$e^x \\approx 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$$

$$e^{0.1} \\approx 1 + 0.1 + 0.005 + 0.000167 = 1.105167$$

Actual value: $e^{0.1} = 1.105171...$  Error $< 0.000004$.

### Creating New Series by Substitution

To find the series for $e^{-x^2}$, substitute $-x^2$ for $x$ in $e^x$:

$$e^{-x^2} = \\sum_{n=0}^\\infty \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{n!}$$

$$= 1 - x^2 + \\frac{x^4}{2} - \\frac{x^6}{6} + \\cdots$$

> **AP Tip:** Substitution into a known series is the fastest way to build new series on the AP exam.`
    },
    {
      id: 'sa1-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $\\cos(2x)$ is obtained by:',
            options: ['Substituting $2x$ for $x$ in the $\\cos x$ series', 'Multiplying the $\\cos x$ series by 2', 'Differentiating the $\\sin(2x)$ series', 'Using the formula for $\\cos x$ and doubling each term'],
            correctAnswer: 0,
            explanation: '$\\cos(2x) = \\sum (-1)^n (2x)^{2n}/(2n)! = \\sum (-1)^n 4^n x^{2n}/(2n)!$.'
          },
          {
            question: 'The first three nonzero terms of $\\sin(x^2)$ are:',
            options: ['$x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120}$', '$x - \\frac{x^3}{6} + \\frac{x^5}{120}$', '$x^2 - \\frac{x^4}{6} + \\frac{x^6}{120}$', '$x^4 - \\frac{x^8}{6} + \\frac{x^{12}}{120}$'],
            correctAnswer: 0,
            explanation: 'Replace $x$ with $x^2$ in $\\sin x = x - x^3/6 + x^5/120 - \\cdots$: $x^2 - x^6/6 + x^{10}/120$.'
          },
          {
            question: 'The geometric series $\\frac{1}{1-x} = \\sum x^n$ converges for:',
            options: ['$|x| < 1$', 'All $x$', '$x \\ge 0$', '$|x| \\le 1$'],
            correctAnswer: 0,
            explanation: 'Geometric series converges when $|r| < 1$, i.e., $|x| < 1$.'
          }
        ]
      }
    },
    {
      id: 'sa1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series Construction**',
      exercise: {
        dropdowns: [
          {
            label: 'The series for $\\frac{1}{1+x}$ is obtained from $\\frac{1}{1-x}$ by replacing $x$ with:',
            options: ['$-x$ (giving $\\sum (-1)^n x^n$)', '$x+1$', '$1/x$', '$-1$'],
            correctAnswers: ['$-x$ (giving $\\sum (-1)^n x^n$)'],
            hints: ['$\\frac{1}{1+x} = \\frac{1}{1-(-x)}$.'],
            explanation: '$\\frac{1}{1-(-x)} = \\sum_{n=0}^\\infty (-x)^n = \\sum (-1)^n x^n$.'
          },
          {
            label: 'The series for $\\frac{x}{1-x^2}$ starts with:',
            options: ['$x + x^3 + x^5 + \\cdots$ (substitute $x^2$, multiply by $x$)', '$x + x^2 + x^3 + \\cdots$', '$1 + x^2 + x^4 + \\cdots$', '$x - x^3 + x^5 - \\cdots$'],
            correctAnswers: ['$x + x^3 + x^5 + \\cdots$ (substitute $x^2$, multiply by $x$)'],
            hints: ['$\\frac{1}{1-x^2} = \\sum (x^2)^n = \\sum x^{2n}$. Then multiply by $x$.'],
            explanation: '$x \\cdot \\sum x^{2n} = \\sum x^{2n+1} = x + x^3 + x^5 + \\cdots$.'
          }
        ]
      }
    },
    {
      id: 'sa1-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Using $e^x \\approx 1 + x + x^2/2$, approximate $e^{0.5}$ to 2 decimal places.',
        correctAnswer: '1.63',
        acceptableAnswers: ['1.63', '1.625'],
        hints: ['$1 + 0.5 + 0.25/2 = 1 + 0.5 + 0.125 = 1.625$.'],
        explanation: '$e^{0.5} \\approx 1 + 0.5 + 0.125 = 1.625$. (Actual: 1.6487.)'
      }
    },
    {
      id: 'sa1-summary',
      type: 'text' as const,
      content: `### Key Techniques

$$\\boxed{\\text{Known series} + \\text{substitution} = \\text{new series}}$$

- Memorize the six standard Maclaurin series
- Create new series by substituting into known ones
- Polynomial approximations are most accurate near the center

**Next: Part 2 — Series for Computing Integrals**`
    }
  ]
};
