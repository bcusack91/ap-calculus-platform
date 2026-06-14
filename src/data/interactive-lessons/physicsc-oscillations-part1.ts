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

Simple harmonic motion occurs when the restoring force is **proportional to displacement** and directed toward equilibrium:

$F = -kx$

This leads to the differential equation:

$m\\frac{d^2x}{dt^2} = -kx \\quad\\Longrightarrow\\quad \\frac{d^2x}{dt^2} = -\\omega^2 x$

**Solution:** $x(t) = A\\cos(\\omega t + \\phi)$

---

### Key Quantities

| Quantity | Formula | Units |
|----------|---------|-------|
| Angular frequency | $\\omega = \\sqrt{k/m}$ | $\\text{rad/s}$ |
| Period | $T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$ | $\\text{s}$ |
| Frequency | $f = 1/T = \\omega/(2\\pi)$ | $\\text{Hz}$ |
| Amplitude | $A$ | $\\text{m}$ |

---

### Energy in SHM

$E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}kx^2 + \\tfrac{1}{2}mv^2$

| At | PE | KE |
|----|----|----|
| $x = \\pm A$ | Maximum | Zero |
| $x = 0$ | Zero | Maximum |

> 🔑 Total mechanical energy is constant in SHM (no friction).`
    },
    {
      id: 'physicsc-oscillations-p1-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Verifying the SHM Differential Equation

Show that $x(t) = A\\cos(\\omega t + \\phi)$ solves $\\dfrac{d^2x}{dt^2} = -\\omega^2 x$, and use it to find the speed at $x = A/2$.

**Step 1 — Differentiate once for velocity.**

$v(t) = \\frac{dx}{dt} = -A\\omega\\sin(\\omega t + \\phi)$

**Step 2 — Differentiate again for acceleration.**

$a(t) = \\frac{d^2x}{dt^2} = -A\\omega^2\\cos(\\omega t + \\phi)$

**Step 3 — Compare with the original.** Since $x = A\\cos(\\omega t + \\phi)$, we can substitute:

$a = -\\omega^2\\big[A\\cos(\\omega t + \\phi)\\big] = -\\omega^2 x \\quad✅$

The proposed function satisfies the equation for **any** amplitude $A$ and phase $\\phi$.

**Step 4 — Speed at $x = A/2$ using energy.** Conservation of energy gives $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}kx^2 + \\tfrac{1}{2}mv^2$, so:

$v = \\omega\\sqrt{A^2 - x^2} = \\omega\\sqrt{A^2 - (A/2)^2} = \\omega A\\sqrt{1 - \\tfrac{1}{4}} = \\frac{\\sqrt{3}}{2}\\,\\omega A \\approx 0.87\\,v_{\\max}$

> 🔑 Differentiating the position twice always returns $-\\omega^2$ times the original — that is the signature of SHM.`
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
            explanation: 'At equilibrium ($x=0$) all energy is kinetic, so KE and speed are maximum while acceleration is zero.'
          },
          {
            question: 'The restoring force in SHM is:',
            options: ['Constant', 'Proportional to displacement', 'Proportional to velocity', 'Zero'],
            correctAnswer: 1,
            explanation: '$F = -kx$ — the force is proportional to displacement and directed toward equilibrium.'
          },
          {
            question: 'Substituting $x(t) = A\\cos(\\omega t + \\phi)$ into $d^2x/dt^2$ gives:',
            options: ['$+\\omega^2 x$', '$-\\omega^2 x$', '$-\\omega x$', '$+A\\omega$'],
            correctAnswer: 1,
            explanation: 'Differentiating twice yields $-A\\omega^2\\cos(\\omega t + \\phi) = -\\omega^2 x$, the defining SHM equation.'
          },
          {
            question: 'A mass on a spring has amplitude $A$. Its speed when $x = A/2$ is:',
            options: ['$v_{\\max}$', '$\\tfrac{1}{2}v_{\\max}$', '$\\tfrac{\\sqrt{3}}{2}v_{\\max}$', '$0$'],
            correctAnswer: 2,
            explanation: '$v = \\omega\\sqrt{A^2 - x^2} = \\omega A\\sqrt{1 - 1/4} = \\tfrac{\\sqrt{3}}{2}\\,\\omega A = \\tfrac{\\sqrt{3}}{2}v_{\\max}$.'
          },
          {
            question: 'If the amplitude of a mass-spring oscillator doubles, the total mechanical energy:',
            options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
            correctAnswer: 2,
            explanation: '$E = \\tfrac{1}{2}kA^2 \\propto A^2$. Doubling $A$ multiplies the energy by $2^2 = 4$.'
          }
        ]
      }
    }
  ]
};
