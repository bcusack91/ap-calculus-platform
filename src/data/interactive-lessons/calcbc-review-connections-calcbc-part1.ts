export const calcbcReviewPart1Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc1-intro',
      type: 'text' as const,
      content: `# Connecting Derivatives, Integrals, and Series

**Part 1 of 7 — The Big Three of Calculus BC**

### The Fundamental Connection

Derivatives, integrals, and series are not separate topics — they are deeply connected:

| Concept | Operation | Series View |
|---------|-----------|-------------|
| Derivative | Rate of change of $f$ | Coefficient extraction: $f^{(n)}(a)/n!$ |
| Integral | Accumulation of $f$ | Term-by-term integration |
| Series | Representation of $f$ | $f(x) = \\sum a_n(x-a)^n$ |

$$\\boxed{f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n \\quad \\Longleftrightarrow \\quad f^{(n)}(a) = n! \\cdot a_n}$$

> **Key Insight:** Taylor series turns the relationship between differentiation and integration into algebra — differentiate or integrate the series term by term.`
    },
    {
      id: 'rc1-ftc',
      type: 'text' as const,
      content: `### FTC as the Bridge

The Fundamental Theorem of Calculus connects derivatives and integrals:

$$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x) \\qquad \\text{(FTC Part 1)}$$
$$\\int_a^b f'(x)\\,dx = f(b) - f(a) \\qquad \\text{(FTC Part 2)}$$

**How series extends this:**

If $f(x) = \\sum a_n x^n$, then:
- $f'(x) = \\sum n a_n x^{n-1}$ (differentiate)
- $\\int f(x)\\,dx = \\sum \\frac{a_n}{n+1} x^{n+1} + C$ (integrate)
- Same radius of convergence for all three!

This means you can move freely between a function, its derivative, and its integral using series.`
    },
    {
      id: 'rc1-mc',
      type: 'multiple-choice' as const,
      content: '**Connection Check**',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty c_n x^n$ and $f\'\'(0) = 10$, then $c_2 =$',
            options: ['$5$', '$10$', '$20$', '$10/3$'],
            correctAnswer: 0,
            explanation: '$f\'\'(0) = 2! \\cdot c_2 = 2c_2 = 10$, so $c_2 = 5$.'
          },
          {
            question: 'If $g(x) = \\int_0^x e^{-t^2}\\,dt$, then $g\'(x) =$',
            options: ['$e^{-x^2}$', '$-2xe^{-x^2}$', '$\\int_0^x -2te^{-t^2}\\,dt$', '$e^{-x^2} - 1$'],
            correctAnswer: 0,
            explanation: 'By FTC Part 1: $g\'(x) = e^{-x^2}$. No need to evaluate the integral.'
          },
          {
            question: 'The Maclaurin series for $\\int_0^x \\cos(t^2)\\,dt$ can be found by:',
            options: ['Substituting $t^2$ into $\\cos$ series, then integrating term by term', 'Using FTC directly to get a closed form', 'Evaluating the integral with u-substitution', 'This integral cannot be expressed as a series'],
            correctAnswer: 0,
            explanation: '$\\cos(t^2) = 1 - t^4/2 + t^8/24 - \\cdots$. Integrate: $x - x^5/10 + x^9/216 - \\cdots$. No closed form exists, but the series works perfectly.'
          }
        ]
      }
    },
    {
      id: 'rc1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Derivative-Integral-Series Connections**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$. The series for $\\frac{1}{1+x^2}$ is:',
            options: ['$\\sum_{n=0}^\\infty (-1)^n x^{2n}$', '$\\sum_{n=0}^\\infty x^{2n}$', '$\\sum_{n=0}^\\infty (-1)^n x^n$', '$\\sum_{n=1}^\\infty x^{2n}/n$'],
            correctAnswers: ['$\\sum_{n=0}^\\infty (-1)^n x^{2n}$'],
            hints: ['Substitute $-x^2$ into $1/(1-u) = \\sum u^n$.'],
            explanation: '$1/(1+x^2) = 1/(1-(-x^2)) = \\sum (-x^2)^n = \\sum (-1)^n x^{2n}$.'
          },
          {
            label: 'Integrating $\\sum (-1)^n x^{2n}$ gives the series for:',
            options: ['$\\arctan x$ (plus constant)', '$\\ln(1+x^2)$', '$\\sin(x^2)$', '$e^{-x^2}$'],
            correctAnswers: ['$\\arctan x$ (plus constant)'],
            hints: ['Integrate term by term: $\\sum (-1)^n x^{2n+1}/(2n+1)$.'],
            explanation: '$\\int \\sum (-1)^n x^{2n}\\,dx = \\sum (-1)^n \\frac{x^{2n+1}}{2n+1} + C = \\arctan x + C$ (with $C = 0$).'
          }
        ]
      }
    },
    {
      id: 'rc1-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'If $f(x) = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$ and $g(x) = f\'(x)$, what function is $g$?',
        correctAnswer: 'e^x',
        acceptableAnswers: ['e^x', 'exp(x)', 'e^(x)'],
        hints: ['$f(x) = e^x$. What is $(e^x)\' $?'],
        explanation: '$f(x) = e^x$, so $f\'(x) = e^x = g(x)$. The exponential function is its own derivative — the most fundamental connection in calculus.'
      }
    },
    {
      id: 'rc1-summary',
      type: 'text' as const,
      content: `### Key Connections

- **FTC** bridges derivatives ↔ integrals
- **Taylor series** bridges functions ↔ polynomials
- **Term-by-term operations** let you differentiate and integrate series
- If you know $f$ as a series, you automatically know $f'$ and $\\int f$

**Next: Part 2 — Parametric, Polar, and Vector Connections**`
    }
  ]
};
