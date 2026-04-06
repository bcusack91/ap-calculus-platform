export const g4GeoMeasurePart4Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p4-intro',
      type: 'text' as const,
      content: `
# 📏 Area of Rectangles

**Part 4 of 7 — Area of Rectangles**

**Area** = space inside, measured in **square units**.

$A = l \\times w$

For squares: $A = s^2$
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangle: 8 m × 5 m.** $A = 8 \\times 5 = 40$ m² ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Area of rectangle 12 cm × 3 cm?",
                    "options": [
                              "36 cm²",
                              "30 cm²",
                              "15 cm²",
                              "72 cm²"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A = 12 × 3 = 36 cm²."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p4-input',
      type: 'input-boxes' as const,
      content: `
**Area** 🧮

1) Rectangle 6 × 4 cm. Area (cm²)?

2) Rectangle 7 × 5 m. Area (m²)?

3) Square, side 10 in. Area (in²)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["24","35","100"],
        hint1: "A = l × w = 6 × 4.",
        hint2: "A = 7 × 5.",
        hint3: "A = s² = 10².",
        explanation: "1) 24. 2) 35. 3) 100."
      }
    },
    {
      id: 'grade4-geometry-measurement-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Area is measured in","options":["Square units","Linear units","Cubic units","No units"]},{"label":"Rectangle area 30 m², length 6 m. Width?","options":["5 m","24 m","180 m","36 m"]}],
        correctAnswers: ["Square units","5 m"],
        hint1: "Area describes a 2D region.",
        hint2: "30 = 6 × w → w = ?",
        explanation: "Area → square units. w = 30 ÷ 6 = 5 m."
      }
    },
    {
      id: 'grade4-geometry-measurement-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Rectangle | 6 × 4 cm |
| 2 | Rectangle | 7 × 5 m |
| 3 | Square | Side = 10 in |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Square garden, area 49 m². Side length?",
                    "options": [
                              "7 m",
                              "24.5 m",
                              "14 m",
                              "49 m"
                    ],
                    "correctAnswer": 0,
                    "explanation": "s = √49 = 7 m."
          }
]
      }
    }
  ]
};
