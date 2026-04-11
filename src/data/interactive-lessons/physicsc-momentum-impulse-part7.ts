export const physCMomentumPart7Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p7-intro',
      type: 'text' as const,
      content: `# 📋 Momentum Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas

| Formula | Name |
|---------|------|
| $\\vec{p} = m\\vec{v}$ | Momentum |
| $\\vec{J} = \\int \\vec{F} \, dt = \\Delta\\vec{p}$ | Impulse-momentum theorem |
| $\\vec{p}_i = \\vec{p}_f$ | Conservation of momentum |
| $x_{cm} = \\frac{\\sum m_i x_i}{M}$ | Center of mass |
| Elastic: $KE_i = KE_f$ | Kinetic energy conserved |
| Inelastic: $KE_i > KE_f$ | KE lost to deformation/heat |`
    },
    {
      id: 'physicsc-momentum-impulse-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which quantity is ALWAYS conserved in collisions (with no external forces)?',
            options: ['Kinetic energy', 'Momentum', 'Speed', 'Force'],
            correctAnswer: 1,
            explanation: 'Momentum is always conserved in an isolated system. KE is only conserved in elastic collisions.'
          },
          {
            question: 'A rocket in space expels gas backward. The rocket:',
            options: ['Violates conservation of momentum', 'Accelerates forward', 'Stays in place', 'Decelerates'],
            correctAnswer: 1,
            explanation: 'Gas goes backward, rocket goes forward. Total momentum of system remains constant.'
          }
        ]
      }
    }
  ]
};
