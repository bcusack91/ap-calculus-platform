export const alg2ExponentialPart7Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- Growth: $y = a(1+r)^t$, Decay: $y = a(1-r)^t$
- Compound interest: $A = P(1+r/n)^{nt}$
- $\log_b(x) = y \iff b^y = x$
- Product/Quotient/Power rules for logs
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\log_3(27) + \log_3(9) = 3 + 2 = 5 = \log_3(243)$ ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$500(1.1)^2 = ?$",
                    "options": [
                              "605",
                              "600",
                              "550",
                              "510"
                    ],
                    "correctAnswer": 0,
                    "explanation": "500 × 1.21 = 605."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $500(1.1)^2 = ?$

2) $1000(0.5)^3 = ?$

3) $\log_3(27) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["605","125","3"],
        hint1: "500 × 1.21.",
        hint2: "1000 × 0.125.",
        hint3: "3³ = 27.",
        explanation: "1) 605. 2) 125. 3) 3."
      }
    },
    {
      id: 'algebra2-exponential-functions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$b > 1$ in $y = ab^x$ means","options":["Exponential growth","Exponential decay","Linear growth","No change"]},{"label":"$\\log_b(b) =$","options":["1","0","b","Undefined"]}],
        correctAnswers: ["Exponential growth","1"],
        hint1: "b > 1 → growing.",
        hint2: "b¹ = b.",
        explanation: "b>1 → growth. log_b(b) = 1."
      }
    },
    {
      id: 'algebra2-exponential-functions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Growth | 500(1.1)² |
| 2 | Decay | 1000(0.5)³ |
| 3 | Log | log₃(27) |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$1000(0.5)^3 = ?$",
                    "options": [
                              "125",
                              "500",
                              "250",
                              "62.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1000 × 0.125 = 125."
          }
]
      }
    }
  ]
};
