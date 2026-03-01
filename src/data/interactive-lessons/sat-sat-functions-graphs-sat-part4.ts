export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn4-intro',
      type: 'text' as const,
      content: `
# 🔗 Composition & Inverses

**Part 4 of 7 — $f(g(x))$, Finding $f^{-1}(x)$, Graphical Relationship**

**Composition** means plugging one function into another. **Inverse** means undoing a function.

**Composition notation:**
- $(f \\circ g)(x) = f(g(x))$ — "f of g of x"
- Read right to left: first apply $g$, then apply $f$

**Inverse notation:**
- $f^{-1}(x)$ — "f inverse of x"
- If $f(a) = b$, then $f^{-1}(b) = a$
- $f^{-1}$ undoes what $f$ does

| Concept | Think of it as… |
|---------|----------------|
| $f(g(x))$ | A two-step machine: $g$ feeds into $f$ |
| $f^{-1}(x)$ | Running the machine backwards |
| $f(f^{-1}(x))$ | Always equals $x$ |
      `
    },
    {
      id: 'sat-fn4-comp',
      type: 'text' as const,
      content: `
## Composition — Worked Examples

**Example 1:** If $f(x) = 2x + 3$ and $g(x) = x^2$, find $f(g(x))$.

Replace $x$ in $f$ with $g(x) = x^2$:

$$f(g(x)) = 2(x^2) + 3 = 2x^2 + 3$$

---

**Example 2:** Same functions, find $g(f(x))$.

Replace $x$ in $g$ with $f(x) = 2x + 3$:

$$g(f(x)) = (2x + 3)^2 = 4x^2 + 12x + 9$$

**Key insight:** $f(g(x)) \\neq g(f(x))$ in general! Composition is **not** commutative.

---

**Example 3 (numerical):** If $f(x) = x - 1$ and $g(x) = 3x$, find $f(g(4))$.

- Inner first: $g(4) = 3(4) = 12$
- Then outer: $f(12) = 12 - 1 = 11$

**SAT Tip:** Always work from the inside out.
      `
    },
    {
      id: 'sat-fn4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Composition Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x + 4$ and $g(x) = 2x - 1$, what is $f(g(3))$?',
            options: ['$8$', '$9$', '$10$', '$13$'],
            correctAnswer: 1,
            explanation: '$g(3) = 2(3) - 1 = 5$. Then $f(5) = 5 + 4 = 9$.'
          },
          {
            question: 'If $h(x) = x^2$ and $k(x) = x + 3$, what is $h(k(x))$?',
            options: ['$x^2 + 3$', '$x^2 + 9$', '$(x + 3)^2$', '$x^2 + 6x + 3$'],
            correctAnswer: 2,
            explanation: '$h(k(x)) = h(x + 3) = (x + 3)^2$. Note this expands to $x^2 + 6x + 9$, but the un-expanded form $(x+3)^2$ is also correct.'
          }
        ]
      }
    },
    {
      id: 'sat-fn4-inverse',
      type: 'text' as const,
      content: `
## Finding Inverses

**Algebraic method to find $f^{-1}(x)$:**

1. Write $y = f(x)$
2. Swap $x$ and $y$
3. Solve for $y$

**Example 1:** Find the inverse of $f(x) = 3x - 6$.

- Write: $y = 3x - 6$
- Swap: $x = 3y - 6$
- Solve: $x + 6 = 3y \\implies y = \\frac{x + 6}{3}$

$$f^{-1}(x) = \\frac{x + 6}{3}$$

**Verify:** $f(f^{-1}(x)) = 3 \\cdot \\frac{x+6}{3} - 6 = x + 6 - 6 = x$ ✓

---

**Example 2:** Find the inverse of $f(x) = \\frac{2x + 1}{5}$.

- Swap: $x = \\frac{2y + 1}{5}$
- Solve: $5x = 2y + 1 \\implies 2y = 5x - 1 \\implies y = \\frac{5x - 1}{2}$

$$f^{-1}(x) = \\frac{5x - 1}{2}$$

**Graphical relationship:** The graphs of $f$ and $f^{-1}$ are reflections of each other over the line $y = x$.
      `
    },
    {
      id: 'sat-fn4-input',
      type: 'input-boxes' as const,
      content: `
**Inverses & Composition** 🧮

Let $f(x) = 4x + 2$ and $g(x) = \\frac{x - 2}{4}$.

1) What is $f(g(10))$?
2) What is $g(f(10))$?
3) Based on your answers, $g$ is the ______ of $f$. (Enter "inverse")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '10', 'inverse'],
        hint1: '$g(10) = \\frac{10 - 2}{4} = 2$. Then $f(2) = ?$.',
        hint2: '$f(10) = 4(10) + 2 = 42$. Then $g(42) = ?$.',
        hint3: 'If $f(g(x)) = x$ and $g(f(x)) = x$, then $g = f^{-1}$.',
        explanation: '$f(g(10)) = f(2) = 10$. $g(f(10)) = g(42) = 10$. Both compositions return the input, so $g = f^{-1}$.'
      }
    },
    {
      id: 'sat-fn4-table',
      type: 'text' as const,
      content: `
## Inverses from Tables

If you have a table for $f$, you can build the inverse by swapping inputs and outputs:

| $x$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|
| $f(x)$ | $5$ | $8$ | $11$ | $14$ |

The inverse table:

| $x$ | $5$ | $8$ | $11$ | $14$ |
|-----|-----|-----|------|------|
| $f^{-1}(x)$ | $1$ | $2$ | $3$ | $4$ |

So $f^{-1}(8) = 2$ because $f(2) = 8$.

**SAT Tip:** To evaluate $f^{-1}(k)$, search the $f(x)$ row for $k$, then read the corresponding $x$-value.
      `
    },
    {
      id: 'sat-fn4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 5x - 10$, what is $f^{-1}(15)$?',
            options: ['$3$', '$5$', '$65$', '$1$'],
            correctAnswer: 1,
            explanation: '$f^{-1}(x) = \\frac{x + 10}{5}$. So $f^{-1}(15) = \\frac{15 + 10}{5} = \\frac{25}{5} = 5$. Or solve: $5x - 10 = 15 \\implies 5x = 25 \\implies x = 5$.'
          },
          {
            question: 'If $f(3) = 7$ and $g(7) = 3$, which must be true?',
            options: ['$g = f$', '$g = f^{-1}$', '$f(g(3)) = 7$', 'Not enough information'],
            correctAnswer: 3,
            explanation: 'We only know one point for each function. $g(7) = 3$ and $f(3) = 7$ is consistent with $g = f^{-1}$, but we can\'t confirm it from a single point. We need $g(f(x)) = x$ for all $x$.'
          }
        ]
      }
    }
  ]
};
