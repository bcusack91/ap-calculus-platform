export const apStatsDistributionsPart3Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Mean vs Median

**Part 3 of 7 — Mean vs Median**

- **Mean** ($\bar{x}$): sum of all values ÷ number of values. Sensitive to outliers.
- **Median**: middle value when data is ordered. Resistant to outliers.

Use **median** for skewed data; **mean** for symmetric data.
    
    `
    },
    {
      id: 'apstats-describing-distributions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Data: 2, 4, 6, 8, 100**

Mean = (2+4+6+8+100)/5 = 120/5 = 24
Median = 6 (middle value)

Median better represents the center — outlier (100) pulls mean. ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is resistant to outliers?",
                    "options": [
                              "Median",
                              "Mean",
                              "Range",
                              "Standard deviation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Median is not affected by extreme values."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Mean & Median** 🧮

1) Mean of 3, 5, 7?

2) Median of 3, 5, 7?

3) Mean of 10, 20, 30?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","5","20"],
        hint1: "(3+5+7)/3.",
        hint2: "Middle value.",
        hint3: "(10+20+30)/3.",
        explanation: "1) 15/3=5. 2) 5. 3) 60/3=20."
      }
    },
    {
      id: 'apstats-describing-distributions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For skewed data, the better measure of center is","options":["Median","Mean","Mode","Range"]},{"label":"The mean is pulled toward","options":["The tail/outliers","The center","Zero","The median"]}],
        correctAnswers: ["Median","The tail/outliers"],
        hint1: "Resistant measure.",
        hint2: "Extreme values pull it.",
        explanation: "Skewed → use median. Mean is pulled by outliers/tail."
      }
    },
    {
      id: 'apstats-describing-distributions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Data | Mean | Median |
|---|------|------|--------|
| 1 | 3, 5, 7 | 5 | 5 |
| 2 | 1, 2, 3, 4, 100 | 22 | 3 |
| 3 | 10, 20, 30 | 20 | 20 |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Mean of 3, 5, 7?",
                    "options": [
                              "5",
                              "3",
                              "7",
                              "15"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(3+5+7)/3 = 15/3 = 5."
          }
]
      }
    }
  ]
};
