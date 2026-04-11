export const physCEMMaxwellPart6Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Maxwell Workshop

**Part 6 of 7 — Practice**

---

### AP Physics C E&M: Maxwell Topics

| Concept | What to Know |
|---------|-------------|
| Identify which equation applies | Match to symmetry and context |
| Displacement current | $I_d = \\epsilon_0 d\\Phi_E/dt$ |
| EM wave speed | $c = 1/\\sqrt{\\mu_0\\epsilon_0}$ |
| E/B ratio | $E = cB$ |
| Poynting vector | Direction of energy flow |
| Radiation pressure | $P = I/c$ (absorber), $2I/c$ (reflector) |`
    },
    {
      id: 'physicsc-maxwell-equations-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an EM wave, $\\vec{E}$ and $\\vec{B}$ are:',
            options: ['Parallel', 'Anti-parallel', 'Perpendicular', 'At 45°'],
            correctAnswer: 2,
            explanation: 'In an EM wave, $\\vec{E} \\perp \\vec{B}$ and both are perpendicular to the direction of propagation.'
          }
        ]
      }
    }
  ]
};
