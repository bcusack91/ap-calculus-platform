export const g4FractionsPart4Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p4-intro',
      type: 'text' as const,
      content: `
# 📐 Mixed Numbers

**Part 4 of 7 — Mixed Numbers**

A **mixed number** = whole number + fraction: $2\frac{3}{4}$

### Mixed → Improper
$2\frac{3}{4} = \frac{2 \times 4 + 3}{4} = \frac{11}{4}$

### Improper → Mixed
$\frac{11}{4} = 2\frac{3}{4}$ (11 ÷ 4 = 2 R 3)
    
    `
    },
    {
      id: 'grade4-fractions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Convert $3\frac{2}{5}$ to improper:** $3 \times 5 + 2 = 17 \Rightarrow \frac{17}{5}$ ✅

**Convert $\frac{13}{4}$ to mixed:** $13 ÷ 4 = 3$ R $1 \Rightarrow 3\frac{1}{4}$ ✅
    
    `
    },
    {
      id: 'grade4-fractions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is $1\\\\frac{3}{5}$ as an improper fraction?",
                    "options": [
                              "$\\\\frac{8}{5}$",
                              "$\\\\frac{13}{5}$",
                              "$\\\\frac{5}{3}$",
                              "$\\\\frac{3}{5}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$1 \\\\times 5 + 3 = 8$, so $\\\\frac{8}{5}$."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Numbers Practice** 🧮

1) Convert $2\frac{1}{2}$ to improper. What is the numerator?

2) Convert $\frac{7}{2}$ to a mixed number. What is the whole number part?

3) $1\frac{3}{4} + 2\frac{1}{4} = $ ? (whole number)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","3","4"],
        hint1: "Multiply: 2 × 2 + 1.",
        hint2: "Divide: 7 ÷ 2 = ? remainder ?",
        hint3: "Add whole parts (1+2) and fractions (3/4 + 1/4).",
        explanation: "1) 2(2)+1=5. 2) 7÷2=3 R 1. 3) 3 + 4/4 = 3+1 = 4."
      }
    },
    {
      id: 'grade4-fractions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$4\\\\frac{1}{3}$ as an improper fraction is","options":["$\\\\frac{13}{3}$","$\\\\frac{12}{3}$","$\\\\frac{4}{3}$","$\\\\frac{41}{3}$"]},{"label":"$\\\\frac{11}{5}$ as a mixed number is","options":["$2\\\\frac{1}{5}$","$1\\\\frac{6}{5}$","$2\\\\frac{2}{5}$","$3\\\\frac{1}{5}$"]}],
        correctAnswers: ["$\\\\frac{13}{3}$","$2\\\\frac{1}{5}$"],
        hint1: "4 × 3 + 1 = ?",
        hint2: "11 ÷ 5 = ? remainder ?",
        explanation: "4(3)+1=13. 11÷5=2 R 1."
      }
    },
    {
      id: 'grade4-fractions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | Convert $2\frac{1}{3}$ to improper | Mixed → Improper |
| 2 | Convert $\frac{15}{4}$ to mixed | Improper → Mixed |
| 3 | Add $1\frac{1}{4} + 2\frac{2}{4}$ | Mixed addition |
    
    `
    },
    {
      id: 'grade4-fractions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which mixed number equals $\\\\frac{17}{3}$?",
                    "options": [
                              "$5\\\\frac{2}{3}$",
                              "$4\\\\frac{2}{3}$",
                              "$5\\\\frac{1}{3}$",
                              "$6\\\\frac{2}{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$17 ÷ 3 = 5$ R $2$."
          }
]
      }
    }
  ]
};
