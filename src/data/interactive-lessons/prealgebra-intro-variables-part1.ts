export const preAlgVariablesPart1Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p1-intro',
      type: 'text' as const,
      content: `
# 📐 What is a Variable?

**Part 1 of 7 — What is a Variable?**

A **variable** is a letter that represents an unknown number.

- $x + 5 = 12$ (x is unknown)
- Variables can represent any value
- Common letters: $x, y, n, a$
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**If a box of crayons has $n$ crayons, and you buy 3 boxes, total = $3n$.**

When $n = 24$: $3(24) = 72$ crayons ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"5 more than x\" as an expression?",
                    "options": [
                              "x + 5",
                              "5x",
                              "x − 5",
                              "5 − x"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\"More than\" means addition."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** 🧮

Let $x = 3$.

1) $x + 5 = ?$

2) $5x = ?$

3) $x$ itself = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","15","3"],
        hint1: "3 + 5.",
        hint2: "5 × 3.",
        hint3: "x = 3.",
        explanation: "1) 8. 2) 15. 3) 3."
      }
    },
    {
      id: 'prealgebra-intro-variables-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A variable is a letter that represents","options":["An unknown number","A specific number always","An operation","Nothing"]},{"label":"In 3x, the 3 is called the","options":["Coefficient","Variable","Constant","Exponent"]}],
        correctAnswers: ["An unknown number","Coefficient"],
        hint1: "Letters for unknowns.",
        hint2: "Number multiplied by the variable.",
        explanation: "Variable = unknown. Coefficient = number in front."
      }
    },
    {
      id: 'prealgebra-intro-variables-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Phrase | Expression |
|---|--------|------------|
| 1 | 5 more than x | x + 5 |
| 2 | 3 times n | 3n |
| 3 | y decreased by 7 | y − 7 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A variable is:",
                    "options": [
                              "A letter representing an unknown number",
                              "Always equal to x",
                              "A fixed number",
                              "An operation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Variables represent unknowns."
          }
]
      }
    }
  ]
};
