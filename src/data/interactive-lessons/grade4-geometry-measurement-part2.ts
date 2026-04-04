export const g4GeoMeasurePart2Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p2-intro',
      type: 'text' as const,
      content: `
# 📏 Classifying Shapes

**Part 2 of 7 — Classifying Shapes**

### Triangles
- **Equilateral**: 3 equal sides
- **Isosceles**: 2 equal sides
- **Scalene**: no equal sides

### Quadrilaterals
- **Square**: 4 equal sides, 4 right angles
- **Rectangle**: opposite sides equal, 4 right angles
- **Parallelogram**: opposite sides parallel & equal
- **Trapezoid**: 1 pair of parallel sides
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A shape has 4 equal sides but no right angles. What is it?**

4 equal sides → could be square or rhombus.
No right angles → **rhombus** ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A triangle with all sides equal is:",
                    "options": [
                              "Equilateral",
                              "Isosceles",
                              "Scalene",
                              "Right"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Equilateral = three equal sides."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p2-input',
      type: 'input-boxes' as const,
      content: `
**Shape Properties** 🧮

1) How many sides does a quadrilateral have?

2) How many curved sides does a triangle have?

3) How many faces does a cube have?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","0","6"],
        hint1: "\"Quad\" means four.",
        hint2: "Triangles have only straight sides.",
        hint3: "Think of a die.",
        explanation: "1) 4. 2) 0. 3) 6."
      }
    },
    {
      id: 'grade4-geometry-measurement-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A shape with 5 sides is called a","options":["Pentagon","Hexagon","Quadrilateral","Octagon"]},{"label":"A shape with 8 sides is called an","options":["Octagon","Hexagon","Decagon","Pentagon"]}],
        correctAnswers: ["Pentagon","Octagon"],
        hint1: "\"Penta\" = 5.",
        hint2: "\"Octa\" = 8.",
        explanation: "Pentagon = 5. Octagon = 8."
      }
    },
    {
      id: 'grade4-geometry-measurement-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Count sides | Tri=3, Quad=4, Pent=5, Hex=6 |
| 2 | Identify properties | Parallel sides, equal angles |
| 3 | Shape hierarchy | A square is a special rectangle |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is always true?",
                    "options": [
                              "Every square is a rectangle",
                              "Every rectangle is a square",
                              "Every rhombus is a square",
                              "Every trapezoid is a parallelogram"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A square has all rectangle properties plus equal sides."
          }
]
      }
    }
  ]
};
