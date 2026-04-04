export const g8TransformationsPart4Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Dilations

**Part 4 of 7 — Dilations**

A **dilation** resizes a figure by a **scale factor** $k$.

$(x, y) \to (kx, ky)$

- $k > 1$: enlargement
- $0 < k < 1$: reduction

Dilations produce **similar** figures (same shape, different size).
    
    `
    },
    {
      id: 'grade8-transformations-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Dilate (4, 6) by scale factor 2.**

$(2·4, 2·6) = (8, 12)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Dilate (3,5) by k=2:",
                    "options": [
                              "(6,10)",
                              "(5,7)",
                              "(1.5,2.5)",
                              "(6,5)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(2·3, 2·5) = (6,10)."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Dilations** 🧮

1) (3, 5) × k=2. New x = ?

2) (8, 4) × k=0.5. New x = ?

3) (6, 9) × k=1/3. New x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","4","2"],
        hint1: "3 × 2.",
        hint2: "8 × 0.5.",
        hint3: "6 × (1/3).",
        explanation: "1) 6. 2) 4. 3) 2."
      }
    },
    {
      id: 'grade8-transformations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A dilation with k > 1 is an","options":["Enlargement","Reduction","Translation","Rotation"]},{"label":"Dilations produce figures that are","options":["Similar","Congruent","Different shapes","Perpendicular"]}],
        correctAnswers: ["Enlargement","Similar"],
        hint1: "Gets bigger.",
        hint2: "Same shape, different size.",
        explanation: "k>1 → enlargement. Dilation → similar."
      }
    },
    {
      id: 'grade8-transformations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Point | Scale Factor | Image |
|---|-------|-------------|-------|
| 1 | (3,5) | 2 | (6,10) |
| 2 | (8,4) | 0.5 | (4,2) |
| 3 | (6,9) | 1/3 | (2,3) |
    
    `
    },
    {
      id: 'grade8-transformations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Scale factor 0.5 means:",
                    "options": [
                              "Figure shrinks to half",
                              "Figure doubles",
                              "No change",
                              "Figure disappears"
                    ],
                    "correctAnswer": 0,
                    "explanation": "k < 1 → reduction."
          }
]
      }
    }
  ]
};
