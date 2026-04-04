export const apStatsDistributionsPart6Data = {
  topicSlug: "describing-distributions-apstats",
  sections: [
    {
      id: 'apstats-describing-distributions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all concepts:
- Describe shape, center, spread
- Choose mean or median appropriately
- Apply the 68-95-99.7 rule
- Identify outliers
    
    `
    },
    {
      id: 'apstats-describing-distributions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Test scores: μ = 75, σ = 8. What % score above 91?**

$91 = 75 + 2(8) = \mu + 2\sigma$

Above 2σ: $(100\% - 95\%)/2 = 2.5\%$ ✅
    
    `
    },
    {
      id: 'apstats-describing-distributions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "μ=75, σ=8. % below 59 (=μ−2σ)?",
                    "options": [
                              "2.5%",
                              "5%",
                              "16%",
                              "50%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Below −2σ: (100−95)/2 = 2.5%."
          }
]
      }
    },
    {
      id: 'apstats-describing-distributions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Combined Practice** 🧮

1) Mean of 1, 2, 3, 4, 5?

2) Median of 1, 2, 3, 4, 5?

3) μ=75, σ=8. % above 91? (Answer as number, e.g. 2.5)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","3","2.5"],
        hint1: "15/5.",
        hint2: "Middle value.",
        hint3: "91 = μ + 2σ. Above that is (100−95)/2.",
        explanation: "1) 3. 2) 3. 3) 2.5%."
      }
    },
    {
      id: 'apstats-describing-distributions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For symmetric data, mean and median are","options":["Approximately equal","Very different","Always 0","Undefined"]},{"label":"The 68-95-99.7 rule applies to ____ distributions","options":["Normal (bell-shaped)","All","Skewed only","Uniform only"]}],
        correctAnswers: ["Approximately equal","Normal (bell-shaped)"],
        hint1: "Balanced.",
        hint2: "Bell curve only.",
        explanation: "Symmetric → mean ≈ median. Rule applies to normal distributions."
      }
    },
    {
      id: 'apstats-describing-distributions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | μ=75, σ=8. % below 59? | 2.5% |
| 2 | Data: 1,2,3,4,5. Mean? | 3 |
| 3 | Data: 1,2,3,4,5. Median? | 3 |
    
    `
    },
    {
      id: 'apstats-describing-distributions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Mean of 1, 2, 3, 4, 5?",
                    "options": [
                              "3",
                              "2.5",
                              "5",
                              "15"
                    ],
                    "correctAnswer": 0,
                    "explanation": "15/5 = 3."
          }
]
      }
    }
  ]
};
