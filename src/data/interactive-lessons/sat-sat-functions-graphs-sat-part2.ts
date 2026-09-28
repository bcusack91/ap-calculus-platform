export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn2-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 2 of 7 — Composition and Combining Functions**

### Composition: $f(g(x))$

"Evaluate inside out" — first compute $g(x)$, then plug the result into $f$.

**Example:** $f(x) = x^2$ and $g(x) = x + 3$

$f(g(2)) = f(5) = 25$

$g(f(2)) = g(4) = 7$ — order matters!

### Substituting an Expression: $f(x + 1)$, $f(2x)$

$f(\\text{anything})$ means "replace **every** $x$ in the rule with that anything, in parentheses."

- If $f(x) = 3x - 4$, then $f(2x) = 3(2x) - 4 = 6x - 4$
- $f(x + 1)$ is **not** the same as $f(x) + 1$: the first changes the input, the second changes the output

### Combining Functions

| Notation | Meaning |
|----------|---------|
| $f(x) + g(x)$ | Add the two outputs |
| $f(x) - g(x)$ | Subtract the outputs (distribute the minus sign) |
| $f(x) \\cdot g(x)$ | Multiply the outputs |

---

### Worked Example 1

**If $f(x) = x^2 - 3x$, find $f(x + 2)$.**

| Step | Work |
|------|------|
| Replace every $x$ with $(x + 2)$ | $(x + 2)^2 - 3(x + 2)$ |
| Expand the square | $x^2 + 4x + 4 - 3(x + 2)$ |
| Distribute the $-3$ | $x^2 + 4x + 4 - 3x - 6$ |
| Result | $f(x + 2) = x^2 + x - 2$ |

### Worked Example 2

**If $f(x) = x^2 + 1$ and $g(x) = 3x - 2$, find $f(g(x))$.**

| Step | Work |
|------|------|
| Start with $g(x)$ | $g(x) = 3x - 2$ |
| Plug into $f$ | $f(3x - 2) = (3x-2)^2 + 1$ |
| Expand | $= 9x^2 - 12x + 4 + 1$ |
| Simplify | $= 9x^2 - 12x + 5$ |`
    },
    {
      id: 'fn2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Composition & Combining Functions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 3x - 1$ and $g(x) = x^2$, what is $f(g(3))$?',
            options: ['$26$', '$64$', '$8$', '$24$'],
            correctAnswer: 0,
            explanation: 'Inside out: $g(3) = 9$, then $f(9) = 3(9) - 1 = 26$. Composing in the other order gives $g(f(3)) = g(8) = 64$.'
          },
          {
            question: 'If $f(x) = x^2 - 3x$, which expression is equivalent to $f(x + 1)$?',
            options: ['$x^2 - x - 2$', '$x^2 - 3x + 1$', '$x^2 - 3x - 2$', '$x^2 - x + 4$'],
            correctAnswer: 0,
            explanation: 'Replace every $x$ with $(x + 1)$: $(x + 1)^2 - 3(x + 1) = x^2 + 2x + 1 - 3x - 3 = x^2 - x - 2$. $x^2 - 3x + 1$ is $f(x) + 1$, which changes the output instead of the input, and $x^2 - 3x - 2$ comes from squaring $(x + 1)$ as $x^2 + 1$.'
          },
          {
            question: 'If $f(x) = x - 2$, $g(x) = 2x + 1$, and $h(x) = f(x) \\cdot g(x)$, what is $h(3)$?',
            options: ['$7$', '$8$', '$5$', '$3$'],
            correctAnswer: 0,
            explanation: '$f(3) = 1$ and $g(3) = 7$, so $h(3) = 1 \\cdot 7 = 7$. Adding the outputs gives 8, and composing gives $f(g(3)) = 5$ or $g(f(3)) = 3$.'
          }
        ]
      }
    },
    {
      id: 'fn2-text2',
      type: 'text' as const,
      content: `### Composition with Tables

The SAT frequently gives two tables and asks for a composition:

| $x$ | $f(x)$ |
|-----|--------|
| 1 | 3 |
| 2 | 5 |
| 3 | 1 |

