export const physCEMCapacitorsPart5Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p5-intro',
      type: 'text' as const,
      content: `
# ⚡ Dielectrics

**Part 5 of 7 — Dielectrics**

Inserting a dielectric (insulating material) between plates:

$C = \\kappa C_0 = \\frac{\\kappa \epsilon_0 A}{d}$

where $\\kappa$ (kappa) is the **dielectric constant** ($\\kappa > 1$).

Effects of a dielectric (battery disconnected):
- $C$ increases by factor $\\kappa$
- $V$ decreases by factor $\\kappa$
- $E$ decreases by factor $\\kappa$
- $Q$ stays the same
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 5 μF capacitor has a dielectric with $\\kappa = 3$ inserted. New capacitance?**

$C = \\kappa C_0 = 3 \\times 5 = 15$ μF ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A dielectric always:",
                    "options": [
                              "Increases the capacitance",
                              "Decreases the capacitance",
                              "Has no effect",
                              "Makes $C = 0$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\kappa > 1$, so $C = \\\\kappa C_0 > C_0$. Capacitance always increases."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p5-input',
      type: 'input-boxes' as const,
      content: `
**Dielectrics** 🧮

1) $C_0 = 5$ μF, $\\kappa = 3$. New $C$ (μF)?

2) A dielectric triples the capacitance. What is $\\kappa$?

3) $C_0 = 10$ μF. A dielectric with $\\kappa = 2$ is inserted. Capacitor is charged to $Q = 100$ μC (battery disconnected). $V = Q/C$ (V)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["15","3","5"],
        hint1: "$C = \\kappa C_0$.",
        hint2: "$\\kappa = C/C_0 = 3C_0/C_0$.",
        hint3: "$C = 2(10) = 20$ μF. $V = 100/20$.",
        explanation: "1) $C = 3(5) = 15$ μF. 2) $\\kappa = 3$. 3) $V = 100/20 = 5$ V."
      }
    },
    {
      id: 'physicsc-em-capacitors-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Common dielectric materials include","options":["Glass, paper, plastic","Metal, copper, iron","Air only","Water only"]},{"label":"The dielectric constant $\\\\kappa$ is always","options":["Greater than or equal to 1","Less than 1","Negative","Zero"]}],
        correctAnswers: ["Glass, paper, plastic","Greater than or equal to 1"],
        hint1: "Dielectrics are insulators.",
        hint2: "$\\kappa = 1$ for vacuum (minimum value).",
        explanation: "Dielectrics are insulators like glass, paper, plastic. $\\kappa \\geq 1$ always (vacuum = 1)."
      }
    },
    {
      id: 'physicsc-em-capacitors-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Effect |
|---|----------|--------|
| 1 | Insert dielectric (battery disconnected) | $C \\uparrow$, $V \\downarrow$ |
| 2 | Insert dielectric (battery connected) | $C \\uparrow$, $Q \\uparrow$ |
| 3 | Remove dielectric (battery disconnected) | $C \\downarrow$, $V \\uparrow$ |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "With a dielectric inserted (battery disconnected), the electric field:",
                    "options": [
                              "Decreases",
                              "Increases",
                              "Stays the same",
                              "Becomes zero"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The dielectric polarizes and opposes the applied field, reducing $E$ by factor $\\\\kappa$."
          }
]
      }
    }
  ]
};
