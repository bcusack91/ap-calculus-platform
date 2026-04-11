export const physCEMInductionPart6Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ EM Induction Workshop

**Part 6 of 7 — Practice Strategies**

---

### Problem Types

| Type | Key Approach |
|------|-------------|
| Changing $B$ field in loop | $\\mathcal{E} = -d\\Phi_B/dt$ |
| Moving rod | $\\mathcal{E} = BLv$ |
| Rotating coil | $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$ |
| RL circuit | $\\tau = L/R$, exponential growth/decay |
| LC circuit | $\\omega = 1/\\sqrt{LC}$, energy oscillation |
| Lenz’s law direction | Oppose the change in flux |`
    },
    {
      id: 'physicsc-em-induction-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A generator works by:',
            options: ['Chemical reaction', 'Rotating a coil in a magnetic field', 'Static electricity', 'Thermoelectric effect'],
            correctAnswer: 1,
            explanation: 'A generator produces EMF by rotating a coil in a magnetic field (changing $\\theta$ in $\\Phi = BA\\cos\\theta$).'
          }
        ]
      }
    }
  ]
};
