export const calcbcEulerPart4Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul4-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 4 of 7 — Step Size & Accuracy**

### Effect of Step Size

Smaller $\Delta x$ → more steps → better approximation.

| Steps | $\Delta x$ | Euler $y(1)$ for $y' = y$, $y(0) = 1$ | Error |
|-------|------------|--------------------------------------|-------|
| 1 | 1.0 | 2.000 | 0.718 |
| 2 | 0.5 | 2.250 | 0.468 |
| 4 | 0.25 | 2.441 | 0.277 |
| 10 | 0.1 | 2.594 | 0.124 |
| 100 | 0.01 | 2.705 | 0.013 |

Exact: $e \approx 2.718$`
    },
    {
      id: 'eul4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Step Size** 🎯',
      exercise: {
        questions: [
          {
            question: 'Halving $\\Delta x$ roughly:',
            options: ['Halves the error', 'Quarters the error', 'Has no effect', 'Doubles the error'],
            correctAnswer: 0,
            explanation: 'Euler is a first-order method: error is roughly proportional to $\\Delta x$. Halving step size halves the error.'
          }
        ]
      }
    },
    {
      id: 'eul4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Error $\\propto \\Delta x$. Halve the step → halve the error (roughly).`
    }
  ]
};
