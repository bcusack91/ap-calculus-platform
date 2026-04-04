export const apStatsDistributionsPart2Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Histograms & Dotplots

**Part 2 of 7 — Histograms & Dotplots**

- **Histogram**: bars show frequency of data in intervals (bins)
- **Dotplot**: dots stacked above a number line
- Both show the **shape** of the distribution
- Look for: clusters, gaps, outliers
    
    `
    },
    {
      id: 'apstats-describing-distributions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Dotplot: 1•, 2••, 3•••, 4••, 5•**

Frequencies: 1, 2, 3, 2, 1 → symmetric ✅
Total: 1+2+3+2+1 = 9 data points
    
    `
    },
    {
      id: 'apstats-describing-distributions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A histogram uses ____ to display data:",
                    "options": [
                              "Bars",
                              "Lines",
                              "Dots",
                              "Circles"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Bars represent frequency."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Frequencies: 1, 2, 3, 2, 1** 🧮

1) Total data points?

2) Most frequent value (mode)?

3) How many bins?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["9","3","5"],
        hint1: "1+2+3+2+1.",
        hint2: "Highest frequency.",
        hint3: "Count the groups.",
        explanation: "1) 9. 2) 3 (frequency of 3). 3) 5 bins."
      }
    },
    {
      id: 'apstats-describing-distributions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A histogram groups data into","options":["Intervals (bins)","Individual values","Categories","Ranks"]},{"label":"Gaps in a dotplot may suggest","options":["Separate groups or outliers","Normal distribution","Perfect data","No variation"]}],
        correctAnswers: ["Intervals (bins)","Separate groups or outliers"],
        hint1: "Ranges of values.",
        hint2: "Something unusual.",
        explanation: "Histograms use bins. Gaps → possible subgroups or outliers."
      }
    },
    {
      id: 'apstats-describing-distributions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Pattern | Shape |
|---|---------|-------|
| 1 | 1, 2, 3, 2, 1 | Symmetric |
| 2 | 5, 3, 2, 1 | Right-skewed |
| 3 | 1, 2, 3, 5 | Left-skewed |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "An outlier is a value that is:",
                    "options": [
                              "Far from the rest of the data",
                              "The most common value",
                              "The median",
                              "In the center"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Outlier = unusually far from other values."
          }
]
      }
    }
  ]
};
