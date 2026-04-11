export const physCEMCircuitsPart4Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p4-intro',
      type: 'text' as const,
      content: `# ⏱️ RC Circuits

**Part 4 of 7 — Charging and Discharging Capacitors**

---

### Charging an RC Circuit

$$q(t) = C\\mathcal{E}(1 - e^{-t/RC})$$

$$I(t) = \\frac{\\mathcal{E}}{R}e^{-t/RC}$$

$$V_C(t) = \\mathcal{E}(1 - e^{-t/RC})$$

---

### Discharging an RC Circuit

$$q(t) = Q_0 e^{-t/RC}$$

$$I(t) = -\\frac{Q_0}{RC}e^{-t/RC}$$

---

### Time Constant

$$\\tau = RC$$

| Time | Charge (charging) | Charge (discharging) |
|------|-------------------|---------------------|
| $t = \\tau$ | 63.2% of max | 36.8% remaining |
| $t = 2\\tau$ | 86.5% of max | 13.5% remaining |
| $t = 5\\tau$ | 99.3% of max | ≈ 0% remaining |

> 🔑 After 5 time constants, the circuit is essentially at steady state.`
    },
    {
      id: 'physicsc-dc-circuits-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The time constant $\\tau$ of an RC circuit is:',
            options: ['$R/C$', '$RC$', '$R + C$', '$1/(RC)$'],
            correctAnswer: 1,
            explanation: '$\\tau = RC$. This has units of seconds: $\\Omega \\cdot F = (V/A)(C/V) = C/A = s$.'
          },
          {
            question: 'After one time constant of charging, the capacitor is at:',
            options: ['37% of max', '50% of max', '63% of max', '100% of max'],
            correctAnswer: 2,
            explanation: '$q(\\tau) = C\\mathcal{E}(1 - e^{-1}) = C\\mathcal{E}(1 - 0.368) = 0.632 C\\mathcal{E}$, or 63.2%.'
          }
        ]
      }
    }
  ]
};
