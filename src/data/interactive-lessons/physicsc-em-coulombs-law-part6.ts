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
3. For fields: find $\\vec{E}$ from each charge, then superpose
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

$E_{each} = k(3 \\times 10^{-6})/(0.2)^2 = 675\\,000$ N/C

$E_{total} = 2 \\times 675\\,000 = 1\\,350\\,000$ N/C (toward $-$ charge) ✅
    
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
                    "question": "At the midpoint between equal and opposite charges $+q$ and $-q$, the electric field:",
                    "options": [
                              "Points toward $-q$",
                              "Points toward $+q$",
                              "Is zero by symmetry",
                              "Is perpendicular to the line"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The field of $+q$ points away from it and the field of $-q$ points toward it, so at the midpoint both point toward $-q$ and add; they cancel only for two like charges."
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

2) $F = kq_1q_2/r^2$. If $k = 9 \\times 10^9$, $q_1 = q_2 = 2 \\times 10^{-6}$ C, $r = 1$ m. $F$ (N)? (Give as integer in mN, i.e., $\\times 10^{-3}$)

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
        dropdowns: [{"label":"When solving for the equilibrium position of a test charge, you set","options":["Net force equal to zero","Net force equal to $mg$","Velocity equal to zero","Energy equal to zero"]},{"label":"Symmetry in charge distributions helps by","options":["Canceling some field components","Canceling every field component","Making the charges equal","Making the distances equal"]}],
        correctAnswers: ["Net force equal to zero","Canceling some field components"],
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
| 1 | Midpoint field (opposite charges) | Fields add (both point same way) |
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
                    "question": "A small charge sits on the line between two equal positive charges. Where on that segment is the net electric force on it zero?",
                    "options": [
                              "At the midpoint",
                              "Closer to either charge",
                              "Only outside the pair of charges",
                              "At no point on the segment"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Equal charges at equal distances exert equal and opposite forces, so the net force is zero exactly at the midpoint and nowhere else between them."
          }
]
      }
    }
  ]
};
