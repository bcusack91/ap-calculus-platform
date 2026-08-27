export const g8LinearPart6Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply linear function skills:
- Model with equations
- Interpret slope as rate and intercept as starting value
- Solve real-world problems
    
    `
    },
    {
      id: 'grade8-linear-functions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Taxi: \\$3 base + \\$2/mile. Equation? Cost for 7 miles?**

$C = 2m + 3$. For 7 miles: $C = 2(7) + 3 = 17$ → **\\$17** ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Gym: \\$50 join + \\$30/mo. Cost after 6 months?",
                    "options": [
                              "$230",
                              "$180",
                              "$80",
                              "$480"
                    ],
                    "correctAnswer": 0,
                    "explanation": "30(6) + 50 = 180 + 50 = 230."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Gym: \\$50 + \\$30/month. Cost after 6 months?

2) Phone: \\$40 + \\$0.10/text. Cost for 500 texts?

3) Savings: \\$100 + \\$25/week. Total after 6 weeks?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["230","90","250"],
        hint1: "30(6) + 50.",
        hint2: "0.10(500) + 40.",
        hint3: "25(6) + 100.",
        explanation: "1) 180+50=230. 2) 50+40=90. 3) 150+100=250."
      }
    },
    {
      id: 'grade8-linear-functions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In C = mx + b, the slope m represents the","options":["Rate of change","Starting value","Total","Maximum"]},{"label":"The y-intercept b represents the","options":["Starting value","Rate","Slope","End value"]}],
        correctAnswers: ["Rate of change","Starting value"],
        hint1: "Slope = unit rate.",
        hint2: "At x=0.",
        explanation: "m = rate of change. b = starting value (initial amount)."
      }
    },
    {
      id: 'grade8-linear-functions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Equation |
|---|---------|----------|
| 1 | Gym: \\$50 join + \\$30/mo | C = 30m + 50 |
| 2 | Phone: \\$40/mo + \\$0.10/text | C = 0.10t + 40 |
| 3 | Savings: \\$100 + \\$25/week | S = 25w + 100 |
    
    `
    },
    {
      id: 'grade8-linear-functions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In C = 2m + 3, the slope 2 represents:",
                    "options": [
                              "Cost per mile",
                              "Starting cost",
                              "Total miles",
                              "Total cost"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Slope = rate = cost per mile."
          }
]
      }
    }
  ]
};
