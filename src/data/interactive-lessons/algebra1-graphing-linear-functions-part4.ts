export const alg1GraphLinearPart4Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p4-intro',
      type: 'text' as const,
      content: `
# 📋 Standard Form

**Part 4 of 7 — Standard Form $Ax + By = C$**

Standard form is useful for finding intercepts quickly.

$$Ax + By = C$$

where $A$, $B$, $C$ are integers and $A \\geq 0$.

| To Find | Set | Solve |
|---------|-----|-------|
| $x$-intercept | $y = 0$ | $Ax = C$ |
| $y$-intercept | $x = 0$ | $By = C$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Convert $y = 2x - 5$ to standard form.

$$-2x + y = -5 \\implies 2x - y = 5$$

**Example 2:** Find intercepts of $3x + 4y = 12$.

$x$-int: $(4, 0)$, $y$-int: $(0, 3)$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Convert $y = -3x + 6$ to standard form.",
            options: ["$3x + y = 6$","$-3x + y = 6$","$3x - y = -6$","$x + 3y = 6$"],
            correctAnswer: 0,
            explanation: "$3x + y = 6$."
          },
          {
            question: "The $x$-intercept of $5x + 2y = 20$ is:",
            options: ["$(10, 0)$","$(4, 0)$","$(0, 10)$","$(20, 0)$"],
            correctAnswer: 1,
            explanation: "Set $y = 0$: $5x = 20 \\\\implies x = 4$."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Find the intercepts** 🧮

1) $x$-int of $4x + 3y = 12$
2) $y$-int of $2x + 5y = 10$
3) $x$-int of $6x - 2y = 18$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","3"],
        hint1: "$4x = 12$.",
        hint2: "$5y = 10$.",
        hint3: "$6x = 18$.",
        explanation: "1) $x = 3$. 2) $y = 2$. 3) $x = 3$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "In standard form $Ax + By = C$, $A$ should be ___.",
            options: ["Negative","Non-negative","Zero","A fraction"]
          },
          {
            label: "To find the $y$-intercept, set ___ = 0.",
            options: ["$y$","$x$","$A$","$C$"]
          },
          {
            label: "Standard form is best for finding ___.",
            options: ["Slope","Both intercepts","Direction","Rate of change"]
          }
        ],
        correctAnswers: ["Non-negative","$x$","Both intercepts"],
        hint1: "Convention requires $A \\\\geq 0$.",
        hint2: "Eliminate $x$ to isolate $y$.",
        hint3: "Setting each variable to 0 gives an intercept.",
        explanation: "$A$ is non-negative by convention. Set $x = 0$ for $y$-intercept and $y = 0$ for $x$-intercept."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Standard form of $y = 4x - 1$ | $4x - y = 1$ |
| 2 | $y$-int of $3x + 6y = 18$ | $(0, 3)$ |
| 3 | $x$-int of $7x + y = 21$ | $(3, 0)$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which is in standard form?",
            options: ["$y = 2x + 3$","$2x - y = -3$","$x = 3y + 1$","$2x + y = 3$"],
            correctAnswer: 3,
            explanation: "$2x + y = 3$ has $A = 2 \\\\geq 0$ and integer coefficients."
          },
          {
            question: "Convert $\\\\frac{x}{2} + \\\\frac{y}{3} = 1$ to standard form.",
            options: ["$3x + 2y = 6$","$x + y = 5$","$2x + 3y = 6$","$6x + 6y = 1$"],
            correctAnswer: 0,
            explanation: "Multiply by 6: $3x + 2y = 6$."
          }
        ]
      }
    }
  ]
};
