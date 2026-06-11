export const preAlgFractionsPart7Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Conversion Cheat Sheet
| From | To | Method |
|------|-----|--------|
| Fraction → Decimal | Divide | ÷ |
| Decimal → Percent | × 100 | Move decimal right 2 |
| Percent → Decimal | ÷ 100 | Move decimal left 2 |
| Fraction → Percent | Convert to decimal first | Then × 100 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{5}{8} = 0.625 = 62.5\\%$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{2}{5}$ as a decimal?",
                    "options": [
                              "0.4",
                              "0.25",
                              "2.5",
                              "0.2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2 ÷ 5 = 0.4."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $\\frac{2}{5}$ as a decimal?

2) 0.85 as a percent? (number only)

3) 40% of 200?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.4","85","80"],
        hint1: "2 ÷ 5.",
        hint2: "0.85 × 100.",
        hint3: "0.40 × 200.",
        explanation: "1) 0.4. 2) 85. 3) 80."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Fraction to decimal: ___","options":["Divide numerator by denominator","Multiply by 100","Add them","Flip the fraction"]},{"label":"100% equals","options":["1 whole","100 pieces","10 tenths","Nothing"]}],
        correctAnswers: ["Divide numerator by denominator","1 whole"],
        hint1: "Top ÷ bottom.",
        hint2: "100% = 1.00.",
        explanation: "Fraction→decimal: divide. 100% = 1 whole."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Fraction→Decimal | 2/5 |
| 2 | Decimal→Percent | 0.85 |
| 3 | Percent of | 40% of 200 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "40% of 200?",
                    "options": [
                              "80",
                              "40",
                              "200",
                              "8"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.40 × 200 = 80."
          }
]
      }
    }
  ]
};
