export const alg2PolynomialsPart7Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Add/subtract: combine like terms
- Multiply: FOIL or distribute
- Factor: GCF, trinomial, difference of squares
- Divide: long or synthetic division
- Remainder theorem: $p(c)$ = remainder when $\\div (x-c)$
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$x^2 - 5x + 6 = (x-2)(x-3)$
Zeros: $x = 2, 3$ ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x+1)(x+6) = ?$",
                    "options": [
                              "$x^2+7x+6$",
                              "$x^2+6x+1$",
                              "$2x+7$",
                              "$x^2+6$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1+6=7, 1×6=6."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

$(x+1)(x+6) = x^2 + ?x + ?$

1) Coefficient of x?

2) Constant?

3) $p(x)=x^2-1$. $p(3) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7","6","8"],
        hint1: "1+6.",
        hint2: "1×6.",
        hint3: "9−1.",
        explanation: "1) 7. 2) 6. 3) 8."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"FOIL is used to multiply","options":["Two binomials","Any polynomials","Monomials","Constants"]},{"label":"The Factor Theorem says if $p(c)=0$ then","options":["$(x-c)$ is a factor","c is the degree","$(x+c)$ is the quotient","p has no real zeros"]}],
        correctAnswers: ["Two binomials","$(x-c)$ is a factor"],
        hint1: "Two terms × two terms.",
        hint2: "Zero remainder.",
        explanation: "FOIL: binomial × binomial. p(c)=0 → (x−c) is factor."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | FOIL | $(x+1)(x+6)$ |
| 2 | Factor | $x^2-5x+6$ |
| 3 | Evaluate | $p(x)=x^2-1$, $p(3)$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$p(x)=x^2-1$. $p(3)=?$",
                    "options": [
                              "8",
                              "10",
                              "2",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "9−1=8."
          }
]
      }
    }
  ]
};
