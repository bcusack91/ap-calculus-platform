export const g7GeometryPart5Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p5-intro',
      type: 'text' as const,
      content: `
# 📐 Volume of Prisms & Cylinders

**Part 5 of 7 — Volume of Prisms & Cylinders**

- **Prism**: $V = Bh$ (B = base area)
- **Rectangular prism**: $V = lwh$
- **Cylinder**: $V = \pi r^2 h$
    
    `
    },
    {
      id: 'grade7-geometry-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Cylinder: r = 3 cm, h = 10 cm.**

$V = \pi(3)^2(10) = 90\pi \approx 282.6$ cm³ ✅
    
    `
    },
    {
      id: 'grade7-geometry-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Volume of 8×5×4 rectangular prism?",
                    "options": [
                              "160",
                              "80",
                              "17",
                              "320"
                    ],
                    "correctAnswer": 0,
                    "explanation": "8 × 5 × 4 = 160."
          }
]
      }
    },
    {
      id: 'grade7-geometry-p5-input',
      type: 'input-boxes' as const,
      content: `
**Volume** 🧮 (Use π ≈ 3.14)

1) Rectangular prism 8×5×4. Volume?

2) Cylinder r=2, h=7. Volume?

3) Triangular prism: base area 12, height 5. Volume?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["160","87.92","60"],
        hint1: "8 × 5 × 4.",
        hint2: "π(2²)(7) = 3.14(4)(7).",
        hint3: "V = Bh = 12(5).",
        explanation: "1) 160. 2) 3.14(4)(7)=87.92. 3) 12(5)=60."
      }
    },
    {
      id: 'grade7-geometry-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Volume of a prism = base area ×","options":["Height","Perimeter","Surface area","Width"]},{"label":"Volume is measured in","options":["Cubic units","Square units","Linear units","Liters only"]}],
        correctAnswers: ["Height","Cubic units"],
        hint1: "V = Bh.",
        hint2: "3D measurement.",
        explanation: "V = B × h. Volume → cubic units."
      }
    },
    {
      id: 'grade7-geometry-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Rect. prism | 8×5×4 |
| 2 | Cylinder | r=2, h=7 |
| 3 | Triangular prism | B=12, h=5 |
    
    `
    },
    {
      id: 'grade7-geometry-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Cylinder volume formula?",
                    "options": [
                              "V = πr²h",
                              "V = 2πrh",
                              "V = πrh",
                              "V = πd²h"
                    ],
                    "correctAnswer": 0,
                    "explanation": "V = πr²h."
          }
]
      }
    }
  ]
};
