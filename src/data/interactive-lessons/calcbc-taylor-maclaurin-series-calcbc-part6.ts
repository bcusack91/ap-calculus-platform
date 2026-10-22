export const calcbcTaylorPart6Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm6-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin — Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

### Workshop Focus

This workshop covers the full range of Taylor series tasks:
- Computing series from scratch
- Manipulating known series
- Finding intervals of convergence
- Error bound calculations
- Integrating/differentiating series`
    },
    {
      id: 'tm6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'The third-degree Taylor polynomial for $f(x) = \\tan x$ at $c = 0$ is:',
            options: ['$x + x^3/3$', '$x - x^3/3$', '$x + x^3/6$', '$x - x^3/6$'],
            correctAnswer: 0,
            explanation: '$f=\\tan x$: $f(0)=0$, $f\'(0)=\\sec^2(0)=1$, $f\'\'(0)=2\\sec^2(0)\\tan(0)=0$, $f\'\'\'(0)=2\\sec^4(0)+4\\sec^2(0)\\tan^2(0)=2$. $T_3 = x + (2/6)x^3 = x + x^3/3$.'
          },
          {
            question: 'The Maclaurin series for $x e^{-x}$ through the $x^3$ term is:',
            options: ['$x - x^2 + x^3/2$', '$x + x^2 + x^3/2$', '$1 - x + x^2/2$', '$x - x^2 + x^3/6$'],
            correctAnswer: 0,
            explanation: 'Substitute $-x$ into $e^u = 1 + u + u^2/2 + \\cdots$ to get $e^{-x} = 1 - x + x^2/2 - \\cdots$, then multiply every term by $x$: $x - x^2 + x^3/2$. Substituting $+x$ gives $x + x^2 + x^3/2$, $1 - x + x^2/2$ forgets to multiply by $x$, and $x^3/6$ uses the $u^3$ coefficient where the $u^2$ coefficient belongs.'
          },
          {
            question: '$\\int_0^{0.5} e^{-t^2}\\,dt$ approximated by the first 3 terms of the series equals:',
            options: ['$0.5 - (0.5)^3/3 + (0.5)^5/10 \\approx 0.4615$', '$0.5 - (0.5)^3 + (0.5)^5/2 \\approx 0.3906$', '$0.5 + (0.5)^3/3 + (0.5)^5/10 \\approx 0.5448$', '$0.5 - (0.5)^3/3 + (0.5)^5/5 \\approx 0.4646$'],
            correctAnswer: 0,
            explanation: '$e^{-t^2} = 1 - t^2 + t^4/2 - \\cdots$. $\\int_0^{0.5} = [t - t^3/3 + t^5/10]_0^{0.5} = 0.5 - 0.125/3 + 0.03125/10 = 0.5 - 0.04167 + 0.003125 \\approx 0.4615$. Leaving out the division by the new exponent gives $0.3906$; using $e^{t^2}$ (all plus signs) gives $0.5448$; and dividing $t^5$ by $5$ forgets the $\\frac{1}{2!}$ in the $t^4$ term, giving $0.4646$.'
          }
        ]
      }
    },
    {
      id: 'tm6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series Identification**',
      exercise: {
        dropdowns: [
          {
            label: 'The series $\\sum_{n=0}^\\infty \\frac{(-1)^n \\pi^{2n}}{(2n)!}$ equals:',
            options: ['$\\cos(\\pi) = -1$', '$\\sin(\\pi) = 0$', '$\\cos(\\pi^2) \\approx -0.903$', '$1/\\pi$'],
            correctAnswers: ['$\\cos(\\pi) = -1$'],
            hints: ['$\\cos x = \\sum (-1)^n x^{2n}/(2n)!$. Set $x = \\pi$.'],
            explanation: '$\\sum (-1)^n \\pi^{2n}/(2n)! = \\cos(\\pi) = -1$.'
          },
          {
            label: 'The series $1 + 2 + 2 + 4/3 + 2/3 + \\cdots$ with general term $2^n/n!$ sums to:',
            options: ['$e^2$', '$2e$', '$e^2 - 1$', '$2^e$'],
            correctAnswers: ['$e^2$'],
            hints: ['$\\sum 2^n/n! = e^2$ from the exponential series.'],
            explanation: '$\\sum_{n=0}^\\infty 2^n/n! = e^2 \\approx 7.389$.'
          }
        ]
      }
    },
    {
      id: 'tm6-input',
      type: 'input-box' as const,
      content: '**Derivative from Series**',
      exercise: {
        question: 'If $f(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, find $f^{(5)}(0)$. (Hint: identify $f$ first.)',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: ['This is $\\sin x$. $f^{(5)}(x) = \\cos x$, $f^{(5)}(0) = 1$. Or: coefficient of $x^5$ is $(-1)^2/5! = 1/120$, so $f^{(5)}(0) = 5! \\cdot 1/120 = 1$.'],
        explanation: '$f(x) = \\sin x$. $f^{(5)}(x) = \\cos x$, so $f^{(5)}(0) = \\cos(0) = 1$. Alternatively: $a_5 = 1/5!$, so $f^{(5)}(0) = 5! \\cdot a_5 = 5!/5! = 1$.'
      }
    },
    {
      id: 'tm6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Derivative table method for unfamiliar functions (like $\\tan x$)
- Substituting into and multiplying known series (like $x e^{-x}$)
- Series evaluation by identifying the function
- Integration of series for functions with no elementary antiderivative

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
