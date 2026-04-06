export const apStatsHypothesisPart7Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- $H_0$: null (status quo); $H_a$: alternative
- $t = (\\bar{x} - \mu_0)/(s/\sqrt{n})$, $df = n-1$
- p < α → reject; p ≥ α → fail to reject
- Type I: reject true $H_0$; Type II: fail to reject false $H_0$
- Power = $1 - \\beta$
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**p = 0.02, α = 0.05 → Reject H₀** ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "p=0.04, α=0.05. Decision?",
                    "options": [
                              "Reject H₀",
                              "Fail to reject",
                              "Accept H₀",
                              "Insufficient data"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.04 < 0.05 → reject."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) df when n=30?

2) SE when s=12, n=36?

3) Most common significance level?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["29","2","0.05"],
        hint1: "n−1.",
        hint2: "12/√36.",
        hint3: "Standard α.",
        explanation: "1) 29. 2) 2. 3) 0.05."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Statistical significance means","options":["p < α","p > α","t = 0","The result is important"]},{"label":"Increasing α makes it ____ to reject H₀","options":["Easier","Harder","Impossible","No effect"]}],
        correctAnswers: ["p < α","Easier"],
        hint1: "Below threshold.",
        hint2: "Wider rejection region.",
        explanation: "Significant: p<α. Larger α → easier to reject."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | p-value | p=0.04, α=0.05 |
| 2 | df | n=30 |
| 3 | SE | s=12, n=36 |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "df for n=30?",
                    "options": [
                              "29",
                              "30",
                              "31",
                              "28"
                    ],
                    "correctAnswer": 0,
                    "explanation": "n−1 = 29."
          }
]
      }
    }
  ]
};
