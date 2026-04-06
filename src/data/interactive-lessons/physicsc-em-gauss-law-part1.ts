export const physCEMGaussPart1Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p1-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Flux

**Part 1 of 7 — Electric Flux**

$\Phi_E = \oint \\vec{E} \cdot d\\vec{A} = \int E\cos\\theta\,dA$

For a uniform field through a flat surface:
$\Phi_E = EA\cos\\theta$

- $\\theta$ is the angle between $\\vec{E}$ and the outward normal $\hat{n}$
- SI unit: N·m²/C (or V·m)
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$E = 500$ N/C passes through a $0.2$ m² surface perpendicular to it. Find $\Phi$.**

$\Phi = EA\cos 0° = 500(0.2)(1) = 100$ N·m²/C ✅
    
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
                    "explanation": "$\\\\theta = 90°$, so $\\\\cos 90° = 0$ and $\\\\Phi = 0$."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-input',
      type: 'input-boxes' as const,
      content: `
**Electric Flux** 🧮

1) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 0°$. Flux (N·m²/C)?

2) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 90°$. Flux (N·m²/C)?

3) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 60°$. Flux (N·m²/C)?
    
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
        dropdowns: [{"label":"The SI unit of electric flux is","options":["N·m²/C","N/C","C/m²","V/m²"]},{"label":"Electric flux depends on the angle between $\\\\vec{E}$ and","options":["The outward area normal $\\\\hat{n}$","The surface edge","The charge","The wire"]}],
        correctAnswers: ["N·m²/C","The outward area normal $\\\\hat{n}$"],
        hint1: "$\\Phi = EA$ has units (N/C)(m²).",
        hint2: "$\\Phi = \\vec{E} \\cdot d\\vec{A}$, where $d\\vec{A} = \\hat{n}\\,dA$.",
        explanation: "Flux units: N·m²/C. It depends on the angle between $\\vec{E}$ and the surface normal $\\hat{n}$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Surface orientation | $\Phi$ |
|---|-------------------|--------|
| 1 | Perpendicular to $E$ | $EA$ |
| 2 | Parallel to $E$ | $0$ |
| 3 | At angle $\\theta$ | $EA\cos\\theta$ |
    
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
                              "Field lines passing through a surface",
                              "Electric field strength",
                              "Charge density",
                              "Current flow"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Flux counts the net number of field lines through a surface."
          }
]
      }
    }
  ]
};
