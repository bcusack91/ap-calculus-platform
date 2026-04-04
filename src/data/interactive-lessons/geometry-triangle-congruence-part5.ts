export const geoTriCongruencePart5Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 CPCTC Proofs

**Part 5 of 7 — CPCTC Proofs**

**CPCTC**: Corresponding Parts of Congruent Triangles are Congruent.

Steps:
1. Prove triangles are congruent (SSS, SAS, ASA, AAS)
2. Conclude that corresponding parts are equal (CPCTC)
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**If △ABC ≅ △DEF by SAS, then AB = DE, BC = EF, AC = DF, ∠A = ∠D, ∠B = ∠E, ∠C = ∠F.** ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "CPCTC can be used AFTER:",
                    "options": [
                              "Proving triangles are congruent",
                              "Finding the area",
                              "Measuring angles",
                              "Graphing"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Must prove congruence first."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p5-input',
      type: 'input-boxes' as const,
      content: `
**CPCTC** 🧮

△ABC ≅ △DEF where AB=5, BC=7, ∠C=60°.

1) DE = ?

2) EF = ?

3) ∠F = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","7","60"],
        hint1: "AB corresponds to DE.",
        hint2: "BC corresponds to EF.",
        hint3: "∠C corresponds to ∠F.",
        explanation: "1) DE=AB=5. 2) EF=BC=7. 3) ∠F=∠C=60°."
      }
    },
    {
      id: 'geometry-triangle-congruence-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"CPCTC stands for","options":["Corresponding Parts of Congruent Triangles are Congruent","Congruent Parts Create Two Congruences","Common Properties of Congruent Triangles","Congruent Parts need Two Conditions"]},{"label":"CPCTC is used as a ____ in a proof","options":["Reason (after establishing congruence)","First step","Hypothesis","Definition"]}],
        correctAnswers: ["Corresponding Parts of Congruent Triangles are Congruent","Reason (after establishing congruence)"],
        hint1: "Full name.",
        hint2: "Comes after proving ≅.",
        explanation: "CPCTC: Corresponding Parts of Congruent Triangles are Congruent. Used as reason after proving congruence."
      }
    },
    {
      id: 'geometry-triangle-congruence-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | If △ABC ≅ △DEF | Then |
|---|----------------|------|
| 1 | AB corresponds to | DE |
| 2 | ∠A corresponds to | ∠D |
| 3 | BC corresponds to | EF |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If △ABC ≅ △DEF, then ∠B = :",
                    "options": [
                              "∠E",
                              "∠D",
                              "∠F",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "B is the second letter → corresponds to E."
          }
]
      }
    }
  ]
};
