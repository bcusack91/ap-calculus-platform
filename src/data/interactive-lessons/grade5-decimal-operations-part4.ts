export const g5DecimalsPart4Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Multiplying Decimals

**Part 4 of 7 — Multiplying Decimals**

### Steps
1. Multiply as if both numbers are whole numbers
2. Count total decimal places in both factors
3. Place the decimal point in the product (same total)

$0.3 \times 0.4 = 0.12$ → 1+1 = 2 decimal places
    
    `
    },
    {
      id: 'grade5-decimal-operations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$2.5 \times 0.3 = ?$

Multiply: $25 \times 3 = 75$

Decimal places: 1 + 1 = 2 → $0.75$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "How many decimal places in $0.25 \\\\times 0.4$?",
                    "options": [
                              "3",
                              "2",
                              "1",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.25 has 2, 0.4 has 1 → 2+1 = 3 total."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Multiply Decimals** 🧮

1) $1.2 \times 4 = ?$

2) $0.6 \times 0.7 = ?$

3) $3.14 \times 2 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4.8","0.42","6.28"],
        hint1: "12 × 4 = 48, one decimal place.",
        hint2: "6 × 7 = 42, two decimal places.",
        hint3: "314 × 2 = 628, two decimal places.",
        explanation: "1) 48 → 4.8. 2) 42 → 0.42. 3) 628 → 6.28."
      }
    },
    {
      id: 'grade5-decimal-operations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"After multiplying, count decimal places in","options":["Both factors combined","Only the larger factor","Only the product","Neither factor"]},{"label":"$0.5 \\\\times 0.5 =$","options":["0.25","2.5","0.025","25"]}],
        correctAnswers: ["Both factors combined","0.25"],
        hint1: "Total places from BOTH numbers.",
        hint2: "5×5=25, 2 decimal places.",
        explanation: "Count places in both factors. 5×5=25, 1+1=2 places → 0.25."
      }
    },
    {
      id: 'grade5-decimal-operations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Decimal Places |
|---|---------|----------------|
| 1 | $1.2 \times 4$ | 1 |
| 2 | $0.6 \times 0.7$ | 2 |
| 3 | $3.14 \times 2$ | 2 |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$0.1 \\\\times 0.1 = ?$",
                    "options": [
                              "0.01",
                              "0.1",
                              "1",
                              "0.001"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1 × 1 = 1, total 2 places → 0.01."
          }
]
      }
    }
  ]
};
