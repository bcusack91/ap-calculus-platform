export const g7GeometryPart4Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p4-intro',
      type: 'text' as const,
      content: `
# 📐 Surface Area

**Part 4 of 7 — Surface Area**

Surface area = total area of all faces.

**Rectangular prism**: $SA = 2(lw + lh + wh)$

**Cube**: $SA = 6s^2$
    
    `
    },
    {
      id: 'grade7-geometry-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Box: 5 × 3 × 4 cm.**

$SA = 2(5·3 + 5·4 + 3·4) = 2(15 + 20 + 12) = 2(47) = 94$ cm² ✅
    
    `
    },
    {
      id: 'grade7-geometry-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "SA of cube, side 3 cm?",
                    "options": [
                              "54 cm²",
                              "27 cm²",
                              "36 cm²",
                              "18 cm²"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6(3²) = 6(9) = 54."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p4-input',
      type: 'input-boxes' as const,
      content: `
**Surface Area** 🧮

1) Cube, side 3. SA?

2) Prism 6×4×2. SA?

3) Prism 8×5×3. SA?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["54","88","158"],
        hint1: "SA = 6s².",
        hint2: "2(6·4 + 6·2 + 4·2).",
        hint3: "2(8·5 + 8·3 + 5·3).",
        explanation: "1) 54. 2) 2(24+12+8)=88. 3) 2(40+24+15)=158."
      }
    },
    {
      id: 'grade7-geometry-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Surface area is measured in","options":["Square units","Cubic units","Linear units","No units"]},{"label":"A cube has how many identical faces?","options":["6","4","8","12"]}],
        correctAnswers: ["Square units","6"],
        hint1: "SA is a 2D measurement.",
        hint2: "A cube has all faces equal.",
        explanation: "SA → square units. Cube has 6 identical faces."
      }
    },
    {
      id: 'grade7-geometry-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Cube | s = 3 |
| 2 | Prism | 6×4×2 |
| 3 | Prism | 8×5×3 |
    
    `
    },
    {
      id: 'grade7-geometry-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A rectangular prism has how many faces?",
                    "options": [
                              "6",
                              "4",
                              "8",
                              "12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Top, bottom, front, back, left, right = 6."
          }
]
      }
    }
  ]
};
