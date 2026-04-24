export const physCWorkEnergyPart2Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p2-intro',
      type: 'text' as const,
      content: `
# ⚛️ Work-Kinetic Energy Theorem

**Part 2 of 7 — Kinetic Energy Theorem**

$W_{\\text{net}} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$

The net work done on an object equals its change in kinetic energy.
    
    `
    },
    {
      id: 'physicsc-work-energy-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 3 kg object accelerates from 2 m/s to 6 m/s. Find the net work done.**

$W = \\frac{1}{2}(3)(36) - \\frac{1}{2}(3)(4) = 54 - 6 = 48$ J ✅
    
    `
    },
    {
      id: 'physicsc-work-energy-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If the speed of an object doubles, its kinetic energy:",
                    "options": [
                              "Quadruples",
                              "Doubles",
                              "Halves",
                              "Stays the same"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$KE = \\\\frac{1}{2}mv^2$. If $v \\\\to 2v$, $KE \\\\to 4 \\\\times \\\\frac{1}{2}mv^2$."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p2-input',
      type: 'input-boxes' as const,
      content: `
**Kinetic Energy Theorem** 🧮

1) A 3 kg object goes from 2 m/s to 6 m/s. Net work done (J)?

2) $KE = \\frac{1}{2}(4)(5^2) = ?$ J

3) A 2 kg object has $KE = 25$ J. What is its speed (m/s)? (Hint: $v = \\sqrt{2 \\cdot KE/m}$)

    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["48","50","25"],
        hint1: "$W = \\frac{1}{2}m(v_f^2 - v_i^2) = \\frac{1}{2}(3)(36-4)$.",
        hint2: "$\\frac{1}{2}(4)(25)$.",
        hint3: "$v = \\sqrt{2(25)/2} = \\sqrt{25}$.",
        explanation: "1) $\\frac{1}{2}(3)(32) = 48$ J. 2) $\\frac{1}{2}(4)(25) = 50$ J. 3) $v = \\sqrt{50/2} = \\sqrt{25} = 5$ m/s."
      }
    },
    {
      id: 'physicsc-work-energy-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The work-energy theorem relates net work to change in","options":["Kinetic energy","Potential energy","Temperature","Momentum"]},{"label":"Kinetic energy is always","options":["Non-negative","Negative","Zero","Imaginary"]}],
        correctAnswers: ["Kinetic energy","Non-negative"],
        hint1: "The theorem has \"kinetic energy\" in its name.",
        hint2: "$KE = \\frac{1}{2}mv^2$. Can $m$ or $v^2$ be negative?",
        explanation: "Work-energy theorem: $W = \\Delta KE$. Since $m > 0$ and $v^2 \\geq 0$, KE is always non-negative."
      }
    },
    {
      id: 'physicsc-work-energy-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Formula |
|---|---------|-------------|
| 1 | Kinetic energy | $KE = \\frac{1}{2}mv^2$ |
| 2 | Work-energy theorem | $W_{net} = \\Delta KE$ |
| 3 | Stopping distance | $W_{friction} = -\\Delta KE$ |
    
    `
    },
    {
      id: 'physicsc-work-energy-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "An object slows from 10 m/s to 0. The net work done on it is:",
                    "options": [
                              "Negative",
                              "Positive",
                              "Zero",
                              "Cannot determine"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$W = \\\\Delta KE = 0 - \\\\frac{1}{2}mv^2 < 0$. Negative work slows objects."
          }
]
      }
    }
  ]
};
