export const geoCirclesPart6Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply circle theorems:
- Identify the given information
- Choose the right theorem
- Draw a diagram
    
    `
    },
    {
      id: 'geometry-circles-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Pizza slice: r=10, θ=45°. Area of slice? (π≈3.14)**

$\frac{45}{360} \times 3.14(100) = \frac{1}{8}(314) = 39.25$ sq units ✅
    
    `
    },
    {
      id: 'geometry-circles-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Arc length: r=14, θ=180° (π≈3.14)?",
                    "options": [
                              "43.96",
                              "87.92",
                              "21.98",
                              "14"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(180/360)(2)(3.14)(14) = 43.96."
          }
]
      }
    },
    {
      id: 'geometry-circles-p6-input',
      type: 'input-boxes' as const,
      content: `
**Circle Applications** 🧮 (π≈3.14)

1) Arc: r=14, θ=180°. Length?

2) Sector: r=6, θ=90°. Area?

3) r=6, tangent=8. Distance from center?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["43.96","28.26","10"],
        hint1: "(1/2)(2)(3.14)(14).",
        hint2: "(1/4)(3.14)(36).",
        hint3: "√(36+64).",
        explanation: "1) 43.96. 2) 28.26. 3) 10."
      }
    },
    {
      id: 'geometry-circles-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A pizza slice is shaped like a","options":["Sector","Segment","Chord","Tangent"]},{"label":"The arc of a half-circle is","options":["A semicircle","A quarter circle","A full circle","A chord"]}],
        correctAnswers: ["Sector","A semicircle"],
        hint1: "Wedge from center.",
        hint2: "180° arc.",
        explanation: "Pizza slice = sector. Half-circle arc = semicircle."
      }
    },
    {
      id: 'geometry-circles-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | Wheel r=14, rotation angle 180° | Arc length |
| 2 | Clock face, 90° sector, r=6 | Sector area |
| 3 | Tangent=8, r=6 | Distance |
    
    `
    },
    {
      id: 'geometry-circles-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "r=6, tangent=8. Distance from center?",
                    "options": [
                              "10",
                              "14",
                              "48",
                              "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "√(36+64)=√100=10."
          }
]
      }
    }
  ]
};
