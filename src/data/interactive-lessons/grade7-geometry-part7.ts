export const g7GeometryPart7Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- Complement: $90° - x$, Supplement: $180° - x$
- Triangle: $A = \\frac{1}{2}bh$
- Circle: $C = 2\pi r$, $A = \pi r^2$
- SA prism: $2(lw+lh+wh)$
- V prism: $lwh$, V cylinder: $\pi r^2 h$
    
    `
    },
    {
      id: 'grade7-geometry-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Cylinder: r = 4, h = 10. Volume?**
$V = \pi(16)(10) = 160\pi \approx 502.4$ ✅
    
    `
    },
    {
      id: 'grade7-geometry-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Supplement of 72°?",
                    "options": [
                              "108°",
                              "18°",
                              "72°",
                              "288°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "180° − 72° = 108°."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Supplement of 72°?

2) Triangle: b=8, h=5. Area?

3) Cube side 6. Volume?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["108","20","216"],
        hint1: "180 − 72.",
        hint2: "½(8)(5).",
        hint3: "6³.",
        explanation: "1) 108. 2) 20. 3) 216."
      }
    },
    {
      id: 'grade7-geometry-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"V = πr²h is the formula for a","options":["Cylinder","Cube","Sphere","Cone"]},{"label":"SA of a cube with side s","options":["6s²","s³","4s²","s²"]}],
        correctAnswers: ["Cylinder","6s²"],
        hint1: "Circular base × height.",
        hint2: "6 faces, each s².",
        explanation: "πr²h = cylinder. SA cube = 6s²."
      }
    },
    {
      id: 'grade7-geometry-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Angle | Supplement of 72° |
| 2 | Area | Triangle: b=8, h=5 |
| 3 | Volume | Cube side 6 |
    
    `
    },
    {
      id: 'grade7-geometry-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Volume of cube side 6?",
                    "options": [
                              "216",
                              "36",
                              "72",
                              "108"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6³ = 216."
          }
]
      }
    }
  ]
};
