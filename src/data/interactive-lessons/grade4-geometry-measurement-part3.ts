export const g4GeoMeasurePart3Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p3-intro',
      type: 'text' as const,
      content: `
# 📏 Perimeter

**Part 3 of 7 — Perimeter**

**Perimeter** = total distance around a shape.

- **Rectangle**: $P = 2l + 2w$
- **Square**: $P = 4s$
- **Triangle**: $P = a + b + c$
- **Regular polygon**: $P = n \\times s$
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangle: length 7 cm, width 3 cm.**

$P = 2(7) + 2(3) = 14 + 6 = 20$ cm ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Perimeter of a square, side = 9 cm?",
                    "options": [
                              "36 cm",
                              "81 cm",
                              "18 cm",
                              "27 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "P = 4 × 9 = 36 cm."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p3-input',
      type: 'input-boxes' as const,
      content: `
**Perimeter** 🧮

1) Square, side 5 cm. Perimeter (cm)?

2) Rectangle 5 cm × 4 cm. Perimeter (cm)?

3) Regular hexagon, side 4 cm. Perimeter (cm)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["20","18","24"],
        hint1: "P = 4s for a square.",
        hint2: "P = 2l + 2w.",
        hint3: "Hexagon has 6 equal sides.",
        explanation: "1) 4(5)=20. 2) 2(5)+2(4)=18. 3) 6(4)=24."
      }
    },
    {
      id: 'grade4-geometry-measurement-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Rectangle perimeter formula is","options":["P = 2l + 2w","P = l × w","P = 4s","P = l + w"]},{"label":"Triangle with sides 3, 4, 5 has perimeter","options":["12","7","60","15"]}],
        correctAnswers: ["P = 2l + 2w","12"],
        hint1: "Perimeter = sum of all sides.",
        hint2: "3 + 4 + 5 = ?",
        explanation: "Rectangle: P=2l+2w. Triangle: 3+4+5=12."
      }
    },
    {
      id: 'grade4-geometry-measurement-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Square | Side = 6 cm |
| 2 | Rectangle | 9 × 4 cm |
| 3 | Triangle | 5, 7, 8 cm |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Rectangle perimeter = 24 m, width = 5 m. Length?",
                    "options": [
                              "7 m",
                              "12 m",
                              "19 m",
                              "14 m"
                    ],
                    "correctAnswer": 0,
                    "explanation": "24 = 2l + 10 → l = 7 m."
          }
]
      }
    }
  ]
};
