export const g8LinearPart1Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Functions & Relations

**Part 1 of 7 — Functions & Relations**

A **function** assigns each input exactly **one** output.

Representations: mapping, table, graph, equation.

**Vertical Line Test**: if any vertical line crosses the graph more than once, it is **not** a function.
    
    `
    },
    {
      id: 'grade8-linear-functions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Is {(1,3), (2,5), (3,7), (1,4)} a function?**

Input 1 maps to 3 and 4 — two outputs. **Not a function.** ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is NOT a function?",
                    "options": [
                              "{(1,2),(1,3),(2,4)}",
                              "{(1,2),(2,3),(3,4)}",
                              "{(0,0),(1,1),(2,2)}",
                              "{(−1,1),(0,0),(1,1)}"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Input 1 has two outputs (2 and 3)."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Functions** 🧮

$f(x) = 2x + 1$

1) $f(2) = ?$

2) $f(3) = ?$

3) $f(4) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","7","9"],
        hint1: "2(2) + 1.",
        hint2: "2(3) + 1.",
        hint3: "2(4) + 1.",
        explanation: "1) 5. 2) 7. 3) 9."
      }
    },
    {
      id: 'grade8-linear-functions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A function gives each input","options":["Exactly one output","Two outputs","No output","Multiple outputs"]},{"label":"The vertical line test checks if a graph is a","options":["Function","Line","Parabola","Circle"]}],
        correctAnswers: ["Exactly one output","Function"],
        hint1: "One input → one output.",
        hint2: "VLT → function test.",
        explanation: "Function: one output per input. VLT checks this on graphs."
      }
    },
    {
      id: 'grade8-linear-functions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Set | Function? |
|---|-----|----------|
| 1 | (1,2),(2,4),(3,6) | Yes |
| 2 | (1,3),(1,5),(2,4) | No |
| 3 | (0,0),(1,1),(2,4) | Yes |
    
    `
    },
    {
      id: 'grade8-linear-functions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The vertical line test tells us:",
                    "options": [
                              "If a graph is a function",
                              "If a graph is linear",
                              "The slope",
                              "The y-intercept"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Vertical line test checks for functions."
          }
]
      }
    }
  ]
};
