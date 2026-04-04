export const g5FractionOpsPart1Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p1-intro',
      type: 'text' as const,
      content: `
# 🔢 Adding Unlike Denominators

**Part 1 of 7 — Adding Unlike Denominators**

To add fractions with different denominators:
1. Find the **LCD** (Least Common Denominator)
2. Convert each fraction to an equivalent fraction with the LCD
3. Add numerators, keep the LCD
4. Simplify if needed

$\frac{1}{3} + \frac{1}{4} = \frac{4}{12} + \frac{3}{12} = \frac{7}{12}$
    
    `
    },
    {
      id: 'grade5-fraction-operations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\frac{2}{5} + \frac{1}{3} = ?$

LCD of 5 and 3 = 15.
$\frac{2}{5} = \frac{6}{15}$, $\frac{1}{3} = \frac{5}{15}$
$\frac{6}{15} + \frac{5}{15} = \frac{11}{15}$ ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "LCD of 4 and 6 is:",
                    "options": [
                              "12",
                              "24",
                              "6",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Multiples of 4: 4,8,12… Multiples of 6: 6,12… LCD=12."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Add Fractions** 🧮

1) $\frac{1}{2} + \frac{1}{3} = \frac{?}{6}$ — Numerator?

2) $\frac{3}{4} + \frac{1}{6} = \frac{?}{12}$ — Numerator?

3) $\frac{2}{3} + \frac{3}{5} = \frac{?}{15}$ — Numerator?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","11","19"],
        hint1: "Convert: 3/6 + 2/6.",
        hint2: "Convert: 9/12 + 2/12.",
        hint3: "Convert: 10/15 + 9/15.",
        explanation: "1) 3+2=5. 2) 9+2=11. 3) 10+9=19."
      }
    },
    {
      id: 'grade5-fraction-operations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To add fractions with unlike denominators, first find the","options":["Least Common Denominator","Greatest Common Factor","Sum of denominators","Product of numerators"]},{"label":"LCD of 3 and 5 is","options":["15","8","3","5"]}],
        correctAnswers: ["Least Common Denominator","15"],
        hint1: "Denominators must match.",
        hint2: "LCM of 3 and 5?",
        explanation: "Find LCD first. LCD(3,5)=15."
      }
    },
    {
      id: 'grade5-fraction-operations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | LCD |
|---|---------|-----|
| 1 | $\frac{1}{2} + \frac{1}{3}$ | 6 |
| 2 | $\frac{3}{4} + \frac{1}{6}$ | 12 |
| 3 | $\frac{2}{3} + \frac{3}{5}$ | 15 |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{1}{2} + \\\\frac{1}{3} = ?$",
                    "options": [
                              "$\\\\frac{5}{6}$",
                              "$\\\\frac{2}{5}$",
                              "$\\\\frac{1}{6}$",
                              "$\\\\frac{2}{6}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "LCD=6: 3/6 + 2/6 = 5/6."
          }
]
      }
    }
  ]
};
