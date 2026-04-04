export const g6IntegersPart2Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p2-intro',
      type: 'text' as const,
      content: `
# ➕➖ Number Line & Absolute Value

**Part 2 of 7 — Number Line & Absolute Value**

**Absolute value** = distance from zero (always positive or zero).

$|5| = 5$, $|-5| = 5$, $|0| = 0$

On the number line: numbers increase left to right.
    
    `
    },
    {
      id: 'grade6-integers-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Compare: $|-8|$ and $|6|$.**

$|-8| = 8$ and $|6| = 6$. So $|-8| > |6|$. ✅
    
    `
    },
    {
      id: 'grade6-integers-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$|-15| = ?$",
                    "options": [
                              "15",
                              "−15",
                              "0",
                              "−1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Distance from 0 → always positive: 15."
          }
]
      }
    },
    {
      id: 'grade6-integers-p2-input',
      type: 'input-boxes' as const,
      content: `
**Absolute Value** 🧮

1) $|-12| = ?$

2) $|0| = ?$

3) $|7| + |-3| = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","0","10"],
        hint1: "Distance from 0.",
        hint2: "Zero is 0 away from itself.",
        hint3: "7 + 3.",
        explanation: "1) 12. 2) 0. 3) 7+3=10."
      }
    },
    {
      id: 'grade6-integers-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Absolute value is always","options":["Non-negative","Negative","Zero","Positive"],"correctAnswer":0},{"label":"On a number line, which is farther from 0: -7 or 5?","options":["-7","5","Same distance","Cannot tell"]}],
        correctAnswers: ["Non-negative","-7"],
        hint1: "Distance cannot be negative.",
        hint2: "|-7|=7 vs |5|=5.",
        explanation: "Absolute value ≥ 0. |-7|=7 > |5|=5."
      }
    },
    {
      id: 'grade6-integers-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $|-12|$ | 12 |
| 2 | $|0|$ | 0 |
| 3 | $|7| + |-3|$ | 10 |
    
    `
    },
    {
      id: 'grade6-integers-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is greater: $-4$ or $-9$?",
                    "options": [
                              "$-4$",
                              "$-9$",
                              "They are equal",
                              "Cannot compare"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−4 is closer to 0 → greater."
          }
]
      }
    }
  ]
};
