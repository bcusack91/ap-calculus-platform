export const g5FractionOpsPart7Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Operations
- **Add/Subtract**: Need common denominators
- **Multiply**: Straight across, then simplify
- **Divide**: Keep, Change, Flip
- **Mixed numbers**: Convert to improper first if needed
    
    `
    },
    {
      id: 'grade5-fraction-operations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{5}{6} - \\frac{1}{4} = ?$

LCD = 12: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$ ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{3}{8} + \\\\frac{1}{4} = ?$",
                    "options": [
                              "$\\\\frac{5}{8}$",
                              "$\\\\frac{4}{12}$",
                              "$\\\\frac{4}{8}$",
                              "$\\\\frac{1}{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1/4 = 2/8. 3/8 + 2/8 = 5/8."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $\\frac{3}{8} + \\frac{1}{4} = \\frac{?}{8}$ — Numerator?

2) $\\frac{5}{6} \\times \\frac{2}{5}$: simplify. Numerator?

3) $\\frac{2}{3} \div \\frac{4}{9}$: simplify. Numerator?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","1","3"],
        hint1: "1/4 = 2/8. Then add.",
        hint2: "10/30 simplifies to...",
        hint3: "Keep, Change, Flip: 2/3 × 9/4 = 18/12.",
        explanation: "1) 3+2=5. 2) 10/30=1/3, numerator=1. 3) 18/12=3/2, numerator=3."
      }
    },
    {
      id: 'grade5-fraction-operations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When multiplying fractions, you do NOT need","options":["A common denominator","Numerators","Denominators","To simplify"]},{"label":"The reciprocal of 5 is","options":["$\\\\frac{1}{5}$","5","$-5$","$\\\\frac{5}{1}$"]}],
        correctAnswers: ["A common denominator","$\\\\frac{1}{5}$"],
        hint1: "Multiplication works differently from addition.",
        hint2: "5 = 5/1. Flip it.",
        explanation: "No common denominator needed for multiplication. Reciprocal of 5 = 1/5."
      }
    },
    {
      id: 'grade5-fraction-operations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Operation | Problem |
|---|-----------|---------|
| 1 | Add | $\\frac{3}{8} + \\frac{1}{4}$ |
| 2 | Multiply | $\\frac{5}{6} \\times \\frac{2}{5}$ |
| 3 | Divide | $\\frac{2}{3} \div \\frac{4}{9}$ |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{2}{3} \\\\div \\\\frac{4}{9} = ?$",
                    "options": [
                              "$\\\\frac{3}{2}$",
                              "$\\\\frac{8}{27}$",
                              "$\\\\frac{6}{12}$",
                              "$\\\\frac{2}{4}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2/3 × 9/4 = 18/12 = 3/2."
          }
]
      }
    }
  ]
};
