export const alg1GraphLinearPart5Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p5-intro',
      type: 'text' as const,
      content: `
# 🔀 Parallel & Perpendicular Lines

**Part 5 of 7 — Slope Relationships**

| Relationship | Slopes |
|-------------|--------|
| Parallel | $m_1 = m_2$ (same slope) |
| Perpendicular | $m_1 \\cdot m_2 = -1$ (negative reciprocals) |

Parallel lines never intersect. Perpendicular lines meet at $90°$.
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Line parallel to $y = 3x + 1$ through $(2, 5)$.

Same slope $m = 3$: $y - 5 = 3(x - 2) \\implies y = 3x - 1$

**Example 2:** Line perpendicular to $y = 2x - 4$ through $(0, 3)$.

Perpendicular slope $m = -\\frac{1}{2}$: $y = -\\frac{1}{2}x + 3$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A line parallel to $y = -4x + 7$ has slope:",
            options: ["$4$","$-4$","$\\\\frac{1}{4}$","$-\\\\frac{1}{4}$"],
            correctAnswer: 1,
            explanation: "Parallel lines have the same slope: $m = -4$."
          },
          {
            question: "A line perpendicular to $y = \\\\frac{2}{3}x$ has slope:",
            options: ["$\\\\frac{2}{3}$","$-\\\\frac{2}{3}$","$\\\\frac{3}{2}$","$-\\\\frac{3}{2}$"],
            correctAnswer: 3,
            explanation: "Negative reciprocal of $\\\\frac{2}{3}$ is $-\\\\frac{3}{2}$."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Find the slope** 🧮

1) Parallel to $y = 5x - 2$: $m = ?$
2) Perpendicular to $y = -3x + 1$: $m = ?$
3) Perpendicular to $y = \\frac{1}{4}x$: $m = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","1/3","-4"],
        hint1: "Same slope for parallel.",
        hint2: "Negative reciprocal of $-3$.",
        hint3: "Negative reciprocal of $1/4$.",
        explanation: "1) $m = 5$. 2) $m = 1/3$. 3) $m = -4$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Parallel lines have ___ slopes.",
            options: ["Equal","Opposite","Reciprocal","Zero"]
          },
          {
            label: "Perpendicular slopes multiply to ___.",
            options: ["$0$","$1$","$-1$","$2$"]
          },
          {
            label: "The negative reciprocal of $5$ is ___.",
            options: ["$-5$","$5$","$-1/5$","$1/5$"]
          }
        ],
        correctAnswers: ["Equal","$-1$","$-1/5$"],
        hint1: "Same direction = same steepness.",
        hint2: "Product of perpendicular slopes.",
        hint3: "Flip and negate.",
        explanation: "Parallel: equal slopes. Perpendicular: product = $-1$. Negative reciprocal of $5$ is $-1/5$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Parallel to $y = -x + 3$ through $(1,1)$ | $y = -x + 2$ |
| 2 | Perpendicular to $y = 2x$ through $(4, 0)$ | $y = -\\frac{1}{2}x + 2$ |
| 3 | Are $y = 3x$ and $y = -\\frac{1}{3}x$ perpendicular? | Yes |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which line is perpendicular to $y = \\\\frac{1}{2}x + 3$?",
            options: ["$y = \\\\frac{1}{2}x - 1$","$y = -2x + 5$","$y = 2x + 3$","$y = -\\\\frac{1}{2}x$"],
            correctAnswer: 1,
            explanation: "Perpendicular slope is $-2$, so $y = -2x + 5$."
          },
          {
            question: "Parallel lines $y = ax + 1$ and $y = 3x - 5$. Find $a$.",
            options: ["$-3$","$\\\\frac{1}{3}$","$3$","$5$"],
            correctAnswer: 2,
            explanation: "Parallel means same slope: $a = 3$."
          }
        ]
      }
    }
  ]
};
