export const apPrecalcPolyEndPart7Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Degree & LC → end behavior
- Even mult → bounce; Odd mult → cross
- Max turning points = degree − 1
- y-intercept = f(0)
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = 2x^3 - 6x$. Degree? LC? y-int?**

Degree 3, LC = 2 (odd+pos → left↓ right↑), $f(0)=0$ ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Max turning points for degree 5?",
                    "options": [
                              "4",
                              "5",
                              "6",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5−1=4."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Degree of $4x^5 + x$?

2) Max turning points for degree 5?

3) y-intercept of $3x^2 - 7$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","4","-7"],
        hint1: "Highest exponent.",
        hint2: "5−1.",
        hint3: "f(0).",
        explanation: "1) 5. 2) 4. 3) −7."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"End behavior depends on","options":["Degree and leading coefficient","Number of terms","y-intercept","Zeros only"]},{"label":"Odd multiplicity means the graph ____ the x-axis","options":["Crosses","Bounces off","Does not touch","Is parallel to"]}],
        correctAnswers: ["Degree and leading coefficient","Crosses"],
        hint1: "Two key properties.",
        hint2: "Passes through.",
        explanation: "End behavior: degree + LC. Odd mult → crosses."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Answer |
|---|---------|--------|
| 1 | Degree of $4x^{5}$ | 5 |
| 2 | Max turning points for degree 5 | 4 |
| 3 | y-int of $3x^{2}-7$ | −7 |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "y-intercept of $3x^{2}-7$?",
                    "options": [
                              "−7",
                              "3",
                              "7",
                              "0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "f(0)=0−7=−7."
          }
]
      }
    }
  ]
};
