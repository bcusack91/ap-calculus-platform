export const apStatsProbabilityPart6Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all probability rules:
- Choose addition or multiplication rule
- Check independence vs dependence
- Apply conditional probability
- Use complements
    
    `
    },
    {
      id: 'apstats-probability-rules-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**P(rain) = 0.3. P(no rain on 2 consecutive days)?**

Independent days:
$P(\text{no rain}) = 1 - 0.3 = 0.7$
$P(\text{both dry}) = 0.7 \times 0.7 = 0.49$ ✅
    
    `
    },
    {
      id: 'apstats-probability-rules-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "P(rain)=0.3. P(no rain)?",
                    "options": [
                              "0.7",
                              "0.3",
                              "1",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1−0.3=0.7."
          }
]
      }
    },
    {
      id: 'apstats-probability-rules-p6-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

P(rain each day) = 0.3, days independent:

1) P(dry on one day)?

2) P(dry on BOTH of 2 days)?

3) P(rain on at least one of 2 days)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.7","0.49","0.51"],
        hint1: "1−0.3.",
        hint2: "0.7×0.7.",
        hint3: "1−P(both dry).",
        explanation: "1) 0.7. 2) 0.49. 3) 1−0.49=0.51."
      }
    },
    {
      id: 'apstats-probability-rules-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"\"At least one\" problems use the ____ rule","options":["Complement","Addition","Multiplication","Conditional"]},{"label":"P(A or B) uses the ____ rule","options":["Addition","Multiplication","Complement","Bayes"]}],
        correctAnswers: ["Complement","Addition"],
        hint1: "1 − P(none).",
        hint2: "A ∪ B.",
        explanation: "\"At least one\" → complement. \"Or\" → addition rule."
      }
    },
    {
      id: 'apstats-probability-rules-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Rule |
|---|---------|------|
| 1 | P(A or B) | Addition |
| 2 | P(A and B) | Multiplication |
| 3 | P(not A) | Complement |
    
    `
    },
    {
      id: 'apstats-probability-rules-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "P(at least one) is easiest found with:",
                    "options": [
                              "1 − P(none)",
                              "P(A)+P(B)",
                              "P(A)×P(B)",
                              "P(A|B)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Complement: 1 − P(none)."
          }
]
      }
    }
  ]
};
