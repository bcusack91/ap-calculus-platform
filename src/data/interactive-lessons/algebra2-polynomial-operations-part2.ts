export const alg2PolynomialsPart2Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Multiplying Polynomials

**Part 2 of 7 — Multiplying Polynomials**

Use **FOIL** for binomials or **distribute** each term.

$(a+b)(c+d) = ac + ad + bc + bd$

**Special products:**
- $(a+b)^2 = a^2 + 2ab + b^2$
- $(a-b)(a+b) = a^2 - b^2$
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(2x + 3)(x - 4)$
$= 2x^2 - 8x + 3x - 12$
$= 2x^2 - 5x - 12$ ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x+2)(x+5) = ?$",
                    "options": [
                              "$x^2+7x+10$",
                              "$x^2+10x+7$",
                              "$2x+7$",
                              "$x^2+10$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "FOIL: $x^{2}+5x+2x+10$ = $x^{2}+7x+10$."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Multiply** 🧮

$(x+2)(x+5) = x^2 + ?x + ?$

1) Coefficient of x?

2) Constant term?

$(x+3)^2 = x^2 + 6x + ?$

3) Constant term?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7","10","9"],
        hint1: "5+2.",
        hint2: "5×2.",
        hint3: "$3^{2}$.",
        explanation: "1) 7. 2) 10. 3) 9."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"FOIL stands for","options":["First, Outer, Inner, Last","Factor, Order, Identify, List","Find, Observe, Insert, Learn","None of these"]},{"label":"$(a+b)(a-b) =$","options":["$a^2-b^2$","$a^2+b^2$","$2a$","$a^2-2ab+b^2$"]}],
        correctAnswers: ["First, Outer, Inner, Last","$a^2-b^2$"],
        hint1: "Method for multiplying binomials.",
        hint2: "Difference of squares.",
        explanation: "FOIL: First/Outer/Inner/Last. (a+b)(a−b)=$a^{2}-b^{2}$."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Product | Result |
|---|---------|--------|
| 1 | $(x+2)(x+5)$ | $x^2+7x+10$ |
| 2 | $(x+3)^2$ | $x^2+6x+9$ |
| 3 | $(x-4)(x+4)$ | $x^2-16$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x-4)(x+4) = ?$",
                    "options": [
                              "$x^2-16$",
                              "$x^2-8$",
                              "$x^2+16$",
                              "$2x$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Difference of squares: $a^{2}-b^{2}$ = $x^{2}-16$."
          }
]
      }
    }
  ]
};
