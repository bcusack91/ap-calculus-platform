export const preAlgFractionsPart5Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Real-World Applications

**Part 5 of 7 — Real-World Applications**

Fractions, decimals, and percents appear everywhere:
- **Shopping**: discounts, sales tax
- **Cooking**: recipe measurements
- **Grades**: test scores
- **Sports**: batting averages
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Test: 18 out of 20. What percent?**

$\frac{18}{20} = 0.9 = 90\%$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "15 out of 20 as a percent?",
                    "options": [
                              "75%",
                              "15%",
                              "20%",
                              "80%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "15/20 = 0.75 = 75%."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p5-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

1) 15/20 as a percent?

2) 30% of 50?

3) 18/20 as a percent?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["75","15","90"],
        hint1: "15 ÷ 20 × 100.",
        hint2: "0.30 × 50.",
        hint3: "18 ÷ 20 × 100.",
        explanation: "1) 75. 2) 15. 3) 90."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find a percent of a number","options":["Convert % to decimal and multiply","Just subtract the percent","Add the percent","Divide by the percent"]},{"label":"A batting average of .300 means","options":["30%","3%","300%","0.3%"]}],
        correctAnswers: ["Convert % to decimal and multiply","30%"],
        hint1: "Percent → decimal → multiply.",
        hint2: "0.300 = 30%.",
        explanation: "% of a number: convert and multiply. 0.300 = 30%."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | 15/20 as % | 75% |
| 2 | 30% of 50 | 15 |
| 3 | Recipe: half of 3/4 cup | 3/8 cup |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "30% of 50?",
                    "options": [
                              "15",
                              "30",
                              "50",
                              "1500"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.30 × 50 = 15."
          }
]
      }
    }
  ]
};
