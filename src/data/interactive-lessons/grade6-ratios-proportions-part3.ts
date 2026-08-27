export const g6RatiosPart3Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Unit Rates

**Part 3 of 7 — Unit Rates**

A **unit rate** has a denominator of 1.

Example: 150 miles in 3 hours → $\\frac{150}{3} = 50$ miles per hour

Key word: **"per"** (per hour, per pound, per item)
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**\\$12 for 4 pounds. Unit rate?**

$\\frac{12}{4} = 3$ → **\\$3 per pound** ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "240 miles in 4 hours. Speed?",
                    "options": [
                              "60 mph",
                              "240 mph",
                              "4 mph",
                              "960 mph"
                    ],
                    "correctAnswer": 0,
                    "explanation": "240 ÷ 4 = 60 mph."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Unit Rates** 🧮

1) 240 mi in 4 hours = ? mph

2) \\$45 for 9 items = \\$? per item

3) 180 words in 3 minutes = ? words per minute
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["60","5","60"],
        hint1: "240 ÷ 4.",
        hint2: "45 ÷ 9.",
        hint3: "180 ÷ 3.",
        explanation: "1) 60. 2) 5. 3) 60."
      }
    },
    {
      id: 'grade6-ratios-proportions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A unit rate always has what denominator?","options":["1","2","10","Any number"]},{"label":"To find a unit rate, you","options":["Divide","Multiply","Add","Subtract"]}],
        correctAnswers: ["1","Divide"],
        hint1: "\"Unit\" means one.",
        hint2: "Rate = total ÷ number of units.",
        explanation: "Unit rate → denominator 1. Calculate by dividing."
      }
    },
    {
      id: 'grade6-ratios-proportions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Unit Rate |
|---|---------|-----------|
| 1 | 240 mi in 4 hr | 60 mph |
| 2 | \\$45 for 9 items | \\$5/item |
| 3 | 180 words in 3 min | 60 wpm |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is the better deal: \\$6 for 3 or \\$10 for 4?",
                    "options": [
                              "\\$6 for 3 (\\$2 each)",
                              "\\$10 for 4 (\\$2.50 each)",
                              "They are equal",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\\$6/3 = \\$2 each vs \\$10/4 = \\$2.50 each."
          }
]
      }
    }
  ]
};
