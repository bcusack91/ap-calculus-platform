export const g7RationalOpsPart7Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Rules
- Add same signs: add, keep sign
- Add different signs: subtract, keep larger
- Subtract: add the opposite
- Multiply/Divide: same signs = +, different = −
- PEMDAS applies to all rational numbers
    
    `
    },
    {
      id: 'grade7-operations-rational-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-3)(4) + 8 \\div (-2) = -12 + (-4) = -16$ ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-5)(3) + 2 = ?$",
                    "options": [
                              "−13",
                              "−17",
                              "13",
                              "−7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−15 + 2 = −13."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $(-5)(3) + 2 = ?$

2) $12 \\div (-4) - 1 = ?$

3) $-2.5 + 3.7 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-13","-4","1.2"],
        hint1: "Multiply first, then add.",
        hint2: "Divide first, then subtract.",
        hint3: "Different signs: 3.7 − 2.5.",
        explanation: "1) −15+2=−13. 2) −3−1=−4. 3) 1.2."
      }
    },
    {
      id: 'grade7-operations-rational-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When doing $(-3)(2) + 5$, calculate the ____ first","options":["Multiplication","Addition","Subtraction","Nothing — go left to right"]},{"label":"$(-1)^4 =$","options":["1","−1","4","−4"]}],
        correctAnswers: ["Multiplication","1"],
        hint1: "PEMDAS: M before A.",
        hint2: "Even exponent of −1.",
        explanation: "Multiply first. $(-1)^{4}$ = 1."
      }
    },
    {
      id: 'grade7-operations-rational-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $(-5)(3) + 2$ | −13 |
| 2 | $12 \\div (-4) - 1$ | −4 |
| 3 | $-2.5 + 3.7$ | 1.2 |
    
    `
    },
    {
      id: 'grade7-operations-rational-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$12 \\\\div (-4) - 1 = ?$",
                    "options": [
                              "−4",
                              "−2",
                              "2",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−3 − 1 = −4."
          }
]
      }
    }
  ]
};
