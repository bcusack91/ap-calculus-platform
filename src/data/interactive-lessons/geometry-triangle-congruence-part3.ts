export const geoTriCongruencePart3Data = {
  topicSlug: "triangle-congruence-geometry",
  sections: [
    {
      id: 'geometry-triangle-congruence-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 SSS & SAS Congruence

**Part 3 of 7 — SSS & SAS Congruence**

**SSS** (Side-Side-Side): all three pairs of sides are equal → congruent.

**SAS** (Side-Angle-Side): two pairs of sides and the **included angle** are equal → congruent.

The angle must be **between** the two sides (included).
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**△ABC: AB=5, BC=7, ∠B=40°. △DEF: DE=5, EF=7, ∠E=40°.**

SAS: two sides and included angle match → **Congruent** ✅
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "All three sides match. Which postulate?",
                    "options": [
                              "SSS",
                              "SAS",
                              "ASA",
                              "AAS"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Three sides → SSS."
          }
]
      }
    },
    {
      id: 'geometry-triangle-congruence-p3-input',
      type: 'input-boxes' as const,
      content: `
**Triangle Facts** 🧮

Triangle with sides 5, 7 and ∠ = 40° between them.

1) Sum of all angles?

2) The side opposite angle B if BC = 7?

3) The included angle in the SAS proof?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["180","7","40"],
        hint1: "Angle sum theorem.",
        hint2: "BC = 7.",
        hint3: "The angle between the two given sides.",
        explanation: "1) 180°. 2) 7. 3) 40°."
      }
    },
    {
      id: 'geometry-triangle-congruence-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"SSS requires matching of","options":["All 3 sides","2 sides and 1 angle","2 angles and 1 side","1 side and 1 angle"]},{"label":"SAS requires two sides and the ____ angle","options":["Included","Opposite","Excluded","Any"]}],
        correctAnswers: ["All 3 sides","Included"],
        hint1: "Side-Side-Side.",
        hint2: "Between the two sides.",
        explanation: "SSS: all 3 sides. SAS: included angle."
      }
    },
    {
      id: 'geometry-triangle-congruence-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Given | Postulate |
|---|-------|----------|
| 1 | All 3 sides match | SSS |
| 2 | 2 sides + included angle | SAS |
| 3 | 2 sides + non-included angle | Not sufficient |
    
    `
    },
    {
      id: 'geometry-triangle-congruence-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In SAS, the angle must be:",
                    "options": [
                              "Included (between the two sides)",
                              "Any angle",
                              "The largest angle",
                              "Opposite the longest side"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The angle is between the two known sides."
          }
]
      }
    }
  ]
};
