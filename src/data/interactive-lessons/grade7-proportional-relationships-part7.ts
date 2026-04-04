export const g7ProportionalPart7Data = {
  topicSlug: "proportional-relationships-grade7",
  sections: [
    {
      id: 'grade7-proportional-relationships-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Proportional: constant y/x = k, through origin
- Equation: y = kx
- Graph: straight line through (0,0)
- Scale: multiply by scale factor
- Percent: part = rate × whole
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**y = 4x. Find y when x = 7.**
$y = 4(7) = 28$ ✅
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "(5, 15): k = ?",
                    "options": [
                              "3",
                              "5",
                              "15",
                              "75"
                    ],
                    "correctAnswer": 0,
                    "explanation": "k = 15/5 = 3."
          }
]
      }
    },
    {
      id: 'grade7-proportional-relationships-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) (5, 15): k = ?

2) y = 3x. When x = 8, y = ?

3) 15% of 200 = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","24","30"],
        hint1: "15 ÷ 5.",
        hint2: "3 × 8.",
        hint3: "0.15 × 200.",
        explanation: "1) 3. 2) 24. 3) 30."
      }
    },
    {
      id: 'grade7-proportional-relationships-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"y = kx represents a","options":["Proportional relationship","Quadratic","Exponential","Inverse variation"]},{"label":"A proportional graph is a straight line that passes through","options":["(0, 0)","(1, 1)","(0, k)","(k, 0)"]}],
        correctAnswers: ["Proportional relationship","(0, 0)"],
        hint1: "Direct variation.",
        hint2: "Proportional → origin.",
        explanation: "y = kx → proportional. Always through the origin."
      }
    },
    {
      id: 'grade7-proportional-relationships-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | k | (5, 15): k = ? |
| 2 | Equation | y when x=8, k=3 |
| 3 | Percent | 15% of 200 |
    
    `
    },
    {
      id: 'grade7-proportional-relationships-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "15% of 200 = ?",
                    "options": [
                              "30",
                              "15",
                              "300",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.15 × 200 = 30."
          }
]
      }
    }
  ]
};
