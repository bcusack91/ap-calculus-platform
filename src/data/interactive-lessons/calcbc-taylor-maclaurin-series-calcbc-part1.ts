export const calcbcTaylorPart1Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay1-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 1 of 7 — Taylor Polynomial Definition**

### Taylor Series (centered at $x = a$)

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Maclaurin Series (centered at $a = 0$)

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots$$

### $n$th-Degree Taylor Polynomial

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$`
    },
    {
      id: 'tay1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Taylor Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'The 2nd-degree Maclaurin polynomial for $e^x$ is:',
            options: ['$1 + x + \\frac{x^2}{2}$', '$1 + x + x^2$', '$e + ex + \\frac{ex^2}{2}$', '$x + x^2$'],
            correctAnswer: 0,
            explanation: '$f(0) = 1$, $f\'(0) = 1$, $f\'\'(0) = 1$. $P_2 = 1 + x + \\frac{x^2}{2!} = 1 + x + \\frac{x^2}{2}$.'
          },
          {
            question: 'What is the coefficient of $x^3$ in the Maclaurin series for $\\sin x$?',
            options: ['$-1/6$', '$1/6$', '$-1/3$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\cdots$. Coefficient of $x^3$ is $-1/6$.'
          }
        ]
      }
    },
    {
      id: 'tay1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Taylor: expand around $a$. Maclaurin: expand around $0$. Coefficient of $(x-a)^n$ is $f^{(n)}(a)/n!$.`
    }
  ]
};
