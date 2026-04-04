export const apStatsDistributionsPart4Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Standard Deviation

**Part 4 of 7 — Standard Deviation**

**Standard deviation** ($s$) measures how far values typically are from the mean.

$s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$

- Small $s$ → data clustered near mean
- Large $s$ → data spread out
- $s \geq 0$ always; $s = 0$ only when all values are identical
    
    `
    },
    {
      id: 'apstats-describing-distributions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Data: 2, 4, 6. Mean = 4.**

Deviations: −2, 0, 2. Squared: 4, 0, 4.
Sum = 8. Divide by $n-1 = 2$: variance = 4.
$s = \sqrt{4} = 2$ ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If all values equal 5, s = ?",
                    "options": [
                              "0",
                              "5",
                              "1",
                              "Undefined"
                    ],
                    "correctAnswer": 0,
                    "explanation": "No spread → s = 0."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Standard Deviation** 🧮

1) Mean of 2, 4, 6?

2) Standard deviation of 2, 4, 6?

3) Standard deviation of 5, 5, 5?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","2","0"],
        hint1: "(2+4+6)/3.",
        hint2: "Deviations: −2, 0, 2. Sum of squares: 8. Divide by 2.",
        hint3: "All values identical.",
        explanation: "1) 4. 2) √4=2. 3) 0."
      }
    },
    {
      id: 'apstats-describing-distributions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Standard deviation can never be","options":["Negative","Zero","Positive","Large"]},{"label":"A larger standard deviation means data is more","options":["Spread out","Clustered","Normal","Skewed"]}],
        correctAnswers: ["Negative","Spread out"],
        hint1: "Square root of non-negative.",
        hint2: "Further from mean.",
        explanation: "s ≥ 0. Larger s → more spread."
      }
    },
    {
      id: 'apstats-describing-distributions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Data | Mean | s |
|---|------|------|---|
| 1 | 2, 4, 6 | 4 | 2 |
| 2 | 5, 5, 5 | 5 | 0 |
| 3 | 1, 5, 9 | 5 | 4 |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Standard deviation measures:",
                    "options": [
                              "Spread from the mean",
                              "The center",
                              "The shape",
                              "The count"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Average distance from mean."
          }
]
      }
    }
  ]
};
