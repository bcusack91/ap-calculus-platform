export const calcabIntAppsPart4Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia4-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 4 of 7 — Riemann Sums and Trapezoidal Rule**

### Left, Right, and Midpoint Sums

$$L_n = \sum_{i=0}^{n-1} f(x_i)\,\Delta x \qquad R_n = \sum_{i=1}^{n} f(x_i)\,\Delta x$$

### Trapezoidal Rule

$$T_n = \\frac{\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$$

### Over/Underestimates

| Method | Increasing $f$ | Decreasing $f$ |
|--------|----------------|----------------|
| Left | Under | Over |
| Right | Over | Under |
| Trap | Over (concave up) | Under (concave down) |`
    },
    {
      id: 'ia4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Numerical Integration** 🎯\n\nGiven: $x = 0, 1, 2, 3$ with $f(0) = 1, f(1) = 3, f(2) = 2, f(3) = 5$.',
      exercise: {
        questions: [
          {
            question: 'Compute the left Riemann sum with $n = 3$.',
            options: ['$6$', '$10$', '$8$', '$7$'],
            correctAnswer: 0,
            explanation: '$L_3 = f(0)(1) + f(1)(1) + f(2)(1) = 1 + 3 + 2 = 6$.'
          },
          {
            question: 'Compute the trapezoidal approximation.',
            options: ['$8$', '$6$', '$10$', '$7$'],
            correctAnswer: 0,
            explanation: '$T = \\frac{1}{2}[1 + 2(3) + 2(2) + 5] = \\frac{1}{2}[1 + 6 + 4 + 5] = \\frac{16}{2} = 8$.'
          }
        ]
      }
    },
    {
      id: 'ia4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Trapezoidal rule averages left and right sums
2. Know which methods overestimate vs underestimate`
    }
  ]
};
