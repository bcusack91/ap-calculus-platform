export const geoCoordProofsPart6Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Coordinate proof strategy:
1. Place the figure on a coordinate plane
2. Assign coordinates to vertices
3. Use formulas (distance, slope, midpoint)
4. Draw conclusions
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Prove the diagonals of rectangle (0,0),(6,0),(6,4),(0,4) are equal.**

$d_1 = \\sqrt{6^2+4^2} = \\sqrt{52}$
$d_2 = \\sqrt{(-6)^2+4^2} = \\sqrt{52}$

Equal! ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Midpoint of (0,0) and (6,4)?",
                    "options": [
                              "(3,2)",
                              "(6,4)",
                              "(3,4)",
                              "(0,2)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "((0+6)/2, (0+4)/2) = (3,2)."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p6-input',
      type: 'input-boxes' as const,
      content: `
**Coordinate Proofs** 🧮

Midpoint of (0,0) and (6,4):

1) Midpoint x = ?

2) Midpoint y = ?

3) Diagonal of 3×4 rectangle?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","5"],
        hint1: "(0+6)/2.",
        hint2: "(0+4)/2.",
        hint3: "$\\sqrt{9+16}$.",
        explanation: "1) 3. 2) 2. 3) 5."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A good first step in coordinate proofs is to","options":["Place a vertex at the origin","Guess the answer","Skip the coordinates","Use only one axis"]},{"label":"The diagonals of a rectangle are","options":["Equal","Perpendicular","Different","Parallel"]}],
        correctAnswers: ["Place a vertex at the origin","Equal"],
        hint1: "Origin simplifies math.",
        hint2: "Rectangle property.",
        explanation: "Start at origin. Rectangle diagonals are equal."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Task | Method |
|---|------|--------|
| 1 | Midpoint of (0,0)→(6,4) | Midpoint formula |
| 2 | Is (1,1),(3,5),(5,1) isosceles? | Distance formula |
| 3 | Diagonal of 3×4 rectangle | Pythagorean theorem |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Diagonal of 3×4 rectangle?",
                    "options": [
                              "5",
                              "7",
                              "12",
                              "3.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\sqrt{9+16}$ = $\\sqrt{25}$ = 5."
          }
]
      }
    }
  ]
};
