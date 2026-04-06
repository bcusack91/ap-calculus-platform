export const g6RatiosPart5Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Percent Problems

**Part 5 of 7 — Percent Problems**

**Percent** means "per hundred." $25\% = \\frac{25}{100} = 0.25$

### Three Types
1. Find the part: $20\%$ of $50 = 0.20 \\times 50 = 10$
2. Find the percent: $\\frac{\\text{part}}{\\text{whole}} \\times 100$
3. Find the whole: $\\frac{\\text{part}}{\\text{percent}} \\times 100$
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**What is 30% of 80?**

$0.30 \\times 80 = 24$ ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is 15% of 200?",
                    "options": [
                              "30",
                              "15",
                              "300",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.15 × 200 = 30."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Percent Problems** 🧮

1) 25% of 60 = ?

2) 12 is what percent of 48? (number only)

3) 15 is 30% of what?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["15","25","50"],
        hint1: "0.25 × 60.",
        hint2: "12 ÷ 48 × 100.",
        hint3: "15 ÷ 0.30.",
        explanation: "1) 15. 2) 25%. 3) 50."
      }
    },
    {
      id: 'grade6-ratios-proportions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"50% is the same as","options":["One half","One quarter","One third","One fifth"]},{"label":"To find a percent of a number, multiply by","options":["The decimal form of the percent","The percent times the number twice","100","The whole number"]}],
        correctAnswers: ["One half","The decimal form of the percent"],
        hint1: "50/100 = ?",
        hint2: "Convert % to decimal first.",
        explanation: "50% = 1/2. Multiply by the decimal form."
      }
    },
    {
      id: 'grade6-ratios-proportions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | 25% of 60 | Find part |
| 2 | 12 is what % of 48? | Find percent |
| 3 | 15 is 30% of what? | Find whole |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "12 out of 48 is what percent?",
                    "options": [
                              "25%",
                              "12%",
                              "48%",
                              "4%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "12/48 = 0.25 = 25%."
          }
]
      }
    }
  ]
};
