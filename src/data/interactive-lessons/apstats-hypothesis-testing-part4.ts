export const apStatsHypothesisPart4Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Type I & Type II Errors

**Part 4 of 7 — Type I & Type II Errors**

| | H₀ True | H₀ False |
|---|---------|----------|
| Reject H₀ | **Type I** (α) | Correct |
| Fail to reject | Correct | **Type II** (β) |

- **Type I**: false positive (reject true H₀)
- **Type II**: false negative (fail to reject false H₀)
- **Power** = 1 − β (probability of correctly rejecting false H₀)
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A drug has no effect, but the test says it works → Type I error** ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Rejecting a true H₀ is:",
                    "options": [
                              "Type I error",
                              "Type II error",
                              "Correct decision",
                              "Power"
                    ],
                    "correctAnswer": 0,
                    "explanation": "False positive."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-input',
      type: 'input-boxes' as const,
      content: `
**Errors** 🧮

1) Rejecting true H₀ → Type ___ error?

2) Failing to reject false H₀ → Type ___ error?

3) If α = 0.05, probability of Type I error?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","2","0.05"],
        hint1: "False positive.",
        hint2: "False negative.",
        hint3: "α directly.",
        explanation: "1) Type 1. 2) Type 2. 3) 0.05."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Power equals","options":["1 − β","α","β","1 − α"]},{"label":"Increasing sample size generally ____ power","options":["Increases","Decreases","Does not affect","Eliminates"]}],
        correctAnswers: ["1 − β","Increases"],
        hint1: "Complement of Type II.",
        hint2: "Larger n → more precise.",
        explanation: "Power = 1−β. Larger n → more power."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Error Type |
|---|---------|----------|
| 1 | Convict innocent person | Type I |
| 2 | Acquit guilty person | Type II |
| 3 | True alarm detected | Correct decision |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The probability of a Type I error is:",
                    "options": [
                              "α",
                              "β",
                              "1−α",
                              "1−β"
                    ],
                    "correctAnswer": 0,
                    "explanation": "α = significance level = P(Type I)."
          }
]
      }
    }
  ]
};
