export const g8TransformationsPart7Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Transformation Summary
| Transformation | Rule | Type |
|---------------|------|------|
| Translation | $(x+a, y+b)$ | Rigid |
| Reflection x-axis | $(x, -y)$ | Rigid |
| Reflection y-axis | $(-x, y)$ | Rigid |
| Rotation 90° CCW | $(-y, x)$ | Rigid |
| Rotation 180° | $(-x, -y)$ | Rigid |
| Dilation | $(kx, ky)$ | Not rigid |
    
    `
    },
    {
      id: 'grade8-transformations-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rotate (5, 2) 90° CCW then dilate by 3.**

Step 1: $(5,2) \\to (-2,5)$
Step 2: $(-6,15)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Translate (3,7) right 2, up 4:",
                    "options": [
                              "(5,11)",
                              "(1,3)",
                              "(5,3)",
                              "(1,11)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(3+2, 7+4) = (5,11)."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Translate (3,7) right 2. New x = ?

2) Reflect (5,−3) over x-axis. New y = ?

3) Rotate (4,1) 180°. New x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","3","-4"],
        hint1: "3 + 2.",
        hint2: "−(−3) = 3.",
        hint3: "−4.",
        explanation: "1) 5. 2) 3. 3) −4."
      }
    },
    {
      id: 'grade8-transformations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Rigid motions preserve","options":["Size and shape","Size only","Shape only","Color"]},{"label":"The only transformation that changes size is","options":["Dilation","Translation","Reflection","Rotation"]}],
        correctAnswers: ["Size and shape","Dilation"],
        hint1: "Congruent images.",
        hint2: "Scale factor ≠ 1.",
        explanation: "Rigid motions → congruent. Dilation changes size."
      }
    },
    {
      id: 'grade8-transformations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Translation | (3,7) right 2 up 4 |
| 2 | Reflection | (5,−3) over x-axis |
| 3 | Rotation | (4,1) 180° |
    
    `
    },
    {
      id: 'grade8-transformations-p7-mcq2',
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
                              "(−1,4)",
                              "(4,−1)",
                              "(1,−4)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(x,y)→(−x,−y) = (−4,−1)."
          }
]
      }
    }
  ]
};
