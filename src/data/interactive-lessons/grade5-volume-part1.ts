export const g5VolumePart1Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p1-intro',
      type: 'text' as const,
      content: `
# 📦 Understanding Volume

**Part 1 of 7 — Understanding Volume**

**Volume** = the amount of space inside a 3D object, measured in **cubic units** (cm³, m³, in³).

Think of volume as the number of unit cubes that fit inside a shape.
    
    `
    },
    {
      id: 'grade5-volume-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A box is filled with unit cubes in 3 layers, each layer has 4 rows of 5 cubes.**

$V = 5 \\times 4 \\times 3 = 60$ unit cubes ✅
    
    `
    },
    {
      id: 'grade5-volume-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Volume is measured in:",
                    "options": [
                              "Cubic units",
                              "Square units",
                              "Linear units",
                              "No units"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Volume is 3D → cubic units."
          }
]
      }
    },
    {
      id: 'grade5-volume-p1-input',
      type: 'input-boxes' as const,
      content: `
**Counting Cubes** 🧮

1) A box: 4 long, 3 wide, 2 high. Volume (unit cubes)?

2) A box: 5 long, 4 wide, 3 high. Volume?

3) A box: 3 long, 2 wide, 2 high. Volume?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["24","60","12"],
        hint1: "4 × 3 × 2.",
        hint2: "5 × 4 × 3.",
        hint3: "3 × 2 × 2.",
        explanation: "1) 24. 2) 60. 3) 12."
      }
    },
    {
      id: 'grade5-volume-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Volume tells us how much _____ a 3D shape takes up","options":["Space","Surface","Length","Weight"]},{"label":"The abbreviation for cubic centimeters is","options":["cm³","cm²","cm","c³"]}],
        correctAnswers: ["Space","cm³"],
        hint1: "Volume is about the inside.",
        hint2: "Cubic = exponent 3.",
        explanation: "Volume = space inside. Cubic centimeters = cm³."
      }
    },
    {
      id: 'grade5-volume-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Unit cube | Volume = 1 cubic unit |
| 2 | Count cubes | Multiply layers × rows × columns |
| 3 | Units | Always cubic (cm³, not cm²) |
    
    `
    },
    {
      id: 'grade5-volume-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A unit cube has a volume of:",
                    "options": [
                              "1 cubic unit",
                              "1 square unit",
                              "6 cubic units",
                              "3 cubic units"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A unit cube is 1×1×1 = 1 cubic unit."
          }
]
      }
    }
  ]
};
