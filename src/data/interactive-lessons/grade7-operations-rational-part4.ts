export const g7RationalOpsPart4Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p4-intro',
      type: 'text' as const,
      content: `
# 🔢 Dividing Rational Numbers

**Part 4 of 7 — Dividing Rational Numbers**

Same sign rules as multiplication:
- Same signs → **positive**
- Different signs → **negative**

$(-12) \\div 4 = -3$
$(-15) \\div (-3) = 5$
    
    `
    },
    {
      id: 'grade7-operations-rational-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-8.4) \\div (-2.1) = 4$ (same signs → positive) ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-24) \\\\div 6 = ?$",
                    "options": [
                              "−4",
                              "4",
                              "−18",
                              "18"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different signs → negative: −4."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p4-input',
      type: 'input-boxes' as const,
      content: `
**Divide Rationals** 🧮

1) $(-24) \\div 6 = ?$

2) $(-36) \\div (-9) = ?$

3) $4.5 \\div (-1.5) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-4","4","-3"],
        hint1: "Different signs.",
        hint2: "Same signs.",
        hint3: "Different signs. 4.5/1.5 = 3.",
        explanation: "1) −4. 2) 4. 3) −3."
      }
    },
    {
      id: 'grade7-operations-rational-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Division by zero is","options":["Undefined","Zero","One","Infinity"]},{"label":"$(-1) \\\\div (-1) =$","options":["1","−1","0","−2"]}],
        correctAnswers: ["Undefined","1"],
        hint1: "You cannot divide by zero.",
        hint2: "Same signs.",
        explanation: "Division by 0 is undefined. (−1)÷(−1)=1."
      }
    },
    {
      id: 'grade7-operations-rational-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Sign |
|---|---------|------|
| 1 | $(-24) \\div 6$ | Negative |
| 2 | $(-36) \\div (-9)$ | Positive |
| 3 | $4.5 \\div (-1.5)$ | Negative |
    
    `
    },
    {
      id: 'grade7-operations-rational-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-36) \\\\div (-9) = ?$",
                    "options": [
                              "4",
                              "−4",
                              "45",
                              "−27"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same signs → positive: 4."
          }
]
      }
    }
  ]
};
