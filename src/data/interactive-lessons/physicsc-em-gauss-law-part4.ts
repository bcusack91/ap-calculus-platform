export const physCEMGaussPart4Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p4-intro',
      type: 'text' as const,
      content: `
# ⚡ Cylindrical Symmetry

**Part 4 of 7 — Cylindrical Symmetry**

For an infinite line charge with linear charge density $\\lambda$ (C/m):

$E = \\frac{\\lambda}{2\\pi\epsilon_0 r} = \\frac{2k\\lambda}{r}$

Use a cylindrical Gaussian surface coaxial with the charge distribution.

The flux through the end caps is zero (field is radial).
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**An infinite wire has $\\lambda = 5 \\times 10^{-9}$ C/m. Find $E$ at $r = 0.1$ m.**

$E = 2k\\lambda/r = 2(9 \\times 10^9)(5 \\times 10^{-9})/0.1 = 900$ N/C ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The electric field of an infinite line charge decreases as:",
                    "options": [
                              "$1/r$",
                              "$1/r^2$",
                              "$1/r^3$",
                              "Constant"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$E = 2k\\\\lambda/r \\\\propto 1/r$, not $1/r^2$."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p4-input',
      type: 'input-boxes' as const,
      content: `
**Cylindrical Symmetry** 🧮

1) Line charge: $\\lambda = 5$ nC/m, $r = 0.1$ m. $E$ (N/C)?

2) Same wire at $r = 0.2$ m. $E$ (N/C)?

3) $E$ for a line charge depends on $1/r^n$. What is $n$?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["900","450","1"],
        hint1: "$E = 2k\\lambda/r = 2(9 \\times 10^9)(5 \\times 10^{-9})/0.1$.",
        hint2: "Same formula, double the distance.",
        hint3: "$E \\propto 1/r$, so $n = ?$.",
        explanation: "1) $E = 900$ N/C. 2) $E = 900/2 = 450$ N/C. 3) $n = 1$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A cylindrical Gaussian surface is used for","options":["Charges with cylindrical symmetry","Point charges","Planar charges","Any charge distribution"]},{"label":"For an infinite line charge, the field is directed","options":["Radially outward (if $\\\\lambda > 0$)","Along the wire","Both radially and along the wire","In circles around the wire"]}],
        correctAnswers: ["Charges with cylindrical symmetry","Radially outward (if $\\\\lambda > 0$)"],
        hint1: "Match the Gaussian surface to the symmetry.",
        hint2: "The field points away from a positive line charge.",
        explanation: "Cylindrical surfaces match cylindrical symmetry. Field is radially outward for positive $\\lambda$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Configuration | Field |
|---|--------------|-------|
| 1 | Infinite line | $E = 2k\\lambda/r$ |
| 2 | Infinite cylinder (outside) | Same as line |
| 3 | Infinite cylinder (inside) | Depends on charge distribution |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For a cylindrical Gaussian surface around a line charge, flux through the end caps is:",
                    "options": [
                              "Zero",
                              "$EA$",
                              "$\\\\Phi/2$",
                              "Maximum"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The field is radial (perpendicular to the cylinder axis), so no flux passes through the end caps."
          }
]
      }
    }
  ]
};
