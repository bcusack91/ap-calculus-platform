export const g5DecimalsPart7Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Place value: tenths, hundredths, thousandths
- Compare decimals left to right
- Add/subtract: line up decimal points
- Multiply: count total decimal places
- Divide: make divisor a whole number
    
    `
    },
    {
      id: 'grade5-decimal-operations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$2.45 \\times 0.3 = ?$

$245 \\times 3 = 735$, decimal places: $2 + 1 = 3$ → $0.735$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$5.6 + 3.45 = ?$",
                    "options": [
                              "9.05",
                              "9.5",
                              "8.05",
                              "8.95"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5.60 + 3.45 = 9.05."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $5.6 + 3.45 = ?$

2) $0.4 \\times 0.8 = ?$

3) $7.2 \div 0.9 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["9.05","0.32","8"],
        hint1: "Align: 5.60 + 3.45.",
        hint2: "4 × 8 = 32, two decimal places.",
        hint3: "Multiply both by 10: 72 ÷ 9.",
        explanation: "1) 9.05. 2) 0.32. 3) 8."
      }
    },
    {
      id: 'grade5-decimal-operations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When adding decimals, the most important step is","options":["Lining up the decimal points","Adding from left to right","Removing the decimals first","Rounding"]},{"label":"To divide by 0.25, multiply both numbers by","options":["100","10","25","4"]}],
        correctAnswers: ["Lining up the decimal points","100"],
        hint1: "Alignment ensures correct place values.",
        hint2: "0.25 × 100 = 25 (a whole number).",
        explanation: "Align decimals. 0.25 × 100 = 25."
      }
    },
    {
      id: 'grade5-decimal-operations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Add | $5.6 + 3.45$ |
| 2 | Multiply | $0.4 \\times 0.8$ |
| 3 | Divide | $7.2 \div 0.9$ |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which place value is smallest: tenths, hundredths, or thousandths?",
                    "options": [
                              "Thousandths",
                              "Hundredths",
                              "Tenths",
                              "They are equal"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Thousandths (0.001) < hundredths (0.01) < tenths (0.1)."
          }
]
      }
    }
  ]
};
