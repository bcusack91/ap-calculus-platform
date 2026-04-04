export const g8TransformationsPart6Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply transformations to real-world problems:
- Identify the type of transformation
- Write coordinate rules
- Describe the transformation in words
    
    `
    },
    {
      id: 'grade8-transformations-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Triangle at (1,1), (3,1), (2,4). Reflect over y-axis.**

$(1,1)→(-1,1)$, $(3,1)→(-3,1)$, $(2,4)→(-2,4)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x,y)→(x+3,y−1)$ describes a:",
                    "options": [
                              "Translation",
                              "Reflection",
                              "Rotation",
                              "Dilation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Adding to coordinates = slide."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Identify & Apply** 🧮

Reflect over y-axis: triangle at (1,1), (3,1), (2,4).

1) (1,1) → new x = ?

2) (3,1) → new x = ?

3) (2,4) → new x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-1","-3","-2"],
        hint1: "Negate x.",
        hint2: "Negate x.",
        hint3: "Negate x.",
        explanation: "1) −1. 2) −3. 3) −2."
      }
    },
    {
      id: 'grade8-transformations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"(x,y)→(−y,x) is a","options":["90° CCW rotation","Reflection","Translation","Dilation"]},{"label":"Which transformation changes size?","options":["Dilation","Translation","Reflection","Rotation"]}],
        correctAnswers: ["90° CCW rotation","Dilation"],
        hint1: "Coordinates swap and one negates.",
        hint2: "Scale factor changes size.",
        explanation: "(−y,x) = 90° CCW. Dilation changes size."
      }
    },
    {
      id: 'grade8-transformations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | (x,y)→(x+3,y−1) | Translation |
| 2 | (x,y)→(−x,y) | Reflection y-axis |
| 3 | (x,y)→(2x,2y) | Dilation k=2 |
    
    `
    },
    {
      id: 'grade8-transformations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(x,y)→(−x,y)$ describes a:",
                    "options": [
                              "Reflection over y-axis",
                              "Reflection over x-axis",
                              "Rotation 90°",
                              "Translation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x flips → y-axis reflection."
          }
]
      }
    }
  ]
};
