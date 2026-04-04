export const g8LinearPart3Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Writing Linear Equations

**Part 3 of 7 — Writing Linear Equations**

**Slope-intercept form**: $y = mx + b$
- $m$ = slope
- $b$ = y-intercept

Given slope and a point, plug in to find $b$.
    
    `
    },
    {
      id: 'grade8-linear-functions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Slope 3, passes through (2, 10).**

$10 = 3(2) + b \Rightarrow 10 = 6 + b \Rightarrow b = 4$

$y = 3x + 4$ ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "In $y = 3x + 4$, the y-intercept is:",
                    "options": [
                              "4",
                              "3",
                              "7",
                              "−4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "b = 4 in y = mx + b."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Find b** 🧮

1) $m = 2$, point $(1, 5)$. $b = ?$

2) $m = -1$, point $(0, 4)$. $b = ?$

3) Points $(0, 2)$ and $(3, 8)$. $b = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","4","2"],
        hint1: "5 = 2(1) + b.",
        hint2: "Point (0,4) means b = 4.",
        hint3: "(0,2) → b = 2.",
        explanation: "1) 5−2=3. 2) 4. 3) 2."
      }
    },
    {
      id: 'grade8-linear-functions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In y = mx + b, m is the","options":["Slope","Y-intercept","X-intercept","Constant"]},{"label":"The y-intercept is the point where the line crosses the","options":["Y-axis","X-axis","Origin","Diagonal"]}],
        correctAnswers: ["Slope","Y-axis"],
        hint1: "m = rate of change.",
        hint2: "When x = 0.",
        explanation: "m = slope. Y-intercept: where line hits the y-axis."
      }
    },
    {
      id: 'grade8-linear-functions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Equation |
|---|-------|----------|
| 1 | m=2, (1,5) | y = 2x + 3 |
| 2 | m=−1, (0,4) | y = −x + 4 |
| 3 | (0,2) and (3,8) | y = 2x + 2 |
    
    `
    },
    {
      id: 'grade8-linear-functions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Line with m=2 through (1,5). What is b?",
                    "options": [
                              "3",
                              "5",
                              "2",
                              "7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5 = 2(1) + b → b = 3."
          }
]
      }
    }
  ]
};
