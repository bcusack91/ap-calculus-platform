export const physCEMCapacitorsPart7Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p7-intro',
      type: 'text' as const,
      content: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $C = Q/V$, $C = \epsilon_0 A/d$, $C = \kappa C_0$
- Series: $1/C_{eq} = \sum 1/C_i$
- Parallel: $C_{eq} = \sum C_i$
- Energy: $U = \frac{1}{2}CV^2 = Q^2/(2C)$
- Energy density: $u = \frac{1}{2}\epsilon_0 E^2$
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 20 μF capacitor with $\kappa = 5$ dielectric is charged to $V = 50$ V. Find the stored energy.**

$C = \kappa C_0 = 5(20) = 100$ μF

$U = \frac{1}{2}CV^2 = \frac{1}{2}(100 \times 10^{-6})(2500) = 0.125$ J ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A parallel-plate capacitor has $C = 100$ pF. Inserting a dielectric with $\\\\kappa = 4$ gives:",
                    "options": [
                              "$C = 400$ pF",
                              "$C = 25$ pF",
                              "$C = 100$ pF",
                              "$C = 50$ pF"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$C = \\\\kappa C_0 = 4(100) = 400$ pF."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) $C = 100$ μF, $V = 50$ V. Energy (mJ)?

2) $\kappa = 5$, $C_0 = 20$ μF. New $C$ (μF)?

3) $C_0 = 100$ pF, $\kappa = 4$. New $C$ (pF)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["125","100","400"],
        hint1: "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-4})(2500)$.",
        hint2: "$C = \\kappa C_0$.",
        hint3: "$C = 4(100)$.",
        explanation: "1) $U = 0.125$ J $= 125$ mJ. 2) $5(20) = 100$ μF. 3) $400$ pF."
      }
    },
    {
      id: 'physicsc-em-capacitors-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Capacitors store energy in","options":["Electric fields","Magnetic fields","Gravitational fields","Nuclear forces"]},{"label":"The time constant of an RC circuit is","options":["$\\\\tau = RC$","$\\\\tau = R/C$","$\\\\tau = C/R$","$\\\\tau = R^2C$"]}],
        correctAnswers: ["Electric fields","$\\\\tau = RC$"],
        hint1: "Capacitors deal with electric charges and fields.",
        hint2: "The RC time constant.",
        explanation: "Capacitors store energy in electric fields. The RC time constant is $\\tau = RC$."
      }
    },
    {
      id: 'physicsc-em-capacitors-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Formula |
|---|-------|---------|
| 1 | Capacitance | $C = Q/V$ |
| 2 | Parallel plate | $C = \epsilon_0 A/d$ |
| 3 | Energy storage | $U = \frac{1}{2}CV^2$ |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Capacitors are used in electronic circuits to:",
                    "options": [
                              "Store energy and filter signals",
                              "Generate current",
                              "Create resistance",
                              "Produce magnetic fields"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Capacitors store energy and are essential in filter circuits, timing circuits, and power supplies."
          }
]
      }
    }
  ]
};
