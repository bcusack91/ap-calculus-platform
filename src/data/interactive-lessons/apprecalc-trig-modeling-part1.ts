export const apPrecalcTrigModelPart1Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Sine & Cosine Graphs

**Part 1 of 7 — Sine & Cosine Graphs**

$y = A\\sin(Bx + C) + D$

- **A**: amplitude (vertical stretch)
- **B**: affects period ($T = \\frac{2\\pi}{|B|}$)
- **C**: phase shift
- **D**: vertical shift (midline)

Sine starts at midline; cosine starts at maximum.
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$y = \\sin(x)$. Key features?**

Amplitude = 1, Period = 2π, Midline: y = 0 ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "sin(0) = ?",
                    "options": [
                              "0",
                              "1",
                              "−1",
                              "π"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Sine of 0 is 0."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p1-input',
      type: 'input-boxes' as const,
      content: `
**Amplitude** 🧮

1) Amplitude of $\\sin(x)$?

2) Amplitude of $\\cos(x)$?

3) Amplitude of $2\\sin(x)$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","1","2"],
        hint1: "Coefficient of sin.",
        hint2: "Coefficient of cos.",
        hint3: "Coefficient of sin.",
        explanation: "1) 1. 2) 1. 3) 2."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Sine starts at the","options":["Midline going up","Maximum","Minimum","Origin only"]},{"label":"Cosine starts at the","options":["Maximum","Midline","Minimum","Zero"]}],
        correctAnswers: ["Midline going up","Maximum"],
        hint1: "sin(0) = 0.",
        hint2: "cos(0) = 1.",
        explanation: "Sine: midline → up. Cosine: starts at max."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Amplitude | Period |
|---|---------|-----------|--------|
| 1 | sin(x) | 1 | 2π |
| 2 | cos(x) | 1 | 2π |
| 3 | 2sin(x) | 2 | 2π |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "cos(0) = ?",
                    "options": [
                              "1",
                              "0",
                              "−1",
                              "π"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Cosine of 0 is 1."
          }
]
      }
    }
  ]
};
