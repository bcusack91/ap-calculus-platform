export const alg2RationalPart7Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Simplify: factor and cancel
- Multiply: across, after factoring
- Divide: multiply by reciprocal
- Add/subtract: find LCD
- Complex fractions: multiply by reciprocal or LCD
- Equations: clear fractions, check for extraneous solutions
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{x^2-1}{x+1} = \\frac{(x+1)(x-1)}{x+1} = x - 1$ ✅
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{x^2-4}{x-2} = ?$",
                    "options": [
                              "$x+2$",
                              "$x-2$",
                              "$x^2-2$",
                              "$x+4$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x+2)(x−2)/(x−2) = x+2."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

$\\frac{x^2-4}{x-2} = x + ?$

1) The constant?

2) $\\frac{x}{4} = 5$. $x = ?$

3) $\\frac{1}{3} + \\frac{1}{6} = ?$ (decimal)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","20","0.5"],
        hint1: "(x+2)(x−2)/(x−2).",
        hint2: "4 × 5.",
        hint3: "2/6 + 1/6.",
        explanation: "1) 2. 2) 20. 3) 3/6=0.5."
      }
    },
    {
      id: 'algebra2-rational-expressions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Only ______ can be canceled in fractions","options":["Common factors","Common terms","Added terms","Constants"]},{"label":"Extraneous solutions must be","options":["Rejected","Accepted","Added","Doubled"]}],
        correctAnswers: ["Common factors","Rejected"],
        hint1: "Factors, not terms.",
        hint2: "They make denominator = 0.",
        explanation: "Cancel factors only. Reject extraneous solutions."
      }
    },
    {
      id: 'algebra2-rational-expressions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Simplify | $\\frac{x^2-4}{x-2}$ |
| 2 | Solve | $\\frac{x}{4} = 5$ |
| 3 | Add | $\\frac{1}{3}+\\frac{1}{6}$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{x}{4} = 5$. $x = ?$",
                    "options": [
                              "20",
                              "5/4",
                              "4/5",
                              "9"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x = 4 × 5 = 20."
          }
]
      }
    }
  ]
};
