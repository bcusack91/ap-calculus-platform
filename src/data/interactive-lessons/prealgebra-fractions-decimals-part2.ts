export const preAlgFractionsPart2Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Converting to Percents

**Part 2 of 7 — Converting to Percents**

### Decimal → Percent
Multiply by 100: $0.45 = 45\%$

### Fraction → Percent
Convert to decimal first, then multiply by 100: $\frac{3}{4} = 0.75 = 75\%$

### Percent → Decimal
Divide by 100: $60\% = 0.60$
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\frac{2}{5} = 0.4 = 40\%$ ✅

$85\% = 0.85$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$0.3$ as a percent?",
                    "options": [
                              "30%",
                              "3%",
                              "0.3%",
                              "300%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.3 × 100 = 30%."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p2-input',
      type: 'input-boxes' as const,
      content: `
**Convert** 🧮

1) 0.3 = ? % (number only)

2) 1/4 = ? % (number only)

3) 75% = ? (decimal)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["30","25","0.75"],
        hint1: "0.3 × 100.",
        hint2: "0.25 × 100.",
        hint3: "75 ÷ 100.",
        explanation: "1) 30. 2) 25. 3) 0.75."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To convert a decimal to a percent","options":["Multiply by 100","Divide by 100","Add 100","Subtract 100"]},{"label":"50% as a fraction is","options":["1/2","5/10","50/10","1/50"]}],
        correctAnswers: ["Multiply by 100","1/2"],
        hint1: "Move decimal point right 2.",
        hint2: "50/100 simplified.",
        explanation: "Decimal→%: ×100. 50% = 1/2."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Convert | Answer |
|---|---------|--------|
| 1 | 0.3 → % | 30% |
| 2 | 1/4 → % | 25% |
| 3 | 75% → decimal | 0.75 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{1}{4}$ as a percent?",
                    "options": [
                              "25%",
                              "14%",
                              "4%",
                              "75%"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1/4 = 0.25 = 25%."
          }
]
      }
    }
  ]
};
