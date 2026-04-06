export const alg2PolynomialsPart4Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Polynomial Division

**Part 4 of 7 — Polynomial Division**

**Long division** or **synthetic division** (for divisor $x - c$).

$\\frac{x^2 + 3x + 2}{x + 1} = x + 2$
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(x^2 + 5x + 6) \div (x + 2)$

$= x + 3$ (since $(x+2)(x+3) = x^2+5x+6$) ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x^2+3x+2) \\div (x+1) = ?$",
                    "options": [
                              "$x+2$",
                              "$x+3$",
                              "$x+1$",
                              "$x^2+2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x+1)(x+2) = x²+3x+2."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Polynomial Division** 🧮

1) $(x^2+3x+2)÷(x+1) = x + ?$

2) $(x^2+5x+6)÷(x+2) = x + ?$

3) $(2x^2+6x)÷(2x) = x + ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","3","3"],
        hint1: "Factor x²+3x+2.",
        hint2: "Factor x²+5x+6.",
        hint3: "Factor out 2x.",
        explanation: "1) x+2. 2) x+3. 3) x+3."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"If $(x+a)$ divides $p(x)$ evenly, then","options":["$p(-a) = 0$","$p(a) = 0$","$a = 0$","The degree decreases by 2"]},{"label":"Polynomial long division is similar to","options":["Long division with numbers","Addition","Factoring","Graphing"]}],
        correctAnswers: ["$p(-a) = 0$","Long division with numbers"],
        hint1: "Factor theorem.",
        hint2: "Same algorithm.",
        explanation: "(x+a)|p(x) → p(−a)=0. Same process as numerical long division."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Division | Quotient |
|---|---------|----------|
| 1 | $(x^2+3x+2)÷(x+1)$ | $x+2$ |
| 2 | $(x^2+5x+6)÷(x+2)$ | $x+3$ |
| 3 | $(2x^2+6x)÷(2x)$ | $x+3$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Synthetic division can be used when dividing by:",
                    "options": [
                              "$x - c$ (linear)",
                              "Any polynomial",
                              "Quadratics only",
                              "Constants only"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Synthetic division works with linear divisors."
          }
]
      }
    }
  ]
};
