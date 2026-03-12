export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn1-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 1 of 7 — Function Notation & Evaluation**

### What is a Function?

A function $f$ assigns exactly one output to each input. Written as $f(x) = \\text{expression}$.

- $f(3)$ means "plug in $x = 3$"
- $f(a + 1)$ means "replace every $x$ with $(a + 1)$"

**Example:** If $f(x) = 2x^2 - 3x + 1$:

$f(4) = 2(16) - 12 + 1 = 21$

$f(-1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$

### Domain & Range

- **Domain**: all valid input values (check for division by zero, square roots of negatives)
- **Range**: all possible output values

### SAT Function Notation Tricks

$f(x) = 3$ asks: "For what value(s) of $x$ does the output equal 3?" This means solving $f(x) = 3$, NOT evaluating $f(3)$.

On a graph: find where $y = 3$ intersects the curve.`
    },
    {
      id: 'fn1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Function Evaluation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 2x + 3$, what is $f(-2)$?',
            options: ['$11$', '$3$', '$7$', '$-1$'],
            correctAnswer: 0,
            explanation: '$f(-2) = (-2)^2 - 2(-2) + 3 = 4 + 4 + 3 = 11$. Careful with signs: $-2(-2) = +4$.'
          },
          {
            question: 'If $g(x) = 3x + 5$ and $g(a) = 20$, what is $a$?',
            options: ['$5$', '$15$', '$65$', '$20/3$'],
            correctAnswer: 0,
            explanation: '$3a + 5 = 20$ → $3a = 15$ → $a = 5$. When given $g(a) = k$, set the function equal to $k$ and solve.'
          },
          {
            question: 'What is the domain of $f(x) = \\frac{1}{x - 4}$?',
            options: ['All real numbers except $x = 4$', 'All real numbers except $x = -4$', 'All real numbers', '$x > 4$'],
            correctAnswer: 0,
            explanation: 'The denominator cannot be zero: $x - 4 \\neq 0$ → $x \\neq 4$.'
          }
        ]
      }
    },
    {
      id: 'fn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $f(a)$ = substitute $a$ for every $x$ in the function
- "$f(x) = k$" means **solve** for $x$, not evaluate at $k$
- Domain restrictions: denominators ≠ 0, expressions under even roots ≥ 0
- On graphs: $f(a) = b$ means the point $(a, b)$ is on the curve`
    }
  ]
};
