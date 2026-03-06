export const satPolynomialsPart6Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 6 of 7 — Polynomial Graphs and Transformations**

### Reading Polynomial Graphs

From a graph, you can determine:
- **Zeros**: where the curve crosses/touches the x-axis
- **y-intercept**: where the curve crosses the y-axis (the constant term)
- **Degree**: count the number of turns + 1 (approximately)
- **Leading coefficient sign**: from end behavior

### Transformations

For $f(x) = x^3$:

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Vertical shift up $k$ | $f(x) + k$ | Graph moves up |
| Horizontal shift right $h$ | $f(x - h)$ | Graph moves right |
| Vertical stretch by $a$ | $af(x)$ | Taller/narrower |
| Reflection over x-axis | $-f(x)$ | Flip upside down |
| Reflection over y-axis | $f(-x)$ | Flip left-right |

### SAT Graph Reading Strategy

When the SAT shows a polynomial graph and asks for the equation:
1. Read the x-intercepts → write factors
2. Check end behavior → determine sign of leading coefficient
3. Check one more point (often the y-intercept) → determine the leading coefficient`
    },
    {
      id: 'pf6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'A polynomial graph crosses the x-axis at $-2, 1,$ and $3$, and the y-intercept is $-12$. Which could be the equation?',
            options: ['$y = -2(x+2)(x-1)(x-3)$', '$y = (x+2)(x-1)(x-3)$', '$y = 2(x+2)(x-1)(x-3)$', '$y = -(x+2)(x-1)(x-3)$'],
            correctAnswer: 0,
            explanation: '$f(x) = a(x+2)(x-1)(x-3)$. At $x=0$: $a(2)(-1)(-3) = 6a = -12$ → $a = -2$.'
          },
          {
            question: 'If $g(x) = f(x - 3) + 2$, and $f$ has a minimum at $(1, -4)$, then $g$ has a minimum at:',
            options: ['$(4, -2)$', '$(1, -2)$', '$(-2, -2)$', '$(4, -4)$'],
            correctAnswer: 0,
            explanation: '$f(x-3)$ shifts right 3: $(1,\\,-4) \\to (4,\\,-4)$. Then $+2$ shifts up 2: $(4,\\,-4) \\to (4,\\,-2)$.'
          },
          {
            question: 'A degree-4 polynomial with a positive leading coefficient has how many possible shapes for its end behavior?',
            options: ['Both ends go up (↑↑)', 'Left down, right up (↓↑)', 'Both ends go down (↓↓)', 'Left up, right down (↑↓)'],
            correctAnswer: 0,
            explanation: 'Even degree + positive leading coefficient: both ends of the graph go up. Think of $x^4$.'
          }
        ]
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Read x-intercepts from the graph to write factors
- Use end behavior to determine degree (even/odd) and leading coefficient (±)
- Transformations: inside the function = horizontal (and reversed); outside = vertical
- $(x-h)$ shifts **right**, not left — the shift is opposite the sign`
    }
  ]
};
