export const physCEMRCPart2Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc2-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 2: RC Discharging

When a charged capacitor (initial charge $Q_0$) discharges through a resistor with no external EMF:

### Kirchhoff's voltage law

$$-IR - \\frac{Q}{C} = 0 \\implies R\\frac{dQ}{dt} + \\frac{Q}{C} = 0$$

This is the **homogeneous** version of the charging ODE (no driving term $\\mathcal{E}$).

### Solution

$$\\frac{dQ}{Q} = -\\frac{dt}{RC}$$

$$\\ln Q - \\ln Q_0 = -\\frac{t}{RC}$$

$$\\boxed{Q(t) = Q_0\\,e^{-t/\\tau}}$$

where $\\tau = RC$.`
    },
    {
      id: 'rc2-mcq1',
      type: 'mcq' as const,
      question: 'A capacitor with $Q_0 = 500$ μC discharges through $R = 2$ kΩ, $C = 50$ μF. What is the charge after $0.2$ s?',
      options: [
        '$500e^{-2} \\approx 67.7$ μC',
        '$500e^{-1} \\approx 184$ μC',
        '$250$ μC',
        '$500e^{-0.5} \\approx 303$ μC'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = RC = (2000)(50 \\times 10^{-6}) = 0.1$ s. $Q(0.2) = 500e^{-0.2/0.1} = 500e^{-2} \\approx 67.7$ μC.'
    },
    {
      id: 'rc2-current',
      type: 'text' as const,
      content: `## Current and voltage during discharge

### Current

$$I(t) = -\\frac{dQ}{dt} = \\frac{Q_0}{RC}e^{-t/\\tau} = I_0\\,e^{-t/\\tau}$$

where $I_0 = Q_0/(RC) = V_0/R$ (the minus sign is absorbed by choosing $I$ as the magnitude of current flow).

### Capacitor voltage

$$V_C(t) = \\frac{Q(t)}{C} = \\frac{Q_0}{C}e^{-t/\\tau} = V_0\\,e^{-t/\\tau}$$

### Resistor voltage

$$V_R(t) = IR = V_0\\,e^{-t/\\tau}$$

During discharge, $V_R = V_C$ at all times (they are in a simple loop).

### Comparison: Charging vs. Discharging

| Quantity | Charging | Discharging |
|:---|:---:|:---:|
| $Q(t)$ | $Q_{\\max}(1 - e^{-t/\\tau})$ | $Q_0\\,e^{-t/\\tau}$ |
| $I(t)$ | $I_0\\,e^{-t/\\tau}$ | $I_0\\,e^{-t/\\tau}$ |
| $V_C(t)$ | $\\mathcal{E}(1 - e^{-t/\\tau})$ | $V_0\\,e^{-t/\\tau}$ |

Notice: current always decays exponentially in both cases!`
    },
    {
      id: 'rc2-mcq2',
      type: 'mcq' as const,
      question: 'A $100$ μF capacitor charged to $20$ V discharges through $R = 5$ kΩ. What is the current at $t = 0$?',
      options: [
        '$4$ mA',
        '$20$ mA',
        '$0.4$ mA',
        '$2$ A'
      ],
      correctAnswer: 0,
      explanation: '$I_0 = V_0/R = 20/(5000) = 4 \\times 10^{-3}$ A $= 4$ mA.'
    },
    {
      id: 'rc2-halflife',
      type: 'text' as const,
      content: `## Half-life of an RC circuit

The **half-life** $t_{1/2}$ is the time for $Q$ (or $V_C$) to drop to half its initial value:

$$Q_0/2 = Q_0\\,e^{-t_{1/2}/\\tau}$$

$$e^{-t_{1/2}/\\tau} = 1/2$$

$$t_{1/2} = \\tau \\ln 2 \\approx 0.693\\tau$$

### Useful relationships

| Elapsed time | Fraction remaining |
|:---:|:---:|
| $t_{1/2} \\approx 0.693\\tau$ | $50\\%$ |
| $\\tau$ | $36.8\\%$ |
| $2\\tau$ | $13.5\\%$ |
| $3\\tau$ | $5.0\\%$ |
| $5\\tau$ | $0.67\\%$ |

After $5\\tau$, less than $1\\%$ remains — the discharge is essentially complete.`
    },
    {
      id: 'rc2-mcq3',
      type: 'mcq' as const,
      question: 'An RC circuit has $\\tau = 4$ ms. How long until the voltage drops to $25\\%$ of its initial value?',
      options: [
        '$4\\ln 4 \\approx 5.55$ ms',
        '$4\\ln 2 \\approx 2.77$ ms',
        '$8$ ms',
        '$16$ ms'
      ],
      correctAnswer: 0,
      explanation: '$V/V_0 = 1/4 = e^{-t/\\tau}$. $t = \\tau\\ln 4 = 4 \\times \\ln 4 \\approx 4 \\times 1.386 = 5.55$ ms.'
    },
    {
      id: 'rc2-mcq4',
      type: 'mcq' as const,
      question: 'During discharge, which graph correctly shows $V_C$ vs. $t$?',
      options: [
        'Exponential decay from $V_0$ to $0$',
        'Exponential growth from $0$ to $V_0$',
        'Linear decrease from $V_0$ to $0$',
        'Constant at $V_0$'
      ],
      correctAnswer: 0,
      explanation: '$V_C = V_0 e^{-t/\\tau}$ is an exponential decay. It starts at $V_0$ and asymptotically approaches $0$, with the steepest descent at $t = 0$.'
    },
    {
      id: 'rc2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Quantity | Discharging formula |
|:---|:---:|
| Charge | $Q(t) = Q_0\\,e^{-t/\\tau}$ |
| Current | $I(t) = (V_0/R)\\,e^{-t/\\tau}$ |
| Capacitor voltage | $V_C(t) = V_0\\,e^{-t/\\tau}$ |
| ODE | $R\\,dQ/dt + Q/C = 0$ |
| Half-life | $t_{1/2} = \\tau\\ln 2 \\approx 0.693\\tau$ |

> **Key insight:** Discharging is a simpler equation (homogeneous ODE). The solution is pure exponential decay — every quantity ($Q$, $I$, $V$) follows $e^{-t/\\tau}$.`
    }
  ]
};
