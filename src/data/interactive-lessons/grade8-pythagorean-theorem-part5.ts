export const g8PythagoreanPart5Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 3D Applications

**Part 5 of 7 — 3D Applications**

The Pythagorean theorem extends to 3D:

$d = \\sqrt{l^2 + w^2 + h^2}$

**Space diagonal of a box**: finds the longest line from corner to opposite corner.
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Box 3×4×12. Space diagonal?**

$d = \\sqrt{3^2+4^2+12^2} = \\sqrt{9+16+144} = \\sqrt{169} = 13$ ✅
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "3D diagonal of 1×2×2 box?",
                    "options": [
                              "3",
                              "5",
                              "$\\sqrt{5}$",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\sqrt{1+4+4}$ = $\\sqrt{9}$ = 3."
          }
]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p5-input',
      type: 'input-boxes' as const,
      content: `
**Space Diagonals** 🧮

1) Box 3×4×12. Diagonal?

2) Box 1×2×2. Diagonal?

3) Box 2×6×9. Diagonal?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["13","3","11"],
        hint1: "$\\sqrt{9+16+144}$.",
        hint2: "$\\sqrt{1+4+4}$.",
        hint3: "$\\sqrt{4+36+81}$.",
        explanation: "1) $\\sqrt{169}$=13. 2) $\\sqrt{9}$=3. 3) $\\sqrt{121}$=11."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"3D distance uses ____ dimensions","options":["Three","Two","One","Four"]},{"label":"The formula for 3D diagonal is","options":["$\\sqrt{l^2+w^2+h^2}$","$l+w+h$","$lwh$","$2(l+w+h)$"]}],
        correctAnswers: ["Three","$\\sqrt{l^2+w^2+h^2}$"],
        hint1: "Length, width, height.",
        hint2: "Square, add, square root.",
        explanation: "3D uses three dimensions. d = $\\sqrt{l^{2}+w^{2}+h^{2}}$."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Dimensions | Diagonal |
|---|-----------|----------|
| 1 | 3×4×12 | 13 |
| 2 | 1×2×2 | 3 |
| 3 | 2×6×9 | 11 |
    
    `
    },
    {
      id: 'grade8-pythagorean-theorem-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The space diagonal of a box is ____ than any edge.",
                    "options": [
                              "Longer",
                              "Shorter",
                              "Equal",
                              "Unrelated"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The diagonal spans all three dimensions."
          }
]
      }
    }
  ]
};
