export const apStatsHypothesisPart2Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Test Statistics

**Part 2 of 7 — Test Statistics**

A **test statistic** measures how far the sample result is from the null value, in standard error units.

$t = \\frac{\\bar{x} - \mu_0}{s / \sqrt{n}}$

Larger $|t|$ → stronger evidence against $H_0$.
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$\\bar{x} = 82$, $\mu_0 = 75$, $s = 14$, $n = 49$.**

$SE = \\frac{14}{\sqrt{49}} = \\frac{14}{7} = 2$

$t = \\frac{82 - 75}{2} = 3.5$ ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "SE = s/√n. If s=14, n=49, SE = ?",
                    "options": [
                              "2",
                              "7",
                              "14",
                              "0.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "14/√49 = 14/7 = 2."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-input',
      type: 'input-boxes' as const,
      content: `
**Test Statistics** 🧮

1) s=14, n=49. SE?

2) x̄=82, μ₀=75, SE=2. t=?

3) x̄=50, μ₀=50, SE=2. t=?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","3.5","0"],
        hint1: "14/√49 = 14/7.",
        hint2: "(82−75)/2.",
        hint3: "(50−50)/2.",
        explanation: "1) 2. 2) 3.5. 3) 0."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A large |t| value provides","options":["Strong evidence against H₀","Weak evidence","No evidence","Proof of H₀"]},{"label":"Standard error measures the variability of","options":["The sample mean","Individual data points","The population","The test statistic"]}],
        correctAnswers: ["Strong evidence against H₀","The sample mean"],
        hint1: "Far from null.",
        hint2: "SE = s/√n.",
        explanation: "Large |t| → strong evidence. SE = variability of x̄."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | $\\bar{x}$ | $\mu_0$ | s | n | SE | t |
|---|------|------|---|---|----|-|
| 1 | 82 | 75 | 14 | 49 | 2 | 3.5 |
| 2 | 50 | 50 | 10 | 25 | 2 | 0 |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If x̄ = μ₀, the test statistic t = ?",
                    "options": [
                              "0",
                              "1",
                              "−1",
                              "Undefined"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(μ₀ − μ₀)/SE = 0/SE = 0."
          }
]
      }
    }
  ]
};
