export const apStatsProbabilityPart3Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Multiplication Rule

**Part 3 of 7 — Multiplication Rule**

$P(A \cap B) = P(A) \times P(B|A)$

For **independent** events:
$P(A \cap B) = P(A) \times P(B)$
    
    `
    },
    {
      id: 'apstats-probability-rules-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Two coin flips. P(HH)?**

Independent: $P(H) \times P(H) = 0.5 \times 0.5 = 0.25$ ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A)=0.3, P(B)=0.4, independent. P(A∩B)?",
                    "options": [
                              "0.12",
                              "0.7",
                              "0.1",
                              "0.34"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.3×0.4=0.12."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p3-input',
      type: 'input-boxes' as const,
      content: `
**Multiplication Rule** 🧮

For independent events: P(A∩B) = P(A)×P(B)

1) P(A)=0.5, P(B)=0.5?

2) P(A)=0.3, P(B)=0.4?

3) P(A)=0.2, P(B)=0.5?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.25","0.12","0.1"],
        hint1: "0.5×0.5.",
        hint2: "0.3×0.4.",
        hint3: "0.2×0.5.",
        explanation: "1) 0.25. 2) 0.12. 3) 0.10."
      }
    },
    {
      id: 'apstats-probability-rules-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Independent events have ____ effect on each other","options":["No","A large","A small","A negative"]},{"label":"Drawing cards without replacement is","options":["Dependent","Independent","Impossible","Mutually exclusive"]}],
        correctAnswers: ["No","Dependent"],
        hint1: "One does not affect the other.",
        hint2: "Deck changes after each draw.",
        explanation: "Independent: no effect. Without replacement: dependent."
      }
    },
    {
      id: 'apstats-probability-rules-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | P(A) | P(B) | P(A∩B) |
|---|------|------|--------|
| 1 | 0.5 | 0.5 | 0.25 |
| 2 | 0.3 | 0.4 | 0.12 |
| 3 | 0.2 | 0.5 | 0.10 |
    
    `
    },
    {
      id: 'apstats-probability-rules-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The multiplication rule finds P(A ____ B):",
                    "options": [
                              "and",
                              "or",
                              "given",
                              "not"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Intersection = both."
          }
]
      }
    }
  ]
};
