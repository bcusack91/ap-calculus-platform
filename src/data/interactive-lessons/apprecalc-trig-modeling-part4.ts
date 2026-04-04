export const apPrecalcTrigModelPart4Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Modeling with Sinusoids

**Part 4 of 7 — Modeling with Sinusoids**

Many real-world phenomena are periodic:
- Temperature over a year
- Tides, daylight hours
- Sound waves, pendulums

To model: find **amplitude** (half of max−min), **midline** (average of max and min), and **period** (time for one cycle).
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Temperature: max 90°F, min 30°F, period 12 months.**

$A = \frac{90-30}{2} = 30$, $D = \frac{90+30}{2} = 60$
$B = \frac{2\pi}{12} = \frac{\pi}{6}$

$T(t) = 30\sin\left(\frac{\pi}{6}t\right) + 60$ ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Max 80, min 40. Amplitude?",
                    "options": [
                              "20",
                              "60",
                              "40",
                              "120"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(80−40)/2 = 20."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p4-input',
      type: 'input-boxes' as const,
      content: `
**Find Amplitude** 🧮

Amplitude = (max − min) / 2

1) Max=80, min=40. Amplitude?

2) Max=100, min=20. Amplitude?

3) Max=50, min=10. Amplitude?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["20","40","20"],
        hint1: "(80−40)/2.",
        hint2: "(100−20)/2.",
        hint3: "(50−10)/2.",
        explanation: "1) 20. 2) 40. 3) 20."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The midline is the ____ of max and min","options":["Average","Difference","Product","Sum"]},{"label":"A sinusoidal model requires the data to be","options":["Periodic","Linear","Exponential","Random"]}],
        correctAnswers: ["Average","Periodic"],
        hint1: "(max+min)/2.",
        hint2: "Repeating pattern.",
        explanation: "Midline = average. Data must be periodic for sinusoidal models."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Max | Min | Amplitude | Midline |
|---|-----|-----|-----------|--------|
| 1 | 80 | 40 | 20 | 60 |
| 2 | 100 | 20 | 40 | 60 |
| 3 | 50 | 10 | 20 | 30 |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Max 80, min 40. Midline?",
                    "options": [
                              "60",
                              "20",
                              "80",
                              "40"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(80+40)/2 = 60."
          }
]
      }
    }
  ]
};
