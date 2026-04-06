export const apPrecalcPolyEndPart2Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p2-intro',
      type: 'text' as const,
      content: `
# 📊 End Behavior Rules

**Part 2 of 7 — End Behavior Rules**

| Degree | Leading Coeff | Left | Right |
|--------|--------------|------|-------|
| Even | + | ↑ | ↑ |
| Even | − | ↓ | ↓ |
| Odd | + | ↓ | ↑ |
| Odd | − | ↑ | ↓ |

As $x \\to \pm\infty$, only the leading term matters.
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = -2x^3 + x$. End behavior?**

Odd degree, negative leading coeff → Left ↑, Right ↓ ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Even degree, positive leading coeff. End behavior?",
                    "options": [
                              "Both ends up",
                              "Both ends down",
                              "Left down, right up",
                              "Left up, right down"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Even + positive → ↑↑."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-input',
      type: 'input-boxes' as const,
      content: `
**End Behavior** 🧮

1) $3x^4$: Degree?

2) $-x^2 + 1$: Degree?

3) $5x^3 - 2x$: Degree?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","2","3"],
        hint1: "Highest exponent.",
        hint2: "Highest power.",
        hint3: "Highest power.",
        explanation: "1) 4 (even→both same). 2) 2 (even). 3) 3 (odd→opposite)."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For x⁴, both ends go","options":["Up","Down","Opposite directions","To zero"]},{"label":"For −x³, the right end goes","options":["Down","Up","To zero","Stays constant"]}],
        correctAnswers: ["Up","Down"],
        hint1: "Even + positive.",
        hint2: "Odd + negative → right ↓.",
        explanation: "x⁴: even+positive→both up. −x³: odd+neg→right down."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Polynomial | Left | Right |
|---|-----------|------|-------|
| 1 | $x^2$ | ↑ | ↑ |
| 2 | $-x^3$ | ↑ | ↓ |
| 3 | $x^4$ | ↑ | ↑ |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Odd degree, negative leading coeff. As x→∞?",
                    "options": [
                              "f(x) → −∞",
                              "f(x) → +∞",
                              "f(x) → 0",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Odd negative → right side goes down."
          }
]
      }
    }
  ]
};
