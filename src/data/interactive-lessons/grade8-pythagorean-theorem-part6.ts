export const g8PythagoreanPart6Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Real-world Pythagorean theorem:
- Ladder against a wall
- Television screen size (diagonal)
- Walking shortest path
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Ladder: 10 ft long, base 6 ft from wall. How high does it reach?**

$h = \\sqrt{10^2 - 6^2} = \\sqrt{100-36} = \\sqrt{64} = 8$ ft ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Ladder 13 ft, 5 ft from wall. Height?",
                    "options": [
                              "12 ft",
                              "8 ft",
                              "18 ft",
                              "14 ft"
                    ],
                    "correctAnswer": 0,
                    "explanation": "√(169−25) = √144 = 12."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Ladder 13 ft, base 5 ft from wall. Height?

2) TV screen 16 × 12. Diagonal?

3) Walk 9 blocks east, 12 blocks north. Direct distance?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","20","15"],
        hint1: "√(169−25).",
        hint2: "√(256+144).",
        hint3: "√(81+144).",
        explanation: "1) √144=12. 2) √400=20. 3) √225=15."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A TV screen size refers to its","options":["Diagonal","Width","Height","Area"]},{"label":"A ladder, wall, and ground form a","options":["Right triangle","Square","Circle","Cube"]}],
        correctAnswers: ["Diagonal","Right triangle"],
        hint1: "Measured corner to corner.",
        hint2: "Wall is perpendicular to ground.",
        explanation: "TV size = diagonal. Ladder/wall/ground = right triangle."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Ladder 13 ft, 5 ft from wall | 12 ft |
| 2 | TV: 16×12 screen | 20 in |
| 3 | Walk: 9 blocks E, 12 blocks N | 15 blocks |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "TV screen 16×12. Diagonal?",
                    "options": [
                              "20 in",
                              "28 in",
                              "14 in",
                              "192 in"
                    ],
                    "correctAnswer": 0,
                    "explanation": "√(256+144) = √400 = 20."
          }
]
      }
    }
  ]
};
