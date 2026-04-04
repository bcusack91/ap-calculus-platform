export const apStatsHypothesisPart1Data = {
  topicSlug: "hypothesis-testing-apstats",
  sections: [
    {
      id: 'apstats-hypothesis-testing-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Null & Alternative Hypotheses

**Part 1 of 7 — Null & Alternative Hypotheses**

- **Null hypothesis** ($H_0$): no effect / no difference (status quo)
- **Alternative hypothesis** ($H_a$): there IS an effect / difference

We test whether data provides enough evidence to **reject** $H_0$.

- Two-tailed: $H_a: \mu \neq \mu_0$
- Left-tailed: $H_a: \mu < \mu_0$
- Right-tailed: $H_a: \mu > \mu_0$
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Claim: average score > 75. Set up hypotheses.**

$H_0: \mu = 75$ (no difference from 75)
$H_a: \mu > 75$ (right-tailed test) ✅
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "H₀ represents:",
                    "options": [
                              "No effect (status quo)",
                              "The research claim",
                              "The alternative",
                              "The test statistic"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Null = nothing is happening."
          }
]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-input',
      type: 'input-boxes' as const,
      content: `
**Hypothesis Setup** 🧮

What is the null value (μ₀)?

1) Claim: μ > 75. H₀: μ = ?

2) Claim: μ < 50. H₀: μ = ?

3) Claim: μ ≠ 100. H₀: μ = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["75","50","100"],
        hint1: "The value being tested.",
        hint2: "Boundary value.",
        hint3: "Equal to the claimed value.",
        explanation: "1) 75. 2) 50. 3) 100. H₀ always uses = sign."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The null hypothesis always uses the ____ sign","options":["= (equals)","> (greater than)","< (less than)","≠ (not equal)"]},{"label":"We hope to ____ the null hypothesis","options":["Reject","Accept","Prove","Ignore"]}],
        correctAnswers: ["= (equals)","Reject"],
        hint1: "H₀: μ = value.",
        hint2: "Evidence against it.",
        explanation: "H₀ uses =. We seek to reject H₀."
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Claim | $H_a$ |
|---|-------|-------|
| 1 | μ > 75 | Right-tailed |
| 2 | μ < 50 | Left-tailed |
| 3 | μ ≠ 100 | Two-tailed |
    
    `
    },
    {
      id: 'apstats-hypothesis-testing-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Hₐ: μ > 75 is a:",
                    "options": [
                              "Right-tailed test",
                              "Left-tailed test",
                              "Two-tailed test",
                              "Null hypothesis"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Greater than → right tail."
          }
]
      }
    }
  ]
};
