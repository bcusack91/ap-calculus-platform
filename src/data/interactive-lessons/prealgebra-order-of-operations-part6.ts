export const preAlgOrderOpsPart6Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply order of operations to multi-step problems:
- Write the expression carefully
- Identify which operations to do first
- Show each step
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**"3 squared plus the product of 2 and 5."**

$3^2 + 2 \times 5 = 9 + 10 = 19$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"Double the sum of 4 and 3\" = ?",
                    "options": [
                              "14",
                              "11",
                              "23",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2(4+3) = 2(7) = 14."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Translate & Compute** 🧮

1) Double the sum of 4 and 3?

2) 5 squared minus 10?

3) Sum of 8 and 6, divided by 2?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["14","15","7"],
        hint1: "2(4+3).",
        hint2: "25 − 10.",
        hint3: "(8+6)÷2 = 14÷2.",
        explanation: "1) 14. 2) 15. 3) 7."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"The sum of 4 and 3\" requires","options":["Parentheses to group the addition","No grouping","Multiplication first","Subtraction"]},{"label":"\"5 squared\" means","options":["5² = 25","5 × 2 = 10","√5","5 + 5"]}],
        correctAnswers: ["Parentheses to group the addition","5² = 25"],
        hint1: "Sum means add → group it.",
        hint2: "Squared = power of 2.",
        explanation: "Group the sum in parentheses. 5²=25."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Expression | Value |
|---|---------|-----------|-------|
| 1 | Double the sum of 4 and 3 | 2(4+3) | 14 |
| 2 | 5 squared minus 10 | 5²−10 | 15 |
| 3 | Sum of 8 and 6 divided by 2 | (8+6)÷2 | 7 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "\"Sum of 8 and 6 divided by 2\" = ?",
                    "options": [
                              "7",
                              "11",
                              "4",
                              "17"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(8+6)÷2 = 14÷2 = 7."
          }
]
      }
    }
  ]
};
