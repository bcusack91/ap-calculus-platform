export const g5FractionOpsPart2Data = {
  topicSlug: "fraction-operations-grade5",
  sections: [
    {
      id: 'grade5-fraction-operations-p2-intro',
      type: 'text' as const,
      content: `
# 🔢 Subtracting Mixed Numbers

**Part 2 of 7 — Subtracting Mixed Numbers**

To subtract mixed numbers:
1. Make sure fractions have the **same denominator**
2. If needed, **borrow** from the whole number
3. Subtract fractions, then subtract whole numbers

$3\\frac{1}{4} - 1\\frac{3}{4}$: borrow 1 from 3 → $2\\frac{5}{4} - 1\\frac{3}{4} = 1\\frac{2}{4} = 1\\frac{1}{2}$
    
    `
    },
    {
      id: 'grade5-fraction-operations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$5\\frac{1}{3} - 2\\frac{2}{3} = ?$

$\\frac{1}{3} < \\frac{2}{3}$, so borrow: $5\\frac{1}{3} = 4\\frac{4}{3}$

$4\\frac{4}{3} - 2\\frac{2}{3} = 2\\frac{2}{3}$ ✅
    
    `
    },
    {
      id: 'grade5-fraction-operations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "When do you borrow in mixed number subtraction?",
                    "options": [
                              "When the first fraction is smaller than the second",
                              "Always",
                              "Never",
                              "When denominators differ"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Borrow when you cannot subtract the fraction part."
          }
]
      }
    },
    {
      id: 'grade5-fraction-operations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Subtract Mixed Numbers** 🧮

1) $4\\frac{3}{5} - 2\\frac{1}{5}$: whole number part of the answer?

2) $6\\frac{1}{4} - 3\\frac{3}{4}$: whole number part of the answer?

3) $8 - 2\\frac{2}{3}$: whole number part of the answer?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","2","5"],
        hint1: "No borrowing needed: 4−2=2.",
        hint2: "Borrow from 6: 5 4/4 − 3 3/4.",
        hint3: "8 = 7 3/3. Then subtract.",
        explanation: "1) 4 3/5 − 2 1/5 = 2 2/5. 2) 5 5/4 − 3 3/4 = 2 2/4. 3) 7 3/3 − 2 2/3 = 5 1/3."
      }
    },
    {
      id: 'grade5-fraction-operations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Borrowing in mixed numbers means","options":["Taking 1 from the whole and adding it to the fraction","Changing the denominator","Adding 1 to the whole number","Subtracting the fraction"]},{"label":"$5 - 1\\\\frac{2}{3} = ?$","options":["$3\\\\frac{1}{3}$","$4\\\\frac{2}{3}$","$4\\\\frac{1}{3}$","$3\\\\frac{2}{3}$"]}],
        correctAnswers: ["Taking 1 from the whole and adding it to the fraction","$3\\\\frac{1}{3}$"],
        hint1: "You convert 1 whole into fraction form.",
        hint2: "5 = 4 3/3. Then 4 3/3 − 1 2/3.",
        explanation: "Borrow: convert 1 whole to b/b. 4 3/3 − 1 2/3 = 3 1/3."
      }
    },
    {
      id: 'grade5-fraction-operations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Borrowing? |
|---|---------|------------|
| 1 | $4\\frac{3}{5} - 2\\frac{1}{5}$ | No |
| 2 | $6\\frac{1}{4} - 3\\frac{3}{4}$ | Yes |
| 3 | $8 - 2\\frac{2}{3}$ | Yes |
    
    `
    },
    {
      id: 'grade5-fraction-operations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$7\\\\frac{1}{6} - 4\\\\frac{5}{6} = ?$",
                    "options": [
                              "$2\\\\frac{2}{6}$",
                              "$3\\\\frac{4}{6}$",
                              "$2\\\\frac{4}{6}$",
                              "$3\\\\frac{2}{6}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Borrow: $6\\\\frac{7}{6} - 4\\\\frac{5}{6} = 2\\\\frac{2}{6}$."
          }
]
      }
    }
  ]
};
