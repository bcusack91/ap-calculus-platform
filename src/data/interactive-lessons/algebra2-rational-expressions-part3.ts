export const alg2RationalPart3Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Adding & Subtracting

**Part 3 of 7 — Adding & Subtracting**

Need a **common denominator**.

$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$

**LCD** (Least Common Denominator): smallest expression that both denominators divide into.
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{2}{x} + \\frac{3}{x} = \\frac{5}{x}$ ✅ (same denominator)

$\\frac{1}{x} + \\frac{1}{x+1} = \\frac{(x+1) + x}{x(x+1)} = \\frac{2x+1}{x(x+1)}$ ✅
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{3}{x} + \\frac{2}{x} = ?$",
                    "options": [
                              "$\\frac{5}{x}$",
                              "$\\frac{5}{2x}$",
                              "$\\frac{6}{x^2}$",
                              "$5$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same denominator: 3/x + 2/x = 5/x."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Add/Subtract** 🧮

1) $\\frac{3}{x} + \\frac{2}{x} = \\frac{?}{x}$ (numerator)

2) $\\frac{1}{2} + \\frac{1}{3} = \\frac{?}{6}$ (numerator)

3) $\\frac{1}{x} + \\frac{1}{2x} = \\frac{?}{2x}$ (numerator)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","5","3"],
        hint1: "3 + 2.",
        hint2: "3/6 + 2/6.",
        hint3: "2/2x + 1/2x.",
        explanation: "1) 5. 2) 3+2=5. 3) 2+1=3."
      }
    },
    {
      id: 'algebra2-rational-expressions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To add fractions with different denominators","options":["Find a common denominator first","Just add the denominators","Multiply them","Skip the denominators"]},{"label":"LCD stands for","options":["Least Common Denominator","Last Common Divisor","Largest Common Denominator","Linear Common Degree"]}],
        correctAnswers: ["Find a common denominator first","Least Common Denominator"],
        hint1: "Need matching bottoms.",
        hint2: "Least = smallest.",
        explanation: "Common denominator first. LCD = Least Common Denominator."
      }
    },
    {
      id: 'algebra2-rational-expressions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | LCD |
|---|---------|-----|
| 1 | $\\frac{3}{x}+\\frac{2}{x}$ | $x$ |
| 2 | $\\frac{1}{2}+\\frac{1}{3}$ | $6$ |
| 3 | $\\frac{1}{x}+\\frac{1}{2x}$ | $2x$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "LCD of $\\frac{1}{x}$ and $\\frac{1}{2x}$ is:",
                    "options": [
                              "$2x$",
                              "$x$",
                              "$2x^2$",
                              "$x^2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2x is the smallest common denominator."
          }
]
      }
    }
  ]
};
