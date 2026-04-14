export const physCVarMassPart7Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm7-intro',
      type: 'text' as const,
      content: `# Variable Mass — Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Equation | Expression |
|:---|:---|
| Variable-mass EOM | $m\\frac{dv}{dt} = -v_e\\frac{dm}{dt} + F_{\\text{ext}}$ |
| Tsiolkovsky (no gravity) | $\\Delta v = v_e \\ln(m_0/m_f)$ |
| With gravity | $\\Delta v = v_e \\ln(m_0/m_f) - gt_b$ |
| Thrust | $F = v_e \\dot{m}$ |
| Specific impulse | $I_{sp} = v_e/g_0$ |
| Falling chain force | $F_{\\text{table}} = 3Mgx/L$ |
| Cart + rain | $v = Mv_0/(M + \\alpha t)$ |
| Rope lift | $F = (M/L)(gy + v^2)$ |

### Critical Distinctions

| Scenario | $v_{\\text{rel}}$ | Effect |
|:---|:---|:---|
| Rocket exhaust | $v_e$ backward | Thrust forward |
| Sand leaking down | $0$ (horizontal) | No speed change |
| Rain into cart | $-v$ (horizontal) | Cart slows down |
| Sand thrown back | $v + v_e$ | Thrust forward |`
    },
    {
      id: 'vm7-mcq1',
      type: 'mcq' as const,
      question: 'A single-stage rocket must reach $\\Delta v = 9{,}000$ m/s with $v_e = 3{,}000$ m/s. What fraction of its initial mass must be fuel?',
      options: ['$1 - e^{-3} \\approx 95\\%$', '$1 - e^{-2} \\approx 86\\%$', '$75\\%$', '$90\\%$'],
      correctAnswer: 0,
      explanation: '$9000 = 3000\\ln(m_0/m_f)$. $m_0/m_f = e^3 \\approx 20.1$. Fuel fraction $= 1 - m_f/m_0 = 1 - e^{-3} \\approx 1 - 0.05 = 0.95$, or about $95\\%$.'
    },
    {
      id: 'vm7-mcq2',
      type: 'mcq' as const,
      question: 'A chain of mass $M$ and length $L$ is dropped from height $L$ onto a scale. When half the chain has landed ($x = L/2$), the reading is:',
      options: ['$3Mg/2$', '$Mg/2$', '$Mg$', '$2Mg$'],
      correctAnswer: 0,
      explanation: '$F = 3Mgx/L = 3Mg(L/2)/L = 3Mg/2$. The factor of $3$ comes from the weight of the piled chain ($Mgx/L$) plus the impact force ($2Mgx/L$).'
    },
    {
      id: 'vm7-worked',
      type: 'text' as const,
      content: `### AP-Style Problem

A toy rocket of total mass $0.5$ kg (including $0.4$ kg propellant) sits on a launch pad. Its engine produces an exhaust velocity of $500$ m/s and burns fuel at a constant rate for $10$ seconds.

**(a)** Find the burn rate $\\dot{m}$.

$$\\dot{m} = \\frac{0.4}{10} = 0.04 \\text{ kg/s}$$

**(b)** Find the thrust.

$$F = v_e \\dot{m} = 500 \\times 0.04 = 20 \\text{ N}$$

**(c)** Will it lift off?

$$\\text{TWR} = \\frac{20}{0.5 \\times 9.8} = \\frac{20}{4.9} \\approx 4.08 > 1 \\quad \\checkmark$$

**(d)** Find $\\Delta v$ at burnout.

$$\\Delta v = 500\\ln\\frac{0.5}{0.1} - 9.8(10) = 500\\ln 5 - 98 = 500(1.609) - 98 = 804.7 - 98 = 706.7 \\text{ m/s}$$

**(e)** Find the acceleration at burnout.

$$a = \\frac{20}{0.1} - 9.8 = 200 - 9.8 = 190.2 \\text{ m/s}^2 \\approx 19.4g$$`
    },
    {
      id: 'vm7-mcq3',
      type: 'mcq' as const,
      question: 'A bucket on a frictionless surface moves at $5$ m/s while collecting stationary objects. After its mass triples, its speed is:',
      options: ['$5/3$ m/s', '$5$ m/s', '$15$ m/s', '$5/9$ m/s'],
      correctAnswer: 0,
      explanation: 'Momentum conservation (collected objects are stationary): $mv_0 = 3m \\cdot v_f$. $v_f = v_0/3 = 5/3$ m/s.'
    },
    {
      id: 'vm7-mcq4',
      type: 'mcq' as const,
      question: 'The key difference between the "sand leaking from a cart" and "rain falling into a cart" problems is:',
      options: [
        'The relative velocity of the ejected/accreted mass',
        'The total mass of the system',
        'Whether gravity acts',
        'The direction of motion'
      ],
      correctAnswer: 0,
      explanation: 'Leaking sand has $v_{\\text{rel}} = 0$ (leaves with cart velocity), so no speed change. Rain has $v_{\\text{rel}} \\neq 0$ (arrives with zero horizontal speed), so it acts as a drag. The crucial factor is the relative velocity.'
    },
    {
      id: 'vm7-mcq5',
      type: 'mcq' as const,
      question: 'In the Tsiolkovsky equation, to achieve $\\Delta v = 3v_e$, the mass ratio $m_0/m_f$ must be:',
      options: ['$e^3 \\approx 20.1$', '$3$', '$9$', '$e^{1/3} \\approx 1.4$'],
      correctAnswer: 0,
      explanation: '$\\Delta v = v_e \\ln(m_0/m_f)$. $3v_e = v_e \\ln(m_0/m_f)$. $m_0/m_f = e^3 \\approx 20.1$. This shows the exponential cost of high $\\Delta v$ — about $95\\%$ of the initial mass must be fuel.'
    },
    {
      id: 'vm7-summary',
      type: 'text' as const,
      content: `## 🎉 Topic Complete — Variable Mass Systems

You've mastered:

| Part | Topic | Status |
|:---|:---|:---|
| 1 | Rocket equation derivation | ✅ |
| 2 | Tsiolkovsky equation | ✅ |
| 3 | Thrust force | ✅ |
| 4 | Variable mass chains/ropes | ✅ |
| 5 | Mass accretion problems | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Insight:** Always identify $v_{\\text{rel}}$ — the velocity of the mass entering or leaving the system relative to the system. This single quantity determines whether the system speeds up, slows down, or maintains speed.`
    }
  ]
};
