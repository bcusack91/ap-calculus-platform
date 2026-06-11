export const alg2RationalPart2Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Multiplying & Dividing

**Part 2 of 7 — Multiplying & Dividing**

**Multiply**: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$ (factor and cancel first)

**Divide**: multiply by the reciprocal
$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{x}{x+2} \\cdot \\frac{x+2}{x^2} = \\frac{x(x+2)}{x^2(x+2)} = \\frac{1}{x}$ ✅
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{3}{x} \\cdot \\frac{x}{6} = ?$",
                    "options": [
                              "$\\frac{1}{2}$",
                              "$\\frac{3x}{6}$",
                              "$\\frac{18}{x^2}$",
                              "$3x$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3x/(6x) = 1/2."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Multiply & Divide** 🧮

1) $\\frac{3}{x} \\cdot \\frac{x}{6} = ?$ (decimal)

2) $\\frac{x}{3} \\div \\frac{x}{9} = ?$

3) $\\frac{x+1}{2} \\cdot \\frac{4}{x+1} = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.5","3","2"],
        hint1: "3x/6x. Cancel x.",
        hint2: "Flip: (x/3)(9/x). Cancel x.",
        hint3: "Cancel (x+1). 4/2.",
        explanation: "1) 1/2=0.5. 2) 9/3=3. 3) 4/2=2."
      }
    },
    {
      id: 'algebra2-rational-expressions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Dividing by a fraction is the same as","options":["Multiplying by its reciprocal","Dividing by its reciprocal","Adding it","Subtracting it"]},{"label":"The reciprocal of $\\frac{a}{b}$ is","options":["$\\frac{b}{a}$","$\\frac{a}{b}$","$-\\frac{a}{b}$","$ab$"]}],
        correctAnswers: ["Multiplying by its reciprocal","$\\frac{b}{a}$"],
        hint1: "Flip and multiply.",
        hint2: "Flip numerator and denominator.",
        explanation: "Divide → multiply by reciprocal. Reciprocal: flip."
      }
    },
    {
      id: 'algebra2-rational-expressions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Result |
|---|---------|--------|
| 1 | $\\frac{3}{x} \\cdot \\frac{x}{6}$ | $\\frac{1}{2}$ |
| 2 | $\\frac{x}{3} \\div \\frac{x}{9}$ | $3$ |
| 3 | $\\frac{x+1}{2} \\cdot \\frac{4}{x+1}$ | $2$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "To divide fractions:",
                    "options": [
                              "Multiply by the reciprocal",
                              "Multiply straight across",
                              "Add the denominators",
                              "Subtract the numerators"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Flip the second fraction and multiply."
          }
]
      }
    }
  ]
};
