export const geoCirclesPart5Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Chords & Secants

**Part 5 of 7 — Chords & Secants**

### Key Theorems
- **Intersecting chords**: $a \cdot b = c \cdot d$ (pieces of each chord)
- **Equal chords** are equidistant from center
- **Perpendicular from center** bisects a chord
    
    `
    },
    {
      id: 'geometry-circles-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Two chords cross: segments 3, 8 and 4, ?.**

$3 \\times 8 = 4 \\times x \\Rightarrow 24 = 4x \\Rightarrow x = 6$ ✅
    
    `
    },
    {
      id: 'geometry-circles-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Intersecting chords: 2×9 = 3×?",
                    "options": [
                              "6",
                              "18",
                              "11",
                              "5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "18 = 3x → x = 6."
          }
]
      }
    },
    {
      id: 'geometry-circles-p5-input',
      type: 'input-boxes' as const,
      content: `
**Intersecting Chords** 🧮

$a \cdot b = c \cdot d$

1) 3 × 8 = 4 × ?

2) 2 × 9 = 3 × ?

3) 5 × 4 = 10 × ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","6","2"],
        hint1: "24 ÷ 4.",
        hint2: "18 ÷ 3.",
        hint3: "20 ÷ 10.",
        explanation: "1) 6. 2) 6. 3) 2."
      }
    },
    {
      id: 'geometry-circles-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For intersecting chords, the products of segments are","options":["Equal","Different","Added","Subtracted"]},{"label":"The longest chord of a circle is the","options":["Diameter","Radius","Tangent","Secant"]}],
        correctAnswers: ["Equal","Diameter"],
        hint1: "ab = cd.",
        hint2: "Through the center.",
        explanation: "Chord segments: ab=cd. Longest chord = diameter."
      }
    },
    {
      id: 'geometry-circles-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Chord 1 | Chord 2 | Missing |
|---|---------|---------|--------|
| 1 | 3 × 8 | 4 × ? | 6 |
| 2 | 2 × 9 | 3 × ? | 6 |
| 3 | 5 × 4 | 10 × ? | 2 |
    
    `
    },
    {
      id: 'geometry-circles-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A perpendicular from the center to a chord:",
                    "options": [
                              "Bisects the chord",
                              "Doubles the chord",
                              "Is parallel",
                              "Creates a tangent"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Perpendicular from center bisects chord."
          }
]
      }
    }
  ]
};
