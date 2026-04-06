export const physCEMCapacitorsPart2Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p2-intro',
      type: 'text' as const,
      content: `
# ⚡ Parallel-Plate Capacitors

**Part 2 of 7 — Parallel-Plate Capacitors**

$C = \\frac{\epsilon_0 A}{d}$

where $A$ = plate area, $d$ = plate separation.

- Electric field between plates: $E = V/d = \sigma/\epsilon_0$
- Field is uniform between the plates
- Increasing $A$ or decreasing $d$ increases $C$
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Plates: $A = 0.01$ m², $d = 0.001$ m. Find $C$.**

$C = \epsilon_0 A/d = 8.85 \\times 10^{-12} \\times 0.01 / 0.001 = 88.5$ pF ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If the plate separation is doubled, capacitance:",
                    "options": [
                              "Halves",
                              "Doubles",
                              "Quadruples",
                              "Stays the same"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$C = \\\\epsilon_0 A/d$. If $d \\\\to 2d$, then $C \\\\to C/2$."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p2-input',
      type: 'input-boxes' as const,
      content: `
**Parallel-Plate Capacitors** 🧮

1) Plate area is doubled, $d$ unchanged. $C$ increases by factor ___

2) Plate area is doubled and $d$ is halved. $C$ increases by factor ___

3) $V = 10$ V, $d = 0.01$ m. $E$ between the plates (V/m)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","4","1000"],
        hint1: "$C = \\epsilon_0 A/d$. $A \\to 2A$.",
        hint2: "$A \\to 2A$, $d \\to d/2$. Factor = $2 \\times 2$.",
        hint3: "$E = V/d$.",
        explanation: "1) Factor of 2. 2) Factor of 4. 3) $E = 10/0.01 = 1000$ V/m."
      }
    },
    {
      id: 'physicsc-em-capacitors-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The formula for a parallel-plate capacitor is","options":["$C = \\\\epsilon_0 A / d$","$C = \\\\epsilon_0 d / A$","$C = A d / \\\\epsilon_0$","$C = Q^2 / (2\\\\epsilon_0)$"]},{"label":"To maximize capacitance, use","options":["Large area, small separation","Small area, large separation","Small area, small separation","Large area, large separation"]}],
        correctAnswers: ["$C = \\\\epsilon_0 A / d$","Large area, small separation"],
        hint1: "$C$ increases with $A$ and decreases with $d$.",
        hint2: "$C = \\epsilon_0 A/d$: maximize $A$, minimize $d$.",
        explanation: "$C = \\epsilon_0 A/d$. Maximize: large $A$, small $d$."
      }
    },
    {
      id: 'physicsc-em-capacitors-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Change | Effect on $C$ |
|---|--------|--------------|
| 1 | Double $A$ | $C$ doubles |
| 2 | Double $d$ | $C$ halves |
| 3 | Both double | $C$ stays same |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The electric field between parallel plates is:",
                    "options": [
                              "Uniform",
                              "Inversely proportional to $r$",
                              "Inversely proportional to $r^2$",
                              "Zero"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Between parallel plates, $E = V/d$ is uniform (constant everywhere between the plates)."
          }
]
      }
    }
  ]
};
