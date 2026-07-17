export const alg2PolynomialsPart6Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Solve polynomial problems:
- Model with polynomial expressions
- Factor to find zeros
- Use the remainder theorem to test factors
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangle: length $(x+5)$, width $(x+2)$. Area?**

$A = (x+5)(x+2) = x^2 + 7x + 10$ ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Area of rectangle $(x+3)$ by $(x+4)$?",
                    "options": [
                              "$x^2+7x+12$",
                              "$2x+7$",
                              "$x^2+12$",
                              "$4x+12$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "FOIL: $x^{2}+4x+3x+12$."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

$(x+3)(x+4) = x^2 + ?x + ?$

1) Coefficient of x?

2) Constant?

$x^2 - 1 = (x+1)(x-?)$

3) The number?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7","12","1"],
        hint1: "3+4.",
        hint2: "3×4.",
        hint3: "Difference of squares: $1^{2}$=1.",
        explanation: "1) 7. 2) 12. 3) 1."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The zeros of a polynomial are where","options":["$p(x) = 0$","$p(x)$ is maximum","x = 0","The graph is steep"]},{"label":"Area of a rectangle is","options":["Length × Width","Length + Width","2(L+W)","$L^{2}$"]}],
        correctAnswers: ["$p(x) = 0$","Length × Width"],
        hint1: "x-intercepts.",
        hint2: "Area = LW.",
        explanation: "Zeros: p(x)=0. Area = L×W."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Expression |
|---|---------|--------|
| 1 | Area: $(x+3)(x+4)$ | $x^2+7x+12$ |
| 2 | Volume: $x(x+1)(x+2)$ | $x^3+3x^2+2x$ |
| 3 | Factor $x^2-1$ | $(x+1)(x-1)$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$x^2-1$ factors as:",
                    "options": [
                              "$(x+1)(x-1)$",
                              "$(x-1)^2$",
                              "$(x+1)^2$",
                              "Cannot factor"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Difference of squares."
          }
]
      }
    }
  ]
};
