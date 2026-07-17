export const physCEMGaussPart5Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p5-intro',
      type: 'text' as const,
      content: `
# ⚡ Planar Symmetry

**Part 5 of 7 — Planar Symmetry**

For an infinite plane of surface charge density $\\sigma$ $(C/m^{2})$:

$E = \\frac{\\sigma}{2\epsilon_0}$

- The field is **uniform** (independent of distance!)
- Points away from a positive sheet on both sides
- For a conductor's surface: $E = \\sigma/\epsilon_0$ (charge on one side only)
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**An infinite sheet has $\\sigma = 4 \\times 10^{-9}$ $C/m^{2}$. Find $E$.**

$E = \\sigma/(2\epsilon_0) = 4 \\times 10^{-9}/(2 \\times 8.85 \\times 10^{-12}) \\approx 226$ N/C ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The electric field of an infinite sheet of charge is:",
                    "options": [
                              "Uniform (constant with distance)",
                              "Inverse-square",
                              "Inversely proportional to distance",
                              "Zero"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$E = \\\\sigma/(2\\\\epsilon_0)$ — independent of distance from the sheet."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p5-input',
      type: 'input-boxes' as const,
      content: `
**Planar Symmetry** 🧮

1) $\\sigma = 4 \\times 10^{-9}$ $C/m^{2}$. $E$ (N/C)? (round to nearest integer, $\epsilon_0 \\approx 8.85 \\times 10^{-12}$)

2) A conducting surface has $E = \\sigma/\epsilon_0$. This is ___ times the field of a single sheet. (Give as integer.)

3) Two infinite sheets $+\\sigma$ and $-\\sigma$: field outside (N/C)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["226","2","0"],
        hint1: "$E = \\sigma/(2\\epsilon_0)$.",
        hint2: "$\\sigma/\\epsilon_0$ vs $\\sigma/(2\\epsilon_0)$.",
        hint3: "Fields cancel outside parallel plates.",
        explanation: "1) $4 \\times 10^{-9}/(2 \\times 8.85 \\times 10^{-12}) \\approx 226$. 2) Factor of 2. 3) Fields cancel → 0 outside."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A Gaussian \"pillbox\" surface is used for","options":["Planar symmetry","Spherical symmetry","Cylindrical symmetry","No symmetry"]},{"label":"The field of an infinite plane does NOT depend on","options":["Distance from the plane","Surface charge density","The permittivity constant","Any of these"]}],
        correctAnswers: ["Planar symmetry","Distance from the plane"],
        hint1: "A thin flat cylinder (pillbox) matches a plane.",
        hint2: "$E = \\sigma/(2\\epsilon_0)$: no $r$ in the formula.",
        explanation: "A pillbox is used for planar symmetry. $E = \\sigma/(2\\epsilon_0)$ is independent of distance."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Configuration | Field |
|---|--------------|-------|
| 1 | Single infinite sheet | $\\sigma/(2\epsilon_0)$ |
| 2 | Conducting surface | $\\sigma/\epsilon_0$ |
| 3 | Two parallel sheets | Superposition |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Between two parallel plates with equal and opposite charge densities $\\\\pm\\\\sigma$:",
                    "options": [
                              "$E = \\\\sigma/\\\\epsilon_0$ between, $0$ outside",
                              "$E = 0$ everywhere",
                              "$E = \\\\sigma/(2\\\\epsilon_0)$ everywhere",
                              "$E$ varies with distance"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Fields add between the plates and cancel outside."
          }
]
      }
    }
  ]
};
