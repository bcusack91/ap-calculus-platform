export const geoCoordProofsPart3Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Proving Parallel & Perpendicular

**Part 3 of 7 — Proving Parallel & Perpendicular**

To prove lines are **parallel**: show slopes are equal.
To prove lines are **perpendicular**: show slopes multiply to −1.

Calculate slopes from given coordinates, then compare.
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Are AB and CD parallel? A(1,2), B(3,6), C(0,1), D(2,5).**

$m_{AB} = \\frac{6-2}{3-1} = 2$, $m_{CD} = \\frac{5-1}{2-0} = 2$

Equal slopes → **parallel** ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "To prove two sides are parallel, show:",
                    "options": [
                              "Equal slopes",
                              "Product of slopes = −1",
                              "Equal lengths",
                              "Equal areas"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Parallel = same slope."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p3-input',
      type: 'input-boxes' as const,
      content: `
**Prove Parallel/Perpendicular** 🧮

1) Slope of (0,0) to (1,3)?

2) Slope of (2,1) to (3,4)?

3) Slope of (0,0) to (1,2)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","3","2"],
        hint1: "3/1.",
        hint2: "(4−1)/(3−2).",
        hint3: "2/1.",
        explanation: "1) 3. 2) 3 (parallel to line 1). 3) 2."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Coordinate proofs use ____ to prove geometric properties","options":["Algebra and coordinates","Rulers and protractors","Guessing","Theorems only"]},{"label":"Perpendicular lines form ____ angles","options":["Right (90°)","Acute","Obtuse","Straight"]}],
        correctAnswers: ["Algebra and coordinates","Right (90°)"],
        hint1: "Analytic geometry.",
        hint2: "⊥ = 90°.",
        explanation: "Coordinate proofs use algebra. Perpendicular = 90°."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Lines | Slopes | Relation |
|---|-------|--------|----------|
| 1 | (0,0)→(1,3) and (2,1)→(3,4) | 3,3 | Parallel |
| 2 | (0,0)→(1,2) and (0,0)→(2,−1) | 2,−0.5 | Perpendicular |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Lines (0,0)→(1,2) and (0,0)→(2,−1). Relationship?",
                    "options": [
                              "Perpendicular",
                              "Parallel",
                              "Neither",
                              "Identical"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2×(−0.5)=−1."
          }
]
      }
    }
  ]
};
