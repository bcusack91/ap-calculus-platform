export const preAlgFractionsPart4Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Operations with Mixed Forms

**Part 4 of 7 — Operations with Mixed Forms**

When adding/subtracting fractions and decimals:
1. Convert everything to the **same form**
2. Then perform the operation

$\\frac{1}{2} + 0.3 = 0.5 + 0.3 = 0.8$
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{3}{4} + 0.5 = 0.75 + 0.5 = 1.25$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{1}{2} + 0.3 = ?$",
                    "options": [
                              "0.8",
                              "1.3",
                              "0.13",
                              "0.53"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.5 + 0.3 = 0.8."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p4-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Operations** 🧮

1) $\\frac{1}{2} + 0.3 = ?$

2) $0.75 - \\frac{1}{4} = ?$

3) $\\frac{1}{5} + 0.6 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.8","0.5","0.8"],
        hint1: "0.5 + 0.3.",
        hint2: "0.75 − 0.25.",
        hint3: "0.2 + 0.6.",
        explanation: "1) 0.8. 2) 0.5. 3) 0.8."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To add a fraction and a decimal","options":["Convert to the same form first","Just add numbers","Ignore the fraction","Use cross multiplication"]},{"label":"$\\frac{1}{4} + 0.25 =$","options":["0.5","0.5025","0.125","0.75"]}],
        correctAnswers: ["Convert to the same form first","0.5"],
        hint1: "Must be same type.",
        hint2: "0.25 + 0.25.",
        explanation: "Convert first, then operate. 0.25+0.25=0.5."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | $\\frac{1}{2} + 0.3$ | 0.8 |
| 2 | $0.75 - \\frac{1}{4}$ | 0.5 |
| 3 | $\\frac{1}{5} + 0.6$ | 0.8 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$0.75 - \\frac{1}{4} = ?$",
                    "options": [
                              "0.5",
                              "1.0",
                              "0.25",
                              "0.74"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.75 − 0.25 = 0.5."
          }
]
      }
    }
  ]
};
