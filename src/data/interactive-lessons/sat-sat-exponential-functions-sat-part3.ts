export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 3 of 7 — Graphs of Exponential Functions**

### The Basic Graph: $y = b^x$

- **Growth** ($b > 1$): rises from left to right
- **Decay** ($0 < b < 1$): falls from left to right
- Always passes through $(0, 1)$ since $b^0 = 1$
- **Horizontal asymptote**: $y = 0$ (the x-axis)
- Domain: all real numbers; Range: $y > 0$

### Transformations: $y = a \\cdot b^{x-h} + k$

| Parameter | Effect |
|-----------|--------|
| $a$ | Vertical stretch/flip (if negative: reflected) |
| $h$ | Horizontal shift (right if positive) |
| $k$ | Vertical shift (up if positive) |
| $k$ | New horizontal asymptote: $y = k$ |

### Reading Exponential Graphs on SAT

From a graph, identify:
- **y-intercept**: the initial value $a$ (where the graph crosses $y$-axis)
- **Horizontal asymptote**: the value $y$ approaches but never reaches
- **Growth vs decay**: is the function increasing or decreasing?
- **Growth factor**: pick two integer $x$-values, divide $y$-values`
    },
    {
      id: 'ef3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'The horizontal asymptote of $y = 3 \\cdot 2^x + 5$ is:',
            options: ['$y = 5$', '$y = 3$', '$y = 0$', '$y = 8$'],
            correctAnswer: 0,
            explanation: 'The asymptote is $y = k = 5$. As $x \\to -\\infty$, $2^x \\to 0$, so $y \\to 3(0) + 5 = 5$.'
          },
          {
            question: 'If an exponential graph passes through $(0, 4)$ and $(1, 12)$, the function is:',
            options: ['$y = 4(3)^x$', '$y = 4(2)^x$', '$y = 12^x$', '$y = 4 + 8x$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$: $a = 4$. At $x = 1$: $4b = 12$ → $b = 3$. So $y = 4(3)^x$.'
          },
          {
            question: 'Which function represents exponential DECAY?',
            options: ['$y = 5(0.7)^x$', '$y = 5(1.3)^x$', '$y = 5(7)^x$', '$y = 5x + 0.7$'],
            correctAnswer: 0,
            explanation: 'Decay means $0 < b < 1$. Here $b = 0.7 < 1$, so this is exponential decay.'
          }
        ]
      }
    },
    {
      id: 'ef3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $y = b^x$ always passes through $(0, 1)$ with asymptote $y = 0$
- Transformations shift the graph and asymptote: $y = a \\cdot b^{x-h} + k$ has asymptote $y = k$
- Growth ($b > 1$): curve rises; Decay ($0 < b < 1$): curve falls
- Find the equation from two points: use $(0, y_0)$ for $a$ and another point for $b$`
    }
  ]
};
