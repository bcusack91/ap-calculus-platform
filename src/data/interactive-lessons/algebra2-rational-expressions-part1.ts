export const alg2RationalPart1Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Simplifying Rational Expressions

**Part 1 of 7 — Simplifying Rational Expressions**

A rational expression is a fraction with polynomials:
$\\frac{p(x)}{q(x)}$, $q(x) \\neq 0$

Simplify by **factoring** and canceling common factors.

$\\frac{x^2-4}{x+2} = \\frac{(x+2)(x-2)}{x+2} = x-2$
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{x^2-9}{x+3} = \\frac{(x+3)(x-3)}{x+3} = x-3$ ✅ (when $x \\neq -3$)
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{x^2-4}{x+2}$ simplifies to:",
                    "options": [
                              "$x-2$",
                              "$x+2$",
                              "$x^2-2$",
                              "$x-4$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Factor: (x+2)(x−2)/(x+2) = x−2."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Simplify** 🧮

$\\frac{x^2-4}{x+2} = x + ?$

1) The constant?

$\\frac{x^2-9}{x+3} = x + ?$

2) The constant?

$\\frac{x^2-1}{x-1} = x + ?$

3) The constant?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-2","-3","1"],
        hint1: "(x+2)(x−2)/(x+2).",
        hint2: "(x+3)(x−3)/(x+3).",
        hint3: "(x+1)(x−1)/(x−1).",
        explanation: "1) x−2. 2) x−3. 3) x+1."
      }
    },
    {
      id: 'algebra2-rational-expressions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To simplify a rational expression","options":["Factor and cancel common factors","Cross multiply","Add numerators","Flip the fraction"]},{"label":"A rational expression is undefined when the","options":["Denominator equals zero","Numerator equals zero","Expression is negative","Variable is large"]}],
        correctAnswers: ["Factor and cancel common factors","Denominator equals zero"],
        hint1: "Factor first.",
        hint2: "Division by zero.",
        explanation: "Factor then cancel. Undefined when denominator = 0."
      }
    },
    {
      id: 'algebra2-rational-expressions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Simplified |
|---|-----------|------------|
| 1 | $\\frac{x^2-4}{x+2}$ | $x-2$ |
| 2 | $\\frac{2x}{4x^2}$ | $\\frac{1}{2x}$ |
| 3 | $\\frac{x^2-1}{x-1}$ | $x+1$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "We cannot cancel terms that are:",
                    "options": [
                              "Added (only factors cancel)",
                              "Multiplied",
                              "In the numerator",
                              "In parentheses"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Only factors (multiplication) can cancel."
          }
]
      }
    }
  ]
};
