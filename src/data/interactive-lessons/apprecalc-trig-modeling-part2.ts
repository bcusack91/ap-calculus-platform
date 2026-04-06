export const apPrecalcTrigModelPart2Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Amplitude & Period

**Part 2 of 7 — Amplitude & Period**

- **Amplitude** = $|A|$ (distance from midline to max/min)
- **Period** = $\\frac{2\pi}{|B|}$ (one full cycle length)

For $y = 3\sin(2x)$: amplitude = 3, period = $\\frac{2\pi}{2} = \pi$
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$y = 4\cos(3x)$. Amplitude? Period?**

Amplitude = 4, Period = $\\frac{2\pi}{3} \approx 2.09$ ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Amplitude of 3sin(2x)?",
                    "options": [
                              "3",
                              "2",
                              "6",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "|A| = 3."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find Amplitude** 🧮

1) $3\sin(2x)$: Amplitude?

2) $5\cos(x)$: Amplitude?

3) $\sin(4x)$: Amplitude?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","5","1"],
        hint1: "|A| from y=A·sin(Bx).",
        hint2: "Coefficient of cos.",
        hint3: "No coefficient means 1.",
        explanation: "1) 3. 2) 5. 3) 1."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Period = 2π divided by","options":["|B|","A","C","D"]},{"label":"If B increases, the period","options":["Decreases","Increases","Stays the same","Becomes zero"]}],
        correctAnswers: ["|B|","Decreases"],
        hint1: "T = 2π/|B|.",
        hint2: "Bigger B → smaller fraction.",
        explanation: "Period = 2π/|B|. Larger B → shorter period."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Amplitude | Period |
|---|---------|-----------|--------|
| 1 | $3\sin(2x)$ | 3 | π |
| 2 | $5\cos(x)$ | 5 | 2π |
| 3 | $\sin(4x)$ | 1 | π/2 |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Period of sin(4x)?",
                    "options": [
                              "π/2",
                              "4π",
                              "2π",
                              "π/4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2π/4 = π/2."
          }
]
      }
    }
  ]
};
