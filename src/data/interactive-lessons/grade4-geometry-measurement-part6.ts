export const g4GeoMeasurePart6Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p6-intro',
      type: 'text' as const,
      content: `
# 📏 Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply geometry and measurement skills to real-world problems!

1. Draw a picture
2. Identify what to find (perimeter? area? angle?)
3. Use the right formula
4. Include units
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangular garden 12 m × 8 m. Find perimeter and area.**

- $P = 2(12)+2(8) = 40$ m
- $A = 12 \\times 8 = 96$ $m^{2}$ ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Room 5 m × 4 m. Carpet needed?",
                    "options": [
                              "20 $m^{2}$",
                              "18 m",
                              "9 $m^{2}$",
                              "40 $m^{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Carpet = area = 5×4 = 20 $m^{2}$."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p6-input',
      type: 'input-boxes' as const,
      content: `
**Real-World Problems** 🧮

1) Garden 10 m × 5 m. Area $(m^{2})$?

2) Room 8 ft × 6 ft. Border tape needed (perimeter in ft)?

3) Two squares (side 2 cm) side by side form a 4 × 2 cm rectangle. Perimeter (cm)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","28","12"],
        hint1: "A = l × w.",
        hint2: "P = 2l + 2w.",
        hint3: "P = 2(4) + 2(2).",
        explanation: "1) 10×5=50. 2) 2(8)+2(6)=28. 3) 2(4)+2(2)=12."
      }
    },
    {
      id: 'grade4-geometry-measurement-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find fencing needed, calculate the","options":["Perimeter","Area","Volume","Weight"]},{"label":"To find paint for a wall, calculate the","options":["Area","Perimeter","Length","Diagonal"]}],
        correctAnswers: ["Perimeter","Area"],
        hint1: "Fencing goes around the outside.",
        hint2: "Paint covers a surface.",
        explanation: "Fencing = perimeter. Paint = area."
      }
    },
    {
      id: 'grade4-geometry-measurement-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Find |
|---|---------|------|
| 1 | Garden 10 × 5 m | Area |
| 2 | Room 8 × 6 ft, border tape | Perimeter |
| 3 | Two 2-cm squares side by side | Perimeter |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Square park, perimeter 80 m. Area?",
                    "options": [
                              "400 $m^{2}$",
                              "20 $m^{2}$",
                              "80 $m^{2}$",
                              "160 $m^{2}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Side = 80÷4 = 20 m. Area = $20^{2}$ = 400 $m^{2}$."
          }
]
      }
    }
  ]
};
