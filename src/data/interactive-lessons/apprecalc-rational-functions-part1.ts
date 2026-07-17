export const apPrecalcRationalPart1Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Domain Restrictions

**Part 1 of 7 — Domain Restrictions**

A rational function is $f(x) = \\frac{p(x)}{q(x)}$ where $q(x) \\neq 0$.

**Domain**: all real numbers except where the denominator = 0.

Set $q(x) = 0$ and solve to find restrictions.
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \\frac{x+1}{x-3}$. Domain?**

$x - 3 = 0 \\Rightarrow x = 3$

Domain: all reals except $x = 3$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Domain restriction for 1/(x−5)?",
                    "options": [
                              "x ≠ 5",
                              "x ≠ −5",
                              "x ≠ 0",
                              "No restriction"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x−5=0 → x=5."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Domain Restrictions** 🧮

Find where denominator = 0:

1) $\\frac{1}{x-5}$. Restricted at $x = $ ?

2) $\\frac{x}{x+2}$. Restricted at $x = $ ?

3) $\\frac{1}{x^2-4}$. One restriction at $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","-2","2"],
        hint1: "x−5=0.",
        hint2: "x+2=0.",
        hint3: "$x^{2}-4$=(x−2)(x+2)=0.",
        explanation: "1) 5. 2) −2. 3) 2 (also −2)."
      }
    },
    {
      id: 'apprecalc-rational-functions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The domain of a rational function excludes values where","options":["The denominator equals zero","The numerator equals zero","The function equals zero","x is negative"]},{"label":"Division by zero is","options":["Undefined","Zero","Infinity","One"]}],
        correctAnswers: ["The denominator equals zero","Undefined"],
        hint1: "Cannot divide by zero.",
        hint2: "Not a number.",
        explanation: "Exclude denominator zeros. Division by zero is undefined."
      }
    },
    {
      id: 'apprecalc-rational-functions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Restriction |
|---|---------|----------|
| 1 | $\\frac{1}{x-5}$ | x ≠ 5 |
| 2 | $\\frac{x}{x+2}$ | x ≠ −2 |
| 3 | $\\frac{1}{x^2-4}$ | x ≠ ±2 |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "How many restrictions for $1/(x^{2}-4)$?",
                    "options": [
                              "2",
                              "1",
                              "0",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$x^{2}-4$=0 → x=±2."
          }
]
      }
    }
  ]
};
