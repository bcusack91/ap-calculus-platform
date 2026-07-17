export const g5VolumePart5Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p5-intro',
      type: 'text' as const,
      content: `
# 📦 Real-World Volume

**Part 5 of 7 — Real-World Volume**

Volume is used everywhere:
- **Packing**: How many boxes fit in a crate?
- **Filling**: How much water does a tank hold?
- **Building**: How much concrete is needed?

1 liter = 1,000 $cm^{3}$
    
    `
    },
    {
      id: 'grade5-volume-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A fish tank is 40 cm × 20 cm × 30 cm. How many liters?**

$V = 40 \\times 20 \\times 30 = 24{,}000$ $cm^{3}$

$24{,}000 \\div 1{,}000 = 24$ liters ✅
    
    `
    },
    {
      id: 'grade5-volume-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A box is 12 in × 8 in × 5 in. Volume?",
                    "options": [
                              "480 $in^{3}$",
                              "25 $in^{3}$",
                              "96 $in^{3}$",
                              "200 $in^{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "12 × 8 × 5 = 480 $in^{3}$."
          }
]
      }
    },
    {
      id: 'grade5-volume-p5-input',
      type: 'input-boxes' as const,
      content: `
**Real-World Volume** 🧮

1) Box: 12 × 8 × 5 inches. Volume $(in^{3})$?

2) Pool: 10 × 5 × 2 m. Volume $(m^{3})$?

3) Tank: 50 × 30 × 20 cm. How many liters?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["480","100","30"],
        hint1: "12 × 8 × 5.",
        hint2: "10 × 5 × 2.",
        hint3: "Find $cm^{3}$ first, then divide by 1000.",
        explanation: "1) 480. 2) 100. 3) 50×30×20=30,000 $cm^{3}$ = 30 liters."
      }
    },
    {
      id: 'grade5-volume-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"1 liter equals","options":["1,000 $cm^{3}$","100 $cm^{3}$","1 $m^{3}$","10 $cm^{3}$"]},{"label":"To find how many boxes fit in a crate, you need","options":["Volume of both","Perimeter of both","Area of both","Weight of both"]}],
        correctAnswers: ["1,000 $cm^{3}$","Volume of both"],
        hint1: "$Liter-cm^{3}$ conversion.",
        hint2: "Packing is about 3D space.",
        explanation: "1 L = 1,000 $cm^{3}$. Packing requires volume."
      }
    },
    {
      id: 'grade5-volume-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Find |
|---|---------|------|
| 1 | Box 12×8×5 in | Volume |
| 2 | Pool 10×5×2 m | Volume |
| 3 | 50 cm × 30 cm × 20 cm tank | Liters |
    
    `
    },
    {
      id: 'grade5-volume-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "How many $cm^{3}$ in 1 liter?",
                    "options": [
                              "1,000",
                              "100",
                              "10",
                              "10,000"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1 L = 1,000 $cm^{3}$."
          }
]
      }
    }
  ]
};
