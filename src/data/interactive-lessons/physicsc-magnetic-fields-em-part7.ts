export const physCEMMagFieldsPart7Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Magnetic Fields Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\vec{F} = q\\vec{v} \\times \\vec{B}$ | Force on charge |
| $r = mv/(qB)$ | Cyclotron radius |
| $B = \\mu_0 I/(2\\pi r)$ | Long wire |
| $B = \\mu_0 nI$ | Solenoid |
| $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$ | Ampere’s law |
| $\\Phi_B = BA\\cos\\theta$ | Flux |`
    },
    {
      id: 'physicsc-magnetic-fields-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\mu_0$ is called:',
            options: ['Permittivity of free space', 'Permeability of free space', 'Magnetic flux', 'Susceptibility'],
            correctAnswer: 1,
            explanation: '$\\mu_0$ is the permeability of free space ($4\\pi \\times 10^{-7}$ T·m/A).'
          }
        ]
      }
    }
  ]
};
