export const calcbcRatioRootPart6Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

Apply the Ratio and Root Tests to a variety of series.`
    },
    {
      id: 'rr6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(2n)!}{(n!)^2 \\cdot 4^n}$. Ratio Test: $L =$',
            options: ['$1$ (inconclusive — this is a central binomial coefficient series)', '$1/4$', '$4$', '$1/2$'],
            correctAnswer: 0,
            explanation: '$a_{n+1}/a_n = (2n+2)(2n+1)/((n+1)^2 \\cdot 4) = (2n+1)/(2(n+1)) \\to 1$. Inconclusive.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{3n+1}{2n-1}\\right)^n$. Best test and result:',
            options: ['Root: $L = 3/2 > 1$, diverges', 'Ratio: $L = 3/2$, diverges', 'Root: $L = 1$, inconclusive', 'Divergence Test only'],
            correctAnswer: 0,
            explanation: 'Root: $|a_n|^{1/n} = (3n+1)/(2n-1) \\to 3/2 > 1$. Diverges.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{(-3)^n}{(2n+1)!}$. Ratio Test $L =$',
            options: ['$0 < 1$, converges absolutely', '$3$, diverges', '$3/2$, diverges', '$1$, inconclusive'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = 3/((2n+3)(2n+2)) \\to 0$. Converges absolutely (this is $\\sin(\\sqrt{3})/\\sqrt{3}$).'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$. Ratio Test: $a_{n+1}/a_n = (n/(n+1))^n$. So $L =$',
            options: ['$1/e < 1$, converges', '$e > 1$, diverges', '$1$, inconclusive', '$0$'],
            correctAnswer: 0,
            explanation: '$\\lim (n/(n+1))^n = \\lim (1-1/(n+1))^n = 1/e \\approx 0.368 < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rr6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Workshop — Test Choice**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{5^n + 3^n}{7^n}$: best approach:',
            options: ['Split: $\\sum (5/7)^n + \\sum (3/7)^n$, both geometric with $|r| < 1$', 'Ratio Test on the combined expression', 'Root Test', 'Integral Test'],
            correctAnswers: ['Split: $\\sum (5/7)^n + \\sum (3/7)^n$, both geometric with $|r| < 1$'],
            hints: ['When terms can be split, recognize geometric series directly.'],
            explanation: 'Both are convergent geometric series ($|r| < 1$). Sum converges.'
          },
          {
            label: '$\\sum (n^2 + 1)^n / (2n^2)^n$: best test:',
            options: ['Root: $|a_n|^{1/n} = (n^2+1)/(2n^2) \\to 1/2$, converges', 'Ratio Test', 'Comparison with $1/2^n$', 'Divergence Test'],
            correctAnswers: ['Root: $|a_n|^{1/n} = (n^2+1)/(2n^2) \\to 1/2$, converges'],
            hints: ['Term has the form $(\\cdot)^n$.'],
            explanation: 'Root: $(n^2+1)/(2n^2) \\to 1/2 < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rr6-input',
      type: 'input-box' as const,
      content: '**Workshop — Computation**',
      exercise: {
        question: 'For $\\sum_{n=0}^{\\infty} \\frac{x^n \\cdot n!}{(2n)!}$, find the radius of convergence $R$. Enter as "infinity" if infinite.',
        correctAnswer: 'infinity',
        acceptableAnswers: ['infinity', 'inf', 'Infinity'],
        hints: ['$|a_{n+1}/a_n| = |x|(n+1)/((2n+2)(2n+1)) = |x|/(2(2n+1)) \\to 0$.'],
        explanation: '$L = 0$ for any $x$. The series converges for all $x$. $R = \\infty$.'
      }
    },
    {
      id: 'rr6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Factorials and double factorials → Ratio Test
- Expressions raised to the $n$th power → Root Test
- When $L = 1$, don't guess — switch to another test
- Always check: can the series be recognized as geometric or $p$-series first?

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
