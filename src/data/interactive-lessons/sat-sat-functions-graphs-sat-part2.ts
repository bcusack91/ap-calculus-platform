export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn2-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 2 of 7 — Composite and Inverse Functions**

### Composition: $f(g(x))$

"Evaluate inside out" — first compute $g(x)$, then plug the result into $f$.

**Example:** $f(x) = x^2$ and $g(x) = x + 3$

$f(g(2)) = f(5) = 25$

$g(f(2)) = g(4) = 7$ — order matters!

### Inverse Functions: $f^{-1}(x)$

If $f(a) = b$, then $f^{-1}(b) = a$. Inverses "undo" each function.

**To find $f^{-1}(x)$:**
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$

**Example:** $f(x) = 2x + 3$
- $y = 2x + 3$
- Swap: $x = 2y + 3$
- Solve: $y = (x - 3)/2$
- $f^{-1}(x) = \\frac{x - 3}{2}$

### Graph of Inverse

The graph of $f^{-1}$ is the **reflection** of $f$ across the line $y = x$.`
    },
    {
      id: 'fn2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Composition & Inverses** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 3x - 1$ and $g(x) = x^2$, what is $f(g(3))$?',
            options: ['$26$', '$64$', '$8$', '$24$'],
            correctAnswer: 0,
            explanation: 'Inside out: $g(3) = 9$, then $f(9) = 3(9) - 1 = 26$.'
          },
          {
            question: 'What is $f^{-1}(x)$ if $f(x) = 4x - 8$?',
            options: ['$\\frac{x + 8}{4}$', '$\\frac{x - 8}{4}$', '$4x + 8$', '$\\frac{1}{4x - 8}$'],
            correctAnswer: 0,
            explanation: '$y = 4x - 8$ → swap: $x = 4y - 8$ → $4y = x + 8$ → $y = (x+8)/4$.'
          },
          {
            question: 'If $f(5) = 12$, then $f^{-1}(12) = $',
            options: ['$5$', '$12$', '$1/12$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'By definition of inverse: if $f(5) = 12$, then $f^{-1}(12) = 5$. The inverse swaps input and output.'
          }
        ]
      }
    },
    {
      id: 'fn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Composition: evaluate inside out — $f(g(x))$ ≠ $g(f(x))$ in general
- Inverse: swap $x$ and $y$, then solve for $y$
- If $f(a) = b$, then $f^{-1}(b) = a$
- The graph of $f^{-1}$ is the reflection of $f$ over $y = x$`
    }
  ]
};
