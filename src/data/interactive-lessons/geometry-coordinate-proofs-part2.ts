export const geoCoordProofsPart2Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Slope in Proofs

**Part 2 of 7 — Slope in Proofs**

$m = \frac{y_2-y_1}{x_2-x_1}$

- **Parallel lines**: same slope ($m_1 = m_2$)
- **Perpendicular lines**: negative reciprocal slopes ($m_1 \cdot m_2 = -1$)
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Lines with slopes 2 and −1/2. Perpendicular?**

$2 \times (-\frac{1}{2}) = -1$ → **Yes!** ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Lines with slopes 3 and 3 are:",
                    "options": [
                              "Parallel",
                              "Perpendicular",
                              "Neither",
                              "Identical"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same slope = parallel."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p2-input',
      type: 'input-boxes' as const,
      content: `
**Slopes** 🧮

1) Slope of (1,3) and (3,7)?

2) Perpendicular to slope 2?

3) Perpendicular to slope 4?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","-0.5","-0.25"],
        hint1: "(7−3)/(3−1).",
        hint2: "Negative reciprocal of 2.",
        hint3: "Negative reciprocal of 4.",
        explanation: "1) 4/2=2. 2) −1/2=−0.5. 3) −1/4=−0.25."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Parallel lines have","options":["Equal slopes","Perpendicular slopes","No slope","Zero slope"]},{"label":"Perpendicular slopes multiply to","options":["−1","0","1","Undefined"]}],
        correctAnswers: ["Equal slopes","−1"],
        hint1: "Same steepness.",
        hint2: "m₁ × m₂ = −1.",
        explanation: "Parallel: m₁=m₂. Perpendicular: m₁·m₂=−1."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Slopes | Relationship |
|---|----|---|
| 1 | 3, 3 | Parallel |
| 2 | 2, −1/2 | Perpendicular |
| 3 | 4, −1/4 | Perpendicular |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Perpendicular to slope 4 has slope:",
                    "options": [
                              "−1/4",
                              "1/4",
                              "−4",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4 × (−1/4) = −1."
          }
]
      }
    }
  ]
};
