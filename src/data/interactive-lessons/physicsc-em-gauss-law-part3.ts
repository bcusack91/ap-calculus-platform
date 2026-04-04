export const physCEMGaussPart3Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p3-intro',
      type: 'text' as const,
      content: `
# ⚡ Spherical Symmetry

**Part 3 of 7 — Spherical Symmetry**

For a spherically symmetric charge distribution:

**Outside** ($r > R$): $E = \frac{kQ}{r^2}$ (as if all charge at center)

**Inside a uniformly charged sphere** ($r < R$):
$E = \frac{kQr}{R^3} = \frac{\rho r}{3\epsilon_0}$

**Inside a conducting sphere**: $E = 0$
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A conducting sphere of radius 0.1 m has charge $Q = 10^{-8}$ C. Find $E$ at $r = 0.2$ m.**

$E = kQ/r^2 = (9 \times 10^9)(10^{-8})/(0.04) = 2250$ N/C ✅

Inside the conductor: $E = 0$.
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A uniformly charged sphere looks like a point charge when viewed from:",
                    "options": [
                              "Outside the sphere",
                              "Inside the sphere",
                              "The surface",
                              "The center"
                    ],
                    "correctAnswer": 0,
                    "explanation": "By Gauss's law with spherical symmetry, $E = kQ/r^2$ outside — same as a point charge."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p3-input',
      type: 'input-boxes' as const,
      content: `
**Spherical Symmetry** 🧮

1) Electric field inside a conducting sphere (N/C)?

2) Outside a sphere: $E = kQ/r^2$. If $r$ doubles, $E$ decreases by a factor of ___

3) A sphere ($Q = 10^{-8}$ C) at distance $r = 0.2$ m. $E$ (N/C)? ($k = 9 \times 10^9$)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","4","2250"],
        hint1: "Conducting sphere interior.",
        hint2: "$E \\propto 1/r^2$, so doubling $r$ divides $E$ by $2^2$.",
        hint3: "$E = kQ/r^2 = 9 \\times 10^9 \\times 10^{-8} / 0.04$.",
        explanation: "1) $E = 0$ inside conductor. 2) Factor of 4. 3) $90/0.04 = 2250$ N/C."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"For a Gaussian sphere inside a conducting shell, the enclosed charge is","options":["Zero (charge resides on surface)","$Q$","$Q/2$","$Q/r$"]},{"label":"The electric field just outside a conducting sphere is","options":["$\\\\sigma / \\\\epsilon_0$","Zero","$\\\\sigma \\\\epsilon_0$","$kQ^2/r^2$"]}],
        correctAnswers: ["Zero (charge resides on surface)","$\\\\sigma / \\\\epsilon_0$"],
        hint1: "Charge in a conductor is on the surface.",
        hint2: "Apply Gauss's law to a thin pillbox at the surface.",
        explanation: "No charge inside conductor → $Q_{enc} = 0$. At the surface: $E = \\sigma/\\epsilon_0$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Region | $E$ |
|---|--------|-----|
| 1 | Outside sphere | $kQ/r^2$ |
| 2 | Inside conductor | $0$ |
| 3 | Inside uniform sphere | $kQr/R^3$ |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Inside a uniformly charged insulating sphere, $E$:",
                    "options": [
                              "Increases linearly with $r$",
                              "Decreases with $r$",
                              "Is constant",
                              "Is zero"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$E = kQr/R^3 \\\\propto r$ inside a uniform sphere."
          }
]
      }
    }
  ]
};
