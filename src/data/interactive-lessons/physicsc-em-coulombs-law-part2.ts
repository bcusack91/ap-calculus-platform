export const physCEMCoulombPart2Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p2-intro',
      type: 'text' as const,
      content: `
# ⚡ Coulomb's Law

**Part 2 of 7 — Coulomb's Law**

$F = k\\frac{|q_1||q_2|}{r^2}$

where $k = 8.99 \\times 10^9$ $N\\cdot m^{2}/C^{2}$ $= \\frac{1}{4\\pi\\epsilon_0}$

- Force is along the line connecting the charges
- Attractive for opposite charges, repulsive for like charges
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Two $+2$ μC charges are 0.3 m apart. Find the force.**

$F = k\\frac{q_1 q_2}{r^2} = (9 \\times 10^9)\\frac{(2 \\times 10^{-6})^2}{(0.3)^2}$

$= (9 \\times 10^9)\\frac{4 \\times 10^{-12}}{0.09} = 0.4$ N (repulsive) ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If the distance between two charges doubles, the force:",
                    "options": [
                              "Decreases to 1/4",
                              "Decreases to 1/2",
                              "Doubles",
                              "Quadruples"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$F \\\\propto 1/r^2$. If $r \\\\to 2r$, $F \\\\to F/4$."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-input',
      type: 'input-boxes' as const,
      content: `
**Coulomb's Law** 🧮

1) If the distance between two charges is halved, the force increases by a factor of ___

2) Two $+1$ μC charges are 0.1 m apart. $F = k(10^{-12})/(0.01) = 9 \\times 10^9 \\times 10^{-10}$ = ____ N. (Give the answer as a decimal.)

3) The Coulomb constant $k$ is approximately ____ $\\times 10^9$ $N\\cdot m^{2}/C^{2}$.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","0.9","9"],
        hint1: "$F \\propto 1/r^2$. If $r \\to r/2$, $F \\to F \\times 4$.",
        hint2: "Calculate step by step.",
        hint3: "$k = 8.99 \\times 10^9$, round to nearest integer.",
        explanation: "1) Factor of 4. 2) $9 \\times 10^9 \\times 10^{-10} = 0.9$ N. 3) $k \\approx 9 \\times 10^9$."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Two positive charges experience a force that is","options":["Repulsive","Attractive","Zero","Perpendicular"]},{"label":"Coulomb's law applies to","options":["Point charges","Extended objects only","Magnetic poles","Gravitational fields"]}],
        correctAnswers: ["Repulsive","Point charges"],
        hint1: "Like charges...",
        hint2: "The law is derived for point charges.",
        explanation: "Like charges repel. Coulomb's law is strictly for point charges (or can be applied to spherical charge distributions)."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Charges | Distance |
|---|---------|----------|
| 1 | $+1$ μC, $-1$ μC | 0.1 m |
| 2 | $+3$ μC, $+3$ μC | 0.3 m |
| 3 | $+2$ μC, $-4$ μC | 0.2 m |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Coulomb's law has the same mathematical form as:",
                    "options": [
                              "Newton's Law of Gravitation",
                              "Newton's Second Law",
                              "Ohm's Law",
                              "Hooke's Law"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Both are inverse-square laws: $F \\\\propto 1/r^2$."
          }
]
      }
    }
  ]
};
