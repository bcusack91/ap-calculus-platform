export const apPrecalcTrigModelPart7Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $y = A\sin(B(x-h)) + D$
- Amplitude = $|A|$
- Period = $2\pi / |B|$
- Phase shift = $h$
- Midline = $D$
- Amplitude = (max−min)/2
- Midline = (max+min)/2
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$y = 3\sin(2x) + 1$**

A=3, B=2, D=1. Amplitude=3, Period=π, Midline: y=1 ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Amplitude of 4cos(x)?",
                    "options": [
                              "4",
                              "1",
                              "8",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "|A| = 4."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Amplitude of $4\cos(x)$?

2) $\sin^{-1}(1)$ in degrees?

3) Midline of $\sin(x) + 1$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","90","1"],
        hint1: "|A|.",
        hint2: "sin(90°)=1.",
        hint3: "D=1.",
        explanation: "1) 4. 2) 90. 3) 1."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The period formula is","options":["2π/|B|","2π·B","A/B","B/2π"]},{"label":"Increasing |A| makes the graph","options":["Taller (vertically stretched)","Wider","Shorter","Narrower"]}],
        correctAnswers: ["2π/|B|","Taller (vertically stretched)"],
        hint1: "Divide 2π by |B|.",
        hint2: "Amplitude = height.",
        explanation: "Period = 2π/|B|. Larger |A| → taller graph."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Amplitude | $y = 4\cos(x)$ |
| 2 | Period of $\sin(3x)$ | 2π/3 |
| 3 | arcsin(1) | 90° |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Period of sin(3x)?",
                    "options": [
                              "2π/3",
                              "3π",
                              "6π",
                              "π/3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2π/3."
          }
]
      }
    }
  ]
};
