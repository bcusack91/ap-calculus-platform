export const physCRotationPart3Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p3-intro',
      type: 'text' as const,
      content: `
# ⚛️ Torque

**Part 3 of 7 — Torque**

$\\tau = rF\sin\\theta = r_{\perp}F$

$\sum \\tau = I\alpha$

This is the rotational analog of $F = ma$.

Torque is positive for counterclockwise rotation and negative for clockwise.
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 10 N force is applied at the end of a 0.5 m wrench perpendicular to it. Find the torque.**

$\\tau = rF\sin 90° = 0.5(10)(1) = 5$ N·m ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Torque is maximized when the force is applied:",
                    "options": [
                              "Perpendicular to the lever arm",
                              "Parallel to the lever arm",
                              "At the pivot",
                              "At 45°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\tau = rF\\\\sin\\\\theta$. Maximum when $\\\\theta = 90°$, i.e., perpendicular."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p3-input',
      type: 'input-boxes' as const,
      content: `
**Torque** 🧮

1) A 10 N force acts at the end of a 0.5 m wrench (perpendicular). Torque (N·m)?

2) A torque of 12 N·m acts on an object with $I = 2$ kg·m². Angular acceleration (rad/s²)?

3) Two forces create torques of +7 N·m and -3 N·m. Net torque (N·m)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","6","4"],
        hint1: "$\\tau = rF$ when perpendicular.",
        hint2: "$\\alpha = \\tau / I$.",
        hint3: "Add the torques (watch the signs).",
        explanation: "1) $0.5 \\times 10 = 5$ N·m. 2) $\\alpha = 12/2 = 6$ rad/s². 3) $7 + (-3) = 4$ N·m."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The SI unit of torque is","options":["N·m","J","W","kg·m²"]},{"label":"A force applied at the pivot creates","options":["Zero torque","Maximum torque","Infinite torque","Negative torque"]}],
        correctAnswers: ["N·m","Zero torque"],
        hint1: "Torque = force × distance.",
        hint2: "If $r = 0$...",
        explanation: "Torque is measured in N·m. At the pivot, $r = 0$, so $\\tau = 0$."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Formula |
|---|----------|---------|
| 1 | Perpendicular force | $\\tau = rF$ |
| 2 | Angled force | $\\tau = rF\sin\\theta$ |
| 3 | Net torque & acceleration | $\\tau_{net} = I\alpha$ |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The rotational analog of $F = ma$ is:",
                    "options": [
                              "$\\\\tau = I\\\\alpha$",
                              "$\\\\tau = mr^2$",
                              "$L = I\\\\omega$",
                              "$\\\\omega = \\\\alpha t$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Newton's second law for rotation: $\\\\tau = I\\\\alpha$."
          }
]
      }
    }
  ]
};
