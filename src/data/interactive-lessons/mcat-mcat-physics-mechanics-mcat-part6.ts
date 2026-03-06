export const mcatPhysMechPart6Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 6 of 7 — Torque, Equilibrium & Simple Machines**

### Torque

$$\\tau = rF\\sin\\theta$$

- $r$ = distance from pivot (lever arm)
- Counterclockwise = positive (by convention)

### Equilibrium Conditions

For static equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$

### Center of Mass

$$x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}$$

### Simple Machines

- **Lever**: $F_1 d_1 = F_2 d_2$ (mechanical advantage)
- **Pulley**: redirects force; compound pulleys multiply force
- **Inclined plane**: reduces force needed but increases distance

**Key Principle**: Machines reduce force but NEVER reduce work ($W = Fd$ is constant).

### Pivot Choice Strategy

Choose a pivot that eliminates unknown forces (often a support point) so torque equations simplify quickly.`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Torque & Equilibrium** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 3 m uniform beam (mass 10 kg) is supported at one end. A 20 kg mass hangs from the other end. The torque about the support point is ($g = 10\\;\\text{m/s}^2$):`,
            options: [`750 N$\\cdot$m`, `600 N$\\cdot$m`, `450 N$\\cdot$m`, `300 N$\\cdot$m`],
            correctAnswer: 0,
            explanation: `Beam weight acts at center of mass (1.5 m from support): $\\tau_1 = 10(10)(1.5) = 150$ N$\\cdot$m. Hanging mass: $\\tau_2 = 20(10)(3) = 600$ N$\\cdot$m. Total: $150 + 600 = 750$ N$\\cdot$m.`
          },
          {
            question: `A 10 N force is applied perpendicular to a wrench 0.20 m from the bolt. The torque magnitude is:`,
            options: [`0.5 N m`, `2.0 N m`, `10 N m`, `20 N m`],
            correctAnswer: 1,
            explanation: `$\\tau = rF\\sin\\theta = 0.20(10)\\sin 90° = 2.0$ N m.`
          }
        ]
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Torque = $rF\\sin\\theta$; maximum when force is perpendicular to lever arm
- Equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$ (choose any pivot point!)
- Simple machines trade force for distance; work is conserved
- MCAT loves beam/seesaw problems — practice them!`
    }
  ]
};
