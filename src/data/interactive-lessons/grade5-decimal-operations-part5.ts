export const g5DecimalsPart5Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Dividing Decimals

**Part 5 of 7 — Dividing Decimals**

### Dividing by a whole number
Divide normally; bring up the decimal point.

### Dividing by a decimal
Multiply both divisor and dividend by 10 (or 100) to make the divisor a whole number.

$3.6 \\div 0.4 = 36 \\div 4 = 9$
    
    `
    },
    {
      id: 'grade5-decimal-operations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$4.8 \\div 0.6 = ?$

Multiply both by 10: $48 \\div 6 = 8$ ✅

$7.5 \\div 3 = 2.5$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "To divide by 0.5, you can multiply both numbers by:",
                    "options": [
                              "10",
                              "0.5",
                              "5",
                              "100"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Multiply by 10 to make 0.5 into 5."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Divide Decimals** 🧮

1) $9.6 \\div 4 = ?$

2) $2.4 \\div 0.8 = ?$

3) $0.35 \\div 0.07 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2.4","3","5"],
        hint1: "Divide 9.6 by 4 directly.",
        hint2: "Multiply both by 10: 24 ÷ 8.",
        hint3: "Multiply both by 100: 35 ÷ 7.",
        explanation: "1) 9.6÷4=2.4. 2) 24÷8=3. 3) 35÷7=5."
      }
    },
    {
      id: 'grade5-decimal-operations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To make a decimal divisor a whole number, multiply by","options":["A power of 10","The numerator","A fraction","Zero"]},{"label":"$1.44 \\\\div 1.2 =$","options":["1.2","12","0.12","14.4"]}],
        correctAnswers: ["A power of 10","1.2"],
        hint1: "Powers of 10 = 10, 100, 1000…",
        hint2: "14.4 ÷ 12 = ?",
        explanation: "Multiply by 10/100/1000. 14.4 ÷ 12 = 1.2."
      }
    },
    {
      id: 'grade5-decimal-operations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | $9.6 \\div 4$ | Direct division |
| 2 | $2.4 \\div 0.8$ | Multiply both by 10 |
| 3 | $0.35 \\div 0.07$ | Multiply both by 100 |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$6.3 \\\\div 0.9 = ?$",
                    "options": [
                              "7",
                              "0.7",
                              "70",
                              "63"
                    ],
                    "correctAnswer": 0,
                    "explanation": "63 ÷ 9 = 7."
          }
]
      }
    }
  ]
};
