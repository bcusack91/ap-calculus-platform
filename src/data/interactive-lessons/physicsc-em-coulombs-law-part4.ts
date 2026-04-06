export const physCEMCoulombPart4Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p4-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Field

**Part 4 of 7 — Electric Field**

$\\vec{E} = \\frac{\\vec{F}}{q_0} = k\\frac{q}{r^2}\hat{r}$

- $E$ points away from positive charges, toward negative charges
- SI unit: N/C = V/m
- The electric field is a **vector field**: it has magnitude and direction at every point
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Find $E$ at 0.5 m from a $+4$ μC charge.**

$E = kq/r^2 = (9 \\times 10^9)(4 \\times 10^{-6}) / (0.25) = 144{,}000$ N/C ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Electric field lines point:",
                    "options": [
                              "Away from positive charges",
                              "Toward positive charges",
                              "In circles around charges",
                              "Randomly"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Field lines radiate outward from positive charges and inward toward negative charges."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p4-input',
      type: 'input-boxes' as const,
      content: `
**Electric Field** 🧮

1) If the distance from a charge triples, $E$ decreases by a factor of ___.

2) A charge $q$ in a field $E = 10$ N/C feels $F = 50$ N. What is $q$ (in C)?

3) A $+2$ C charge in a field $E = 10$ N/C. What is the force (N)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["9","5","20"],
        hint1: "$E \\propto 1/r^2$, so factor = $3^2 = 9$.",
        hint2: "$q = F/E$.",
        hint3: "$F = qE$.",
        explanation: "1) $3^2 = 9$. 2) $q = 50/10 = 5$ C. 3) $F = 2(10) = 20$ N."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The SI unit of electric field is","options":["N/C","C/m","J/C","A/m"]},{"label":"A negative charge placed in an electric field moves","options":["Opposite to the field direction","In the field direction","Perpendicular to the field","In a circle"]}],
        correctAnswers: ["N/C","Opposite to the field direction"],
        hint1: "$E = F/q$, so units are N/C.",
        hint2: "$F = qE$. If $q < 0$...",
        explanation: "Electric field units: N/C. Negative charges experience force opposite to $\\vec{E}$."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Point charge field | $E = kq/r^2$ |
| 2 | Force on a charge | $F = qE$ |
| 3 | Superposition of fields | $\\vec{E}_{net} = \sum \\vec{E}_i$ |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If the distance from a point charge triples, the electric field:",
                    "options": [
                              "Decreases to 1/9",
                              "Decreases to 1/3",
                              "Triples",
                              "Increases by 9"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$E \\\\propto 1/r^2$. If $r \\\\to 3r$, $E \\\\to E/9$."
          }
]
      }
    }
  ]
};
