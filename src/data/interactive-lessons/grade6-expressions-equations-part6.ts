export const g6ExpressionsPart6Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply expressions and equations to real-world scenarios:
1. Define the variable
2. Write the equation
3. Solve
4. Check the answer
    
    `
    },
    {
      id: 'grade6-expressions-equations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A phone plan costs \\$15/month plus \\$0.10/text. Last month: \\$21. How many texts?**

\\$15 + 0.10t = 21
\\$0.10t = 6
$t = 60$ texts ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"I have $x$ dollars and earn $12 more, now I have $30.\" Equation?",
                    "options": [
                              "$x + 12 = 30$",
                              "$x - 12 = 30$",
                              "$12x = 30$",
                              "$x/12 = 30$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Start with x, add 12, equals 30."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Age in 5 years is 17. Current age?

2) 3 bags of apples = 24. Apples per bag?

3) Temperature drops 8° to 15°. Starting temp?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","8","23"],
        hint1: "x + 5 = 17.",
        hint2: "3x = 24.",
        hint3: "t − 8 = 15.",
        explanation: "1) 17−5=12. 2) 24÷3=8. 3) 15+8=23."
      }
    },
    {
      id: 'grade6-expressions-equations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"First step in solving a word problem is","options":["Define the variable","Guess the answer","Add all numbers","Draw a graph"]},{"label":"If 4 packs cost $20, one pack costs","options":["$5","$16","$24","$80"]}],
        correctAnswers: ["Define the variable","$5"],
        hint1: "What are you solving for?",
        hint2: "20 ÷ 4 = ?",
        explanation: "Define variable first. $20 ÷ 4 = $5."
      }
    },
    {
      id: 'grade6-expressions-equations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Equation |
|---|---------|----------|
| 1 | Age in 5 years is 17 | $x + 5 = 17$ |
| 2 | 3 bags of $x$ apples = 24 | $3x = 24$ |
| 3 | Temperature drops 8° to 15° | $t - 8 = 15$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $x + 5 = 17$:",
                    "options": [
                              "12",
                              "22",
                              "5",
                              "85"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$x = 17 - 5 = 12$."
          }
]
      }
    }
  ]
};
