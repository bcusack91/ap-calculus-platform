export const apStatsProbabilityPart7Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $P(A') = 1 - P(A)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- $P(A \cap B) = P(A) \cdot P(B|A)$
- Independent: $P(A \cap B) = P(A) \cdot P(B)$
- $P(A|B) = P(A \cap B) / P(B)$
    
    `
    },
    {
      id: 'apstats-probability-rules-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Complement: P(A)=0.8 → P(A')=0.2** ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A)=0.7. P(A')?",
                    "options": [
                              "0.3",
                              "0.7",
                              "1",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1−0.7=0.3."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) P(A)=0.7. P(A')?

2) P(A)=0.4, P(B)=0.3, independent. P(A∩B)?

3) P(A∩B)=0.2, P(B)=0.5. P(A|B)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.3","0.12","0.4"],
        hint1: "1−0.7.",
        hint2: "0.4×0.3.",
        hint3: "0.2/0.5.",
        explanation: "1) 0.3. 2) 0.12. 3) 0.4."
      }
    },
    {
      id: 'apstats-probability-rules-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The complement of P=0.9 is","options":["0.1","0.9","1","0"]},{"label":"\"And\" in probability usually means","options":["Intersection (multiply)","Union (add)","Complement","Conditional"]}],
        correctAnswers: ["0.1","Intersection (multiply)"],
        hint1: "1−0.9.",
        hint2: "Both events together.",
        explanation: "P'=0.1. \"And\" → intersection → multiplication rule."
      }
    },
    {
      id: 'apstats-probability-rules-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Complement | P(A)=0.7 |
| 2 | Multiplication | P(A)=0.4, P(B)=0.3, independent |
| 3 | Conditional | P(A∩B)=0.2, P(B)=0.5 |
    
    `
    },
    {
      id: 'apstats-probability-rules-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A)=0.4, P(B)=0.3, independent. P(A∩B)?",
                    "options": [
                              "0.12",
                              "0.7",
                              "0.1",
                              "0.43"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.4×0.3=0.12."
          }
]
      }
    }
  ]
};
