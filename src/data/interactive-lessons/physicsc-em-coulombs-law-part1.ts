export const physCEMCoulombPart1Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p1-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Charge

**Part 1 of 7 — Electric Charge**

- Charge is **quantized**: $q = ne$ where $e = 1.6 \\times 10^{-19}$ C
- Charge is **conserved** in all processes
- Like charges repel, unlike charges attract
- Conductors allow charge flow; insulators do not
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**How many excess electrons on an object with charge $-3.2 \\times 10^{-19}$ C?**

$n = \\frac{q}{e} = \\frac{3.2 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 2$ electrons ✅
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The smallest unit of free charge is:",
                    "options": [
                              "$1.6 \\\\times 10^{-19}$ C",
                              "$1$ C",
                              "$1.6 \\\\times 10^{-9}$ C",
                              "$9.1 \\\\times 10^{-31}$ C"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The elementary charge $e = 1.6 \\\\times 10^{-19}$ C."
          }
]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p1-input',
      type: 'input-boxes' as const,
      content: `
**Electric Charge** 🧮

1) $q = -3.2 \\times 10^{-19}$ C. How many excess electrons?

2) An object has $q = -8.0 \\times 10^{-19}$ C. How many excess electrons?

3) Two spheres: $+5$ μC and $+1$ μC. After touching, each has ____ μC.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","5","3"],
        hint1: "$n = q/e = 3.2 \\times 10^{-19} / 1.6 \\times 10^{-19}$.",
        hint2: "$n = 8.0/1.6$.",
        hint3: "Total charge = $5 + 1 = 6$. Divide by 2.",
        explanation: "1) $n = 2$. 2) $n = 5$. 3) $6/2 = 3$ μC each."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Protons have charge","options":["$+e$","$-e$","$0$","$+2e$"]},{"label":"Charge is conserved means","options":["Total charge in a closed system never changes","Charge can be created","Charge can be destroyed","Charge always increases"]}],
        correctAnswers: ["$+e$","Total charge in a closed system never changes"],
        hint1: "Protons are positive.",
        hint2: "Conservation law definition.",
        explanation: "Protons have charge $+e$. Charge conservation: total charge in a closed system is constant."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Fact |
|---|---------|----------|
| 1 | Elementary charge | $e = 1.6 \\times 10^{-19}$ C |
| 2 | Charge conservation | Total charge is constant |
| 3 | Quantization | Charge comes in integer multiples of $e$ |
    
    `
    },
    {
      id: 'physicsc-em-coulombs-law-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Two identical metal spheres have charges $+6$ μC and $-2$ μC. After touching, each has:",
                    "options": [
                              "$+2$ μC",
                              "$+4$ μC",
                              "$-2$ μC",
                              "$0$ μC"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Total charge = $6 + (-2) = 4$ μC. Divide equally: $4/2 = 2$ μC each."
          }
]
      }
    }
  ]
};
