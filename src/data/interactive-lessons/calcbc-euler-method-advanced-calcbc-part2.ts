export const calcbcEulerPart2Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul2-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 2 of 7 — Multi-Step Computations**

### Example: $dy/dx = 2x$, $y(1) = 3$, $\Delta x = 0.5$

| Step | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $y_{n+1}$ |
|------|--------|--------|----------------|-----------|
| 0 | 1 | 3 | 2(1) = 2 | 3 + 2(0.5) = 4 |
| 1 | 1.5 | 4 | 2(1.5) = 3 | 4 + 3(0.5) = 5.5 |
| 2 | 2 | 5.5 | — | — |

Exact: $y = x^2 + 2$, $y(2) = 6$. Euler gives 5.5 (underestimate for concave up).`
    },
    {
      id: 'eul2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multi-Step** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = y$, $y(0) = 1$, $\\Delta x = 0.5$, 2 steps. Find $y(1)$.',
            options: ['$2.25$', '$e \\approx 2.718$', '$2$', '$2.5$'],
            correctAnswer: 0,
            explanation: 'Step 1: $y_1 = 1 + 1(0.5) = 1.5$. Step 2: $y_2 = 1.5 + 1.5(0.5) = 2.25$. (Exact: $e \\approx 2.718$.)'
          }
        ]
      }
    },
    {
      id: 'eul2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Organize in a table. Smaller $\\Delta x$ gives better approximations.`
    }
  ]
};
