export const g4FractionsPart5Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p5-intro',
      type: 'text' as const,
      content: `
# 📐 Fractions on Number Lines

**Part 5 of 7 — Fractions on Number Lines**

To place $\\frac{a}{b}$ on a number line:
1. Divide the space between whole numbers into $b$ equal parts
2. Count $a$ parts from the left
    
    `
    },
    {
      id: 'grade4-fractions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Place $\\frac{3}{4}$ on a 0–1 number line.**

Divide 0–1 into 4 equal parts. The 3rd mark is $\\frac{3}{4}$. ✅
    
    `
    },
    {
      id: 'grade4-fractions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "On a 0–1 line divided into 6 parts, the 4th mark is:",
                    "options": [
                              "$\\\\frac{4}{6}$",
                              "$\\\\frac{6}{4}$",
                              "$\\\\frac{4}{1}$",
                              "$\\\\frac{1}{4}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "4th mark out of 6 parts = $\\\\frac{4}{6}$."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Number Lines** 🧮

1) A 0–1 line divided into 4 parts. The 3rd mark = $\\frac{?}{4}$. Numerator?

2) Halfway between $\\frac{1}{2}$ and $1$: express as $\\frac{?}{8}$. Numerator?

3) How many eighths from 0 is $\\frac{5}{8}$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","6","5"],
        hint1: "1st=1/4, 2nd=2/4, 3rd=?",
        hint2: "1/2 = 4/8, 1 = 8/8. Halfway between 4 and 8?",
        hint3: "5/8 means 5 groups of one-eighth.",
        explanation: "1) 3. 2) (4+8)/2 = 6. 3) 5."
      }
    },
    {
      id: 'grade4-fractions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$\\\\frac{7}{4}$ is between which whole numbers?","options":["1 and 2","0 and 1","2 and 3","3 and 4"]},{"label":"On a line divided into fifths, the 2nd mark is","options":["$\\\\frac{2}{5}$","$\\\\frac{5}{2}$","$\\\\frac{1}{5}$","$\\\\frac{2}{1}$"]}],
        correctAnswers: ["1 and 2","$\\\\frac{2}{5}$"],
        hint1: "Convert 7/4 to a mixed number.",
        hint2: "Each mark = one-fifth.",
        explanation: "7/4 = 1 3/4 → between 1 and 2. 2nd mark = 2/5."
      }
    },
    {
      id: 'grade4-fractions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Place $\\frac{1}{3}$ on 0–1 | Divide into 3 parts |
| 2 | Place $1\\frac{1}{2}$ on 0–2 | Past the 1 mark |
| 3 | Identify fractions at marks | Count equal divisions |
    
    `
    },
    {
      id: 'grade4-fractions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Where is $\\\\frac{5}{3}$ on a number line?",
                    "options": [
                              "Between 1 and 2",
                              "Between 0 and 1",
                              "At exactly 2",
                              "Between 2 and 3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\frac{5}{3} = 1\\\\frac{2}{3}$, between 1 and 2."
          }
]
      }
    }
  ]
};
