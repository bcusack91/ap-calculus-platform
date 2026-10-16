export const physCEMIndRLPart5Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl5-intro',
      type: 'text' as const,
      content: `# Energy Stored in an Inductor

**Part 5 of 7 — $U = \\frac{1}{2}LI^2$**

### Derivation from Power

The power delivered to an inductor is:

$$P_L = V_L \\cdot I = L\\frac{dI}{dt} \\cdot I$$

The energy stored is the integral of power:

$$U = \\int_0^t P_L\\,dt' = \\int_0^I LI'\\,dI' = \\frac{1}{2}LI^2$$

$$\\boxed{U = \\frac{1}{2}LI^2}$$

### Comparison with Capacitor

| Component | Energy | Field |
|:---:|:---:|:---:|
| Capacitor | $U = \\frac{1}{2}CV^2$ | Electric field |
| Inductor | $U = \\frac{1}{2}LI^2$ | Magnetic field |

The energy is stored in the **magnetic field** created by the current flowing through the inductor.`
    },
    {
      id: 'indrl5-mcq1',
      type: 'mcq' as const,
      question: 'An inductor with $L = 0.4$ H carries 5 A. The energy stored is:',
      options: ['5 J', '2 J', '10 J', '1 J'],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.4)(25) = 5$ J.'
    },
    {
      id: 'indrl5-density',
      type: 'text' as const,
      content: `### Where the Stored Energy Goes
The energy $\\frac{1}{2}LI^2$ in an inductor's magnetic field can be dissipated in a resistor or used to charge a capacitor, and the transfer obeys energy conservation.

**Into a resistor:** when the source is removed, the decaying current heats $R$ until all of $\\frac{1}{2}LI_0^2$ is gone (shown in Part 6).

**Into a capacitor:** connect an inductor carrying current $I$ across an uncharged capacitor (ideal wires). The capacitor charges until the current stops, so
$$\\frac{1}{2}LI^2 = \\frac{Q_{\\max}^2}{2C} = \\frac{1}{2}CV_{\\max}^2$$

### Example Calculation
A 2.0 H inductor carrying 3.0 A stores $U = \\frac{1}{2}(2.0)(3.0)^2 = 9.0$ J. Transferred to a $50\\,\\mu$F capacitor:
$$V_{\\max} = \\sqrt{\\frac{2U}{C}} = \\sqrt{\\frac{2(9.0)}{50 \\times 10^{-6}}} = \\sqrt{3.6 \\times 10^5} = 600 \\text{ V}$$
> A modest current in a large inductor can push a small capacitor to a high voltage.`
    },
    {
      id: 'indrl5-mcq2',
      type: 'mcq' as const,
      question: 'An ideal $0.50$ H inductor carrying $2.0$ A is connected across an uncharged $20\\,\\mu$F capacitor. The maximum capacitor voltage is:',
      options: ['$316$ V', '$158$ V', '$447$ V', '$632$ V'],
      correctAnswer: 0,
      explanation: '$\\frac{1}{2}LI^2 = \\frac{1}{2}CV^2$, so $V = I\\sqrt{L/C} = 2.0\\sqrt{0.50/(20 \\times 10^{-6})} = 2.0(158) \\approx 316$ V. Leaving out $I$ gives 158 V; using $I^2$ instead of $I$ gives 632 V.'
    },
    {
      id: 'indrl5-energy-budget',
      type: 'text' as const,
      content: `### Energy Budget During RL Charging
Multiply the loop equation $\\mathcal{E} = IR + L\\frac{dI}{dt}$ by $I$:
$$\\underbrace{\\mathcal{E}I}_{\\text{battery power}} = \\underbrace{I^2R}_{\\text{heating}} + \\underbrace{LI\\frac{dI}{dt}}_{\\text{rate of storage}}$$
- **Just after closing:** $I$ is small, so the battery's (small) power output goes mostly into building the magnetic field.
- **As $t \\to \\infty$:** $dI/dt \\to 0$, so all of the battery's power heats the resistor, and the inductor holds a fixed $\\frac{1}{2}LI_f^2 = \\frac{L\\mathcal{E}^2}{2R^2}$.
- **At any instant:** the rate of storage is $\\frac{dU}{dt} = LI\\frac{dI}{dt} = \\mathcal{E}I - I^2R$.
> Energy conservation at every instant: what the battery supplies either heats $R$ or is stored in $L$.`
    },
    {
      id: 'indrl5-mcq3',
      type: 'mcq' as const,
      question: 'An RL circuit has $\\mathcal{E} = 12$ V, $R = 4\\,\\Omega$, $L = 2$ H. At the instant the current is $1.5$ A, the rate at which energy is being stored in the inductor is:',
      options: ['9 W', '18 W', '4.5 W', '36 W'],
      correctAnswer: 0,
      explanation: 'Battery power $\\mathcal{E}I = 18$ W; resistor heating $I^2R = 9$ W; the rest, $18 - 9 = 9$ W, is stored. Check: $dI/dt = (12 - 6)/2 = 3$ A/s and $LI\\,dI/dt = (2)(1.5)(3) = 9$ W.'
    },
    {
      id: 'indrl5-mcq4',
      type: 'mcq' as const,
      question: 'If the current in a 0.5 H inductor is increasing at 10 A/s when $I = 3$ A, the rate at which energy is being stored is:',
      options: ['15 W', '5 W', '50 W', '1.5 W'],
      correctAnswer: 0,
      explanation: '$dU/dt = LI(dI/dt) = 0.5 \\times 3 \\times 10 = 15$ W. (From $U = \\frac{1}{2}LI^2$: $dU/dt = LI\\,dI/dt$.)'
    },
    {
      id: 'indrl5-mcq5',
      type: 'mcq' as const,
      question: 'When an RL circuit is disconnected from its source and discharges through $R$, all the inductor energy is:',
      options: ['Dissipated as heat in the resistor', 'Kept in the magnetic field', 'Stored in an electric field', 'Returned to the battery as charge'],
      correctAnswer: 0,
      explanation: 'During discharge, $L dI/dt + IR = 0$. All magnetic energy $\\frac{1}{2}LI_0^2$ is converted to thermal energy $\\int I^2R\\,dt$ in the resistor.'
    },
    {
      id: 'indrl5-summary',
      type: 'text' as const,
      content: `### Summary — Part 5

| Formula | Expression |
|:---:|:---:|
| Stored energy | $U = \\frac{1}{2}LI^2$ |
| Inductor → capacitor | $\\frac{1}{2}LI^2 = \\frac{Q_{\\max}^2}{2C}$ |
| Rate of energy storage | $dU/dt = LI\\,dI/dt$ |
| Power balance (charging) | $\\mathcal{E}I = I^2R + LI\\,dI/dt$ |

> **Next up:** Problem-solving workshop — Part 6.`
    }
  ]
};
