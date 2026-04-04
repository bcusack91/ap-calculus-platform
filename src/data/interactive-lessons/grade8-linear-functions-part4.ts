export const g8LinearPart4Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Comparing Functions

**Part 4 of 7 — Comparing Functions**

Compare functions using:
- **Rate of change** (slope)
- **Initial value** (y-intercept)
- **Tables, graphs, and equations**

The function with a greater slope grows faster.
    
    `
    },
    {
      id: 'grade8-linear-functions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Function A: $y = 3x + 1$. Function B: table (0,2),(1,4),(2,6).**

A: slope = 3, intercept = 1.
B: slope = (4−2)/(1−0) = 2, intercept = 2.

A grows faster (slope 3 > 2). B starts higher (intercept 2 > 1). ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which grows faster: $y=4x$ or $y=2x+5$?",
                    "options": [
                              "y = 4x",
                              "y = 2x + 5",
                              "They grow equally",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Slope 4 > slope 2."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Compare Slopes** 🧮

1) $y = 4x + 1$. Slope = ?

2) Table: (0,0), (1,3), (2,6). Slope = ?

3) $y = 5x - 2$. Slope = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","3","5"],
        hint1: "Coefficient of x.",
        hint2: "(3−0)/(1−0).",
        hint3: "Coefficient of x.",
        explanation: "1) 4. 2) 3. 3) 5."
      }
    },
    {
      id: 'grade8-linear-functions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The function with GREATER slope","options":["Increases faster","Starts higher","Is always larger","Has more points"]},{"label":"Two lines with the same slope are","options":["Parallel","Perpendicular","Identical","Intersecting"]}],
        correctAnswers: ["Increases faster","Parallel"],
        hint1: "Steeper = grows faster.",
        hint2: "Same slope = never intersect.",
        explanation: "Greater slope → faster increase. Same slope → parallel."
      }
    },
    {
      id: 'grade8-linear-functions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Comparison | Greater slope |
|---|-----------|---------------|
| 1 | y=4x vs y=2x+5 | y = 4x |
| 2 | y=x+10 vs y=3x | y = 3x |
| 3 | y=5x−1 vs y=5x+3 | Same slope |
    
    `
    },
    {
      id: 'grade8-linear-functions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$y=5x−1$ and $y=5x+3$ have:",
                    "options": [
                              "Same slope, different intercepts",
                              "Same intercept, different slopes",
                              "Nothing in common",
                              "Same everything"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Both have slope 5, different b values."
          }
]
      }
    }
  ]
};
