export const g8PythagoreanPart4Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Converse of Pythagorean Theorem

**Part 4 of 7 — Converse of Pythagorean Theorem**

If $a^2 + b^2 = c^2$, the triangle is a **right triangle**.

If $a^2 + b^2 > c^2$, it's **acute**.
If $a^2 + b^2 < c^2$, it's **obtuse**.
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Sides 7, 24, 25. Right triangle?**

$7^2 + 24^2 = 49 + 576 = 625 = 25^2$ → **Yes, right triangle!** ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Sides 5, 12, 13. Right triangle?",
                    "options": [
                              "Yes, 25+144=169",
                              "No",
                              "Acute",
                              "Obtuse"
                    ],
                    "correctAnswer": 0,
                    "explanation": "25+144=169=13². Right triangle."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p4-input',
      type: 'input-boxes' as const,
      content: `
**Check: $a^2 + b^2 = ?$** 🧮

1) a=7, b=24. $a^2 + b^2 = ?$

2) a=5, b=12. $a^2 + b^2 = ?$

3) a=6, b=8. $a^2 + b^2 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["625","169","100"],
        hint1: "49 + 576.",
        hint2: "25 + 144.",
        hint3: "36 + 64.",
        explanation: "1) 625. 2) 169. 3) 100. All equal c², so all right triangles."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$a^2 + b^2 = c^2$ means the triangle is","options":["Right","Acute","Obtuse","Equilateral"]},{"label":"$a^2 + b^2 > c^2$ means the triangle is","options":["Acute","Right","Obtuse","Impossible"]}],
        correctAnswers: ["Right","Acute"],
        hint1: "Equals → right angle.",
        hint2: "Greater → all angles < 90°.",
        explanation: "= c²: right. > c²: acute. < c²: obtuse."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Sides | Type |
|---|-------|------|
| 1 | 3, 4, 5 | Right |
| 2 | 5, 6, 8 | Obtuse |
| 3 | 4, 5, 6 | Acute |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If $a^2 + b^2 < c^2$, the triangle is:",
                    "options": [
                              "Obtuse",
                              "Acute",
                              "Right",
                              "Equilateral"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Sum less than c² → obtuse."
          }
]
      }
    }
  ]
};
