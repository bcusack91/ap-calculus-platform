export const g5DecimalsPart2Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Comparing Decimals

**Part 2 of 7 — Comparing Decimals**

Compare decimals place by place, left to right:
1. Line up decimal points
2. Compare digits in each place
3. First different digit determines the order

Example: $0.45$ vs $0.438$ → tenths same (4), hundredths: 5 > 3 → $0.45 > 0.438$
    
    `
    },
    {
      id: 'grade5-decimal-operations-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Order from least to greatest: 0.6, 0.58, 0.605**

Rewrite: $0.600,\; 0.580,\; 0.605$. Compare tenths (all 6), then hundredths: $0 < 0 ... $ wait — $0.580 < 0.600 < 0.605$

Answer: $0.58 < 0.6 < 0.605$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is greater: 0.32 or 0.308?",
                    "options": [
                              "0.32",
                              "0.308",
                              "They are equal",
                              "Cannot tell"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.320 vs 0.308: hundredths 2 > 0."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Compare Decimals** 🧮

Write <, >, or =:

1) 0.35 _____ 0.4

2) 2.71 _____ 2.709

3) 0.80 _____ 0.8
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["<",">","="],
        hint1: "0.35 vs 0.40 — tenths: 3 vs 4.",
        hint2: "2.710 vs 2.709 — thousandths: 0 vs 9… wait, hundredths first: 1 vs 0.",
        hint3: "Are trailing zeros significant?",
        explanation: "1) 0.35 < 0.40, so <. 2) 2.710 > 2.709, so >. 3) Equal."
      }
    },
    {
      id: 'grade5-decimal-operations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To compare decimals, first","options":["Line up decimal points","Add the numbers","Multiply both by 10","Count total digits"]},{"label":"Adding trailing zeros to a decimal","options":["Does not change its value","Makes it larger","Makes it smaller","Is not allowed"]}],
        correctAnswers: ["Line up decimal points","Does not change its value"],
        hint1: "Alignment is key.",
        hint2: "0.5 = 0.50 = 0.500.",
        explanation: "Line up decimals, then compare left to right. Trailing zeros keep the value the same."
      }
    },
    {
      id: 'grade5-decimal-operations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Task | Strategy |
|---|------|----------|
| 1 | Compare 0.7 and 0.70 | Trailing zeros |
| 2 | Order 3.5, 3.05, 3.55 | Place by place |
| 3 | Compare 0.099 and 0.1 | Add trailing zeros |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "True or false: 0.5 = 0.50 = 0.500",
                    "options": [
                              "True",
                              "False",
                              "Only 0.5 = 0.50",
                              "Only 0.50 = 0.500"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Trailing zeros do not change the value."
          }
]
      }
    }
  ]
};
