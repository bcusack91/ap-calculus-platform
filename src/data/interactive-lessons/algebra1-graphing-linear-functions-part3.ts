export const alg1GraphLinearPart3Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p3-intro',
      type: 'text' as const,
      content: `
# 📌 Point-Slope Form

**Part 3 of 7 — Using a Point and a Slope**

When you know a point $(x_1, y_1)$ and the slope $m$:

$$y - y_1 = m(x - x_1)$$

This is perfect when you don't know the $y$-intercept directly.

| Given | Form to Use |
|-------|-------------|
| Slope + $y$-intercept | $y = mx + b$ |
| Slope + any point | $y - y_1 = m(x - x_1)$ |
| Two points | Find $m$ first, then use point-slope |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Line through $(3, 5)$ with slope $2$.

$$y - 5 = 2(x - 3) \\implies y = 2x - 1$$

**Example 2:** Line through $(1, -2)$ and $(4, 7)$.

$$m = \\frac{7-(-2)}{4-1} = 3$$
$$y - (-2) = 3(x - 1) \\implies y = 3x - 5$$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Write point-slope form for slope $4$ through $(2, 1)$.",
            options: ["$y - 1 = 4(x - 2)$","$y - 2 = 4(x - 1)$","$y + 1 = 4(x + 2)$","$y = 4x + 1$"],
            correctAnswer: 0,
            explanation: "Plug into $y - y_1 = m(x - x_1)$: $y - 1 = 4(x - 2)$."
          },
          {
            question: "Convert $y - 3 = -2(x + 1)$ to slope-intercept form.",
            options: ["$y = -2x + 1$","$y = -2x - 1$","$y = -2x + 5$","$y = 2x + 1$"],
            correctAnswer: 0,
            explanation: "$y - 3 = -2x - 2 \\\\implies y = -2x + 1$."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Convert to slope-intercept form** 🧮

1) $y - 4 = 3(x - 1)$ → $b = ?$

2) $y + 2 = -1(x - 5)$ → $b = ?$

3) Through $(2, 8)$ and $(6, 0)$ → $m = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","3","-2"],
        hint1: "$y = 3x - 3 + 4 = 3x + 1$.",
        hint2: "$y = -x + 5 - 2 = -x + 3$.",
        hint3: "$m = (0-8)/(6-2) = -8/4$.",
        explanation: "1) $b = 1$. 2) $b = 3$. 3) $m = -2$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Point-slope form requires a ___ and a ___.",
            options: ["slope and y-intercept","point and a slope","two y-intercepts","x-intercept and slope"]
          },
          {
            label: "To use point-slope with two points, first find the ___.",
            options: ["y-intercept","x-intercept","slope","midpoint"]
          },
          {
            label: "In $y - y_1 = m(x - x_1)$, $(x_1, y_1)$ is ___.",
            options: ["the slope","the y-intercept","a point on the line","the origin"]
          }
        ],
        correctAnswers: ["point and a slope","slope","a point on the line"],
        hint1: "The name says it: point-slope.",
        hint2: "You need $m$ before writing the equation.",
        hint3: "The subscript 1 denotes a specific point.",
        explanation: "Point-slope needs one point and the slope. With two points, compute slope first. $(x_1, y_1)$ is the given point."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Through $(0, -3)$, $m = 5$ | $y = 5x - 3$ |
| 2 | Through $(1, 1)$ and $(3, 7)$ | $y = 3x - 2$ |
| 3 | Through $(-2, 4)$, $m = -1$ | $y = -x + 2$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "A line through $(5, -1)$ with slope $\\\\frac{2}{5}$ has equation:",
            options: ["$y + 1 = \\\\frac{2}{5}(x - 5)$","$y - 1 = \\\\frac{2}{5}(x + 5)$","$y + 1 = \\\\frac{5}{2}(x - 5)$","$y = \\\\frac{2}{5}x - 1$"],
            correctAnswer: 0,
            explanation: "$y - (-1) = \\\\frac{2}{5}(x - 5) \\\\implies y + 1 = \\\\frac{2}{5}(x - 5)$."
          },
          {
            question: "Converted to slope-intercept: $y - 6 = -3(x - 2)$",
            options: ["$y = -3x + 12$","$y = -3x$","$y = -3x + 4$","$y = 3x + 12$"],
            correctAnswer: 0,
            explanation: "$y = -3x + 6 + 6 = -3x + 12$."
          }
        ]
      }
    }
  ]
};
