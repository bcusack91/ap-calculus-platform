export const g6RatiosPart6Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply ratios, proportions, and percents to real-world problems:
- Best deals & unit pricing
- Scale drawings
- Sales tax & discounts
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A shirt is \$40 with 20% off. Sale price?**

Discount: $0.20 \times 40 = 8$
Sale price: $40 - 8 = 32$ → **\$32** ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$60 shirt, 25% off. Sale price?",
                    "options": [
                              "$45",
                              "$15",
                              "$42",
                              "$35"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Discount: 0.25 × 60 = 15. Sale: 60 − 15 = 45."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Real-World Problems** 🧮

1) \$60 shirt, 25% off. Sale price?

2) Recipe: 2 cups for 4 people. How many cups for 10 people?

3) Map: 1 in = 50 mi. How far is 3.5 inches?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["45","5","175"],
        hint1: "Discount = 0.25 × 60. Then subtract from 60.",
        hint2: "Proportion: 2/4 = x/10.",
        hint3: "3.5 × 50.",
        explanation: "1) 60−15=45. 2) 2×10÷4=5. 3) 175."
      }
    },
    {
      id: 'grade6-ratios-proportions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A 20% discount on $50 saves you","options":["$10","$20","$40","$5"]},{"label":"Unit rate helps you","options":["Compare prices","Add totals","Multiply quantities","Find averages"]}],
        correctAnswers: ["$10","Compare prices"],
        hint1: "0.20 × 50 = ?",
        hint2: "Price per unit lets you compare.",
        explanation: "0.20 × 50 = 10. Unit rate = comparison tool."
      }
    },
    {
      id: 'grade6-ratios-proportions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Concept |
|---|---------|---------|
| 1 | \$60 shirt, 25% off | Discount |
| 2 | Recipe: 2 cups for 4 people → cups for 10? | Proportion |
| 3 | Map: 1 in = 50 mi, 3.5 in = ? mi | Scale |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Map scale: 1 in = 50 mi. 3.5 in = ?",
                    "options": [
                              "175 mi",
                              "50 mi",
                              "350 mi",
                              "100 mi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3.5 × 50 = 175 miles."
          }
]
      }
    }
  ]
};
