export const alg1GraphLinearPart6Data = {
  topicSlug: "graphing-linear-functions-algebra1",
  sections: [
    {
      id: 'algebra1-graphing-linear-functions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

Now we combine all graphing skills:

| Skill | When to Use |
|-------|-------------|
| Slope formula | Given two points |
| Slope-intercept | Given slope & $y$-int |
| Point-slope | Given slope & any point |
| Standard form | For intercepts |
| Parallel/Perp | Slope relationships |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** A cell phone plan charges \$0.10 per text after a \$30 base fee. Write the cost equation.

$$C = 0.10t + 30$$

Slope = \$0.10/text, intercept = \$30.

**Example 2:** Two points on a supply line: $(10, 50)$ and $(20, 75)$. Find the equation.

$$m = \\frac{75-50}{20-10} = 2.5$$
$$y - 50 = 2.5(x - 10) \\implies y = 2.5x + 25$$
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A taxi costs \\$3 plus \\$2 per mile. Which equation models the cost $C$ for $m$ miles?",
            options: ["$C = 3m + 2$","$C = 2m + 3$","$C = 5m$","$C = 2m - 3$"],
            correctAnswer: 1,
            explanation: "Slope is \\$2/mile, $y$-intercept is \\$3."
          },
          {
            question: "A line passes through $(0, -4)$ and $(6, 8)$. Its equation is:",
            options: ["$y = 2x - 4$","$y = -2x + 4$","$y = 2x + 4$","$y = \\\\frac{1}{2}x - 4$"],
            correctAnswer: 0,
            explanation: "$m = (8-(-4))/(6-0) = 2$, $b = -4$."
          }
        ]
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

1) Slope of line through $(3, 7)$ and $(9, 19)$?
2) $y$-intercept of line with $m = -2$ through $(3, 1)$?
3) $x$-intercept of $y = 4x - 8$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","7","2"],
        hint1: "$m = (19-7)/(9-3)$.",
        hint2: "$1 = -2(3) + b$.",
        hint3: "Set $y = 0$: $4x = 8$.",
        explanation: "1) $m = 2$. 2) $b = 7$. 3) $x = 2$."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "To write an equation from two points, first find ___.",
            options: ["The $y$-intercept","The slope","Standard form","The $x$-intercept"]
          },
          {
            label: "In a word problem, the slope represents ___.",
            options: ["Starting value","Rate of change","Total amount","Time"]
          },
          {
            label: "The $y$-intercept in a word problem is the ___.",
            options: ["Rate","Starting/initial value","Final answer","Slope"]
          }
        ],
        correctAnswers: ["The slope","Rate of change","Starting/initial value"],
        hint1: "Slope first, then equation.",
        hint2: "Slope = change per unit.",
        hint3: "When $x = 0$.",
        explanation: "Always find slope first. Slope is the rate of change. The $y$-intercept is the initial value (when $x = 0$)."
      }
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Gym: \$50 + \$25/month | $C = 25m + 50$ |
| 2 | Through $(2,3)$ and $(8,15)$ | $y = 2x - 1$ |
| 3 | Parallel to $y = -x + 7$ through origin | $y = -x$ |
      `
    },
    {
      id: 'algebra1-graphing-linear-functions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "A line has $x$-intercept $(5, 0)$ and $y$-intercept $(0, -10)$. Its slope is:",
            options: ["$-2$","$2$","$\\\\frac{1}{2}$","$-\\\\frac{1}{2}$"],
            correctAnswer: 1,
            explanation: "$m = (-10-0)/(0-5) = -10/-5 = 2$."
          },
          {
            question: "Which word problem has a negative slope?",
            options: ["Savings growing \\$100/month","Temperature dropping 3° per hour","Distance increasing at 60 mph","Population growing by 5%"],
            correctAnswer: 1,
            explanation: "Dropping means decreasing, so negative slope."
          }
        ]
      }
    }
  ]
};
