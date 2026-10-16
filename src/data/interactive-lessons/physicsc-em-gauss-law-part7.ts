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
| Cylindrical | Line charge | $2k\\lambda/r$ |
| Planar | Infinite sheet | $\\sigma/(2\\epsilon_0)$ |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Compare $E$ at $r = 1$ m from: (a) point charge $Q = 10^{-6}$ C, (b) line charge $\\lambda = 10^{-6}$ C/m.**

(a) $E = kQ/r^2 = 9 \\times 10^3$ N/C

(b) $E = 2k\\lambda/r = 18 \\times 10^3$ N/C

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
                              "A point charge",
                              "A long line charge",
                              "A large sheet of charge",
                              "All drop at the same rate"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Point charge: $1/r^2$; line charge: $1/r$; infinite sheet: constant. The point charge's field drops fastest."
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
        dropdowns: [{"label":"Gauss's law, Maxwell's first equation, is written","options":["$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$","$\\oint \\vec{B} \\cdot d\\vec{A} = 0$","$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}\\epsilon_0$","$\\oint \\vec{E} \\cdot d\\vec{l} = Q_{enc}/\\epsilon_0$"]},{"label":"The total flux through a closed surface surrounding no charge is","options":["Zero","$\\epsilon_0$","$Q_{enc}$","Infinite"]}],
        correctAnswers: ["$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$","Zero"],
        hint1: "Electric flux through a closed surface on the left, enclosed charge over $\\epsilon_0$ on the right.",
        hint2: "$Q_{enc} = 0 \\implies \\Phi = 0$.",
        explanation: "Gauss's law: $\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$ (the zero-on-the-right version for $\\vec{B}$ is Gauss's law for magnetism). No enclosed charge means zero net flux."
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
| 2 | Line charge | $E = 2k\\lambda/r$ |
| 3 | Sheet charge | $E = \\sigma/(2\\epsilon_0)$ |
    
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
                              "Coulomb's law for static charges",
                              "Faraday's law for changing flux",
                              "Ampère's law for currents",
                              "Ohm's law for resistors"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Gauss's law, Maxwell's first equation, contains Coulomb's law: applied to a sphere around a point charge it gives $E(4\\pi r^2) = q/\\epsilon_0$, so $E = kq/r^2$."
          }
]
      }
    }
  ]
};
