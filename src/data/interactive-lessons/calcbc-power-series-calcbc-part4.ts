export const calcbcPowerSeriesPart4Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: `# Power Series — Function Representation

**Part 4 of 7 — Building Series from Known Functions**

### The Essential Known Series

Memorize these — they're the building blocks:

| Function | Series | IOC |
|----------|--------|-----|
| $\\frac{1}{1-x}$ | $\\sum_{n=0}^\\infty x^n$ | $(-1,1)$ |
| $e^x$ | $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ | $(-\\infty, \\infty)$ |
| $\\sin x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $(-\\infty, \\infty)$ |
| $\\cos x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$ | $(-\\infty, \\infty)$ |
| $\\ln(1+x)$ | $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$ | $(-1, 1]$ |
| $\\arctan x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}$ | $[-1, 1]$ |

$$\\boxed{\\text{Most AP power series problems reduce to manipulating these six.}}$$

> **AP Tip:** You'll often need to find a series by relating the function to one of these through substitution, differentiation, or integration.`
    },
    {
      id: 'ps4-techniques',
      type: 'text' as const,
      content: `### Technique: Partial Fractions + Geometric

**Find the series for** $f(x) = \\frac{3}{2-x}$:

$\\frac{3}{2-x} = \\frac{3}{2} \\cdot \\frac{1}{1 - x/2} = \\frac{3}{2} \\sum_{n=0}^\\infty \\left(\\frac{x}{2}\\right)^n = \\sum_{n=0}^\\infty \\frac{3 x^n}{2^{n+1}}$

IOC: $|x/2| < 1 \\implies |x| < 2$

### Technique: Composition

**Find the series for** $e^{x^2}$:

$e^u = \\sum u^n/n!$. Set $u = x^2$:

$e^{x^2} = \\sum_{n=0}^\\infty \\frac{x^{2n}}{n!} = 1 + x^2 + \\frac{x^4}{2} + \\frac{x^6}{6} + \\cdots$

### Technique: Integration of Known Series

**Find the series for** $\\int_0^x e^{-t^2}\\,dt$ (no elementary form!):

$e^{-t^2} = \\sum (-1)^n t^{2n}/n!$. Integrate: $\\int_0^x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1) n!}$

This is related to the error function $\\text{erf}(x)$ — series representation gives exact computation!`
    },
    {
      id: 'ps4-mc1',
      type: 'multiple-choice' as const,
      content: '**Function Representation**',
      exercise: {
        questions: [
          {
            question: 'The first three nonzero terms of the Maclaurin series for $x \\sin x$ are:',
            options: ['$x^2 - x^4/6 + x^6/120$', '$x - x^3/6 + x^5/120$', '$x^2 - x^4/3! + x^6/5!$', '$1 - x^2/2 + x^4/24$'],
            correctAnswer: 0,
            explanation: '$\\sin x = x - x^3/3! + x^5/5! - \\cdots$. Multiply by $x$: $x\\sin x = x^2 - x^4/6 + x^6/120 - \\cdots$.'
          },
          {
            question: 'Which series represents $\\frac{1}{1+x^2}$?',
            options: ['$\\sum_{n=0}^\\infty (-1)^n x^{2n}$', '$\\sum (-1)^n x^n$', '$\\sum x^{2n}$', '$\\sum x^n/(1+n^2)$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{1+x^2} = \\frac{1}{1-(-x^2)} = \\sum_{n=0}^\\infty (-x^2)^n = \\sum (-1)^n x^{2n}$, for $|x| < 1$.'
          },
          {
            question: 'The Maclaurin series for $\\cos(2x)$ is obtained by:',
            options: ['Substituting $2x$ for $x$ in $\\cos x = \\sum (-1)^n x^{2n}/(2n)!$', 'Differentiating $\\sin(2x)$ series', 'Multiplying $\\cos x$ series by 2', 'Squaring the $\\cos x$ series'],
            correctAnswer: 0,
            explanation: '$\\cos(2x) = \\sum_{n=0}^\\infty \\frac{(-1)^n (2x)^{2n}}{(2n)!} = \\sum \\frac{(-1)^n 4^n x^{2n}}{(2n)!}$.'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series Building**',
      exercise: {
        dropdowns: [
          {
            label: 'The series for $\\frac{x}{1+x}$ is obtained from $\\frac{1}{1-u} = \\sum u^n$ by:',
            options: ['Setting $u = -x$, then multiply by $x$: $\\sum_{n=0}^\\infty (-1)^n x^{n+1}$', 'Setting $u = x$ and dividing by $x$', 'Integrating the geometric series', 'Differentiating $\\ln(1+x)$'],
            correctAnswers: ['Setting $u = -x$, then multiply by $x$: $\\sum_{n=0}^\\infty (-1)^n x^{n+1}$'],
            hints: ['$x/(1+x) = x \\cdot 1/(1+x) = x \\cdot 1/(1-(-x))$.'],
            explanation: '$1/(1+x) = \\sum (-x)^n = \\sum (-1)^n x^n$. Multiply by $x$: $x/(1+x) = \\sum (-1)^n x^{n+1}$.'
          },
          {
            label: 'The coefficient of $x^4$ in the Maclaurin series for $e^x \\cos x$ through $x^4$ is:',
            options: ['$-1/6$', '$1/24$', '$-1/3$', '$1/4$'],
            correctAnswers: ['$-1/6$'],
            hints: ['Multiply the first few terms of $e^x$ and $\\cos x$ series and collect $x^4$ terms.'],
            explanation: '$e^x = 1 + x + x^2/2 + x^3/6 + x^4/24 + \\cdots$, $\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$. $x^4$ terms: $1 \\cdot x^4/24 + (x^2/2)(-x^2/2) + x^4/24 \\cdot 1 = 1/24 - 1/4 + 1/24$. Wait: $1\\cdot(x^4/24) + (x)(0) + (x^2/2)(-x^2/2) + (x^3/6)(0) + (x^4/24)(1) = 1/24 - 1/4 + 1/24 = 2/24 - 6/24 = -4/24 = -1/6$.'
          }
        ]
      }
    },
    {
      id: 'ps4-input',
      type: 'input-box' as const,
      content: '**Coefficient Finding**',
      exercise: {
        question: 'In the Maclaurin series for $f(x) = 1/(1-2x)$, what is the coefficient of $x^3$?',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: ['$1/(1-2x) = \\sum (2x)^n = \\sum 2^n x^n$. Coefficient of $x^3$ is $2^3$.'],
        explanation: '$1/(1-2x) = \\sum_{n=0}^\\infty (2x)^n = \\sum 2^n x^n$. Coefficient of $x^3$: $2^3 = 8$.'
      }
    },
    {
      id: 'ps4-summary',
      type: 'text' as const,
      content: `### Summary

- Six essential series to memorize (geometric, $e^x$, $\\sin$, $\\cos$, $\\ln$, $\\arctan$)
- Build new series via substitution, multiplication, differentiation, integration
- Partial fractions reduce rational functions to geometric-type series
- Series let you "compute" functions with no elementary antiderivative

> **Next:** Part 5 — Power Series and Differential Equations.`
    }
  ]
};
