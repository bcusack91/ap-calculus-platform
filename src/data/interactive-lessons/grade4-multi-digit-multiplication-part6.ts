export const g4MultiDigitMultPart6Data = {
  topicSlug: "multi-digit-multiplication-grade4",
  sections: [
    {
      id: 'grade4-multi-digit-multiplication-p6-intro',
      type: 'text' as const,
      content: `
# ✖️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Choose the best multiplication strategy for each problem:
- **Mental math**: multiples of 10, 100
- **Area model**: see partial products visually
- **Standard algorithm**: efficient for larger numbers
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$45 \\times 22 = ?$**

Strategy: Break apart 22 = 20 + 2.
- $45 \\times 20 = 900$
- $45 \\times 2 = 90$
- $900 + 90 = 990$ ✅
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Best strategy for $50 \\\\times 60$?",
                    "options": [
                              "Mental math: 5×6=30, add two zeros",
                              "Standard algorithm",
                              "Guess and check",
                              "Area model"
                    ],
                    "correctAnswer": 0,
                    "explanation": "50×60: multiply 5×6=30, add two zeros → 3,000."
          }
]
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem Solving** 🧮

1) $25 \\times 23 = ?$

2) $45 \\times 30 = ?$

3) 48 classrooms × 50 desks each. Total desks?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["575","1350","2400"],
        hint1: "25×20 + 25×3.",
        hint2: "45×3 = 135, then add a zero.",
        hint3: "48 × 50.",
        explanation: "1) 500+75=575. 2) 1,350. 3) 2,400."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For multiplying by 10, 20, 30, etc., use","options":["Mental math","Long division","A calculator","Guess and check"]},{"label":"$99 \\\\times 4 = 100(4) - 1(4) =$","options":["396","400","404","300"]}],
        correctAnswers: ["Mental math","396"],
        hint1: "Multiples of 10 are easy mental math.",
        hint2: "400 − 4 = ?",
        explanation: "Mental math for ×10s. 100(4)−4 = 396."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Best Strategy |
|---|---------|---------------|
| 1 | $25 \\times 40$ | Mental math (×10s) |
| 2 | $37 \\times 23$ | Standard algorithm |
| 3 | $99 \\times 5$ | Mental math: $100(5) - 1(5)$ |
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For $99 \\\\times 7$, a clever trick is:",
                    "options": [
                              "$100(7) - 1(7) = 693$",
                              "$99 + 7 = 106$",
                              "$90(7) + 9 = 639$",
                              "Round to 100 and stop"
                    ],
                    "correctAnswer": 0,
                    "explanation": "99×7 = 100(7) − 1(7) = 700 − 7 = 693."
          }
]
      }
    }
  ]
};
