export const preAlgOrderOpsPart7Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### PEMDAS Order
1. **P**arentheses (innermost first)
2. **E**xponents
3. **M**ultiplication & **D**ivision (left to right)
4. **A**ddition & **S**ubtraction (left to right)
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$2(3 + 1)^2 - 5 \\times 2 = 2(4)^2 - 10 = 2(16) - 10 = 32 - 10 = 22$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$3 + 4 \\times 2 = ?$",
                    "options": [
                              "11",
                              "14",
                              "24",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4×2=8. 3+8=11."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $3 + 4 \\times 2 = ?$

2) $(3 + 4) \\times 2 = ?$

3) $2^3 - 1 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["11","14","7"],
        hint1: "Multiply first.",
        hint2: "Parentheses first.",
        hint3: "Exponent first: $2^{3}$=8.",
        explanation: "1) 11. 2) 14. 3) 7."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Parentheses change the answer because they","options":["Override the default order","Are decorative","Come last","Do nothing"]},{"label":"PEMDAS is used to","options":["Determine the order of operations","Solve equations only","Factor polynomials","Find variables"]}],
        correctAnswers: ["Override the default order","Determine the order of operations"],
        hint1: "Grouping overrides priority.",
        hint2: "Order of operations.",
        explanation: "Parentheses override order. PEMDAS determines operation order."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | 3+4×2 | 11 |
| 2 | (3+4)×2 | 14 |
| 3 | $2^{3}-1$ | 7 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(3 + 4) \\times 2 = ?$",
                    "options": [
                              "14",
                              "11",
                              "24",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(7)×2 = 14."
          }
]
      }
    }
  ]
};
