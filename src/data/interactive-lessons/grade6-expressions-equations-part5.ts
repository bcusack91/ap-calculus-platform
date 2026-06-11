export const g6ExpressionsPart5Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p5-intro',
      type: 'text' as const,
      content: `
# ✏️ Inequalities Introduction

**Part 5 of 7 — Inequalities Introduction**

An **inequality** compares two expressions:
- $x > 5$: x is greater than 5
- $x < 3$: x is less than 3
- $x \\geq 7$: x is greater than or equal to 7
- $x \\leq 2$: x is less than or equal to 2

Graph on a number line: **open circle** (strict) or **closed circle** (includes endpoint).
    
    `
    },
    {
      id: 'grade6-expressions-equations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Solve $x + 4 > 10$.**

Subtract 4: $x > 6$

Graph: Open circle at 6, arrow to the right. ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $x - 3 > 5$:",
                    "options": [
                              "$x > 8$",
                              "$x > 2$",
                              "$x < 8$",
                              "$x > 5$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Add 3: $x > 8$."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Inequalities** 🧮

1) $x - 3 > 5$: $x > $ ?

2) $2x \\leq 14$: $x \\leq $ ?

3) $x + 1 < 6$: $x < $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","7","5"],
        hint1: "Add 3 to both sides.",
        hint2: "Divide both sides by 2.",
        hint3: "Subtract 1 from both sides.",
        explanation: "1) 5+3=8. 2) 14÷2=7. 3) 6−1=5."
      }
    },
    {
      id: 'grade6-expressions-equations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"An open circle on a number line means","options":["The endpoint is NOT included","The endpoint IS included","There is no solution","The answer is zero"]},{"label":"$x \\\\leq 3$ means x could be","options":["3 or any number less than 3","Only numbers less than 3","Only 3","Numbers greater than 3"]}],
        correctAnswers: ["The endpoint is NOT included","3 or any number less than 3"],
        hint1: "Open = strict inequality (< or >).",
        hint2: "$\\leq$ means less than OR equal.",
        explanation: "Open circle = not included. $\\leq$ includes the value."
      }
    },
    {
      id: 'grade6-expressions-equations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Inequality | Solution |
|---|-----------|----------|
| 1 | $x - 3 > 5$ | $x > 8$ |
| 2 | $2x \\leq 14$ | $x \\leq 7$ |
| 3 | $x + 1 < 6$ | $x < 5$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "What kind of circle for $x \\\\geq 4$?",
                    "options": [
                              "Closed (filled)",
                              "Open (empty)",
                              "No circle",
                              "Square"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\geq$ includes the endpoint → closed circle."
          }
]
      }
    }
  ]
};
