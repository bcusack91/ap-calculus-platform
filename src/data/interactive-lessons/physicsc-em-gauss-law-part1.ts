export const physCEMGaussPart1Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p1-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Flux

**Part 1 of 7 — Electric Flux**

$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\int E\\cos\\theta\\,dA$

For a uniform field through a flat surface:
$\\Phi_E = EA\\cos\\theta$

- $\\theta$ is the angle between $\\vec{E}$ and the outward normal $\\hat{n}$
- SI unit: $N\\cdot m^{2}/C$ (or V·m)
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$E = 500$ N/C passes through a $0.2$ $m^{2}$ surface perpendicular to it. Find $\\Phi$.**

$\\Phi = EA\\cos 0° = 500(0.2)(1) = 100$ $N\\cdot m^{2}/C$ ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If a surface is parallel to the electric field, the flux through it is:",
                    "options": [
                              "Zero",
                              "$EA$",
                              "$EA/2$",
                              "Infinite"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The area vector is perpendicular to the surface, so it makes $\\theta = 90°$ with $\\vec{E}$; $\\cos 90° = 0$ and $\\Phi = 0$."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-input',
      type: 'input-boxes' as const,
      content: `
**Electric Flux** 🧮

1) $E = 500$ N/C, $A = 0.2$ $m^{2}$, $\\theta = 0°$. Flux $(N\\cdot m^{2}/C)$?

2) $E = 500$ N/C, $A = 0.2$ $m^{2}$, $\\theta = 90°$. Flux $(N\\cdot m^{2}/C)$?

3) $E = 500$ N/C, $A = 0.2$ $m^{2}$, $\\theta = 60°$. Flux $(N\\cdot m^{2}/C)$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["100","0","50"],
        hint1: "$\\Phi = EA\\cos 0° = EA$.",
        hint2: "$\\cos 90° = 0$.",
        hint3: "$\\cos 60° = 0.5$.",
        explanation: "1) $500(0.2)(1) = 100$. 2) $500(0.2)(0) = 0$. 3) $500(0.2)(0.5) = 50$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The SI unit of electric flux is","options":["$N\\cdot m^{2}/C$","N/C","$C/m^{2}$","$V/m^{2}$"]},{"label":"Electric flux depends on the angle between $\\vec{E}$ and","options":["The outward normal $\\hat{n}$","An edge of the surface","The line to the source charge","The force on a test charge"]}],
        correctAnswers: ["$N\\cdot m^{2}/C$","The outward normal $\\hat{n}$"],
        hint1: "$\\Phi = EA$ has units $(N/C)(m^{2})$.",
        hint2: "$\\Phi = \\vec{E} \\cdot d\\vec{A}$, where $d\\vec{A} = \\hat{n}\\,dA$.",
        explanation: "Flux units: $N\\cdot m^{2}/C$. It depends on the angle between $\\vec{E}$ and the surface normal $\\hat{n}$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Surface orientation | $\\Phi$ |
|---|-------------------|--------|
| 1 | Perpendicular to $E$ | $EA$ |
| 2 | Parallel to $E$ | $0$ |
| 3 | At angle $\\theta$ | $EA\\cos\\theta$ |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Electric flux is a measure of:",
                    "options": [
                              "The field lines passing through a surface",
                              "The strength of the field at one point",
                              "The charge per unit area on a surface",
                              "The charge crossing a surface per second"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Flux counts the net number of field lines through a surface ($\\int \\vec{E} \\cdot d\\vec{A}$); charge per area is surface charge density and charge per second is current."
          }
]
      }
    }
  ]
};
