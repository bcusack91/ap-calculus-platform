export const apPrecalcPolyEndPart3Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Zeros & Multiplicity

**Part 3 of 7 — Zeros & Multiplicity**

- A **zero** (root) is where $f(x) = 0$
- **Multiplicity**: how many times a factor repeats
  - Odd multiplicity → graph **crosses** x-axis
  - Even multiplicity → graph **bounces** off x-axis

$f(x) = (x-2)^3(x+1)^2$ → zero at $x=2$ (mult. 3, cross), zero at $x=-1$ (mult. 2, bounce)
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = (x-1)^2(x+3)$. Zeros?**

$x = 1$ (multiplicity 2, bounces), $x = -3$ (multiplicity 1, crosses) ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Even multiplicity means the graph:",
                    "options": [
                              "Bounces off the x-axis",
                              "Crosses the x-axis",
                              "Has no zero",
                              "Goes to infinity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Even mult → tangent to axis → bounce."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-input',
      type: 'input-boxes' as const,
      content: `
**Find the Zeros** 🧮

1) $(x-4)^2 = 0$. $x = $ ?

2) $(x+2)^3 = 0$. $x = $ ?

3) $(x-1)(x+1)^2 = 0$. One zero is $x = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","-2","1"],
        hint1: "x−4 = 0.",
        hint2: "x+2 = 0.",
        hint3: "x−1 = 0.",
        explanation: "1) x=4. 2) x=−2. 3) x=1 (or −1)."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Multiplicity 2 means the factor appears","options":["Twice","Once","Three times","Zero times"]},{"label":"At a zero with odd multiplicity, the graph","options":["Crosses the x-axis","Bounces","Has a hole","Is undefined"]}],
        correctAnswers: ["Twice","Crosses the x-axis"],
        hint1: "Squared.",
        hint2: "Odd → passes through.",
        explanation: "Mult 2 = factor squared. Odd mult → crosses."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | Zeros | Behavior |
|---|---------|-------|----------|
| 1 | $(x-4)^2$ | 4 | Bounce |
| 2 | $(x+2)^3$ | −2 | Cross |
| 3 | $(x-1)(x+1)^2$ | 1, −1 | Cross, Bounce |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Zero of (x+5)³ is at x =",
                    "options": [
                              "−5",
                              "5",
                              "3",
                              "−3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Set x+5=0 → x=−5."
          }
]
      }
    }
  ]
};
