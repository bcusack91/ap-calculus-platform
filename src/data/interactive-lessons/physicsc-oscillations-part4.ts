export const physCOscillationsPart4Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p4-intro',
      type: 'text' as const,
      content: `# 📉 Damped Oscillations

**Part 4 of 7 — Friction and Decay**

---

### Damping Force

$$F_{\\text{damp}} = -b\\frac{dx}{dt}$$

The equation of motion becomes:
$$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = 0$$

---

### Solution: Underdamped Case

$$x(t) = Ae^{-\\gamma t}\\cos(\\omega' t + \\phi)$$

where $\\gamma = b/(2m)$ and $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2}$

---

### Three Damping Regimes

| Regime | Condition | Behavior |
|--------|-----------|----------|
| **Underdamped** | $\\gamma < \\omega_0$ | Oscillates with decaying amplitude |
| **Critically damped** | $\\gamma = \\omega_0$ | Returns to equilibrium fastest, no oscillation |
| **Overdamped** | $\\gamma > \\omega_0$ | Slow return, no oscillation |

> 🔑 Critical damping is used in car suspensions — fastest return to equilibrium without overshooting.`
    },
    {
      id: 'physicsc-oscillations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In underdamped oscillation, the amplitude:',
            options: ['Stays constant', 'Decreases exponentially', 'Increases', 'Drops to zero instantly'],
            correctAnswer: 1,
            explanation: 'The $e^{-\\gamma t}$ factor causes exponential decay of the amplitude.'
          }
        ]
      }
    }
  ]
};
