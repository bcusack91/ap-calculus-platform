export const alg2ExponentialPart5Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Log Properties

**Part 5 of 7 — Log Properties**

### Key Properties
1. **Product**: $\log_b(MN) = \log_b(M) + \log_b(N)$
2. **Quotient**: $\log_b\\left(\\frac{M}{N}\\right) = \log_b(M) - \log_b(N)$
3. **Power**: $\log_b(M^p) = p \\cdot \log_b(M)$
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\log_2(4 \\cdot 8) = \log_2(4) + \log_2(8) = 2 + 3 = 5$ ✅

Check: $4 \\times 8 = 32 = 2^5$ ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\log_2(4) + \\log_2(8) = ?$",
                    "options": [
                              "5",
                              "6",
                              "24",
                              "32"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2+3=5. Or $\\log_{2}(32)$=5."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Log Properties** 🧮

1) $\log_2(4) + \log_2(8) = ?$

2) $\log_{10}(100) - \log_{10}(10) = ?$

3) $\log_{10}(10^3) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","1","3"],
        hint1: "2 + 3.",
        hint2: "2 − 1.",
        hint3: "Power rule: bring down 3.",
        explanation: "1) 5. 2) 1. 3) 3."
      }
    },
    {
      id: 'algebra2-exponential-functions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$\\log(MN) =$","options":["$\\log(M) + \\log(N)$","$\\log(M) \\times \\log(N)$","$\\log(M) - \\log(N)$","$\\log(M^N)$"]},{"label":"$\\log(M/N) =$","options":["$\\log(M) - \\log(N)$","$\\log(M) + \\log(N)$","$\\log(M) / \\log(N)$","$\\log(M^N)$"]}],
        correctAnswers: ["$\\log(M) + \\log(N)$","$\\log(M) - \\log(N)$"],
        hint1: "Product rule.",
        hint2: "Quotient rule.",
        explanation: "Product: add logs. Quotient: subtract logs."
      }
    },
    {
      id: 'algebra2-exponential-functions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Property | Example |
|---|---------|--------|
| 1 | Product | $\\log(2)+\\log(5) = \\log(10) = 1$ |
| 2 | Quotient | $\\log(100)-\\log(10) = \\log(10) = 1$ |
| 3 | Power | $\\log(10^3) = 3$ |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\log_b(M^3)$ equals:",
                    "options": [
                              "$3\\log_b(M)$",
                              "$\\log_b(3M)$",
                              "$M^3$",
                              "$3M$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Power rule: exponent becomes coefficient."
          }
]
      }
    }
  ]
};
