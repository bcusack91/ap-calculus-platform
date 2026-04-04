export const alg2ExponentialPart1Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Exponential Growth

**Part 1 of 7 — Exponential Growth**

$y = a \cdot b^x \quad (b > 1)$

- $a$ = initial value
- $b$ = growth factor
- Growth rate $r$: $b = 1 + r$

Exponential growth: each step multiplies by $b$.
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Population: 500, grows 10% per year. After 3 years?**

$y = 500(1.10)^3 = 500(1.331) = 665.5$ ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Growth factor for 20% growth rate?",
                    "options": [
                              "1.2",
                              "0.2",
                              "20",
                              "1.02"
                    ],
                    "correctAnswer": 0,
                    "explanation": "b = 1 + 0.20 = 1.2."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Exponential Growth** 🧮

1) $100(1.2)^2 = ?$

2) $1000(1.5)^1 = ?$

3) $y = 2^x$. When $x = 3$, $y = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["144","1500","8"],
        hint1: "100 × 1.44.",
        hint2: "1000 × 1.5.",
        hint3: "2³.",
        explanation: "1) 144. 2) 1500. 3) 8."
      }
    },
    {
      id: 'algebra2-exponential-functions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Exponential growth has b","options":["Greater than 1","Less than 1","Equal to 1","Equal to 0"]},{"label":"The growth factor includes","options":["1 plus the rate","Just the rate","1 minus the rate","The rate squared"]}],
        correctAnswers: ["Greater than 1","1 plus the rate"],
        hint1: "b > 1 for growth.",
        hint2: "b = 1 + r.",
        explanation: "Growth: b > 1. Growth factor = 1 + rate."
      }
    },
    {
      id: 'algebra2-exponential-functions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Initial | Rate | Years | Formula |
|---|---------|------|-------|---------|
| 1 | 100 | 20% | 2 | 100(1.2)² |
| 2 | 200 | 5% | 3 | 200(1.05)³ |
| 3 | 1000 | 50% | 1 | 1000(1.5)¹ |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In $y = a \\cdot b^x$, $a$ represents:",
                    "options": [
                              "Initial value",
                              "Growth rate",
                              "Time",
                              "Final value"
                    ],
                    "correctAnswer": 0,
                    "explanation": "a = starting amount."
          }
]
      }
    }
  ]
};
