export const g5DecimalsPart6Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply decimal skills to real-world problems:
- **Money**: Dollars and cents use decimals
- **Measurement**: Metric measurements (meters, liters, grams)
- **Science**: Temperature, dosages, distances
    
    `
    },
    {
      id: 'grade5-decimal-operations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A shirt costs \\$12.50 and tax is \\$0.94. Total?**

\\$12.50 + \\$0.94 = \\$13.44 → **\\$13.44** ✅

**Three friends split a \\$23.97 meal. Each pays?**

\\$23.97 ÷ 3 = \\$7.99 → **\\$7.99** ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "You buy 3 items at $4.25 each. Total cost?",
                    "options": [
                              "$12.75",
                              "$7.25",
                              "$12.25",
                              "$42.50"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3 × $4.25 = $12.75."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Gas: 12.5 gallons at \\$3.20/gal. Total cost?

2) \\$50 − \\$23.75 = ?

3) 5 items at \\$4.99 each. Total?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["40","26.25","24.95"],
        hint1: "12.5 × 3.20.",
        hint2: "Subtract: 50.00 − 23.75.",
        hint3: "5 × 4.99.",
        explanation: "1) 12.5×3.20=40.00. 2) 50.00−23.75=26.25. 3) 5×4.99=24.95."
      }
    },
    {
      id: 'grade5-decimal-operations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find the total cost of multiple items, you","options":["Multiply price × quantity","Divide price by quantity","Add all prices then multiply","Subtract"]},{"label":"If you pay $10 for a $3.80 item, your change is","options":["$6.20","$7.20","$6.80","$33.80"]}],
        correctAnswers: ["Multiply price × quantity","$6.20"],
        hint1: "Price per item × number of items.",
        hint2: "$10.00 − $3.80.",
        explanation: "Total = price × quantity. $10.00 − $3.80 = $6.20."
      }
    },
    {
      id: 'grade5-decimal-operations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Operation |
|---|---------|-----------|
| 1 | Gas: 12.5 gallons at \\$3.20/gal | Multiply |
| 2 | \\$50 − \\$23.75 change | Subtract |
| 3 | 5 items at \\$4.99 each | Multiply |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$10.00 − $3.47 = ?",
                    "options": [
                              "$6.53",
                              "$7.53",
                              "$6.47",
                              "$3.47"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$10.00 − $3.47 = $6.53."
          }
]
      }
    }
  ]
};
