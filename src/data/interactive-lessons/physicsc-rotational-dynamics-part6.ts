export const physCRotationPart6Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p6-intro',
      type: 'text' as const,
      content: `
# ⚛️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Rotation Problem Strategy
1. Identify the axis of rotation
2. Find the moment of inertia about that axis
3. Calculate net torque
4. Apply $\\tau = I\\alpha$ or conservation of $L$
5. Connect rotational and translational quantities if rolling
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 20 N force acts tangentially on a disk ($m = 4$ kg, $r = 0.5$ m). Find $\\alpha$.**

$I = \\frac{1}{2}mr^2 = \\frac{1}{2}(4)(0.25) = 0.5$ kg·m²

$\\tau = Fr = 20(0.5) = 10$ N·m

$\\alpha = \\tau / I = 10 / 0.5 = 20$ rad/s² ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "When solving an Atwood machine with a massive pulley, you must:",
                    "options": [
                              "Include the pulley's moment of inertia",
                              "Ignore the pulley",
                              "Assume massless pulley",
                              "Set tension equal on both sides"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A massive pulley has rotational inertia that affects the system's acceleration."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem-Solving Workshop** 🧮

1) A 20 N tangential force on a disk ($I = 0.5$ kg·m², $r = 0.5$ m). $\\alpha$ (rad/s²)?

2) A torque of 10 N·m acts on a wheel ($I = 2$ kg·m²). $\\alpha$ (rad/s²)?

3) A wheel accelerates from rest at 4 rad/s² for 3 s. It then decelerates at 6 rad/s². Time to stop (s)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["20","10","2"],
        hint1: "$\\tau = Fr = 10$ N·m. $\\alpha = \\tau/I = 10/0.5$.",
        hint2: "$\\alpha = \\tau/I$.",
        hint3: "Final $\\omega = 4(3) = 12$ rad/s. Then $t = \\omega/\\alpha = 12/6$.",
        explanation: "1) $\\alpha = 10/0.5 = 20$ rad/s². 2) $\\alpha = 10/2 = 5$ rad/s². 3) $\\omega = 12$ rad/s, deceleration time = $12/6 = 2$ s."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"To find $\\\\alpha$ for a rotating object, you need","options":["$\\\\tau$ and $I$","$v$ and $r$","$m$ and $g$","$F$ and $t$"]},{"label":"Rotational kinetic energy is","options":["$\\\\frac{1}{2}I\\\\omega^2$","$\\\\frac{1}{2}mv^2$","$I\\\\alpha$","$\\\\tau\\\\omega$"]}],
        correctAnswers: ["$\\\\tau$ and $I$","$\\\\frac{1}{2}I\\\\omega^2$"],
        hint1: "$\\alpha = \\tau / I$.",
        hint2: "Rotational KE formula.",
        explanation: "$\\alpha = \\tau/I$ requires both. Rotational KE = $\\frac{1}{2}I\\omega^2$."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem Type | Key Relationship |
|---|-------------|------------------|
| 1 | Disk with tangential force | $\\tau = I\\alpha$ |
| 2 | Atwood machine with pulley | Include $I$ of pulley |
| 3 | Rolling on an incline | Energy conservation |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For a yo-yo unwinding, the string exerts a torque that causes:",
                    "options": [
                              "Angular acceleration",
                              "Linear deceleration only",
                              "No rotation",
                              "Constant angular velocity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The tension in the string creates a torque about the yo-yo's axis, causing angular acceleration."
          }
]
      }
    }
  ]
};
