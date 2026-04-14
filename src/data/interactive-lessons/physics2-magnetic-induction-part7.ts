export const physics2MagInductPart7Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p7-intro',
      type: 'text' as const,
      content: `# 🧩 Magnetic Induction — Synthesis & Review

**Part 7 of 7 — Comprehensive Review**

---

### Master Equation Reference

| Topic | Equation | Units |
|-------|----------|-------|
| Magnetic flux | $\\Phi_B = BA\\cos\\theta$ | Wb = T·m² |
| Faraday's law | $\\mathcal{E} = -N\\frac{d\\Phi}{dt}$ | V |
| Motional EMF | $\\mathcal{E} = BLv$ | V |
| Induced current | $I = \\mathcal{E}/R$ | A |
| Magnetic braking force | $F = B^2L^2v/R$ | N |
| Self-inductance EMF | $\\mathcal{E}_L = -LdI/dt$ | V |
| Solenoid inductance | $L = \\mu_0 N^2 A/\\ell$ | H |
| Inductor energy | $U = \\frac{1}{2}LI^2$ | J |
| LR time constant | $\\tau = L/R$ | s |
| Transformer | $V_s/V_p = N_s/N_p = I_p/I_s$ | — |

### Cross-Topic Connections

| Induction Concept | Related Topic | Connection |
|------------------|---------------|------------|
| $\\mathcal{E} = -d\\Phi/dt$ | EM waves ($E$ and $B$ fields) | Changing $B$ creates $E$ (Faraday), changing $E$ creates $B$ (Maxwell) |
| Lenz's law | Conservation of energy | Induced effects always oppose — prevents perpetual motion |
| $U = \\frac{1}{2}LI^2$ | $U = \\frac{1}{2}CV^2$ | LC circuits oscillate energy between magnetic and electric fields |
| Transformer equation | Conservation of energy | $P_{\\text{in}} = P_{\\text{out}}$ for ideal transformer |
| Motional EMF | Work-energy theorem | Mechanical work converts to electrical energy |
| Eddy currents | Thermal physics | Kinetic energy → heat in conductors |
      `
    },
    {
      id: 'magneticinduction-p7-tips',
      type: 'text' as const,
      content: `
## AP Exam Tips

### Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|-----------------|
| Using $\\theta$ between $B$ and loop surface | $\\theta$ is between $B$ and the **normal** to the loop |
| Saying Lenz's law opposes the flux | It opposes the **change** in flux |
| EMF while loop is fully inside uniform field | EMF = 0 when flux is constant — even if the loop is moving! |
| Confusing $\\mathcal{E}$ with current | $\\mathcal{E}$ is induced even without a circuit; current requires a closed path |
| Forgetting $N$ in Faraday's law | $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$ — each turn contributes |
| Applying $\\mathcal{E} = BLv$ to a rotating coil | Use $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$ for rotation |

### Key Conceptual Questions

1. **Can you have an EMF without current?** Yes — if the circuit is open, charges build up but don't flow.
2. **Can you have current without an external EMF?** Yes — induced EMF drives current in a closed loop.
3. **Does a transformer work with DC?** No — DC produces constant flux → no $d\\Phi/dt$ → no induced EMF in secondary (except briefly when switched on/off).
4. **Why do transformers use laminated cores?** To reduce eddy currents, which waste energy as heat.
      `
    },
    {
      id: 'magneticinduction-p7-check1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A coil rotates in a uniform magnetic field. At which position is the induced EMF maximum?',
            options: [
              'When the coil is perpendicular to $B$ (maximum flux)',
              'When the coil is parallel to $B$ (zero flux)',
              'At $45°$ to $B$',
              'EMF is constant during rotation'
            ],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = NBA\\omega\\sin(\\omega t)$. EMF is maximum when $\\sin(\\omega t) = 1$, which is when the coil plane is parallel to $B$ (flux is zero but changing most rapidly). Maximum flux ≠ maximum EMF! EMF depends on the RATE of change of flux.'
          },
          {
            question: 'A DC motor has a back-EMF of 110 V when running at full speed. If the supply is 120 V and armature resistance is 2 Ω, the running current is:',
            options: ['60 A', '5 A', '55 A', '10 A'],
            correctAnswer: 1,
            explanation: 'Net voltage across resistance = $120 - 110 = 10$ V. $I = 10/2 = 5$ A. When the motor first starts (back-EMF = 0), $I = 120/2 = 60$ A — this is why motors draw high starting current!'
          },
          {
            question: 'Two identical loops are near an electromagnet. Loop A is twice as far away. If the magnet is turned off, which loop has a larger induced EMF?',
            options: [
              'Loop A (farther away)',
              'Loop B (closer) — experiences larger flux change',
              'Equal — same magnet, same time',
              'Cannot determine without knowing $R$'
            ],
            correctAnswer: 1,
            explanation: 'Loop B (closer) has a larger initial flux through it, so when the magnet turns off, its $\\Delta\\Phi$ is larger → larger induced EMF. Field strength drops off with distance, so the closer loop always experiences a greater flux change.'
          },
          {
            question: 'An ideal transformer steps 120 V up to 480 V. If it supplies 2 A to a load, the primary current is:',
            options: ['0.5 A', '2 A', '8 A', '32 A'],
            correctAnswer: 2,
            explanation: 'Power conservation: $I_p V_p = I_s V_s$. $I_p = I_s V_s / V_p = 2 \\times 480/120 = 8$ A. Voltage goes up 4×, current goes down 4×.'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

A 100-turn coil (area 0.05 m²) rotates at 60 Hz in a 0.2 T field.

**1)** Angular frequency $\\omega$? (rad/s, round to nearest integer)

**2)** Peak EMF? (V, round to 1 decimal)

**3)** RMS voltage? (V, round to 1 decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['377', '377.0', '266.6'],
        hint1: '$\\omega = 2\\pi f$',
        hint2: '$\\mathcal{E}_{\\text{peak}} = NBA\\omega$',
        hint3: '$V_{\\text{rms}} = V_{\\text{peak}}/\\sqrt{2}$',
        explanation: '1) $\\omega = 2\\pi(60) = 120\\pi \\approx 377$ rad/s. 2) $\\mathcal{E}_{\\text{peak}} = 100 \\times 0.2 \\times 0.05 \\times 377 = 377$ V. 3) $V_{\\text{rms}} = 377/\\sqrt{2} \\approx 266.6$ V.'
      }
    }
  ]
};
