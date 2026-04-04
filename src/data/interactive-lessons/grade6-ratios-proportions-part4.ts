export const g6RatiosPart4Data = {
  topicSlug: "ratios-proportions-grade6",
  sections: [
    {
      id: 'grade6-ratios-proportions-p4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Solving Proportions

**Part 4 of 7 — Solving Proportions**

A **proportion** is two equal ratios: $\frac{a}{b} = \frac{c}{d}$

To solve, **cross-multiply**: $ad = bc$, then solve for the unknown.
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\frac{3}{5} = \frac{x}{20}$

Cross-multiply: $3 \times 20 = 5 \times x$ → $60 = 5x$ → $x = 12$ ✅
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Solve $\\\\frac{2}{3} = \\\\frac{x}{12}$:",
                    "options": [
                              "$x = 8$",
                              "$x = 6$",
                              "$x = 4$",
                              "$x = 18$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Cross: 2×12 = 3x → 24 = 3x → x = 8."
          }
]
      }
    },
    {
      id: 'grade6-ratios-proportions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Solve Proportions** 🧮

1) $\frac{2}{3} = \frac{x}{12}$. $x = ?$

2) $\frac{x}{5} = \frac{6}{10}$. $x = ?$

3) $\frac{4}{7} = \frac{12}{x}$. $x = ?$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","3","21"],
        hint1: "Cross-multiply: 2 × 12 = 3x.",
        hint2: "Cross-multiply: 10x = 30.",
        hint3: "Cross-multiply: 4x = 84.",
        explanation: "1) 24÷3=8. 2) 30÷10=3. 3) 84÷4=21."
      }
    },
    {
      id: 'grade6-ratios-proportions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To solve a proportion, you can","options":["Cross-multiply","Add the fractions","Subtract the fractions","Multiply numerators only"]},{"label":"$\\\\frac{5}{8} = \\\\frac{15}{x}$. $x =$","options":["24","3","40","8"]}],
        correctAnswers: ["Cross-multiply","24"],
        hint1: "Standard method for proportions.",
        hint2: "5x = 8(15) = 120. x = ?",
        explanation: "Cross-multiply to solve. 5x=120 → x=24."
      }
    },
    {
      id: 'grade6-ratios-proportions-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Proportion | Solution |
|---|-----------|----------|
| 1 | $\frac{2}{3} = \frac{x}{12}$ | $x = 8$ |
| 2 | $\frac{x}{5} = \frac{6}{10}$ | $x = 3$ |
| 3 | $\frac{4}{7} = \frac{12}{x}$ | $x = 21$ |
    
    `
    },
    {
      id: 'grade6-ratios-proportions-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Cross-multiplication: $\\\\frac{a}{b} = \\\\frac{c}{d}$ gives:",
                    "options": [
                              "$ad = bc$",
                              "$ab = cd$",
                              "$a + d = b + c$",
                              "$ac = bd$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\frac{a}{b} = \\\\frac{c}{d}$ → $ad = bc$."
          }
]
      }
    }
  ]
};
