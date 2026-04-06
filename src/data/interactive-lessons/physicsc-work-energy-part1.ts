export const physCWorkEnergyPart1Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p1-intro',
      type: 'text' as const,
      content: `
# ⚛️ Work as an Integral

**Part 1 of 7 — Work as an Integral**

Work done by a variable force along a path:

$W = \int_{x_1}^{x_2} F(x)\,dx$

For a constant force at angle $\\theta$ to displacement:
$W = Fd\cos\\theta$

Work is a scalar quantity measured in Joules (J).
    
    `
    },
    {
      id: 'physicsc-work-energy-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Find the work done by $F(x) = 3x^2$ from $x = 0$ to $x = 2$ m.**

$W = \int_0^2 3x^2\,dx = x^3\Big|_0^2 = 8$ J ✅
    
    `
    },
    {
      id: 'physicsc-work-energy-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The work done by a force perpendicular to displacement is:",
                    "options": [
                              "Zero",
                              "Maximum",
                              "Negative",
                              "$Fd$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$W = Fd\\\\cos 90° = 0$. A perpendicular force does no work."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p1-input',
      type: 'input-boxes' as const,
      content: `
**Work as an Integral** 🧮

1) A constant force of 10 N pushes an object 5 m. Work done (J)?

2) $W = \int_0^2 3x^2\,dx = ?$ J

3) $W = \int_0^3 4x\,dx = ?$ J
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","8","18"],
        hint1: "$W = F \\times d$ for constant force.",
        hint2: "$\\int 3x^2 dx = x^3$. Evaluate from 0 to 2.",
        hint3: "$\\int 4x\\,dx = 2x^2$. Evaluate from 0 to 3.",
        explanation: "1) $10 \\times 5 = 50$ J. 2) $2^3 - 0 = 8$ J. 3) $2(9) - 0 = 18$ J."
      }
    },
    {
      id: 'physicsc-work-energy-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Work done by a spring force $F = -kx$ stretching from 0 to $x_0$ is","options":["$-\\\\frac{1}{2}kx_0^2$","$\\\\frac{1}{2}kx_0^2$","$kx_0$","$kx_0^2$"]},{"label":"When force and displacement are in opposite directions, work is","options":["Negative","Positive","Zero","Undefined"]}],
        correctAnswers: ["$-\\\\frac{1}{2}kx_0^2$","Negative"],
        hint1: "$W = \\int_0^{x_0} (-kx)\\,dx$.",
        hint2: "$\\cos 180° = -1$.",
        explanation: "Spring work: $\\int_0^{x_0} (-kx)dx = -kx_0^2/2$. Opposite directions give $\\cos 180° = -1$, so work is negative."
      }
    },
    {
      id: 'physicsc-work-energy-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Force | Limits |
|---|-------|--------|
| 1 | $F = 10$ N constant | 0 to 5 m |
| 2 | $F(x) = 4x$ | 0 to 3 m |
| 3 | $F(x) = kx$ (spring) | 0 to $x_0$ |
    
    `
    },
    {
      id: 'physicsc-work-energy-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "What are the SI units of work?",
                    "options": [
                              "Joules (J)",
                              "Newtons (N)",
                              "Watts (W)",
                              "Pascals (Pa)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Work = Force × distance = N·m = Joule."
          }
]
      }
    }
  ]
};
