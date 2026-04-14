export const physCEMIndRLPart2Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl2-intro',
      type: 'text' as const,
      content: `# RL Circuit Differential Equation

**Part 2 of 7 — Setting Up and Solving**

### The RL Circuit

An inductor $L$ in series with a resistor $R$ and an EMF source $\\mathcal{E}$.

Applying Kirchhoff's voltage law:

$$\\mathcal{E} - IR - L\\frac{dI}{dt} = 0$$

Rearranging:

$$\\boxed{L\\frac{dI}{dt} + IR = \\mathcal{E}}$$

This is a **first-order linear ODE** with constant coefficients.

### Standard Form

$$\\frac{dI}{dt} + \\frac{R}{L}I = \\frac{\\mathcal{E}}{L}$$

Comparing with $y' + Py = Q$:
- $P = R/L$
- $Q = \\mathcal{E}/L$`
    },
    {
      id: 'indrl2-mcq1',
      type: 'mcq' as const,
      question: 'In an RL circuit with $\\mathcal{E} = 24$ V, $R = 8\\,\\Omega$, $L = 4$ H, the initial rate of current change (at $t = 0$, $I = 0$) is:',
      options: ['6 A/s', '3 A/s', '8 A/s', '24 A/s'],
      correctAnswer: 0,
      explanation: 'At $t = 0$: $L(dI/dt) = \\mathcal{E} - IR = 24 - 0 = 24$. $dI/dt = 24/4 = 6$ A/s.'
    },
    {
      id: 'indrl2-solving',
      type: 'text' as const,
      content: `### Solving the ODE

**Method 1: Integrating Factor**

Multiply by $e^{Rt/L}$:

$$\\frac{d}{dt}\\left[I \\cdot e^{Rt/L}\\right] = \\frac{\\mathcal{E}}{L}e^{Rt/L}$$

Integrate both sides:

$$I \\cdot e^{Rt/L} = \\frac{\\mathcal{E}}{R}e^{Rt/L} + C$$

$$I(t) = \\frac{\\mathcal{E}}{R} + Ce^{-Rt/L}$$

With $I(0) = 0$: $C = -\\mathcal{E}/R$.

$$\\boxed{I(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-Rt/L}\\right)}$$

**Method 2: Separation of Variables**

$$\\frac{dI}{\\mathcal{E}/L - (R/L)I} = dt$$

$$-\\frac{L}{R}\\ln\\left(\\frac{\\mathcal{E}}{L} - \\frac{R}{L}I\\right) = t + C$$

This yields the same result after applying $I(0) = 0$.`
    },
    {
      id: 'indrl2-mcq2',
      type: 'mcq' as const,
      question: 'The general solution to $L\\,dI/dt + RI = \\mathcal{E}$ can be written as $I(t) = I_{\\text{particular}} + I_{\\text{homogeneous}}$. These are:',
      options: ['$I_p = \\mathcal{E}/R$ and $I_h = Ce^{-Rt/L}$', '$I_p = \\mathcal{E}/L$ and $I_h = Ce^{-Rt/L}$', '$I_p = \\mathcal{E}/R$ and $I_h = Ce^{-Lt/R}$', '$I_p = 0$ and $I_h = (\\mathcal{E}/R)e^{-Rt/L}$'],
      correctAnswer: 0,
      explanation: 'The particular solution (steady state) is $I_p = \\mathcal{E}/R$. The homogeneous solution (from $LdI/dt + RI = 0$) is $I_h = Ce^{-Rt/L}$.'
    },
    {
      id: 'indrl2-voltage',
      type: 'text' as const,
      content: `### Voltage Across Each Element

Using $I(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-Rt/L})$:

**Across the resistor:**
$$V_R(t) = IR = \\mathcal{E}(1 - e^{-Rt/L})$$

**Across the inductor:**
$$V_L(t) = L\\frac{dI}{dt} = \\mathcal{E}\\,e^{-Rt/L}$$

**Verification:** $V_R + V_L = \\mathcal{E}(1 - e^{-Rt/L}) + \\mathcal{E}\\,e^{-Rt/L} = \\mathcal{E}$ ✓

### Behavior at Key Times

| Time | $V_R$ | $V_L$ | $I$ |
|:---:|:---:|:---:|:---:|
| $t = 0$ | $0$ | $\\mathcal{E}$ | $0$ |
| $t = \\tau$ | $0.632\\mathcal{E}$ | $0.368\\mathcal{E}$ | $0.632(\\mathcal{E}/R)$ |
| $t \\to \\infty$ | $\\mathcal{E}$ | $0$ | $\\mathcal{E}/R$ |`
    },
    {
      id: 'indrl2-mcq3',
      type: 'mcq' as const,
      question: 'In an RL circuit, at $t = 0$ just after the switch closes, the inductor behaves like:',
      options: ['An open circuit (no current flows)', 'A short circuit (zero voltage across it)', 'A resistor with value $R$', 'A capacitor'],
      correctAnswer: 0,
      explanation: 'At $t = 0$: $I = 0$ and $V_L = \\mathcal{E}$ (entire voltage across inductor). The inductor initially blocks all current, like an open circuit.'
    },
    {
      id: 'indrl2-mcq4',
      type: 'mcq' as const,
      question: 'At $t \\to \\infty$ in an RL circuit, the inductor behaves like:',
      options: ['A short circuit (wire with zero resistance)', 'An open circuit', 'A battery', 'A capacitor'],
      correctAnswer: 0,
      explanation: 'At steady state: $dI/dt = 0$, so $V_L = L(dI/dt) = 0$. Zero voltage across it with current flowing through — it behaves like a short circuit (ideal wire).'
    },
    {
      id: 'indrl2-summary',
      type: 'text' as const,
      content: `### Summary — Part 2

| Result | Expression |
|:---:|:---:|
| Differential equation | $L\\,dI/dt + IR = \\mathcal{E}$ |
| Charging solution | $I(t) = (\\mathcal{E}/R)(1-e^{-Rt/L})$ |
| $V_R(t)$ | $\\mathcal{E}(1-e^{-Rt/L})$ |
| $V_L(t)$ | $\\mathcal{E}\\,e^{-Rt/L}$ |
| Inductor at $t=0$ | Open circuit |
| Inductor at $t=\\infty$ | Short circuit |

> **Next up:** RL charging and discharging curves — Part 3.`
    }
  ]
};
