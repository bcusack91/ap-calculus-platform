export const g6IntegersPart3Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p3-intro',
      type: 'text' as const,
      content: `
# ➕➖ Adding Integers

**Part 3 of 7 — Adding Integers**

### Same Signs → Add, Keep the Sign
$5 + 3 = 8$, $(-5) + (-3) = -8$

### Different Signs → Subtract, Keep Sign of Larger Absolute Value
$7 + (-4) = 3$, $(-7) + 4 = -3$
    
    `
    },
    {
      id: 'grade6-integers-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-8) + 5 = ?$

Different signs: $8 - 5 = 3$. Larger absolute value is 8 (negative).

Answer: $-3$ ✅
    
    `
    },
    {
      id: 'grade6-integers-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-6) + (-3) = ?$",
                    "options": [
                              "$-9$",
                              "$-3$",
                              "$9$",
                              "$3$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same signs: 6+3=9, both negative → −9."
          }
]
      }
    },
    {
      id: 'grade6-integers-p3-input',
      type: 'input-boxes' as const,
      content: `
**Add Integers** 🧮

1) $6 + (-4) = ?$

2) $(-3) + (-7) = ?$

3) $(-5) + 9 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","-10","4"],
        hint1: "Different signs: subtract, keep sign of larger.",
        hint2: "Same signs: add, keep sign.",
        hint3: "Different signs: 9−5=4, positive wins.",
        explanation: "1) 6−4=2. 2) −(3+7)=−10. 3) 9−5=4."
      }
    },
    {
      id: 'grade6-integers-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Adding two negatives gives a","options":["Negative result","Positive result","Zero","It depends"]},{"label":"$(-4) + 4 =$","options":["0","8","−8","4"]}],
        correctAnswers: ["Negative result","0"],
        hint1: "Same sign → keep that sign.",
        hint2: "A number + its opposite = ?",
        explanation: "Two negatives sum to negative. Opposites sum to 0."
      }
    },
    {
      id: 'grade6-integers-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Rule |
|---|---------|------|
| 1 | $6 + (-4)$ | Different signs |
| 2 | $(-3) + (-7)$ | Same signs (negative) |
| 3 | $(-5) + 9$ | Different signs |
    
    `
    },
    {
      id: 'grade6-integers-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-12) + 5 = ?$",
                    "options": [
                              "$-7$",
                              "$-17$",
                              "$7$",
                              "$17$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different signs: 12−5=7, negative wins → −7."
          }
]
      }
    }
  ]
};
