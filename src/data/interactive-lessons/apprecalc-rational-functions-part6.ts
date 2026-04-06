export const apPrecalcRationalPart6Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all concepts for rational functions:
- Domain, VAs, HAs, holes
- Intercepts
- Sketch the graph
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \\frac{2x}{x^2-1} = \\frac{2x}{(x-1)(x+1)}$**

- VAs: $x = 1, x = -1$
- HA: $y = 0$ (degree 1 < degree 2)
- x-int: $x = 0$, y-int: $f(0) = 0$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "VA of (x−3)/(x+2)?",
                    "options": [
                              "x = −2",
                              "x = 3",
                              "x = 2",
                              "x = −3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x+2=0 → x=−2."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Analyze $\\frac{x-3}{x+2}$** 🧮

1) VA at $x = $ ?

2) HA at $y = $ ?

3) x-intercept at $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-2","1","3"],
        hint1: "x+2=0.",
        hint2: "LC ratio: 1/1.",
        hint3: "x−3=0.",
        explanation: "1) −2. 2) 1. 3) 3."
      }
    },
    {
      id: 'apprecalc-rational-functions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When numerator degree > denominator degree, there is","options":["No horizontal asymptote","HA at y=0","HA at y=1","Two HAs"]},{"label":"A rational function with no common factors has ____ holes","options":["Zero","One","Two","Infinite"]}],
        correctAnswers: ["No horizontal asymptote","Zero"],
        hint1: "n>d → oblique instead.",
        hint2: "No cancellation → no holes.",
        explanation: "n>d → no HA (oblique). No common factors → no holes."
      }
    },
    {
      id: 'apprecalc-rational-functions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Analysis |
|---|---------|----------|
| 1 | $\\frac{x-3}{x+2}$ | VA: −2, HA: 1 |
| 2 | $\\frac{4}{x^2}$ | VA: 0, HA: 0 |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "HA of (x−3)/(x+2)?",
                    "options": [
                              "y = 1",
                              "y = 0",
                              "y = −3",
                              "No HA"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Equal degrees → 1/1=1."
          }
]
      }
    }
  ]
};
