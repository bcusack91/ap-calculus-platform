export const preAlgVariablesPart5Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Solving Simple Equations

**Part 5 of 7 — Solving Simple Equations**

Goal: get the variable **alone** on one side.

### Inverse Operations
- Addition ↔ Subtraction
- Multiplication ↔ Division

$x + 5 = 12 \Rightarrow x = 12 - 5 = 7$
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$3x + 4 = 19$

Step 1: $3x = 19 - 4 = 15$
Step 2: $x = 15 \div 3 = 5$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$x + 7 = 15$. $x = ?$",
                    "options": [
                              "8",
                              "22",
                              "7",
                              "15"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x = 15 − 7 = 8."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p5-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

1) $x + 7 = 15$. $x = ?$

2) $2x = 14$. $x = ?$

3) $3x + 1 = 10$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","7","3"],
        hint1: "15 − 7.",
        hint2: "14 ÷ 2.",
        hint3: "3x = 9, then 9 ÷ 3.",
        explanation: "1) 8. 2) 7. 3) 3."
      }
    },
    {
      id: 'prealgebra-intro-variables-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To undo addition, use","options":["Subtraction","Addition","Multiplication","Division"]},{"label":"To undo multiplication, use","options":["Division","Multiplication","Addition","Subtraction"]}],
        correctAnswers: ["Subtraction","Division"],
        hint1: "Inverse operations.",
        hint2: "Inverse of multiply.",
        explanation: "Add↔subtract. Multiply↔divide."
      }
    },
    {
      id: 'prealgebra-intro-variables-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Equation | Solution |
|---|---------|----------|
| 1 | x + 7 = 15 | x = 8 |
| 2 | 2x = 14 | x = 7 |
| 3 | 3x + 1 = 10 | x = 3 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$2x = 14$. $x = ?$",
                    "options": [
                              "7",
                              "28",
                              "12",
                              "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x = 14 ÷ 2 = 7."
          }
]
      }
    }
  ]
};
