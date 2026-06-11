export const geoCoordProofsPart5Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Proving Triangle Properties

**Part 5 of 7 — Proving Triangle Properties**

Use coordinates to prove:
- **Isosceles**: two sides equal (distance formula)
- **Right triangle**: perpendicular sides (slope product = −1)
- **Equilateral**: all three sides equal
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A(0,0), B(4,0), C(2,3). Isosceles?**

$AB = 4$, $AC = \\sqrt{4+9} = \\sqrt{13}$, $BC = \\sqrt{4+9} = \\sqrt{13}$

AC = BC → **Isosceles** ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "To prove a triangle is isosceles, show:",
                    "options": [
                              "Two sides are equal",
                              "All sides equal",
                              "No sides equal",
                              "Right angle exists"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Isosceles = at least 2 equal sides."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p5-input',
      type: 'input-boxes' as const,
      content: `
**Triangle (0,0), (3,0), (0,4)** 🧮

1) Side from (0,0) to (0,4). Length?

2) Side from (0,0) to (3,0). Length?

3) Side from (3,0) to (0,4). Length?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","3","5"],
        hint1: "|4−0|.",
        hint2: "|3−0|.",
        hint3: "√(9+16).",
        explanation: "1) 4. 2) 3. 3) √25=5. This is a 3-4-5 right triangle!"
      }
    },
    {
      id: 'geometry-coordinate-proofs-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"An isosceles triangle has at least","options":["2 equal sides","3 equal sides","0 equal sides","1 right angle"]},{"label":"A 3-4-5 right triangle has a hypotenuse of","options":["5","4","3","12"]}],
        correctAnswers: ["2 equal sides","5"],
        hint1: "At least two sides match.",
        hint2: "Longest side.",
        explanation: "Isosceles: ≥2 equal sides. 3-4-5: hypotenuse=5."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Vertices | Type |
|---|---------|------|
| 1 | (0,0),(4,0),(2,3) | Isosceles |
| 2 | (0,0),(3,0),(0,4) | Right |
| 3 | (0,0),(6,0),(3,3) | Isosceles |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For right triangle, two sides must be:",
                    "options": [
                              "Perpendicular",
                              "Parallel",
                              "Equal",
                              "Opposite"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Right angle between two sides → perpendicular."
          }
]
      }
    }
  ]
};
