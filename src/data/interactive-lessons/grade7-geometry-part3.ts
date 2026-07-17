export const g7GeometryPart3Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p3-intro',
      type: 'text' as const,
      content: `
# 📐 Circumference & Area of Circles

**Part 3 of 7 — Circumference & Area of Circles**

- **Circumference**: $C = 2\\pi r = \\pi d$
- **Area**: $A = \\pi r^2$

$\\pi \\approx 3.14$
    
    `
    },
    {
      id: 'grade7-geometry-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Circle with radius 5 cm.**

$C = 2\\pi(5) = 10\\pi \\approx 31.4$ cm
$A = \\pi(5)^2 = 25\\pi \\approx 78.5$ $cm^{2}$ ✅
    
    `
    },
    {
      id: 'grade7-geometry-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Circumference of circle with d = 10 cm? (Use π ≈ 3.14)",
                    "options": [
                              "31.4 cm",
                              "62.8 cm",
                              "78.5 cm",
                              "15.7 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "C = πd = 3.14(10) = 31.4 cm."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p3-input',
      type: 'input-boxes' as const,
      content: `
**Circles** 🧮 (Use π ≈ 3.14)

1) r = 7. Circumference?

2) d = 10. Circumference?

3) r = 4. Area?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["43.96","31.4","50.24"],
        hint1: "C = 2πr = 2(3.14)(7).",
        hint2: "C = πd = 3.14(10).",
        hint3: "A = $\\pi r^{2}$ = 3.14(16).",
        explanation: "1) 2(3.14)(7)=43.96. 2) 3.14(10)=31.4. 3) 3.14(16)=50.24."
      }
    },
    {
      id: 'grade7-geometry-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Circumference formula","options":["C = 2πr","C = $\\pi r^{2}$","C = 2r","C = πr"]},{"label":"Area of a circle formula","options":["A = $\\pi r^{2}$","A = 2πr","A = πd","A = $r^{2}$"]}],
        correctAnswers: ["C = 2πr","A = $\\pi r^{2}$"],
        hint1: "Distance around.",
        hint2: "Space inside.",
        explanation: "C = 2πr (circumference). A = $\\pi r^{2}$ (area)."
      }
    },
    {
      id: 'grade7-geometry-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Find |
|---|-------|------|
| 1 | r = 7 | C |
| 2 | d = 10 | C |
| 3 | r = 4 | A |
    
    `
    },
    {
      id: 'grade7-geometry-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Area of circle with r = 3? (Use π ≈ 3.14)",
                    "options": [
                              "28.26",
                              "18.84",
                              "9.42",
                              "6.28"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A = $\\pi (3)^{2}$ = 9π ≈ 28.26."
          }
]
      }
    }
  ]
};
