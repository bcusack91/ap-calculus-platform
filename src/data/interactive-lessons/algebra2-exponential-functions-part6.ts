export const alg2ExponentialPart6Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply exponential and logarithmic skills:
- Doubling time problems
- Real-world decay (depreciation, radioactive)
- Solving exponential equations with logs
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$1000 at 8% annual. When does it double? (Rule of 72)**

$72 \div 8 = 9$ years (approximately) ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Rule of 72: doubling time at 6%?",
                    "options": [
                              "12 years",
                              "6 years",
                              "72 years",
                              "7.2 years"
                    ],
                    "correctAnswer": 0,
                    "explanation": "72 ÷ 6 = 12 years."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

1) Rule of 72: doubling at 6%. Years?

2) $1000(1.05)^2 = ?$

3) $\log_2(64) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","1102.5","6"],
        hint1: "72 ÷ 6.",
        hint2: "1000 × 1.1025.",
        hint3: "2 to what power equals 64?",
        explanation: "1) 12. 2) 1102.5. 3) 6."
      }
    },
    {
      id: 'algebra2-exponential-functions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The Rule of 72 estimates","options":["Doubling time","Half-life","Interest rate","Principal"]},{"label":"To solve $2^x = 64$, use","options":["Logarithms","Addition","Multiplication","Square roots"]}],
        correctAnswers: ["Doubling time","Logarithms"],
        hint1: "72/rate.",
        hint2: "Logs undo exponentials.",
        explanation: "Rule of 72: doubling time. Solve exponential equations with logs."
      }
    },
    {
      id: 'algebra2-exponential-functions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Doubling at 6%? | ~12 years |
| 2 | $1000 ×(1.05)² | 1102.5 |
| 3 | log₂(64) | 6 |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\log_2(64) = ?$",
                    "options": [
                              "6",
                              "8",
                              "32",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2⁶ = 64."
          }
]
      }
    }
  ]
};
