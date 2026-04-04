export const g7RationalOpsPart1Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p1-intro',
      type: 'text' as const,
      content: `
# 🔢 Adding Rational Numbers

**Part 1 of 7 — Adding Rational Numbers**

Rational numbers include fractions, decimals, and integers.

### Adding Same Signs
Add absolute values, keep sign: $(-2.5) + (-1.3) = -3.8$

### Adding Different Signs
Subtract, keep sign of larger absolute value: $(-4) + 7 = 3$
    
    `
    },
    {
      id: 'grade7-operations-rational-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$-3.5 + 2.1 = ?$

$3.5 - 2.1 = 1.4$. Negative is larger: $-1.4$ ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$-2.4 + 5.1 = ?$",
                    "options": [
                              "2.7",
                              "−7.5",
                              "7.5",
                              "−2.7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5.1 − 2.4 = 2.7, positive wins."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p1-input',
      type: 'input-boxes' as const,
      content: `
**Add Rationals** 🧮

1) $-2.4 + 5.1 = ?$

2) $-3.7 + (-1.2) = ?$

3) $\frac{1}{4} + (-\frac{3}{4}) = ?$ (decimal)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2.7","-4.9","-0.5"],
        hint1: "5.1 − 2.4.",
        hint2: "−(3.7 + 1.2).",
        hint3: "1/4 − 3/4 = −2/4.",
        explanation: "1) 2.7. 2) −4.9. 3) −0.5."
      }
    },
    {
      id: 'grade7-operations-rational-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Adding two negative numbers gives","options":["A negative","A positive","Zero","Cannot tell"]},{"label":"$-5 + 5 =$","options":["0","10","−10","5"]}],
        correctAnswers: ["A negative","0"],
        hint1: "Same signs: keep sign.",
        hint2: "Opposites cancel.",
        explanation: "Neg + neg = neg. Opposites sum to 0."
      }
    },
    {
      id: 'grade7-operations-rational-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Rule |
|---|---------|------|
| 1 | $-2.4 + 5.1$ | Different signs |
| 2 | $-3.7 + (-1.2)$ | Same signs |
| 3 | $\frac{1}{4} + (-\frac{3}{4})$ | Different signs |
    
    `
    },
    {
      id: 'grade7-operations-rational-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$-\\\\frac{3}{4} + \\\\frac{1}{4} = ?$",
                    "options": [
                              "$-\\\\frac{1}{2}$",
                              "$\\\\frac{1}{2}$",
                              "$-1$",
                              "$1$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−3/4 + 1/4 = −2/4 = −1/2."
          }
]
      }
    }
  ]
};
