export const g4MultiDigitMultPart3Data = {
  topicSlug: "multi-digit-multiplication-grade4",
  sections: [
    {
      id: 'grade4-multi-digit-multiplication-p3-intro',
      type: 'text' as const,
      content: `
# ✖️ Partial Products

**Part 3 of 7 — Partial Products**

Multiply each digit separately, then add:

$24 \times 7$:
- $20 \times 7 = 140$
- $4 \times 7 = 28$
- $140 + 28 = 168$
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$36 \times 24$:
- $36 \times 20 = 720$
- $36 \times 4 = 144$
- $720 + 144 = 864$ ✅
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is the first partial product of $43 \\\\times 26$ (tens first)?",
                    "options": [
                              "$43 \\\\times 20 = 860$",
                              "$43 \\\\times 6 = 258$",
                              "$40 \\\\times 26 = 1040$",
                              "$3 \\\\times 6 = 18$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Multiply by the tens digit first: 43 × 20 = 860."
          }
]
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-input',
      type: 'input-boxes' as const,
      content: `
**Partial Products** 🧮

1) $24 \times 7 = ?$

2) $36 \times 26 = ?$

3) $56 \times 38 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["168","936","2128"],
        hint1: "20×7 + 4×7.",
        hint2: "36×20 + 36×6.",
        hint3: "56×30 + 56×8.",
        explanation: "1) 140+28=168. 2) 720+216=936. 3) 1680+448=2128."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Partial products means you multiply by each place value and then","options":["Add the results","Multiply the results","Subtract","Take the average"]},{"label":"$15 \\\\times 8 = 10(8) + 5(8) =$","options":["120","80","40","160"]}],
        correctAnswers: ["Add the results","120"],
        hint1: "After getting partial products...",
        hint2: "80 + 40 = ?",
        explanation: "Add partial products. 10(8)+5(8) = 80+40 = 120."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Partial Products |
|---|---------|-----------------|
| 1 | $18 \times 5$ | $10(5) + 8(5)$ |
| 2 | $27 \times 13$ | $27(10) + 27(3)$ |
| 3 | $45 \times 32$ | $45(30) + 45(2)$ |
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$52 \\\\times 14$: partial products are $52 \\\\times 10 = 520$ and $52 \\\\times 4 = 208$. Final answer?",
                    "options": [
                              "728",
                              "520",
                              "208",
                              "312"
                    ],
                    "correctAnswer": 0,
                    "explanation": "520 + 208 = 728."
          }
]
      }
    }
  ]
};
