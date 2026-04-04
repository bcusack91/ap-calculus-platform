export const g8TransformationsPart1Data = {
  topicSlug: "transformations-grade8",
  sections: [
    {
      id: 'grade8-transformations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Translations

**Part 1 of 7 — Translations**

A **translation** slides every point the same distance and direction.

Rule: $(x, y) \to (x + a, y + b)$

Translations preserve **size** and **shape** (rigid motion). The image is congruent to the pre-image.
    
    `
    },
    {
      id: 'grade8-transformations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Translate (3, 5) right 4, down 2.**

$(3+4, 5-2) = (7, 3)$ ✅
    
    `
    },
    {
      id: 'grade8-transformations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Translate (2,3) right 5, up 1:",
                    "options": [
                              "(7,4)",
                              "(7,2)",
                              "(−3,4)",
                              "(3,8)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(2+5, 3+1) = (7, 4)."
          }
]
      }
    },
    {
      id: 'grade8-transformations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Translations** 🧮

Translate (2, 3) right 5, up 1.

1) New x-coordinate?

2) New y-coordinate?

Translate (−1, 4) right 6, down 3. 
3) New x-coordinate?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7","4","5"],
        hint1: "2 + 5.",
        hint2: "3 + 1.",
        hint3: "−1 + 6.",
        explanation: "1) 7. 2) 4. 3) 5."
      }
    },
    {
      id: 'grade8-transformations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A translation is a","options":["Slide","Flip","Turn","Stretch"]},{"label":"After a translation, the figure is","options":["Congruent to the original","Larger","Smaller","Different shape"]}],
        correctAnswers: ["Slide","Congruent to the original"],
        hint1: "Every point moves same way.",
        hint2: "Rigid motion.",
        explanation: "Translation = slide. Image is congruent."
      }
    },
    {
      id: 'grade8-transformations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Point | Translation | Image |
|---|-------|------------|-------|
| 1 | (2,3) | Right 5, Up 1 | (7,4) |
| 2 | (0,0) | Left 3, Down 4 | (−3,−4) |
| 3 | (−1,4) | Right 6, Down 3 | (5,1) |
    
    `
    },
    {
      id: 'grade8-transformations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Translations preserve:",
                    "options": [
                              "Size and shape",
                              "Size only",
                              "Shape only",
                              "Neither"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Translations are rigid motions."
          }
]
      }
    }
  ]
};
