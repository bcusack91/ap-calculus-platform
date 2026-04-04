export const alg2PolynomialsPart1Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Adding & Subtracting Polynomials

**Part 1 of 7 — Adding & Subtracting Polynomials**

Combine **like terms** (same variable and exponent).

$(3x^2 + 2x) + (5x^2 - x) = 8x^2 + x$

For subtraction: distribute the negative sign first.
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(4x^2 + 3x - 1) - (2x^2 - x + 5)$
$= 4x^2 + 3x - 1 - 2x^2 + x - 5$
$= 2x^2 + 4x - 6$ ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(3x+2)+(5x+1) = ?$",
                    "options": [
                              "$8x+3$",
                              "$15x+3$",
                              "$8x+2$",
                              "$15x+2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3x+5x=8x. 2+1=3."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Add/Subtract Polynomials** 🧮

$(3x + 2) + (5x + 1)$

1) Coefficient of x?

2) Constant term?

$(2x^2 - 1) + (x^2 + 3)$

3) Constant term?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","3","2"],
        hint1: "3 + 5.",
        hint2: "2 + 1.",
        hint3: "−1 + 3.",
        explanation: "1) 8. 2) 3. 3) 2."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Like terms have the same","options":["Variable and exponent","Coefficient","Sign","Value"]},{"label":"To subtract polynomials","options":["Distribute the negative then combine like terms","Just subtract coefficients randomly","Multiply all terms","Ignore the second polynomial"]}],
        correctAnswers: ["Variable and exponent","Distribute the negative then combine like terms"],
        hint1: "Same variable, same power.",
        hint2: "Flip signs then add.",
        explanation: "Like terms: same variable and power. Subtract: distribute −1."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Operation | Result |
|---|----------|--------|
| 1 | $(3x+2)+(5x+1)$ | $8x+3$ |
| 2 | $(x^2+4x)-(3x-2)$ | $x^2+x+2$ |
| 3 | $(2x^2-1)+(x^2+3)$ | $3x^2+2$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "When subtracting polynomials, first:",
                    "options": [
                              "Distribute the negative sign",
                              "Add all terms",
                              "Multiply",
                              "Factor"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Distribute −1 to each term in the second polynomial."
          }
]
      }
    }
  ]
};
