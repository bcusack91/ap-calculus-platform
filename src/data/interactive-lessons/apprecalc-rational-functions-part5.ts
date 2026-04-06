export const apPrecalcRationalPart5Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Graphing Rational Functions

**Part 5 of 7 — Graphing Rational Functions**

Steps:
1. Find **domain restrictions** (den = 0)
2. Identify **holes** (cancel common factors)
3. Find **VAs** (remaining den zeros)
4. Find **HA** (compare degrees)
5. Find **x-intercepts** (num = 0) and **y-intercept** ($f(0)$)
6. Plot and connect
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \\frac{x+2}{x-1}$**

- No common factors → no holes
- VA: $x = 1$
- HA: $y = 1$ (equal degrees, 1/1)
- x-int: $x = -2$
- y-int: $f(0) = \\frac{2}{-1} = -2$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "x-intercept of x/(x−2)?",
                    "options": [
                              "x = 0",
                              "x = 2",
                              "x = −2",
                              "No x-int"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Numerator = 0 → x = 0."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Graph $\\frac{x}{x-2}$** 🧮

1) VA at $x = $ ?

2) HA at $y = $ ?

3) x-intercept at $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","1","0"],
        hint1: "x−2=0.",
        hint2: "Equal degrees: 1/1.",
        hint3: "Numerator = 0.",
        explanation: "1) VA: x=2. 2) HA: y=1. 3) x-int: x=0."
      }
    },
    {
      id: 'apprecalc-rational-functions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"x-intercepts are found by setting the ____ equal to zero","options":["Numerator","Denominator","Entire function","Leading coefficient"]},{"label":"The first step in graphing a rational function is to find","options":["Domain restrictions","The y-intercept","The end behavior","The turning points"]}],
        correctAnswers: ["Numerator","Domain restrictions"],
        hint1: "Top of the fraction.",
        hint2: "Where is it undefined?",
        explanation: "x-int: numerator=0. Start with domain restrictions."
      }
    },
    {
      id: 'apprecalc-rational-functions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | VA | HA | x-int |
|---|---------|----|----|-------|
| 1 | $\\frac{x}{x-2}$ | 2 | 1 | 0 |
| 2 | $\\frac{3}{x+1}$ | −1 | 0 | none |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "y-intercept of (x+2)/(x−1)?",
                    "options": [
                              "−2",
                              "2",
                              "1",
                              "−1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "f(0) = 2/(−1) = −2."
          }
]
      }
    }
  ]
};
