export const physCEMInductionPart3Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p3-intro',
      type: 'text' as const,
      content: `# 🔗 Inductance

**Part 3 of 7 — Self and Mutual Inductance**

---

### Self-Inductance

$$\\mathcal{E} = -L\\frac{dI}{dt}$$

where $L$ is the inductance. Units: Henry (H)

For a solenoid: $L = \\mu_0 n^2 Al$

---

### Mutual Inductance

$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$$

Two coils that share magnetic flux have mutual inductance $M$.

---

### Energy in an Inductor

$$U = \\frac{1}{2}LI^2$$

Energy density: $u = \\frac{B^2}{2\\mu_0}$

> 🔑 An inductor stores energy in its magnetic field, just as a capacitor stores energy in its electric field.`
    },
    {
      id: 'physicsc-em-induction-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The energy stored in an inductor is:',
            options: ['$LI$', '$LI^2$', '$\\frac{1}{2}LI^2$', '$\\frac{1}{2}LI$'],
            correctAnswer: 2,
            explanation: '$U = \\frac{1}{2}LI^2$, analogous to $\\frac{1}{2}CV^2$ for a capacitor.'
          }
        ]
      }
    }
  ]
};
