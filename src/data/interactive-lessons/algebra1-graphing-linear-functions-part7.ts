export const alg1GraphLinearPart7Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Comprehensive Review**

Let's review everything from this topic:

| Concept | Key Formula |
|---------|-------------|
| Slope | $m = \\frac{y_2-y_1}{x_2-x_1}$ |
| Slope-intercept | $y = mx + b$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Standard form | $Ax + By = C$ |
| Parallel | Same slope |
| Perpendicular | $m_1 \\cdot m_2 = -1$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-worked',
      type: 'text' as const,
      content: `
## Mixed Review

**1.** Line through $(-1, 3)$ and $(2, -6)$: $m = -3$, equation: $y = -3x$.

**2.** Perpendicular to $y = 4x + 1$ through $(8, 2)$: $y = -\\frac{1}{4}x + 4$.

**3.** Standard form of $y = \\frac{2}{3}x - 4$: multiply by 3 → $2x - 3y = 12$.
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Slope of line through $(0, 5)$ and $(10, 0)$:",
            options: ["$\\\\frac{1}{2}$","$-\\\\frac{1}{2}$","$2$","$-2$"],
            correctAnswer: 1,
            explanation: "$m = (0-5)/(10-0) = -1/2$."
          },
          {
            question: "Equation of line with $m = 3$, $b = -2$:",
            options: ["$y = -2x + 3$","$y = 3x - 2$","$3x + 2y = 0$","$y = 2x - 3$"],
            correctAnswer: 1,
            explanation: "Just plug into $y = mx + b$."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Practice** 🧮

1) Perpendicular slope to $m = 4$?

2) $y$-int of $2x + y = 10$?

3) Slope of $y = 7$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-1/4","10","0"],
        hint1: "Negative reciprocal.",
        hint2: "Set $x = 0$.",
        hint3: "Horizontal line.",
        explanation: "1) $-1/4$. 2) $10$. 3) $0$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Given two points, the first step is to find ___.",
            options: ["The equation","The slope","The $y$-intercept","Standard form"]
          },
          {
            label: "A vertical line has ___ slope.",
            options: ["Zero","Undefined","Positive","Negative"]
          },
          {
            label: "Standard form requires ___ coefficients.",
            options: ["Decimal","Fraction","Integer","Negative"]
          }
        ],
        correctAnswers: ["The slope","Undefined","Integer"],
        hint1: "Always slope first.",
        hint2: "Division by zero.",
        hint3: "Multiply to clear fractions.",
        explanation: "Find slope first, vertical has undefined slope, standard form uses integers."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Through $(3, 1)$, perpendicular to $y = -x$ | $y = x - 2$ |
| 2 | $x$-intercept of $y = -5x + 15$ | $(3, 0)$ |
| 3 | Parallel to $y = 2x$ through $(1, 5)$ | $y = 2x + 3$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which lines are parallel?",
            options: ["$y = 2x+1$ and $y = -2x+1$","$y = 3x$ and $y = 3x+5$","$y = x$ and $y = -x$","$y = 4x$ and $y = \\\\frac{1}{4}x$"],
            correctAnswer: 1,
            explanation: "Same slope $m = 3$."
          },
          {
            question: "Line through $(0, 0)$ and $(1, -3)$ is:",
            options: ["$y = 3x$","$y = -3x$","$y = -\\\\frac{1}{3}x$","$y = x - 3$"],
            correctAnswer: 1,
            explanation: "$m = -3/1 = -3$, $b = 0$: $y = -3x$."
          }
        ]
      }
    }
  ]
};
