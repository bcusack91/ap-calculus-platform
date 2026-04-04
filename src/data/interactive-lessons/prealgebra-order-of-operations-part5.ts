export const preAlgOrderOpsPart5Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Nested Expressions

**Part 5 of 7 — Nested Expressions**

**Nested parentheses** (brackets inside brackets): work from innermost out.

$2[3 + (4 - 1)] = 2[3 + 3] = 2[6] = 12$
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$5 + 2[3(2+1)] = 5 + 2[3(3)] = 5 + 2[9] = 5 + 18 = 23$ ✅
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$3(2+1)^2 = ?$",
                    "options": [
                              "27",
                              "81",
                              "12",
                              "21"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(3)²=9. 3(9)=27."
          }
]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Nested Expressions** 🧮

1) $3(2 + 1)^2 = ?$

2) $2[5 - (3 - 1)] = ?$

3) $(1 + 2)^2 + 4 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["27","6","13"],
        hint1: "Parentheses: 2+1=3. Then 3²=9. Then 3(9).",
        hint2: "Inner first: 3−1=2. Then 5−2=3. Then 2(3).",
        hint3: "3² + 4.",
        explanation: "1) 27. 2) 6. 3) 13."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"With nested parentheses, start from","options":["Innermost","Outermost","Left to right","Right to left"]},{"label":"Brackets [ ] and parentheses ( ) are","options":["Both grouping symbols","Different operations","Brackets first","Parentheses only"]}],
        correctAnswers: ["Innermost","Both grouping symbols"],
        hint1: "Inside out.",
        hint2: "Both mean \"do this first.\"",
        explanation: "Innermost first. Brackets and parentheses both group."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | 3(2+1)² | 27 |
| 2 | 2[5−(3−1)] | 6 |
| 3 | (1+2)²+4 | 13 |
    
    `
    },
    {
      id: 'prealgebra-order-of-operations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$2[5 - (3-1)] = ?$",
                    "options": [
                              "6",
                              "4",
                              "8",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Inner: 3−1=2. Outer: 5−2=3. 2(3)=6."
          }
]
      }
    }
  ]
};
