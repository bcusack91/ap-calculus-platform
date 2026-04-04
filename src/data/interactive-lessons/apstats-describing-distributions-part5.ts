export const apStatsDistributionsPart5Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Normal Distribution

**Part 5 of 7 — Normal Distribution**

- Bell-shaped, symmetric curve
- Described by mean ($\mu$) and standard deviation ($\sigma$)
- **68-95-99.7 Rule**:
  - 68% within 1σ of μ
  - 95% within 2σ of μ
  - 99.7% within 3σ of μ
    
    `
    },
    {
      id: 'apstats-describing-distributions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**μ = 100, σ = 15. What range contains 68% of data?**

$100 \pm 15 = [85, 115]$ ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "95% of data falls within ____ standard deviations:",
                    "options": [
                              "2",
                              "1",
                              "3",
                              "0.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "95% → 2σ."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p5-input',
      type: 'input-boxes' as const,
      content: `
**68-95-99.7 Rule** 🧮

μ = 100, σ = 15:

1) 68% lower bound? (μ − σ)

2) 68% upper bound? (μ + σ)

3) 95% lower bound? (μ − 2σ)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["85","115","30"],
        hint1: "100 − 15.",
        hint2: "100 + 15.",
        hint3: "100 − 30.",
        explanation: "1) 85. 2) 115. 3) 70."
      }
    },
    {
      id: 'apstats-describing-distributions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A normal distribution is","options":["Symmetric and bell-shaped","Always skewed","Uniform","Bimodal"]},{"label":"99.7% falls within ____ standard deviations","options":["3","2","1","4"]}],
        correctAnswers: ["Symmetric and bell-shaped","3"],
        hint1: "The bell curve.",
        hint2: "Nearly all data.",
        explanation: "Normal = symmetric bell. 99.7% within 3σ."
      }
    },
    {
      id: 'apstats-describing-distributions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | μ | σ | 68% Range |
|---|---|---|----------|
| 1 | 100 | 15 | 85–115 |
| 2 | 50 | 10 | 40–60 |
| 3 | 0 | 1 | −1 to 1 |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "μ=50, σ=10. 95% range?",
                    "options": [
                              "30–70",
                              "40–60",
                              "20–80",
                              "50–60"
                    ],
                    "correctAnswer": 0,
                    "explanation": "50 ± 2(10) = 30 to 70."
          }
]
      }
    }
  ]
};
