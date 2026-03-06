export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn6-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 6 of 7 — Even/Odd Functions and Symmetry**

### Even Functions: $f(-x) = f(x)$

- Symmetric about the **y-axis**
- Examples: $x^2$, $|x|$, $\\cos(x)$
- If $(3, 5)$ is on the graph, then $(-3, 5)$ is too

### Odd Functions: $f(-x) = -f(x)$

- Symmetric about the **origin** (180° rotation)
- Examples: $x^3$, $x$, $\\sin(x)$
- If $(3, 5)$ is on the graph, then $(-3, -5)$ is too

### Testing Algebraically

For $f(x) = x^4 - 3x^2$:
$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)$ → **even**

For $g(x) = x^3 + x$:
$g(-x) = -x^3 - x = -(x^3 + x) = -g(x)$ → **odd**

### Neither Even nor Odd

$h(x) = x^2 + x$: $h(-x) = x^2 - x \\neq h(x)$ and $\\neq -h(x)$ → **neither**

### SAT Connection

Symmetry questions often appear as: "If the graph of $f$ is symmetric about the y-axis and $f(3) = 7$, what is $f(-3)$?" Answer: $f(-3) = 7$.`
    },
    {
      id: 'fn6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Symmetry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which function is odd?',
            options: ['$f(x) = x^3 - x$', '$f(x) = x^2 + 1$', '$f(x) = |x|$', '$f(x) = x^4$'],
            correctAnswer: 0,
            explanation: '$f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$ → odd. The others are all even.'
          },
          {
            question: 'If $f$ is an even function and $f(2) = -5$, what is $f(-2) + f(2)$?',
            options: ['$-10$', '$0$', '$10$', '$-5$'],
            correctAnswer: 0,
            explanation: 'Even: $f(-2) = f(2) = -5$. So $f(-2) + f(2) = -5 + (-5) = -10$.'
          },
          {
            question: 'If $g$ is an odd function and $g(4) = 3$, what is $g(-4)$?',
            options: ['$-3$', '$3$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Odd: $g(-4) = -g(4) = -3$.'
          }
        ]
      }
    },
    {
      id: 'fn6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **Even**: $f(-x) = f(x)$ → symmetric about y-axis
- **Odd**: $f(-x) = -f(x)$ → symmetric about origin
- Not all functions are even or odd — most are neither
- To test: substitute $-x$ and compare to $f(x)$ and $-f(x)$`
    }
  ]
};
