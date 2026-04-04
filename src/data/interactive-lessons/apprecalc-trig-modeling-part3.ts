export const apPrecalcTrigModelPart3Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Phase Shift

**Part 3 of 7 — Phase Shift**

$y = A\sin(B(x - h)) + D$

**Phase shift** = $h = -\frac{C}{B}$ (horizontal shift)

- Shift **right** when $h > 0$
- Shift **left** when $h < 0$

**Vertical shift** = $D$ (moves the midline)
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$y = \sin(x - \frac{\pi}{4})$. Phase shift?**

Shift right by $\frac{\pi}{4}$ ✅
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Phase shift of sin(x − π)?",
                    "options": [
                              "Right by π",
                              "Left by π",
                              "Up by π",
                              "Down by π"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x − π → shift right π."
          }
]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p3-input',
      type: 'input-boxes' as const,
      content: `
**Shifts** 🧮

1) $\sin(x) + 3$. Midline at $y = $ ?

2) $\sin(x - \pi)$. Midline at $y = $ ?

3) $\cos(x) + 2$. Midline at $y = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","0","2"],
        hint1: "D = 3.",
        hint2: "No vertical shift.",
        hint3: "D = 2.",
        explanation: "1) 3. 2) 0. 3) 2."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A phase shift moves the graph","options":["Horizontally","Vertically","Both","Neither"]},{"label":"sin(x − π/2) equals","options":["−cos(x)","cos(x)","sin(x)","tan(x)"]}],
        correctAnswers: ["Horizontally","−cos(x)"],
        hint1: "Left or right.",
        hint2: "Sine shifted right by π/2.",
        explanation: "Phase = horizontal shift. sin(x−π/2) = −cos(x)."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Phase Shift |
|---|---------|----------|
| 1 | $\sin(x - \pi)$ | Right π |
| 2 | $\cos(x + \frac{\pi}{2})$ | Left π/2 |
| 3 | $\sin(x) + 3$ | No phase shift, up 3 |
    
    `
    },
    {
      id: 'apprecalc-trig-modeling-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Vertical shift of sin(x) + 3?",
                    "options": [
                              "Up 3",
                              "Down 3",
                              "Right 3",
                              "Left 3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "+D shifts the midline up."
          }
]
      }
    }
  ]
};
