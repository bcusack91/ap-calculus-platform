export const apPrecalcTrigModelPart5Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Inverse Trig Functions

**Part 5 of 7 — Inverse Trig Functions**

- $\sin^{-1}(x)$ or $\arcsin(x)$: returns angle whose sine is $x$; range $[-\frac{\pi}{2}, \frac{\pi}{2}]$
- $\cos^{-1}(x)$ or $\arccos(x)$: range $[0, \pi]$
- $\tan^{-1}(x)$ or $\arctan(x)$: range $(-\frac{\pi}{2}, \frac{\pi}{2})$
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$\sin^{-1}(1) = $ ?**

$\sin(\frac{\pi}{2}) = 1$ → $\sin^{-1}(1) = \frac{\pi}{2} = 90°$ ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "sin⁻¹(0) = ?",
                    "options": [
                              "0°",
                              "90°",
                              "180°",
                              "45°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "sin(0) = 0."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Trig** 🧮 (answer in degrees)

1) $\sin^{-1}(0) = $ ?

2) $\cos^{-1}(1) = $ ?

3) $\tan^{-1}(1) = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","0","45"],
        hint1: "What angle has sin = 0?",
        hint2: "What angle has cos = 1?",
        hint3: "What angle has tan = 1?",
        explanation: "1) 0°. 2) 0°. 3) 45°."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The range of arcsin is","options":["[−90°, 90°]","[0°, 180°]","[0°, 360°]","All reals"]},{"label":"The range of arccos is","options":["[0°, 180°]","[−90°, 90°]","[0°, 360°]","All reals"]}],
        correctAnswers: ["[−90°, 90°]","[0°, 180°]"],
        hint1: "Restricted range for unique outputs.",
        hint2: "Quadrants I and II.",
        explanation: "arcsin: [−90°,90°]. arccos: [0°,180°]."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $\sin^{-1}(0)$ | 0° |
| 2 | $\cos^{-1}(1)$ | 0° |
| 3 | $\tan^{-1}(1)$ | 45° |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "cos⁻¹(0) = ?",
                    "options": [
                              "90°",
                              "0°",
                              "180°",
                              "45°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "cos(90°) = 0."
          }
]
      }
    }
  ]
};
