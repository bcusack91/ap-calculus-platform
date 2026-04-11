export const physCEMMaxwellPart2Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p2-intro',
      type: 'text' as const,
      content: `# 🔄 Displacement Current

**Part 2 of 7 — Maxwell’s Key Insight**

---

### The Problem with Ampere’s Law

Consider a charging capacitor — current flows in the wire but not between the plates. Ampere’s law gives different answers depending on which surface you choose!

---

### Maxwell’s Fix: Displacement Current

$$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$$

This changing electric flux acts like a current for purposes of producing a magnetic field.

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0(I + I_d)$$

> 🔑 Between capacitor plates, there is no real current — but the changing $\\vec{E}$ creates a magnetic field just as if there were current.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Displacement current is proportional to:',
            options: ['Electric field', 'Rate of change of electric flux', 'Magnetic flux', 'Charge density'],
            correctAnswer: 1,
            explanation: '$I_d = \\epsilon_0 d\\Phi_E/dt$ — it is the rate of change of electric flux.'
          }
        ]
      }
    }
  ]
};
