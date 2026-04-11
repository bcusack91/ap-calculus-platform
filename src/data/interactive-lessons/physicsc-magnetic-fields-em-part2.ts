export const physCEMMagFieldsPart2Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p2-intro',
      type: 'text' as const,
      content: `# 🔌 Force on Current-Carrying Wires

**Part 2 of 7 — Wires in Magnetic Fields**

---

### Force on a Wire

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

Magnitude: $F = BIL\\sin\\theta$

where $L$ is the length of wire in the field.

---

### Torque on a Current Loop

$$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$$

where $\\vec{\\mu} = NIA\\hat{n}$ is the magnetic dipole moment.

$|\\tau| = NIAB\\sin\\theta$

> 🔑 This is the principle behind electric motors — a current loop in a magnetic field experiences a torque.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 m wire carrying 3 A is perpendicular to a 0.5 T field. $F =$',
            options: ['$1$ N', '$3$ N', '$1.5$ N', '$6$ N'],
            correctAnswer: 1,
            explanation: '$F = BIL\\sin(90°) = 0.5(3)(2)(1) = 3$ N.'
          }
        ]
      }
    }
  ]
};
