export const g5FractionOpsPart4Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p4-intro',
      type: 'text' as const,
      content: `
# 🔢 Dividing Fractions

**Part 4 of 7 — Dividing Fractions**

**Keep, Change, Flip** (KCF):
$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$

Keep the first fraction, change ÷ to ×, flip the second fraction.
    
    `
    },
    {
      id: 'grade5-fraction-operations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$ ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The reciprocal of $\\\\frac{3}{7}$ is:",
                    "options": [
                              "$\\\\frac{7}{3}$",
                              "$\\\\frac{3}{7}$",
                              "$\\\\frac{1}{3}$",
                              "$-\\\\frac{3}{7}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Flip numerator and denominator: 7/3."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Divide Fractions** 🧮

1) $\\frac{1}{2} \\div \\frac{1}{4} = ?$

2) $\\frac{3}{5} \\div \\frac{2}{3}$: numerator of the result (before simplifying)?

3) $4 \\div \\frac{1}{3} = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","9","12"],
        hint1: "Keep 1/2, flip 1/4 → 4/1, multiply.",
        hint2: "3/5 × 3/2 = ?/?",
        hint3: "4/1 × 3/1 = ?",
        explanation: "1) 1/2 × 4/1 = 4/2 = 2. 2) 3×3=9 (over 10). 3) 4×3=12."
      }
    },
    {
      id: 'grade5-fraction-operations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When dividing fractions, you \"Keep, Change, Flip.\" \"Flip\" means","options":["Take the reciprocal of the second fraction","Flip the first fraction","Change the sign","Swap numerators"]},{"label":"$6 \\\\div \\\\frac{1}{2} =$","options":["12","3","$\\\\frac{1}{12}$","$\\\\frac{6}{2}$"]}],
        correctAnswers: ["Take the reciprocal of the second fraction","12"],
        hint1: "Reciprocal = flip.",
        hint2: "6 × 2/1 = ?",
        explanation: "Flip the divisor. 6 × 2 = 12."
      }
    },
    {
      id: 'grade5-fraction-operations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Reciprocal |
|---|---------|------------|
| 1 | $\\frac{1}{2} \\div \\frac{1}{4}$ | Flip 1/4 → 4/1 |
| 2 | $\\frac{3}{5} \\div \\frac{2}{3}$ | Flip 2/3 → 3/2 |
| 3 | $4 \\div \\frac{1}{3}$ | Flip 1/3 → 3/1 |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{1}{2} \\\\div \\\\frac{1}{4} = ?$",
                    "options": [
                              "2",
                              "$\\\\frac{1}{8}$",
                              "4",
                              "$\\\\frac{1}{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1/2 × 4/1 = 4/2 = 2."
          }
]
      }
    }
  ]
};
