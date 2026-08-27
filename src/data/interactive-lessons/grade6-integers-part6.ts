export const g6IntegersPart6Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply integer operations to real scenarios:
- Temperature changes
- Money (deposits and withdrawals)
- Elevation changes
    
    `
    },
    {
      id: 'grade6-integers-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Temperature: −8°F, rises 15°. New temperature?**

$-8 + 15 = 7$°F ✅
    
    `
    },
    {
      id: 'grade6-integers-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Bank balance \\$50, withdraw \\$75. Balance?",
                    "options": [
                              "−$25",
                              "$125",
                              "$25",
                              "−$125"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\\$50 − \\$75 = −\\$25 (overdrawn)."
          }
]
      }
    },
    {
      id: 'grade6-integers-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) \\$50 − \\$75 = ? (use negative for overdrawn)

2) 3°F drops 10°. New temperature?

3) Elevator on floor −2, goes up 5. New floor?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-25","-7","3"],
        hint1: "50 − 75.",
        hint2: "3 − 10.",
        hint3: "−2 + 5.",
        explanation: "1) −25. 2) −7. 3) 3."
      }
    },
    {
      id: 'grade6-integers-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A withdrawal from a bank account is","options":["Subtraction (negative)","Addition (positive)","Multiplication","Division"]},{"label":"Going from −3 to 4 requires moving","options":["7 units","1 unit","−7 units","−1 unit"]}],
        correctAnswers: ["Subtraction (negative)","7 units"],
        hint1: "Taking money out.",
        hint2: "From −3 to 0 is 3, then 0 to 4 is 4.",
        explanation: "Withdrawal → subtraction. −3 to 4 = 7 units."
      }
    },
    {
      id: 'grade6-integers-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Expression |
|---|---------|-----------|
| 1 | Bank: \\$50, withdraw \\$75 | $50 - 75$ |
| 2 | Temp: 3°, drops 10° | $3 - 10$ |
| 3 | Elevator: floor −2, up 5 floors | $-2 + 5$ |
    
    `
    },
    {
      id: 'grade6-integers-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Temperature: 3°F, drops 10°. New temp?",
                    "options": [
                              "−7°F",
                              "7°F",
                              "13°F",
                              "−13°F"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$3 − 10 = −7$°F."
          }
]
      }
    }
  ]
};
