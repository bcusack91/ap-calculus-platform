export const apStatsHypothesisPart6Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Full hypothesis test procedure:
1. State hypotheses ($H_0$, $H_a$)
2. Check conditions
3. Calculate test statistic
4. Find p-value
5. Make decision and state conclusion in context
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Claim: μ > 80. Sample: n=25, x̄=84, s=10.**

1. $H_0: \mu=80$, $H_a: \mu>80$
2. Random ✓, Independent ✓, n=25 (check normality)
3. $t = (84-80)/(10/5) = 4/2 = 2$, df=24
4. p ≈ 0.028
5. p < 0.05 → Reject $H_0$. Evidence supports μ > 80. ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "SE when s=10, n=25?",
                    "options": [
                              "2",
                              "10",
                              "5",
                              "0.4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "10/√25 = 10/5 = 2."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-input',
      type: 'input-boxes' as const,
      content: `
**Full Test** 🧮

n=25, x̄=84, s=10, μ₀=80:

1) SE?

2) t?

3) df?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","2","24"],
        hint1: "10/√25.",
        hint2: "(84−80)/SE.",
        hint3: "n−1.",
        explanation: "1) 2. 2) 2. 3) 24."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The first step in a hypothesis test is to","options":["State hypotheses","Calculate t","Find p-value","Check conditions"]},{"label":"We never say \"accept H₀\" — instead we say","options":["Fail to reject H₀","Accept H₀","Prove H₀","Confirm H₀"]}],
        correctAnswers: ["State hypotheses","Fail to reject H₀"],
        hint1: "H₀ and Hₐ first.",
        hint2: "Language matters.",
        explanation: "Start with hypotheses. Say \"fail to reject,\" not \"accept.\""
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Step | Key Action |
|---|------|----------|
| 1 | Hypotheses | Write H₀ and Hₐ |
| 2 | Conditions | Random, Independent, Normal |
| 3 | Calculate | t = (x̄−μ₀)/(s/√n) |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The conclusion should be stated in:",
                    "options": [
                              "Context of the problem",
                              "Mathematical symbols only",
                              "Greek letters",
                              "Technical jargon"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Always relate back to the real-world context."
          }
]
      }
    }
  ]
};
