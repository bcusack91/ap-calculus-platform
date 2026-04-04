export const g7ProportionalPart3Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p3-intro',
      type: 'text' as const,
      content: `
# 📊 Graphing Proportions

**Part 3 of 7 — Graphing Proportions**

A proportional relationship graphs as a **straight line through the origin**.

The **slope** of the line = **k** (constant of proportionality).
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Graph y = 2x.**

Plot (0,0), (1,2), (2,4), (3,6). Connect → straight line through origin. ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A proportional graph always passes through:",
                    "options": [
                              "(0, 0)",
                              "(1, 0)",
                              "(0, 1)",
                              "(1, 1)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Proportional → through the origin."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p3-input',
      type: 'input-boxes' as const,
      content: `
**Graph Values** 🧮

1) $y = 3x$. When $x = 2$, $y = ?$

2) $y = 0.5x$. When $x = 4$, $y = ?$

3) $y = 4x$. When $x = 3$, $y = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","2","12"],
        hint1: "3 × 2.",
        hint2: "0.5 × 4.",
        hint3: "4 × 3.",
        explanation: "1) 6. 2) 2. 3) 12."
      }
    },
    {
      id: 'grade7-proportional-relationships-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The graph of y = kx is a","options":["Line through the origin","Curve","Horizontal line","Vertical line"]},{"label":"Slope of y = 3x is","options":["3","0","1/3","x"]}],
        correctAnswers: ["Line through the origin","3"],
        hint1: "y = kx → linear, through (0,0).",
        hint2: "Coefficient of x.",
        explanation: "y = kx → straight line through origin. Slope = k = 3."
      }
    },
    {
      id: 'grade7-proportional-relationships-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Equation | Points |
|---|---------|--------|
| 1 | y = 3x | (0,0), (1,3), (2,6) |
| 2 | y = 0.5x | (0,0), (2,1), (4,2) |
| 3 | y = 4x | (0,0), (1,4), (2,8) |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If a line through origin has slope 5, the equation is:",
                    "options": [
                              "y = 5x",
                              "y = x + 5",
                              "y = 5",
                              "x = 5y"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Through origin with slope k: y = kx."
          }
]
      }
    }
  ]
};
