export const physCEMCoulombPart7Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p7-intro',
      type: 'text' as const,
      content: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $F = kq_1q_2/r^2$ (Coulomb's Law)
- $\\vec{E} = k q/r^2 \\hat{r}$ (Electric field)
- $\\vec{F} = q\\vec{E}$ (Force on charge in field)
- Superposition: $\\vec{F}_{net} = \\sum \\vec{F}_i$
- $e = 1.6 \\times 10^{-19}$ C, $k = 9 \\times 10^9$ $N\\cdot m^{2}/C^{2}$
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**An electron is in a uniform field $E = 100$ N/C. Find its acceleration.**

$F = eE = (1.6 \\times 10^{-19})(100) = 1.6 \\times 10^{-17}$ N

$a = F/m = 1.6 \\times 10^{-17} / 9.1 \\times 10^{-31} \\approx 1.76 \\times 10^{13}$ $m/s^{2}$ ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The electric field inside a uniformly charged conducting sphere is:",
                    "options": [
                              "Zero",
                              "$kQ/r^2$",
                              "$kQ/R^2$",
                              "Infinite"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Inside a conductor, charges reside on the surface and $E = 0$ inside."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) Doubling both charges in Coulomb's law increases the force by a factor of ___

2) A charge of 2 C in a field of 5 N/C. Force (N)?

3) $k \\approx$ ___ $\\times 10^9$ $N\\cdot m^{2}/C^{2}$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","10","9"],
        hint1: "$F \\propto q_1 q_2$.",
        hint2: "$F = qE$.",
        hint3: "$k \\approx 8.99 \\times 10^9$, round to nearest integer.",
        explanation: "1) Factor = $2 \\times 2 = 4$. 2) $F = 2(5) = 10$ N. 3) $k \\approx 9 \\times 10^9$."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The gravitational and Coulomb forces both obey","options":["Inverse-square law","Inverse-cube law","Linear law","Hooke's law"]},{"label":"Electric field lines are tangent to","options":["The direction of the electric field","The direction of the magnetic field","The velocity of charges","The acceleration of charges"]}],
        correctAnswers: ["Inverse-square law","The direction of the electric field"],
        hint1: "Both $\\propto 1/r^2$.",
        hint2: "Field lines show the direction of the field at each point.",
        explanation: "Both gravity and Coulomb force follow $1/r^2$. Field lines are tangent to $\\vec{E}$ at each point."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Key Fact |
|---|-------|----------|
| 1 | Coulomb's law | Inverse-square law |
| 2 | Electric field | $E = F/q$ |
| 3 | Superposition | Vector sums |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Coulomb's constant $k$ equals:",
                    "options": [
                              "$1/(4\\\\pi\\\\epsilon_0)$",
                              "$4\\\\pi\\\\epsilon_0$",
                              "$\\\\epsilon_0$",
                              "$1/\\\\epsilon_0$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$k = 1/(4\\\\pi\\\\epsilon_0) \\\\approx 9 \\\\times 10^9$ $N\\cdot m^{2}/C^{2}$."
          }
]
      }
    }
  ]
};
