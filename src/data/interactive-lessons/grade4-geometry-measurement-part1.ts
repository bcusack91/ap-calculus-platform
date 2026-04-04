export const g4GeoMeasurePart1Data = {
  topicSlug: "geometry-measurement-grade4",
  sections: [
    {
      id: 'grade4-geometry-measurement-p1-intro',
      type: 'text' as const,
      content: `
# 📏 Lines & Angles

**Part 1 of 7 — Lines & Angles**

### Types of Angles
- **Acute**: less than 90°
- **Right**: exactly 90°
- **Obtuse**: between 90° and 180°
- **Straight**: exactly 180°

### Angle Pairs
- **Complementary**: sum to 90°
- **Supplementary**: sum to 180°
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Classify an angle of 135°.**

$90° < 135° < 180°$ → **obtuse** ✅

**Find the supplement of 65°.**

$180° - 65° = 115°$ ✅
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "An angle of exactly 90° is called:",
                    "options": [
                              "Right angle",
                              "Acute angle",
                              "Obtuse angle",
                              "Straight angle"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A right angle = exactly 90°."
          }
]
      }
    },
    {
      id: 'grade4-geometry-measurement-p1-input',
      type: 'input-boxes' as const,
      content: `
**Angle Measures** 🧮

1) A right angle measures _____ degrees.

2) A straight angle measures _____ degrees.

3) A full rotation measures _____ degrees.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["90","180","360"],
        hint1: "Think of a corner of a square.",
        hint2: "A straight line = half turn.",
        hint3: "A full circle.",
        explanation: "1) 90°. 2) 180°. 3) 360°."
      }
    },
    {
      id: 'grade4-geometry-measurement-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A 45° angle is classified as","options":["Acute","Right","Obtuse","Straight"]},{"label":"A 120° angle is classified as","options":["Obtuse","Acute","Right","Reflex"]}],
        correctAnswers: ["Acute","Obtuse"],
        hint1: "Is 45° less than 90°?",
        hint2: "Is 120° between 90° and 180°?",
        explanation: "45° < 90° → acute. 90° < 120° < 180° → obtuse."
      }
    },
    {
      id: 'grade4-geometry-measurement-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Acute vs obtuse | Compare to 90° |
| 2 | Complementary | Sum to 90° |
| 3 | Supplementary | Sum to 180° |
    
    `
    },
    {
      id: 'grade4-geometry-measurement-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Two supplementary angles: one is 65°. The other?",
                    "options": [
                              "115°",
                              "25°",
                              "90°",
                              "65°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "180° − 65° = 115°."
          }
]
      }
    }
  ]
};
