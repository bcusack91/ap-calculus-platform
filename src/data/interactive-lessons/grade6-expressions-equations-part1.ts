export const g6ExpressionsPart1Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p1-intro',
      type: 'text' as const,
      content: `
# ✏️ Writing Expressions

**Part 1 of 7 — Writing Expressions**

An **algebraic expression** uses variables, numbers, and operations.

| Phrase | Expression |
|--------|-----------|
| 5 more than x | $x + 5$ |
| 3 times a number | $3n$ |
| a number divided by 4 | $\frac{n}{4}$ |
| 7 less than y | $y - 7$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**"Twice a number increased by 3"**

"Twice a number" → $2n$
"increased by 3" → $+ 3$
Expression: $2n + 3$ ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "\"8 less than a number n\" is written as:",
                    "options": [
                              "$n - 8$",
                              "$8 - n$",
                              "$8n$",
                              "$n + 8$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "\"Less than\" means subtract from the number: n − 8."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Translate Phrases** 🧮

1) "The sum of a number and 2": $n + $ ?

2) "7 times a number": coefficient of n?

3) "3 less than a number": $n - $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","7","3"],
        hint1: "\"Sum\" means add.",
        hint2: "\"7 times\" means multiply by 7.",
        hint3: "\"Less than\" means subtract.",
        explanation: "1) n + 2. 2) Coefficient = 7. 3) n − 3."
      }
    },
    {
      id: 'grade6-expressions-equations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"The product of 6 and x\" means","options":["6x","6 + x","x − 6","x/6"]},{"label":"A coefficient is","options":["The number multiplied by a variable","The variable itself","A constant term","An exponent"]}],
        correctAnswers: ["6x","The number multiplied by a variable"],
        hint1: "\"Product\" means multiply.",
        hint2: "It is the number in front.",
        explanation: "Product = multiply: 6x. Coefficient = number × variable."
      }
    },
    {
      id: 'grade6-expressions-equations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Phrase | Expression |
|---|-------|-----------|
| 1 | 4 more than a number | $n + 4$ |
| 2 | A number divided by 3 | $n/3$ |
| 3 | 5 times a number minus 2 | $5n - 2$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In the expression $3x + 7$, the coefficient of x is:",
                    "options": [
                              "3",
                              "7",
                              "x",
                              "10"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The coefficient is the number multiplied by the variable: 3."
          }
]
      }
    }
  ]
};
