export const g7RationalOpsPart5Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p5-intro',
      type: 'text' as const,
      content: `
# 🔢 Order of Operations Review

**Part 5 of 7 — Order of Operations Review**

**PEMDAS** with rational numbers:
1. **P**arentheses
2. **E**xponents
3. **M**ultiplication / **D**ivision (left to right)
4. **A**ddition / **S**ubtraction (left to right)
    
    `
    },
    {
      id: 'grade7-operations-rational-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$-3 + 4(-2)^2 = ?$

$(-2)^2 = 4$. Then $4(4) = 16$. Then $-3 + 16 = 13$ ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$2+ 3 \\\\times 4 = ?$",
                    "options": [
                              "14",
                              "20",
                              "24",
                              "9"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Multiply first: 2 + 12 = 14."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p5-input',
      type: 'input-boxes' as const,
      content: `
**Order of Operations** 🧮

1) $2 + 3 \\times 4 = ?$

2) $(2 + 3) \\times 4 = ?$

3) $-5 + 3^2 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["14","20","4"],
        hint1: "Multiply before adding.",
        hint2: "Parentheses first.",
        hint3: "Exponent first: 3² = 9.",
        explanation: "1) 2+12=14. 2) 5×4=20. 3) −5+9=4."
      }
    },
    {
      id: 'grade7-operations-rational-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In PEMDAS, what comes first?","options":["Parentheses","Exponents","Multiplication","Addition"]},{"label":"Multiplication and division are done","options":["Left to right","Right to left","Multiplication first","Division first"]}],
        correctAnswers: ["Parentheses","Left to right"],
        hint1: "P-E-M-D-A-S.",
        hint2: "Same precedence → left to right.",
        explanation: "Parentheses first. M/D left to right."
      }
    },
    {
      id: 'grade7-operations-rational-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $2 + 3 \\times 4$ | 14 |
| 2 | $(2 + 3) \\times 4$ | 20 |
| 3 | $-5 + 3^2$ | 4 |
    
    `
    },
    {
      id: 'grade7-operations-rational-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$-5 + 3^2 = ?$",
                    "options": [
                              "4",
                              "−14",
                              "14",
                              "22"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3² = 9. −5 + 9 = 4."
          }
]
      }
    }
  ]
};
