export const alg2ExponentialPart3Data = {
  topicSlug: "exponential-functions-algebra2",
  sections: [
    {
      id: 'algebra2-exponential-functions-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Compound Interest

**Part 3 of 7 — Compound Interest**

$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$

- $P$ = principal, $r$ = annual rate, $n$ = compounding frequency, $t$ = years

**Continuous compounding**: $A = Pe^{rt}$
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**\\$1000 at 6% compounded annually for 2 years.**

$A = 1000(1.06)^2 = 1000(1.1236) = 1123.6$ → **\\$1,123.60** ✅
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$500 at 10% compounded annually for 1 year:",
                    "options": [
                              "$550",
                              "$510",
                              "$600",
                              "$5000"
                    ],
                    "correctAnswer": 0,
                    "explanation": "500(1.10) = 550."
          }
]
      }
    },
    {
      id: 'algebra2-exponential-functions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Compound Interest** 🧮

1) $500 at 10%, 1 year, annual. A = ?

2) $1000 at 5%, 2 years, annual. A = ?

3) $1000 at 6%, 1 year, annual. A = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["550","1102.5","1060"],
        hint1: "$500(1.10)^{1}$.",
        hint2: "$1000(1.05)^{2}$.",
        hint3: "$1000(1.06)^{1}$.",
        explanation: "1) 550. 2) 1102.5. 3) 1060."
      }
    },
    {
      id: 'algebra2-exponential-functions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Compound interest means interest is earned on","options":["Principal plus previously earned interest","Principal only","Interest only","Nothing"]},{"label":"More frequent compounding gives","options":["Slightly more money","Less money","The same amount","Much less money"]}],
        correctAnswers: ["Principal plus previously earned interest","Slightly more money"],
        hint1: "Interest on interest.",
        hint2: "More compounding = more growth.",
        explanation: "Compound: interest on interest. More compounding → more return."
      }
    },
    {
      id: 'algebra2-exponential-functions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | P | r | n | t | A |
|---|---|---|---|---|---|
| 1 | \\$1000 | 5% | 1 | 2 | \\$1102.50 |
| 2 | \\$500 | 10% | 1 | 1 | \\$550 |
| 3 | \\$2000 | 4% | 1 | 3 | \\$2249.73 |
    
    `
    },
    {
      id: 'algebra2-exponential-functions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "In $A = P(1+r/n)^{nt}$, $n$ represents:",
                    "options": [
                              "Number of times compounded per year",
                              "Principal",
                              "Years",
                              "Rate"
                    ],
                    "correctAnswer": 0,
                    "explanation": "n = compounding frequency."
          }
]
      }
    }
  ]
};
