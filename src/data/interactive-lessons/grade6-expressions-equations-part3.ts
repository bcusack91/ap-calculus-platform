export const g6ExpressionsPart3Data = {
  topicSlug: "expressions-equations-grade6",
  sections: [
    {
      id: 'grade6-expressions-equations-p3-intro',
      type: 'text' as const,
      content: `
# ✏️ Properties of Operations

**Part 3 of 7 — Properties of Operations**

| Property | Example |
|----------|---------|
| Commutative (add) | $a + b = b + a$ |
| Commutative (mult) | $ab = ba$ |
| Associative (add) | $(a+b)+c = a+(b+c)$ |
| Distributive | $a(b+c) = ab + ac$ |
| Identity (add) | $a + 0 = a$ |
| Identity (mult) | $a \\times 1 = a$ |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Use the distributive property: $4(x + 3)$**

$4(x + 3) = 4x + 12$ ✅
    
    `
    },
    {
      id: 'grade6-expressions-equations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which property: $3 + 7 = 7 + 3$?",
                    "options": [
                              "Commutative",
                              "Associative",
                              "Distributive",
                              "Identity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Order changed → commutative."
          }
]
      }
    },
    {
      id: 'grade6-expressions-equations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Properties** 🧮

1) $3(x + 5)$: constant term after distributing?

2) $4(x + 3)$: constant term after distributing?

3) $2(2x + 1) = ?x + 2$: coefficient of x?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["15","12","4"],
        hint1: "3 × 5 = ?",
        hint2: "4 × 3 = ?",
        hint3: "2 × 2x = ?x.",
        explanation: "1) 3×5=15. 2) 4×3=12. 3) 2(2x)=4x, coefficient=4."
      }
    },
    {
      id: 'grade6-expressions-equations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$a(b + c) = ab + ac$ is the","options":["Distributive property","Commutative property","Associative property","Identity property"]},{"label":"Any number times 1 equals","options":["Itself","0","1","2"]}],
        correctAnswers: ["Distributive property","Itself"],
        hint1: "Distributing over addition.",
        hint2: "1 is the multiplicative identity.",
        explanation: "Distributive: a(b+c)=ab+ac. Identity: a×1=a."
      }
    },
    {
      id: 'grade6-expressions-equations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Expression | Apply |
|---|-----------|-------|
| 1 | $3(x + 5)$ | Distributive |
| 2 | $7 + 0$ | Identity |
| 3 | $2 \\times (5 \\times 3)$ | Associative |
    
    `
    },
    {
      id: 'grade6-expressions-equations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$5(2x + 3) = ?$",
                    "options": [
                              "$10x + 15$",
                              "$10x + 3$",
                              "$7x + 8$",
                              "$5x + 15$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Distribute: 5(2x) + 5(3) = 10x + 15."
          }
]
      }
    }
  ]
};
