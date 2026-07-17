export const alg2ExponentialPart2Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Exponential Decay

**Part 2 of 7 — Exponential Decay**

$y = a \\cdot b^x \quad (0 < b < 1)$

Decay factor: $b = 1 - r$ (where $r$ is the decay rate)

**Half-life**: time for the quantity to halve.
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Car: $20,000, depreciates 15%/year. Value after 2 years?**

$y = 20000(0.85)^2 = 20000(0.7225) = 14450$ → **$14,450** ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Decay factor for 10% decay rate?",
                    "options": [
                              "0.9",
                              "1.1",
                              "0.1",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "b = 1 − 0.10 = 0.9."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Exponential Decay** 🧮

1) $1000(0.9)^2 = ?$

2) $500(0.5)^1 = ?$

3) $800(0.75)^2 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["810","250","450"],
        hint1: "1000 × 0.81.",
        hint2: "500 × 0.5.",
        hint3: "800 × 0.5625.",
        explanation: "1) 810. 2) 250. 3) 450."
      }
    },
    {
      id: 'algebra2-exponential-functions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Exponential decay has b","options":["Between 0 and 1","Greater than 1","Equal to 1","Negative"]},{"label":"Decay factor = 1 minus the","options":["Rate","Initial value","Time","Exponent"]}],
        correctAnswers: ["Between 0 and 1","Rate"],
        hint1: "0 < b < 1.",
        hint2: "b = 1 − r.",
        explanation: "Decay: 0 < b < 1. Decay factor = 1 − rate."
      }
    },
    {
      id: 'algebra2-exponential-functions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Initial | Rate | Years | Formula |
|---|---------|------|-------|---------|
| 1 | 1000 | 10% | 2 | $1000(0.9)^{2}$ |
| 2 | 500 | 50% | 1 | $500(0.5)^{1}$ |
| 3 | 800 | 25% | 2 | $800(0.75)^{2}$ |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "After one half-life, ½ remains. After two?",
                    "options": [
                              "1/4",
                              "0",
                              "1/3",
                              "1/2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "½ × ½ = ¼."
          }
]
      }
    }
  ]
};
