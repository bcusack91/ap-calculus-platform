export const g8TransformationsPart3Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Rotations

**Part 3 of 7 — Rotations**

A **rotation** turns a figure around a center point.

**Rotations about the origin (counterclockwise):**
- 90°: $(x,y) \to (-y,x)$
- 180°: $(x,y) \to (-x,-y)$
- 270°: $(x,y) \to (y,-x)$
    
    `
    },
    {
      id: 'grade8-transformations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rotate (3, 2) 90° CCW about origin.**

$(3, 2) \to (-2, 3)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Rotate (4,1) 90° CCW:",
                    "options": [
                              "(−1,4)",
                              "(1,−4)",
                              "(−4,−1)",
                              "(4,−1)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x,y)→(−y,x): (−1,4)."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Rotations** 🧮

Point (4, 1):

1) 90° CCW. New x = ?

2) 180°. New x = ?

3) 270° CCW. New x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-1","-4","1"],
        hint1: "(x,y)→(−y,x). New x = −y = −1.",
        hint2: "(x,y)→(−x,−y). New x = −4.",
        hint3: "(x,y)→(y,−x). New x = y = 1.",
        explanation: "1) −1. 2) −4. 3) 1."
      }
    },
    {
      id: 'grade8-transformations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"180° rotation changes (x,y) to","options":["(−x,−y)","(−y,x)","(y,−x)","(x,y)"]},{"label":"Rotations preserve","options":["Size and shape","Size only","Shape only","Nothing"]}],
        correctAnswers: ["(−x,−y)","Size and shape"],
        hint1: "Both coordinates negate.",
        hint2: "Rigid motion.",
        explanation: "180°: (−x,−y). Rotations are rigid motions."
      }
    },
    {
      id: 'grade8-transformations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Point | Rotation | Image |
|---|-------|----------|-------|
| 1 | (4,1) | 90° CCW | (−1,4) |
| 2 | (4,1) | 180° | (−4,−1) |
| 3 | (4,1) | 270° CCW | (1,−4) |
    
    `
    },
    {
      id: 'grade8-transformations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Rotate (4,1) 180°:",
                    "options": [
                              "(−4,−1)",
                              "(4,1)",
                              "(−1,4)",
                              "(1,−4)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x,y)→(−x,−y): (−4,−1)."
          }
]
      }
    }
  ]
};
