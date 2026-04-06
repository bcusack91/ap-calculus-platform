export const g7GeometryPart2Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p2-intro',
      type: 'text' as const,
      content: `
# 📐 Area of Composite Shapes

**Part 2 of 7 — Area of Composite Shapes**

Break complex shapes into simple ones:
- Rectangles: $A = lw$
- Triangles: $A = \\frac{1}{2}bh$
- Trapezoids: $A = \\frac{1}{2}(b_1 + b_2)h$
    
    `
    },
    {
      id: 'grade7-geometry-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**L-shape: 8×3 rectangle plus 4×3 rectangle.**

$A = 8(3) + 4(3) = 24 + 12 = 36$ sq units ✅
    
    `
    },
    {
      id: 'grade7-geometry-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Area of triangle: base 10, height 6?",
                    "options": [
                              "30",
                              "60",
                              "16",
                              "36"
                    ],
                    "correctAnswer": 0,
                    "explanation": "½(10)(6) = 30."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p2-input',
      type: 'input-boxes' as const,
      content: `
**Composite Areas** 🧮

1) Triangle: base 10, height 6. Area?

2) Trapezoid: bases 5 and 9, height 4. Area?

3) L-shape: 8×3 + 4×3. Total area?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["30","28","36"],
        hint1: "A = ½bh.",
        hint2: "A = ½(b₁+b₂)h.",
        hint3: "Add two rectangle areas.",
        explanation: "1) ½(10)(6)=30. 2) ½(14)(4)=28. 3) 24+12=36."
      }
    },
    {
      id: 'grade7-geometry-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Triangle area formula","options":["A = ½bh","A = bh","A = 2bh","A = b+h"]},{"label":"To find area of a composite shape","options":["Break into simpler shapes and add","Use one formula","Multiply all sides","Cannot be found"]}],
        correctAnswers: ["A = ½bh","Break into simpler shapes and add"],
        hint1: "Half of base times height.",
        hint2: "Decompose then combine.",
        explanation: "Triangle: ½bh. Composite: split and add."
      }
    },
    {
      id: 'grade7-geometry-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Method |
|---|-------|--------|
| 1 | T-shape | Two rectangles |
| 2 | Arrow | Rectangle + triangle |
| 3 | House | Rectangle + triangle |
    
    `
    },
    {
      id: 'grade7-geometry-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Trapezoid: bases 5 and 9, height 4. Area?",
                    "options": [
                              "28",
                              "56",
                              "14",
                              "36"
                    ],
                    "correctAnswer": 0,
                    "explanation": "½(5+9)(4) = ½(14)(4) = 28."
          }
]
      }
    }
  ]
};
