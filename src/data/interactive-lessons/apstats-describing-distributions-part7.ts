export const apStatsDistributionsPart7Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Shape (symmetric/skewed), Center (mean/median), Spread (s, IQR, range)
- Mean: sensitive to outliers; Median: resistant
- Normal: 68-95-99.7 rule
- $s = 0$ when all values are equal
    
    `
    },
    {
      id: 'apstats-describing-distributions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Median of 10, 20, 30, 40, 50 = 30 (middle value)** ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Median of 4, 8, 12?",
                    "options": [
                              "8",
                              "4",
                              "12",
                              "24"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Middle value."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Median of 4, 8, 12?

2) Mean of 10, 20, 30?

3) μ=50, σ=5. Lower bound of 68% range?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","20","45"],
        hint1: "Middle value.",
        hint2: "60/3.",
        hint3: "50−5.",
        explanation: "1) 8. 2) 20. 3) 45."
      }
    },
    {
      id: 'apstats-describing-distributions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"IQR is calculated as","options":["Q3 − Q1","Max − Min","Mean − Median","σ²"]},{"label":"The median is the ____ percentile","options":["50th","25th","75th","100th"]}],
        correctAnswers: ["Q3 − Q1","50th"],
        hint1: "Interquartile range.",
        hint2: "Half above, half below.",
        explanation: "IQR = Q3−Q1. Median = 50th percentile."
      }
    },
    {
      id: 'apstats-describing-distributions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Median | 4, 8, 12 |
| 2 | Mean | 10, 20, 30 |
| 3 | 68% range | μ=50, σ=5 |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Mean of 10, 20, 30?",
                    "options": [
                              "20",
                              "10",
                              "30",
                              "60"
                    ],
                    "correctAnswer": 0,
                    "explanation": "60/3=20."
          }
]
      }
    }
  ]
};
