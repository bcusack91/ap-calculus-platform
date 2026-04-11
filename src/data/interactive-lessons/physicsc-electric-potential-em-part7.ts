export const physCEMPotentialPart7Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Electric Potential Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $V = kQ/r$ | Potential from point charge |
| $\\Delta V = -\\int \\vec{E} \\cdot d\\vec{l}$ | Potential from field |
| $\\vec{E} = -\\nabla V$ | Field from potential |
| $W = q\\Delta V$ | Work on a charge |
| $U = kq_1q_2/r$ | PE of two charges |`
    },
    {
      id: 'physicsc-electric-potential-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The SI unit of electric potential is:',
            options: ['Newton', 'Coulomb', 'Volt', 'Ampere'],
            correctAnswer: 2,
            explanation: 'Electric potential is measured in Volts (V) = Joules per Coulomb.'
          }
        ]
      }
    }
  ]
};