| $x$ | $g(x)$ |
|-----|--------|
| 1 | 2 |
| 2 | 3 |
| 3 | 1 |

**Find $f(g(2))$:** $g(2) = 3$, then $f(3) = 1$. Answer: $1$.

**Find $g(f(1))$:** $f(1) = 3$, then $g(3) = 1$. Answer: $1$.

### Working a Composition Backward

Sometimes the SAT gives the value of a composition and asks for the input.

**Example:** $f(x) = 2x + 3$ and $g(x) = x^2$. If $f(g(k)) = 21$ and $k > 0$, find $k$.

| Step | Work |
|------|------|
| Peel off the outer function | $2 \\cdot g(k) + 3 = 21$, so $g(k) = 9$ |
| Solve the inner function | $k^2 = 9$, so $k = 3$ or $k = -3$ |
| Apply the condition $k > 0$ | $k = 3$ |`
    },
    {
      id: 'fn2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Harder Composition** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x + 2$ and $g(x) = x^2$, what is $g(f(x)) - f(g(x))$?',
            options: ['$2$', '$4x + 6$', '$2x + 2$', '$4x + 2$'],
            correctAnswer: 3,
            explanation: '$g(f(x)) = (x+2)^2 = x^2 + 4x + 4$ and $f(g(x)) = x^2 + 2$. Subtract: $(x^2 + 4x + 4) - (x^2 + 2) = 4x + 2$. Writing $(x+2)^2$ as $x^2 + 4$ (dropping the middle term) gives $2$; distributing the minus sign incorrectly gives $4x + 6$.'
          },
          {
            question: 'Let $f(x) = 2x + 1$ and $g(x) = x^2$. If $f(g(a)) = 19$ and $a > 0$, what is the value of $a$?',
            options: ['$3$', '$9$', '$18$', '$81$'],
            correctAnswer: 0,
            explanation: '$f(g(a)) = 2a^2 + 1 = 19$, so $a^2 = 9$ and, since $a > 0$, $a = 3$. Stopping at $g(a) = 9$ gives 9, and squaring 9 instead of taking its square root gives 81.'
          },
          {
            question: 'If $f(x) = 2x$ and $g(x) = x + 5$, what is $f(g(f(1)))$?',
            options: ['$14$', '$12$', '$7$', '$17$'],
            correctAnswer: 0,
            explanation: 'Work inside out: $f(1) = 2$, $g(2) = 7$, $f(7) = 14$.'
          }
        ]
      }
    },
    {
      id: 'fn2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Composition Order Matters!** 🔍\n\nGiven $f(x) = x + 1$ and $g(x) = 2x$, evaluate each.',
      exercise: {
        dropdowns: [
          { label: '$f(g(3))$', options: ['7', '8', '6', '4'] },
          { label: '$g(f(3))$', options: ['7', '8', '6', '4'] },
          { label: '$f(f(0))$', options: ['2', '1', '0', '3'] },
          { label: '$g(g(1))$', options: ['4', '2', '8', '6'] }
        ],
        correctAnswers: ['7', '8', '2', '4'],
        hint1: '$g(3) = 6$, then $f(6) = ?$',
        hint2: '$f(3) = 4$, then $g(4) = ?$',
        hint3: '$f(0) = 1$, then $f(1) = ?$',
        explanation: '$f(g(3)) = f(6) = 7$. $g(f(3)) = g(4) = 8$. $f(f(0)) = f(1) = 2$. $g(g(1)) = g(2) = 4$.'
      }
    },
    {
      id: 'fn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Rule |
|---------|----------|
| $f(g(x))$ | Evaluate inside out — order matters! |
| $f(x + 1)$ | Replace every $x$ with $(x + 1)$ |
| $f(x + 1)$ vs. $f(x) + 1$ | Changes the input vs. changes the output |
| $f(x) \\cdot g(x)$, $f(x) - g(x)$ | Combine the outputs; distribute any minus sign |
| Given $f(g(k))$ | Peel off the outer function first, then solve the inner one |
| Tables | Look up values step by step |`
    }
  ]
};
