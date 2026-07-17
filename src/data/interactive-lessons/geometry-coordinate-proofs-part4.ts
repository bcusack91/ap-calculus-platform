export const geoCoordProofsPart4Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Classifying Quadrilaterals

**Part 4 of 7 — Classifying Quadrilaterals**

Use slopes and distances to classify:
- **Parallelogram**: 2 pairs of parallel sides
- **Rectangle**: parallelogram + right angles
- **Rhombus**: parallelogram + all sides equal
- **Square**: rectangle + rhombus
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**ABCD: A(0,0), B(4,0), C(4,3), D(0,3). Classify.**

AB = CD = 4 (horizontal), AD = BC = 3 (vertical).
All angles 90° → **Rectangle** ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A square is always a:",
                    "options": [
                              "Rectangle",
                              "Trapezoid",
                              "Triangle",
                              "Pentagon"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Square = special rectangle (all sides equal)."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p4-input',
      type: 'input-boxes' as const,
      content: `
**Classify ABCD: A(0,0), B(4,0), C(4,3), D(0,3)** 🧮

1) Length AB?

2) Length BC?

3) Length AC (diagonal)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","3","5"],
        hint1: "|4−0|.",
        hint2: "|3−0|.",
        hint3: "$\\sqrt{16+9}$.",
        explanation: "1) 4. 2) 3. 3) $\\sqrt{25}$=5."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To prove a quadrilateral is a parallelogram, show","options":["Both pairs of opposite sides are parallel","One pair parallel","All angles equal","All sides equal"]},{"label":"A rectangle has ____ right angles","options":["4","2","1","0"]}],
        correctAnswers: ["Both pairs of opposite sides are parallel","4"],
        hint1: "Two pairs of parallel sides.",
        hint2: "All corners are 90°.",
        explanation: "Parallelogram: 2 pairs parallel. Rectangle: 4 right angles."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Property | Shape |
|---|---------|-------|
| 1 | 2 pairs parallel, all sides equal, no right angles | Rhombus |
| 2 | 2 pairs parallel, right angles, unequal sides | Rectangle |
| 3 | All sides equal and right angles | Square |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A parallelogram has:",
                    "options": [
                              "2 pairs of parallel sides",
                              "1 pair of parallel sides",
                              "No parallel sides",
                              "3 parallel sides"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Both pairs of opposite sides are parallel."
          }
]
      }
    }
  ]
};
