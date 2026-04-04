export const g6IntegersPart1Data = {
  topicSlug: "integers-grade6",
  sections: [
    {
      id: 'grade6-integers-p1-intro',
      type: 'text' as const,
      content: `
# ➕➖ Positive & Negative Numbers

**Part 1 of 7 — Positive & Negative Numbers**

**Integers** = {..., −3, −2, −1, 0, 1, 2, 3, ...}

Real-world examples:
- Temperature: −5°F (below zero)
- Money: −\\$10 (debt)
- Elevation: −100 ft (below sea level)
    
    `
    },
    {
      id: 'grade6-integers-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A temperature drops from 8°F to −3°F. How many degrees did it drop?**

From 8 to 0 = 8 degrees. From 0 to −3 = 3 degrees.
Total drop: $8 + 3 = 11$ degrees ✅
    
    `
    },
    {
      id: 'grade6-integers-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which integer represents \"a loss of 7 points\"?",
                    "options": [
                              "−7",
                              "7",
                              "+7",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A loss is negative: −7."
          }
]
      }
    },
    {
      id: 'grade6-integers-p1-input',
      type: 'input-boxes' as const,
      content: `
**Write Integers** 🧮

1) 10° below zero = ?

2) Gain of 25 yards = ?

3) 50 feet below sea level = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-10","25","-50"],
        hint1: "Below zero → negative.",
        hint2: "Gain → positive.",
        hint3: "Below sea level → negative.",
        explanation: "1) −10. 2) +25. 3) −50."
      }
    },
    {
      id: 'grade6-integers-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Integers include","options":["Positive numbers, negative numbers, and zero","Only positive numbers","Only fractions","Only whole numbers"]},{"label":"A debt of $30 is represented as","options":["−30","+30","30","0"]}],
        correctAnswers: ["Positive numbers, negative numbers, and zero","−30"],
        hint1: "Integers go in both directions.",
        hint2: "Debt is negative.",
        explanation: "Integers: …−2,−1,0,1,2… Debt → −30."
      }
    },
    {
      id: 'grade6-integers-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Item | Integer |
|---|------|---------|
| 1 | 15° below zero | −15 |
| 2 | Gain of \$50 | +50 |
| 3 | 200 ft below sea level | −200 |
    
    `
    },
    {
      id: 'grade6-integers-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is colder: −5°F or −12°F?",
                    "options": [
                              "−12°F",
                              "−5°F",
                              "They are equal",
                              "0°F"
                    ],
                    "correctAnswer": 0,
                    "explanation": "−12 is farther below zero → colder."
          }
]
      }
    }
  ]
};
