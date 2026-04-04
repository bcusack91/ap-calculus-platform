export const physCEMCapacitorsPart4Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p4-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Stored in Capacitors

**Part 4 of 7 — Energy Stored**

$U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV$

The energy is stored in the **electric field** between the plates.

Energy density: $u = \frac{1}{2}\epsilon_0 E^2$ (J/m³)
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 10 μF capacitor is charged to 100 V. Energy stored?**

$U = \frac{1}{2}CV^2 = \frac{1}{2}(10 \times 10^{-6})(10000) = 0.05$ J ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If the voltage across a capacitor doubles, the stored energy:",
                    "options": [
                              "Quadruples",
                              "Doubles",
                              "Halves",
                              "Stays the same"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$U = \\\\frac{1}{2}CV^2$. If $V \\\\to 2V$, $U \\\\to 4U$."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p4-input',
      type: 'input-boxes' as const,
      content: `
**Energy Stored** 🧮

1) $C = 10$ μF, $V = 100$ V. Energy (mJ)?

2) $V$ is doubled while $C$ stays the same. Energy increases by a factor of ___

3) $C = 4$ μF, $V = 10$ V. $U = \frac{1}{2}(4)(100) = ?$ μJ
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","4","200"],
        hint1: "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(10^4) = 0.05$ J $= 50$ mJ.",
        hint2: "$U \\propto V^2$.",
        hint3: "$U = \\frac{1}{2}(4 \\times 10^{-6})(100) = 200 \\times 10^{-6}$ J $= 200$ μJ.",
        explanation: "1) 50 mJ. 2) Factor of 4. 3) 200 μJ."
      }
    },
    {
      id: 'physicsc-em-capacitors-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Energy density of the electric field is","options":["$\\\\frac{1}{2}\\\\epsilon_0 E^2$","$\\\\epsilon_0 E$","$\\\\frac{1}{2}\\\\epsilon_0 E$","$\\\\epsilon_0 E^2$"]},{"label":"Three equivalent formulas for capacitor energy use","options":["$C$ and $V$; $Q$ and $C$; $Q$ and $V$","Only $C$ and $V$","Only $Q$ and $V$","Only $Q$ and $C$"]}],
        correctAnswers: ["$\\\\frac{1}{2}\\\\epsilon_0 E^2$","$C$ and $V$; $Q$ and $C$; $Q$ and $V$"],
        hint1: "Energy per unit volume in an E field.",
        hint2: "$U = \\frac{1}{2}CV^2 = Q^2/(2C) = \\frac{1}{2}QV$.",
        explanation: "Energy density: $u = \\frac{1}{2}\\epsilon_0 E^2$. Three forms: $\\frac{1}{2}CV^2$, $Q^2/(2C)$, $\\frac{1}{2}QV$."
      }
    },
    {
      id: 'physicsc-em-capacitors-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Known | Formula |
|---|-------|---------|
| 1 | $C$, $V$ | $U = \frac{1}{2}CV^2$ |
| 2 | $Q$, $C$ | $U = Q^2/(2C)$ |
| 3 | $Q$, $V$ | $U = \frac{1}{2}QV$ |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The energy in a capacitor is stored in:",
                    "options": [
                              "The electric field between the plates",
                              "The plates themselves",
                              "The wires",
                              "The battery"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Energy is stored in the electric field: $u = \\\\frac{1}{2}\\\\epsilon_0 E^2$ per unit volume."
          }
]
      }
    }
  ]
};
