export const satQuadraticsPart7Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe7-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 7 of 7 — SAT Quadratics Review & Hard Problems**

### Everything You Need to Know

| Form | Formula | Best For |
|------|---------|----------|
| Standard | $ax^2 + bx + c$ | y-intercept, discriminant |
| Factored | $a(x - r)(x - s)$ | Roots/zeros |
| Vertex | $a(x - h)^2 + k$ | Max/min, vertex |

### Sum and Product of Roots

For $ax^2 + bx + c = 0$ with roots $r$ and $s$:
- Sum: $r + s = -b/a$
- Product: $r \\cdot s = c/a$

This saves time when the SAT asks for $r + s$ or $rs$ without asking for individual roots.

### Hard SAT Pattern: Equivalent Forms

"Which is equivalent to $2x^2 + 12x + 7$?"

Complete the square: $2(x^2 + 6x) + 7 = 2(x^2 + 6x + 9 - 9) + 7 = 2(x + 3)^2 - 11$

### Hard SAT Pattern: Creating Equations

"A quadratic has roots 3 and $-5$." → $y = (x - 3)(x + 5) = x^2 + 2x - 15$`
    },
    {
      id: 'qe7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the roots of $x^2 + kx + 8 = 0$ have a sum of $-6$, what is $k$?',
            options: ['$6$', '$-6$', '$8$', '$-8$'],
            correctAnswer: 0,
            explanation: 'Sum of roots $= -b/a = -k/1 = -k$. If the sum is $-6$, then $-k = -6$ → $k = 6$.'
          },
          {
            question: 'Which is equivalent to $3x^2 - 24x + 50$?',
            options: ['$3(x - 4)^2 + 2$', '$3(x - 4)^2 - 2$', '$3(x + 4)^2 + 2$', '$3(x - 8)^2 + 2$'],
            correctAnswer: 0,
            explanation: '$3(x^2 - 8x) + 50 = 3(x^2 - 8x + 16 - 16) + 50 = 3(x - 4)^2 - 48 + 50 = 3(x - 4)^2 + 2$.'
          },
          {
            question: 'A quadratic function has zeros at $x = -2$ and $x = 7$ and passes through $(0, -28)$. What is the function?',
            options: ['$y = 2(x + 2)(x - 7)$', '$y = (x + 2)(x - 7)$', '$y = -2(x + 2)(x - 7)$', '$y = 2(x - 2)(x + 7)$'],
            correctAnswer: 0,
            explanation: '$y = a(x + 2)(x - 7)$. At $(0, -28)$: $-28 = a(2)(-7) = -14a$ → $a = 2$. So $y = 2(x + 2)(x - 7)$.'
          }
        ]
      }
    },
    {
      id: 'qe7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Sum of roots $= -b/a$, Product of roots $= c/a$ (Vieta's formulas)
- Know all three forms and when each is most useful
- Completing the square: factor out $a$ first, then complete inside the parentheses
- To create a quadratic from roots: $y = a(x - r)(x - s)$, find $a$ from another point`
    }
  ]
};
