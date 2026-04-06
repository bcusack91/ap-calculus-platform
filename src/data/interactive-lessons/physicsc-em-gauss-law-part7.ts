export const physCEMGaussPart7Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p7-intro',
      type: 'text' as const,
      content: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Results from Gauss's Law
| Symmetry | Configuration | $E$ |
|----------|--------------|-----|
| Spherical | Point/$Q$ outside | $kQ/r^2$ |
| Spherical | Inside conductor | $0$ |
| Cylindrical | Line charge | $2k\lambda/r$ |
| Planar | Infinite sheet | $\sigma/(2\epsilon_0)$ |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Compare $E$ at $r = 1$ m from: (a) point charge $Q = 10^{-6}$ C, (b) line charge $\lambda = 10^{-6}$ C/m.**

(a) $E = kQ/r^2 = 9 \\times 10^3$ N/C

(b) $E = 2k\lambda/r = 18 \\times 10^3$ N/C

The line charge field is stronger at this distance because it falls off as $1/r$ instead of $1/r^2$. ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which field drops off fastest with distance?",
                    "options": [
                              "Point charge ($1/r^2$)",
                              "Line charge ($1/r$)",
                              "Sheet charge (constant)",
                              "They all drop equally"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Point: $1/r^2$, Line: $1/r$, Sheet: constant. Point charge drops fastest."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) $E$ for a point charge drops as $1/r^n$. What is $n$?

2) $E$ for a line charge drops as $1/r^n$. What is $n$?

3) $E$ for an infinite sheet drops as $1/r^n$. What is $n$? (The field is constant.)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","1","0"],
        hint1: "$E = kQ/r^2$.",
        hint2: "$E = 2k\\lambda/r$.",
        hint3: "$E = \\sigma/(2\\epsilon_0)$ — no $r$ dependence.",
        explanation: "1) $n = 2$ (inverse-square). 2) $n = 1$ (inverse). 3) $n = 0$ (constant, $r^0 = 1$)."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Gauss's law in differential form is","options":["$\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$","$\\\\nabla \\\\times \\\\vec{E} = 0$","$\\\\nabla \\\\cdot \\\\vec{B} = 0$","$F = qE$"]},{"label":"The total flux through a closed surface surrounding no charge is","options":["Zero","$\\\\epsilon_0$","$Q_{enc}$","Infinite"]}],
        correctAnswers: ["$\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$","Zero"],
        hint1: "This is the first of Maxwell's equations.",
        hint2: "$Q_{enc} = 0 \\implies \\Phi = 0$.",
        explanation: "Gauss's law in differential form: $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_0$. No enclosed charge means zero net flux."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Formula |
|---|-------|---------|
| 1 | Point charge | $E = kQ/r^2$ |
| 2 | Line charge | $E = 2k\lambda/r$ |
| 3 | Sheet charge | $E = \sigma/(2\epsilon_0)$ |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Gauss's law is one of Maxwell's equations. It replaces:",
                    "options": [
                              "Coulomb's law (in a more general form)",
                              "Faraday's law",
                              "Ampère's law",
                              "Ohm's law"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Gauss's law is the integral form of $\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$, which generalizes Coulomb's law."
          }
]
      }
    }
  ]
};
