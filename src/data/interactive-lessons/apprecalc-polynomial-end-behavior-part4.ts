export const apPrecalcPolyEndPart4Data = {
  topicSlug: "polynomial-end-behavior-apprecalc",
  sections: [
    {
      id: 'apprecalc-polynomial-end-behavior-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Turning Points

**Part 4 of 7 — Turning Points**

A degree-$n$ polynomial has **at most** $n-1$ turning points.

- **Local max**: graph goes from increasing to decreasing
- **Local min**: graph goes from decreasing to increasing

The number of turning points is always $\\leq n - 1$.
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Degree 4 polynomial. Max turning points?**

$4 - 1 = 3$ turning points max ✅
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Max turning points for degree 6?",
                    "options": [
                              "5",
                              "6",
                              "7",
                              "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "6−1 = 5."
          }
]
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-input',
      type: 'input-boxes' as const,
      content: `
**Max Turning Points** 🧮

1) Degree 3 → max turning points?

2) Degree 5 → max turning points?

3) Degree 2 → max turning points?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","4","1"],
        hint1: "3−1.",
        hint2: "5−1.",
        hint3: "2−1.",
        explanation: "1) 2. 2) 4. 3) 1."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A degree-n polynomial has at most ____ turning points","options":["n−1","n","n+1","2n"]},{"label":"A turning point is where the graph changes from","options":["Increasing to decreasing or vice versa","Positive to negative","Linear to curved","One equation to another"]}],
        correctAnswers: ["n−1","Increasing to decreasing or vice versa"],
        hint1: "One less than degree.",
        hint2: "Direction change.",
        explanation: "Max turning points = n−1. Turning = direction change."
      }
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Degree | Max Turning Points |
|---|--------|-------------------|
| 1 | 3 | 2 |
| 2 | 5 | 4 |
| 3 | 2 | 1 |
    
    `
    },
    {
      id: 'apprecalc-polynomial-end-behavior-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A quadratic (degree 2) has at most ____ turning point(s):",
                    "options": [
                              "1",
                              "2",
                              "0",
                              "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2−1 = 1 (the vertex)."
          }
]
      }
    }
  ]
};
