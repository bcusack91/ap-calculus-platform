export const calcbcTaylorPart2Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay2-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 2 of 7 — The Big Four Maclaurin Series**

### Must-Know Series

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (|x| < \infty)$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (|x| < \infty)$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (|x| < \infty)$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1)$$`
    },
    {
      id: 'tay2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Big Four** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $e^{-x}$ is:',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{n!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-x)^n}{n!}$... same thing! $1 - x + \\frac{x^2}{2} - \\cdots$', '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$', '$-\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$'],
            correctAnswer: 0,
            explanation: 'Replace $x$ with $-x$ in $e^x$: $\\sum \\frac{(-x)^n}{n!} = \\sum \\frac{(-1)^n x^n}{n!}$.'
          },
          {
            question: 'Find the Maclaurin series for $\\frac{1}{1+x}$.',
            options: ['$\\sum_{n=0}^{\\infty} (-1)^n x^n$', '$\\sum_{n=0}^{\\infty} x^n$', '$\\sum_{n=1}^{\\infty} (-1)^n x^n$', '$\\frac{1}{1-x^2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{1+x} = \\frac{1}{1-(-x)} = \\sum (-x)^n = \\sum (-1)^n x^n$.'
          }
        ]
      }
    },
    {
      id: 'tay2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Memorize $e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$. Build all others from these four!`
    }
  ]
};
