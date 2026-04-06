export const g8LinearPart5Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Systems Introduction

**Part 5 of 7 — Systems Introduction**

A **system of equations** is two equations with two variables.

The **solution** is the point where both lines intersect.

Solving: graphing, substitution, or elimination.
    
    `
    },
    {
      id: 'grade8-linear-functions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$y = x + 1$ and $y = 2x - 1$.**

Set equal: $x + 1 = 2x - 1 \\Rightarrow 2 = x$. Then $y = 2 + 1 = 3$.

Solution: $(2, 3)$ ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Solution to $y=x$ and $y=2x−3$?",
                    "options": [
                              "(3,3)",
                              "(1,1)",
                              "(0,0)",
                              "(−3,−3)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x = 2x−3 → x = 3, y = 3."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Find X** 🧮

1) $y = x$ and $y = 2x - 3$. $x = ?$

2) $y = 3x + 1$ and $y = x + 5$. $x = ?$

3) $y = 2x$ and $y = x + 4$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","4"],
        hint1: "x = 2x − 3.",
        hint2: "3x+1 = x+5.",
        hint3: "2x = x+4.",
        explanation: "1) x=3. 2) 2x=4→x=2. 3) x=4."
      }
    },
    {
      id: 'grade8-linear-functions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The solution to a system is where lines","options":["Intersect","Are parallel","Touch the x-axis","Have the same slope"]},{"label":"If two lines have different slopes, they have","options":["Exactly one solution","No solution","Infinite solutions","Two solutions"]}],
        correctAnswers: ["Intersect","Exactly one solution"],
        hint1: "Lines cross at the solution.",
        hint2: "Different slopes → one crossing.",
        explanation: "Solution = intersection point. Different slopes → one solution."
      }
    },
    {
      id: 'grade8-linear-functions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | System | Solution |
|---|--------|---------|
| 1 | y=x, y=2x−3 | (3,3) |
| 2 | y=3x+1, y=x+5 | (2,7) |
| 3 | y=2x, y=x+4 | (4,8) |
    
    `
    },
    {
      id: 'grade8-linear-functions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A system with no solution means the lines are:",
                    "options": [
                              "Parallel",
                              "Perpendicular",
                              "Identical",
                              "Intersecting"
                    ],
                    "correctAnswer": 0,
                    "explanation": "No intersection = parallel lines."
          }
]
      }
    }
  ]
};
