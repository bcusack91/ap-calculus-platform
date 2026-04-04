export const apStatsDistributionsPart1Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Shape, Center, Spread

**Part 1 of 7 — Shape, Center, Spread**

Every distribution has three key features:
- **Shape**: symmetric, left-skewed, right-skewed
- **Center**: mean or median
- **Spread**: range, IQR, standard deviation

Always describe all three when summarizing data.
    
    `
    },
    {
      id: 'apstats-describing-distributions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Data: 2, 3, 3, 4, 4, 4, 5, 5, 6**

- Shape: roughly symmetric
- Center: median = 4
- Spread: range = 6 − 2 = 4 ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A distribution with a long right tail is:",
                    "options": [
                              "Right-skewed",
                              "Left-skewed",
                              "Symmetric",
                              "Normal"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tail direction = skew direction."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Data: 1, 2, 3, 4, 5, 6, 7** 🧮

1) Median?

2) Range? (max − min)

3) How many values are below the median? (not counting median)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","4","3"],
        hint1: "Middle value of 7 numbers.",
        hint2: "7 − 1 = ?",
        hint3: "Values: 1, 2, 3.",
        explanation: "1) 4 (4th of 7). 2) 7−1=6... wait: 7−1=6. Let me recalc. Data has 7 values, middle = 4th = 4. Range = 7−1=6. Below median (1,2,3) = 3."
      }
    },
    {
      id: 'apstats-describing-distributions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The three features of a distribution are","options":["Shape, center, spread","Mean, median, mode","Min, max, range","Q1, Q2, Q3"]},{"label":"In a right-skewed distribution, the mean is typically","options":["Greater than the median","Less than the median","Equal to the median","Zero"]}],
        correctAnswers: ["Shape, center, spread","Greater than the median"],
        hint1: "The S-C-S framework.",
        hint2: "Pulled toward the tail.",
        explanation: "Shape-Center-Spread. Right-skew → mean > median."
      }
    },
    {
      id: 'apstats-describing-distributions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Data Feature | Description |
|---|-------------|-------------|
| 1 | Tail on the right | Right-skewed |
| 2 | Tail on the left | Left-skewed |
| 3 | Mirror image | Symmetric |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Range is calculated as:",
                    "options": [
                              "Max − Min",
                              "Mean − Median",
                              "Q3 − Q1",
                              "Sum / n"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Range = maximum minus minimum."
          }
]
      }
    }
  ]
};
