export const geoTriCongruencePart7Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Congruence Postulates
| Postulate | Requires |
|-----------|----------|
| SSS | 3 pairs of sides |
| SAS | 2 sides + included angle |
| ASA | 2 angles + included side |
| AAS | 2 angles + non-included side |

**CPCTC**: use after proving congruence.
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**△ABC: ∠A=40°, ∠B=80°. ∠C?**
$180 - 40 - 80 = 60°$ ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Angles 55° and 65°. Third?",
                    "options": [
                              "60°",
                              "120°",
                              "10°",
                              "180°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "180−55−65=60°."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Angles 55°, 65°. Third?

2) △ABC ≅ △DEF, AB=8. DE=?

3) How many congruence postulates (SSS, SAS, ASA, AAS)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["60","8","4"],
        hint1: "180−55−65.",
        hint2: "Corresponding parts.",
        hint3: "Count them.",
        explanation: "1) 60. 2) 8. 3) 4."
      }
    },
    {
      id: 'geometry-triangle-congruence-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Congruent triangles have identical","options":["Shape and size","Shape only","Size only","Angles only"]},{"label":"The postulate that does NOT work is","options":["SSA","SSS","SAS","ASA"]}],
        correctAnswers: ["Shape and size","SSA"],
        hint1: "Same everything.",
        hint2: "The ambiguous one.",
        explanation: "Congruent: same shape and size. SSA is not valid."
      }
    },
    {
      id: 'geometry-triangle-congruence-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Angle sum | 55°, 65°, ? |
| 2 | Postulate | 3 sides → ? |
| 3 | CPCTC | ≅ triangles, AB=8, DE=? |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "3 pairs of equal sides → which postulate?",
                    "options": [
                              "SSS",
                              "SAS",
                              "ASA",
                              "AAS"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Side-Side-Side."
          }
]
      }
    }
  ]
};
