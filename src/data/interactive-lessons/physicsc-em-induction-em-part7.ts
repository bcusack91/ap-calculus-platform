export const physCEMInductionPart7Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 EM Induction Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\mathcal{E} = -d\\Phi_B/dt$ | Faraday’s law |
| $\\mathcal{E} = BLv$ | Motional EMF |
| $L = \\mu_0 n^2 Al$ | Solenoid inductance |
| $U = \\frac{1}{2}LI^2$ | Inductor energy |
| $\\tau_{RL} = L/R$ | RL time constant |
| $\\omega_{LC} = 1/\\sqrt{LC}$ | LC frequency |`
    },
    {
      id: 'physicsc-em-induction-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Faraday’s law says EMF is proportional to:',
            options: ['Magnetic flux', 'Rate of change of magnetic flux', 'Magnetic field strength', 'Current'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = -d\\Phi_B/dt$ — EMF is induced by the rate of change of flux, not the flux itself.'
          }
        ]
      }
    }
  ]
};
