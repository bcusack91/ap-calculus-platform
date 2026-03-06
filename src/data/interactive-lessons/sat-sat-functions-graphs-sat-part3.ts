export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn3-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 3 of 7 — Transformations of Functions**

### Vertical Transformations (Outside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift up $k$ | $f(x) + k$ | Graph moves up $k$ units |
| Shift down $k$ | $f(x) - k$ | Graph moves down $k$ units |
| Stretch by $a$ (if $a > 1$) | $af(x)$ | Graph gets taller |
| Compress by $a$ (if $0 < a < 1$) | $af(x)$ | Graph gets shorter |
| Reflect over x-axis | $-f(x)$ | Flip upside down |

### Horizontal Transformations (Inside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift right $h$ | $f(x - h)$ | Graph moves right |
| Shift left $h$ | $f(x + h)$ | Graph moves left |
| Stretch by $1/b$ | $f(bx)$ | Graph gets wider |
| Compress by $b$ | $f(bx)$ | Graph gets narrower |
| Reflect over y-axis | $f(-x)$ | Flip left-right |

### Key Insight ⚠️

Horizontal transformations are **opposite** to what you might expect:
- $f(x - 3)$ moves the graph **right**, not left
- $f(2x)$ makes the graph **narrower**, not wider`
    },
    {
      id: 'fn3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ is shifted 2 units left and 3 units up. The new equation is:',
            options: ['$y = f(x + 2) + 3$', '$y = f(x - 2) + 3$', '$y = f(x + 2) - 3$', '$y = f(x - 3) + 2$'],
            correctAnswer: 0,
            explanation: 'Left 2: replace $x$ with $x + 2$ → $f(x+2)$. Up 3: add 3 → $f(x+2) + 3$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = -(x-1)^2 + 4$, how is $g$ obtained from $f$?',
            options: ['Shift right 1, reflect over x-axis, shift up 4', 'Shift left 1, reflect over x-axis, shift up 4', 'Shift right 1, shift up 4, reflect over x-axis', 'Reflect over y-axis, shift right 1, shift up 4'],
            correctAnswer: 0,
            explanation: '$g(x) = -f(x-1) + 4$: $(x-1)$ shifts right 1, the negative reflects over x-axis, $+4$ shifts up 4.'
          },
          {
            question: 'The vertex of $y = x^2$ is at $(0,0)$. Where is the vertex of $y = 3(x+2)^2 - 5$?',
            options: ['$(-2, -5)$', '$(2, -5)$', '$(-2, 5)$', '$(2, 5)$'],
            correctAnswer: 0,
            explanation: '$(x+2)$ shifts left 2, $-5$ shifts down 5. The vertex moves from $(0,0)$ to $(-2, -5)$. The factor of 3 stretches vertically but doesn\'t move the vertex.'
          }
        ]
      }
    },
    {
      id: 'fn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Outside** the function ($+k$, $\\times a$, $-$): vertical changes, work as expected
- **Inside** the function ($x - h$, $bx$, $-x$): horizontal changes, opposite direction
- $f(x - h) + k$: shifts right $h$ and up $k$
- Vertical stretches don't move the vertex; they affect the shape`
    }
  ]
};
