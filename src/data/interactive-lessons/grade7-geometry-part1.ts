export const g7GeometryPart1Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Angle Relationships

**Part 1 of 7 — Angle Relationships**

- **Complementary**: sum to 90°
- **Supplementary**: sum to 180°
- **Vertical angles**: equal
- **Adjacent angles**: share a side
    
    `
    },
    {
      id: 'grade7-geometry-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

Two supplementary angles: one is 65°. Other = $180° - 65° = 115°$ ✅
    
    `
    },
    {
      id: 'grade7-geometry-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Complement of 35°?",
                    "options": [
                              "55°",
                              "145°",
                              "35°",
                              "90°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "90° − 35° = 55°."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p1-input',
      type: 'input-boxes' as const,
      content: `
**Angle Relationships** 🧮

1) Complement of 40°?

2) Complement of 20°?

3) Supplement of 65°?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","70","115"],
        hint1: "90° − 40°.",
        hint2: "90° − 20°.",
        hint3: "180° − 65°.",
        explanation: "1) 50. 2) 70. 3) 115."
      }
    },
    {
      id: 'grade7-geometry-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Complementary angles sum to","options":["90°","180°","360°","45°"]},{"label":"Supplementary angles sum to","options":["180°","90°","360°","270°"]}],
        correctAnswers: ["90°","180°"],
        hint1: "Complementary = right angle.",
        hint2: "Supplementary = straight line.",
        explanation: "Complementary: 90°. Supplementary: 180°."
      }
    },
    {
      id: 'grade7-geometry-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Example |
|---|---------|--------|
| 1 | Complementary | 40° + ? = 90° |
| 2 | Supplementary | 110° + ? = 180° |
| 3 | Vertical angles | Equal to each other |
    
    `
    },
    {
      id: 'grade7-geometry-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Vertical angles are always:",
                    "options": [
                              "Equal",
                              "Supplementary",
                              "Complementary",
                              "Adjacent"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Vertical angles are congruent."
          }
]
      }
    }
  ]
};
