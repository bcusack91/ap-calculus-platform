export const g4GeoMeasurePart7Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p7-intro',
      type: 'text' as const,
      content: `
# 📏 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Acute (<90°), Right (=90°), Obtuse (>90°), Straight (=180°)
- Shapes classified by sides and angles
- $P = 2l + 2w$, $A = l \times w$
- Lines of symmetry
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangle 9 × 6 m.**

$P = 2(9)+2(6) = 30$ m, $A = 9 \times 6 = 54$ m² ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Equilateral triangle, side 7 cm. Perimeter?",
                    "options": [
                              "21 cm",
                              "14 cm",
                              "49 cm",
                              "28 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "P = 3×7 = 21 cm."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Square, side 6 cm. Area (cm²)?

2) Rectangle 12 × 5 m. Area (m²)?

3) An octagon has how many sides?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["36","60","8"],
        hint1: "A = s² = 6².",
        hint2: "A = 12 × 5.",
        hint3: "\"Oct\" = eight.",
        explanation: "1) 36. 2) 60. 3) 8."
      }
    },
    {
      id: 'grade4-geometry-measurement-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Area of rectangle formula","options":["A = l × w","A = 2l + 2w","A = s²","A = ½bh"]},{"label":"Supplementary angles sum to","options":["180°","90°","360°","270°"]}],
        correctAnswers: ["A = l × w","180°"],
        hint1: "Area = product of sides.",
        hint2: "What do supplementary angles add to?",
        explanation: "A = l × w. Supplementary = 180°."
      }
    },
    {
      id: 'grade4-geometry-measurement-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Area | Square, side 6 cm |
| 2 | Area | Rectangle 12 × 5 m |
| 3 | Shapes | Sides of an octagon? |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Rectangle area 48 cm², length 8 cm. Perimeter?",
                    "options": [
                              "28 cm",
                              "14 cm",
                              "22 cm",
                              "56 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "w = 48÷8 = 6. P = 2(8)+2(6) = 28 cm."
          }
]
      }
    }
  ]
};
