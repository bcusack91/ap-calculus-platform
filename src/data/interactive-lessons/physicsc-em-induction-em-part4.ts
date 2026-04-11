export const physCEMInductionPart4Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p4-intro',
      type: 'text' as const,
      content: `# ⏱️ RL Circuits

**Part 4 of 7 — Inductors in DC Circuits**

---

### Current Growth (RL circuit with battery)

$$I(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-t/\\tau})$$

where $\\tau = L/R$

---

### Current Decay

$$I(t) = I_0 e^{-t/\\tau}$$

---

### Comparison with RC Circuits

| Property | RC | RL |
|----------|----|----|
| Time constant | $\\tau = RC$ | $\\tau = L/R$ |
| Charging | $q = C\\mathcal{E}(1-e^{-t/\\tau})$ | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ |
| Discharging | $q = Q_0 e^{-t/\\tau}$ | $I = I_0 e^{-t/\\tau}$ |

> 🔑 Inductors resist changes in current, just as capacitors resist changes in voltage.`
    },
    {
      id: 'physicsc-em-induction-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The time constant of an RL circuit is:',
            options: ['$LR$', '$L/R$', '$R/L$', '$\\sqrt{LR}$'],
            correctAnswer: 1,
            explanation: '$\\tau = L/R$. Note that larger $L$ means a longer time constant (more resistance to change).'
          }
        ]
      }
    }
  ]
};
