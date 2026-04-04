export const apStatsHypothesisPart5Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 One-Sample t-Test

**Part 5 of 7 — One-Sample t-Test**

Conditions:
1. **Random** sample
2. **Independence** (n < 10% of population)
3. **Normal/Large sample** (n ≥ 30 or approximately normal)

$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}, \quad df = n - 1$
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**n = 36, x̄ = 52, s = 6, μ₀ = 50. Test at α = 0.05.**

$SE = 6/\sqrt{36} = 1$
$t = (52-50)/1 = 2$
$df = 35$. Since $|t| > 2$, p < 0.05 → **Reject** ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Degrees of freedom for n=36?",
                    "options": [
                              "35",
                              "36",
                              "34",
                              "37"
                    ],
                    "correctAnswer": 0,
                    "explanation": "df = n−1 = 35."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-input',
      type: 'input-boxes' as const,
      content: `
**t-Test** 🧮

n=36, x̄=52, s=6, μ₀=50:

1) SE = s/√n?

2) t = (x̄ − μ₀)/SE?

3) df?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","2","35"],
        hint1: "6/√36 = 6/6.",
        hint2: "(52−50)/1.",
        hint3: "n−1.",
        explanation: "1) 1. 2) 2. 3) 35."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A t-test is used instead of a z-test when","options":["σ is unknown (use s instead)","n is large","The data is normal","α is small"]},{"label":"The three conditions for a t-test are","options":["Random, Independent, Normal/Large","Mean, Median, Mode","H₀, Hₐ, p-value","Type I, Type II, Power"]}],
        correctAnswers: ["σ is unknown (use s instead)","Random, Independent, Normal/Large"],
        hint1: "Population σ unknown.",
        hint2: "R-I-N.",
        explanation: "t-test: σ unknown. Conditions: Random, Independent, Normal/Large."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | n | x̄ | s | μ₀ | t |
|---|---|---|---|---|---|
| 1 | 36 | 52 | 6 | 50 | 2 |
| 2 | 25 | 100 | 10 | 100 | 0 |
| 3 | 16 | 84 | 8 | 80 | 2 |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The condition n ≥ 30 relates to:",
                    "options": [
                              "Central Limit Theorem",
                              "The p-value",
                              "Type I error",
                              "The null"
                    ],
                    "correctAnswer": 0,
                    "explanation": "CLT ensures approximate normality."
          }
]
      }
    }
  ]
};
