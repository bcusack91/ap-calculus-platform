export const g7RationalOpsPart3Data = {
  topicSlug: "operations-rational-numbers-grade7",
  sections: [
    {
      id: 'grade7-operations-rational-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Multiplying Rational Numbers

**Part 3 of 7 — Multiplying Rational Numbers**

Sign rules:
- Same signs → **positive**
- Different signs → **negative**

$(-0.3)(0.5) = -0.15$
$(-\frac{2}{3})(-\frac{3}{4}) = \frac{1}{2}$
    
    `
    },
    {
      id: 'grade7-operations-rational-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-2.5)(4) = -10$ (different signs → negative) ✅
    
    `
    },
    {
      id: 'grade7-operations-rational-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-4)(-7) = ?$",
                    "options": [
                              "28",
                              "−28",
                              "−11",
                              "11"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same signs → positive: 28."
          }
]
      }
    },
    {
      id: 'grade7-operations-rational-p3-input',
      type: 'input-boxes' as const,
      content: `
**Multiply Rationals** 🧮

1) $(-3)(5) = ?$

2) $(-4)(-7) = ?$

3) $(0.5)(-0.8) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-15","28","-0.4"],
        hint1: "Different signs → negative.",
        hint2: "Same signs → positive.",
        hint3: "Different signs → negative. 5×8=40.",
        explanation: "1) −15. 2) 28. 3) −0.4."
      }
    },
    {
      id: 'grade7-operations-rational-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Two negatives multiplied give","options":["Positive","Negative","Zero","Undefined"]},{"label":"$(−1)(−1)(−1) =$","options":["−1","1","0","3"]}],
        correctAnswers: ["Positive","−1"],
        hint1: "Same sign rule.",
        hint2: "Odd number of negatives.",
        explanation: "(−)(−)=(+). Three negatives: (−1)(−1)=1, (1)(−1)=−1."
      }
    },
    {
      id: 'grade7-operations-rational-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Sign |
|---|---------|------|
| 1 | $(-3)(5)$ | Negative |
| 2 | $(-4)(-7)$ | Positive |
| 3 | $(0.5)(-0.8)$ | Negative |
    
    `
    },
    {
      id: 'grade7-operations-rational-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-\\\\frac{1}{2})(\\\\frac{4}{5}) = ?$",
                    "options": [
                              "$-\\\\frac{2}{5}$",
                              "$\\\\frac{2}{5}$",
                              "$-\\\\frac{5}{2}$",
                              "$\\\\frac{4}{10}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different signs: −(1×4)/(2×5) = −2/5."
          }
]
      }
    }
  ]
};
