export const preAlgVariablesPart6Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Translate word problems to equations:
1. Identify the unknown → variable
2. Translate relationships → equation
3. Solve
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**"A number plus 8 equals 20. What is the number?"**

$n + 8 = 20$
$n = 12$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"5 more than x is 17.\" x = ?",
                    "options": [
                              "12",
                              "22",
                              "85",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x + 5 = 17 → x = 12."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) 5 more than x is 17. x = ?

2) Triple a number is 24. n = ?

3) x minus 9 equals 6. x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","8","15"],
        hint1: "x + 5 = 17.",
        hint2: "3n = 24.",
        hint3: "x − 9 = 6.",
        explanation: "1) 12. 2) 8. 3) 15."
      }
    },
    {
      id: 'prealgebra-intro-variables-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"Is\" or \"equals\" translates to","options":["=","+ ","×","≠"]},{"label":"\"Triple\" means multiply by","options":["3","2","4","1/3"]}],
        correctAnswers: ["=","3"],
        hint1: "Is/equals → equal sign.",
        hint2: "Triple = three times.",
        explanation: "\"Is\" → =. Triple → ×3."
      }
    },
    {
      id: 'prealgebra-intro-variables-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Equation | Answer |
|---|---------|----------|--------|
| 1 | 5 more than x is 17 | x+5=17 | x=12 |
| 2 | Triple a number is 24 | 3n=24 | n=8 |
| 3 | x minus 9 = 6 | x−9=6 | x=15 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "\"Triple a number is 24.\" The number?",
                    "options": [
                              "8",
                              "72",
                              "21",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3n = 24 → n = 8."
          }
]
      }
    }
  ]
};
