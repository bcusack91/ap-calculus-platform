export const physCEMIndRLPart3Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl3-intro',
      type: 'text' as const,
      content: `# RL Charging and Discharging

**Part 3 of 7 — Growth and Decay of Current**

### Charging (Growth)

Switch closes at $t = 0$, connecting $\\mathcal{E}$, $R$, and $L$ in series:

$$I(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/\\tau}\\right), \\quad \\tau = \\frac{L}{R}$$

The current **rises** from 0 toward $\\mathcal{E}/R$ exponentially.

### Discharging (Decay)

If the EMF source is removed and the circuit is closed through $R$ only (initial current $I_0$):

$$L\\frac{dI}{dt} + IR = 0 \\implies I(t) = I_0 e^{-t/\\tau}$$

The current **decays** exponentially from $I_0$ to 0.

| Phase | Equation | $I(0)$ | $I(\\infty)$ |
|:---:|:---:|:---:|:---:|
| Charging | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ | 0 | $\\mathcal{E}/R$ |
| Discharging | $I = I_0 e^{-t/\\tau}$ | $I_0$ | 0 |`
    },
    {
      id: 'indrl3-mcq1',
      type: 'mcq' as const,
      question: 'An RL circuit has $L = 0.5$ H, $R = 10\\,\\Omega$, $\\mathcal{E} = 20$ V. After 0.05 s (one time constant), the current is approximately:',
      options: ['$1.264$ A', '$2$ A', '$0.736$ A', '$1$ A'],
      correctAnswer: 0,
      explanation: '$\\tau = L/R = 0.05$ s. $I(\\tau) = (\\mathcal{E}/R)(1-e^{-1}) = 2(1-0.368) = 2(0.632) = 1.264$ A.'
    },
    {
      id: 'indrl3-decay-derivation',
      type: 'text' as const,
      content: `### Derivation of the Decay Solution

Starting from $L\\,dI/dt + IR = 0$:

$$\\frac{dI}{I} = -\\frac{R}{L}dt$$

$$\\int_{I_0}^{I} \\frac{dI'}{I'} = -\\frac{R}{L}\\int_0^t dt'$$

$$\\ln\\frac{I}{I_0} = -\\frac{Rt}{L}$$

$$I(t) = I_0 e^{-Rt/L} = I_0 e^{-t/\\tau}$$

### Voltage During Decay

$$V_R = IR = I_0 R e^{-t/\\tau}$$

$$V_L = L\\frac{dI}{dt} = L \\cdot I_0 \\left(-\\frac{R}{L}\\right)e^{-t/\\tau} = -I_0 R e^{-t/\\tau}$$

Note: $V_L = -V_R$ (KVL with no EMF source). The inductor drives current through the resistor, acting as a temporary EMF source.`
    },
    {
      id: 'indrl3-mcq2',
      type: 'mcq' as const,
      question: 'During RL decay, the initial magnitude of the voltage across the inductor equals:',
      options: ['$I_0 R$', '$I_0 L$', '$\\mathcal{E}$', '$L/R$'],
      correctAnswer: 0,
      explanation: '$|V_L(0)| = |{-I_0 R e^0}| = I_0 R$. The inductor initially maintains the full current, so the full voltage appears across $R$ (and equally across $L$).'
    },
    {
      id: 'indrl3-multiple-tau',
      type: 'text' as const,
      content: `### Progress at Multiple Time Constants

For **charging** ($I/I_{\\max}$) and **discharging** ($I/I_0$):

| $t/\\tau$ | Charging: $1-e^{-t/\\tau}$ | Discharging: $e^{-t/\\tau}$ |
|:---:|:---:|:---:|
| 1 | 63.2% | 36.8% |
| 2 | 86.5% | 13.5% |
| 3 | 95.0% | 5.0% |
| 4 | 98.2% | 1.8% |
| 5 | 99.3% | 0.7% |

> **Rule of thumb:** After $5\\tau$, the transient is essentially complete (< 1% remaining).

### Solving for Time

How long to reach a specific current $I_f$ during charging?

$$I_f = \\frac{\\mathcal{E}}{R}(1-e^{-t/\\tau}) \\implies e^{-t/\\tau} = 1 - \\frac{I_f R}{\\mathcal{E}}$$

$$t = -\\tau \\ln\\left(1 - \\frac{I_f R}{\\mathcal{E}}\\right)$$`
    },
    {
      id: 'indrl3-mcq3',
      type: 'mcq' as const,
      question: 'How many time constants does it take for the current in a discharging RL circuit to drop to 10% of its initial value?',
      options: ['$\\approx 2.30\\tau$', '$\\approx 1.00\\tau$', '$\\approx 3.00\\tau$', '$\\approx 0.10\\tau$'],
      correctAnswer: 0,
      explanation: '$e^{-t/\\tau} = 0.10 \\implies -t/\\tau = \\ln(0.10) = -2.303 \\implies t = 2.303\\tau$.'
    },
    {
      id: 'indrl3-mcq4',
      type: 'mcq' as const,
      question: 'An RL circuit has $\\tau = 0.1$ s. If the circuit is charging and has been connected for 0.3 s, the current has reached what fraction of its maximum?',
      options: ['95.0%', '86.5%', '63.2%', '99.3%'],
      correctAnswer: 0,
      explanation: '$t/\\tau = 0.3/0.1 = 3$. Fraction $= 1 - e^{-3} = 1 - 0.050 = 0.950 = 95.0\\%$.'
    },
    {
      id: 'indrl3-summary',
      type: 'text' as const,
      content: `### Summary — Part 3

| Phase | Current | Key Feature |
|:---:|:---:|:---:|
| Charging | $(\\mathcal{E}/R)(1-e^{-t/\\tau})$ | Approaches $\\mathcal{E}/R$ |
| Discharging | $I_0 e^{-t/\\tau}$ | Decays to 0 |
| At $t = \\tau$ | 63.2% of final (charging) | 36.8% remaining (discharging) |
| At $t = 5\\tau$ | 99.3% complete | < 1% remaining |

> **Next up:** The time constant $\\tau = L/R$ in depth — Part 4.`
    }
  ]
};
