export const preAlgOrderOpsPart3Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Multiplication & Division

**Part 3 of 7 — Multiplication & Division**

After parentheses and exponents: **multiply and divide left to right**.

$24 \\div 6 \\times 2 = 4 \\times 2 = 8$ (left to right, NOT $24 \\div 12$)
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$12 \\div 3 \\times 4 = 4 \\times 4 = 16$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$20 \\div 4 \\times 3 = ?$",
                    "options": [
                              "15",
                              "5/3",
                              "60/4",
                              "20/12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Left to right: 5 × 3 = 15."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Multiply & Divide Left to Right** 🧮

1) $20 \\div 4 \\times 3 = ?$

2) $2 \\times 6 \\div 3 = ?$

3) $18 \\div 2 \\div 3 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["15","4","3"],
        hint1: "20÷4=5, then 5×3.",
        hint2: "2×6=12, then 12÷3.",
        hint3: "18÷2=9, then 9÷3.",
        explanation: "1) 15. 2) 4. 3) 3."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When you see × and ÷ together, go","options":["Left to right","Right to left","× first","÷ first"]},{"label":"$8 ÷ 2 × 4 =$","options":["16","1","8","32"]}],
        correctAnswers: ["Left to right","16"],
        hint1: "Same priority.",
        hint2: "4 × 4.",
        explanation: "Left to right for ×/÷. 8÷2=4, 4×4=16."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | 20 ÷ 4 × 3 | 15 |
| 2 | 2 × 6 ÷ 3 | 4 |
| 3 | 18 ÷ 2 ÷ 3 | 3 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$18 \\div 2 \\div 3 = ?$",
                    "options": [
                              "3",
                              "27",
                              "9",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Left to right: 9 ÷ 3 = 3."
          }
]
      }
    }
  ]
};
