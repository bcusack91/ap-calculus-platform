export const g8LinearPart7Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Function: one output per input
- Slope: $m = \frac{y_2-y_1}{x_2-x_1}$
- Slope-intercept: $y = mx + b$
- System solution: intersection point
    
    `
    },
    {
      id: 'grade8-linear-functions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Line through (1,4) and (3,10). Equation?**

$m = \frac{10-4}{3-1} = 3$. Then $4 = 3(1) + b \Rightarrow b = 1$.
$y = 3x + 1$ ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Slope of (2,3) and (5,9)?",
                    "options": [
                              "2",
                              "3",
                              "6",
                              "1/2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(9−3)/(5−2) = 6/3 = 2."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Slope of (2,3) and (5,9)?

2) $f(x) = 4x - 1$. $f(3) = ?$

3) $y = x+1$ and $y = 3x-5$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","11","3"],
        hint1: "(9−3)/(5−2).",
        hint2: "4(3) − 1.",
        hint3: "x+1 = 3x−5 → 6=2x.",
        explanation: "1) 6/3=2. 2) 11. 3) x=3."
      }
    },
    {
      id: 'grade8-linear-functions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"y = mx + b is called","options":["Slope-intercept form","Standard form","Point-slope form","Vertex form"]},{"label":"Two parallel lines have","options":["Same slope","Same intercept","Different slopes","Same everything"]}],
        correctAnswers: ["Slope-intercept form","Same slope"],
        hint1: "Slope + intercept.",
        hint2: "Parallel = same steepness.",
        explanation: "y=mx+b is slope-intercept form. Parallel lines share slope."
      }
    },
    {
      id: 'grade8-linear-functions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Slope | (2,3) and (5,9) |
| 2 | Evaluate | f(x)=4x−1, f(3) |
| 3 | System | y=x+1, y=3x−5 |
    
    `
    },
    {
      id: 'grade8-linear-functions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$f(x)=4x−1$. $f(3)=?$",
                    "options": [
                              "11",
                              "12",
                              "13",
                              "7"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4(3)−1 = 12−1 = 11."
          }
]
      }
    }
  ]
};
