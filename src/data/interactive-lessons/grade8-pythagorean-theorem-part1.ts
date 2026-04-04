export const g8PythagoreanPart1Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Understanding the Theorem

**Part 1 of 7 — Understanding the Theorem**

In a right triangle with legs $a$ and $b$ and hypotenuse $c$:

$a^2 + b^2 = c^2$

The **hypotenuse** is always the longest side, opposite the right angle.
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Legs: 3 and 4. Find hypotenuse.**

$3^2 + 4^2 = 9 + 16 = 25$
$c = \sqrt{25} = 5$ ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "In a right triangle, the hypotenuse is:",
                    "options": [
                              "The longest side",
                              "The shortest side",
                              "Any side",
                              "A leg"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Hypotenuse = longest, opposite right angle."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-input',
      type: 'input-boxes' as const,
      content: `
**Find the Hypotenuse** 🧮

1) Legs 3, 4. c = ?

2) Legs 5, 12. c = ?

3) Legs 6, 8. c = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","13","10"],
        hint1: "9 + 16 = 25. √25.",
        hint2: "25 + 144 = 169. √169.",
        hint3: "36 + 64 = 100. √100.",
        explanation: "1) 5. 2) 13. 3) 10."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The Pythagorean theorem applies to","options":["Right triangles only","All triangles","Rectangles","Circles"]},{"label":"$a^2 + b^2 = c^2$ — c is the","options":["Hypotenuse","Shorter leg","Longer leg","Any side"]}],
        correctAnswers: ["Right triangles only","Hypotenuse"],
        hint1: "Must have a 90° angle.",
        hint2: "c = longest side.",
        explanation: "Only right triangles. c = hypotenuse."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Legs | Hypotenuse |
|---|------|------------|
| 1 | 3, 4 | 5 |
| 2 | 5, 12 | 13 |
| 3 | 6, 8 | 10 |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Legs 5 and 12. Hypotenuse?",
                    "options": [
                              "13",
                              "17",
                              "7",
                              "60"
                    ],
                    "correctAnswer": 0,
                    "explanation": "25 + 144 = 169. √169 = 13."
          }
]
      }
    }
  ]
};
