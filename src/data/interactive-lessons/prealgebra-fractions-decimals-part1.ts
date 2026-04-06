export const preAlgFractionsPart1Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Converting Fractions & Decimals

**Part 1 of 7 — Converting Fractions & Decimals**

### Fraction → Decimal
Divide numerator by denominator: $\\frac{3}{4} = 3 \div 4 = 0.75$

### Decimal → Fraction
Use place value: $0.6 = \\frac{6}{10} = \\frac{3}{5}$
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{7}{8} = 7 \div 8 = 0.875$ ✅

$0.35 = \\frac{35}{100} = \\frac{7}{20}$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{3}{4}$ as a decimal?",
                    "options": [
                              "0.75",
                              "0.34",
                              "0.43",
                              "7.5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3 ÷ 4 = 0.75."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p1-input',
      type: 'input-boxes' as const,
      content: `
**Convert to Decimals** 🧮

1) $\\frac{1}{4} = ?$

2) $\\frac{3}{5} = ?$

3) $\\frac{7}{8} = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.25","0.6","0.875"],
        hint1: "1 ÷ 4.",
        hint2: "3 ÷ 5.",
        hint3: "7 ÷ 8.",
        explanation: "1) 0.25. 2) 0.6. 3) 0.875."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To convert a fraction to a decimal","options":["Divide numerator by denominator","Multiply top and bottom","Add them together","Flip the fraction"]},{"label":"0.5 as a fraction is","options":["1/2","5/10","1/5","5/100"]}],
        correctAnswers: ["Divide numerator by denominator","1/2"],
        hint1: "Numerator ÷ denominator.",
        hint2: "5/10 simplified.",
        explanation: "Fraction→decimal: divide. 0.5 = 1/2."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Conversion | Answer |
|---|-----------|--------|
| 1 | 1/4 → decimal | 0.25 |
| 2 | 3/5 → decimal | 0.6 |
| 3 | 0.75 → fraction | 3/4 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$0.6$ as a fraction in lowest terms?",
                    "options": [
                              "3/5",
                              "6/10",
                              "6/100",
                              "1/6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6/10 = 3/5."
          }
]
      }
    }
  ]
};
