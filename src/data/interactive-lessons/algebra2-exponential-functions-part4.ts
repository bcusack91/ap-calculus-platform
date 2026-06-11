export const alg2ExponentialPart4Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Logarithms Introduction

**Part 4 of 7 — Logarithms Introduction**

A **logarithm** is the inverse of an exponential.

$\log_b(x) = y \iff b^y = x$

$\\log_2(8) = 3$ because $2^3 = 8$

**Common log**: $\\log(x) = \log_{10}(x)$
**Natural log**: $\ln(x) = \log_e(x)$
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\log_3(81) = ?$

$3^? = 81$. Since $3^4 = 81$, $\log_3(81) = 4$ ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\log_2(16) = ?$",
                    "options": [
                              "4",
                              "8",
                              "2",
                              "16"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2⁴ = 16, so log₂(16) = 4."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate Logs** 🧮

1) $\log_2(16) = ?$

2) $\log_5(25) = ?$

3) $\log_{10}(1000) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","2","3"],
        hint1: "2 to what power = 16?",
        hint2: "5 to what power = 25?",
        hint3: "10 to what power = 1000?",
        explanation: "1) 2⁴=16→4. 2) 5²=25→2. 3) 10³=1000→3."
      }
    },
    {
      id: 'algebra2-exponential-functions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A logarithm is the inverse of","options":["An exponential","Addition","Multiplication","A polynomial"]},{"label":"$\\log_b(1) =$","options":["0","1","b","Undefined"]}],
        correctAnswers: ["An exponential","0"],
        hint1: "Logs undo exponentials.",
        hint2: "b⁰ = 1 for any b.",
        explanation: "Logs are inverse of exponentials. log_b(1) = 0."
      }
    },
    {
      id: 'algebra2-exponential-functions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Log | Value |
|---|-----|-------|
| 1 | $\log_2(16)$ | 4 |
| 2 | $\log_5(25)$ | 2 |
| 3 | $\log_{10}(1000)$ | 3 |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\log_b(x) = y$ means:",
                    "options": [
                              "$b^y = x$",
                              "$x^y = b$",
                              "$y^b = x$",
                              "$b^x = y$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Log definition: b^y = x."
          }
]
      }
    }
  ]
};
