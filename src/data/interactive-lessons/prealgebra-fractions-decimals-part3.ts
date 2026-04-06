export const preAlgFractionsPart3Data = {
  topicSlug: "fractions-decimals-percents-prealgebra",
  sections: [
    {
      id: 'prealgebra-fractions-decimals-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Comparing Values

**Part 3 of 7 — Comparing Values**

To compare fractions, decimals, and percents: **convert to the same form**.

Easiest: convert everything to decimals.

$\\frac{3}{8}$ vs $0.4$: $3÷8 = 0.375 < 0.4$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Order from least to greatest: $\\frac{1}{3}$, 0.3, 35%**

$\\frac{1}{3} \approx 0.333$, $0.3$, $35\% = 0.35$

Order: $0.3 < 0.333 < 0.35$ ✅
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is smallest: 0.5, 3/8, 45%?",
                    "options": [
                              "3/8",
                              "0.5",
                              "45%",
                              "All equal"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3/8=0.375, 45%=0.45, 0.5. Smallest is 0.375."
          }
]
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p3-input',
      type: 'input-boxes' as const,
      content: `
**Convert to Decimals to Compare** 🧮

1) $\\frac{3}{8} = ?$

2) $45\% = ?$

3) $\\frac{3}{4} = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.375","0.45","0.75"],
        hint1: "3 ÷ 8.",
        hint2: "45 ÷ 100.",
        hint3: "3 ÷ 4.",
        explanation: "1) 0.375. 2) 0.45. 3) 0.75."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The best way to compare fractions and decimals is to","options":["Convert to the same form","Leave them as is","Guess","Multiply them together"]},{"label":"Which is greater: 2/5 or 0.35?","options":["2/5","0.35","They are equal","Cannot compare"]}],
        correctAnswers: ["Convert to the same form","2/5"],
        hint1: "Common ground.",
        hint2: "2/5 = 0.4 > 0.35.",
        explanation: "Convert to same form. 2/5=0.4 > 0.35."
      }
    },
    {
      id: 'prealgebra-fractions-decimals-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Values | Smallest |
|---|--------|----------|
| 1 | 0.5, 3/8, 45% | 3/8 |
| 2 | 1/4, 0.3, 20% | 20% |
| 3 | 0.7, 3/4, 72% | 0.7 |
    
    `
    },
    {
      id: 'prealgebra-fractions-decimals-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "To compare fractions and decimals, convert to:",
                    "options": [
                              "The same form",
                              "Different forms",
                              "Whole numbers",
                              "Percents only"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same form allows direct comparison."
          }
]
      }
    }
  ]
};
