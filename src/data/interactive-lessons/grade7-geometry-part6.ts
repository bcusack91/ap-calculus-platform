export const g7GeometryPart6Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply geometry skills:
- Choose the right formula
- Draw pictures
- Include correct units
    
    `
    },
    {
      id: 'grade7-geometry-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Paint a wall 12 ft × 8 ft with a 3 ft × 4 ft window. Paint needed?**

Wall area: $12(8) = 96$ ft²
Window: $3(4) = 12$ ft²
Paint: $96 - 12 = 84$ ft² ✅
    
    `
    },
    {
      id: 'grade7-geometry-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Fencing for circular garden, r=5 m? (π≈3.14)",
                    "options": [
                              "31.4 m",
                              "78.5 m",
                              "15.7 m",
                              "25 m"
                    ],
                    "correctAnswer": 0,
                    "explanation": "C = 2π(5) = 31.4 m."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Fence circular garden, r=5. How many meters? (π≈3.14)

2) Gift wrap a 4×3×2 box. SA?

3) Paint a 12×8 wall minus a 3×4 window. Area to paint?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["31.4","52","84"],
        hint1: "C = 2πr.",
        hint2: "SA = 2(lw+lh+wh).",
        hint3: "Wall − window.",
        explanation: "1) 2(3.14)(5)=31.4. 2) 2(12+8+6)=52. 3) 96−12=84."
      }
    },
    {
      id: 'grade7-geometry-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Fencing goes around → need","options":["Perimeter/Circumference","Area","Volume","Diameter"]},{"label":"Filling a pool → need","options":["Volume","Surface area","Perimeter","Length"]}],
        correctAnswers: ["Perimeter/Circumference","Volume"],
        hint1: "Around = distance around.",
        hint2: "Filling = 3D space.",
        explanation: "Fencing → circumference. Filling → volume."
      }
    },
    {
      id: 'grade7-geometry-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Formula |
|---|---------|--------|
| 1 | Fencing for circular garden, r=5 | C = 2πr |
| 2 | Wrapping a 4×3×2 box | SA |
| 3 | Water in cylindrical tank | V = πr²h |
    
    `
    },
    {
      id: 'grade7-geometry-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "To wrap a box, you need to find its:",
                    "options": [
                              "Surface area",
                              "Volume",
                              "Perimeter",
                              "Weight"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Wrapping covers the surface."
          }
]
      }
    }
  ]
};
