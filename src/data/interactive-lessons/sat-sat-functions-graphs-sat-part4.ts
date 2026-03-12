export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn4-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 4 of 7 — Piecewise & Absolute Value Functions**

### Piecewise Functions

A function defined by different rules for different parts of its domain:

$$f(x) = \\begin{cases} x + 3 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

$f(-2) = -2 + 3 = 1$ (use first rule since $-2 < 0$)

$f(3) = 9$ (use second rule since $3 \\geq 0$)

### Absolute Value as Piecewise

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

### Graphing $y = a|x - h| + k$

- V-shaped graph with vertex at $(h, k)$
- Opens up if $a > 0$, opens down if $a < 0$
- Slope of right branch is $a$, left branch is $-a$

### SAT Graph Reading

When the SAT shows a piecewise graph, read each segment separately. Check:
- What's the y-value at specific x-values?
- Are the endpoints open circles (excluded) or closed circles (included)?`
    },
    {
      id: 'fn4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Piecewise Functions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = |x - 3| + 2$, what is $f(1)$?',
            options: ['$4$', '$2$', '$0$', '$6$'],
            correctAnswer: 0,
            explanation: '$f(1) = |1 - 3| + 2 = |-2| + 2 = 2 + 2 = 4$.'
          },
          {
            question: 'For $g(x) = \\begin{cases} 2x + 1 & x < 3 \\\\ x^2 - 2 & x \\geq 3 \\end{cases}$, what is $g(3)$?',
            options: ['$7$', '$6$', '$9$', '$5$'],
            correctAnswer: 0,
            explanation: 'Since $3 \\geq 3$, use the second rule: $g(3) = 3^2 - 2 = 7$.'
          },
          {
            question: 'The graph of $y = -|x + 1| + 5$ has its vertex at:',
            options: ['$(-1, 5)$', '$(1, 5)$', '$(-1, -5)$', '$(1, -5)$'],
            correctAnswer: 0,
            explanation: 'Form $y = a|x - h| + k$: here $h = -1$, $k = 5$, $a = -1$. Vertex at $(-1, 5)$, opening downward.'
          }
        ]
      }
    },
    {
      id: 'fn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Piecewise functions: check which condition $x$ satisfies, then use that rule
- Absolute value makes a V-shape with vertex at $(h, k)$
- Open circle = point not included; closed circle = point included
- Check boundary values carefully — which piece applies at the boundary?`
    }
  ]
};
