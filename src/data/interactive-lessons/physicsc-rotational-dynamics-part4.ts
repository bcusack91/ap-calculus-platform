export const physCRotationPart4Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Angular Momentum

**Part 4 of 7 — Angular Momentum**

### Two Forms of Angular Momentum

| Object | Angular momentum about an axis or point |
|--------|-----------------------------------------|
| Rigid body rotating about a fixed axis | $L = I\\omega$ |
| Particle moving past a point | $\\vec{L} = \\vec{r} \\times \\vec{p}$, magnitude $L = mvr\\sin\\theta = mvr_{\\perp}$ |

Here $r_{\\perp}$ is the perpendicular distance from the point to the particle's line of motion. A particle moving in a straight line still has angular momentum about any point not on that line.

### Torque Changes Angular Momentum

$$\\tau_{\\text{net}} = \\frac{dL}{dt} \\qquad \\Longrightarrow \\qquad \\tau\\,\\Delta t = \\Delta L \\text{ (constant torque)}$$

The product $\\tau\\,\\Delta t$ is the **angular impulse**.

### Conservation

If the net external torque on a system is zero, its total angular momentum stays constant:

$$I_i\\omega_i = I_f\\omega_f$$

A system that changes shape (a skater pulling in her arms) changes $I$, so $\\omega$ changes to keep $L$ fixed. Rotational kinetic energy $K = \\frac{L^2}{2I}$ is **not** conserved in that process.
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example — Clay Ball Sticks to a Rod

**A thin uniform rod ($M = 1.2$ kg, length $0.80$ m) can turn freely about a vertical axle through its center and starts at rest. A $0.10$ kg ball of clay moving at $6.0$ m/s, perpendicular to the rod, hits one end and sticks. Find the angular speed just after the collision.**

**Step 1 — Choose the axle as the reference point.** The axle's force has zero moment arm about the axle, so angular momentum about the axle is conserved during the collision (linear momentum is not, because the axle pushes on the rod).

**Step 2 — Angular momentum before.** Only the clay moves; it travels perpendicular to the rod at $r = 0.40$ m from the axle:

$L_i = mvr = (0.10)(6.0)(0.40) = 0.24$ $kg\\cdot m^{2}/s$

**Step 3 — Rotational inertia after.**

$I_f = \\frac{1}{12}ML^2 + mr^2 = \\frac{1}{12}(1.2)(0.80)^2 + (0.10)(0.40)^2 = 0.064 + 0.016 = 0.080$ $kg\\cdot m^{2}$

**Step 4 — Solve.**

$\\omega_f = \\frac{L_i}{I_f} = \\frac{0.24}{0.080} = 3.0$ rad/s ✅
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A student on a frictionless rotating stool has $I = 3.0$ $kg\\cdot m^{2}$ and spins at $2.0$ rad/s. She pulls in her arms so that $I = 1.2$ $kg\\cdot m^{2}$. Her new angular speed is:",
            options: ["$0.80$ rad/s", "$5.0$ rad/s", "$3.2$ rad/s", "$2.0$ rad/s"],
            correctAnswer: 1,
            explanation: "No external torque acts about the axis, so $I_i\\omega_i = I_f\\omega_f$: $\\omega_f = (3.0)(2.0)/1.2 = 5.0$ rad/s. Keeping kinetic energy constant instead gives the incorrect 3.2 rad/s."
          }
        ]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p4-input',
      type: 'input-boxes' as const,
      content: `
**Angular Momentum Practice** 🧮

1) A 2.0 kg particle moves at 3.0 m/s along a straight line that passes 0.50 m from point O. What is its angular momentum about O $(kg\\cdot m^{2}/s)$?

2) A disk with $I = 0.50$ $kg\\cdot m^{2}$ spins at 8.0 rad/s. What is its angular momentum $(kg\\cdot m^{2}/s)$?

3) A constant torque of 2.0 N·m acts on that disk for 3.0 s in the direction of its spin. What is its new angular momentum $(kg\\cdot m^{2}/s)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3", "4", "10"],
        hint1: "$L = mvr_{\\perp}$ with $r_{\\perp} = 0.50$ m.",
        hint2: "$L = I\\omega$.",
        hint3: "Angular impulse $\\tau\\,\\Delta t$ adds to the starting $L$.",
        explanation: "1) $L = (2.0)(3.0)(0.50) = 3$ $kg\\cdot m^{2}/s$. 2) $L = (0.50)(8.0) = 4$ $kg\\cdot m^{2}/s$. 3) $\\Delta L = (2.0)(3.0) = 6$, so $L = 4 + 6 = 10$ $kg\\cdot m^{2}/s$."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "If the net external torque on a system is zero, its total angular momentum",
            options: ["Stays constant", "Increases steadily", "Decreases steadily", "Must be zero"]
          },
          {
            label: "When a spinning skater pulls her arms in, her rotational kinetic energy",
            options: ["Increases", "Decreases", "Stays the same", "Drops to half"]
          }
        ],
        correctAnswers: ["Stays constant", "Increases"],
        hint1: "$\\tau_{\\text{net}} = dL/dt$.",
        hint2: "$K = L^2/(2I)$ with $L$ fixed and $I$ smaller.",
        explanation: "Zero net torque means $dL/dt = 0$. With $L$ constant and $I$ decreasing, $K = L^2/(2I)$ increases; the skater's muscles do the work."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Situation | Key Relationship |
|---|-----------|------------------|
| 1 | Particle passing a point | $L = mvr_{\\perp}$ |
| 2 | Spinning rigid body | $L = I\\omega$ |
| 3 | Constant torque for a time | $\\Delta L = \\tau\\,\\Delta t$ |
| 4 | Collision with a pivoted object | Conserve $L$ about the pivot |
      `
    },
    {
      id: 'physicsc-rotational-dynamics-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Repeat the worked example, but the clay ball (0.10 kg, 6.0 m/s) now strikes and sticks $0.20$ m from the axle instead of at the end. The rod's angular speed just after impact is about:",
            options: ["$1.9$ rad/s", "$1.8$ rad/s", "$3.0$ rad/s", "$1.5$ rad/s"],
            correctAnswer: 1,
            explanation: "$L_i = (0.10)(6.0)(0.20) = 0.12$ $kg\\cdot m^{2}/s$ and $I_f = 0.064 + (0.10)(0.20)^2 = 0.068$ $kg\\cdot m^{2}$, so $\\omega = 0.12/0.068 \\approx 1.8$ rad/s. Leaving the clay out of $I_f$ gives 1.9 rad/s; keeping the old $I_f = 0.080$ gives 1.5 rad/s."
          }
        ]
      }
    }
  ]
};
