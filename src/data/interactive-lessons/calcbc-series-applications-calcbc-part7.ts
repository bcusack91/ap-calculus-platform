export const calcbcSeriesAppsPart7Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Series Applications

**Part 7 of 7 — Putting It All Together**

### Core Skills Summary

| Skill | Technique |
|-------|-----------|
| Approximate $f(x)$ | Build Taylor polynomial from known series |
| Compute $\\int f(x)\\,dx$ | Integrate series term by term |
| Evaluate $\\lim$ | Expand numerator & denominator, cancel |
| Differentiate series | Differentiate term by term |
| Error bound | AST: first omitted term; Lagrange: $M|x-a|^{n+1}/(n+1)!$ |`
    },
    {
      id: 'sa7-mc',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Check**',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $\\frac{1}{1-x}$ is $\\sum_{n=0}^\\infty x^n$. What is the series for $\\frac{1}{(1-x)^2}$?',
            options: ['$\\sum_{n=1}^\\infty n x^{n-1}$', '$\\sum_{n=0}^\\infty x^{2n}$', '$\\sum_{n=0}^\\infty n x^n$', '$\\sum_{n=0}^\\infty x^n / n!$'],
            correctAnswer: 0,
            explanation: 'Differentiate $\\frac{1}{1-x} = \\sum x^n$ to get $\\frac{1}{(1-x)^2} = \\sum n x^{n-1}$.'
          },
          {
            question: 'To find $\\int_0^{0.5} \\frac{\\sin x}{x}\\,dx$ accurately to within $10^{-4}$, you need the series because:',
            options: ['$\\sin x / x$ has no elementary antiderivative', '$\\sin x / x$ is undefined at $x = 0$', 'The integral diverges', 'The function is periodic'],
            correctAnswer: 0,
            explanation: '$\\sin x / x$ has no closed-form antiderivative. Series gives $\\int (1 - x^2/6 + x^4/120 - \\cdots)\\,dx$, which is easy to evaluate term by term.'
          },
          {
            question: '$\\lim_{x\\to 0} \\frac{\\tan x - x}{x^3}$ by series expansion:',
            options: ['$1/3$', '$1/2$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\tan x = x + x^3/3 + \\cdots$, so $\\tan x - x = x^3/3 + \\cdots$. Dividing by $x^3$ gives $1/3$.'
          },
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ and $g(x) = f\'(x)$, then $g(x) =$',
            options: ['$\\cos x$', '$-\\sin x$', '$\\sin x$', '$-\\cos x$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\sin x$, so $f\'(x) = \\cos x$. Alternatively, differentiate term by term: $\\sum (-1)^n x^{2n}/(2n)! = \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'sa7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mixed Application Review**',
      exercise: {
        dropdowns: [
          {
            label: 'The first three nonzero terms of the Maclaurin series for $e^{-x^2}$:',
            options: ['$1 - x^2 + x^4/2$', '$1 + x^2 + x^4/2$', '$1 - x^2/2 + x^4/24$', '$x^2 - x^4/2 + x^6/6$'],
            correctAnswers: ['$1 - x^2 + x^4/2$'],
            hints: ['Substitute $-x^2$ into $e^u = 1 + u + u^2/2 + \\cdots$.'],
            explanation: '$e^{-x^2} = 1 + (-x^2) + (-x^2)^2/2 + \\cdots = 1 - x^2 + x^4/2 - \\cdots$.'
          },
          {
            label: '$\\int_0^1 e^{-x^2}\\,dx$ using the first three terms:',
            options: ['$1 - 1/3 + 1/10 = 23/30$', '$1 + 1/3 + 1/10$', '$1 - 1/2 + 1/6$', '$1/2 - 1/6 + 1/40$'],
            correctAnswers: ['$1 - 1/3 + 1/10 = 23/30$'],
            hints: ['$\\int_0^1(1 - x^2 + x^4/2)\\,dx = [x - x^3/3 + x^5/10]_0^1$.'],
            explanation: '$1 - 1/3 + 1/10 = 30/30 - 10/30 + 3/30 = 23/30 \\approx 0.767$. (Actual: $\\approx 0.7468$.)'
          },
          {
            label: 'The error in the above approximation is bounded by:',
            options: ['$1/42$ (next term: $\\int_0^1 x^6/6\\,dx = 1/42$)', '$1/6$', '$1/720$', 'Cannot be bounded by AST'],
            correctAnswers: ['$1/42$ (next term: $\\int_0^1 x^6/6\\,dx = 1/42$)'],
            hints: ['The integrated series is alternating. The error ≤ |first omitted term|.'],
            explanation: 'The next term: $\\int_0^1 (-x^6/6)\\,dx = -1/42$. By AST, error $< 1/42 \\approx 0.024$.'
          }
        ]
      }
    },
    {
      id: 'sa7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: 'Using the series $\\ln(1+x) = x - x^2/2 + x^3/3 - \\cdots$, find $\\lim_{x\\to 0} \\frac{\\ln(1+x) - x}{x^2}$.',
        correctAnswer: '-1/2',
        acceptableAnswers: ['-1/2', '-0.5'],
        hints: ['$\\ln(1+x) - x = -x^2/2 + x^3/3 - \\cdots$.'],
        explanation: '$\\frac{\\ln(1+x) - x}{x^2} = \\frac{-x^2/2 + x^3/3 - \\cdots}{x^2} = -1/2 + x/3 - \\cdots \\to -1/2$.'
      }
    },
    {
      id: 'sa7-summary',
      type: 'text' as const,
      content: `### Series Applications — Complete ✓

You've mastered:

1. **Approximating functions** — build from 6 known Maclaurin series via substitution
2. **Computing integrals** — integrate term by term when no antiderivative exists
3. **Evaluating limits** — expand, cancel, read off the coefficient
4. **Differentiating series** — power rule term by term, generates new functions
5. **Error analysis** — AST and Lagrange bounds

> **Key Formula Reference:**
>
> $$e^x = \\sum \\frac{x^n}{n!}, \\quad \\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$$
>
> $$\\frac{1}{1-x} = \\sum x^n, \\quad \\ln(1+x) = \\sum \\frac{(-1)^{n+1} x^n}{n}, \\quad \\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$$

**Series Applications topic complete!**`
    }
  ]
};
