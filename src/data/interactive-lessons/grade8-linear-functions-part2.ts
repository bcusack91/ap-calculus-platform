export const g8LinearPart2Data = {
  topicSlug: "linear-functions-grade8",
  sections: [
    {
      id: 'grade8-linear-functions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Slope from Tables & Graphs

**Part 2 of 7 — Slope from Tables & Graphs**

$\\text{slope} = m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$

- Positive slope: rises left to right
- Negative slope: falls left to right
- Zero slope: horizontal
- Undefined slope: vertical
    
    `
    },
    {
      id: 'grade8-linear-functions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Points (1, 3) and (4, 9).**

$m = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$ ✅
    
    `
    },
    {
      id: 'grade8-linear-functions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Slope of (0,1) and (2,5)?",
                    "options": [
                              "2",
                              "3",
                              "1/2",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(5−1)/(2−0) = 4/2 = 2."
          }
]
      }
    },
    {
      id: 'grade8-linear-functions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Slope** 🧮

1) (0,1) and (2,5). m = ?

2) (1,6) and (3,2). m = ?

3) (0,0) and (4,12). m = ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","-2","3"],
        hint1: "(5−1)/(2−0).",
        hint2: "(2−6)/(3−1).",
        hint3: "(12−0)/(4−0).",
        explanation: "1) 4/2=2. 2) −4/2=−2. 3) 12/4=3."
      }
    },
    {
      id: 'grade8-linear-functions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Positive slope means the line","options":["Rises left to right","Falls left to right","Is horizontal","Is vertical"]},{"label":"Undefined slope means the line is","options":["Vertical","Horizontal","Diagonal","Curved"]}],
        correctAnswers: ["Rises left to right","Vertical"],
        hint1: "Positive = uphill.",
        hint2: "Divide by zero = undefined.",
        explanation: "Positive slope → rises. Undefined → vertical."
      }
    },
    {
      id: 'grade8-linear-functions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Points | Slope |
|---|--------|-------|
| 1 | (0,1) and (2,5) | 2 |
| 2 | (1,6) and (3,2) | −2 |
| 3 | (0,0) and (4,12) | 3 |
    
    `
    },
    {
      id: 'grade8-linear-functions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A horizontal line has slope:",
                    "options": [
                              "0",
                              "Undefined",
                              "1",
                              "−1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Horizontal → no rise → slope = 0."
          }
]
      }
    }
  ]
};
