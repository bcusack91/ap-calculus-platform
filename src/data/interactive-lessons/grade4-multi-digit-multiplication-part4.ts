export const g4MultiDigitMultPart4Data = {
  topicSlug: "multi-digit-multiplication-grade4",
  sections: [
    {
      id: 'grade4-multi-digit-multiplication-p4-intro',
      type: 'text' as const,
      content: `
# ✖️ Standard Algorithm

**Part 4 of 7 — Standard Algorithm**

The standard method lines up numbers vertically:

1. Multiply by the ones digit
2. Multiply by the tens digit (shift one place left)
3. Add the two products
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$47 \\times 23$:
- $47 \\times 3 = 141$
- $47 \\times 20 = 940$
- $141 + 940 = 1{,}081$ ✅
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "In $56 \\\\times 34$, first multiply $56 \\\\times 4 = 224$. Next step?",
                    "options": [
                              "Multiply $56 \\\\times 30 = 1680$",
                              "Multiply $56 \\\\times 3 = 168$",
                              "Add 224 + 34",
                              "Multiply 224 × 3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Multiply by the tens: 56 × 30 = 1,680. Then add: 224 + 1,680."
          }
]
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-input',
      type: 'input-boxes' as const,
      content: `
**Standard Algorithm** 🧮

1) $34 \\times 18 = ?$

2) $62 \\times 38 = ?$

3) $86 \\times 54 = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["612","2356","4644"],
        hint1: "34×8 + 34×10.",
        hint2: "62×8 + 62×30.",
        hint3: "86×4 + 86×50.",
        explanation: "1) 272+340=612. 2) 496+1860=2356. 3) 344+4300=4644."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In the standard algorithm, you multiply by each digit starting from the","options":["Ones place","Tens place","Hundreds place","Largest digit"]},{"label":"$25 \\\\times 12 = 25(2) + 25(10) =$","options":["300","50","250","275"]}],
        correctAnswers: ["Ones place","300"],
        hint1: "Start with the rightmost digit.",
        hint2: "50 + 250 = ?",
        explanation: "Start from ones. 25(2)+25(10) = 50+250 = 300."
      }
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | $34 \\times 18$ | 34×8 + 34×10 |
| 2 | $62 \\times 38$ | 62×8 + 62×30 |
| 3 | $86 \\times 54$ | 86×4 + 86×50 |
    
    `
    },
    {
      id: 'grade4-multi-digit-multiplication-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Why do we shift left when multiplying by the tens digit?",
                    "options": [
                              "Because the digit represents tens, not ones",
                              "To make it look neater",
                              "To avoid carrying",
                              "No reason — it is optional"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The tens digit is worth 10×, so the product is shifted one place left."
          }
]
      }
    }
  ]
};
