export const satQuadraticsPart2Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe2-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 2 of 7 — The Quadratic Formula & Discriminant**

### The Quadratic Formula

For $ax^2 + bx + c = 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Use this when factoring is difficult or impossible.

### The Discriminant: $\\Delta = b^2 - 4ac$

| Discriminant | # Solutions | Graph |
|-------------|------------|-------|
| $\\Delta > 0$ | 2 real solutions | Parabola crosses x-axis twice |
| $\\Delta = 0$ | 1 real solution (double root) | Parabola touches x-axis |
| $\\Delta < 0$ | 0 real solutions | Parabola doesn't touch x-axis |

### SAT Favorite Question Type 🎯

"For what values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?"

Set discriminant = 0: $k^2 - 4(1)(9) = 0$ → $k^2 = 36$ → $k = \\pm 6$`
    },
    {
      id: 'qe2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Formula & Discriminant** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many real solutions does $2x^2 + 3x + 5 = 0$ have?',
            options: ['$0$', '$1$', '$2$', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\Delta = 9 - 40 = -31 < 0$. Negative discriminant means no real solutions.'
          },
          {
            question: 'Using the quadratic formula, what are the solutions to $x^2 - 6x + 5 = 0$?',
            options: ['$x = 1$ and $x = 5$', '$x = -1$ and $x = -5$', '$x = 2$ and $x = 3$', '$x = -2$ and $x = 3$'],
            correctAnswer: 0,
            explanation: '$x = (6 \\pm \\sqrt{36 - 20})/2 = (6 \\pm 4)/2$. So $x = 5$ or $x = 1$. (Note: factoring $(x-1)(x-5)$ is faster here!)'
          },
          {
            question: 'For what value of $c$ does $x^2 + 8x + c = 0$ have exactly one solution?',
            options: ['$16$', '$8$', '$64$', '$4$'],
            correctAnswer: 0,
            explanation: 'One solution means $\\Delta = 0$: $64 - 4c = 0$ → $c = 16$. The equation becomes $(x + 4)^2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Quadratic formula: memorize it — it works for ALL quadratics
- Discriminant ($b^2 - 4ac$) tells you HOW MANY solutions without solving
- $\\Delta > 0$: 2 solutions, $\\Delta = 0$: 1 solution, $\\Delta < 0$: 0 real solutions
- "Exactly one solution" → set discriminant equal to 0`
    }
  ]
};
