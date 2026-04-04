export const g4GeoMeasurePart5Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p5-intro',
      type: 'text' as const,
      content: `
# 📏 Symmetry

**Part 5 of 7 — Symmetry**

A **line of symmetry** divides a shape into two matching halves.

| Shape | Lines of Symmetry |
|-------|-------------------|
| Circle | Infinite |
| Square | 4 |
| Rectangle | 2 |
| Equilateral △ | 3 |
| Isosceles △ | 1 |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Lines of symmetry in a regular pentagon?**

Regular pentagon → 5 equal sides, so **5 lines of symmetry** ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "How many lines of symmetry in a regular hexagon?",
                    "options": [
                              "6",
                              "3",
                              "2",
                              "12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Regular n-gon has n lines. Hexagon: 6."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p5-input',
      type: 'input-boxes' as const,
      content: `
**Symmetry** 🧮

1) Lines of symmetry in a rectangle (non-square)?

2) Lines of symmetry in a square?

3) Lines of symmetry in an isosceles (non-equilateral) triangle?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","4","1"],
        hint1: "Fold horizontally and vertically.",
        hint2: "Horizontal, vertical, and two diagonals.",
        hint3: "Only one line — through the vertex angle.",
        explanation: "1) 2. 2) 4. 3) 1."
      }
    },
    {
      id: 'grade4-geometry-measurement-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A circle has how many lines of symmetry?","options":["Infinitely many","1","4","0"]},{"label":"A scalene triangle has how many?","options":["0","1","3","2"]}],
        correctAnswers: ["Infinitely many","0"],
        hint1: "Any diameter works.",
        hint2: "No equal sides → no symmetry.",
        explanation: "Circle: infinite. Scalene triangle: 0."
      }
    },
    {
      id: 'grade4-geometry-measurement-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Lines of Symmetry |
|---|-------|-------------------|
| 1 | Rectangle | 2 |
| 2 | Equilateral triangle | 3 |
| 3 | Regular hexagon | 6 |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which letter has exactly 1 line of symmetry?",
                    "options": [
                              "A",
                              "H",
                              "X",
                              "O"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A has one vertical line. H, X, O have 2+."
          }
]
      }
    }
  ]
};
