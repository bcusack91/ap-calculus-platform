export const g6ExpressionsPart4Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p4-intro',
      type: 'text' as const,
      content: `
# ✏️ Solving One-Step Equations

**Part 4 of 7 — Solving One-Step Equations**

Use **inverse operations** to isolate the variable:
- Addition ↔ Subtraction
- Multiplication ↔ Division

$x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$
$3x = 18 \\Rightarrow x = 18 ÷ 3 = 6$
    
    `
    },
    {
      id: 'grade6-expressions-equations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Solve $\\frac{x}{4} = 9$.**

Multiply both sides by 4: $x = 36$ ✅ Check: $36/4 = 9$ ✓
    
    `
    },
    {
      id: 'grade6-expressions-equations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $x + 9 = 14$:",
                    "options": [
                              "x = 5",
                              "x = 23",
                              "x = 9",
                              "x = 14"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$x = 14 - 9 = 5$."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

1) $x + 7 = 15$. $x = ?$

2) $5x = 45$. $x = ?$

3) $x - 3 = 10$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","9","13"],
        hint1: "Subtract 7 from both sides.",
        hint2: "Divide both sides by 5.",
        hint3: "Add 3 to both sides.",
        explanation: "1) 15−7=8. 2) 45÷5=9. 3) 10+3=13."
      }
    },
    {
      id: 'grade6-expressions-equations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The inverse of addition is","options":["Subtraction","Multiplication","Division","Addition"]},{"label":"Solve $\\\\frac{x}{3} = 6$: $x =$","options":["18","2","9","3"]}],
        correctAnswers: ["Subtraction","18"],
        hint1: "Undo addition.",
        hint2: "Multiply both sides by 3.",
        explanation: "Inverse of + is −. x = 6 × 3 = 18."
      }
    },
    {
      id: 'grade6-expressions-equations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Equation | Inverse |
|---|---------|---------|
| 1 | $x + 7 = 15$ | Subtract 7 |
| 2 | $5x = 45$ | Divide by 5 |
| 3 | $x - 3 = 10$ | Add 3 |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $7x = 49$:",
                    "options": [
                              "x = 7",
                              "x = 42",
                              "x = 56",
                              "x = 343"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$x = 49 ÷ 7 = 7$."
          }
]
      }
    }
  ]
};
