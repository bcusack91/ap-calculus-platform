export const g6RatiosPart1Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Understanding Ratios

**Part 1 of 7 — Understanding Ratios**

A **ratio** compares two quantities.

Three ways to write a ratio:
- $3$ to $5$
- $3 : 5$
- $\\frac{3}{5}$

Order matters! "3 cats to 5 dogs" ≠ "5 cats to 3 dogs"
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A class has 12 boys and 18 girls. Ratio of boys to girls?**

$12 : 18 = 2 : 3$ (simplify by dividing both by 6) ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Ratio of 8 red to 12 blue marbles, simplified:",
                    "options": [
                              "2:3",
                              "8:12",
                              "3:2",
                              "4:6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "GCF=4. 8÷4=2, 12÷4=3."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Write Ratios** 🧮

1) 8 cats to 12 dogs simplifies to ?: 3. First number?

2) 15 wins to 5 losses simplifies to ?: 1. First number?

3) 4 adults to 20 children simplifies to ?: 5. First number?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","3","1"],
        hint1: "GCF of 8 and 12 is 4.",
        hint2: "Divide both by 5.",
        hint3: "Divide both by 4.",
        explanation: "1) 8÷4=2. 2) 15÷5=3. 3) 4÷4=1."
      }
    },
    {
      id: 'grade6-ratios-proportions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A ratio compares","options":["Two quantities","One quantity to itself","Three quantities","Units of measurement"]},{"label":"The ratio 10:15 simplified is","options":["2:3","3:2","10:15","5:5"]}],
        correctAnswers: ["Two quantities","2:3"],
        hint1: "Ratios relate two things.",
        hint2: "GCF of 10 and 15 is 5.",
        explanation: "Ratios compare two quantities. 10:15 = 2:3."
      }
    },
    {
      id: 'grade6-ratios-proportions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Situation | Ratio |
|---|----------|-------|
| 1 | 8 red, 12 blue | $2:3$ |
| 2 | 15 wins, 5 losses | $3:1$ |
| 3 | 4 adults, 20 children | $1:5$ |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Ratio 15:5 simplifies to:",
                    "options": [
                              "3:1",
                              "5:1",
                              "1:3",
                              "15:5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Divide both by 5: 3:1."
          }
]
      }
    }
  ]
};
