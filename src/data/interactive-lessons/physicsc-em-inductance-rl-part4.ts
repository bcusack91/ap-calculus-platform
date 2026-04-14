export const physCEMIndRLPart4Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl4-intro',
      type: 'text' as const,
      content: `# Time Constant $\\tau = L/R$

**Part 4 of 7 — Physical Meaning and Applications**

### What Does $\\tau = L/R$ Tell Us?

The time constant sets the **timescale** for the RL transient:

$$\\tau = \\frac{L}{R}$$

**Physical interpretation:**
- **Large $L$**: more energy stored per unit current → slower change
- **Large $R$**: more energy dissipated per unit current → faster decay
- $\\tau$ is the time for the current to reach $1 - 1/e \\approx 63.2\\%$ of its final value (charging)
- $\\tau$ is the time for the current to fall to $1/e \\approx 36.8\\%$ (discharging)

### Units Check

$$\\frac{[L]}{[R]} = \\frac{\\text{H}}{\\Omega} = \\frac{\\text{V}\\cdot\\text{s}/\\text{A}}{\\text{V}/\\text{A}} = \\text{s} \\quad \\checkmark$$`
    },
    {
      id: 'indrl4-mcq1',
      type: 'mcq' as const,
      question: 'An RL circuit has $L = 2$ H and $R = 100\\,\\Omega$. The time constant is:',
      options: ['20 ms', '200 ms', '2 ms', '50 ms'],
      correctAnswer: 0,
      explanation: '$\\tau = L/R = 2/100 = 0.02$ s $= 20$ ms.'
    },
    {
      id: 'indrl4-initial-slope',
      type: 'text' as const,
      content: `### The Initial Slope Interpretation

At $t = 0$ during charging:

$$\\frac{dI}{dt}\\bigg|_{t=0} = \\frac{\\mathcal{E}}{L}$$

If the current continued at this initial rate, it would reach $\\mathcal{E}/R$ at time:

$$t = \\frac{\\mathcal{E}/R}{\\mathcal{E}/L} = \\frac{L}{R} = \\tau$$

> The time constant is the time the current **would** take to reach its final value **if it maintained its initial rate of change**.

### Multiple Resistors

For complex circuits, the time constant uses the **Thévenin resistance** seen by the inductor:

$$\\tau = \\frac{L}{R_{\\text{Th}}}$$

**Example:** If $L$ is in series with $R_1$ and both are in parallel with $R_2$:

When the source is removed (for decay), $R_{\\text{Th}} = R_1 + R_2$ (series from L's perspective) → **No!** Actually from the inductor's terminals: $R_{\\text{Th}} = R_1 + R_2$ if they're in series, or compute properly using Thévenin.`
    },
    {
      id: 'indrl4-mcq2',
      type: 'mcq' as const,
      question: 'If the resistance in an RL circuit is doubled while $L$ stays the same, the time constant:',
      options: ['Halves', 'Doubles', 'Quadruples', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$\\tau = L/R$. Doubling $R$: $\\tau_{\\text{new}} = L/(2R) = \\tau/2$.'
    },
    {
      id: 'indrl4-dimensional',
      type: 'text' as const,
      content: `### Comparison: RL vs. RC Time Constants

| Circuit | Time Constant | Equation | Growing | Decaying |
|:---:|:---:|:---:|:---:|:---:|
| RC | $\\tau = RC$ | $V_C = \\mathcal{E}(1-e^{-t/\\tau})$ | Voltage grows | Voltage decays |
| RL | $\\tau = L/R$ | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ | Current grows | Current decays |

### Key Analogy

| RC Quantity | RL Analog |
|:---:|:---:|
| Charge $Q$ | Flux linkage $\\Lambda = LI$ |
| Voltage $V = Q/C$ | Current $I = \\Lambda/L$ |
| $RC$ | $L/R$ |
| $\\frac{1}{2}CV^2$ | $\\frac{1}{2}LI^2$ |

The mathematical structure is identical:
$$RC: \\quad \\frac{dQ}{dt} + \\frac{Q}{RC} = \\frac{\\mathcal{E}}{R}$$
$$RL: \\quad \\frac{dI}{dt} + \\frac{R}{L}I = \\frac{\\mathcal{E}}{L}$$`
    },
    {
      id: 'indrl4-mcq3',
      type: 'mcq' as const,
      question: 'An RL circuit and an RC circuit both have $\\tau = 5$ ms. The RL has $R = 200\\,\\Omega$. The RC has $R = 200\\,\\Omega$. The inductance and capacitance are:',
      options: ['$L = 1$ H, $C = 25\\,\\mu$F', '$L = 0.1$ H, $C = 250\\,\\mu$F', '$L = 1$ H, $C = 2.5\\,\\mu$F', '$L = 0.01$ H, $C = 25\\,\\mu$F'],
      correctAnswer: 0,
      explanation: 'RL: $L = \\tau R = 0.005 \\times 200 = 1$ H. RC: $C = \\tau/R = 0.005/200 = 25 \\times 10^{-6}$ F $= 25\\,\\mu$F.'
    },
    {
      id: 'indrl4-mcq4',
      type: 'mcq' as const,
      question: 'At $t = \\tau$ in a charging RL circuit, the instantaneous power dissipated in $R$ is what fraction of the steady-state power?',
      options: ['$(1-e^{-1})^2 \\approx 40\\%$', '$1-e^{-1} \\approx 63\\%$', '$e^{-2} \\approx 14\\%$', '$(1-e^{-2}) \\approx 86\\%$'],
      correctAnswer: 0,
      explanation: '$P_R = I^2R$. $I(\\tau) = (\\mathcal{E}/R)(1-e^{-1})$. $P(\\tau)/P_{\\infty} = [(1-e^{-1})/(1)]^2 = (1-e^{-1})^2 \\approx (0.632)^2 \\approx 0.40$.'
    },
    {
      id: 'indrl4-summary',
      type: 'text' as const,
      content: `### Summary — Part 4

| Concept | Detail |
|:---:|:---:|
| Time constant | $\\tau = L/R$ |
| Initial slope | $dI/dt|_0 = \\mathcal{E}/L$ |
| Thévenin approach | $\\tau = L/R_{\\text{Th}}$ |
| RL ↔ RC analogy | $L/R \\leftrightarrow RC$ |
| After $5\\tau$ | Transient < 1% |

> **Next up:** Energy stored in an inductor — Part 5.`
    }
  ]
};
