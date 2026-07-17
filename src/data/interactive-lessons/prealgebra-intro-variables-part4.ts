export const preAlgVariablesPart4Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Combining Like Terms

**Part 4 of 7 — Combining Like Terms**

**Like terms** have the same variable raised to the same power.

$3x + 5x = 8x$ ✅ (like terms)
$3x + 5y$ → cannot combine (different variables)
$2x^2 + 3x$ → cannot combine (different powers)
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$4x + 3 + 2x + 7 = (4x + 2x) + (3 + 7) = 6x + 10$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$5x + 3x = ?$",
                    "options": [
                              "8x",
                              "15x",
                              "53x",
                              "$8x^{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Add coefficients: 5+3 = 8."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p4-input',
      type: 'input-boxes' as const,
      content: `
**Combine Like Terms** 🧮

1) $5x + 3x = ?x$

2) $2y + 3y = ?y$

3) $7a - 2a = ?a$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","5","5"],
        hint1: "5 + 3.",
        hint2: "2 + 3.",
        hint3: "7 − 2.",
        explanation: "1) 8x. 2) 5y. 3) 5a."
      }
    },
    {
      id: 'prealgebra-intro-variables-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Like terms have the same","options":["Variable and exponent","Coefficient","Value","Number"]},{"label":"$3x + 5$ has how many terms?","options":["2","1","3","8"]}],
        correctAnswers: ["Variable and exponent","2"],
        hint1: "Match variable and power.",
        hint2: "3x is one term, 5 is another.",
        explanation: "Like terms: same variable and power. 3x+5 has 2 terms."
      }
    },
    {
      id: 'prealgebra-intro-variables-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Simplified |
|---|-----------|------------|
| 1 | 5x + 3x | 8x |
| 2 | 2y + 4 + 3y + 1 | 5y + 5 |
| 3 | 7a − 2a + 6 | 5a + 6 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which are like terms?",
                    "options": [
                              "3x and 7x",
                              "3x and 7y",
                              "3x and $3x^{2}$",
                              "3 and 3x"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same variable, same power."
          }
]
      }
    }
  ]
};
