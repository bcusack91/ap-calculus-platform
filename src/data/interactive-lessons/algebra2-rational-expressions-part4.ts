export const alg2RationalPart4Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Complex Fractions

**Part 4 of 7 — Complex Fractions**

A **complex fraction** has fractions in the numerator, denominator, or both.

$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \cdot \\frac{d}{c} = \\frac{ad}{bc}$

Alternatively: multiply top and bottom by the LCD.
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{\\frac{1}{2}}{\\frac{3}{4}} = \\frac{1}{2} \\times \\frac{4}{3} = \\frac{4}{6} = \\frac{2}{3}$ ✅
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{\\frac{2}{3}}{\\frac{4}{9}} = ?$",
                    "options": [
                              "$\\frac{3}{2}$",
                              "$\\frac{8}{27}$",
                              "$\\frac{2}{3}$",
                              "$6$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(2/3)(9/4) = 18/12 = 3/2."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Simplify Complex Fractions** 🧮 (decimal answers)

1) $\\frac{\\frac{2}{3}}{\\frac{4}{9}} = ?$

2) $\\frac{\\frac{1}{x}}{\\frac{2}{x}} = ?$

3) $\\frac{3}{\\frac{6}{5}} = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1.5","0.5","2.5"],
        hint1: "(2/3) × (9/4).",
        hint2: "(1/x) × (x/2).",
        hint3: "3 × (5/6).",
        explanation: "1) 18/12=1.5. 2) 1/2=0.5. 3) 15/6=2.5."
      }
    },
    {
      id: 'algebra2-rational-expressions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A complex fraction has","options":["Fractions within fractions","Only whole numbers","No denominator","Imaginary numbers"]},{"label":"The key strategy for complex fractions is","options":["Multiply by the reciprocal","Cross multiply","Add numerators","Ignore the inner fractions"]}],
        correctAnswers: ["Fractions within fractions","Multiply by the reciprocal"],
        hint1: "Fractions in the numerator or denominator.",
        hint2: "Flip and multiply.",
        explanation: "Complex: fractions within fractions. Multiply by reciprocal."
      }
    },
    {
      id: 'algebra2-rational-expressions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Complex Fraction | Simplified |
|---|-----------------|----------|
| 1 | $\\frac{\\frac{2}{3}}{\\frac{4}{9}}$ | $\\frac{3}{2}$ |
| 2 | $\\frac{\\frac{1}{x}}{\\frac{2}{x}}$ | $\\frac{1}{2}$ |
| 3 | $\\frac{3}{\\frac{6}{5}}$ | $\\frac{5}{2}$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "To simplify a complex fraction:",
                    "options": [
                              "Multiply by the reciprocal of the denominator fraction",
                              "Add top and bottom",
                              "Subtract",
                              "Square both parts"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Main fraction ÷ bottom = multiply by reciprocal."
          }
]
      }
    }
  ]
};
