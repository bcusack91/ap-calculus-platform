export const g6RatiosPart2Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Equivalent Ratios

**Part 2 of 7 — Equivalent Ratios**

Equivalent ratios have the same simplest form.

$2:3 = 4:6 = 6:9 = 8:12$

Multiply or divide both parts by the same number.
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Find an equivalent ratio to 3:5 with first term 12.**

$3 \\times 4 = 12$, so $5 \\times 4 = 20$.

$3:5 = 12:20$ ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is equivalent to 3:4?",
                    "options": [
                              "9:12",
                              "4:3",
                              "7:8",
                              "3:5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3×3=9, 4×3=12. So 3:4 = 9:12."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find Missing Values** 🧮

1) $2:7 = 6:?$

2) $5:3 = ?:12$

3) $4:9 = 8:?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["21","20","18"],
        hint1: "2 × 3 = 6, so 7 × 3 = ?",
        hint2: "3 × 4 = 12, so 5 × 4 = ?",
        hint3: "4 × 2 = 8, so 9 × 2 = ?",
        explanation: "1) 7×3=21. 2) 5×4=20. 3) 9×2=18."
      }
    },
    {
      id: 'grade6-ratios-proportions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To create an equivalent ratio, multiply both parts by","options":["The same number","Different numbers","Zero","Only the larger part"]},{"label":"6:10 simplified is","options":["3:5","2:5","6:10","1:2"]}],
        correctAnswers: ["The same number","3:5"],
        hint1: "Keep the relationship the same.",
        hint2: "GCF of 6 and 10 is 2.",
        explanation: "Same multiplier for both. 6÷2=3, 10÷2=5."
      }
    },
    {
      id: 'grade6-ratios-proportions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Ratio | Equivalent |
|---|-------|-----------|
| 1 | 2:7 = 6:? | 21 |
| 2 | 5:3 = ?:12 | 20 |
| 3 | 4:9 = 8:? | 18 |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$5:8 = 15:?$",
                    "options": [
                              "24",
                              "13",
                              "40",
                              "20"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5×3=15, 8×3=24."
          }
]
      }
    }
  ]
};
