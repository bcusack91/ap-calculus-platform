export const physCEMMagFieldsPart6Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Magnetic Fields Workshop

**Part 6 of 7 — Strategies**

---

### Choosing the Right Law

| Situation | Use |
|-----------|-----|
| Field from a short wire segment | Biot-Savart |
| Field with high symmetry | Ampere’s law |
| Force on a moving charge | $\\vec{F} = q\\vec{v} \\times \\vec{B}$ |
| Force on a current-carrying wire | $\\vec{F} = I\\vec{L} \\times \\vec{B}$ |
| Torque on a loop | $\\tau = NIAB\\sin\\theta$ |`
    },
    {
      id: 'physicsc-magnetic-fields-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To find the field near a finite curved wire, use:',
            options: ['Ampere’s law', 'Biot-Savart law', '$Coulomb’s law$', 'Faraday’s law'],
            correctAnswer: 1,
            explanation: 'Biot-Savart works for any current configuration. Ampere’s law needs symmetry.'
          }
        ]
      }
    }
  ]
};
