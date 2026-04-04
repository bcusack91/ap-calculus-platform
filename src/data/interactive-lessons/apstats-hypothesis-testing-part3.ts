export const apStatsHypothesisPart3Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 P-Values

**Part 3 of 7 — P-Values**

The **p-value** is the probability of getting a result as extreme (or more) than the observed, assuming $H_0$ is true.

- Small p-value → strong evidence against $H_0$
- If $p < \alpha$ → **reject** $H_0$
- Common $\alpha = 0.05$
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**p-value = 0.03, α = 0.05. Decision?**

$0.03 < 0.05$ → **Reject $H_0$**. The result is statistically significant. ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "p = 0.03, α = 0.05. Decision?",
                    "options": [
                              "Reject H₀",
                              "Fail to reject H₀",
                              "Accept H₀",
                              "Need more data"
                    ],
                    "correctAnswer": 0,
                    "explanation": "p < α → reject."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-input',
      type: 'input-boxes' as const,
      content: `
**P-Values** 🧮

1) The most common significance level α?

2) Which is more significant: p=0.03 or p=0.08?

3) Which p-value leads to "fail to reject" at α=0.05?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.05","0.03","0.08"],
        hint1: "Standard threshold.",
        hint2: "Smaller p is stronger.",
        hint3: "p > α → fail to reject.",
        explanation: "1) 0.05. 2) 0.03 (smaller). 3) 0.08 > 0.05."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"If p < α, we","options":["Reject H₀","Accept H₀","Fail to reject H₀","Increase α"]},{"label":"A small p-value means the result is","options":["Statistically significant","Insignificant","Random","Normal"]}],
        correctAnswers: ["Reject H₀","Statistically significant"],
        hint1: "Evidence is strong enough.",
        hint2: "Unlikely under H₀.",
        explanation: "p < α → reject. Small p = statistically significant."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | p-value | α | Decision |
|---|---------|---|----------|
| 1 | 0.03 | 0.05 | Reject H₀ |
| 2 | 0.08 | 0.05 | Fail to reject H₀ |
| 3 | 0.01 | 0.01 | Borderline |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A p-value of 0.001 provides:",
                    "options": [
                              "Very strong evidence against H₀",
                              "Weak evidence",
                              "No evidence",
                              "Proof of H₀"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Very small p → very strong evidence."
          }
]
      }
    }
  ]
};
