export const apStatsProbabilityPart5Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Independence

**Part 5 of 7 — Independence**

Events A and B are **independent** if:
$P(A|B) = P(A) \quad \\text{or equivalently} \quad P(A \cap B) = P(A) \cdot P(B)$

If knowing B changes the probability of A, the events are **dependent**.
    
    `
    },
    {
      id: 'apstats-probability-rules-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**P(A) = 0.4, P(B) = 0.5, P(A∩B) = 0.2. Independent?**

$P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2 = P(A∩B)$

**Yes, independent!** ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A)=0.3, P(B)=0.6, P(A∩B)=0.1. Independent?",
                    "options": [
                              "No, because 0.3×0.6≠0.1",
                              "Yes",
                              "Cannot tell",
                              "Always independent"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.3×0.6=0.18≠0.1."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p5-input',
      type: 'input-boxes' as const,
      content: `
**Test Independence** 🧮

Compute P(A)×P(B):

1) P(A)=0.4, P(B)=0.5?

2) P(A)=0.3, P(B)=0.6?

3) P(A)=0.5, P(B)=0.5?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.2","0.18","0.25"],
        hint1: "0.4×0.5.",
        hint2: "0.3×0.6.",
        hint3: "0.5×0.5.",
        explanation: "1) 0.2. 2) 0.18. 3) 0.25. Compare with P(A∩B) to check."
      }
    },
    {
      id: 'apstats-probability-rules-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Independent means one event ____ the other","options":["Does not affect","Always causes","Prevents","Guarantees"]},{"label":"Mutually exclusive events are ____ independent","options":["Never","Always","Sometimes","Definitely"]}],
        correctAnswers: ["Does not affect","Never"],
        hint1: "No influence.",
        hint2: "If ME and both have P>0, they are dependent.",
        explanation: "Independent: no effect. ME events (P>0) cannot be independent."
      }
    },
    {
      id: 'apstats-probability-rules-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | P(A) | P(B) | P(A∩B) | Independent? |
|---|------|------|--------|---------|
| 1 | 0.4 | 0.5 | 0.2 | Yes |
| 2 | 0.3 | 0.6 | 0.1 | No |
| 3 | 0.5 | 0.5 | 0.25 | Yes |
    
    `
    },
    {
      id: 'apstats-probability-rules-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If independent, P(A|B) = ?",
                    "options": [
                              "P(A)",
                              "P(B)",
                              "P(A∩B)",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Independence: knowing B does not change P(A)."
          }
]
      }
    }
  ]
};
