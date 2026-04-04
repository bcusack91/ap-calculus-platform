export const alg2PolynomialsPart5Data = {
  topicSlug: "polynomial-operations-algebra2",
  sections: [
    {
      id: 'algebra2-polynomial-operations-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Remainder Theorem

**Part 5 of 7 — Remainder Theorem**

When dividing $p(x)$ by $(x - c)$, the remainder equals $p(c)$.

If $p(c) = 0$, then $(x - c)$ is a **factor** of $p(x)$.
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$p(x) = x^2 - 4x + 3$. Find $p(1)$.

$p(1) = 1 - 4 + 3 = 0$ → $(x-1)$ is a factor! ✅
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$p(x)=x^2+x-6$. $p(2)=?$",
                    "options": [
                              "0",
                              "−4",
                              "8",
                              "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4+2−6=0. So (x−2) is a factor."
          }
]
      }
    },
    {
      id: 'algebra2-polynomial-operations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Remainder Theorem** 🧮

1) $p(x) = x^2 - 4x + 3$. $p(1) = ?$

2) $p(x) = x^2 + x - 6$. $p(2) = ?$

3) $p(x) = x^2 + 1$. $p(1) = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","0","2"],
        hint1: "1 − 4 + 3.",
        hint2: "4 + 2 − 6.",
        hint3: "1 + 1.",
        explanation: "1) 0. 2) 0. 3) 2."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The remainder when dividing p(x) by (x−c) is","options":["p(c)","p(0)","c","x"]},{"label":"If the remainder is 0, (x−c) is a","options":["Factor","Root","Quotient","Constant"]}],
        correctAnswers: ["p(c)","Factor"],
        hint1: "Plug in c.",
        hint2: "Divides evenly.",
        explanation: "Remainder = p(c). If 0, (x−c) is a factor."
      }
    },
    {
      id: 'algebra2-polynomial-operations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | p(x) | c | p(c) |
|---|------|---|------|
| 1 | $x^2-4x+3$ | 1 | 0 |
| 2 | $x^2+x-6$ | 2 | 0 |
| 3 | $x^2+1$ | 1 | 2 |
    
    `
    },
    {
      id: 'algebra2-polynomial-operations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If $p(c) = 0$, then $(x-c)$ is:",
                    "options": [
                              "A factor of p(x)",
                              "The remainder",
                              "Not related",
                              "The quotient"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Zero remainder → factor."
          }
]
      }
    }
  ]
};
