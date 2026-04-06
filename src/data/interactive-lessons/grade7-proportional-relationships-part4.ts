export const g7ProportionalPart4Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p4-intro',
      type: 'text' as const,
      content: `
# 📊 Scale Drawings

**Part 4 of 7 — Scale Drawings**

A **scale drawing** uses a ratio to represent real sizes.

Scale: $1\\text{ in} = 8\\text{ ft}$ means every inch represents 8 feet.

Actual = drawing measurement × scale factor
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Scale: 1 in = 5 ft. A room is 3 in wide on the drawing. Actual width?**

$3 \\times 5 = 15$ ft ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Scale 1 in = 10 mi. 3.5 in on map = ?",
                    "options": [
                              "35 mi",
                              "3.5 mi",
                              "13.5 mi",
                              "350 mi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3.5 × 10 = 35 miles."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p4-input',
      type: 'input-boxes' as const,
      content: `
**Scale Drawings** 🧮

1) Scale 1:50. Drawing: 4 cm. Actual (cm)?

2) Scale 1 in = 10 mi. Drawing: 3.5 in. Actual?

3) Scale 1:100. Drawing: 8 cm. Actual (cm)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["200","35","800"],
        hint1: "4 × 50.",
        hint2: "3.5 × 10.",
        hint3: "8 × 100.",
        explanation: "1) 200. 2) 35. 3) 800."
      }
    },
    {
      id: 'grade7-proportional-relationships-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find actual size from a scale drawing","options":["Multiply drawing size by scale factor","Divide drawing size by scale factor","Add the scale to drawing size","Subtract"]},{"label":"Scale 1:25 means 1 unit on paper equals","options":["25 units in reality","1/25 of a unit","25 papers","Nothing specific"]}],
        correctAnswers: ["Multiply drawing size by scale factor","25 units in reality"],
        hint1: "Scale up from drawing.",
        hint2: "1:25 is a ratio.",
        explanation: "Multiply by scale factor. 1:25 means 1 unit = 25 real units."
      }
    },
    {
      id: 'grade7-proportional-relationships-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scale | Drawing | Actual |
|---|-------|---------|--------|
| 1 | 1:50 | 4 cm | 200 cm |
| 2 | 1 in = 10 mi | 3.5 in | 35 mi |
| 3 | 1:100 | 8 cm | 800 cm |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Scale 1:50. 6 cm on drawing = ?",
                    "options": [
                              "300 cm",
                              "56 cm",
                              "50 cm",
                              "6 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6 × 50 = 300 cm."
          }
]
      }
    }
  ]
};
