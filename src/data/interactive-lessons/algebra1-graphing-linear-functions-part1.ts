export const alg1GraphLinearPart1Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p1-intro',
      type: 'text' as const,
      content: `
# 📈 Slope & Rate of Change

**Part 1 of 7 — Understanding Slope**

Slope measures the steepness of a line. It tells you how much $y$ changes for every unit change in $x$.

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$

| Slope Type | Visual | Meaning |
|-----------|--------|----------|
| Positive | / | Line goes up left to right |
| Negative | \\ | Line goes down left to right |
| Zero | — | Horizontal line |
| Undefined | \| | Vertical line |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Find the slope through $(2, 3)$ and $(5, 9)$.

$$m = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$$

**Example 2:** Find the slope through $(-1, 4)$ and $(3, 4)$.

$$m = \\frac{4 - 4}{3 - (-1)} = \\frac{0}{4} = 0 \\text{ (horizontal)}$$

**Example 3:** Find the slope through $(2, -1)$ and $(2, 7)$.

$$m = \\frac{7 - (-1)}{2 - 2} = \\frac{8}{0} \\text{ (undefined — vertical)}$$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "What is the slope of the line through $(1, 2)$ and $(4, 11)$?",
            options: ["$3$","$2$","$\\\\frac{1}{3}$","$9$"],
            correctAnswer: 0,
            explanation: "$m = \\\\frac{11-2}{4-1} = \\\\frac{9}{3} = 3$."
          },
          {
            question: "A horizontal line has slope:",
            options: ["$1$","$0$","Undefined","$-1$"],
            correctAnswer: 1,
            explanation: "Horizontal lines have zero rise, so slope = 0."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Find the slope** 🧮

1) Through $(0, 0)$ and $(3, 12)$

2) Through $(-2, 5)$ and $(4, -1)$

3) Through $(1, 7)$ and $(5, 7)$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","-1","0"],
        hint1: "$m = 12/3$.",
        hint2: "$m = (-1-5)/(4-(-2)) = -6/6$.",
        hint3: "Same $y$-values means horizontal.",
        explanation: "1) $m = 4$. 2) $m = -1$. 3) $m = 0$ (horizontal)."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A line with slope $2/3$ rises ___ for every run of 3.",
            options: ["1","2","3","6"]
          },
          {
            label: "A vertical line has ___ slope.",
            options: ["Zero","Positive","Undefined","Negative"]
          },
          {
            label: "If $y$ decreases as $x$ increases, the slope is ___.",
            options: ["Positive","Negative","Zero","Undefined"]
          }
        ],
        correctAnswers: ["2","Undefined","Negative"],
        hint1: "Rise = slope × run.",
        hint2: "Vertical = division by zero.",
        hint3: "Decreasing means negative slope.",
        explanation: "Rise = $2/3 \\\\times 3 = 2$. Vertical lines have undefined slope (run = 0). Decreasing functions have negative slope."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Slope through $(3, 1)$ and $(7, 9)$ | $m = 2$ |
| 2 | Slope through $(0, 5)$ and $(5, 0)$ | $m = -1$ |
| 3 | Slope through $(-3, -2)$ and $(6, 4)$ | $m = 2/3$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which pair of points gives a negative slope?",
            options: ["$(1,1)$ and $(3,5)$","$(2,6)$ and $(5,3)$","$(0,0)$ and $(4,4)$","$(1,2)$ and $(3,8)$"],
            correctAnswer: 1,
            explanation: "$m = (3-6)/(5-2) = -1$, which is negative."
          },
          {
            question: "The slope between $(a, b)$ and $(a, c)$ where $b \\\\neq c$ is:",
            options: ["$0$","$1$","Undefined","$(c-b)$"],
            correctAnswer: 2,
            explanation: "Same $x$-coordinate means vertical line — undefined slope."
          }
        ]
      }
    }
  ]
};
