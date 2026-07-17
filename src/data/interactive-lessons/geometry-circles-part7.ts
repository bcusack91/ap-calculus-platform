export const geoCirclesPart7Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $d = 2r$
- Inscribed angle = ½ arc
- Arc length = $(\\theta/360)(2\\pi r)$
- Sector area = $(\\theta/360)(\\pi r^2)$
- Tangent ⊥ radius
- Intersecting chords: $ab = cd$
    
    `
    },
    {
      id: 'geometry-circles-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Inscribed angle for a 120° arc = $\\frac{120}{2} = 60°$ ✅**
    
    `
    },
    {
      id: 'geometry-circles-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Inscribed angle for 160° arc?",
                    "options": [
                              "80°",
                              "160°",
                              "320°",
                              "40°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "160/2 = 80°."
          }
]
      }
    },
    {
      id: 'geometry-circles-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Inscribed angle for 160° arc?

2) r = 11. Diameter?

3) 4 × ? = 6 × 2. Missing value?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["80","22","3"],
        hint1: "160 ÷ 2.",
        hint2: "2 × 11.",
        hint3: "12 ÷ 4.",
        explanation: "1) 80. 2) 22. 3) 3."
      }
    },
    {
      id: 'geometry-circles-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"C = 2πr is the formula for","options":["Circumference","Area","Diameter","Sector area"]},{"label":"A = $\\pi r^{2}$ is the formula for","options":["Area of a circle","Circumference","Arc length","Tangent length"]}],
        correctAnswers: ["Circumference","Area of a circle"],
        hint1: "Distance around.",
        hint2: "Space inside.",
        explanation: "2πr = circumference. $\\pi r^{2}$ = area."
      }
    },
    {
      id: 'geometry-circles-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Inscribed angle | Arc = 160° |
| 2 | Diameter | r = 11 |
| 3 | Chord | 4×? = 6×2 |
    
    `
    },
    {
      id: 'geometry-circles-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "4 × ? = 6 × 2:",
                    "options": [
                              "3",
                              "4",
                              "12",
                              "6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "12 = 4x → x = 3."
          }
]
      }
    }
  ]
};
