export const g7ProportionalPart5Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p5-intro',
      type: 'text' as const,
      content: `
# 📊 Percent Applications

**Part 5 of 7 — Percent Applications**

### Common Applications
- **Tax**: Price × tax rate
- **Tip**: Bill × tip rate
- **Discount**: Price × discount rate
- **Markup**: Cost × markup rate
- **Percent change**: $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Meal: \$45. Tip: 20%. Total?**

Tip: $0.20 \\times 45 = 9$. Total: $45 + 9 = 54$ → **\$54** ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$80 item + 10% tax. Total?",
                    "options": [
                              "$88",
                              "$80",
                              "$8",
                              "$90"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tax: 0.10 × 80 = 8. Total: 80 + 8 = 88."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p5-input',
      type: 'input-boxes' as const,
      content: `
**Percent Applications** 🧮

1) \$80 + 10% tax. Total?

2) \$60 with 25% off. Sale price?

3) Was \$40, now \$50. Percent increase?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["88","45","25"],
        hint1: "80 + 0.10(80).",
        hint2: "60 − 0.25(60).",
        hint3: "(50−40)/40 × 100.",
        explanation: "1) 80+8=88. 2) 60−15=45. 3) 10/40×100=25%."
      }
    },
    {
      id: 'grade7-proportional-relationships-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find tax on an item, multiply price by","options":["Tax rate as a decimal","Tax rate as a whole number","100","The price again"]},{"label":"A 20% discount on $100 saves you","options":["$20","$80","$120","$2"]}],
        correctAnswers: ["Tax rate as a decimal","$20"],
        hint1: "Convert percent to decimal.",
        hint2: "0.20 × 100.",
        explanation: "Tax = price × rate. 0.20 × 100 = $20 saved."
      }
    },
    {
      id: 'grade7-proportional-relationships-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | \$80, 10% tax | Tax |
| 2 | \$60, 25% off | Discount |
| 3 | Was \$40, now \$50 | % increase |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Price went from $40 to $50. Percent increase?",
                    "options": [
                              "25%",
                              "10%",
                              "20%",
                              "50%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(50−40)/40 × 100 = 25%."
          }
]
      }
    }
  ]
};
