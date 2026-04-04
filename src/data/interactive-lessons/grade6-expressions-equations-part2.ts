export const g6ExpressionsPart2Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p2-intro',
      type: 'text' as const,
      content: `
# ✏️ Evaluating Expressions

**Part 2 of 7 — Evaluating Expressions**

To **evaluate**, substitute the given value for the variable, then calculate.

Example: Evaluate $3x + 2$ when $x = 4$:
$3(4) + 2 = 12 + 2 = 14$
    
    `
    },
    {
      id: 'grade6-expressions-equations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Evaluate $2a^2 - 3$ when $a = 5$.**

$2(5)^2 - 3 = 2(25) - 3 = 50 - 3 = 47$ ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Evaluate $5n - 4$ when $n = 3$:",
                    "options": [
                              "11",
                              "15",
                              "1",
                              "19"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$5(3) - 4 = 15 - 4 = 11$."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** 🧮

1) $4x + 1$ when $x = 3$

2) $x^2 - 4$ when $x = 6$

3) $\frac{n}{2} + 5$ when $n = 8$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","32","9"],
        hint1: "4(3) + 1.",
        hint2: "6² − 4.",
        hint3: "8/2 + 5.",
        explanation: "1) 12+1=13. 2) 36−4=32. 3) 4+5=9."
      }
    },
    {
      id: 'grade6-expressions-equations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To evaluate an expression, you","options":["Substitute the value and calculate","Solve for the variable","Factor the expression","Graph it"]},{"label":"$3x + 2$ when $x = 0$ equals","options":["2","3","0","5"]}],
        correctAnswers: ["Substitute the value and calculate","2"],
        hint1: "Replace the variable with its value.",
        hint2: "3(0) + 2 = ?",
        explanation: "Substitute and compute. 3(0)+2 = 2."
      }
    },
    {
      id: 'grade6-expressions-equations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value | Result |
|---|-----------|-------|--------|
| 1 | $4x + 1$ | $x = 3$ | 13 |
| 2 | $x^2 - 4$ | $x = 6$ | 32 |
| 3 | $\frac{n}{2} + 5$ | $n = 8$ | 9 |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Evaluate $x^2 + x$ when $x = 4$:",
                    "options": [
                              "20",
                              "16",
                              "8",
                              "12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$4^2 + 4 = 16 + 4 = 20$."
          }
]
      }
    }
  ]
};
