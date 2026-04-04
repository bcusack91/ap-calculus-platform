export const g4MultiDigitMultPart5Data = {
  topicSlug: "multi-digit-multiplication-grade4",
  sections: [
    {
      id: 'grade4-multi-digit-multiplication-p5-intro',
      type: 'text' as const,
      content: `
# ✖️ Multiplication Word Problems

**Part 5 of 7 — Word Problems**

Look for key words that signal multiplication:
- "each", "per", "every"
- "total", "altogether"
- "rows of", "groups of"
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A school has 24 classrooms with 28 desks each. Total desks?**

$24 \times 28 = 24(20) + 24(8) = 480 + 192 = 672$ ✅
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A bookshelf has 6 shelves with 14 books each. Which expression finds the total?",
                    "options": [
                              "$6 \\\\times 14$",
                              "$6 + 14$",
                              "$14 - 6$",
                              "$14 ÷ 6$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\"Each shelf has 14\" means multiply: 6 × 14."
          }
]
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) A box holds 12 crayons. How many in 8 boxes?

2) A classroom has 6 rows of 30 chairs. How many chairs?

3) A farmer plants 15 rows with 16 seeds each. Total seeds?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["96","180","240"],
        hint1: "12 × 8.",
        hint2: "6 × 30.",
        hint3: "15 × 16.",
        explanation: "1) 96. 2) 180. 3) 240."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"5 bags with 20 apples each\" means","options":["5 × 20 = 100 apples","5 + 20 = 25 apples","20 − 5 = 15 apples","20 ÷ 5 = 4 apples"]},{"label":"The word \"each\" in a problem usually signals","options":["Multiplication","Addition","Subtraction","Division"]}],
        correctAnswers: ["5 × 20 = 100 apples","Multiplication"],
        hint1: "Equal groups of the same size.",
        hint2: "\"Each\" means every one has the same amount.",
        explanation: "5 bags × 20 apples = 100. \"Each\" signals multiplication."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Expression |
|---|---------|------------|
| 1 | 12 crayons per box, 8 boxes | $12 \times 8$ |
| 2 | 6 rows of 30 chairs | $6 \times 30$ |
| 3 | 15 rows, 16 seeds each | $15 \times 16$ |
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A box has 15 candies. You have 12 boxes. Is \"15 + 12\" or \"15 × 12\" correct?",
                    "options": [
                              "$15 \\\\times 12$",
                              "$15 + 12$",
                              "It depends",
                              "Neither"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Equal groups → multiply. 15 × 12 = 180 candies."
          }
]
      }
    }
  ]
};
