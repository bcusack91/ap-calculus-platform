export const physCOscillationsPart5Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p5-intro',
      type: 'text' as const,
      content: `# 🔊 Driven Oscillations & Resonance

**Part 5 of 7 — Forced Vibrations**

---

### Driven Oscillation

Apply a periodic driving force: $F(t) = F_0 \\cos(\\omega_d t)$

$$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F_0 \\cos(\\omega_d t)$$

Steady-state solution: $x(t) = A(\\omega_d)\\cos(\\omega_d t - \\delta)$

---

### Resonance

$$A(\\omega_d) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}}$$

Maximum amplitude occurs near $\\omega_d = \\omega_0$ (natural frequency).

> 🔑 **Resonance** = driving frequency matches natural frequency → maximum energy transfer.`
    },
    {
      id: 'physicsc-oscillations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Resonance occurs when the driving frequency:',
            options: ['Is zero', 'Equals the natural frequency', 'Is twice the natural frequency', 'Is very high'],
            correctAnswer: 1,
            explanation: 'Maximum amplitude occurs when $\\omega_d \\approx \\omega_0$, the natural frequency.'
          }
        ]
      }
    }
  ]
};
