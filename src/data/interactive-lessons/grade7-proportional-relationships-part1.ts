export const g7ProportionalPart1Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p1-intro',
      type: 'text' as const,
      content: `
# 📊 Identifying Proportions

**Part 1 of 7 — Identifying Proportions**

A proportional relationship has a **constant ratio** $\frac{y}{x} = k$.

In a table, check if all $\frac{y}{x}$ values are equal.
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

| x | 2 | 4 | 6 |
|---|---|---|---|
| y | 6 | 12 | 18 |

$\frac{6}{2} = 3$, $\frac{12}{4} = 3$, $\frac{18}{6} = 3$ → **proportional** ($k = 3$) ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which table shows a proportional relationship?",
                    "options": [
                              "(1,4), (2,8), (3,12)",
                              "(1,3), (2,5), (3,7)",
                              "(1,1), (2,3), (3,6)",
                              "(1,2), (2,6), (3,8)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "All ratios = 4: proportional."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p1-input',
      type: 'input-boxes' as const,
      content: `
**Find k** 🧮

1) (2, 6): k = y/x = ?

2) (4, 20): k = ?

3) (3, 12): k = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","5","4"],
        hint1: "6 ÷ 2.",
        hint2: "20 ÷ 4.",
        hint3: "12 ÷ 3.",
        explanation: "1) 3. 2) 5. 3) 4."
      }
    },
    {
      id: 'grade7-proportional-relationships-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A proportional relationship always passes through","options":["The origin (0,0)","(1,1)","(0,1)","No specific point"]},{"label":"If y/x varies, the relationship is","options":["Not proportional","Proportional","Linear","Exponential"]}],
        correctAnswers: ["The origin (0,0)","Not proportional"],
        hint1: "When x=0, y must be 0.",
        hint2: "Constant ratio is required.",
        explanation: "Proportional → through (0,0). Varying ratio → not proportional."
      }
    },
    {
      id: 'grade7-proportional-relationships-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Data | Proportional? |
|---|------|--------|
| 1 | (1,3), (2,6), (3,9) | Yes, k=3 |
| 2 | (1,2), (2,5), (3,8) | No |
| 3 | (2,10), (4,20), (6,30) | Yes, k=5 |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In $y = kx$, k is called the:",
                    "options": [
                              "Constant of proportionality",
                              "Slope only",
                              "Y-intercept",
                              "Coefficient"
                    ],
                    "correctAnswer": 0,
                    "explanation": "k = constant of proportionality."
          }
]
      }
    }
  ]
};
