export const alg2RationalPart6Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply rational expression skills:
- Rate problems (work/time)
- Mixture problems
- Proportion problems
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Worker A: 6 hours alone. Worker B: 3 hours alone. Together?**

$\frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2}$

Together: 2 hours ✅
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Worker A: 4h, Worker B: 4h. Together?",
                    "options": [
                              "2 hours",
                              "8 hours",
                              "4 hours",
                              "1 hour"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1/4 + 1/4 = 1/2. Time = 2h."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Applications** 🧮

1) Rate: A does job in 4h, B in 4h. Together in ? hours.

2) $\frac{x}{2} = 6$. $x = ?$

3) $\frac{3}{x} = \frac{1}{2}$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","12","6"],
        hint1: "1/4 + 1/4 = 1/2. Reciprocal?",
        hint2: "2 × 6.",
        hint3: "Cross multiply: 3(2)=x(1).",
        explanation: "1) 2. 2) 12. 3) 6."
      }
    },
    {
      id: 'algebra2-rational-expressions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In work problems, rates are expressed as","options":["1/(time to complete)","Time × jobs","Distance/speed","Jobs × workers"]},{"label":"Combined rate = sum of individual rates when working","options":["Together","Separately","In shifts","Neither"]}],
        correctAnswers: ["1/(time to complete)","Together"],
        hint1: "Rate = 1/time.",
        hint2: "Rates add when collaborating.",
        explanation: "Rate = 1/t. Combined rate: add when working together."
      }
    },
    {
      id: 'algebra2-rational-expressions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | A: 4h, B: 4h. Together? | 2h |
| 2 | $\frac{x}{2} = 6$. x = ? | 12 |
| 3 | $\frac{3}{x} = \frac{1}{2}$. x = ? | 6 |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{3}{x} = \\frac{1}{2}$. $x = ?$",
                    "options": [
                              "6",
                              "3/2",
                              "2/3",
                              "1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Cross multiply: 6 = x."
          }
]
      }
    }
  ]
};
