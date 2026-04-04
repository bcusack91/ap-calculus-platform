export const geoTriCongruencePart1Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Classifying Triangles

**Part 1 of 7 — Classifying Triangles**

**By sides:**
- **Scalene**: no equal sides
- **Isosceles**: 2 equal sides
- **Equilateral**: 3 equal sides

**By angles:**
- **Acute**: all angles < 90°
- **Right**: one 90° angle
- **Obtuse**: one angle > 90°
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Sides: 5, 5, 8. Classify.**

Two equal sides → **Isosceles** ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Sides 6, 6, 6. Classification?",
                    "options": [
                              "Equilateral",
                              "Isosceles",
                              "Scalene",
                              "Right"
                    ],
                    "correctAnswer": 0,
                    "explanation": "All three sides equal."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p1-input',
      type: 'input-boxes' as const,
      content: `
**Equilateral Triangle Angles** 🧮

1) Angle A = ?

2) Angle B = ?

3) Angle C = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["60","60","60"],
        hint1: "180° ÷ 3.",
        hint2: "All angles equal.",
        hint3: "All three are the same.",
        explanation: "1) 60°. 2) 60°. 3) 60°. Total = 180°."
      }
    },
    {
      id: 'geometry-triangle-congruence-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A triangle with no equal sides is","options":["Scalene","Isosceles","Equilateral","Right"]},{"label":"The sum of angles in any triangle is","options":["180°","360°","90°","270°"]}],
        correctAnswers: ["Scalene","180°"],
        hint1: "No matching sides.",
        hint2: "Triangle angle sum.",
        explanation: "No equal sides = scalene. Angle sum = 180°."
      }
    },
    {
      id: 'geometry-triangle-congruence-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Sides | Classification |
|---|-------|---------------|
| 1 | 3, 4, 5 | Scalene right |
| 2 | 6, 6, 6 | Equilateral |
| 3 | 7, 7, 10 | Isosceles |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "An equilateral triangle has all angles equal to:",
                    "options": [
                              "60°",
                              "90°",
                              "45°",
                              "120°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "180°/3 = 60° each."
          }
]
      }
    }
  ]
};
