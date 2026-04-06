export const g5FractionOpsPart5Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p5-intro',
      type: 'text' as const,
      content: `
# 🔢 Word Problems with Fractions

**Part 5 of 7 — Word Problems**

### Clue Words
- **"of"** often means multiply: $\\frac{1}{3}$ **of** 12 → $\\frac{1}{3} \\times 12$
- **"How many groups?"** means divide
- **"shared equally"** means divide
    
    `
    },
    {
      id: 'grade5-fraction-operations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A recipe uses $\\frac{3}{4}$ cup flour. You triple it. How much flour?**

$3 \\times \\frac{3}{4} = \\frac{9}{4} = 2\\frac{1}{4}$ cups ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"1/4 of 20\" means:",
                    "options": [
                              "$\\\\frac{1}{4} \\\\times 20 = 5$",
                              "$\\\\frac{1}{4} + 20$",
                              "$20 - \\\\frac{1}{4}$",
                              "$20 \\\\div \\\\frac{1}{4}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\"Of\" means multiply: 1/4 × 20 = 5."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) $\\frac{1}{3}$ of 24 students went to the fair. How many?

2) $\\frac{2}{5}$ of a 10-meter rope. How many meters?

3) A jar has $\\frac{3}{4}$ liter. You buy 8 jars. How many liters total?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","4","6"],
        hint1: "(1/3) × 24.",
        hint2: "(2/5) × 10.",
        hint3: "(3/4) × 8.",
        explanation: "1) 24÷3=8. 2) 10×2÷5=4. 3) 3×8÷4=6."
      }
    },
    {
      id: 'grade5-fraction-operations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"Of\" in a fraction word problem means","options":["Multiply","Add","Divide","Subtract"]},{"label":"2/3 of 18 equals","options":["12","6","9","36"]}],
        correctAnswers: ["Multiply","12"],
        hint1: "\"Of\" signals an operation.",
        hint2: "(2/3) × 18.",
        explanation: "\"Of\" = multiply. 2×18÷3 = 12."
      }
    },
    {
      id: 'grade5-fraction-operations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Operation |
|---|---------|-----------|
| 1 | 1/3 of 24 students | Multiply |
| 2 | $\\frac{3}{4}$ pizza, share among 6 | Divide |
| 3 | Double $\\frac{2}{5}$ of a recipe | Multiply |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Share $\\\\frac{3}{4}$ lb among 3 people. Each gets:",
                    "options": [
                              "$\\\\frac{1}{4}$ lb",
                              "$\\\\frac{3}{12}$ lb",
                              "$\\\\frac{9}{4}$ lb",
                              "$2\\\\frac{1}{4}$ lb"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 lb."
          }
]
      }
    }
  ]
};
