export const physCEMMagFieldsPart5Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p5-intro',
      type: 'text' as const,
      content: `# 🌀 Magnetic Flux

**Part 5 of 7 — Flux Through Surfaces**

---

### Magnetic Flux

$$\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}$$

For uniform $B$ through flat surface: $\\Phi_B = BA\\cos\\theta$

Units: Weber (Wb) = T·m²

---

### Gauss’s Law for Magnetism

$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

> 🔑 No magnetic monopoles — field lines have no beginning or end. Total flux through any closed surface is zero.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The net magnetic flux through any closed surface is:',
            options: ['Positive', 'Negative', 'Zero', 'Depends on the surface'],
            correctAnswer: 2,
            explanation: 'Gauss’s law for magnetism: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$. No magnetic monopoles.'
          }
        ]
      }
    }
  ]
};
