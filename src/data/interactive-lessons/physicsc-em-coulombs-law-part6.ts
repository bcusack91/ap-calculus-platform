export const physCEMCoulombPart6Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p6-intro',
      type: 'text' as const,
      content: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Strategy for Electrostatics
1. Draw a diagram with all charges and distances
2. For forces: apply Coulomb's law to each pair
3. For fields: find $\vec{E}$ from each charge, then superpose
4. Use symmetry to simplify
5. Set up coordinate system and resolve vectors
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Two charges $+3$ μC and $-3$ μC are 0.4 m apart. Find the field at the midpoint.**

Both fields point from $+$ to $-$ (same direction at midpoint).

$E_{each} = k(3 \times 10^{-6})/(0.2)^2 = 675{,}000$ N/C

$E_{total} = 2 \times 675{,}000 = 1{,}350{,}000$ N/C (toward $-$ charge) ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "At the midpoint of a dipole ($+q$ and $-q$), the electric field:",
                    "options": [
                              "Points from $+q$ to $-q$ (nonzero)",
                              "Is zero",
                              "Points from $-q$ to $+q$",
                              "Depends on the distance"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Both fields point from $+$ toward $-$ at the midpoint, so they add up."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem-Solving Workshop** 🧮

1) Two identical charges $+q$ are equidistant from a point P, on opposite sides. Net field at P? (units of $kq/r^2$)

2) $F = kq_1q_2/r^2$. If $k = 9 \times 10^9$, $q_1 = q_2 = 2 \times 10^{-6}$ C, $r = 1$ m. $F$ (N)? (Give as integer in mN, i.e., $\times 10^{-3}$)

3) If the distance between charges is halved, force increases by a factor of ___
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","36","4"],
        hint1: "Equal and opposite fields cancel at P.",
        hint2: "$F = 9 \\times 10^9 \\times 4 \\times 10^{-12} / 1 = 36 \\times 10^{-3}$ N = 36 mN.",
        hint3: "$F \\propto 1/r^2$.",
        explanation: "1) Fields are equal and opposite, so net field = 0. 2) $F = 0.036$ N $= 36$ mN. 3) $(r/2)^2 = r^2/4$, so $F$ increases by 4."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When solving for the equilibrium position of a test charge, you set","options":["Net force equal to zero","Net force equal to $mg$","Velocity equal to zero","Energy equal to zero"]},{"label":"Symmetry in charge distributions helps by","options":["Canceling certain force components","Eliminating all forces","Making all charges equal","Removing electric fields"]}],
        correctAnswers: ["Net force equal to zero","Canceling certain force components"],
        hint1: "Equilibrium = zero net force.",
        hint2: "Symmetric arrangements often cancel certain vector components.",
        explanation: "Equilibrium: net force = 0. Symmetry can cancel components, simplifying calculations."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem Type | Strategy |
|---|-------------|----------|
| 1 | Midpoint field (dipole) | Fields add (both point same way) |
| 2 | Equilibrium position | Set $F_1 = F_2$, solve for $r$ |
| 3 | Force between three charges | Superposition |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For a charge to be in equilibrium between two positive charges, it must be:",
                    "options": [
                              "At the midpoint (if charges are equal)",
                              "Closer to the larger charge",
                              "Outside the two charges",
                              "At infinity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "By symmetry, equal charges create zero net force at the midpoint."
          }
]
      }
    }
  ]
};
