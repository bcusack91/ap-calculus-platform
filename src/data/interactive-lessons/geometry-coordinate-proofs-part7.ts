export const geoCoordProofsPart7Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- Distance: $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
- Midpoint: $\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$
- Slope: $\\frac{y_2-y_1}{x_2-x_1}$
- Parallel: $m_1 = m_2$; Perpendicular: $m_1 \cdot m_2 = -1$
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Distance (1,1) to (4,5):**
$d = \sqrt{9+16} = 5$ ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Distance (0,0) to (5,12)?",
                    "options": [
                              "13",
                              "17",
                              "7",
                              "60"
                    ],
                    "correctAnswer": 0,
                    "explanation": "√(25+144)=√169=13."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Distance (0,0) to (5,12)?

2) Midpoint x of (2,8) and (6,4)?

3) Slope of (1,3) to (4,9)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","4","2"],
        hint1: "√(25+144).",
        hint2: "(2+6)/2.",
        hint3: "6/3.",
        explanation: "1) 13. 2) 4. 3) 2."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The distance formula is derived from","options":["The Pythagorean theorem","The midpoint formula","The slope formula","The quadratic formula"]},{"label":"Two lines with slopes 3 and 3 are","options":["Parallel","Perpendicular","Neither","Intersecting at 45°"]}],
        correctAnswers: ["The Pythagorean theorem","Parallel"],
        hint1: "Right triangle on coordinate plane.",
        hint2: "Equal slopes.",
        explanation: "Distance → Pythagorean theorem. Equal slopes → parallel."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Distance | (0,0) to (5,12) |
| 2 | Midpoint | (2,8) and (6,4) |
| 3 | Slope | (1,3) to (4,9) |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Slope of (1,3) to (4,9)?",
                    "options": [
                              "2",
                              "3",
                              "6",
                              "1/2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(9−3)/(4−1)=6/3=2."
          }
]
      }
    }
  ]
};
