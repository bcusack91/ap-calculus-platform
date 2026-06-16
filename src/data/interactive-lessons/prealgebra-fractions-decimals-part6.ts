export const preAlgFractionsPart6Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Solve problems involving fractions, decimals, and percents:
- Identify what form the answer should be in
- Choose the most efficient conversion
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Shirt: \\$40, 25% off. Sale price?**

Discount: \\$0.25 $\\times 40 = 10$. Sale price: \\$40 - 10 = \\$30 ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\\$60 shirt, 20% off. Sale price?",
                    "options": [
                              "\\$48",
                              "\\$40",
                              "\\$12",
                              "\\$80"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.20 × 60 = 12. 60 − 12 = \\$48."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) \\$60 shirt, 20% off. Sale price?

2) 15% tip on \\$80?

3) 42 out of 50. Percent?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["48","12","84"],
        hint1: "60 − 0.20(60).",
        hint2: "0.15 × 80.",
        hint3: "42÷50 × 100.",
        explanation: "1) 60−12=48. 2) 12. 3) 84."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A 25% discount means you pay","options":["75% of the price","25% of the price","The full price","125% of the price"]},{"label":"To find the sale price after a discount","options":["Subtract the discount from original price","Add the discount","Multiply by the discount","Divide by the discount"]}],
        correctAnswers: ["75% of the price","Subtract the discount from original price"],
        hint1: "100% − 25% = 75%.",
        hint2: "Original − discount amount.",
        explanation: "25% off → pay 75%. Sale = original − discount."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | \\$60, 20% off | \\$48 |
| 2 | Tip: 15% of \\$80 | \\$12 |
| 3 | Score: 42/50 as % | 84% |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "15% tip on \\$80?",
                    "options": [
                              "\\$12",
                              "\\$15",
                              "\\$80",
                              "\\$95"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.15 × 80 = \\$12."
          }
]
      }
    }
  ]
};
