export const geoCirclesPart1Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Parts of a Circle

**Part 1 of 7 — Parts of a Circle**

- **Radius** ($r$): center to edge
- **Diameter** ($d = 2r$): edge to edge through center
- **Chord**: segment with both endpoints on the circle
- **Secant**: line that intersects a circle at two points
- **Tangent**: line that touches the circle at one point
    
    `
    },
    {
      id: 'geometry-circles-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Circle with radius 7. What is the diameter?**

$d = 2r = 2(7) = 14$ ✅
    
    `
    },
    {
      id: 'geometry-circles-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The diameter is:",
                    "options": [
                              "Twice the radius",
                              "Half the radius",
                              "Equal to the radius",
                              "The circumference"
                    ],
                    "correctAnswer": 0,
                    "explanation": "d = 2r."
          }
]
      }
    },
    {
      id: 'geometry-circles-p1-input',
      type: 'input-boxes' as const,
      content: `
**Circle Parts** 🧮

1) r = 5. Diameter?

2) d = 18. Radius?

3) r = 3.5. Diameter?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["10","9","7"],
        hint1: "d = 2r.",
        hint2: "r = d/2.",
        hint3: "d = 2(3.5).",
        explanation: "1) 10. 2) 9. 3) 7."
      }
    },
    {
      id: 'geometry-circles-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A chord that passes through the center is called","options":["A diameter","A radius","A tangent","A secant"]},{"label":"All radii of a circle are","options":["Equal in length","Different lengths","Chords","Tangent lines"]}],
        correctAnswers: ["A diameter","Equal in length"],
        hint1: "Longest chord.",
        hint2: "Same distance from center.",
        explanation: "Diameter is a chord through center. All radii are equal."
      }
    },
    {
      id: 'geometry-circles-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Find |
|---|-------|------|
| 1 | r = 5 | d |
| 2 | d = 18 | r |
| 3 | r = 3.5 | d |
    
    `
    },
    {
      id: 'geometry-circles-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A tangent line touches a circle at:",
                    "options": [
                              "Exactly one point",
                              "Two points",
                              "Zero points",
                              "Infinite points"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tangent = one point of tangency."
          }
]
      }
    }
  ]
};
