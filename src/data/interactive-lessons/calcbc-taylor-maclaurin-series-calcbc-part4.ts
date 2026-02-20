export const calcbcTaylorPart4Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay4-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 4 of 7 — Taylor Series at $a \neq 0$**

### Taylor Series Centered at $a$

$$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Example: $\ln x$ about $a = 1$

$f(x) = \ln x$, $f(1) = 0$
$f'(x) = 1/x$, $f'(1) = 1$
$f''(x) = -1/x^2$, $f''(1) = -1$

$$\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \cdots = \sum_{n=1}^{\infty}\frac{(-1)^{n+1}(x-1)^n}{n}$$`
    },
    {
      id: 'tay4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Zero Center** 🎯',
      exercise: {
        questions: [
          {
            question: 'The first three nonzero terms of $\\sqrt{x}$ about $a = 4$:',
            options: ['$2 + \\frac{1}{4}(x-4) - \\frac{1}{64}(x-4)^2$', '$2 + \\frac{1}{2}(x-4)$', '$4 + (x-4)$', '$\\sqrt{4} + \\frac{x-4}{2}$'],
            correctAnswer: 0,
            explanation: '$f(4) = 2$. $f\'(4) = 1/4$. $f\'\'(4) = -1/32$. $P_2 = 2 + \\frac{1}{4}(x-4) + \\frac{-1/32}{2}(x-4)^2 = 2 + \\frac{1}{4}(x-4) - \\frac{1}{64}(x-4)^2$.'
          }
        ]
      }
    },
    {
      id: 'tay4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Non-zero center: compute derivatives at $x = a$, use $(x-a)^n$.`
    }
  ]
};
