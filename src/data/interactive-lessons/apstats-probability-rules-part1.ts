export const apStatsProbabilityPart1Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Basic Probability

**Part 1 of 7 — Basic Probability**

$P(A) = \frac{\text{favorable outcomes}}{\text{total outcomes}}$

- $0 \leq P(A) \leq 1$
- $P(\text{certain}) = 1$, $P(\text{impossible}) = 0$
- $P(A') = 1 - P(A)$ (complement)
    
    `
    },
    {
      id: 'apstats-probability-rules-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Roll a die. P(even)?**

Favorable: {2, 4, 6} = 3
Total: 6
$P = 3/6 = 0.5$ ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(6 on a fair die)?",
                    "options": [
                              "1/6",
                              "1/3",
                              "1/2",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1 favorable out of 6."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p1-input',
      type: 'input-boxes' as const,
      content: `
**Basic Probability** 🧮

1) P(heads) on a fair coin?

2) Total outcomes for a fair die?

3) P(even) on a fair die?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.5","6","0.5"],
        hint1: "1/2.",
        hint2: "How many sides?",
        hint3: "3 even numbers out of 6.",
        explanation: "1) 0.5. 2) 6. 3) 3/6=0.5."
      }
    },
    {
      id: 'apstats-probability-rules-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Probability ranges from","options":["0 to 1","−1 to 1","0 to 100","−∞ to ∞"]},{"label":"P(A') is called the","options":["Complement","Union","Intersection","Conditional"]}],
        correctAnswers: ["0 to 1","Complement"],
        hint1: "Always non-negative and ≤ 1.",
        hint2: "Everything NOT in A.",
        explanation: "P ranges 0–1. P(A') = complement."
      }
    },
    {
      id: 'apstats-probability-rules-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Event | P |
|---|-------|---|
| 1 | P(heads on fair coin) | 0.5 |
| 2 | P(6 on die) | 1/6 |
| 3 | P(not 6) | 5/6 |
    
    `
    },
    {
      id: 'apstats-probability-rules-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A) + P(A') = ?",
                    "options": [
                              "1",
                              "0",
                              "0.5",
                              "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Event and complement sum to 1."
          }
]
      }
    }
  ]
};
