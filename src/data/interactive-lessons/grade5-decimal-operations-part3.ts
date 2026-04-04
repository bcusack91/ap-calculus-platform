export const g5DecimalsPart3Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Adding & Subtracting Decimals

**Part 3 of 7 — Adding & Subtracting Decimals**

### Steps
1. **Line up** the decimal points vertically
2. **Add zeros** to fill empty places
3. **Add or subtract** as with whole numbers
4. **Bring down** the decimal point
    
    `
    },
    {
      id: 'grade5-decimal-operations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$3.45 + 2.7 = ?$

Line up: $3.45 + 2.70 = 6.15$ ✅

$5.3 - 2.86 = ?$

Line up: $5.30 - 2.86 = 2.44$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is $4.56 + 3.2$?",
                    "options": [
                              "7.76",
                              "7.58",
                              "7.78",
                              "4.88"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$4.56 + 3.20 = 7.76$."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Add & Subtract** 🧮

1) $4.5 + 3.28 = ?$

2) $10 - 6.43 = ?$

3) $0.75 + 0.8 + 0.125 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7.78","3.57","1.675"],
        hint1: "Rewrite as 4.50 + 3.28.",
        hint2: "Rewrite as 10.00 − 6.43.",
        hint3: "Rewrite as 0.750 + 0.800 + 0.125.",
        explanation: "1) 4.50+3.28=7.78. 2) 10.00−6.43=3.57. 3) 0.750+0.800+0.125=1.675."
      }
    },
    {
      id: 'grade5-decimal-operations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"First step when adding decimals","options":["Line up decimal points","Add the digits left to right","Multiply by 10","Remove the decimal"]},{"label":"$6.2 - 3.85$ requires you to rewrite 6.2 as","options":["6.20","62.0","0.62","6.02"]}],
        correctAnswers: ["Line up decimal points","6.20"],
        hint1: "Alignment comes first.",
        hint2: "Add a zero in the hundredths place.",
        explanation: "Align decimals first. 6.2 → 6.20 for subtraction."
      }
    },
    {
      id: 'grade5-decimal-operations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Key Step |
|---|---------|----------|
| 1 | $4.5 + 3.28$ | Add trailing zero |
| 2 | $10 - 6.43$ | 10.00 - 6.43 |
| 3 | $0.75 + 0.8 + 0.125$ | Align all three |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Why add trailing zeros?",
                    "options": [
                              "To keep place values aligned",
                              "To make the number bigger",
                              "Because zeros change value",
                              "It is optional decoration"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Trailing zeros ensure every column lines up."
          }
]
      }
    }
  ]
};
