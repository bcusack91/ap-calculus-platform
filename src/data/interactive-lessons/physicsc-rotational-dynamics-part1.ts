export const physCRotationPart1Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p1-intro',
      type: 'text' as const,
      content: `
# ⚛️ Angular Kinematics

**Part 1 of 7 — Angular Kinematics**

Rotational analogs of linear kinematics:
- $\\theta \\leftrightarrow x$, $\\omega \\leftrightarrow v$, $\\alpha \\leftrightarrow a$

$\\omega = \\frac{d\\theta}{dt}, \\quad \\alpha = \\frac{d\\omega}{dt}$

For constant $\\alpha$:
- $\\omega = \omega_0 + \\alpha t$
- $\\theta = \omega_0 t + \\frac{1}{2}\\alpha t^2$
- $\\omega^2 = \omega_0^2 + 2\\alpha\\theta$
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A wheel accelerates from rest at $\\alpha = 4$ rad/s². Find $\\omega$ at $t = 3$ s.**

$\\omega = \omega_0 + \\alpha t = 0 + 4(3) = 12$ rad/s ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The angular analog of linear acceleration is:",
                    "options": [
                              "Angular acceleration $\\\\alpha$",
                              "Angular velocity $\\\\omega$",
                              "Torque $\\\\tau$",
                              "Moment of inertia $I$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\alpha = d\\\\omega/dt$ is the angular analog of $a = dv/dt$."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p1-input',
      type: 'input-boxes' as const,
      content: `
**Angular Kinematics** 🧮

1) A wheel starts from rest with $\\alpha = 4$ rad/s². Angular velocity (rad/s) at $t = 3$ s?

2) Same wheel: angular displacement (rad) in 3 s?

3) A wheel has $\omega_0 = 2$ rad/s, $\\alpha = 4$ rad/s². Find $\\omega$ (rad/s) at $t = 2$ s.
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","18","10"],
        hint1: "$\\omega = \\omega_0 + \\alpha t = 0 + 4(3)$.",
        hint2: "$\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(4)(9)$.",
        hint3: "$\\omega = 2 + 4(2)$.",
        explanation: "1) $12$ rad/s. 2) $\\frac{1}{2}(4)(9) = 18$ rad. 3) $2 + 8 = 10$ rad/s."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The tangential velocity of a point at distance $r$ from the axis is","options":["$v = r\\\\omega$","$v = r\\\\alpha$","$v = r/\\\\omega$","$v = \\\\omega/r$"]},{"label":"Angular velocity is measured in","options":["rad/s","m/s","rev/s","degrees/s"]}],
        correctAnswers: ["$v = r\\\\omega$","rad/s"],
        hint1: "Tangential velocity is radius times angular velocity.",
        hint2: "The SI unit for angular velocity.",
        explanation: "$v = r\\omega$. Angular velocity is measured in rad/s (SI)."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Quantity | Formula |
|---|---------|---------|
| 1 | Angular velocity | $\\omega = \omega_0 + \\alpha t$ |
| 2 | Angular displacement | $\\theta = \omega_0 t + \\frac{1}{2}\\alpha t^2$ |
| 3 | Without time | $\\omega^2 = \omega_0^2 + 2\\alpha\\theta$ |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A wheel completes one revolution. The angular displacement is:",
                    "options": [
                              "$2\\\\pi$ rad",
                              "$\\\\pi$ rad",
                              "$360$ rad",
                              "$1$ rad"
                    ],
                    "correctAnswer": 0,
                    "explanation": "One full revolution = $2\\\\pi$ radians = 360°."
          }
]
      }
    }
  ]
};
