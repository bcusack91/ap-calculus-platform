export const geoTriCongruencePart4Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p4-intro',
      type: 'text' as const,
      content: `
# 📈 ASA & AAS Congruence

**Part 4 of 7 — ASA & AAS Congruence**

**ASA** (Angle-Side-Angle): two angles and the **included side** → congruent.

**AAS** (Angle-Angle-Side): two angles and a **non-included side** → congruent.

Note: **AAA** proves similarity, not congruence!
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**△PQR: ∠P=50°, PQ=6, ∠Q=70°. △XYZ: ∠X=50°, XY=6, ∠Y=70°.**

ASA: two angles with included side → **Congruent** ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Two angles and the included side. Postulate?",
                    "options": [
                              "ASA",
                              "SSS",
                              "SAS",
                              "AAS"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Angle-Side-Angle."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p4-input',
      type: 'input-boxes' as const,
      content: `
**Angles** 🧮

1) ∠A=50°, ∠B=60°. ∠C=?

2) If △ABC ≅ △DEF and ∠D=50°, ∠F=70°, then ∠E=?

3) Sum of angles in any triangle?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["70","60","180"],
        hint1: "180−50−60.",
        hint2: "180−50−70.",
        hint3: "Angle sum theorem.",
        explanation: "1) 70. 2) 60. 3) 180."
      }
    },
    {
      id: 'geometry-triangle-congruence-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"ASA stands for","options":["Angle-Side-Angle","Angle-Side-Any","All-Sides-Angles","Area-Side-Area"]},{"label":"AAA is NOT sufficient for congruence because","options":["Triangles can be similar but different sizes","All triangles are congruent","Angles do not matter","Sides are always equal"]}],
        correctAnswers: ["Angle-Side-Angle","Triangles can be similar but different sizes"],
        hint1: "A-S-A.",
        hint2: "Same angles, different scale.",
        explanation: "ASA: Angle-Side-Angle. AAA → similar, not necessarily congruent."
      }
    },
    {
      id: 'geometry-triangle-congruence-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Postulate |
|---|-------|----------|
| 1 | ∠A, AB, ∠B | ASA |
| 2 | ∠A, ∠B, BC | AAS |
| 3 | ∠A, ∠B, ∠C | Not sufficient (AAA) |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "AAA proves:",
                    "options": [
                              "Similarity, not congruence",
                              "Congruence",
                              "Nothing",
                              "Both"
                    ],
                    "correctAnswer": 0,
                    "explanation": "AAA means same shape but possibly different size."
          }
]
      }
    }
  ]
};
