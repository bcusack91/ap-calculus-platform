export const g8PythagoreanPart2Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Finding Missing Sides

**Part 2 of 7 — Finding Missing Sides**

To find a **leg**: $a = \sqrt{c^2 - b^2}$

Always identify: which side is the hypotenuse?
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Hypotenuse 10, one leg 6. Find the other leg.**

$a = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = \sqrt{64} = 8$ ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "c=13, a=5. b=?",
                    "options": [
                              "12",
                              "8",
                              "18",
                              "14"
                    ],
                    "correctAnswer": 0,
                    "explanation": "169−25=144. √144=12."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Missing Leg** 🧮

1) c=13, a=5. b = ?

2) c=15, a=9. b = ?

3) c=17, a=8. b = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","12","15"],
        hint1: "169 − 25.",
        hint2: "225 − 81.",
        hint3: "289 − 64.",
        explanation: "1) √144=12. 2) √144=12. 3) √225=15."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find a missing leg, use","options":["$a = \\sqrt{c^2 - b^2}$","$a = c + b$","$a = c \\times b$","$a = c - b$"]},{"label":"The hypotenuse is always the ____ value","options":["Largest","Smallest","Middle","Unknown"]}],
        correctAnswers: ["$a = \\sqrt{c^2 - b^2}$","Largest"],
        hint1: "Rearrange a²+b²=c².",
        hint2: "Opposite the largest angle.",
        explanation: "Leg = √(c²−b²). Hypotenuse is the largest side."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Known | Find |
|---|-------|------|
| 1 | c=13, a=5 | b=12 |
| 2 | c=15, a=9 | b=12 |
| 3 | c=17, a=8 | b=15 |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "c=15, a=9. b=?",
                    "options": [
                              "12",
                              "6",
                              "24",
                              "18"
                    ],
                    "correctAnswer": 0,
                    "explanation": "225−81=144. √144=12."
          }
]
      }
    }
  ]
};
