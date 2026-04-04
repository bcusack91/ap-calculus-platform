export const preAlgVariablesPart3Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Evaluating Expressions

**Part 3 of 7 — Evaluating Expressions**

To **evaluate** an expression:
1. Substitute the given value for the variable
2. Follow order of operations (PEMDAS)

$3x + 2$ when $x = 4$: $3(4) + 2 = 14$
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$2x^2 - 5$ when $x = 3$:

$2(3)^2 - 5 = 2(9) - 5 = 18 - 5 = 13$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$4x + 1$ when $x = 3$?",
                    "options": [
                              "13",
                              "12",
                              "43",
                              "15"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4(3) + 1 = 12 + 1 = 13."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p3-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** 🧮

1) $4x + 1$ when $x = 3$?

2) $x^2 + 2$ when $x = 5$?

3) $3x - 7$ when $x = 4$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","27","5"],
        hint1: "4(3) + 1.",
        hint2: "5² + 2.",
        hint3: "3(4) − 7.",
        explanation: "1) 13. 2) 27. 3) 5."
      }
    },
    {
      id: 'prealgebra-intro-variables-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To evaluate means to","options":["Find the value by substituting","Simplify without values","Guess the answer","Skip the variable"]},{"label":"When x=2, x² means","options":["2² = 4","2×2 = 4","2+2 = 4","All of these are equivalent"]}],
        correctAnswers: ["Find the value by substituting","All of these are equivalent"],
        hint1: "Substitute and calculate.",
        hint2: "x²=x×x.",
        explanation: "Evaluate: plug in and compute. x²=x×x."
      }
    },
    {
      id: 'prealgebra-intro-variables-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | x | Value |
|---|-----------|---|-------|
| 1 | 4x + 1 | 3 | 13 |
| 2 | x² + 2 | 5 | 27 |
| 3 | 3x − 7 | 4 | 5 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$x^2 + 2$ when $x = 5$?",
                    "options": [
                              "27",
                              "12",
                              "52",
                              "7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "25 + 2 = 27."
          }
]
      }
    }
  ]
};
