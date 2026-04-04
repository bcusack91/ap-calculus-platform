export const apPrecalcPolyEndPart6Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all concepts:
- Identify degree, LC, end behavior
- Find zeros and y-intercept
- Determine turning points
- Sketch the graph
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = -x^3 + 4x$**

- Degree 3, LC = −1 → left ↑, right ↓
- $f(x) = -x(x^2-4) = -x(x-2)(x+2)$ → zeros: 0, 2, −2
- Max turning points: 2
- y-int: f(0) = 0 ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "End behavior of −2x⁴?",
                    "options": [
                              "Both ends down",
                              "Both ends up",
                              "Left up, right down",
                              "Left down, right up"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Even degree + negative LC → ↓↓."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-input',
      type: 'input-boxes' as const,
      content: `
**Combined Practice** 🧮

1) One zero of $x^2 - 1$?

2) The other zero of $x^2 - 1$?

3) Max turning points for degree 4?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","-1","3"],
        hint1: "x−1=0.",
        hint2: "x+1=0.",
        hint3: "4−1.",
        explanation: "1) 1. 2) −1. 3) 3."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"−2x⁴ has what end behavior?","options":["Both ends down","Both ends up","Opposite ends","Cannot tell"]},{"label":"x² − 1 factors as","options":["(x−1)(x+1)","(x−1)²","x(x−1)","Cannot factor"]}],
        correctAnswers: ["Both ends down","(x−1)(x+1)"],
        hint1: "Even + negative.",
        hint2: "Difference of squares.",
        explanation: "Even neg → both down. x²−1 = (x−1)(x+1)."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Problem |
|---|---------|------|
| 1 | End behavior | −2x⁴ |
| 2 | Zeros | x²−1 |
| 3 | Turning points | degree 4 |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Zeros of x²−1?",
                    "options": [
                              "x=1 and x=−1",
                              "x=1 only",
                              "x=0",
                              "No real zeros"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x−1)(x+1)=0."
          }
]
      }
    }
  ]
};
