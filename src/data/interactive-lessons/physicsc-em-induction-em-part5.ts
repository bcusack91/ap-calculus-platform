export const physCEMInductionPart5Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p5-intro',
      type: 'text' as const,
      content: `# 🔁 LC Circuits & Electromagnetic Oscillations

**Part 5 of 7 — Energy Oscillations**

---

### LC Circuit

Energy oscillates between the capacitor (electric field) and inductor (magnetic field):

$$q(t) = Q_0 \\cos(\\omega t + \\phi)$$

$$\\omega = \\frac{1}{\\sqrt{LC}}$$

$$T = 2\\pi\\sqrt{LC}$$

---

### Energy Exchange

$$U_C = \\frac{q^2}{2C}, \quad U_L = \\frac{1}{2}LI^2$$

$$U_{\\text{total}} = \\frac{Q_0^2}{2C} = \\text{constant}$$

> 🔑 LC oscillation is the electromagnetic analog of SHM in mechanics. Charge ↔ position, current ↔ velocity, $L$ ↔ mass, $1/C$ ↔ spring constant.`
    },
    {
      id: 'physicsc-em-induction-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The resonant frequency of an LC circuit is:',
            options: ['$\\omega = LC$', '$\\omega = 1/\\sqrt{LC}$', '$\\omega = \\sqrt{L/C}$', '$\\omega = 1/(LC)$'],
            correctAnswer: 1,
            explanation: '$\\omega = 1/\\sqrt{LC}$ — the natural frequency of LC oscillation.'
          }
        ]
      }
    }
  ]
};
