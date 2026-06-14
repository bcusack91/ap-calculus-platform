export const mcatPhysMechPart6Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 6 of 7 — Torque, Equilibrium & Simple Machines**

### Torque

$\\tau = rF\\sin\\theta$

- $r$ = distance from the pivot (the lever arm)
- $\\theta$ = angle between the lever arm and the force; torque is maximum at $\\theta = 90°$
- Counterclockwise is positive by convention

### Equilibrium Conditions

For static equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$

### Center of Mass

$x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}$

### Simple Machines

- **Lever**: $F_1 d_1 = F_2 d_2$ (mechanical advantage)
- **Pulley**: redirects force; compound pulleys multiply force
- **Inclined plane**: reduces the force needed but increases the distance

**Key principle**: machines reduce force but NEVER reduce work ($W = Fd$ is conserved).

### Pivot Choice Strategy

Choose a pivot that eliminates an unknown force (often a support point) so the torque equation simplifies quickly.`
    },
    {
      id: 'pm6-worked',
      type: 'text' as const,
      content: `### Worked Example — Balancing a Seesaw

A child of weight $300\\;\\text{N}$ sits $2.0\\;\\text{m}$ left of a seesaw's pivot. Where must a $400\\;\\text{N}$ child sit on the right to balance it?

**Step 1 — Write the rotational equilibrium condition.** For balance the counterclockwise and clockwise torques are equal:

$\\tau_{left} = \\tau_{right} \\Rightarrow F_1 d_1 = F_2 d_2$

**Step 2 — Plug in the known values.**

$(300)(2.0) = (400)(d_2)$

**Step 3 — Solve for the distance.**

$d_2 = \\frac{600}{400} = 1.5\\;\\text{m}$

The heavier child sits closer to the pivot ($1.5\\;\\text{m}$ vs. $2.0\\;\\text{m}$). This is the lever balance condition $F_1 d_1 = F_2 d_2$ — a staple of MCAT torque questions.`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Torque & Equilibrium** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 3 m uniform beam (mass 10 kg) is supported at one end. A 20 kg mass hangs from the other end. The torque about the support point is ($g = 10\\;\\text{m/s}^2$):`,
            options: [`750 $\\text{N}\\cdot\\text{m}$`, `600 $\\text{N}\\cdot\\text{m}$`, `450 $\\text{N}\\cdot\\text{m}$`, `300 $\\text{N}\\cdot\\text{m}$`],
            correctAnswer: 0,
            explanation: `The beam's weight acts at its center (1.5 m from the support): $\\tau_1 = 10(10)(1.5) = 150\\;\\text{N}\\cdot\\text{m}$. The hanging mass: $\\tau_2 = 20(10)(3) = 600\\;\\text{N}\\cdot\\text{m}$. Total $= 150 + 600 = 750\\;\\text{N}\\cdot\\text{m}$.`
          },
          {
            question: `A 10 N force is applied perpendicular to a wrench 0.20 m from the bolt. The torque magnitude is:`,
            options: [`0.5 $\\text{N}\\cdot\\text{m}$`, `2.0 $\\text{N}\\cdot\\text{m}$`, `10 $\\text{N}\\cdot\\text{m}$`, `20 $\\text{N}\\cdot\\text{m}$`],
            correctAnswer: 1,
            explanation: `$\\tau = rF\\sin\\theta = (0.20)(10)\\sin 90° = 2.0\\;\\text{N}\\cdot\\text{m}$.`
          },
          {
            question: `For a given force applied to a wrench, the torque is greatest when the force is applied:`,
            options: [`Perpendicular to the wrench handle`, `Parallel to the wrench handle`, `At 45° to the handle`, `Directly at the bolt`],
            correctAnswer: 0,
            explanation: `$\\tau = rF\\sin\\theta$ is maximized when $\\theta = 90°$ ($\\sin 90° = 1$), i.e. the force is perpendicular to the lever arm.`
          },
          {
            question: `A simple machine lets you lift a heavy load with a small input force. In doing so, it:`,
            options: [`Requires you to apply the force over a greater distance`, `Reduces the total work needed`, `Creates extra energy`, `Eliminates friction entirely`],
            correctAnswer: 0,
            explanation: `Machines trade force for distance. Since work $W = Fd$ is conserved (ideally), a smaller force must act over a longer distance.`
          },
          {
            question: `Two masses sit on a massless rod: 2 kg at $x = 0$ and 4 kg at $x = 3\\;\\text{m}$. The center of mass is at:`,
            options: [`$x = 2\\;\\text{m}$`, `$x = 1.5\\;\\text{m}$`, `$x = 1\\;\\text{m}$`, `$x = 2.5\\;\\text{m}$`],
            correctAnswer: 0,
            explanation: `$x_{cm} = \\frac{(2)(0) + (4)(3)}{2 + 4} = \\frac{12}{6} = 2\\;\\text{m}$. The center of mass lies closer to the heavier mass.`
          },
          {
            question: `A uniform meter stick is supported at its center. A 5 N weight hangs 0.4 m left of center. To balance it, a 4 N weight must hang on the right at:`,
            options: [`0.5 m`, `0.4 m`, `0.32 m`, `0.8 m`],
            correctAnswer: 0,
            explanation: `Balance requires $F_1 d_1 = F_2 d_2$: $(5)(0.4) = (4)(d_2) \\Rightarrow d_2 = 2.0/4 = 0.5\\;\\text{m}$.`
          }
        ]
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Torque $\\tau = rF\\sin\\theta$; maximum when the force is perpendicular to the lever arm
- Equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$ (you may choose any pivot point)
- Lever balance: $F_1 d_1 = F_2 d_2$ — the heavier side sits closer to the pivot
- Simple machines trade force for distance; work is conserved
- The MCAT loves beam and seesaw problems — practice them`
    }
  ]
};
