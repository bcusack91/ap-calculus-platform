export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe1-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 1 of 7 — Standard Form and Factoring**

Quadratics are one of the most heavily tested topics on the SAT Math section.

### Standard Form: $ax^2 + bx + c = 0$

- $a$ determines the direction of the parabola (up if $a > 0$, down if $a < 0$)
- The vertex is at $x = -\\frac{b}{2a}$

### Factoring

To factor $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**.

**Example:** $x^2 + 7x + 12 = 0$
- Numbers that multiply to 12 and add to 7: **3 and 4**
- $(x + 3)(x + 4) = 0$ → $x = -3$ or $x = -4$

### Factoring with leading coefficient ≠ 1

For $2x^2 + 7x + 3$:
- Multiply $a \\cdot c = 6$. Find numbers that multiply to 6 and add to 7: **1 and 6**
- Split: $2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (x + 3)(2x + 1)$

### Zero Product Property

If $ab = 0$, then $a = 0$ or $b = 0$. This is why factoring works for solving equations.`
    },
    {
      id: 'qe1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Factoring Quadratics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What are the solutions to $x^2 - 5x + 6 = 0$?',
            options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = -1$ and $x = -6$'],
            correctAnswer: 0,
            explanation: 'Find numbers that multiply to 6 and add to $-5$: $-2$ and $-3$. So $(x-2)(x-3) = 0$, giving $x = 2$ or $x = 3$.'
          },
          {
            question: 'If $(x + k)(x + 3) = x^2 + 7x + 12$, what is the value of $k$?',
            options: ['$4$', '$3$', '$9$', '$12$'],
            correctAnswer: 0,
            explanation: 'Expand: $x^2 + (k+3)x + 3k$. Compare: $k + 3 = 7$ → $k = 4$. (Check: $3k = 12$ ✓)'
          },
          {
            question: 'What is the vertex x-coordinate of $y = 2x^2 - 8x + 5$?',
            options: ['$2$', '$-2$', '$4$', '$-4$'],
            correctAnswer: 0,
            explanation: '$x = -b/(2a) = -(-8)/(2 \\cdot 2) = 8/4 = 2$. The vertex x-coordinate is always $-b/(2a)$.'
          }
        ]
      }
    },
    {
      id: 'qe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Standard form: $ax^2 + bx + c$, vertex at $x = -b/(2a)$
- Factoring: find two numbers that multiply to $c$ and add to $b$ (when $a = 1$)
- Zero product property: if the factors multiply to zero, at least one factor equals zero
- Always double-check by expanding your factored form`
    }
  ]
};
