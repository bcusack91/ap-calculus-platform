export const g7ProportionalPart2Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Constant of Proportionality

**Part 2 of 7 — Constant of Proportionality**

The **constant of proportionality** $k = \\frac{y}{x}$.

Equation form: $y = kx$

Example: If $k = 3$, then $y = 3x$.
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Bananas cost \\$0.50 each. Write the equation.**

$\\text{Cost} = 0.50 \\times n$ → $C = 0.50n$, so $k = 0.50$ ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$y = 7x$. What is k?",
                    "options": [
                              "7",
                              "x",
                              "y",
                              "1/7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "In y = kx, k = 7."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find k** 🧮

1) \\$3 per pound. k = ?

2) 60 miles per hour. k = ?

3) Cost = \\$0.50 per banana. k = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","60","0.5"],
        hint1: "Price per pound.",
        hint2: "Miles per hour.",
        hint3: "Cost per banana.",
        explanation: "1) k=3. 2) k=60. 3) k=0.5."
      }
    },
    {
      id: 'grade7-proportional-relationships-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In y = kx, k represents the","options":["Rate or unit rate","Y-intercept","X-intercept","Exponent"]},{"label":"If y = 2x, when x = 5, y =","options":["10","7","25","2.5"]}],
        correctAnswers: ["Rate or unit rate","10"],
        hint1: "k = rate of change.",
        hint2: "y = 2(5).",
        explanation: "k = unit rate. y = 2(5) = 10."
      }
    },
    {
      id: 'grade7-proportional-relationships-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | k |
|---|---------|---|
| 1 | \\$3 per lb | 3 |
| 2 | 60 mph | 60 |
| 3 | 5 pages/min | 5 |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If 3 items cost $12, the constant of proportionality is:",
                    "options": [
                              "4",
                              "3",
                              "12",
                              "36"
                    ],
                    "correctAnswer": 0,
                    "explanation": "k = 12/3 = 4 (dollars per item)."
          }
]
      }
    }
  ]
};
