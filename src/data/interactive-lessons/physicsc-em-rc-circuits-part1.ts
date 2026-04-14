export const physCEMRCPart1Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc1-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 1: RC Charging (Differential Equation)

An RC circuit consists of a resistor $R$ and a capacitor $C$ connected to a voltage source. When the switch closes, the capacitor charges through the resistor.

### Setting up the differential equation

By Kirchhoff's voltage law around the loop:

$$\\mathcal{E} - IR - \\frac{Q}{C} = 0$$

Since $I = dQ/dt$:

$$\\mathcal{E} - R\\frac{dQ}{dt} - \\frac{Q}{C} = 0$$

$$\\boxed{R\\frac{dQ}{dt} + \\frac{Q}{C} = \\mathcal{E}}$$

This is a **first-order linear ODE** — one of the most important differential equations in physics.`
    },
    {
      id: 'rc1-mcq1',
      type: 'mcq' as const,
      question: 'In the RC charging equation $R\\frac{dQ}{dt} + \\frac{Q}{C} = \\mathcal{E}$, what are the dimensions of each term?',
      options: [
        'Volts (V)',
        'Amperes (A)',
        'Coulombs (C)',
        'Watts (W)'
      ],
      correctAnswer: 0,
      explanation: '$R \\cdot dQ/dt = \\Omega \\cdot A = V$. $Q/C = C/(C/V) = V$. $\\mathcal{E} = V$. Every term has dimensions of voltage.'
    },
    {
      id: 'rc1-solution',
      type: 'text' as const,
      content: `## Solving the differential equation

Rearrange: $\\dfrac{dQ}{dt} = \\dfrac{\\mathcal{E} - Q/C}{R} = \\dfrac{C\\mathcal{E} - Q}{RC}$

Separate variables:

$$\\frac{dQ}{C\\mathcal{E} - Q} = \\frac{dt}{RC}$$

Integrate both sides (with $Q(0) = 0$):

$$-\\ln(C\\mathcal{E} - Q)\\Big|_0^Q = \\frac{t}{RC}$$

$$-\\ln\\frac{C\\mathcal{E} - Q}{C\\mathcal{E}} = \\frac{t}{RC}$$

$$C\\mathcal{E} - Q = C\\mathcal{E}\\,e^{-t/(RC)}$$

$$\\boxed{Q(t) = C\\mathcal{E}\\left(1 - e^{-t/(RC)}\\right) = Q_{\\max}\\left(1 - e^{-t/\\tau}\\right)}$$

where $\\tau = RC$ is the **time constant** and $Q_{\\max} = C\\mathcal{E}$.`
    },
    {
      id: 'rc1-mcq2',
      type: 'mcq' as const,
      question: 'At $t = 0$ in an RC charging circuit, $Q(0) = 0$. What is the initial current?',
      options: [
        '$I_0 = \\mathcal{E}/R$',
        '$I_0 = 0$',
        '$I_0 = \\mathcal{E}/(R+1/C)$',
        '$I_0 = C\\mathcal{E}$'
      ],
      correctAnswer: 0,
      explanation: 'At $t = 0$, $Q = 0$ so the capacitor acts like a short circuit (no voltage across it). All the EMF drops across $R$: $I_0 = \\mathcal{E}/R$.'
    },
    {
      id: 'rc1-current',
      type: 'text' as const,
      content: `## Current during charging

$$I(t) = \\frac{dQ}{dt} = \\frac{\\mathcal{E}}{R}e^{-t/(RC)} = I_0\\,e^{-t/\\tau}$$

The current starts at $I_0 = \\mathcal{E}/R$ and decays **exponentially** to zero.

### Voltage across the capacitor

$$V_C(t) = \\frac{Q(t)}{C} = \\mathcal{E}\\left(1 - e^{-t/\\tau}\\right)$$

### Voltage across the resistor

$$V_R(t) = IR = \\mathcal{E}\\,e^{-t/\\tau}$$

**Check:** $V_R + V_C = \\mathcal{E}\\,e^{-t/\\tau} + \\mathcal{E}(1 - e^{-t/\\tau}) = \\mathcal{E}$ ✓ (KVL satisfied at all times).

### Key values

| Time | $Q/Q_{\\max}$ | $V_C/\\mathcal{E}$ | $I/I_0$ |
|:---:|:---:|:---:|:---:|
| $t = 0$ | $0$ | $0$ | $1$ |
| $t = \\tau$ | $1 - e^{-1} \\approx 0.632$ | $0.632$ | $0.368$ |
| $t = 2\\tau$ | $0.865$ | $0.865$ | $0.135$ |
| $t = 5\\tau$ | $0.993$ | $0.993$ | $0.007$ |`
    },
    {
      id: 'rc1-mcq3',
      type: 'mcq' as const,
      question: 'An RC circuit has $R = 10$ kΩ and $C = 100$ μF, connected to $\\mathcal{E} = 12$ V. After one time constant, the capacitor voltage is approximately:',
      options: [
        '$7.58$ V',
        '$12$ V',
        '$4.42$ V',
        '$6$ V'
      ],
      correctAnswer: 0,
      explanation: '$V_C(\\tau) = \\mathcal{E}(1 - e^{-1}) = 12(1 - 0.368) = 12(0.632) = 7.58$ V.'
    },
    {
      id: 'rc1-mcq4',
      type: 'mcq' as const,
      question: 'After how many time constants is the capacitor approximately 99% charged?',
      options: [
        '$\\approx 5\\tau$',
        '$\\approx 3\\tau$',
        '$\\approx 2\\tau$',
        '$\\approx 10\\tau$'
      ],
      correctAnswer: 0,
      explanation: '$1 - e^{-5} = 1 - 0.0067 = 0.9933 \\approx 99.3\\%$. So after $5\\tau$, the capacitor is effectively fully charged.'
    },
    {
      id: 'rc1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Quantity | Charging formula |
|:---|:---:|
| Charge | $Q(t) = C\\mathcal{E}(1 - e^{-t/\\tau})$ |
| Current | $I(t) = (\\mathcal{E}/R)e^{-t/\\tau}$ |
| Capacitor voltage | $V_C(t) = \\mathcal{E}(1 - e^{-t/\\tau})$ |
| Resistor voltage | $V_R(t) = \\mathcal{E}\\,e^{-t/\\tau}$ |
| Time constant | $\\tau = RC$ |
| ODE | $R\\,dQ/dt + Q/C = \\mathcal{E}$ |

> **Key insight:** The RC charging equation is solved by separation of variables. The capacitor asymptotically approaches $V_C = \\mathcal{E}$, while the current decays exponentially from $\\mathcal{E}/R$ to zero.`
    }
  ]
};
