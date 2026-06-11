export const g8PythagoreanPart7Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $a^2 + b^2 = c^2$
- Leg: $a = \\sqrt{c^2 - b^2}$
- Distance: $d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
- 3D diagonal: $d = \\sqrt{l^2+w^2+h^2}$
- Converse: classify triangle by comparing $a^2+b^2$ to $c^2$
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Legs 8 and 15. Hypotenuse?**
$c = \\sqrt{64+225} = \\sqrt{289} = 17$ ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Legs 8 and 15. Hypotenuse?",
                    "options": [
                              "17",
                              "23",
                              "√23",
                              "289"
                    ],
                    "correctAnswer": 0,
                    "explanation": "64+225=289. √289=17."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Legs 8, 15. c = ?

2) c=25, a=7. b = ?

3) Distance: (0,0) to (6,8). d = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["17","24","10"],
        hint1: "64+225.",
        hint2: "625−49.",
        hint3: "36+64.",
        explanation: "1) √289=17. 2) √576=24. 3) √100=10."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The Pythagorean theorem is for","options":["Right triangles","All triangles","Circles","Squares"]},{"label":"$a^2+b^2 > c^2$ classifies as","options":["Acute","Obtuse","Right","Equilateral"]}],
        correctAnswers: ["Right triangles","Acute"],
        hint1: "Need a 90° angle.",
        hint2: "Greater → all acute angles.",
        explanation: "Right triangles only. a²+b² > c² → acute."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Hypotenuse | Legs 8, 15 |
| 2 | Leg | c=25, a=7 |
| 3 | Distance | (0,0) to (6,8) |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "c=25, a=7. b=?",
                    "options": [
                              "24",
                              "18",
                              "32",
                              "625"
                    ],
                    "correctAnswer": 0,
                    "explanation": "625−49=576. √576=24."
          }
]
      }
    }
  ]
};
