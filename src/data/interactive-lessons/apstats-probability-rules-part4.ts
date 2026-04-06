export const apStatsProbabilityPart4Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Conditional Probability

**Part 4 of 7 — Conditional Probability**

$P(A|B) = \\frac{P(A \cap B)}{P(B)}$

Read: "probability of A **given** B has occurred."

This restricts our sample space to only outcomes where B happened.
    
    `
    },
    {
      id: 'apstats-probability-rules-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**P(A∩B) = 0.12, P(B) = 0.4. P(A|B)?**

$P(A|B) = \\frac{0.12}{0.4} = 0.3$ ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A∩B)=0.15, P(B)=0.5. P(A|B)?",
                    "options": [
                              "0.3",
                              "0.65",
                              "0.075",
                              "0.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.15/0.5 = 0.3."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p4-input',
      type: 'input-boxes' as const,
      content: `
**Conditional Probability** 🧮

$P(A|B) = P(A \cap B) / P(B)$

1) P(A∩B)=0.12, P(B)=0.4. P(A|B)?

2) P(A∩B)=0.15, P(B)=0.5. P(A|B)?

3) P(A∩B)=0.06, P(B)=0.2. P(A|B)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.3","0.3","0.3"],
        hint1: "0.12/0.4.",
        hint2: "0.15/0.5.",
        hint3: "0.06/0.2.",
        explanation: "1) 0.3. 2) 0.3. 3) 0.3."
      }
    },
    {
      id: 'apstats-probability-rules-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"P(A|B) reads as \"probability of A\"","options":["Given B","And B","Or B","Without B"]},{"label":"The denominator in P(A|B) is","options":["P(B)","P(A)","P(A∩B)","P(A∪B)"]}],
        correctAnswers: ["Given B","P(B)"],
        hint1: "Conditional.",
        hint2: "The given event.",
        explanation: "P(A|B) = \"A given B.\" Denominator = P(B)."
      }
    },
    {
      id: 'apstats-probability-rules-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | P(A∩B) | P(B) | P(A given B) |
|---|--------|------|-------|
| 1 | 0.12 | 0.4 | 0.3 |
| 2 | 0.15 | 0.5 | 0.3 |
| 3 | 0.06 | 0.2 | 0.3 |
    
    `
    },
    {
      id: 'apstats-probability-rules-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A|B) restricts the sample space to:",
                    "options": [
                              "Events where B occurred",
                              "All events",
                              "Events where A occurred",
                              "The empty set"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Given B → only look at outcomes in B."
          }
]
      }
    }
  ]
};
