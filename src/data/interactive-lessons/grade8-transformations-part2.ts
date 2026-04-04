export const g8TransformationsPart2Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Reflections

**Part 2 of 7 — Reflections**

A **reflection** flips a figure over a line.

- Over **x-axis**: $(x, y) \to (x, -y)$
- Over **y-axis**: $(x, y) \to (-x, y)$
- Over $y = x$: $(x, y) \to (y, x)$
    
    `
    },
    {
      id: 'grade8-transformations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Reflect (3, 5) over the x-axis.**

$(3, 5) \to (3, -5)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Reflect (4,2) over x-axis:",
                    "options": [
                              "(4,−2)",
                              "(−4,2)",
                              "(−4,−2)",
                              "(2,4)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Over x-axis: y becomes −y."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Reflections** 🧮

1) Reflect (4, 2) over x-axis. New y = ?

2) Reflect (4, 2) over y-axis. New y = ?

3) Reflect (4, 2) over y-axis. New x = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-2","2","-4"],
        hint1: "x-axis reflection: flip y sign.",
        hint2: "y-axis reflection: y stays.",
        hint3: "y-axis reflection: flip x sign.",
        explanation: "1) −2. 2) 2 (y unchanged). 3) −4."
      }
    },
    {
      id: 'grade8-transformations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Reflection over x-axis changes","options":["The y-coordinate sign","The x-coordinate sign","Both signs","Neither sign"]},{"label":"A reflection is a","options":["Flip","Slide","Turn","Stretch"]}],
        correctAnswers: ["The y-coordinate sign","Flip"],
        hint1: "(x,y)→(x,−y).",
        hint2: "Mirror image.",
        explanation: "x-axis: y flips. Reflection = flip."
      }
    },
    {
      id: 'grade8-transformations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Point | Line | Image |
|---|-------|------|-------|
| 1 | (4,2) | x-axis | (4,−2) |
| 2 | (4,2) | y-axis | (−4,2) |
| 3 | (3,5) | y=x | (5,3) |
    
    `
    },
    {
      id: 'grade8-transformations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Reflect (4,2) over y-axis:",
                    "options": [
                              "(−4,2)",
                              "(4,−2)",
                              "(−4,−2)",
                              "(2,4)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Over y-axis: x becomes −x."
          }
]
      }
    }
  ]
};
