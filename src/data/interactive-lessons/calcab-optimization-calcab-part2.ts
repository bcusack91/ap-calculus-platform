export const calcabOptimizationPart2Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt2-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 2 of 7 — Geometric Optimization**

### Box Problem (Classic AP Question)

An open-top box is made by cutting squares of side $x$ from corners of a 12 × 8 sheet and folding up.

**Objective:** Maximize $V = x(12 - 2x)(8 - 2x)$

**Domain:** $0 < x < 4$

Expand: $V = x(96 - 24x - 16x + 4x^2) = 4x^3 - 40x^2 + 96x$

$V'(x) = 12x^2 - 80x + 96 = 4(3x^2 - 20x + 24)$

Using the quadratic formula: $x = \\frac{20 \\pm \\sqrt{400-288}}{6} = \\frac{20 \\pm \\sqrt{112}}{6}$

$x \\approx 1.57$ or $x \\approx 5.10$

Since $x < 4$, use $x \\approx 1.57$. $V \\approx 1.57(8.86)(4.86) \\approx 67.6$ cubic units.`
    },
    {
      id: 'opt2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangle inscribed in the parabola $y = 12 - x^2$ (with base on the x-axis) has vertices at $(\\pm x, 0)$ and $(\\pm x, 12-x^2)$. Find $x$ that maximizes the area.',
            options: ['$x = 2$', '$x = \\sqrt{3}$', '$x = 1$', '$x = 3$'],
            correctAnswer: 0,
            explanation: '$A = 2x(12 - x^2) = 24x - 2x^3$. $A\' = 24 - 6x^2 = 0$ at $x^2 = 4$, so $x = 2$.'
          },
          {
            question: 'Find the point on $y = \\sqrt{x}$ closest to $(3, 0)$.',
            options: ['$(\\frac{5}{2}, \\sqrt{\\frac{5}{2}})$', '$(1, 1)$', '$(4, 2)$', '$(2, \\sqrt{2})$'],
            correctAnswer: 0,
            explanation: 'Minimize $D^2 = (x-3)^2 + x$. $\\frac{d}{dx}D^2 = 2(x-3) + 1 = 2x - 5 = 0$ at $x = 5/2$.'
          }
        ]
      }
    },
    {
      id: 'opt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. For minimizing distance, it's easier to minimize $D^2$ (avoids square roots)
2. Check your domain carefully for geometric problems
3. The box-cutting problem is a classic — know the setup`
    }
  ]
};
