export const physCEMGaussPart2Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p2-intro',
      type: 'text' as const,
      content: `
# ⚡ Gauss's Law

**Part 2 of 7 — Gauss's Law Statement**

$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\epsilon_0}$

The total electric flux through any closed surface equals the enclosed charge divided by $\epsilon_0$.

- $\epsilon_0 = 8.85 \\times 10^{-12}$ $C^{2}/(N\\cdot m^{2})$
- The surface is called a **Gaussian surface**
- It is most useful when the charge distribution has symmetry
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A Gaussian surface encloses $Q = 5 \\times 10^{-9}$ C. Find the total flux.**

$\\Phi = Q/\epsilon_0 = 5 \\times 10^{-9} / 8.85 \\times 10^{-12} \\approx 565$ $N\\cdot m^{2}/C$ ✅
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Gauss's law relates electric flux to:",
                    "options": [
                              "Enclosed charge",
                              "Total charge in the universe",
                              "Electric field strength",
                              "Magnetic flux"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\Phi = Q_{enc}/\\\\epsilon_0$. Only the enclosed charge matters."
          }
]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p2-input',
      type: 'input-boxes' as const,
      content: `
**Gauss's Law** 🧮

1) A Gaussian surface encloses no charge. Net flux $(N\\cdot m^{2}/C)$?

2) A Gaussian surface encloses $Q = 5$ nC. $\\Phi \\approx ?$ $N\\cdot m^{2}/C$. (Use $\epsilon_0 \\approx 8.85 \\times 10^{-12}$. Round to nearest integer.)

3) Charges of $+3q$ and $-q$ are inside a Gaussian surface. The net enclosed charge is ___ $q$.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","565","2"],
        hint1: "No charge enclosed → zero flux.",
        hint2: "$5 \\times 10^{-9} / 8.85 \\times 10^{-12} \\approx 565$.",
        hint3: "$3q + (-q) = 2q$.",
        explanation: "1) $\\Phi = 0$. 2) $\\approx 565$ $N\\cdot m^{2}/C$. 3) $3q - q = 2q$."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A Gaussian surface is","options":["An imaginary closed surface","A physical boundary","A conducting shell","A charged sphere"]},{"label":"Gauss's law is most useful when there is","options":["High symmetry","No symmetry","Only one charge","Zero enclosed charge"]}],
        correctAnswers: ["An imaginary closed surface","High symmetry"],
        hint1: "Gaussian surfaces are mathematical constructs.",
        hint2: "Symmetry allows us to take $E$ out of the integral.",
        explanation: "Gaussian surfaces are imaginary (mathematical). Gauss's law is most useful with symmetrical charge distributions."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Fact |
|---|---------|----------|
| 1 | Gauss's law | $\\Phi = Q_{enc}/\epsilon_0$ |
| 2 | No enclosed charge | $\\Phi = 0$ |
| 3 | Symmetry types | Spherical, cylindrical, planar |
    
    `
    },
    {
      id: 'physicsc-em-gauss-law-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If no charge is enclosed by a Gaussian surface, the net flux is:",
                    "options": [
                              "Zero",
                              "$\\\\epsilon_0$",
                              "Infinite",
                              "Depends on the surface"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$Q_{enc} = 0 \\\\implies \\\\Phi = 0$. Field lines that enter must also exit."
          }
]
      }
    }
  ]
};
