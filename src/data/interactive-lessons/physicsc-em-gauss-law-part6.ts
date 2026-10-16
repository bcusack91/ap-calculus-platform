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

$E(4\\pi r^2) = Q_{enc}/\\epsilon_0$

$E = \\rho r/(3\\epsilon_0) = (2 \\times 10^{-6})(0.05)/(3 \\times 8.85 \\times 10^{-12}) \\approx 3770$ N/C ✅
    
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
                              "The surface can be a real object",
                              "It encloses every charge present",
                              "The flux through it becomes zero"
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

1) An insulating sphere of radius $R$ has total charge $Q$ spread uniformly through its volume. What fraction of $Q$ does a Gaussian sphere of radius $R/2$ enclose? (decimal)

2) For the same sphere, $E$ at $r = R/2$ is what fraction of $E$ at $r = R$? (decimal)

3) A sphere has nonuniform charge density $\\rho(r) = br$. The charge enclosed within radius $r$ is $Q_{enc} = \\pi b r^n$. What is $n$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0.125","0.5","4"],
        hint1: "Enclosed charge scales with enclosed volume, $r^3$.",
        hint2: "Inside a uniform sphere, $E \\propto r$.",
        hint3: "$Q_{enc} = \\int_0^r b r' \\cdot 4\\pi r'^2\\,dr'$.",
        explanation: "1) $(1/2)^3 = 0.125$. 2) $E = kQr/R^3$, so $E(R/2)/E(R) = 0.5$. 3) $\\int_0^r 4\\pi b r'^3\\,dr' = \\pi b r^4$, so $n = 4$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To apply Gauss's law, the flux integral simplifies when","options":["$E$ is constant on the Gaussian surface","$E$ is largest on the Gaussian surface","The surface is irregular in shape","The surface encloses no charge"]},{"label":"$Q_{enc}$ for a volume charge density $\\rho$ is found by","options":["$\\int \\rho\\,dV$","$\\rho \\cdot A$","$\\rho / V$","$\\sigma \\cdot L$"]}],
        correctAnswers: ["$E$ is constant on the Gaussian surface","$\\int \\rho\\,dV$"],
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
                              "There is enough symmetry",
                              "Exactly one point charge is enclosed",
                              "The net enclosed charge is zero",
                              "All the charge lies outside it"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Gauss's law holds for any closed surface, but it gives $E$ only when spherical, cylindrical, or planar symmetry lets $E$ come out of the integral; zero enclosed charge gives zero flux, not a usable $E$."
          }
]
      }
    }
  ]
};
