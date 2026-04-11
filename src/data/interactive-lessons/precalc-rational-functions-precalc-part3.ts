export const precalcRationalPart3Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🕳️ Holes & Removable Discontinuities

**Part 3 of 7 — When Factors Cancel**

Not every denominator zero produces a vertical asymptote. When numerator and denominator share a common factor, canceling it creates a **hole** — a single missing point where the function is undefined but the graph has no dramatic blow-up.
      `
    },
    {
      id: 'p3-holes-explained',
      type: 'text' as const,
      content: `
## 📖 Holes vs. Vertical Asymptotes

When $q(c) = 0$, there are two possibilities:

| Situation | $(x - c)$ cancels? | Result | Graph Behavior |
|:----------|:-------------------:|:------:|:---------------|
| Factor is in denominator only | ❌ No | **Vertical Asymptote** | Graph shoots to $\\pm\\infty$ |
| Factor is in both numerator and denominator | ✅ Yes | **Hole** | Single missing point (open circle) |

### The Key Principle

$$\\boxed{\\frac{(x - c) \\cdot g(x)}{(x - c) \\cdot h(x)} = \\frac{g(x)}{h(x)}, \\quad x \\neq c}$$

Canceling removes the factor from the expression, but the restriction $x \\neq c$ remains. The function is still undefined at $x = c$.
      `
    },
    {
      id: 'p3-finding-holes',
      type: 'text' as const,
      content: `
## 🔑 Finding Hole Coordinates

A hole is a **point**, not just an $x$-value. To find the full coordinates:

| Step | Action | Example: $f(x) = \\frac{x^2 - 4}{x - 2}$ |
|:----:|--------|-------------------------------------------|
| 1 | Factor completely | $\\frac{(x-2)(x+2)}{x-2}$ |
| 2 | Identify common factors | $(x - 2)$ appears in both |
| 3 | Cancel and note restriction | $f(x) = x + 2, \\quad x \\neq 2$ |
| 4 | Evaluate simplified form at $x = c$ | $f(2) = 2 + 2 = 4$ |
| 5 | Write hole coordinates | **Hole at $(2, 4)$** |

---

### Worked Example with Multiple Features

> **Analyze $f(x) = \\frac{x^2 - x - 6}{x^2 - 9}$ completely.**

**Factor:** $\\frac{(x-3)(x+2)}{(x-3)(x+3)}$

**Common factor:** $(x - 3)$ → **hole at $x = 3$**

**After canceling:** $f(x) = \\frac{x+2}{x+3}, \\quad x \\neq 3$

**Hole coordinates:** $f(3) = \\frac{3+2}{3+3} = \\frac{5}{6}$ → Hole at $\\left(3, \\frac{5}{6}\\right)$

**Remaining denominator:** $x + 3 = 0$ → **VA at $x = -3$**

**HA:** $\\deg(p) = \\deg(q) = 1$ → $y = \\frac{1}{1} = 1$

> 💡 One function can have BOTH holes and vertical asymptotes — they come from different factors.
      `
    },
    {
      id: 'p3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Holes Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\frac{x^2 - 1}{x + 1}$, what occurs at $x = -1$?',
            options: [
              'Vertical asymptote',
              'Hole at $(-1, -2)$',
              'Hole at $(-1, 0)$',
              'Nothing special — $f(-1)$ is defined'
            ],
            correctAnswer: 1,
            explanation: '$x^2 - 1 = (x-1)(x+1)$. The $(x+1)$ cancels: $f(x) = x - 1$ for $x \\neq -1$. At $x = -1$: $f(-1) = -1 - 1 = -2$. Hole at $(-1, -2)$.'
          },
          {
            question: 'After canceling common factors in $\\frac{(x-2)(x+4)}{(x-2)(x-5)}$, which features remain?',
            options: [
              'Hole at $x = 2$, VA at $x = 5$',
              'VAs at $x = 2$ and $x = 5$',
              'Hole at $x = 2$, hole at $x = 5$',
              'Hole at $x = 5$, VA at $x = 2$'
            ],
            correctAnswer: 0,
            explanation: '$(x-2)$ cancels → hole at $x = 2$. $(x-5)$ remains in denominator and doesn\'t cancel → VA at $x = 5$.'
          },
          {
            question: 'What is the $y$-coordinate of the hole in $f(x) = \\frac{x^2 + 3x}{x}$?',
            options: [
              '$0$',
              '$3$',
              'Undefined',
              '$1$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{x^2 + 3x}{x} = \\frac{x(x+3)}{x} = x + 3$ for $x \\neq 0$. At $x = 0$: $f(0) = 0 + 3 = 3$. Hole at $(0, 3)$.'
          }
        ]
      }
    },
    {
      id: 'p3-input-drill',
      type: 'input-boxes' as const,
      content: `
