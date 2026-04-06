export const g5DecimalsPart1Data = {
  topicSlug: "decimal-operations-grade5",
  sections: [
    {
      id: 'grade5-decimal-operations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Place Value to Thousandths

**Part 1 of 7 — Place Value to Thousandths**

Every digit has a place value. After the decimal point:
- **Tenths** (0.1) — first place
- **Hundredths** (0.01) — second place
- **Thousandths** (0.001) — third place

Example: $3.456$ → 3 ones, 4 tenths, 5 hundredths, 6 thousandths
    
    `
    },
    {
      id: 'grade5-decimal-operations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**What is the value of 7 in 0.372?**

7 is in the hundredths place → $7 \\times 0.01 = 0.07$ ✅
    
    `
    },
    {
      id: 'grade5-decimal-operations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "In 5.238, which digit is in the hundredths place?",
                    "options": [
                              "3",
                              "2",
                              "8",
                              "5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tenths=2, hundredths=3, thousandths=8."
          }
]
      }
    },
    {
      id: 'grade5-decimal-operations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Place Value** 🧮

1) In 4.829, the value of the digit 2 is?

2) In 0.561, the value of the digit 5 is?

3) In 7.043, the value of the digit 3 is?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.02","0.5","0.003"],
        hint1: "2 is in the hundredths place.",
        hint2: "5 is in the tenths place.",
        hint3: "3 is in the thousandths place.",
        explanation: "1) 2 hundredths = 0.02. 2) 5 tenths = 0.5. 3) 3 thousandths = 0.003."
      }
    },
    {
      id: 'grade5-decimal-operations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The third place after the decimal is called","options":["Thousandths","Hundredths","Tenths","Ten-thousandths"]},{"label":"0.009 is read as","options":["Nine thousandths","Nine hundredths","Nine tenths","Ninety thousandths"]}],
        correctAnswers: ["Thousandths","Nine thousandths"],
        hint1: "Count places: tenths, hundredths, …",
        hint2: "The 9 is in the thousandths place.",
        explanation: "Third decimal place = thousandths. 0.009 = nine thousandths."
      }
    },
    {
      id: 'grade5-decimal-operations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Number | Find the value of… |
|---|--------|--------------------|
| 1 | 4.829 | the 2 |
| 2 | 0.561 | the 5 |
| 3 | 7.043 | the 3 |
    
    `
    },
    {
      id: 'grade5-decimal-operations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "How many thousandths are in 0.045?",
                    "options": [
                              "45",
                              "4",
                              "5",
                              "450"
                    ],
                    "correctAnswer": 0,
                    "explanation": "0.045 = 45 thousandths (45/1000)."
          }
]
      }
    }
  ]
};
