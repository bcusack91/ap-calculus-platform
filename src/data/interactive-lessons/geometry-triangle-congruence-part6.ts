export const geoTriCongruencePart6Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply congruence:
- Identify given information
- Choose the right postulate (SSS, SAS, ASA, AAS)
- Write the proof
- Use CPCTC as needed
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Given: AB=CD, BC=DA, AC is shared. Prove △ABC ≅ △CDA.**

AB=CD, BC=DA, AC=AC (reflexive) → SSS → **Congruent** ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A shared side in two triangles uses the ____ property:",
                    "options": [
                              "Reflexive",
                              "Symmetric",
                              "Transitive",
                              "Commutative"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A segment is congruent to itself."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p6-input',
      type: 'input-boxes' as const,
      content: `
**Apply Congruence** 🧮

1) Sum of angles in any triangle?

2) △ABC ≅ △DEF, AB=5. What is DE?

3) How many postulates prove congruence? (SSS, SAS, ASA)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["180","5","3"],
        hint1: "Angle sum.",
        hint2: "Corresponding parts.",
        hint3: "Count: SSS, SAS, ASA (also AAS).",
        explanation: "1) 180°. 2) 5 (CPCTC). 3) 3 basic (plus AAS = 4)."
      }
    },
    {
      id: 'geometry-triangle-congruence-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The reflexive property states","options":["A segment equals itself","Two segments are equal","Segments can be added","Segments are parallel"]},{"label":"SSA is ____ for proving congruence","options":["Not sufficient","Sufficient","The best method","Required"]}],
        correctAnswers: ["A segment equals itself","Not sufficient"],
        hint1: "Self-equality.",
        hint2: "Ambiguous case.",
        explanation: "Reflexive: AB=AB. SSA is not sufficient."
      }
    },
    {
      id: 'geometry-triangle-congruence-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Postulate |
|---|-------|----------|
| 1 | 3 pairs of sides equal | SSS |
| 2 | 2 sides + included angle | SAS |
| 3 | Shared side + 2 angles | ASA |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is NOT a valid congruence postulate?",
                    "options": [
                              "SSA",
                              "SSS",
                              "SAS",
                              "ASA"
                    ],
                    "correctAnswer": 0,
                    "explanation": "SSA (or ASS) is ambiguous and not valid."
          }
]
      }
    }
  ]
};
