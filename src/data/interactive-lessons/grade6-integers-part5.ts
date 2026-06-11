export const g6IntegersPart5Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p5-intro',
      type: 'text' as const,
      content: `
# ➕➖ Multiplying & Dividing Integers

**Part 5 of 7 — Multiplying & Dividing Integers**

### Sign Rules
| Signs | Result |
|-------|--------|
| (+)(+) | + |
| (−)(−) | + |
| (+)(−) | − |
| (−)(+) | − |

Same signs → positive. Different signs → negative.
    
    `
    },
    {
      id: 'grade6-integers-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-4) \\times (-6) = +24$ (same signs) ✅

$(-15) \\div 3 = -5$ (different signs) ✅
    
    `
    },
    {
      id: 'grade6-integers-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-5)(8) = ?$",
                    "options": [
                              "$-40$",
                              "$40$",
                              "$-13$",
                              "$13$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different signs → negative: −40."
          }
]
      }
    },
    {
      id: 'grade6-integers-p5-input',
      type: 'input-boxes' as const,
      content: `
**Multiply & Divide** 🧮

1) $(-3)(7) = ?$

2) $(-8)(-5) = ?$

3) $(-24) \\div (-6) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-21","40","4"],
        hint1: "Different signs → negative.",
        hint2: "Same signs → positive.",
        hint3: "Same signs → positive.",
        explanation: "1) −21. 2) +40. 3) +4."
      }
    },
    {
      id: 'grade6-integers-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Two negative numbers multiplied give a","options":["Positive result","Negative result","Zero","Cannot determine"]},{"label":"$(-1) \\\\times (-1) \\\\times (-1) =$","options":["−1","1","0","−3"]}],
        correctAnswers: ["Positive result","−1"],
        hint1: "Same signs → positive.",
        hint2: "(−1)(−1)=1, then 1(−1)=−1.",
        explanation: "Same signs → positive. Three negatives: + × − = −1."
      }
    },
    {
      id: 'grade6-integers-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Sign Rule |
|---|---------|-----------|
| 1 | $(-3)(7)$ | Different signs |
| 2 | $(-8)(-5)$ | Same signs |
| 3 | $(-24) \\div (-6)$ | Same signs |
    
    `
    },
    {
      id: 'grade6-integers-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-36) \\\\div (-4) = ?$",
                    "options": [
                              "$9$",
                              "$-9$",
                              "$-32$",
                              "$32$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same signs → positive: 9."
          }
]
      }
    }
  ]
};
