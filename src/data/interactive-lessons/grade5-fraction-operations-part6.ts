export const g5FractionOpsPart6Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all fraction operations:
1. Read carefully — which operation?
2. Set up the expression
3. Solve step by step
4. Check: Does the answer make sense?
    
    `
    },
    {
      id: 'grade5-fraction-operations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Tom has $2\frac{1}{2}$ lbs of sugar. He uses $\frac{3}{4}$ lb per batch. How many batches?**

$2\frac{1}{2} \div \frac{3}{4} = \frac{5}{2} \times \frac{4}{3} = \frac{20}{6} = 3\frac{1}{3}$ → **3 full batches** ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{1}{2} + \\\\frac{1}{3} + \\\\frac{1}{6} = ?$",
                    "options": [
                              "1",
                              "$\\\\frac{3}{6}$",
                              "$\\\\frac{1}{6}$",
                              "$\\\\frac{5}{6}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "LCD=6: 3/6 + 2/6 + 1/6 = 6/6 = 1."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) $\frac{1}{2} + \frac{1}{3} + \frac{1}{6} = ?$ (simplify)

2) $3\frac{1}{4} - 1\frac{2}{3} = \frac{?}{12}$ — Numerator?

3) $\frac{2}{3} \times \frac{3}{4} \div \frac{1}{2} = ?$ (simplify)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","19","1"],
        hint1: "Convert all to sixths.",
        hint2: "LCD=12: 39/12 − 20/12.",
        hint3: "2/3 × 3/4 = 1/2. Then 1/2 ÷ 1/2.",
        explanation: "1) 3/6+2/6+1/6=6/6=1. 2) 39/12−20/12=19/12. 3) 1/2 × 2/1=1."
      }
    },
    {
      id: 'grade5-fraction-operations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To add fractions with different denominators","options":["Find a common denominator first","Add both numerators and denominators","Just add the numerators","It cannot be done"]},{"label":"Division by a fraction is the same as","options":["Multiplication by its reciprocal","Subtraction","Addition","Squaring"]}],
        correctAnswers: ["Find a common denominator first","Multiplication by its reciprocal"],
        hint1: "Unlike denominators require conversion.",
        hint2: "Keep, Change, Flip.",
        explanation: "LCD for unlike denominators. Division = multiply by reciprocal."
      }
    },
    {
      id: 'grade5-fraction-operations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | $\frac{1}{2} + \frac{1}{3} + \frac{1}{6}$ | LCD = 6 |
| 2 | $3\frac{1}{4} - 1\frac{2}{3}$ | LCD = 12, borrow |
| 3 | $\frac{2}{3} \times \frac{3}{4} \div \frac{1}{2}$ | Left to right |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "After multiplying and dividing fractions: $\\\\frac{2}{3} \\\\times \\\\frac{3}{4} = \\\\frac{1}{2}$. Then $\\\\frac{1}{2} \\\\div \\\\frac{1}{2} = ?$",
                    "options": [
                              "1",
                              "$\\\\frac{1}{4}$",
                              "2",
                              "$\\\\frac{1}{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\frac{1}{2} \\\\div \\\\frac{1}{2} = \\\\frac{1}{2} \\\\times \\\\frac{2}{1} = 1$."
          }
]
      }
    }
  ]
};
