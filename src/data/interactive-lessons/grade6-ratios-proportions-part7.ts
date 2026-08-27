export const g6RatiosPart7Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- **Ratio**: Simplify by GCF
- **Unit rate**: Divide to get denominator 1
- **Proportion**: Cross-multiply to solve
- **Percent**: Part = % × Whole
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$\\frac{x}{8} = \\frac{9}{12}$. Solve.**

Cross: $12x = 72$ → $x = 6$ ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "14:21 simplified:",
                    "options": [
                              "2:3",
                              "7:10",
                              "14:21",
                              "1:2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "GCF=7: 14÷7=2, 21÷7=3."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) 14:21 simplified = ?:3. First number?

2) \\$24 for 6 items = \\$? per item

3) $\\frac{x}{5} = \\frac{8}{10}$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","4","4"],
        hint1: "GCF of 14 and 21.",
        hint2: "24 ÷ 6.",
        hint3: "Cross-multiply: 10x = 40.",
        explanation: "1) 14÷7=2. 2) 24÷6=4. 3) 40÷10=4."
      }
    },
    {
      id: 'grade6-ratios-proportions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Cross-multiplication is used to solve","options":["Proportions","Equations with one variable","Inequalities","Polynomials"]},{"label":"10% of 250 is","options":["25","250","2.5","2500"]}],
        correctAnswers: ["Proportions","25"],
        hint1: "Two equal ratios.",
        hint2: "0.10 × 250.",
        explanation: "Cross-multiply for proportions. 0.10 × 250 = 25."
      }
    },
    {
      id: 'grade6-ratios-proportions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Simplify | 14:21 |
| 2 | Unit rate | $24 for 6 |
| 3 | Proportion | x/5 = 8/10 |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$24 for 6 items. Unit rate?",
                    "options": [
                              "$4 per item",
                              "$6 per item",
                              "$24 per item",
                              "$18 per item"
                    ],
                    "correctAnswer": 0,
                    "explanation": "24 ÷ 6 = $4."
          }
]
      }
    }
  ]
};
