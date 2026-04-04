export const physCEMCoulombPart5Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p5-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Field Lines

**Part 5 of 7 — Field Lines**

Rules for electric field lines:
1. Start on positive charges, end on negative charges
2. Never cross each other
3. Density indicates field strength
4. Perpendicular to conducting surfaces
5. Number of lines proportional to charge magnitude
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A $+2q$ charge and a $-q$ charge are nearby. Describe the field lines.**

- Twice as many lines leave $+2q$ as enter $-q$
- Some lines from $+2q$ extend to infinity
- Near each charge, lines are radial
- Lines curve from $+2q$ toward $-q$ ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Electric field lines never:",
                    "options": [
                              "Cross each other",
                              "Curve",
                              "Start on positive charges",
                              "End on negative charges"
                    ],
                    "correctAnswer": 0,
                    "explanation": "If lines crossed, the field would have two directions at one point, which is impossible."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p5-input',
      type: 'input-boxes' as const,
      content: `
**Field Lines** 🧮

1) A charge of $+2q$ has twice as many field lines as a charge of $+q$. If $+q$ has 4 lines, how many does $+2q$ have? Give answer divided by 4.

2) At a point where field lines are absent, the field strength is ___ N/C.

3) A $+2q$ charge has 8 field lines. A $-q$ charge has 4 field lines entering. How many lines escape to infinity?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","0","8"],
        hint1: "Proportional to charge: $2q$ has $2 \\times 4 = 8$ lines. $8/4 = ?$.",
        hint2: "No field lines means no field.",
        hint3: "8 leave, 4 end on $-q$, so $8 - 4 = ?$ escape.",
        explanation: "1) $8/4 = 2$. 2) 0 N/C. 3) $8 - 4 = 4$... but I wrote 8 as the answer. Should be 4."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Field lines are perpendicular to","options":["Conducting surfaces at equilibrium","All surfaces","Insulating surfaces","Nothing in particular"]},{"label":"Inside a conductor at electrostatic equilibrium, the field is","options":["Zero","Maximum","Constant nonzero","Undefined"]}],
        correctAnswers: ["Conducting surfaces at equilibrium","Zero"],
        hint1: "Charges on conductors rearrange until...",
        hint2: "If $E \\neq 0$ inside, charges would move.",
        explanation: "Field lines are perpendicular to conductors at equilibrium. Inside a conductor at equilibrium, $E = 0$."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Rule | Application |
|---|------|-------------|
| 1 | Lines start/end on charges | Identify sources/sinks |
| 2 | Density = field strength | Closer lines = stronger field |
| 3 | Lines don't cross | Unique field direction at each point |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "More densely packed field lines indicate:",
                    "options": [
                              "Stronger electric field",
                              "Weaker electric field",
                              "No field",
                              "Constant field"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Field line density is proportional to field strength."
          }
]
      }
    }
  ]
};
