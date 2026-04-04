export const physCEMCapacitorsPart1Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p1-intro',
      type: 'text' as const,
      content: `
# ⚡ Capacitance

**Part 1 of 7 — Capacitance**

$C = \frac{Q}{V}$

- Capacitance is the ratio of stored charge to voltage
- SI unit: **Farad** (F) = C/V
- Typical values: μF, nF, pF
- Capacitance depends on geometry, not on $Q$ or $V$
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A capacitor stores $6 \times 10^{-6}$ C at 3 V. Find $C$.**

$C = Q/V = 6 \times 10^{-6} / 3 = 2 \times 10^{-6}$ F $= 2$ μF ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The SI unit of capacitance is:",
                    "options": [
                              "Farad (F)",
                              "Coulomb (C)",
                              "Volt (V)",
                              "Ohm (Ω)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Capacitance is measured in Farads: $1$ F $= 1$ C/V."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p1-input',
      type: 'input-boxes' as const,
      content: `
**Capacitance** 🧮

1) $Q = 6$ μC, $V = 3$ V. $C$ (μF)?

2) $C = 4$ μF, $V = 3$ V. $Q$ (μC)?

3) $C = 2$ μF, $Q = 10$ μC. $V$ (V)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","12","5"],
        hint1: "$C = Q/V$.",
        hint2: "$Q = CV$.",
        hint3: "$V = Q/C$.",
        explanation: "1) $C = 6/3 = 2$ μF. 2) $Q = 4(3) = 12$ μC. 3) $V = 10/2 = 5$ V."
      }
    },
    {
      id: 'physicsc-em-capacitors-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A larger capacitance stores","options":["More charge at the same voltage","Less charge at the same voltage","No charge","Infinite charge"]},{"label":"1 Farad equals","options":["1 Coulomb per Volt","1 Volt per Coulomb","1 Ampere per Volt","1 Joule per Coulomb"]}],
        correctAnswers: ["More charge at the same voltage","1 Coulomb per Volt"],
        hint1: "$Q = CV$. Larger $C$ means...",
        hint2: "$C = Q/V$, so Farads = ...",
        explanation: "$Q = CV$: larger $C$ stores more charge. $1$ F $= 1$ C/V."
      }
    },
    {
      id: 'physicsc-em-capacitors-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Known | Find |
|---|-------|------|
| 1 | $Q$, $V$ | $C$ |
| 2 | $C$, $V$ | $Q$ |
| 3 | $C$, $Q$ | $V$ |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Capacitance depends on:",
                    "options": [
                              "Geometry (plate area, separation, dielectric)",
                              "Applied voltage",
                              "Stored charge",
                              "Current flow"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Capacitance is a geometric property — it depends on plate area, separation, and dielectric material."
          }
]
      }
    }
  ]
};
