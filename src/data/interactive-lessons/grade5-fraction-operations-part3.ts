export const g5FractionOpsPart3Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Multiplying Fractions

**Part 3 of 7 — Multiplying Fractions**

$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$

- Multiply numerators
- Multiply denominators
- Simplify the result
    
    `
    },
    {
      id: 'grade5-fraction-operations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\frac{3}{4} \times \frac{2}{5} = \frac{6}{20} = \frac{3}{10}$ ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\\\frac{2}{3} \\\\times \\\\frac{3}{4} = ?$",
                    "options": [
                              "$\\\\frac{1}{2}$",
                              "$\\\\frac{6}{7}$",
                              "$\\\\frac{5}{12}$",
                              "$\\\\frac{6}{12}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6/12 = 1/2."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Multiply Fractions** 🧮

1) $\frac{1}{2} \times \frac{3}{4} = \frac{?}{8}$ — Numerator?

2) $\frac{2}{3} \times \frac{3}{5} = \frac{?}{5}$ — Simplified numerator?

3) $\frac{4}{7} \times \frac{1}{2} = \frac{?}{14}$ — Numerator?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","4"],
        hint1: "1 × 3 in the numerator.",
        hint2: "2×3 = 6 over 3×5 = 15. Simplify 6/15.",
        hint3: "4 × 1 in the numerator.",
        explanation: "1) 1×3=3. 2) 6/15 = 2/5. 3) 4×1=4."
      }
    },
    {
      id: 'grade5-fraction-operations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To multiply fractions, multiply","options":["Numerator × numerator, denominator × denominator","Only numerators","Only denominators","Cross-multiply"]},{"label":"$\\\\frac{5}{6} \\\\times \\\\frac{3}{5}$ simplifies to","options":["$\\\\frac{1}{2}$","$\\\\frac{15}{30}$","$\\\\frac{3}{6}$","$\\\\frac{8}{11}$"]}],
        correctAnswers: ["Numerator × numerator, denominator × denominator","$\\\\frac{1}{2}$"],
        hint1: "Multiply across.",
        hint2: "15/30 simplified is?",
        explanation: "Multiply across: 5×3=15, 6×5=30. 15/30 = 1/2."
      }
    },
    {
      id: 'grade5-fraction-operations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Simplify? |
|---|---------|-----------|
| 1 | $\frac{1}{2} \times \frac{3}{4}$ | No |
| 2 | $\frac{2}{3} \times \frac{3}{5}$ | Yes |
| 3 | $\frac{4}{7} \times \frac{1}{2}$ | No |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "When multiplying fractions, do you need a common denominator?",
                    "options": [
                              "No",
                              "Yes",
                              "Only for unlike fractions",
                              "Sometimes"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Just multiply straight across: numerator × numerator, denominator × denominator."
          }
]
      }
    }
  ]
};
