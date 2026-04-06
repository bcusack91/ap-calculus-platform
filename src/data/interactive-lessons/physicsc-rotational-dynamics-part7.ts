export const physCRotationPart7Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p7-intro',
      type: 'text' as const,
      content: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- Angular kinematics: $\omega = \omega_0 + \alpha t$
- Moment of inertia: $I = \sum mr^2$
- Torque: $\\tau = rF\sin\\theta = I\alpha$
- Angular momentum: $L = I\omega$
- Rolling: $v = R\omega$, $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\omega^2$
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A merry-go-round ($I = 500$ kg·m²) spins at 2 rad/s. A 50 kg child jumps on at $r = 2$ m. Find the new $\omega$.**

$I_f = 500 + 50(4) = 700$ kg·m²

$\omega_f = \\frac{500(2)}{700} = \\frac{1000}{700} \approx 1.43$ rad/s ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Rotational equilibrium requires:",
                    "options": [
                              "$\\\\sum \\\\tau = 0$",
                              "$\\\\sum F = 0$",
                              "$\\\\omega = 0$",
                              "$\\\\alpha > 0$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Rotational equilibrium means zero net torque."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) A disk ($I = \\frac{1}{2}mr^2$, $m = 4$ kg, $r = 1$ m). What is $I$ (kg·m²)?

2) $\alpha = \\tau / I = 10 / 2 = ?$ rad/s²

3) A wheel at 10 rad/s has zero net torque. What is $\omega$ (rad/s) after 100 s?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","5","10"],
        hint1: "$I = \\frac{1}{2}(4)(1) = 2$.",
        hint2: "Divide.",
        hint3: "Zero net torque means constant $\\omega$.",
        explanation: "1) $I = 2$ kg·m². 2) $\\alpha = 5$ rad/s². 3) $\\omega$ is constant at 10 rad/s (no torque, no angular acceleration)."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The direction of angular velocity is determined by","options":["The right-hand rule","The left-hand rule","The direction of force","The direction of displacement"]},{"label":"A solid disk and a hoop of equal mass and radius roll down a ramp. Which arrives first?","options":["The solid disk","The hoop","They arrive together","Cannot determine"]}],
        correctAnswers: ["The right-hand rule","The solid disk"],
        hint1: "Curl fingers in direction of rotation, thumb points...",
        hint2: "The disk has less rotational inertia ($I/mr^2$).",
        explanation: "Right-hand rule determines $\\vec{\\omega}$ direction. The disk ($I = mr^2/2$) has less rotational inertia fraction than the hoop ($I = mr^2$), so more KE goes to translation."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Key Relationship |
|---|-------|------------------|
| 1 | Angular kinematics | $\omega, \alpha, \\theta$ |
| 2 | Torque & equilibrium | $\sum \\tau = 0$ |
| 3 | Conservation of $L$ | $I_i\omega_i = I_f\omega_f$ |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A planet orbits the Sun. As it moves closer, it:",
                    "options": [
                              "Speeds up (conservation of $L$)",
                              "Slows down",
                              "Maintains constant speed",
                              "Stops"
                    ],
                    "correctAnswer": 0,
                    "explanation": "As $r$ decreases, $\\\\omega$ increases to conserve $L = I\\\\omega$."
          }
]
      }
    }
  ]
};
