export const preAlgOrderOpsPart2Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Parentheses & Exponents

**Part 2 of 7 — Parentheses & Exponents**

**Parentheses** first: work inside out.
**Exponents** second: evaluate powers.

$(3 + 2)^2 = 5^2 = 25$ (parentheses first, then exponent)
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(4 + 1)^2 - 3 = 5^2 - 3 = 25 - 3 = 22$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(2 + 3)^2 = ?$",
                    "options": [
                              "25",
                              "10",
                              "13",
                              "7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(5)² = 25."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Parentheses & Exponents** 🧮

1) $(2 + 3)^2 = ?$

2) $2(6 - 2) = ?$

3) $4^2 + 1 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["25","8","17"],
        hint1: "Inside first: 2+3=5.",
        hint2: "Inside first: 6−2=4.",
        hint3: "Exponent first: 4²=16.",
        explanation: "1) 25. 2) 8. 3) 17."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Parentheses are evaluated","options":["First (innermost out)","Last","After exponents","After multiplication"]},{"label":"$3^2$ means","options":["3 × 3","3 × 2","3 + 2","2 × 2 × 2"]}],
        correctAnswers: ["First (innermost out)","3 × 3"],
        hint1: "P comes first in PEMDAS.",
        hint2: "Base × base.",
        explanation: "Parentheses first. 3² = 3×3 = 9."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | (2+3)² | 25 |
| 2 | 2(6−2) | 8 |
| 3 | 4² + 1 | 17 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$2(6 - 2) = ?$",
                    "options": [
                              "8",
                              "10",
                              "16",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2(4) = 8."
          }
]
      }
    }
  ]
};
