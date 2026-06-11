export const geoTriCongruencePart2Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Triangle Sum Theorem

**Part 2 of 7 — Triangle Sum Theorem**

$\\angle A + \\angle B + \\angle C = 180°$

The **exterior angle theorem**: an exterior angle equals the sum of the two remote interior angles.
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Angles: 40° and 75°. Find the third.**

$180 - 40 - 75 = 65°$ ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Angles 50° and 60°. Third angle?",
                    "options": [
                              "70°",
                              "110°",
                              "10°",
                              "180°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "180−50−60 = 70°."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Missing Angle** 🧮

1) Angles 50° and 60°. Third?

2) Angles 90° and 45°. Third?

3) Angles 30° and 30°. Third?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["70","45","120"],
        hint1: "180−50−60.",
        hint2: "180−90−45.",
        hint3: "180−30−30.",
        explanation: "1) 70. 2) 45. 3) 120."
      }
    },
    {
      id: 'geometry-triangle-congruence-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The sum of interior angles in a triangle is always","options":["180°","360°","90°","Depends on the triangle"]},{"label":"An exterior angle of a triangle is ____ than either remote interior angle","options":["Greater","Less","Equal","Unrelated"]}],
        correctAnswers: ["180°","Greater"],
        hint1: "Constant for all triangles.",
        hint2: "Sum of two positive numbers.",
        explanation: "Always 180°. Exterior angle > either remote angle."
      }
    },
    {
      id: 'geometry-triangle-congruence-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Known Angles | Third Angle |
|---|-------------|----------|
| 1 | 50°, 60° | 70° |
| 2 | 90°, 45° | 45° |
| 3 | 30°, 30° | 120° |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Exterior angle = sum of the two ____ interior angles:",
                    "options": [
                              "Remote (non-adjacent)",
                              "Adjacent",
                              "Largest",
                              "Smallest"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The two non-adjacent interior angles."
          }
]
      }
    }
  ]
};
