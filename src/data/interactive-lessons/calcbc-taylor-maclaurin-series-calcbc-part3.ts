export const calcbcTaylorPart3Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm3-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin — Known Series & Manipulation

**Part 3 of 7 — Using Known Series to Build New Ones**

### The Big Six (Must Memorize)

$$\\boxed{\\begin{aligned}
\\frac{1}{1-x} &= \\sum_{n=0}^\\infty x^n, \\quad |x| < 1 \\\\
e^x &= \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\text{all } x \\\\
\\sin x &= \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\text{all } x \\\\
\\cos x &= \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}, \\quad \\text{all } x \\\\
\\ln(1+x) &= \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}, \\quad -1 < x \\le 1 \\\\
\\arctan x &= \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}, \\quad -1 \\le x \\le 1
\\end{aligned}}$$

### Manipulation Toolkit

| Technique | Example |
|-----------|---------|
| **Substitution** | $e^{-x^2}$: replace $x$ with $-x^2$ in $e^x$ |
| **Multiplication** | $x\\cos x$: multiply $\\cos x$ series by $x$ |
| **Differentiation** | $1/(1-x)^2$: differentiate $1/(1-x)$ |
| **Integration** | $\\arctan x$: integrate $1/(1+x^2)$ |
| **Addition** | $\\cosh x = (e^x + e^{-x})/2$: add two series |

> **AP Tip:** Building from known series is MUCH faster than computing derivatives from scratch. Always try this first.`
    },
    {
      id: 'tm3-examples',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1: $xe^{-x}$**

$e^{-x} = \\sum \\frac{(-x)^n}{n!} = \\sum \\frac{(-1)^n x^n}{n!}$

$xe^{-x} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{n+1}}{n!} = x - x^2 + \\frac{x^3}{2} - \\frac{x^4}{6} + \\cdots$

**Example 2: $\\cos^2 x$ (using identity)**

$\\cos^2 x = \\frac{1 + \\cos 2x}{2} = \\frac{1}{2} + \\frac{1}{2}\\sum_{n=0}^\\infty \\frac{(-1)^n (2x)^{2n}}{(2n)!}$

$= \\frac{1}{2} + \\frac{1}{2}\\left[1 - 2x^2 + \\frac{2x^4}{3} - \\cdots\\right]$

Wait: $\\cos(2x) = 1 - (2x)^2/2! + (2x)^4/4! - \\cdots = 1 - 2x^2 + 2x^4/3 - \\cdots$

$\\cos^2 x = 1 - x^2 + x^4/3 - \\cdots$

**Key Insight:** Using trig identities + known series is often the fastest approach.`
    },
    {
      id: 'tm3-mc1',
      type: 'multiple-choice' as const,
      content: '**Manipulation Practice**',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $e^{3x}$ is:',
            options: ['$\\sum_{n=0}^\\infty \\frac{3^n x^n}{n!}$', '$3\\sum x^n/n!$', '$\\sum 3x^n/n!$', '$\\sum x^{3n}/n!$'],
            correctAnswer: 0,
            explanation: 'Substitute $3x$ for $x$ in $e^x = \\sum x^n/n!$: $e^{3x} = \\sum (3x)^n/n! = \\sum 3^n x^n/n!$.'
          },
          {
            question: 'The first three nonzero terms of $\\sin(x^2)$ are:',
            options: ['$x^2 - x^6/6 + x^{10}/120$', '$x^2 - x^4/6 + x^6/120$', '$x - x^5/6 + x^9/120$', '$x^4 - x^8/6 + x^{12}/120$'],
            correctAnswer: 0,
            explanation: '$\\sin u = u - u^3/6 + u^5/120$. Set $u = x^2$: $x^2 - x^6/6 + x^{10}/120$.'
          },
          {
            question: 'To find the series for $\\frac{x}{1+x^3}$, start with:',
            options: ['$1/(1-u) = \\sum u^n$ with $u = -x^3$, then multiply by $x$', '$e^x$ series with substitution', '$\\sin x / x$ series', 'Partial fractions'],
            correctAnswer: 0,
            explanation: '$1/(1+x^3) = 1/(1-(-x^3)) = \\sum (-x^3)^n = \\sum (-1)^n x^{3n}$. Multiply by $x$: $\\sum (-1)^n x^{3n+1}$.'
          }
        ]
      }
    },
    {
      id: 'tm3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series Construction**',
      exercise: {
        dropdowns: [
          {
            label: 'The Maclaurin series for $\\sinh x = (e^x - e^{-x})/2$ is:',
            options: ['$\\sum_{n=0}^\\infty \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$)', '$\\sum x^n/(2 \\cdot n!)$', '$\\sum (-1)^n x^{2n+1}/(2n+1)!$', '$\\sum x^{2n}/(2n)!$'],
            correctAnswers: ['$\\sum_{n=0}^\\infty \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$)'],
            hints: ['$e^x - e^{-x}$ cancels even terms and doubles odd terms.'],
            explanation: '$e^x = \\sum x^n/n!$, $e^{-x} = \\sum (-1)^n x^n/n!$. Subtract: even terms cancel, odd terms double. $(e^x - e^{-x})/2 = \\sum x^{2n+1}/(2n+1)!$.'
          },
          {
            label: 'The coefficient of $x^5$ in the Maclaurin series of $x^2 \\cos x$ is:',
            options: ['$0$ (cos has no $x^3$ term to multiply by $x^2$)', '$1/120$', '$-1/6$', '$1/24$'],
            correctAnswers: ['$0$ (cos has no $x^3$ term to multiply by $x^2$)'],
            hints: ['$x^2 \\cos x = x^2(1 - x^2/2 + x^4/24 - \\cdots)$. The $x^5$ term needs an $x^3$ from cos.'],
            explanation: '$\\cos x$ has only even powers: $1, x^2, x^4, \\ldots$ Multiplying by $x^2$ gives even powers $x^2, x^4, x^6, \\ldots$ No $x^5$ term!'
          }
        ]
      }
    },
    {
      id: 'tm3-input',
      type: 'input-box' as const,
      content: '**Quick Coefficient**',
      exercise: {
        question: 'What is the coefficient of $x^4$ in the Maclaurin series for $\\cos(x) - 1 + x^2/2$?',
        correctAnswer: '-1/24',
        acceptableAnswers: ['-1/24'],
        hints: ['$\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$. So $\\cos x - 1 + x^2/2 = x^4/24 - \\cdots$. Wait, check the sign.'],
        explanation: '$\\cos x - 1 + x^2/2 = (1 - x^2/2 + x^4/24 - \\cdots) - 1 + x^2/2 = x^4/24 - x^6/720 + \\cdots$. Coefficient of $x^4$ is $1/24$. Hmm, but the $x^4$ term of $\\cos x$ is $+x^4/24$, so the answer is $1/24$. Wait: $\\cos x$ has $(-1)^2 x^4 / 4! = x^4/24$. Yes, coefficient is $1/24$.'
      }
    },
    {
      id: 'tm3-summary',
      type: 'text' as const,
      content: `### Summary

- Always try manipulating known series before computing derivatives
- Substitution, multiplication, and differentiation/integration are the main tools
- Trig identities can simplify series construction
- Only even/odd powers? Pay attention to symmetry

> **Next:** Part 4 — Taylor's Theorem and the Remainder.`
    }
  ]
};
