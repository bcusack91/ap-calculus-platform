export const alg2PolynomialsPart3Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Factoring Review

**Part 3 of 7 — Factoring Review**

### Methods
1. **GCF**: Factor out the greatest common factor
2. **Trinomial**: $x^2 + bx + c = (x+m)(x+n)$ where $m+n=b$, $mn=c$
3. **Difference of squares**: $a^2-b^2=(a+b)(a-b)$
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$x^2 + 7x + 12 = ?$

Find $m, n$: $m + n = 7$, $mn = 12$ → $m = 3, n = 4$

$(x+3)(x+4)$ ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$x^2+5x+6 = ?$",
                    "options": [
                              "$(x+2)(x+3)$",
                              "$(x+1)(x+6)$",
                              "$(x+5)(x+1)$",
                              "$(x-2)(x-3)$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2+3=5, 2×3=6."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Factor** 🧮

$x^2 + 5x + 6 = (x+?)(x+?)$

1) Smaller number?

2) Larger number?

$x^2 - 9 = (x+?)(x-?)$

3) The number?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","3","3"],
        hint1: "Two numbers that add to 5 and multiply to 6.",
        hint2: "The other of those two numbers.",
        hint3: "√9.",
        explanation: "1) 2. 2) 3. 3) 3."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$a^2 - b^2$ factors as","options":["$(a+b)(a-b)$","$(a-b)^2$","$(a+b)^2$","Cannot be factored"]},{"label":"For $x^2+bx+c$, find two numbers that","options":["Add to b and multiply to c","Add to c and multiply to b","Both equal b","Both equal c"]}],
        correctAnswers: ["$(a+b)(a-b)$","Add to b and multiply to c"],
        hint1: "Difference of squares.",
        hint2: "m+n=b, mn=c.",
        explanation: "a²−b²=(a+b)(a−b). Trinomial: m+n=b, mn=c."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Factored |
|---|-----------|----------|
| 1 | $x^2+5x+6$ | $(x+2)(x+3)$ |
| 2 | $x^2-9$ | $(x+3)(x-3)$ |
| 3 | $2x^2+4x$ | $2x(x+2)$ |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$x^2-9 = ?$",
                    "options": [
                              "$(x+3)(x-3)$",
                              "$(x-9)(x+1)$",
                              "$(x-3)^2$",
                              "Cannot be factored"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Difference of squares: x²−3²."
          }
]
      }
    }
  ]
};
