export const g5VolumePart3Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p3-intro',
      type: 'text' as const,
      content: `
# 📦 Volume Formulas

**Part 3 of 7 — Volume Formulas**

### Rectangular Prism
$V = l \\times w \\times h$

or equivalently: $V = B \\times h$ where $B$ = area of the base

### Cube
$V = s^3$
    
    `
    },
    {
      id: 'grade5-volume-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Rectangular prism: $l = 8$ cm, $w = 5$ cm, $h = 3$ cm.**

$V = 8 \\times 5 \\times 3 = 120$ $cm^{3}$ ✅
    
    `
    },
    {
      id: 'grade5-volume-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Volume of a cube with side 3 cm:",
                    "options": [
                              "27 $cm^{3}$",
                              "9 $cm^{3}$",
                              "12 $cm^{3}$",
                              "6 $cm^{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$3^3 = 27$ $cm^{3}$."
          }
]
      }
    },
    {
      id: 'grade5-volume-p3-input',
      type: 'input-boxes' as const,
      content: `
**Volume Formulas** 🧮

1) Rectangular prism: 10 × 4 × 3 cm. Volume $(cm^{3})$?

2) Cube, side 5 cm. Volume $(cm^{3})$?

3) Rectangular prism: 7 × 6 × 2 m. Volume $(m^{3})$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["120","125","84"],
        hint1: "10 × 4 × 3.",
        hint2: "5 × 5 × 5.",
        hint3: "7 × 6 × 2.",
        explanation: "1) 120. 2) 125. 3) 84."
      }
    },
    {
      id: 'grade5-volume-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Volume of a rectangular prism formula","options":["V = l × w × h","V = 2(lw + lh + wh)","V = l + w + h","V = l × w"]},{"label":"Volume of a cube with side s","options":["$s^{3}$","$s^{2}$","$6s^{2}$","4s"]}],
        correctAnswers: ["V = l × w × h","$s^{3}$"],
        hint1: "Three dimensions multiplied.",
        hint2: "All sides equal.",
        explanation: "Rectangular prism: V = lwh. Cube: V = $s^{3}$."
      }
    },
    {
      id: 'grade5-volume-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Dimensions | Formula |
|---|-----------|---------|
| 1 | 10 × 4 × 3 cm | V = lwh |
| 2 | Cube, s = 5 cm | V = $s^{3}$ |
| 3 | 7 × 6 × 2 m | V = lwh |
    
    `
    },
    {
      id: 'grade5-volume-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$V = B \\\\times h$. If B = 20 $cm^{2}$ and h = 6 cm, V = ?",
                    "options": [
                              "120 $cm^{3}$",
                              "26 $cm^{3}$",
                              "120 $cm^{2}$",
                              "14 $cm^{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "20 × 6 = 120 $cm^{3}$."
          }
]
      }
    }
  ]
};
