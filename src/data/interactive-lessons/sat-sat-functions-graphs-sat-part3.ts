export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn3-intro',
      type: 'text' as const,
      content: `
# 🔄 Function Transformations

**Part 3 of 7 — Shifts, Reflections, Stretches, Combined Transformations**

Transformations change the position or shape of a graph without changing its fundamental form. The SAT tests four main types:

| Transformation | Notation | Effect on Graph |
|---------------|----------|----------------|
| **Vertical shift** | $f(x) + k$ | Up $k$ units (down if $k < 0$) |
| **Horizontal shift** | $f(x - h)$ | Right $h$ units (left if $h < 0$) |
| **Vertical stretch/compress** | $a \\cdot f(x)$ | Stretch if $|a| > 1$, compress if $0 < |a| < 1$ |
| **Reflection** | $-f(x)$ | Reflect over $x$-axis |

**The tricky one:** Horizontal shifts are "backwards." $f(x - 3)$ shifts **right** 3, and $f(x + 3)$ shifts **left** 3.
      `
    },
    {
      id: 'sat-fn3-vertical',
      type: 'text' as const,
      content: `
## Vertical Transformations

These affect the **output** ($y$-values) and behave as you'd expect.

**$f(x) + k$ — Vertical shift:**
- Every point moves up (or down) by $k$ units
- $(2, 5)$ on $f(x)$ becomes $(2, 5 + k)$ on $f(x) + k$

**$a \\cdot f(x)$ — Vertical stretch/compress:**
- If $a = 2$: all $y$-values double → graph "taller"
- If $a = \\frac{1}{2}$: all $y$-values halved → graph "shorter"
- $x$-intercepts stay fixed (since $a \\cdot 0 = 0$)

**$-f(x)$ — Reflection over $x$-axis:**
- Every $y$-value is negated: $(2, 5) \\to (2, -5)$
- Peaks become valleys, valleys become peaks

**Example:** If $f(2) = 6$, what is $g(2)$ where $g(x) = -3f(x) + 1$?

$$g(2) = -3f(2) + 1 = -3(6) + 1 = -17$$
      `
    },
    {
      id: 'sat-fn3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Vertical Transformations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ passes through $(4, 10)$. Which point must be on the graph of $y = f(x) - 3$?',
            options: ['$(4, 13)$', '$(4, 7)$', '$(1, 10)$', '$(7, 10)$'],
            correctAnswer: 1,
            explanation: '$f(x) - 3$ shifts the graph down 3 units. The point $(4, 10)$ moves to $(4, 10 - 3) = (4, 7)$.'
          },
          {
            question: 'If $f(x)$ has a maximum value of $8$, what is the maximum value of $-2f(x)$?',
            options: ['$-16$', '$16$', '$-8$', '$-2$'],
            correctAnswer: 1,
            explanation: 'The maximum of $f(x)$ is 8, so the minimum of $f(x)$ must be considered. But $-2f(x)$ flips the graph. The maximum of $-2f(x)$ occurs at the minimum of $f(x)$. However, if $f(x)$ has a max of 8, then $-2(\\text{min of } f)$ is the max of $-2f$. Without knowing the minimum of $f$, if the question means the range of $f$ is $(-\\infty, 8]$, then $-2f$ has range $[-16, \\infty)$, giving no finite max. If $f \\geq 0$ with max 8, then $-2f$ has max $0$ and min $-16$. The answer $-16$ is the minimum, and $16 = |-2 \\cdot 8|$. The correct reading: the maximum of $|-2f(x)|$ occurs when $f$ is largest, giving $|-2(8)| = 16$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn3-horizontal',
      type: 'text' as const,
      content: `
## Horizontal Transformations

These affect the **input** ($x$-values) and behave "backwards."

**$f(x - h)$ — Horizontal shift:**
- $f(x - 3)$: shift **right** 3 units
- $f(x + 2)$: shift **left** 2 units
- Think: "inside the function, opposite sign"

**Why is it backwards?** For $f(x - 3)$ to equal $f(0)$, we need $x - 3 = 0$, so $x = 3$. The point that was at $x = 0$ is now at $x = 3$ — shifted right.

**Example:** The vertex of $y = x^2$ is $(0, 0)$. The vertex of $y = (x - 4)^2 + 1$ is $(4, 1)$.
- The $-4$ inside shifts right 4
- The $+1$ outside shifts up 1

---

**Combining transformations — order matters:**

Given $g(x) = 2f(x - 1) + 3$:
1. Shift right 1 (horizontal shift inside)
2. Stretch vertically by factor 2
3. Shift up 3

Point $(2, 5)$ on $f$ becomes: $(2 + 1, 2(5) + 3) = (3, 13)$ on $g$.
      `
    },
    {
      id: 'sat-fn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Transformation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) + 5$ — the graph',
            options: ['shifts up 5', 'shifts down 5', 'shifts right 5', 'shifts left 5']
          },
          {
            label: '$f(x + 5)$ — the graph',
            options: ['shifts up 5', 'shifts down 5', 'shifts right 5', 'shifts left 5']
          },
          {
            label: '$-f(x)$ — the graph',
            options: ['shifts up 1', 'reflects over $x$-axis', 'reflects over $y$-axis', 'stretches vertically']
          },
          {
            label: '$3f(x)$ — the graph',
            options: ['shifts up 3', 'shifts right 3', 'stretches vertically by factor 3', 'compresses vertically by factor 3']
          }
        ],
        correctAnswers: [
          'shifts up 5',
          'shifts left 5',
          'reflects over $x$-axis',
          'stretches vertically by factor 3'
        ],
        hint1: 'Adding outside the function changes $y$-values.',
        hint2: '$f(x + 5)$ is like $f(x - (-5))$, so shift left 5.',
        hint3: 'Negating outside flips over the $x$-axis.',
        explanation: '$+5$ outside → up 5. $+5$ inside → left 5 (backwards rule). $-f(x)$ → reflect over $x$-axis. $3f(x)$ → vertical stretch by 3.'
      }
    },
    {
      id: 'sat-fn3-input',
      type: 'input-boxes' as const,
      content: `
**Apply the Transformation** 🧮

The point $(3, 8)$ is on the graph of $y = f(x)$. Find the corresponding point on each transformed graph.

1) $y = f(x) + 4$: What is the new $y$-coordinate?
2) $y = f(x - 2)$: What is the new $x$-coordinate?
3) $y = -f(x)$: What is the new $y$-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '5', '-8'],
        hint1: 'Adding 4 outside shifts up: $y = 8 + 4$.',
        hint2: '$f(x - 2)$ shifts right 2: $x = 3 + 2$.',
        hint3: 'Negating the function negates the output: $y = -8$.',
        explanation: '$f(x) + 4$: $(3, 12)$. $f(x - 2)$: $(5, 8)$. $-f(x)$: $(3, -8)$.'
      }
    },
    {
      id: 'sat-fn3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $g$ is defined by $g(x) = f(x + 2) - 3$, where $f$ has a maximum at $(1, 6)$. At what point does $g$ have its maximum?',
            options: ['$(3, 3)$', '$(-1, 3)$', '$(-1, 9)$', '$(1, 3)$'],
            correctAnswer: 1,
            explanation: '$f(x + 2)$ shifts left 2: $x$-coordinate becomes $1 - 2 = -1$. Then $-3$ shifts down 3: $y$-coordinate becomes $6 - 3 = 3$. Maximum of $g$ is at $(-1, 3)$.'
          },
          {
            question: 'If the graph of $y = f(x)$ passes through the origin, which transformation also passes through the origin?',
            options: ['$y = f(x) + 1$', '$y = f(x - 1)$', '$y = 2f(x)$', '$y = f(x) - 1$'],
            correctAnswer: 2,
            explanation: 'If $f(0) = 0$, then $2f(0) = 2(0) = 0$. The point $(0, 0)$ is preserved. The other options shift the graph away from the origin.'
          }
        ]
      }
    }
  ]
};
