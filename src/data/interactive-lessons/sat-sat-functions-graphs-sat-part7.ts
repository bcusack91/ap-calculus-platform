export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn7-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 7 of 7 — Review & SAT-Level Mixed Practice**

### Functions Cheat Sheet

| Concept | Key Idea |
|---------|----------|
| $f(a)$ | Substitute $a$ into the function |
| $f(x) = k$ | Solve for $x$ (or find where $y = k$ on graph) |
| $f(g(x))$ | Evaluate inside out |
| $f^{-1}(x)$ | Swap $x/y$, solve for $y$ |
| Domain | All valid inputs |
| Range | All possible outputs |
| Increasing | $f$ goes up as $x$ moves right |
| Even | $f(-x) = f(x)$, y-axis symmetry |
| Odd | $f(-x) = -f(x)$, origin symmetry |

### SAT Strategies for Function Questions

1. **Use the answer choices** — if asked for a function and given formulas, test with a value
2. **Read graphs carefully** — pay attention to open vs. closed circles
3. **Don't confuse $f(a) = b$ with $f(b) = a$** — this is the inverse trap
4. **For word problems**: identify what variable is the input and what is the output`
    },
    {
      id: 'fn7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + 1$ and $g(x) = f(f(x))$, what is $g(3)$?',
            options: ['$15$', '$13$', '$9$', '$7$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7$. Then $g(3) = f(f(3)) = f(7) = 2(7) + 1 = 15$.'
          },
          {
            question: 'The function $h(x) = 3|x - 2| - 6$ has its minimum value at:',
            options: ['$-6$', '$2$', '$0$', '$-2$'],
            correctAnswer: 0,
            explanation: 'The vertex of $y = a|x-h| + k$ is at $(h, k)$. Here, vertex is $(2, -6)$. Since $a = 3 > 0$, the function opens up and the minimum value is $-6$.'
          },
          {
            question: 'If $f(x) = \\frac{2x + 3}{x - 1}$, which value is NOT in the domain of $f$?',
            options: ['$1$', '$-3/2$', '$0$', '$-1$'],
            correctAnswer: 0,
            explanation: 'The denominator $x - 1 = 0$ when $x = 1$. So $x = 1$ is not in the domain.'
          }
        ]
      }
    },
    {
      id: 'fn7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Master function notation: $f(x)$ is the output for input $x$
- Composition: always evaluate innermost function first
- Transformations: inside = horizontal (opposite direction), outside = vertical (same direction)
- Domain restrictions come from denominators = 0 and even roots of negatives
- On the SAT, graph reading and function notation are equally important`
    }
  ]
};
