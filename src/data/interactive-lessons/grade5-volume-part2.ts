export const g5VolumePart2Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p2-intro',
      type: 'text' as const,
      content: `
# 📦 Counting Unit Cubes

**Part 2 of 7 — Counting Unit Cubes**

To count unit cubes:
1. Count cubes in one **layer** (length × width)
2. Multiply by the number of **layers** (height)

A 6 × 3 layer with 4 layers: $6 \times 3 \times 4 = 72$
    
    `
    },
    {
      id: 'grade5-volume-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A rectangular prism has a base of 5 × 3 and is 4 cubes tall.**

Base layer: $5 \times 3 = 15$ cubes
Total: $15 \times 4 = 60$ cubes ✅
    
    `
    },
    {
      id: 'grade5-volume-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A layer has 12 cubes. With 5 layers, total =",
                    "options": [
                              "60",
                              "17",
                              "7",
                              "120"
                    ],
                    "correctAnswer": 0,
                    "explanation": "12 × 5 = 60."
          }
]
      }
    },
    {
      id: 'grade5-volume-p2-input',
      type: 'input-boxes' as const,
      content: `
**Count Cubes** 🧮

1) Base 4 × 2, height 3. Volume?

2) Base 6 × 5, height 2. Volume?

3) Base 3 × 3, height 3. Volume?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["24","60","27"],
        hint1: "4 × 2 = 8 per layer, × 3 layers.",
        hint2: "6 × 5 = 30 per layer, × 2.",
        hint3: "3 × 3 = 9 per layer, × 3.",
        explanation: "1) 8×3=24. 2) 30×2=60. 3) 9×3=27."
      }
    },
    {
      id: 'grade5-volume-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To count unit cubes in a prism, multiply","options":["Length × Width × Height","Length + Width + Height","Length × Width","2(L+W+H)"]},{"label":"A cube with side 4 has volume","options":["64","16","12","24"]}],
        correctAnswers: ["Length × Width × Height","64"],
        hint1: "Three dimensions multiplied.",
        hint2: "4 × 4 × 4.",
        explanation: "V = L×W×H. 4³ = 64."
      }
    },
    {
      id: 'grade5-volume-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Base | Height | Volume |
|---|------|--------|--------|
| 1 | 4 × 2 | 3 | ? |
| 2 | 6 × 5 | 2 | ? |
| 3 | 3 × 3 | 3 | ? |
    
    `
    },
    {
      id: 'grade5-volume-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Base is 8 × 3. Height is 2. Volume?",
                    "options": [
                              "48",
                              "24",
                              "13",
                              "16"
                    ],
                    "correctAnswer": 0,
                    "explanation": "8 × 3 × 2 = 48."
          }
]
      }
    }
  ]
};
