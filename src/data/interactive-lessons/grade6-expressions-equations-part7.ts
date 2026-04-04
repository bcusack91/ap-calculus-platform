export const g6ExpressionsPart7Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Write expressions from verbal phrases
- Evaluate by substituting
- Use properties (distributive, commutative, etc.)
- Solve one-step equations with inverse operations
- Inequalities: <, >, ≤, ≥
    
    `
    },
    {
      id: 'grade6-expressions-equations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$3(x + 4) = 21$. Distribute: $3x + 12 = 21$. Subtract 12: $3x = 9$. Divide: $x = 3$ ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$2x + 5$ when $x = 4$:",
                    "options": [
                              "13",
                              "9",
                              "14",
                              "11"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$2(4)+5 = 13$."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $2x + 5$ when $x = 4$?

2) $x - 6 = 11$. $x = ?$

3) $5(x + 2) = ?x + ?$. The constant term?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","17","10"],
        hint1: "2(4) + 5.",
        hint2: "Add 6.",
        hint3: "5(2) = ?",
        explanation: "1) 8+5=13. 2) 11+6=17. 3) 5(2)=10."
      }
    },
    {
      id: 'grade6-expressions-equations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Inverse of multiplication is","options":["Division","Addition","Subtraction","Exponentiation"]},{"label":"$7(x + 1) = 7x + ?$","options":["7","1","8","x"]}],
        correctAnswers: ["Division","7"],
        hint1: "Undo multiplication.",
        hint2: "Distribute 7 to both terms.",
        explanation: "Inverse of × is ÷. 7(1)=7."
      }
    },
    {
      id: 'grade6-expressions-equations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Evaluate | $2x + 5$ when $x = 4$ |
| 2 | Solve | $x - 6 = 11$ |
| 3 | Distribute | $5(x + 2)$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $x - 6 = 11$:",
                    "options": [
                              "17",
                              "5",
                              "-5",
                              "66"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$x = 11 + 6 = 17$."
          }
]
      }
    }
  ]
};
