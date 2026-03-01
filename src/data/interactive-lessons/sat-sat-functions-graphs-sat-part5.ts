export const satFunctionsPart5Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn5-intro',
      type: 'text' as const,
      content: `
# 📊 Interpreting Graphs

**Part 5 of 7 — Zeros, Intercepts, Extrema, Increasing/Decreasing Intervals**

On the SAT, you'll frequently be given a graph and asked to read information from it. Knowing the vocabulary is half the battle.

| Term | Definition | On the Graph |
|------|-----------|-------------|
| **Zero / root** | $x$ where $f(x) = 0$ | Where the curve crosses the $x$-axis |
| **$y$-intercept** | Value of $f(0)$ | Where the curve crosses the $y$-axis |
| **Maximum** | Largest $y$-value | Highest point (peak) |
| **Minimum** | Smallest $y$-value | Lowest point (valley) |
| **Increasing** | $f(x)$ goes up as $x$ increases | Graph rises left to right |
| **Decreasing** | $f(x)$ goes down as $x$ increases | Graph falls left to right |
      `
    },
    {
      id: 'sat-fn5-zeros',
      type: 'text' as const,
      content: `
## Zeros and Intercepts

**Finding zeros from a graph:** Look where the curve touches or crosses the $x$-axis. At those points, $y = 0$.

**Example:** A parabola crosses the $x$-axis at $x = -2$ and $x = 5$. Then $f(-2) = 0$ and $f(5) = 0$, and we can write:

$$f(x) = a(x + 2)(x - 5)$$

for some constant $a$.

---

**$y$-intercept:** Set $x = 0$. From the factored form above:

$$f(0) = a(0 + 2)(0 - 5) = a(2)(-5) = -10a$$

If the graph also shows $f(0) = 20$, then $-10a = 20$, so $a = -2$.

$$f(x) = -2(x + 2)(x - 5)$$

**SAT Tip:** If a question says "how many zeros does $f$ have?", count the $x$-axis crossings.
      `
    },
    {
      id: 'sat-fn5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Graphs** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A function $f$ has zeros at $x = -3, 0, 4$. Which could be $f(x)$?',
            options: ['$x(x + 3)(x - 4)$', '$x(x - 3)(x + 4)$', '$(x + 3)(x - 4)$', '$x^2(x + 3)$'],
            correctAnswer: 0,
            explanation: 'Zeros at $-3, 0, 4$ means factors $(x + 3)$, $x$, and $(x - 4)$. That gives $x(x + 3)(x - 4)$.'
          },
          {
            question: 'A graph of $f(x)$ shows the curve passing through $(0, -6)$, crossing the $x$-axis at $x = 2$ and $x = 3$. What is $f(x)$?',
            options: ['$(x - 2)(x - 3)$', '$-1(x - 2)(x - 3)$', '$-1(x + 2)(x + 3)$', '$(x + 2)(x + 3)$'],
            correctAnswer: 1,
            explanation: 'Zeros at 2 and 3 give $f(x) = a(x - 2)(x - 3)$. Plug in $(0, -6)$: $-6 = a(0 - 2)(0 - 3) = 6a$, so $a = -1$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn5-intervals',
      type: 'text' as const,
      content: `
## Increasing & Decreasing Intervals

A function is **increasing** on an interval if, as $x$ moves right, the graph goes up.

A function is **decreasing** on an interval if, as $x$ moves right, the graph goes down.

**Example:** For $f(x) = -(x - 3)^2 + 4$ (a downward parabola with vertex at $(3, 4)$):

- **Increasing** on $(-\\infty, 3)$ — the graph rises toward the vertex
- **Decreasing** on $(3, \\infty)$ — the graph falls away from the vertex

---

**Key patterns:**

| Function Type | Increasing | Decreasing |
|--------------|-----------|-----------|
| $y = x^2$ (opens up) | $(0, \\infty)$ | $(-\\infty, 0)$ |
| $y = -x^2$ (opens down) | $(-\\infty, 0)$ | $(0, \\infty)$ |
| $y = 2^x$ (exponential growth) | $(-\\infty, \\infty)$ | Never |
| $y = -x + 5$ (neg. slope line) | Never | $(-\\infty, \\infty)$ |

**SAT wording:** "On which interval is $f$ increasing?" or "For what values of $x$ is $f(x) > 0$?" (above the $x$-axis).
      `
    },
    {
      id: 'sat-fn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Feature** 🔍

Consider $f(x) = (x + 1)^2 - 9$, a parabola with vertex $(-1, -9)$ opening upward.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The minimum value of $f(x)$ is',
            options: ['$-9$', '$-1$', '$0$', '$9$']
          },
          {
            label: '$f$ is decreasing on the interval',
            options: ['$(-\\infty, -1)$', '$(-1, \\infty)$', '$(-\\infty, -9)$', '$(-9, \\infty)$']
          },
          {
            label: 'The number of zeros of $f$ is',
            options: ['$0$', '$1$', '$2$', '$3$']
          }
        ],
        correctAnswers: ['$-9$', '$(-\\infty, -1)$', '$2$'],
        hint1: 'Vertex is $(-1, -9)$ and the parabola opens up, so the vertex is the minimum.',
        hint2: 'An upward parabola decreases to the left of its vertex.',
        hint3: 'Set $f(x) = 0$: $(x+1)^2 = 9$, so $x + 1 = \\pm 3$.',
        explanation: 'Min value $= -9$ at vertex. Decreasing on $(-\\infty, -1)$. Zeros: $x + 1 = \\pm 3$ gives $x = 2$ and $x = -4$, so 2 zeros.'
      }
    },
    {
      id: 'sat-fn5-input',
      type: 'input-boxes' as const,
      content: `
**Graph Analysis** 🧮

A cubic function has zeros at $x = -2, 1, 4$ and passes through $(0, 8)$.

Using $f(x) = a(x + 2)(x - 1)(x - 4)$:

1) Plug in $(0, 8)$ to find $a$.
2) What is $f(2)$?
3) What is the $y$-intercept of $f$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-8', '8'],
        hint1: '$f(0) = a(2)(-1)(-4) = 8a$. Set equal to 8.',
        hint2: '$f(2) = 1(2 + 2)(2 - 1)(2 - 4) = 1(4)(1)(-2)$.',
        hint3: 'The $y$-intercept IS $f(0) = 8$.',
        explanation: '$8 = a(2)(-1)(-4) = 8a$, so $a = 1$. $f(2) = (4)(1)(-2) = -8$. $y$-intercept $= f(0) = 8$.'
      }
    },
    {
      id: 'sat-fn5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A graph of $y = f(x)$ is shown with $f(x) > 0$ for $-2 < x < 5$ and $f(x) < 0$ everywhere else. How many zeros does $f$ have?',
            options: ['$1$', '$2$', '$3$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'The function changes sign at $x = -2$ (negative to positive) and at $x = 5$ (positive to negative). These are the two zeros.'
          },
          {
            question: 'The maximum of $f(x) = -3(x - 2)^2 + 12$ is:',
            options: ['$2$', '$12$', '$-3$', '$-12$'],
            correctAnswer: 1,
            explanation: 'This is a downward parabola with vertex $(2, 12)$. The maximum value is the $y$-coordinate of the vertex: $12$.'
          }
        ]
      }
    }
  ]
};
