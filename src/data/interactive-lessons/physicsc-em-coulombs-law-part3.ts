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

$\\vec{F}_{net} = \\sum_i \\vec{F}_i = \\sum_i k\\frac{q q_i}{r_i^2}\\hat{r}_i$

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
                              "Add as independent vectors",
                              "Add as scalars, ignoring their directions",
                              "Act only between the two nearest charges",
                              "Weaken each other when several are present"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Each pair force is found as if the other charges were absent, and the results add as vectors; other charges neither block nor weaken a pair force."
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

3) A charge $+q$ is at $x = 0$ and a charge $+4q$ is at $x = 3d$. At what position between them is the net force on a small test charge zero? (Give $x$ as a multiple of $d$.)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","2","3"],
        hint1: "Symmetry: equal forces from each side cancel.",
        hint2: "Add the forces: $3 + (-1)$.",
        hint3: "Set $kq/x^2 = k(4q)/(3d - x)^2$ and take square roots.",
        explanation: "1) Symmetric forces cancel → net force = 0. 2) $3 - 1 = 2$ N. 3) $3d - x = 2x$, so $x = d$: the zero-force point sits closer to the smaller charge."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When using superposition, each force is calculated","options":["Independently of the others","From the total charge only","For the nearest charge only","After the charges move apart"]},{"label":"Vector addition requires considering","options":["Magnitude and direction","Magnitude alone","Direction alone","The sign of the charge alone"]}],
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
                              "Every charge's sign, magnitude and distance",
                              "Only the magnitudes of the charges",
                              "Only the charge nearest to it",
                              "Only the largest charge and its distance"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Superposition adds a force from every other charge; each one's size depends on its magnitude and distance, and its direction depends on its sign."
          }
]
      }
    }
  ]
};
