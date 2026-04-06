export const g5VolumePart7Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- **Rectangular prism**: $V = l \\times w \\times h$
- **Cube**: $V = s^3$
- **Composite**: Split and add volumes
- **1 liter = 1,000 cm³**
    
    `
    },
    {
      id: 'grade5-volume-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Cube side 6 cm. Volume?**
$V = 6^3 = 216$ cm³ ✅
    
    `
    },
    {
      id: 'grade5-volume-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Volume of 8 × 5 × 4 cm prism?",
                    "options": [
                              "160 cm³",
                              "80 cm³",
                              "17 cm³",
                              "320 cm³"
                    ],
                    "correctAnswer": 0,
                    "explanation": "8 × 5 × 4 = 160 cm³."
          }
]
      }
    },
    {
      id: 'grade5-volume-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Rectangular prism 8 × 5 × 4 cm. Volume (cm³)?

2) Cube, side 7 cm. Volume (cm³)?

3) 5,000 cm³ = ? liters
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["160","343","5"],
        hint1: "8 × 5 × 4.",
        hint2: "7³.",
        hint3: "Divide by 1,000.",
        explanation: "1) 160. 2) 343. 3) 5."
      }
    },
    {
      id: 'grade5-volume-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Volume formula for a rectangular prism","options":["V = l × w × h","V = 2(l+w+h)","V = l × w","V = 6s²"]},{"label":"To convert cm³ to liters, divide by","options":["1,000","100","10","10,000"]}],
        correctAnswers: ["V = l × w × h","1,000"],
        hint1: "Three dimensions.",
        hint2: "1 L = 1,000 cm³.",
        explanation: "V = lwh. Divide cm³ by 1,000 for liters."
      }
    },
    {
      id: 'grade5-volume-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Prism | 8 × 5 × 4 |
| 2 | Cube | s = 7 |
| 3 | Convert | 5,000 cm³ to liters |
    
    `
    },
    {
      id: 'grade5-volume-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "5,000 cm³ = ? liters",
                    "options": [
                              "5",
                              "50",
                              "0.5",
                              "500"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5,000 ÷ 1,000 = 5 liters."
          }
]
      }
    }
  ]
};
