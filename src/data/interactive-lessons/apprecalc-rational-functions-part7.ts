export const apPrecalcRationalPart7Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Domain: exclude den = 0
- VA: non-canceled den zeros
- HA: compare degrees ($n<d$: y=0; $n=d$: LC ratio; $n>d$: none)
- Holes: canceled common factors
- x-int: num = 0; y-int: f(0)
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$\\frac{3x+6}{x+2} = \\frac{3(x+2)}{x+2}$**

Common factor → hole at $x=-2$, simplified: $y = 3$
(Horizontal line with a hole) ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "HA of 2x/(3x+1)?",
                    "options": [
                              "y = 2/3",
                              "y = 2",
                              "y = 3",
                              "y = 0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Equal degrees → 2/3."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) VA of $\\frac{5}{x-4}$ at $x = $ ?

2) HA of $\\frac{2x}{3x+1}$ at $y = $ ? (round to hundredths)

3) Hole of $\\frac{x(x-1)}{x(x+3)}$ at $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","0.67","0"],
        hint1: "x−4=0.",
        hint2: "2/3.",
        hint3: "Common factor x.",
        explanation: "1) 4. 2) 0.67. 3) 0."
      }
    },
    {
      id: 'apprecalc-rational-functions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A rational function is a ratio of","options":["Polynomials","Integers","Constants","Exponents"]},{"label":"The graph of a rational function never ____ a vertical asymptote","options":["Crosses","Approaches","Is near","Is defined near"]}],
        correctAnswers: ["Polynomials","Crosses"],
        hint1: "p(x)/q(x).",
        hint2: "Undefined there.",
        explanation: "Rational = polynomial/polynomial. Cannot cross a VA."
      }
    },
    {
      id: 'apprecalc-rational-functions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | VA | $\\frac{5}{x-4}$ |
| 2 | HA | $\\frac{2x}{3x+1}$ |
| 3 | Hole | $\\frac{x(x-1)}{x(x+3)}$ |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Hole in x(x−1)/[x(x+3)]?",
                    "options": [
                              "x = 0",
                              "x = 1",
                              "x = −3",
                              "No hole"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Factor x cancels → hole at x=0."
          }
]
      }
    }
  ]
};
