export const apPrecalcRationalPart4Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Holes in Graphs

**Part 4 of 7 — Holes in Graphs**

A **hole** occurs when a factor cancels from both numerator and denominator.

$f(x) = \\frac{(x-2)(x+1)}{(x-2)(x+3)}$

The $(x-2)$ cancels → hole at $x = 2$.

To find the y-value of the hole, substitute into the simplified function.
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \\frac{(x-2)(x+1)}{(x-2)(x+3)}$. Hole?**

Cancel $(x-2)$: simplified = $\\frac{x+1}{x+3}$

Hole at $x=2$: $y = \\frac{2+1}{2+3} = \\frac{3}{5} = 0.6$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Hole in (x−3)(x+1)/[(x−3)(x−1)]?",
                    "options": [
                              "x = 3",
                              "x = 1",
                              "x = −1",
                              "No hole"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x−3) cancels → hole at x=3."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Holes** 🧮

1) $\\frac{(x-3)(x+1)}{(x-3)(x-1)}$. Hole at $x = $ ?

2) $\\frac{x(x-5)}{x(x+2)}$. Hole at $x = $ ?

3) $\\frac{(x-2)(x+1)}{(x-2)(x+3)}$. y-value of hole?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","0","0.6"],
        hint1: "Common factor x−3.",
        hint2: "Common factor x.",
        hint3: "Plug x=2 into simplified form.",
        explanation: "1) 3. 2) 0. 3) 3/5=0.6."
      }
    },
    {
      id: 'apprecalc-rational-functions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A hole appears as","options":["An open circle on the graph","A vertical line","A horizontal line","A solid dot"]},{"label":"To find the y-coordinate of a hole, use","options":["The simplified function","The original function","The denominator only","x = 0"]}],
        correctAnswers: ["An open circle on the graph","The simplified function"],
        hint1: "Point is missing.",
        hint2: "After canceling.",
        explanation: "Hole = open circle. Find y using simplified function."
      }
    },
    {
      id: 'apprecalc-rational-functions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Hole at |
|---|---------|--------|
| 1 | $\\frac{(x-3)(x+1)}{(x-3)(x-1)}$ | x = 3 |
| 2 | $\\frac{x(x-5)}{x(x+2)}$ | x = 0 |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A hole occurs when a factor:",
                    "options": [
                              "Cancels from both num and den",
                              "Only appears in the denominator",
                              "Only appears in the numerator",
                              "Equals 1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Common factor cancels → hole."
          }
]
      }
    }
  ]
};
