export const calcbcConvergencePart6Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

Work through these problems choosing the best test for each.`
    },
    {
      id: 'ct6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Set A — Identify & Classify**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{5^n}{n \\cdot 3^n}$',
            options: ['Diverges (Ratio Test gives $L = 5/3 > 1$)', 'Converges absolutely', 'Converges conditionally', 'Inconclusive by Ratio Test'],
            correctAnswer: 0,
            explanation: 'Ratio: $L = \\lim \\frac{5^{n+1}/((n+1)3^{n+1})}{5^n/(n \\cdot 3^n)} = \\lim \\frac{5n}{3(n+1)} = 5/3 > 1$. Diverges.'
          },
          {
            question: '$\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}$',
            options: ['Converges by Integral Test', 'Diverges by Integral Test', 'Converges by Ratio Test', 'Diverges by Divergence Test'],
            correctAnswer: 0,
            explanation: '$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = [-1/\\ln x]_2^\\infty = 1/\\ln 2$. Converges (log-$p$-series, $p = 2 > 1$).'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{2n+1}$',
            options: ['Diverges by Divergence Test ($\\lim |a_n| = 1/2 \\neq 0$)', 'Converges by AST', 'Converges conditionally', 'Converges absolutely'],
            correctAnswer: 0,
            explanation: '$\\lim n/(2n+1) = 1/2 \\neq 0$. The Divergence Test applies even to alternating series.'
          }
        ]
      }
    },
    {
      id: 'ct6-mc2',
      type: 'multiple-choice' as const,
      content: '**Workshop Set B — Test Selection**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{2n+1}{3n+4}\\right)^n$. Best test?',
            options: ['Root Test ($L = 2/3 < 1$, converges)', 'Ratio Test', 'Direct Comparison', 'Integral Test'],
            correctAnswer: 0,
            explanation: '$\\sqrt[n]{|a_n|} = \\frac{2n+1}{3n+4} \\to 2/3 < 1$. Converges by Root Test.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n^2+1}{n^4-n+2}$. Best test?',
            options: ['LCT with $\\sum 1/n^2$ since degree gap = 2', 'Root Test', 'Divergence Test', 'AST'],
            correctAnswer: 0,
            explanation: '$\\frac{(n^2+1)/(n^4-n+2)}{1/n^2} = \\frac{n^4+n^2}{n^4-n+2} \\to 1$. Since $\\sum 1/n^2$ converges, this does too.'
          }
        ]
      }
    },
    {
      id: 'ct6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Each Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{3/2}}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['$\\sum 1/n^{3/2}$ converges ($p = 3/2 > 1$).'],
            explanation: '$\\sum |a_n| = \\sum 1/n^{3/2}$ converges. Absolutely convergent.'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n \\ln n}{n}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sum \\ln n/n$ diverges (compare to $\\sum 1/n$). But AST applies since $\\ln n/n$ eventually decreases to 0.'],
            explanation: '$\\sum |a_n| = \\sum \\ln n/n$ diverges. AST applies: $b_n = \\ln n/n \\to 0$ and eventually decreasing. Conditional.'
          },
          {
            label: '$\\sum_{n=0}^{\\infty} \\frac{(-3)^n}{(2n)!}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['Ratio Test on $\\sum |a_n| = \\sum 3^n/(2n)!$. Factorial beats exponential.'],
            explanation: 'Ratio: $L = \\lim \\frac{3}{(2n+2)(2n+1)} = 0 < 1$. Absolutely convergent.'
          }
        ]
      }
    },
    {
      id: 'ct6-input',
      type: 'input-box' as const,
      content: '**Compute the Limit**',
      exercise: {
        question: 'For the Ratio Test on $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$, compute $L = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}$. Enter the value as a fraction or decimal (hint: use the identity $(n/(n+1))^n \\to 1/e$).',
        correctAnswer: '1/e',
        acceptableAnswers: ['1/e', '0.368', '0.37', 'e^(-1)', 'e^{-1}'],
        hints: ['$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)! \\cdot n^n}{n! \\cdot (n+1)^{n+1}} = \\left(\\frac{n}{n+1}\\right)^n$.'],
        explanation: '$L = \\lim \\left(\\frac{n}{n+1}\\right)^n = \\lim \\left(1 - \\frac{1}{n+1}\\right)^n = 1/e \\approx 0.368 < 1$. Converges.'
      }
    },
    {
      id: 'ct6-summary',
      type: 'text' as const,
      content: `### Workshop Complete

Key takeaways:
- Always start with Divergence Test
- Match the series structure to the best test
- Classify: check $\\sum |a_n|$ first, then $\\sum a_n$

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
