export const geoCoordProofsPart1Data = {
  topicSlug: "coordinate-proofs-geometry",
  sections: [
    {
      id: 'geometry-coordinate-proofs-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Distance & Midpoint

**Part 1 of 7 — Distance & Midpoint**

$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$

$M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**(2, 3) and (8, 11).**

$d = \sqrt{36+64} = \sqrt{100} = 10$
$M = (5, 7)$ ✅
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Distance from (0,0) to (3,4)?",
                    "options": [
                              "5",
                              "7",
                              "12",
                              "25"
                    ],
                    "correctAnswer": 0,
                    "explanation": "√(9+16) = √25 = 5."
          }
]
      }
    },
    {
      id: 'geometry-coordinate-proofs-p1-input',
      type: 'input-boxes' as const,
      content: `
**Distance** 🧮

1) (0,0) to (3,4). Distance?

2) (1,2) to (5,5). Distance?

3) (−2,1) to (4,9). Distance?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","5","10"],
        hint1: "√(9+16).",
        hint2: "√(16+9).",
        hint3: "√(36+64).",
        explanation: "1) √25=5. 2) √25=5. 3) √100=10."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The midpoint formula averages the","options":["Coordinates","Distances","Slopes","Areas"]},{"label":"The distance formula comes from the","options":["Pythagorean theorem","Midpoint formula","Slope formula","Area formula"]}],
        correctAnswers: ["Coordinates","Pythagorean theorem"],
        hint1: "Average x and y separately.",
        hint2: "a²+b²=c².",
        explanation: "Midpoint: average coordinates. Distance: Pythagorean theorem."
      }
    },
    {
      id: 'geometry-coordinate-proofs-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Points | Distance | Midpoint |
|---|--------|----------|----------|
| 1 | (0,0), (3,4) | 5 | (1.5, 2) |
| 2 | (1,2), (5,5) | 5 | (3, 3.5) |
| 3 | (−2,1), (4,9) | 10 | (1, 5) |
    
    `
    },
    {
      id: 'geometry-coordinate-proofs-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Midpoint of (2,6) and (8,10)?",
                    "options": [
                              "(5,8)",
                              "(10,16)",
                              "(6,4)",
                              "(3,2)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "((2+8)/2, (6+10)/2) = (5,8)."
          }
]
      }
    }
  ]
};
