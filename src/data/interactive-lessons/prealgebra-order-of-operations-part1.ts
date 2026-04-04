export const preAlgOrderOpsPart1Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 PEMDAS Basics

**Part 1 of 7 — PEMDAS Basics**

**P**arentheses → **E**xponents → **M**ultiplication/**D**ivision → **A**ddition/**S**ubtraction

M/D and A/S are done **left to right** (equal priority within each pair).
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$3 + 4 \times 2 = ?$

Multiplication first: $4 \times 2 = 8$. Then $3 + 8 = 11$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$5 + 2 \\times 3 = ?$",
                    "options": [
                              "11",
                              "21",
                              "10",
                              "9"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2×3=6. 5+6=11."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-input',
      type: 'input-boxes' as const,
      content: `
**PEMDAS Basics** 🧮

1) $5 + 2 \times 3 = ?$

2) $8 - 4 \div 2 = ?$

3) $6 \times 3 + 1 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["11","6","19"],
        hint1: "Multiply first.",
        hint2: "Divide first.",
        hint3: "Multiply first.",
        explanation: "1) 5+6=11. 2) 8−2=6. 3) 18+1=19."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"PEMDAS stands for","options":["Parentheses, Exponents, Multiplication, Division, Addition, Subtraction","Please Excuse My Dear Aunt Sally","Both of these","Neither"]},{"label":"Multiplication and division have","options":["Equal priority","Multiplication first","Division first","No priority"]}],
        correctAnswers: ["Both of these","Equal priority"],
        hint1: "Both are mnemonics for the same thing.",
        hint2: "Left to right for tied operations.",
        explanation: "PEMDAS = Please Excuse My Dear Aunt Sally. M and D have equal priority."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | 5 + 2 × 3 | 11 |
| 2 | 8 − 4 ÷ 2 | 6 |
| 3 | 6 × 3 + 1 | 19 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In PEMDAS, what comes first?",
                    "options": [
                              "Parentheses",
                              "Exponents",
                              "Multiplication",
                              "Addition"
                    ],
                    "correctAnswer": 0,
                    "explanation": "P is first: Parentheses."
          }
]
      }
    }
  ]
};
