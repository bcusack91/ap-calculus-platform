export const preAlgVariablesPart7Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Variables represent unknowns
- Translate words → expressions/equations
- Evaluate by substituting
- Like terms: same variable & power
- Solve: use inverse operations
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$4x - 3 = 21$
$4x = 24$
$x = 6$ ✅
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$3x + 2$ when $x=4$?",
                    "options": [
                              "14",
                              "34",
                              "12",
                              "9"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3(4)+2 = 14."
          }
]
      }
    },
    {
      id: 'prealgebra-intro-variables-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $3x + 2$ when $x = 4$?

2) $6y + 2y = ?y$ (coefficient)

3) $5x = 35$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["14","8","7"],
        hint1: "3(4) + 2.",
        hint2: "6 + 2.",
        hint3: "35 ÷ 5.",
        explanation: "1) 14. 2) 8. 3) 7."
      }
    },
    {
      id: 'prealgebra-intro-variables-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"An expression does NOT have","options":["An equal sign","Variables","Numbers","Operations"]},{"label":"An equation HAS","options":["An equal sign","Only one term","No variables","No numbers"]}],
        correctAnswers: ["An equal sign","An equal sign"],
        hint1: "Expressions vs equations.",
        hint2: "Equals sign is the key.",
        explanation: "Expressions: no =. Equations: have =."
      }
    },
    {
      id: 'prealgebra-intro-variables-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Evaluate | 3x+2, x=4 |
| 2 | Combine | 6y+2y |
| 3 | Solve | 5x=35 |
    
    `
    },
    {
      id: 'prealgebra-intro-variables-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$5x = 35$. $x = ?$",
                    "options": [
                              "7",
                              "30",
                              "175",
                              "40"
                    ],
                    "correctAnswer": 0,
                    "explanation": "35 ÷ 5 = 7."
          }
]
      }
    }
  ]
};
