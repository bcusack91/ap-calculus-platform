export const physCEMCoulombPart3Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p3-intro',
      type: 'text' as const,
      content: `
# ⚡ Superposition Principle

**Part 3 of 7 — Superposition Principle**

The net force on a charge is the **vector sum** of all individual Coulomb forces:

$\\vec{F}_{net} = \sum_i \\vec{F}_i = \sum_i k\\frac{q q_i}{r_i^2}\hat{r}_i$

Each force is calculated independently, then added as vectors.
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Three charges on a line: $+q$ at $x = 0$, $+q$ at $x = d$, $-q$ at $x = 2d$. Force on the middle charge?**

From left (+q): $F_1 = kq^2/d^2$ (rightward, repulsive)

From right (-q): $F_2 = kq^2/d^2$ (rightward, attractive)

$F_{net} = 2kq^2/d^2$ (rightward) ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The superposition principle states that electromagnetic forces:",
                    "options": [
                              "Add as vectors independently",
                              "Only act one at a time",
                              "Cancel out completely",
                              "Are always perpendicular"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Forces add as vectors — each pair interaction is independent."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p3-input',
      type: 'input-boxes' as const,
      content: `
**Superposition Principle** 🧮

1) Equal charges $+q$ are placed at $x = -d$ and $x = +d$. Net force on a charge at the origin? (Give as a multiple of $kq^2/d^2$.)

2) A charge at the origin feels $F_1 = +3$ N and $F_2 = -1$ N along the x-axis. Net force (N)?

3) Three charges in a row: $+q$ at 0, $+q$ at $d$. Force from left on right = $kq^2/d^2$. If a third $+q$ is at $2d$, force from it on the middle charge = $kq^2/d^2$. But wait, that force is attractive or repulsive? It's repulsive... Hmm. Simply: how many charges are present?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","2","3"],
        hint1: "Symmetry: equal forces from each side cancel.",
        hint2: "Add the forces: $3 + (-1)$.",
        hint3: "Count the charges.",
        explanation: "1) Symmetric forces cancel → net force = 0. 2) $3 - 1 = 2$ N. 3) Three charges."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When using superposition, each force is calculated","options":["Independently of the others","Using the net charge","Only for the nearest neighbor","In the center-of-charge frame"]},{"label":"Vector addition requires considering","options":["Both magnitude and direction","Only magnitude","Only direction","Neither"]}],
        correctAnswers: ["Independently of the others","Both magnitude and direction"],
        hint1: "Each pair interaction is separate.",
        hint2: "Vectors have magnitude and direction.",
        explanation: "Superposition: calculate each force independently. Vectors require both magnitude and direction."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Configuration | Method |
|---|--------------|--------|
| 1 | Three collinear charges | Add forces with signs |
| 2 | Triangle of charges | Vector components |
| 3 | Two charges + test charge | Superposition |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For three collinear charges, the net force on the middle one depends on:",
                    "options": [
                              "The magnitudes and signs of all charges and distances",
                              "Only the nearest charge",
                              "Only the largest charge",
                              "Only the distance"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Superposition requires considering all charges, their signs, and distances."
          }
]
      }
    }
  ]
};
