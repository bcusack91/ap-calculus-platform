export const alg2RationalPart5Data = {
  topicSlug: "rational-expressions-algebra2",
  sections: [
    {
      id: 'algebra2-rational-expressions-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Rational Equations

**Part 5 of 7 — Rational Equations**

To solve: multiply both sides by the **LCD** to clear fractions.

**Always check for extraneous solutions** (values making denominator = 0).
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\frac{x}{3} = 4$

Multiply by 3: $x = 12$ ✅

Check: $\frac{12}{3} = 4$ ✓
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "$\\frac{x}{5} = 3$. $x = ?$",
                    "options": [
                              "15",
                              "3/5",
                              "8",
                              "5/3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "x = 3 × 5 = 15."
          }
]
      }
    },
    {
      id: 'algebra2-rational-expressions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Solve Rational Equations** 🧮

1) $\frac{x}{5} = 3$. $x = ?$

2) $\frac{2}{x} = 1$. $x = ?$

3) $\frac{x+1}{2} = 4$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["15","2","7"],
        hint1: "Multiply both sides by 5.",
        hint2: "Multiply both sides by x.",
        hint3: "Multiply by 2: x+1=8.",
        explanation: "1) 15. 2) 2. 3) 7."
      }
    },
    {
      id: 'algebra2-rational-expressions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To solve a rational equation","options":["Multiply both sides by the LCD","Cross out fractions","Add all denominators","Set everything equal to 1"]},{"label":"After solving, always check for","options":["Extraneous solutions","Extra variables","Perfect answers","Round numbers"]}],
        correctAnswers: ["Multiply both sides by the LCD","Extraneous solutions"],
        hint1: "Clear fractions with LCD.",
        hint2: "Values that make denominator 0.",
        explanation: "Clear fractions with LCD. Check for extraneous solutions."
      }
    },
    {
      id: 'algebra2-rational-expressions-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Equation | Solution |
|---|---------|----------|
| 1 | $\frac{x}{5} = 3$ | $x = 15$ |
| 2 | $\frac{2}{x} = 1$ | $x = 2$ |
| 3 | $\frac{x+1}{2} = 4$ | $x = 7$ |
    
    `
    },
    {
      id: 'algebra2-rational-expressions-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Extraneous solutions are:",
                    "options": [
                              "Solutions that make the denominator zero",
                              "Extra correct answers",
                              "The best answers",
                              "Never possible"
                    ],
                    "correctAnswer": 0,
                    "explanation": "They appear as solutions but create division by zero."
          }
]
      }
    }
  ]
};
