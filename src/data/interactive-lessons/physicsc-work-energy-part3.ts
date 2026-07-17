export const physCWorkEnergyPart3Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p3-intro',
      type: 'text' as const,
      content: `
# ⚛️ Potential Energy Functions

**Part 3 of 7 — Potential Energy Functions**

Potential energy is related to conservative forces:
$F(x) = -\\frac{dU}{dx}$

Common potential energies:
- Gravitational: $U = mgh$
- Elastic (spring): $U = \\frac{1}{2}kx^2$

A force is conservative if work depends only on endpoints, not path.
    
    `
    },
    {
      id: 'physicsc-work-energy-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Given $U(x) = 5x^2$, find $F(x)$.**

$F(x) = -\\frac{dU}{dx} = -10x$ ✅

This is a restoring force (like a spring with $k = 10$ N/m).
    
    `
    },
    {
      id: 'physicsc-work-energy-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If $U(x) = 4x^3$, what is $F(x)$?",
                    "options": [
                              "$-12x^2$",
                              "$12x^2$",
                              "$4x^2$",
                              "$-4x^2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$F = -dU/dx = -12x^2$."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p3-input',
      type: 'input-boxes' as const,
      content: `
**Potential Energy Functions** 🧮

1) A 4 kg object is at height 5 m. Gravitational PE (J)? ($g = 10$ $m/s^{2}$)

2) A spring ($k = 200$ N/m) is compressed 1 m. Elastic PE (J)?

3) If $U(x) = 5x^2$, what is $F(x)$ at $x = 1$? (Give the numerical value in N.)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["200","100","-10"],
        hint1: "$U = mgh$.",
        hint2: "$U = \\frac{1}{2}kx^2$.",
        hint3: "$F = -dU/dx = -10x$. Evaluate at $x = 1$.",
        explanation: "1) $4(10)(5) = 200$ J. 2) $\\frac{1}{2}(200)(1) = 100$ J. 3) $F(1) = -10(1) = -10$ N."
      }
    },
    {
      id: 'physicsc-work-energy-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The relationship between force and potential energy is","options":["$F = -dU/dx$","$F = dU/dx$","$F = U/x$","$F = U \\\\cdot x$"]},{"label":"At a stable equilibrium point, $U(x)$ has a","options":["Local minimum","Local maximum","Inflection point","Discontinuity"]}],
        correctAnswers: ["$F = -dU/dx$","Local minimum"],
        hint1: "Note the negative sign.",
        hint2: "A ball at the bottom of a valley is in stable equilibrium.",
        explanation: "$F = -dU/dx$. Stable equilibrium occurs at a potential energy minimum."
      }
    },
    {
      id: 'physicsc-work-energy-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Potential Energy | Force |
|---|-----------------|-------|
| 1 | $U = mgh$ | $F = -mg$ |
| 2 | $U = \\frac{1}{2}kx^2$ | $F = -kx$ |
| 3 | $U = ax^3$ | $F = -3ax^2$ |
    
    `
    },
    {
      id: 'physicsc-work-energy-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is a conservative force?",
                    "options": [
                              "Gravity",
                              "Friction",
                              "Air resistance",
                              "All of these"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Gravity is conservative — work depends only on height change, not path."
          }
]
      }
    }
  ]
};
