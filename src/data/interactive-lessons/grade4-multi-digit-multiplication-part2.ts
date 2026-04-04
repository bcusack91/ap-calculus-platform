export const g4MultiDigitMultPart2Data = {
  topicSlug: "multi-digit-multiplication-grade4",
  sections: [
    {
      id: 'grade4-multi-digit-multiplication-p2-intro',
      type: 'text' as const,
      content: `
# ✖️ Area Model

**Part 2 of 7 — Area Model**

Break numbers into expanded form, multiply each part, and add:

$23 \times 17 = (20+3)(10+7)$
$= 20(10) + 20(7) + 3(10) + 3(7)$
$= 200 + 140 + 30 + 21 = 391$
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$34 \times 12$** using the area model:

| × | 10 | 2 |
|---|-----|-----|
| 30 | 300 | 60 |
| 4 | 40 | 8 |

$300 + 60 + 40 + 8 = 408$ ✅
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "In the area model for $26 \\\\times 13$, which is NOT a partial product?",
                    "options": [
                              "$26 \\\\times 13 = 338$",
                              "$20 \\\\times 10 = 200$",
                              "$6 \\\\times 3 = 18$",
                              "$20 \\\\times 3 = 60$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "That is the final answer, not a partial product. Partial products: 200, 60, 60, 18."
          }
]
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-input',
      type: 'input-boxes' as const,
      content: `
**Area Model Practice** 🧮

1) $23 \times 17 = ?$

2) $34 \times 12 = ?$

3) $25 \times 31 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["391","408","775"],
        hint1: "20×17 + 3×17 = 340 + 51.",
        hint2: "30×12 + 4×12 = 360 + 48.",
        hint3: "25×30 + 25×1 = 750 + 25.",
        explanation: "1) 340+51=391. 2) 360+48=408. 3) 750+25=775."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In the area model, you break numbers into","options":["Expanded form (tens and ones)","Prime factors","Even and odd parts","Halves"]},{"label":"After finding all partial products, you","options":["Add them together","Multiply them","Subtract them","Take the largest"]}],
        correctAnswers: ["Expanded form (tens and ones)","Add them together"],
        hint1: "Think place value.",
        hint2: "Partial products combine by...",
        explanation: "Break into tens/ones (expanded form). Add all partial products for the final answer."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Break Down |
|---|---------|------------|
| 1 | $15 \times 13$ | $(10+5)(10+3)$ |
| 2 | $22 \times 14$ | $(20+2)(10+4)$ |
| 3 | $31 \times 25$ | $(30+1)(20+5)$ |
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The area model works because of the _____ property.",
                    "options": [
                              "Distributive",
                              "Commutative",
                              "Associative",
                              "Identity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The area model uses the distributive property: a(b+c) = ab + ac."
          }
]
      }
    }
  ]
};
