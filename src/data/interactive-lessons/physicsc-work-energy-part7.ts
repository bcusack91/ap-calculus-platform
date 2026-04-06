export const physCWorkEnergyPart7Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p7-intro',
      type: 'text' as const,
      content: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Summary
- $W = \int F\,dx$, $W = Fd\cos\\theta$
- Work-KE Theorem: $W_{net} = \Delta KE$
- $F = -dU/dx$ for conservative forces
- Conservation: $E_i = E_f$ (no friction)
- Power: $P = dW/dt = Fv$
    
    `
    },
    {
      id: 'physicsc-work-energy-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 2 kg ball on a spring ($k = 50$ N/m) is released from $x = 2$ m. Find speed at $x = 0$.**

$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$

$v = x\sqrt{k/m} = 2\sqrt{50/2} = 2(5) = 10$ m/s ✅
    
    `
    },
    {
      id: 'physicsc-work-energy-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which has more kinetic energy: a 2 kg object at 3 m/s or a 1 kg object at 4 m/s?",
                    "options": [
                              "They are equal (9 J each)",
                              "The 2 kg object",
                              "The 1 kg object",
                              "Cannot determine"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$KE_1 = \\\\frac{1}{2}(2)(9) = 9$ J. $KE_2 = \\\\frac{1}{2}(1)(16) = 8$ J. The 2 kg object has more."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) A 2 kg ball on a spring ($k = 50$ N/m) is released from $x = 2$ m. Speed at $x = 0$ (m/s)?

2) $KE = \\frac{1}{2}(2)(3^2) = ?$ J

3) A 1000 W engine runs for 0.5 s. Energy delivered (J)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["10","9","500"],
        hint1: "$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$, solve for $v$.",
        hint2: "$\\frac{1}{2}(2)(9)$.",
        hint3: "$E = P \\times t$.",
        explanation: "1) $v = 2\\sqrt{50/2} = 2(5) = 10$ m/s. 2) $9$ J. 3) $1000 \\times 0.5 = 500$ J."
      }
    },
    {
      id: 'physicsc-work-energy-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The area under an $F$ vs $x$ graph represents","options":["Work","Power","Force","Acceleration"]},{"label":"The slope of a $U$ vs $x$ graph gives","options":["Negative of the force","The force directly","The acceleration","The velocity"]}],
        correctAnswers: ["Work","Negative of the force"],
        hint1: "$W = \\int F\\,dx$ is the area under the curve.",
        hint2: "$F = -dU/dx$.",
        explanation: "Area under F-x curve = work. Slope of U-x curve = $dU/dx = -F$."
      }
    },
    {
      id: 'physicsc-work-energy-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Key Formula |
|---|-------|-------------|
| 1 | Work integral | $W = \int F\,dx$ |
| 2 | Energy conservation | $KE_i + PE_i = KE_f + PE_f$ |
| 3 | Power | $P = Fv$ |
    
    `
    },
    {
      id: 'physicsc-work-energy-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A roller coaster at the top of a hill has 500 J of PE. At the bottom (frictionless), it has:",
                    "options": [
                              "500 J of KE",
                              "250 J of KE",
                              "500 J of PE",
                              "0 J of energy"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Energy conservation: all PE converts to KE at the bottom."
          }
]
      }
    }
  ]
};
