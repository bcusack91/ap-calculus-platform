export const g6IntegersPart4Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p4-intro',
      type: 'text' as const,
      content: `
# ➕➖ Subtracting Integers

**Part 4 of 7 — Subtracting Integers**

### Rule: Add the Opposite
$a - b = a + (-b)$

Examples:
- $5 - 8 = 5 + (-8) = -3$
- $(-3) - (-7) = (-3) + 7 = 4$
    
    `
    },
    {
      id: 'grade6-integers-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-4) - (-9) = (-4) + 9 = 5$ ✅
    
    `
    },
    {
      id: 'grade6-integers-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$3 - 10 = ?$",
                    "options": [
                              "$-7$",
                              "$7$",
                              "$13$",
                              "$-13$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$3 + (-10) = -7$."
          }
]
      }
    },
    {
      id: 'grade6-integers-p4-input',
      type: 'input-boxes' as const,
      content: `
**Subtract Integers** 🧮

1) $7 - 12 = ?$

2) $(-5) - 3 = ?$

3) $(-6) - (-4) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-5","-8","-2"],
        hint1: "Rewrite as 7 + (−12).",
        hint2: "Rewrite as (−5) + (−3).",
        hint3: "Rewrite as (−6) + 4.",
        explanation: "1) 7+(−12)=−5. 2) (−5)+(−3)=−8. 3) (−6)+4=−2."
      }
    },
    {
      id: 'grade6-integers-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Subtracting a negative is the same as","options":["Adding","Subtracting more","Multiplying","Dividing"]},{"label":"$0 - (-5) =$","options":["5","−5","0","−10"]}],
        correctAnswers: ["Adding","5"],
        hint1: "Two negatives become positive.",
        hint2: "0 + 5 = ?",
        explanation: "Subtracting negative = adding. 0−(−5)=5."
      }
    },
    {
      id: 'grade6-integers-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Rewrite |
|---|---------|---------|
| 1 | $7 - 12$ | $7 + (-12)$ |
| 2 | $(-5) - 3$ | $(-5) + (-3)$ |
| 3 | $(-6) - (-4)$ | $(-6) + 4$ |
    
    `
    },
    {
      id: 'grade6-integers-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-8) - (-3) = ?$",
                    "options": [
                              "$-5$",
                              "$-11$",
                              "$5$",
                              "$11$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$(-8) + 3 = -5$."
          }
]
      }
    }
  ]
};