**Hole Coordinates Drill** 🧮

**1)** For $f(x) = \\frac{x^2 - 9}{x + 3}$, what is the $y$-coordinate of the hole? (e.g., $\\frac{x^2-4}{x-2} = x + 2$ for $x \\neq 2$, so the hole $y$-value is $2 + 2 = 4$)

**2)** How many holes does $g(x) = \\frac{(x-1)(x+2)}{(x-1)(x+2)(x-3)}$ have? (e.g., $\\frac{(x-1)}{(x-1)(x+4)}$ has $1$ hole at $x = 1$)

**3)** For $h(x) = \\frac{x^2 - 5x + 6}{x - 2}$, what is the $x$-intercept of the simplified function? (e.g., $\\frac{(x-1)(x-3)}{x-1} = x - 3$, so $x$-intercept is $3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-6', '2', '3'],
        hint1: 'Factor: $x^2 - 9 = (x-3)(x+3)$. Cancel $(x+3)$. Evaluate $x - 3$ at $x = -3$.',
        hint2: 'Both $(x-1)$ and $(x+2)$ cancel. That is two common factors → two holes.',
        hint3: 'Factor: $x^2 - 5x + 6 = (x-2)(x-3)$. Cancel $(x-2)$. Set $x - 3 = 0$.',
        explanation: '1) $f(x) = x - 3$ for $x \\neq -3$. $f(-3) = -6$. 2) Two factors cancel: holes at $x = 1$ and $x = -2$. 3) Simplified: $x - 3 = 0 \\Rightarrow x = 3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Holes vs. Asymptotes — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When a factor cancels between numerator and denominator, the result is a',
            options: ['vertical asymptote', 'horizontal asymptote', 'hole (removable discontinuity)', 'slant asymptote']
          },
          {
            label: 'After canceling, the value $x = c$ is still',
            options: ['in the domain', 'excluded from the domain', 'a zero of the function', 'an asymptote']
          },
          {
            label: 'To find the $y$-coordinate of a hole at $x = c$, evaluate the',
            options: ['original function at $x = c$', 'simplified function at $x = c$', 'derivative at $x = c$', 'denominator at $x = c$']
          },
          {
            label: 'On a graph, a hole appears as',
            options: ['a vertical line', 'a horizontal line', 'an open circle (missing point)', 'a sharp corner']
          }
        ],
        correctAnswers: ['hole (removable discontinuity)', 'excluded from the domain', 'simplified function at $x = c$', 'an open circle (missing point)'],
        hint1: 'Canceling a factor removes the blow-up but not the restriction.',
        hint2: 'The original function is still undefined at that point.',
        hint3: 'The original function gives $\\frac{0}{0}$ at the hole; use the simplified version instead.',
        explanation: 'Canceled factors create holes. The domain restriction remains. Use the simplified function to find the $y$-coordinate. Graphically, holes are open circles.'
      }
    },
    {
      id: 'p3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Holes & Removable Discontinuities** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\frac{x^3 - 8}{x - 2}$ has:',
            options: [
              'A vertical asymptote at $x = 2$',
              'A hole at $(2, 12)$',
              'A hole at $(2, 4)$',
              'No discontinuity — $f(2)$ is defined'
            ],
            correctAnswer: 1,
            explanation: '$x^3 - 8 = (x-2)(x^2 + 2x + 4)$ (difference of cubes). The $(x-2)$ cancels: $f(x) = x^2 + 2x + 4$ for $x \\neq 2$. At $x = 2$: $4 + 4 + 4 = 12$. Hole at $(2, 12)$.'
          },
          {
            question: 'Which function has exactly one hole and one vertical asymptote?',
            options: [
              '$\\frac{x}{x^2 - 4}$',
              '$\\frac{(x-1)^2}{(x-1)(x+3)}$',
              '$\\frac{x+2}{x^2 + 4}$',
              '$\\frac{(x-1)(x+1)}{(x-1)(x+1)}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{(x-1)^2}{(x-1)(x+3)}$: one $(x-1)$ cancels → hole at $x = 1$. The remaining denominator has $(x+3)$ → VA at $x = -3$. That is exactly one hole and one VA.'
          }
        ]
      }
    }
  ]
};
