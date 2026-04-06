export const g5VolumePart4Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p4-intro',
      type: 'text' as const,
      content: `
# 📦 Irregular Shapes

**Part 4 of 7 — Irregular Shapes**

To find volume of irregular (composite) shapes:
1. **Break** the shape into rectangular prisms
2. **Calculate** the volume of each piece
3. **Add** the volumes together
    
    `
    },
    {
      id: 'grade5-volume-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**An L-shaped solid: a 4×3×2 block joined to a 2×3×2 block.**

$V_1 = 4 \\times 3 \\times 2 = 24$
$V_2 = 2 \\times 3 \\times 2 = 12$
$V = 24 + 12 = 36$ cubic units ✅
    
    `
    },
    {
      id: 'grade5-volume-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "To find volume of an L-shaped prism:",
                    "options": [
                              "Split into rectangular prisms and add",
                              "Measure the longest side only",
                              "Use L × W × H directly",
                              "It cannot be measured"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Break composite shapes into simpler pieces."
          }
]
      }
    },
    {
      id: 'grade5-volume-p4-input',
      type: 'input-boxes' as const,
      content: `
**Composite Volumes** 🧮

1) Block A: 4×3×2, Block B: 2×3×2. Total volume?

2) Block A: 5×2×3, Block B: 3×2×3. Total volume?

3) Block A: 5×3×2, Block B: 5×1×3. Total volume?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["36","48","45"],
        hint1: "24 + 12.",
        hint2: "30 + 18.",
        hint3: "30 + 15.",
        explanation: "1) 24+12=36. 2) 30+18=48. 3) 30+15=45."
      }
    },
    {
      id: 'grade5-volume-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Composite shapes are solved by","options":["Breaking into simpler shapes and adding volumes","Using one formula for the whole shape","Measuring water displacement only","Guessing"]},{"label":"If one part has V=20 cm³ and another has V=15 cm³, total is","options":["35 cm³","300 cm³","5 cm³","20 cm³"]}],
        correctAnswers: ["Breaking into simpler shapes and adding volumes","35 cm³"],
        hint1: "Decompose, then add.",
        hint2: "Add them.",
        explanation: "Split and add. 20 + 15 = 35 cm³."
      }
    },
    {
      id: 'grade5-volume-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Strategy |
|---|-------|----------|
| 1 | T-shape | Split into two rectangles |
| 2 | Steps | Split into layers |
| 3 | L-shape | Two rectangular prisms |
    
    `
    },
    {
      id: 'grade5-volume-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A shape is made of a 5×2×3 block and a 3×2×3 block. Volume?",
                    "options": [
                              "48",
                              "30",
                              "18",
                              "15"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5×2×3=30, 3×2×3=18. Total=48."
          }
]
      }
    }
  ]
};
