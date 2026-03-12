export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe3-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 3 of 7 — Vertex Form and Completing the Square**

### Vertex Form: $y = a(x - h)^2 + k$

- Vertex is at $(h, k)$
- $a > 0$: opens up (minimum at vertex)
- $a < 0$: opens down (maximum at vertex)

### Converting Standard → Vertex Form (Completing the Square)

**Example:** $y = x^2 + 6x + 2$

1. Group: $y = (x^2 + 6x) + 2$
2. Half of 6 = 3, square it = 9
3. Add and subtract 9 inside: $y = (x^2 + 6x + 9) - 9 + 2$
4. Factor: $y = (x + 3)^2 - 7$

Vertex: $(-3, -7)$

### When to Use Each Form

| Form | Best For |
|------|----------|
| Standard: $ax^2 + bx + c$ | y-intercept (just read $c$), discriminant |
| Factored: $a(x - r)(x - s)$ | x-intercepts (roots are $r$ and $s$) |
| Vertex: $a(x - h)^2 + k$ | Maximum/minimum value, vertex |`
    },
    {
      id: 'qe3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vertex Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the minimum value of $f(x) = (x - 3)^2 + 5$?',
            options: ['$5$', '$3$', '$-3$', '$8$'],
            correctAnswer: 0,
            explanation: 'In vertex form $a(x-h)^2 + k$, the vertex is $(3, 5)$. Since $a = 1 > 0$, the parabola opens up, so the minimum is $k = 5$.'
          },
          {
            question: 'The graph of $y = -2(x + 1)^2 + 8$ has a vertex at:',
            options: ['$(-1, 8)$', '$(1, 8)$', '$(-1, -8)$', '$(1, -8)$'],
            correctAnswer: 0,
            explanation: 'Vertex form: $a(x - h)^2 + k$ where $h = -1$ and $k = 8$. Watch the sign: $(x + 1) = (x - (-1))$, so $h = -1$.'
          },
          {
            question: 'Completing the square on $x^2 - 10x + 20$:',
            options: ['$(x - 5)^2 - 5$', '$(x - 5)^2 + 5$', '$(x + 5)^2 - 5$', '$(x - 10)^2 + 20$'],
            correctAnswer: 0,
            explanation: 'Half of $-10$ is $-5$, squared is $25$. $x^2 - 10x + 25 - 25 + 20 = (x - 5)^2 - 5$.'
          }
        ]
      }
    },
    {
      id: 'qe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Vertex form: $a(x - h)^2 + k$ → vertex at $(h, k)$
- Watch the sign: $(x + 3)$ means $h = -3$
- Completing the square: half the $b$-coefficient, square it, add/subtract
- Use vertex form when the SAT asks for minimum, maximum, or "what is the least possible value"`
    }
  ]
};
