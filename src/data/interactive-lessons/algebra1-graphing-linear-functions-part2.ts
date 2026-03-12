export const alg1GraphLinearPart2Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Slope-Intercept Form

**Part 2 of 7 — Writing and Graphing $y = mx + b$**

Slope-intercept form is the most common way to write a linear equation:

$$y = mx + b$$

where $m$ is the slope and $b$ is the $y$-intercept.

| Parameter | Meaning | How to Find |
|-----------|---------|-------------|
| $m$ | Slope | Rise over run |
| $b$ | $y$-intercept | Where line crosses $y$-axis |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Write the equation of a line with slope $3$ and $y$-intercept $-2$.

$$y = 3x - 2$$

**Example 2:** Find slope and intercept of $2y = 6x + 10$.

$$y = 3x + 5 \\implies m = 3, \\; b = 5$$

**Example 3:** Write the equation through $(0, 4)$ with slope $-\\frac{1}{2}$.

$$y = -\\frac{1}{2}x + 4$$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "What is the slope of $y = -5x + 3$?",
            options: ["$3$","$5$","$-5$","$-3$"],
            correctAnswer: 2,
            explanation: "In $y = mx + b$, the coefficient of $x$ is the slope: $m = -5$."
          },
          {
            question: "What is the $y$-intercept of $y = 2x - 7$?",
            options: ["$2$","$-7$","$7$","$-2$"],
            correctAnswer: 1,
            explanation: "The constant term $b = -7$ is the $y$-intercept."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Identify the slope and $y$-intercept** 🧮

1) $y = 4x + 1$ → slope = ?
2) $y = -3x + 8$ → $y$-intercept = ?
3) $3y = 9x - 6$ → slope = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","8","3"],
        hint1: "Coefficient of $x$.",
        hint2: "The constant term.",
        hint3: "Divide everything by 3 first.",
        explanation: "1) $m = 4$. 2) $b = 8$. 3) $y = 3x - 2$, so $m = 3$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "In $y = mx + b$, the letter $m$ represents the ___.",
            options: ["$y$-intercept","slope","$x$-intercept","origin"]
          },
          {
            label: "A line with $b = 0$ passes through the ___.",
            options: ["$x$-axis only","origin","$y$-axis only","no axes"]
          },
          {
            label: "If $m = 0$, the graph is a ___ line.",
            options: ["vertical","horizontal","diagonal","curved"]
          }
        ],
        correctAnswers: ["slope","origin","horizontal"],
        hint1: "$m$ multiplies $x$.",
        hint2: "$b = 0$ means $y = mx$ passes through $(0,0)$.",
        hint3: "No slope means flat.",
        explanation: "$m$ is slope, $b = 0$ means the line passes through the origin, and $m = 0$ gives $y = b$, a horizontal line."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Equation with $m=2$, $b=5$ | $y = 2x + 5$ |
| 2 | Slope of $4y = -8x + 12$ | $m = -2$ |
| 3 | $y$-intercept of $y = \\frac{x}{3} - 4$ | $b = -4$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which equation has the steepest line?",
            options: ["$y = 2x + 1$","$y = 5x - 3$","$y = x + 10$","$y = 3x$"],
            correctAnswer: 1,
            explanation: "$|5| > |3| > |2| > |1|$, so $y = 5x - 3$ is steepest."
          },
          {
            question: "Convert $6x + 2y = 10$ to slope-intercept form:",
            options: ["$y = 3x + 5$","$y = -3x + 5$","$y = 6x + 10$","$y = -6x + 10$"],
            correctAnswer: 1,
            explanation: "$2y = -6x + 10 \\\\implies y = -3x + 5$."
          }
        ]
      }
    }
  ]
};
