export const g7ProportionalPart6Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply proportional reasoning:
- Unit rates and comparison shopping
- Scale models
- Percent change problems
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Store A: 5 for \\$12. Store B: 8 for \\$20. Which is cheaper?**

A: \\$12/5 = \\$2.40. B: \\$20/8 = \\$2.50. **Store A** is cheaper. ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "3 lb for \\$6 vs 5 lb for \\$9. Better deal?",
                    "options": [
                              "5 lb for $9",
                              "3 lb for $6",
                              "Same price",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\\$6/3=\\$2/lb vs \\$9/5=\\$1.80/lb. 5 lb is cheaper."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem Solving** 🧮

1) 5 lb for \\$9. Price per pound? (decimal)

2) Map: 2 in = 30 mi. 5 in = ? mi

3) Population: 200 → 250. Percent increase?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1.8","75","25"],
        hint1: "9 ÷ 5.",
        hint2: "Proportion: 2/30 = 5/x.",
        hint3: "(250−200)/200 × 100.",
        explanation: "1) 9÷5=1.8. 2) 5×15=75. 3) 50/200=25%."
      }
    },
    {
      id: 'grade7-proportional-relationships-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To compare prices, use","options":["Unit rate","Total cost only","Number of items only","Weight only"]},{"label":"Percent change formula","options":["(new−old)/old × 100","(old−new)/new × 100","new/old × 100","old − new"]}],
        correctAnswers: ["Unit rate","(new−old)/old × 100"],
        hint1: "Price per unit.",
        hint2: "Change divided by original.",
        explanation: "Unit rate for comparison. % change = (new−old)/old × 100."
      }
    },
    {
      id: 'grade7-proportional-relationships-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Method |
|---|---------|--------|
| 1 | 3 lb for \\$6 vs 5 lb for \\$9 | Unit rate |
| 2 | Map: 2 in = 30 mi, distance is 5 in | Scale |
| 3 | Population: 200→250. % change? | Formula |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Map: 2 in = 30 mi. 5 in = ?",
                    "options": [
                              "75 mi",
                              "150 mi",
                              "30 mi",
                              "60 mi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2:30 = 5:x → x = 75."
          }
]
      }
    }
  ]
};
