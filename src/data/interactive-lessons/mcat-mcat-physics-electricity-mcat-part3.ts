export const mcatPhysElecPart3Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe3-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 3 of 7 — Magnetism**

### Magnetic Force on a Moving Charge

$$F = qvB\\sin\\theta$$

- Direction: Right-hand rule (fingers from $\\vec{v}$ to $\\vec{B}$, thumb = $\\vec{F}$)
- Force is PERPENDICULAR to both velocity and field
- Stationary charges feel NO magnetic force

### Circular Motion in a Magnetic Field

$$qvB = \\frac{mv^2}{r} \\implies r = \\frac{mv}{qB}$$

### Force on a Current-Carrying Wire

$$F = ILB\\sin\\theta$$

### Electromagnetic Induction (Faraday's Law)

$$\\varepsilon = -\\frac{d\\Phi_B}{dt}$$

- Changing magnetic flux induces an EMF (voltage)
- **Lenz's Law**: Induced current opposes the change that caused it`
    },
    {
      id: 'pe3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Magnetism** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton moves parallel to a magnetic field. The magnetic force on it is:`,
            options: [`Zero ($\\sin 0° = 0$)`, `Maximum`, `Equal to $qvB$`, `Depends on speed only`],
            correctAnswer: 0,
            explanation: `$F = qvB\\sin\\theta$. When $\\vec{v}$ is parallel to $\\vec{B}$, $\\theta = 0°$, and $\\sin 0° = 0$. The charge must have a velocity component PERPENDICULAR to $\\vec{B}$ to feel a force.`
          }
        ]
      }
    },
    {
      id: 'pe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Magnetic force: $F = qvB\\sin\\theta$ (zero when parallel!)
- Magnetic force does NO work (always perpendicular to velocity)
- Right-hand rule for direction: point fingers from $\\vec{v}$ to $\\vec{B}$
- Faraday: changing flux → induced EMF; Lenz: opposes the change`
    }
  ]
};
