export const physCEMInductionPart1Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Faraday’s Law of Induction

**Part 1 of 7 — Changing Flux Creates EMF**

---

### Faraday’s Law

$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$

For $N$ loops: $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$

---

### Lenz’s Law

The induced current flows in a direction that **opposes** the change in flux that caused it.

> 🔑 The negative sign in Faraday's law encodes Lenz's law. Nature resists changes in magnetic flux.

---

### Ways to Change Flux

$\\Phi_B = BA\\cos\\theta$ can change by changing:
1. **$B$** — changing the field strength
2. **$A$** — changing the area of the loop
3. **$\\theta$** — rotating the loop`
    },
    {
      id: 'physicsc-em-induction-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lenz’s law ensures that the induced EMF:',
            options: ['Enhances the flux change', 'Opposes the flux change', 'Is always zero', 'Is always positive'],
            correctAnswer: 1,
            explanation: 'Lenz’s law: induced EMF opposes the change that produced it (conservation of energy).'
          },
          {
            question: 'A loop in a uniform, constant $B$ field has induced EMF:',
            options: ['$EMF = BA$', '$EMF = B/A$', '$EMF = 0$', '$EMF = BA\\cos\\theta$'],
            correctAnswer: 2,
            explanation: 'If $B$, $A$, and $\\theta$ are all constant, $d\\Phi/dt = 0$, so EMF = 0.'
          }
        ]
      }
    }
  ]
};
