export const calcabInverseFunctionsPart4Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv4-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 4 of 7 — Table-Based Inverse Problems**

### The AP Pattern

Given a table of $f$ and $f'$ values, find $(f^{-1})'$ at a point.

| $x$ | $f(x)$ | $f'(x)$ |
|-----|---------|----------|
| 1 | 4 | 3 |
| 2 | 7 | 5 |
| 4 | 10 | 2 |

To find $(f^{-1})'(7)$:

1. $f(2) = 7$, so $f^{-1}(7) = 2$
2. $(f^{-1})'(7) = \\frac{1}{f'(2)} = \\frac{1}{5}$`
    },
    {
      id: 'inv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Problems** 🎯\n\nUsing the table: $f(1) = 4$, $f\'(1) = 3$, $f(2) = 7$, $f\'(2) = 5$, $f(4) = 10$, $f\'(4) = 2$.',
      exercise: {
        questions: [
          {
            question: 'Find $(f^{-1})\'(4)$.',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{4}$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(1) = 4$, so $f^{-1}(4) = 1$. $(f^{-1})\'(4) = \\frac{1}{f\'(1)} = \\frac{1}{3}$.'
          },
          {
            question: 'Find $(f^{-1})\'(10)$.',
            options: ['$\\frac{1}{2}$', '$2$', '$\\frac{1}{10}$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(4) = 10$, so $f^{-1}(10) = 4$. $(f^{-1})\'(10) = \\frac{1}{f\'(4)} = \\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'inv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. find the $x$ where $f(x) = $ the target value
2. Take reciprocal of $f'$ at that $x$`
    }
  ]
};
