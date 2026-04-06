export const apPrecalcTrigModelPart6Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply all trig modeling concepts:
- Read amplitude, period, shifts from a graph or description
- Write a sinusoidal model
- Evaluate inverse trig expressions
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Ferris wheel: radius 20 ft, center 25 ft high, period 60 sec.**

$h(t) = -20\cos\left(\\frac{2\pi}{60}t\\right) + 25 = -20\cos\left(\\frac{\pi}{30}t\\right) + 25$ ✅

(Negative cosine starts at the bottom)
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Max 70, min 30. Midline?",
                    "options": [
                              "50",
                              "40",
                              "20",
                              "100"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(70+30)/2 = 50."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p6-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

Max = 70, min = 30:

1) Midline?

2) Amplitude?

3) Amplitude of $5\sin(\pi x) + 2$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","20","5"],
        hint1: "(70+30)/2.",
        hint2: "(70−30)/2.",
        hint3: "Coefficient of sin.",
        explanation: "1) 50. 2) 20. 3) 5."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A Ferris wheel is modeled with ____ because it is periodic","options":["A sinusoidal function","A linear function","A polynomial","An exponential"]},{"label":"−cos starts at the","options":["Minimum","Maximum","Midline","Zero"]}],
        correctAnswers: ["A sinusoidal function","Minimum"],
        hint1: "Repeating circular motion.",
        hint2: "−cos(0) = −1.",
        explanation: "Ferris wheel → sinusoidal. −cos starts at minimum."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | Max 70, min 30, period 12 | Model |
| 2 | arctan(0) | Inverse trig |
| 3 | Amplitude of 5sin(πx)+2 | Read graph |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "arctan(0) = ?",
                    "options": [
                              "0°",
                              "45°",
                              "90°",
                              "180°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "tan(0) = 0."
          }
]
      }
    }
  ]
};
