export const physCEMInductionPart2Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p2-intro',
      type: 'text' as const,
      content: `# 🚂 Motional EMF

**Part 2 of 7 — Moving Conductors in Fields**

---

### EMF in a Moving Rod

A rod of length $L$ moving at velocity $v$ perpendicular to $\\vec{B}$:

$$\\mathcal{E} = BLv$$

---

### Derivation from Faraday’s Law

As the rod moves, the area of the circuit changes:
$$\\frac{d\\Phi}{dt} = B\\frac{dA}{dt} = BL\\frac{dx}{dt} = BLv$$

---

### Motional EMF and Force

The current in the circuit: $I = BLv/R$

The force on the rod: $F = BIL = B^2L^2v/R$

> 🔑 The magnetic braking force opposes the motion — this is the principle behind magnetic braking.`
    },
    {
      id: 'physicsc-em-induction-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.5 m rod moves at 2 m/s in a 0.3 T field. The motional EMF is:',
            options: ['$0.15$ V', '$0.3$ V', '$0.6$ V', '$1.0$ V'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = BLv = 0.3(0.5)(2) = 0.3$ V.'
          }
        ]
      }
    }
  ]
};
