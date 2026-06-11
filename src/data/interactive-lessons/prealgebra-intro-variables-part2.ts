export const preAlgVariablesPart2Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Writing Expressions

**Part 2 of 7 — Writing Expressions**

Translate words to algebra:

| Word | Operation |
|------|-----------|
| sum, plus, more than | + |
| difference, minus, less than | − |
| product, times, of | × |
| quotient, divided by | ÷ |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**"The product of 4 and a number decreased by 7."**

$4n - 7$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"Twice a number plus 3\":",
                    "options": [
                              "2n + 3",
                              "2 + 3n",
                              "n + 6",
                              "2(n+3)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Twice = 2n, plus 3."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate Expressions** 🧮

Let $n = 5$.

1) $2n + 3 = ?$

2) $n \\div 5 + 1 = ?$

3) $4n - 14 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","2","6"],
        hint1: "2(5) + 3.",
        hint2: "5/5 + 1.",
        hint3: "4(5) − 14.",
        explanation: "1) 10+3=13. 2) 1+1=2. 3) 20−14=6."
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"The sum of a number and 8\" is","options":["n + 8","n − 8","8n","n/8"]},{"label":"\"Less than\" means to","options":["Subtract","Add","Multiply","Divide"]}],
        correctAnswers: ["n + 8","Subtract"],
        hint1: "Sum = addition.",
        hint2: "Less = take away.",
        explanation: "Sum → addition. Less than → subtraction."
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Phrase | Expression |
|---|--------|--------|
| 1 | Twice a number plus 3 | 2n + 3 |
| 2 | 10 less than x | x − 10 |
| 3 | A number divided by 5 | n/5 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "\"10 less than x\":",
                    "options": [
                              "x − 10",
                              "10 − x",
                              "x + 10",
                              "10x"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\"Less than\" subtracts from x."
          }
]
      }
    }
  ]
};
