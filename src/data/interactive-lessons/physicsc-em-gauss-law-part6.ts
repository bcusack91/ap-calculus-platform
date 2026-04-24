export const physCEMGaussPart6Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p6-intro',
      type: 'text' as const,
      content: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Gauss's Law Strategy
1. Identify the symmetry (spherical, cylindrical, planar)
2. Choose a Gaussian surface matching the symmetry
3. Determine $Q_{enc}$ inside the surface
4. Evaluate $\\oint \\vec{E} \\cdot d\\vec{A}$ using symmetry
5. Solve for $E$
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A uniformly charged sphere ($\\rho = 2 \\times 10^{-6}$ C/m³, $R = 0.1$ m). Find $E$ at $r = 0.05$ m.**

$Q_{enc} = \\rho \\cdot \\frac{4}{3}\\pi r^3 = 2 \\times 10^{-6} \\cdot \\frac{4}{3}\\pi(0.05)^3$

$E(4\\pi r^2) = Q_{enc}/\epsilon_0$

$E = \\rho r/(3\epsilon_0) = (2 \\times 10^{-6})(0.05)/(3 \\times 8.85 \\times 10^{-12}) \\approx 3770$ N/C ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The Gaussian surface must have the same symmetry as the charge distribution so that:",
                    "options": [
                              "$E$ is constant over the surface",
                              "The surface is physical",
                              "It encloses all charges",
                              "It touches the charges"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Matching symmetry ensures $E$ is constant over the Gaussian surface, allowing it to be factored out of the integral."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem-Solving Workshop** 🧮

1) Name the three symmetry types: spherical, cylindrical, planar. How many are there?

2) For a line charge, the Gaussian surface is a cylinder. The flux through the curved surface has ___ end caps contributing zero flux. (How many end caps?)

3) For planar symmetry, the field passes through ___ pair(s) of flat faces of the pillbox.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","1"],
        hint1: "Count them: spherical, cylindrical, planar.",
        hint2: "A cylinder has two ends.",
        hint3: "A pillbox has two flat faces.",
        explanation: "1) Three symmetry types. 2) Two end caps with zero flux. 3) One pair (two faces, with field going through both)."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To apply Gauss's law, the flux integral simplifies when","options":["$E$ is constant on the Gaussian surface","$E$ varies with position","The surface is irregular","Multiple symmetries are combined"]},{"label":"$Q_{enc}$ for a volume charge density $\\\\rho$ is found by","options":["$\\\\int \\\\rho\\\\,dV$","$\\\\rho \\\\cdot A$","$\\\\rho / V$","$\\\\sigma \\\\cdot L$"]}],
        correctAnswers: ["$E$ is constant on the Gaussian surface","$\\\\int \\\\rho\\\\,dV$"],
        hint1: "Symmetry ensures $E$ is uniform on the surface.",
        hint2: "Volume integral of charge density.",
        explanation: "When $E$ is constant on the surface, $\\oint E\\,dA = EA$. $Q_{enc} = \\int \\rho\\,dV$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Symmetry | Gaussian Surface |
|---|----------|------------------|
| 1 | Sphere | Concentric sphere |
| 2 | Infinite wire | Coaxial cylinder |
| 3 | Infinite plane | Pillbox |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Gauss's law is always true but only useful for calculating $E$ when:",
                    "options": [
                              "There is sufficient symmetry",
                              "There is one charge",
                              "The field is zero",
                              "The charge is negative"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Gauss's law holds universally but can only be used to find $E$ when symmetry makes the integral tractable."
          }
]
      }
    }
  ]
};
