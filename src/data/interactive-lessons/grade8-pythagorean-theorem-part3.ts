export const g8PythagoreanPart3Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Distance Between Points

**Part 3 of 7 — Distance Between Points**

The **distance formula** comes from the Pythagorean theorem:

$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$

The horizontal and vertical differences form the legs of a right triangle.
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Distance between (1, 2) and (4, 6).**

$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9+16} = \\sqrt{25} = 5$ ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Distance from (0,0) to (3,4)?",
                    "options": [
                              "5",
                              "7",
                              "12",
                              "25"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\sqrt{9+16}$ = $\\sqrt{25}$ = 5."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p3-input',
      type: 'input-boxes' as const,
      content: `
**Find the Distance** 🧮

1) (0,0) to (3,4). d = ?

2) (1,2) to (4,6). d = ?

3) (0,0) to (5,12). d = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","5","13"],
        hint1: "$\\sqrt{9+16}$.",
        hint2: "$\\sqrt{9+16}$.",
        hint3: "$\\sqrt{25+144}$.",
        explanation: "1) $\\sqrt{25}$=5. 2) $\\sqrt{25}$=5. 3) $\\sqrt{169}$=13."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The distance formula uses a","options":["Square root","Cube root","Fourth root","No root"]},{"label":"The differences $(x_{2}-x_{1})$ and $(y_{2}-y_{1})$ represent","options":["Legs of a right triangle","The hypotenuse","The slope","The area"]}],
        correctAnswers: ["Square root","Legs of a right triangle"],
        hint1: "Final step: take the square root.",
        hint2: "Horizontal and vertical legs.",
        explanation: "Distance uses square root. Differences = triangle legs."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Points | Distance |
|---|--------|----------|
| 1 | (0,0) and (3,4) | 5 |
| 2 | (1,2) and (4,6) | 5 |
| 3 | (0,0) and (5,12) | 13 |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The distance formula is derived from:",
                    "options": [
                              "The Pythagorean theorem",
                              "Area formula",
                              "Slope formula",
                              "Midpoint formula"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Distance formula = Pythagorean theorem on coordinate plane."
          }
]
      }
    }
  ]
};
