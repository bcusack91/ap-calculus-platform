export const apPrecalcRationalPart2Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Vertical Asymptotes

**Part 2 of 7 — Vertical Asymptotes**

A **vertical asymptote** occurs at $x = a$ when:
- The denominator equals zero at $x = a$
- The factor does NOT cancel with the numerator

The graph approaches $\pm\infty$ near a vertical asymptote.
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \frac{2}{x-4}$. Vertical asymptote?**

$x - 4 = 0 \Rightarrow x = 4$

Vertical asymptote at $x = 4$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "VA of 1/(x−3)?",
                    "options": [
                              "x = 3",
                              "x = −3",
                              "x = 0",
                              "No VA"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Denominator zero at x=3."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Vertical Asymptotes** 🧮

1) $\frac{1}{x-3}$. VA at $x = $ ?

2) $\frac{x}{x+1}$. VA at $x = $ ?

3) $\frac{1}{(x-2)(x+5)}$. One VA at $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","-1","2"],
        hint1: "x−3=0.",
        hint2: "x+1=0.",
        hint3: "x−2=0.",
        explanation: "1) 3. 2) −1. 3) 2 (also −5)."
      }
    },
    {
      id: 'apprecalc-rational-functions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A vertical asymptote is a ____ line the graph approaches","options":["Vertical","Horizontal","Diagonal","Curved"]},{"label":"VAs occur where the denominator is zero and the factor","options":["Does not cancel","Cancels","Is positive","Is negative"]}],
        correctAnswers: ["Vertical","Does not cancel"],
        hint1: "x = constant.",
        hint2: "Non-canceling zero.",
        explanation: "VA = vertical line. Only if factor does not cancel."
      }
    },
    {
      id: 'apprecalc-rational-functions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | VA |
|---|---------|----|
| 1 | $\frac{1}{x-3}$ | x = 3 |
| 2 | $\frac{x}{x+1}$ | x = −1 |
| 3 | $\frac{1}{(x-2)(x+5)}$ | x = 2, x = −5 |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Near a vertical asymptote, the graph:",
                    "options": [
                              "Approaches ±∞",
                              "Crosses the axis",
                              "Becomes zero",
                              "Stays constant"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The function value grows without bound."
          }
]
      }
    }
  ]
};
