export const physics2MagInductPart6Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Induction Problem Strategy

| Step | Action | Details |
|------|--------|---------|
| 1 | **Identify** | What's changing? ($B$, $A$, $\\theta$, or motion?) |
| 2 | **Calculate flux change** | $\\Delta\\Phi = \\Delta(BA\\cos\\theta)$ |
| 3 | **Apply Faraday's law** | $|\\mathcal{E}| = N|\\Delta\\Phi/\\Delta t|$ for magnitude |
| 4 | **Apply Lenz's law** | Determine current direction |
| 5 | **Find secondary quantities** | Current ($I = \\mathcal{E}/R$), force ($F = BIL$), power ($P = I^2R$) |

### Common AP Scenarios

| Scenario | Key Equation | Watch Out For |
|----------|-------------|---------------|
| Bar on rails | $\\mathcal{E} = BLv$ | Direction via Lenz's law |
| Rotating coil | $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$ | Peak EMF = $NBA\\omega$ |
| Electromagnet on/off | $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$ | Only during transition, not steady state |
| Transformer | $V_s/V_p = N_s/N_p$ | Ideal: $P_p = P_s$; conservation of energy |
| Loop entering/leaving field | Changes while entering; zero while fully inside; changes when leaving | Very common AP question! |
      `
    },
    {
      id: 'magneticinduction-p6-worked',
      type: 'text' as const,
      content: `
## Worked Problem: Loop Entering a Field Region

**A rectangular loop (0.1 m × 0.2 m, $R = 5$ Ω) is pulled at constant 3 m/s into a region where $B = 0.4$ T (into the page). The 0.2 m side enters first.**

**Phase 1: Entering the field**
- Only the leading edge is in the field; effective "rod" length = 0.2 m
- $\\mathcal{E} = BLv = 0.4 \\times 0.2 \\times 3 = 0.24$ V
- $I = 0.24/5 = 0.048$ A
- Lenz's law: flux into page is increasing → induced current is CCW
- Duration: time to fully enter = $0.1/3 = 0.033$ s

**Phase 2: Fully inside the field**
- No change in flux (constant $B$, $A$, $\\theta$) → $\\mathcal{E} = 0$, $I = 0$!

**Phase 3: Leaving the field**
- Leading edge exits; trailing edge still in field
- $\\mathcal{E} = BLv = 0.24$ V (same magnitude)
- Lenz's law: flux decreasing → current is CW (opposite to Phase 1)

> 🔑 **AP trap**: Students often think there's always a current. In Phase 2, with the loop fully inside a uniform field, there's NO induced EMF.

---

## Worked Problem: Transformer

**A step-up transformer has 100 primary turns and 500 secondary turns. Primary voltage = 120 V. What is the secondary voltage and current if primary current = 10 A?**

$$V_s = V_p \\times \\frac{N_s}{N_p} = 120 \\times \\frac{500}{100} = 600 \\text{ V}$$

For an ideal transformer ($P_p = P_s$):
$$I_s = I_p \\times \\frac{N_p}{N_s} = 10 \\times \\frac{100}{500} = 2 \\text{ A}$$

Voltage goes up by 5×, current goes down by 5×. Power is conserved: $120 \\times 10 = 600 \\times 2 = 1200$ W.
      `
    },
    {
      id: 'magneticinduction-p6-check1',
      type: 'multiple-choice' as const,
      content: `
**Problem Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A square loop moves at constant velocity through a uniform magnetic field (entirely inside the field). The induced current is:',
            options: ['Maximum', 'Constant but non-zero', 'Zero', 'Increasing linearly'],
            correctAnswer: 2,
            explanation: 'Uniform field + constant area + constant orientation = constant flux. No $\\Delta\\Phi$ = no EMF = no current. Induction requires CHANGING flux.'
          },
          {
            question: 'A step-down transformer converts 240 V to 12 V. If the primary has 1000 turns, the secondary has:',
            options: ['50 turns', '20,000 turns', '500 turns', '100 turns'],
            correctAnswer: 0,
            explanation: '$N_s = N_p \\times V_s/V_p = 1000 \\times 12/240 = 50$ turns. Fewer secondary turns = lower voltage.'
          },
          {
            question: 'A rotating coil generator has maximum EMF of 170 V. The RMS voltage is approximately:',
            options: ['170 V', '120 V', '85 V', '240 V'],
            correctAnswer: 1,
            explanation: '$V_{\\text{rms}} = V_{\\text{peak}}/\\sqrt{2} = 170/1.414 \\approx 120$ V. This is why US household outlets are rated 120 V (rms) while peak is about 170 V.'
          },
          {
            question: 'A 50-turn coil ($A = 0.02$ $m^{2}$) rotates at 120 rev/s in a 0.3 T field. Peak EMF:',
            options: ['36 V', '226 V', '1131 V', '113 V'],
            correctAnswer: 2,
            explanation: '$\\omega = 2\\pi \\times 120 = 754$ rad/s. $\\mathcal{E}_{\\text{peak}} = NBA\\omega = 50 \\times 0.3 \\times 0.02 \\times 754 = 226$ V. Wait — $50 \\times 0.3 \\times 0.02 = 0.3$, $0.3 \\times 754 = 226$ V. But let me recheck: actually $\\mathcal{E} = NBA\\omega = 50(0.3)(0.02)(240\\pi) = 0.3 \\times 753.98 \\approx 226$ V.'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p6-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Problem** 🧮

A 0.3 m rod on frictionless rails ($R = 2$ Ω) in a 0.5 T field slides at 8 m/s.

**1)** Induced EMF? (V)

**2)** Current? (A)

**3)** Force needed to maintain constant speed? (N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '0.6', '0.09'],
        hint1: '$\\mathcal{E} = BLv$',
        hint2: '$I = \\mathcal{E}/R$',
        hint3: '$F = BIL$ (this force must balance the magnetic braking force)',
        explanation: '1) $\\mathcal{E} = 0.5 \\times 0.3 \\times 8 = 1.2$ V. 2) $I = 1.2/2 = 0.6$ A. 3) $F = BIL = 0.5 \\times 0.6 \\times 0.3 = 0.09$ N. This is the applied force needed to overcome the magnetic braking force and keep the rod moving at constant speed.'
      }
    }
  ]
};
