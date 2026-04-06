export const preAlgOrderOpsPart4Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Addition & Subtraction

**Part 4 of 7 — Addition & Subtraction**

Last step: **add and subtract left to right**.

$10 - 3 + 5 = 7 + 5 = 12$ (left to right)
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$8 + 2 \\times 3 - 4 = 8 + 6 - 4 = 14 - 4 = 10$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$4 + 5 \\times 2 - 3 = ?$",
                    "options": [
                              "11",
                              "15",
                              "9",
                              "21"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5×2=10. 4+10−3=11."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Full PEMDAS** 🧮

1) $15 - 3 + 2 = ?$

2) $4 + 5 \\times 2 - 3 = ?$

3) $20 - 6 \div 2 + 1 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["14","11","18"],
        hint1: "Left to right: 12+2.",
        hint2: "Multiply first: 4+10−3.",
        hint3: "Divide first: 20−3+1.",
        explanation: "1) 14. 2) 11. 3) 18."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Addition and subtraction have","options":["Equal priority","Addition first","Subtraction first","No order"]},{"label":"In PEMDAS, A and S are done","options":["Last (left to right)","First","Before multiplication","After parentheses"]}],
        correctAnswers: ["Equal priority","Last (left to right)"],
        hint1: "Same level.",
        hint2: "Final step.",
        explanation: "+ and − have equal priority, done last, left to right."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | 15 − 3 + 2 | 14 |
| 2 | 4 + 5 × 2 − 3 | 11 |
| 3 | 20 − 6 ÷ 2 + 1 | 18 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$20 - 6 \\div 2 + 1 = ?$",
                    "options": [
                              "18",
                              "8",
                              "7.5",
                              "22"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6÷2=3. 20−3+1=18."
          }
]
      }
    }
  ]
};
