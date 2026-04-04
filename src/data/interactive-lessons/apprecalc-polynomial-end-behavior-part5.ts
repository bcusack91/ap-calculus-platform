export const apPrecalcPolyEndPart5Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Sketching Polynomials

**Part 5 of 7 — Sketching Polynomials**

Steps to sketch:
1. Find the **degree** and **leading coefficient** → end behavior
2. Find **zeros** and their multiplicities
3. Find the **y-intercept** ($f(0)$)
4. Plot key points and connect smoothly
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = x^2 - 4 = (x-2)(x+2)$**

- Degree 2, LC = 1 → both ends up
- Zeros: $x = 2, -2$ (mult 1 each → cross)
- y-int: $f(0) = -4$
- Parabola opening up ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "y-intercept of f(x) = x² − 9?",
                    "options": [
                              "−9",
                              "9",
                              "0",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "f(0) = 0 − 9 = −9."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-input',
      type: 'input-boxes' as const,
      content: `
**y-Intercepts** 🧮

Find $f(0)$:

1) $f(x) = x^2 - 9$

2) $f(x) = x^3 - x$

3) $f(x) = 2x^2 + 1$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-9","0","1"],
        hint1: "0² − 9.",
        hint2: "0³ − 0.",
        hint3: "2(0)² + 1.",
        explanation: "1) −9. 2) 0. 3) 1."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The y-intercept is found by setting","options":["x = 0","y = 0","f(x) = 0","x = 1"]},{"label":"Zeros are found by setting","options":["f(x) = 0","x = 0","f(x) = 1","x = y"]}],
        correctAnswers: ["x = 0","f(x) = 0"],
        hint1: "Evaluate at x=0.",
        hint2: "Where the function equals zero.",
        explanation: "y-intercept: x = 0. Zeros: f(x) = 0."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | y-intercept |
|---|---------|-------------|
| 1 | $x^2 - 9$ | −9 |
| 2 | $x^3 - x$ | 0 |
| 3 | $2x^2 + 1$ | 1 |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Zeros of x² − 4?",
                    "options": [
                              "x = 2 and x = −2",
                              "x = 4",
                              "x = 0",
                              "No real zeros"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x−2)(x+2) = 0."
          }
]
      }
    }
  ]
};
