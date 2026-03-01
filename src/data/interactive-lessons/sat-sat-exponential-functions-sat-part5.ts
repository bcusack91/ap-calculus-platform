export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef5-intro',
      type: 'text' as const,
      content: `
# 🔄 Transformations of Exponential Functions

**Part 5 of 7 — Shifts, Reflections, Asymptotes, SAT Graph Reading**

Starting from the parent function $f(x) = b^x$, transformations work just like they do for any function:

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Vertical shift up $k$ | $f(x) = b^x + k$ | Asymptote moves to $y = k$ |
| Vertical shift down $k$ | $f(x) = b^x - k$ | Asymptote moves to $y = -k$ |
| Horizontal shift left $h$ | $f(x) = b^{(x+h)}$ | Graph moves left $h$ units |
| Horizontal shift right $h$ | $f(x) = b^{(x-h)}$ | Graph moves right $h$ units |
| Vertical stretch by $a$ | $f(x) = a \\cdot b^x$ | Steeper curve, $y$-intercept at $a$ |
| Reflection over $x$-axis | $f(x) = -b^x$ | Flips upside down |
| Reflection over $y$-axis | $f(x) = b^{-x}$ | Growth ↔ decay swap |

**Key point:** The horizontal asymptote of $f(x) = a \\cdot b^{(x-h)} + k$ is always $y = k$.
      `
    },
    {
      id: 'sat-ef5-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Vertical shift:**
$f(x) = 2^x + 3$

- Parent: $y = 2^x$ has asymptote $y = 0$.
- The $+3$ shifts everything **up** 3 units.
- New asymptote: $y = 3$.
- $f(0) = 2^0 + 3 = 1 + 3 = 4$.

**Example 2 — Horizontal shift:**
$g(x) = 3^{(x-2)}$

- The graph of $3^x$ shifted **right** 2 units.
- Asymptote stays at $y = 0$ (no vertical shift).
- $g(2) = 3^0 = 1$ (the "anchor point" moved from $x=0$ to $x=2$).

**Example 3 — Reflection over the $y$-axis:**
$h(x) = 2^{-x}$

- This is the same as $h(x) = (1/2)^x$.
- Growth becomes decay (and vice versa).

**Example 4 — Combined:**
$p(x) = -5 \\cdot 2^{(x+1)} + 10$

- Shifted left 1, vertically stretched by 5, reflected over $x$-axis, shifted up 10.
- Asymptote: $y = 10$.
- $p(0) = -5 \\cdot 2^1 + 10 = -10 + 10 = 0$.
      `
    },
    {
      id: 'sat-ef5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Transformations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the horizontal asymptote of $f(x) = 4 \\cdot 3^x - 7$?',
            options: ['$y = 4$', '$y = 3$', '$y = -7$', '$y = 0$'],
            correctAnswer: 2,
            explanation: 'The form is $a \\cdot b^x + k$ where $k = -7$. The horizontal asymptote is $y = k = -7$.'
          },
          {
            question: 'The graph of $g(x) = 2^{(x-3)} + 1$ passes through which of these points?',
            options: ['$(0, 2)$', '$(3, 2)$', '$(1, 3)$', '$(3, 1)$'],
            correctAnswer: 1,
            explanation: '$g(3) = 2^{(3-3)} + 1 = 2^0 + 1 = 1 + 1 = 2$. So the point $(3, 2)$ is on the graph.'
          }
        ]
      }
    },
    {
      id: 'sat-ef5-asymptotes',
      type: 'text' as const,
      content: `
## Asymptotes & End Behavior

For $f(x) = a \\cdot b^{(x-h)} + k$:

**If $b > 1$ and $a > 0$:**
- As $x \\to \\infty$: $f(x) \\to \\infty$ (rises steeply)
- As $x \\to -\\infty$: $f(x) \\to k$ (approaches asymptote from above)

**If $b > 1$ and $a < 0$:**
- As $x \\to \\infty$: $f(x) \\to -\\infty$ (falls steeply)
- As $x \\to -\\infty$: $f(x) \\to k$ (approaches asymptote from below)

**Finding the asymptote from a graph:**
1. Look at which horizontal line the curve approaches but never crosses.
2. That line is $y = k$.

**SAT Tip:** If a graph levels off at $y = 5$ as $x$ goes to the left, the asymptote is $y = 5$, and the function likely has $+5$ at the end.

---

**Finding the $y$-intercept:**

Set $x = 0$: $f(0) = a \\cdot b^{(0-h)} + k = a \\cdot b^{-h} + k$.

This is useful for matching a graph to an equation on the SAT.
      `
    },
    {
      id: 'sat-ef5-input1',
      type: 'input-boxes' as const,
      content: `
**Evaluating Transformed Exponentials** 🧮

1) $f(x) = 3 \\cdot 2^x - 5$. What is $f(3)$?
2) $g(x) = 2^{(x-1)} + 4$. What is $g(1)$?
3) What is the horizontal asymptote of $h(x) = 7 \\cdot 5^x + 12$? (Write just the number.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '5', '12'],
        hint1: '$f(3) = 3 \\cdot 2^3 - 5 = 3 \\cdot 8 - 5$.',
        hint2: '$g(1) = 2^{(1-1)} + 4 = 2^0 + 4$.',
        hint3: 'The asymptote is $y = k$ where $k$ is the constant added at the end.',
        explanation: '1) $3(8) - 5 = 24 - 5 = 19$. 2) $1 + 4 = 5$. 3) Asymptote is $y = 12$.'
      }
    },
    {
      id: 'sat-ef5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Transformation Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = 2^{(x+4)}$ is the graph of $2^x$ shifted …',
            options: ['right 4', 'left 4', 'up 4', 'down 4']
          },
          {
            label: '$f(x) = 2^{-x}$ converts growth into …',
            options: ['faster growth', 'decay', 'linear decrease', 'no change']
          },
          {
            label: 'If the asymptote of an exponential function is $y = -3$, the function includes …',
            options: ['$+ 3$', '$- 3$', '$\\cdot 3$', '$/ 3$']
          }
        ],
        correctAnswers: ['left 4', 'decay', '$- 3$'],
        hint1: '$x + 4 = x - (-4)$, so $h = -4$ → left 4 units.',
        hint2: 'Reflecting over the $y$-axis swaps growth and decay.',
        hint3: 'The asymptote $y = k$ means there is a $+ k$ term at the end.',
        explanation: 'The shift is left 4. Replacing $x$ with $-x$ converts growth to decay. Asymptote $y = -3$ means the constant term is $-3$.'
      }
    },
    {
      id: 'sat-ef5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = 500 \\cdot (0.8)^x + 20$ models the temperature of a cooling object. What temperature does the object approach over time?',
            options: ['$500°$', '$20°$', '$0°$', '$520°$'],
            correctAnswer: 1,
            explanation: 'As $x \\to \\infty$, $(0.8)^x \\to 0$, so $f(x) \\to 500(0) + 20 = 20$. The asymptote — and the temperature approached — is $20°$.'
          },
          {
            question: 'The graph of an exponential function passes through $(0, 6)$ and has a horizontal asymptote at $y = 2$. Which could be its equation?',
            options: ['$f(x) = 6 \\cdot 3^x$', '$f(x) = 4 \\cdot 3^x + 2$', '$f(x) = 2 \\cdot 3^x + 6$', '$f(x) = 3^x + 2$'],
            correctAnswer: 1,
            explanation: 'Asymptote $y = 2$ means the equation ends with $+ 2$. Check $f(0)$: $4 \\cdot 3^0 + 2 = 4 + 2 = 6$ ✓. Option D gives $f(0) = 1 + 2 = 3$ ✗.'
          }
        ]
      }
    }
  ]
};
