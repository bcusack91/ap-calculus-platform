export const apStatsProbabilityPart2Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Addition Rule

**Part 2 of 7 — Addition Rule**

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

For **mutually exclusive** events ($A \cap B = \emptyset$):
$P(A \cup B) = P(A) + P(B)$
    
    `
    },
    {
      id: 'apstats-probability-rules-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. P(A∪B)?**

$P(A \cup B) = 0.4 + 0.3 - 0.1 = 0.6$ ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(A)=0.5, P(B)=0.2, mutually exclusive. P(A∪B)?",
                    "options": [
                              "0.7",
                              "0.1",
                              "1.0",
                              "0.3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "ME: P(A∪B) = 0.5+0.2 = 0.7."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p2-input',
      type: 'input-boxes' as const,
      content: `
**Addition Rule** 🧮

P(A∪B) = P(A)+P(B)−P(A∩B)

1) P(A)=0.4, P(B)=0.3, P(A∩B)=0.1?

2) P(A)=0.5, P(B)=0.2, mutually exclusive?

3) P(A)=0.6, P(B)=0.4, P(A∩B)=0.2?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.6","0.7","0.8"],
        hint1: "0.4+0.3−0.1.",
        hint2: "ME → P(A∩B)=0.",
        hint3: "0.6+0.4−0.2.",
        explanation: "1) 0.6. 2) 0.7. 3) 0.8."
      }
    },
    {
      id: 'apstats-probability-rules-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Mutually exclusive means","options":["Cannot both occur","Always both occur","Are identical","Are independent"]},{"label":"The addition rule finds P(A ____ B)","options":["or (union)","and (intersection)","given","not"]}],
        correctAnswers: ["Cannot both occur","or (union)"],
        hint1: "No overlap.",
        hint2: "A or B.",
        explanation: "ME: cannot both happen. Addition rule: P(A or B)."
      }
    },
    {
      id: 'apstats-probability-rules-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | P(A) | P(B) | P(A∩B) | P(A∪B) |
|---|------|------|--------|--------|
| 1 | 0.4 | 0.3 | 0.1 | 0.6 |
| 2 | 0.5 | 0.2 | 0 | 0.7 |
| 3 | 0.6 | 0.4 | 0.2 | 0.8 |
    
    `
    },
    {
      id: 'apstats-probability-rules-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "We subtract P(A∩B) to avoid:",
                    "options": [
                              "Double counting",
                              "Negative probability",
                              "Zero probability",
                              "Large numbers"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Overlap is counted in both P(A) and P(B)."
          }
]
      }
    }
  ]
};
