export const physCOscillationsPart1Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p1-intro',
      type: 'text' as const,
      content: `# 🔄 Simple Harmonic Motion

**Part 1 of 7 — Springs and Pendulums**

---

### Defining SHM

Simple harmonic motion occurs when the restoring force is **proportional to displacement**:

$$F = -kx$$

This leads to the differential equation:
$$m\\frac{d^2x}{dt^2} = -kx$$

**Solution:** $x(t) = A\\cos(\\omega t + \\phi)$

---

### Key Quantities

| Quantity | Formula | Units |
|----------|---------|-------|
| Angular frequency | $\\omega = \\sqrt{k/m}$ | rad/s |
| Period | $T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$ | s |
| Frequency | $f = 1/T = \\omega/(2\\pi)$ | Hz |
| Amplitude | $A$ | m |

---

### Energy in SHM

$$E = \\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

| At | PE | KE |
|----|----|----|
| $x = \\pm A$ | Maximum | Zero |
| $x = 0$ | Zero | Maximum |

> 🔑 Total mechanical energy is constant in SHM (no friction).`
    },
    {
      id: 'physicsc-oscillations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the mass on a spring will change the period by a factor of:',
            options: ['$2$', '$\\sqrt{2}$', '$4$', '$1/\\sqrt{2}$'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{m/k}$. Doubling $m$ multiplies $T$ by $\\sqrt{2}$.'
          },
          {
            question: 'At the equilibrium position in SHM:',
            options: ['KE is maximum', 'PE is maximum', 'Speed is zero', 'Acceleration is maximum'],
            correctAnswer: 0,
            explanation: 'At equilibrium ($x=0$), all energy is kinetic → maximum speed.'
          },
          {
            question: 'The restoring force in SHM is:',
            options: ['Constant', 'Proportional to displacement', 'Proportional to velocity', 'Zero'],
            correctAnswer: 1,
            explanation: '$F = -kx$ — the force is proportional to displacement and directed toward equilibrium.'
          }
        ]
      }
    }
  ]
};
