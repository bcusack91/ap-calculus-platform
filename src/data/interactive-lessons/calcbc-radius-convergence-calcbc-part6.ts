export const calcbcRadConvPart6Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

Determine the radius and interval of convergence for each series.`
    },
    {
      id: 'rc6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(x+3)^n}{\\sqrt{n} \\cdot 2^n}$. IOC:',
            options: ['$(-5, -1)$ with left endpoint check needed: $\\sum (-1)^n/\\sqrt{n}$ converges (AST); right: $\\sum 1/\\sqrt{n}$ diverges ($p = 1/2$). IOC: $[-5, -1)$', '$[-5, -1]$', '$(-5, -1)$', '$(-5, -1]$'],
            correctAnswer: 0,
            explanation: '$R = 2$, center $-3$. $x = -1$: $\\sum 2^n/(\\sqrt{n} \\cdot 2^n) = \\sum 1/\\sqrt{n}$, $p = 1/2 < 1$, diverges. $x = -5$: $\\sum (-2)^n/(\\sqrt{n} \\cdot 2^n) = \\sum (-1)^n/\\sqrt{n}$, converges by AST. IOC: $[-5, -1)$.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{3^n x^n}{(n+1)^2}$. IOC:',
            options: ['$[-1/3, 1/3]$', '$(-1/3, 1/3)$', '$[-1/3, 1/3)$', '$(-1/3, 1/3]$'],
            correctAnswer: 0,
            explanation: '$R = 1/3$. $x = 1/3$: $\\sum 1/(n+1)^2$ converges ($p = 2$). $x = -1/3$: $\\sum (-1)^n/(n+1)^2$ converges absolutely. IOC: $[-1/3, 1/3]$.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n!(x-2)^n}{10^n}$. IOC:',
            options: ['$\\{2\\}$ only ($R = 0$)', '$(1.9, 2.1)$', '$(-8, 12)$', '$(-\\infty, \\infty)$'],
            correctAnswer: 0,
            explanation: '$|c_{n+1}/c_n| = (n+1)/10 \\to \\infty$. $R = 0$. Converges only at center $x = 2$.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{(x-1)^n}{n!}$. IOC:',
            options: ['$(-\\infty, \\infty)$ ($R = \\infty$)', '$[0, 2]$', '$(0, 2)$', '$\\{1\\}$'],
            correctAnswer: 0,
            explanation: '$|c_{n+1}/c_n| = 1/(n+1) \\to 0$. $R = \\infty$. This is $e^{x-1}$, converges everywhere.'
          }
        ]
      }
    },
    {
      id: 'rc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Workshop — Endpoint Decisions**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=2}^{\\infty} \\frac{x^n}{n \\ln n}$, $R = 1$. At $x = 1$: $\\sum 1/(n \\ln n)$:',
            options: ['Diverges (Integral Test: $\\int 1/(x \\ln x)\\,dx = \\ln(\\ln x) \\to \\infty$)', 'Converges', 'Inconclusive', 'Need LCT'],
            correctAnswers: ['Diverges (Integral Test: $\\int 1/(x \\ln x)\\,dx = \\ln(\\ln x) \\to \\infty$)'],
            hints: ['$\\int_2^{\\infty} 1/(x \\ln x)\\,dx$, let $u = \\ln x$.'],
            explanation: '$\\int du/u = \\ln u \\to \\infty$. Diverges by Integral Test.'
          },
          {
            label: 'Same series at $x = -1$: $\\sum (-1)^n/(n \\ln n)$:',
            options: ['Converges (AST: $1/(n \\ln n)$ decreases to $0$)', 'Diverges', 'Converges absolutely', 'Inconclusive'],
            correctAnswers: ['Converges (AST: $1/(n \\ln n)$ decreases to $0$)'],
            hints: ['Alternating, $b_n = 1/(n \\ln n)$ decreasing, $\\to 0$.'],
            explanation: 'AST conditions met. Converges conditionally. IOC: $[-1, 1)$.'
          }
        ]
      }
    },
    {
      id: 'rc6-input',
      type: 'input-box' as const,
      content: '**Workshop — Finding R**',
      exercise: {
        question: 'Find $R$ for $\\sum_{n=1}^{\\infty} \\frac{(2n)! x^n}{(n!)^2 16^n}$. Express as an integer.',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['$c_n = (2n)!/((n!)^2 16^n)$. $c_{n+1}/c_n = (2n+2)(2n+1)/((n+1)^2 \\cdot 16)$.', 'Simplify: $(2n+1) \\cdot 2/((n+1) \\cdot 16) = (2n+1)/(8(n+1)) \\to 1/4$.'],
        explanation: '$\\lim |c_{n+1}/c_n| = 1/4$. $R = 4$.'
      }
    },
    {
      id: 'rc6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- $R = 0$: only center; $R = \\infty$: all reals; else check endpoints
- Integral Test for $\\sum 1/(n \\ln n)$ type endpoints
- AST handles most alternating endpoints
- $p$-Series for $\\sum 1/n^p$ endpoints

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
