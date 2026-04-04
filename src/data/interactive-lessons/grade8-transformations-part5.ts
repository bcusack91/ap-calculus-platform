export const g8TransformationsPart5Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Sequences of Transformations

**Part 5 of 7 — Sequences of Transformations**

Multiple transformations can be combined:
1. Apply the first transformation
2. Apply the second to the **result**

Order matters! Different orders can give different results.
    
    `
    },
    {
      id: 'grade8-transformations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Translate (2,3) right 3 then reflect over x-axis.**

Step 1: $(2+3, 3) = (5, 3)$
Step 2: $(5, -3)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "(1,2): translate right 4, reflect over x-axis:",
                    "options": [
                              "(5,−2)",
                              "(5,2)",
                              "(−1,−2)",
                              "(1,−2)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(1+4,2)=(5,2) then (5,−2)."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Sequences** 🧮

(1, 2): Translate right 4, then reflect over x-axis.

1) After translation, x = ?

2) After reflection, y = ?

(3, 1): Reflect over y-axis.
3) New x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","-2","-3"],
        hint1: "1 + 4.",
        hint2: "Reflect (5,2): y flips.",
        hint3: "y-axis: x → −x.",
        explanation: "1) 5. 2) −2. 3) −3."
      }
    },
    {
      id: 'grade8-transformations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A sequence of rigid motions produces","options":["A congruent figure","A similar figure","A different shape","Nothing"]},{"label":"The order of transformations","options":["Usually matters","Never matters","Is always the same","Can be skipped"]}],
        correctAnswers: ["A congruent figure","Usually matters"],
        hint1: "Translations, reflections, rotations are rigid.",
        hint2: "Try switching order — different result.",
        explanation: "Rigid motions → congruent. Order matters."
      }
    },
    {
      id: 'grade8-transformations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Steps | Final Image |
|---|-------|------------|
| 1 | (1,2): right 4, reflect x-axis | (5,−2) |
| 2 | (3,1): reflect y-axis, up 5 | (−3,6) |
| 3 | (2,4): dilate k=2, left 1 | (3,8) |
    
    `
    },
    {
      id: 'grade8-transformations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In a sequence of transformations, order:",
                    "options": [
                              "Usually matters",
                              "Never matters",
                              "Always gives same result",
                              "Is irrelevant"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different order → often different result."
          }
]
      }
    }
  ]
};
