export const physCEMCapacitorsPart6Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p6-intro',
      type: 'text' as const,
      content: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Capacitor Problem Strategy
1. Identify the capacitor configuration (series, parallel, or single)
2. Determine if a battery is connected or disconnected
3. Apply $Q = CV$ and energy formulas
4. For dielectrics, multiply $C$ by $\kappa$
5. Use energy density $u = \frac{1}{2}\epsilon_0 E^2$ for field energy problems
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Three capacitors: 2 μF, 3 μF in series, then that combination in parallel with 5 μF. $V = 12$ V. Find total charge.**

Series: $1/C_s = 1/2 + 1/3 = 5/6$, $C_s = 1.2$ μF

Parallel: $C_{eq} = 1.2 + 5 = 6.2$ μF

$Q = C_{eq}V = 6.2 \times 12 = 74.4$ μC ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "When two charged capacitors are connected, total charge is:",
                    "options": [
                              "Conserved",
                              "Doubled",
                              "Halved",
                              "Lost"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Charge is always conserved. When capacitors are connected, charge redistributes but the total stays the same."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem-Solving Workshop** 🧮

1) 2 μF and 3 μF in series → 1.2 μF. In parallel with 5 μF → $C_{eq}$ (μF)? (Round to nearest integer.)

2) $C_{eq} = 6.2$ μF, $V = 12$ V. $Q$ (μC)? (Round to nearest integer.)

3) $C = 10$ μF, $V = 100$ V. Energy (mJ)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","74","50"],
        hint1: "$1.2 + 5 = 6.2 \\approx 6$ μF.",
        hint2: "$Q = CV = 6.2(12) \\approx 74$ μC.",
        hint3: "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05$ J.",
        explanation: "1) $\\approx 6$ μF. 2) $\\approx 74$ μC. 3) $50$ mJ."
      }
    },
    {
      id: 'physicsc-em-capacitors-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"In a series combination, the capacitor with the smallest $C$","options":["Has the largest voltage","Has the smallest voltage","Has the most charge","Has no voltage"]},{"label":"When two capacitors are connected together (no battery), energy is","options":["Generally lost (to heat)","Conserved exactly","Doubled","Created"]}],
        correctAnswers: ["Has the largest voltage","Generally lost (to heat)"],
        hint1: "Same $Q$ in series, $V = Q/C$.",
        hint2: "Charge is conserved, but some energy becomes heat.",
        explanation: "In series, same $Q$ everywhere, so smallest $C$ has largest $V = Q/C$. Energy is generally lost when capacitors share charge."
      }
    },
    {
      id: 'physicsc-em-capacitors-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Configuration | Key Step |
|---|--------------|----------|
| 1 | Series-parallel | Simplify step by step |
| 2 | With dielectric | Multiply $C$ by $\kappa$ |
| 3 | Energy sharing | Two capacitors connected |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "When simplifying a circuit with series and parallel capacitors, start by:",
                    "options": [
                              "Identifying which caps are in series or parallel",
                              "Adding all capacitances",
                              "Ignoring the smallest capacitor",
                              "Removing the battery"
                    ],
                    "correctAnswer": 0,
                    "explanation": "First identify series and parallel groupings, then simplify step by step."
          }
]
      }
    }
  ]
};
