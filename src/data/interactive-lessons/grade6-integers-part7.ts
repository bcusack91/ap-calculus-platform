export const g6IntegersPart7Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Integers: positive, negative, zero
- Absolute value: distance from zero
- Add same signs: add, keep sign
- Add different signs: subtract, keep larger sign
- Subtract: add the opposite
- Multiply/divide: same signs = +, different = −
    
    `
    },
    {
      id: 'grade6-integers-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$(-3)(4) + (-2) = -12 + (-2) = -14$ ✅
    
    `
    },
    {
      id: 'grade6-integers-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$(-5) + 8 = ?$",
                    "options": [
                              "3",
                              "−13",
                              "13",
                              "−3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Different signs: 8−5=3, positive wins."
          }
]
      }
    },
    {
      id: 'grade6-integers-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $(-5) + 8 = ?$

2) $6 - (-4) = ?$

3) $(-3)(-7) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","10","21"],
        hint1: "Different signs: subtract.",
        hint2: "Subtracting negative = adding.",
        hint3: "Same signs (both negative) = positive.",
        explanation: "1) 8−5=3. 2) 6+4=10. 3) 3×7=21, positive."
      }
    },
    {
      id: 'grade6-integers-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$|-9|$ equals","options":["9","−9","0","81"]},{"label":"Same sign multiplication gives","options":["Positive","Negative","Zero","Undefined"]}],
        correctAnswers: ["9","Positive"],
        hint1: "Absolute value = distance from 0.",
        hint2: "Both + or both − → ?",
        explanation: "|-9|=9. Same signs → positive product."
      }
    },
    {
      id: 'grade6-integers-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $(-5) + 8$ | 3 |
| 2 | $6 - (-4)$ | 10 |
| 3 | $(-3)(-7)$ | 21 |
    
    `
    },
    {
      id: 'grade6-integers-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$6 - (-4) = ?$",
                    "options": [
                              "10",
                              "2",
                              "-10",
                              "-2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6 + 4 = 10."
          }
]
      }
    }
  ]
};
