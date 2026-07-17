export const apPrecalcPolyEndPart1Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Degree & Leading Coefficient

**Part 1 of 7 — Degree & Leading Coefficient**

- **Degree**: highest power of $x$
- **Leading coefficient**: coefficient of the highest-degree term
- These two values determine end behavior

Example: $f(x) = -3x^4 + 2x^2 - 1$ → degree 4, leading coefficient $-3$
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$g(x) = 5x^3 - x + 7$**

Degree = 3, Leading coefficient = 5 ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Degree of $7x^{4}$ − 3x + 2?",
                    "options": [
                              "4",
                              "7",
                              "3",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Highest power is 4."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-input',
      type: 'input-boxes' as const,
      content: `
**Identify Degree** 🧮

1) $2x^5 - x$. Degree?

2) $-x^2 + 3x$. Degree?

3) $4x^3 + x^2 - 1$. Leading coefficient?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","2","4"],
        hint1: "Highest exponent.",
        hint2: "Highest power is $x^{2}$.",
        hint3: "Coefficient of the $x^{3}$ term.",
        explanation: "1) 5. 2) 2. 3) 4."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The degree is determined by the","options":["Highest power of x","Number of terms","Leading coefficient","Constant term"]},{"label":"The leading coefficient is the coefficient of","options":["The highest-degree term","The first term written","The constant","The x term"]}],
        correctAnswers: ["Highest power of x","The highest-degree term"],
        hint1: "Biggest exponent.",
        hint2: "Attached to the highest power.",
        explanation: "Degree = highest power. Leading coeff = coeff of that term."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Polynomial | Degree | Leading Coeff |
|---|-----------|--------|---------------|
| 1 | $2x^5 - x$ | 5 | 2 |
| 2 | $-x^2 + 3x + 1$ | 2 | −1 |
| 3 | $4x^3 + x^2$ | 3 | 4 |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Leading coefficient of $-2x^{3}$ + 5x?",
                    "options": [
                              "−2",
                              "5",
                              "3",
                              "−3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Coefficient of $x^{3}$ term."
          }
]
      }
    }
  ]
};
