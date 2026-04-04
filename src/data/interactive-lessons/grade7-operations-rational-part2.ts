export const g7RationalOpsPart2Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p2-intro',
      type: 'text' as const,
      content: `
# 🔢 Subtracting Rational Numbers

**Part 2 of 7 — Subtracting Rational Numbers**

Rule: **Add the opposite.**

$a - b = a + (-b)$

$3.5 - 7.2 = 3.5 + (-7.2) = -3.7$
    
    `
    },
    {
      id: 'grade7-operations-rational-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$-2.4 - (-5.1) = -2.4 + 5.1 = 2.7$ ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$4.3 - 6.8 = ?$",
                    "options": [
                              "$-2.5$",
                              "$2.5$",
                              "$11.1$",
                              "$-11.1$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4.3 + (−6.8) = −2.5."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p2-input',
      type: 'input-boxes' as const,
      content: `
**Subtract Rationals** 🧮

1) $4.3 - 6.8 = ?$

2) $-1.5 - 3.2 = ?$

3) $-7 - (-4) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-2.5","-4.7","-3"],
        hint1: "Add the opposite: 4.3 + (−6.8).",
        hint2: "−1.5 + (−3.2).",
        hint3: "−7 + 4.",
        explanation: "1) −2.5. 2) −4.7. 3) −3."
      }
    },
    {
      id: 'grade7-operations-rational-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Subtracting is the same as","options":["Adding the opposite","Multiplying","Dividing","Squaring"]},{"label":"$0 - (-3.5) =$","options":["3.5","−3.5","0","7"]}],
        correctAnswers: ["Adding the opposite","3.5"],
        hint1: "Add the opposite.",
        hint2: "0 + 3.5.",
        explanation: "Subtract = add opposite. 0−(−3.5)=3.5."
      }
    },
    {
      id: 'grade7-operations-rational-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Rewrite |
|---|---------|--------|
| 1 | $4.3 - 6.8$ | $4.3 + (-6.8)$ |
| 2 | $-1.5 - 3.2$ | $-1.5 + (-3.2)$ |
| 3 | $-7 - (-4)$ | $-7 + 4$ |
    
    `
    },
    {
      id: 'grade7-operations-rational-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$-7 - (-4) = ?$",
                    "options": [
                              "$-3$",
                              "$-11$",
                              "$3$",
                              "$11$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−7 + 4 = −3."
          }
]
      }
    }
  ]
};
