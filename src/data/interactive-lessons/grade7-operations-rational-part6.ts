export const g7RationalOpsPart6Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply rational number operations:
- Temperature changes
- Financial transactions
- Scientific measurements
    
    `
    },
    {
      id: 'grade7-operations-rational-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Temperature: -4.5°, rises 3.2°, drops 1.8°. Final temp?**

$-4.5 + 3.2 - 1.8 = -1.3 - 1.8 = -3.1$° ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Stock: +2.5 then −4.3. Net change?",
                    "options": [
                              "−1.8",
                              "6.8",
                              "1.8",
                              "−6.8"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2.5 + (−4.3) = −1.8."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Stock: up 2.5, down 4.3. Net change?

2) Temp: −8°F, rises 12°. New temp?

3) Owe \\$50, pay \\$32. Balance? (negative = debt)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-1.8","4","-18"],
        hint1: "2.5 − 4.3.",
        hint2: "−8 + 12.",
        hint3: "−50 + 32.",
        explanation: "1) −1.8. 2) 4. 3) −18."
      }
    },
    {
      id: 'grade7-operations-rational-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A gain in stock price is","options":["Positive","Negative","Zero","Neither"]},{"label":"When temperature drops, we","options":["Subtract","Add","Multiply","Divide"]}],
        correctAnswers: ["Positive","Subtract"],
        hint1: "Gain → positive change.",
        hint2: "Drops mean decreasing.",
        explanation: "Gain → positive. Drop → subtract."
      }
    },
    {
      id: 'grade7-operations-rational-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Expression |
|---|---------|------------|
| 1 | Stock: up 2.5, down 4.3 | $2.5 + (-4.3)$ |
| 2 | Temp: −8, rises 12 | $-8 + 12$ |
| 3 | Debt: owe 50, pay 32 | $-50 + 32$ |
    
    `
    },
    {
      id: 'grade7-operations-rational-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Owe \\$50, pay \\$32. Remaining debt?",
                    "options": [
                              "$18",
                              "$82",
                              "$50",
                              "$32"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\\$50 − \\$32 = \\$18 remaining."
          }
]
      }
    }
  ]
};
