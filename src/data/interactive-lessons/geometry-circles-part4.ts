export const geoCirclesPart4Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Tangent Lines

**Part 4 of 7 — Tangent Lines**

A tangent is **perpendicular** to the radius at the point of tangency.

If tangent meets radius at point P: angle = 90°.

**Two tangent segments** from an external point are **equal** in length.
    
    `
    },
    {
      id: 'geometry-circles-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Radius = 5, tangent segment = 12. Distance from center to external point?**

Forms a right triangle: $d = \\sqrt{5^2 + 12^2} = \\sqrt{25+144} = \\sqrt{169} = 13$ ✅
    
    `
    },
    {
      id: 'geometry-circles-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A tangent is ____ to the radius at the point of tangency:",
                    "options": [
                              "Perpendicular",
                              "Parallel",
                              "Equal",
                              "Bisecting"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tangent ⊥ radius."
          }
]
      }
    },
    {
      id: 'geometry-circles-p4-input',
      type: 'input-boxes' as const,
      content: `
**Tangent Problems** 🧮

1) r=3, tangent=4. Distance from center?

2) r=5, tangent=12. Distance from center?

3) r=8, tangent=6. Distance from center?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","13","10"],
        hint1: "$\\sqrt{9+16}$.",
        hint2: "$\\sqrt{25+144}$.",
        hint3: "$\\sqrt{64+36}$.",
        explanation: "1) $\\sqrt{25}$=5. 2) $\\sqrt{169}$=13. 3) $\\sqrt{100}$=10."
      }
    },
    {
      id: 'geometry-circles-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The angle between a tangent and radius is","options":["90°","180°","45°","60°"]},{"label":"Two tangents from the same external point are","options":["Equal in length","Perpendicular","Parallel","Different lengths"]}],
        correctAnswers: ["90°","Equal in length"],
        hint1: "Tangent ⊥ radius.",
        hint2: "Tangent segments from same point.",
        explanation: "Tangent ⊥ radius (90°). Equal tangent segments from external point."
      }
    },
    {
      id: 'geometry-circles-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Radius | Tangent | Distance |
|---|--------|---------|----------|
| 1 | 3 | 4 | 5 |
| 2 | 5 | 12 | 13 |
| 3 | 8 | 6 | 10 |
    
    `
    },
    {
      id: 'geometry-circles-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "r=3, tangent=4. Distance to center from external point?",
                    "options": [
                              "5",
                              "7",
                              "12",
                              "25"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\sqrt{9+16}$=$\\sqrt{25}$=5."
          }
]
      }
    }
  ]
};
