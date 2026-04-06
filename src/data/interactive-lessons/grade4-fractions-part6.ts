export const g4FractionsPart6Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p6-intro',
      type: 'text' as const,
      content: `
# 📐 Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply fraction skills to real-world problems!

### Steps
1. **Read** — What is being asked?
2. **Plan** — Which operation?
3. **Solve** — Show your work
4. **Check** — Does the answer make sense?
    
    `
    },
    {
      id: 'grade4-fractions-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A recipe calls for $\\frac{3}{4}$ cup of milk. You halve the recipe. How much milk?**

$\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$ cup ✅
    
    `
    },
    {
      id: 'grade4-fractions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A pizza has 8 slices. You eat 3 slices. Fraction left?",
                    "options": [
                              "$\\\\frac{5}{8}$",
                              "$\\\\frac{3}{8}$",
                              "$\\\\frac{8}{5}$",
                              "$\\\\frac{5}{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(8−3)/8 = 5/8 remains."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) A pizza has 12 slices. You eat $\\frac{1}{6}$. How many slices left?

2) Sarah has $\\frac{9}{12}$ yd ribbon. Uses $\\frac{3}{12}$ yd. How many twelfths remain?

3) $\\frac{2}{3}$ of 12 students passed. How many passed?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["10","6","8"],
        hint1: "1/6 of 12 = 12 ÷ 6. Then subtract from 12.",
        hint2: "9 − 3 = ? twelfths.",
        hint3: "Multiply: (2/3) × 12.",
        explanation: "1) 12÷6=2 eaten, 12−2=10. 2) 9−3=6. 3) (2/3)×12=8."
      }
    },
    {
      id: 'grade4-fractions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"1/4 of 20 students absent means how many?","options":["5","4","10","8"]},{"label":"After cutting 2/5 of a 10 m rope, remaining length is","options":["6 meters","8 meters","2 meters","4 meters"]}],
        correctAnswers: ["5","6 meters"],
        hint1: "(1/4) × 20 = ?",
        hint2: "(2/5) × 10 = ? cut off. Subtract from 10.",
        explanation: "(1/4)×20=5. (2/5)×10=4 cut, 10−4=6 remain."
      }
    },
    {
      id: 'grade4-fractions-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | Share 3 pizzas among 4 people | Division |
| 2 | Ate 2/8 of pie, friend ate 3/8. How much left? | Subtraction |
| 3 | $\\frac{5}{6}$ m rope − $\\frac{1}{6}$ m cut | Subtraction |
    
    `
    },
    {
      id: 'grade4-fractions-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Sara has $\\\\frac{3}{4}$ yd fabric, uses $\\\\frac{1}{4}$ yd, buys $\\\\frac{2}{4}$ yd. Total?",
                    "options": [
                              "1 yard",
                              "$\\\\frac{3}{4}$ yard",
                              "$\\\\frac{1}{2}$ yard",
                              "$\\\\frac{5}{4}$ yards"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3/4 − 1/4 + 2/4 = 4/4 = 1 yard."
          }
]
      }
    }
  ]
};
