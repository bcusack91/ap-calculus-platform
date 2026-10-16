export const physCEMCapacitorsPart4Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p4-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Stored in Capacitors

**Part 4 of 7 — Energy Stored**

$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$

The energy is stored in the **electric field** between the plates.

**Why the $\\frac{1}{2}$?** The stored energy equals the work done to separate the charge. Moving a small charge $dq$ across a capacitor already at $V = q/C$ takes $dW = (q/C)\\,dq$, so
$U = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{Q^2}{2C}$
The battery delivers $QV$, but early charge crosses a small potential difference, so only half of $QV$ ends up stored.
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 10 μF capacitor is charged to 100 V. Energy stored?**

$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(10000) = 0.05$ J ✅
    
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
                    "explanation": "$U = \\frac{1}{2}CV^2$. If $V \\to 2V$, $U \\to 4U$."
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

3) $C = 4$ μF, $V = 10$ V. $U = \\frac{1}{2}(4)(100) = ?$ μJ
    
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
        dropdowns: [{"label":"The energy stored in a capacitor equals","options":["The work done to separate its charges","The charge times the full battery voltage","The heat produced while it charges","The power delivered by the battery"]},{"label":"Three equivalent formulas for capacitor energy use","options":["$C$ and $V$; $Q$ and $C$; $Q$ and $V$","$C$ and $V$ only; the others are not equivalent","$Q$ and $V$ only; the others are not equivalent","$Q$ and $C$ only; the others are not equivalent"]}],
        correctAnswers: ["The work done to separate its charges","$C$ and $V$; $Q$ and $C$; $Q$ and $V$"],
        hint1: "$U = \\int_0^Q (q/C)\\,dq$.",
        hint2: "$U = \\frac{1}{2}CV^2 = Q^2/(2C) = \\frac{1}{2}QV$.",
        explanation: "The stored energy is the work done to separate the charge, $\\int_0^Q (q/C)\\,dq$, which is half of $QV$. Three forms: $\\frac{1}{2}CV^2$, $Q^2/(2C)$, $\\frac{1}{2}QV$."
      }
    },
    {
      id: 'physicsc-em-capacitors-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Known | Formula |
|---|-------|---------|
| 1 | $C$, $V$ | $U = \\frac{1}{2}CV^2$ |
| 2 | $Q$, $C$ | $U = Q^2/(2C)$ |
| 3 | $Q$, $V$ | $U = \\frac{1}{2}QV$ |
    
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
                              "The moving charges on the plates",
                              "The current in the wires",
                              "The battery's chemical bonds"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Separating the charge builds up the electric field between the plates, and the stored energy $U = \\frac{1}{2}QV$ is held there; the charges are at rest and no current flows once charged."
          }
]
      }
    }
  ]
};
