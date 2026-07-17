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
      content: `### Magnetic Energy Density

For a solenoid: $B = \\mu_0 nI$ and $L = \\mu_0 n^2 A\\ell$.

$$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(\\mu_0 n^2 A\\ell)I^2 = \\frac{(\\mu_0 nI)^2}{2\\mu_0}(A\\ell) = \\frac{B^2}{2\\mu_0} \\cdot (\\text{volume})$$

The **magnetic energy density** is:

$$\\boxed{u_B = \\frac{B^2}{2\\mu_0}}$$

This is a general result valid for **any** magnetic field, not just solenoids.

### Example Calculation

A 1 T field stores:

$$u_B = \\frac{(1)^2}{2(4\\pi \\times 10^{-7})} = \\frac{1}{8\\pi \\times 10^{-7}} \\approx 4 \\times 10^5 \\text{ J/m}^3$$

> For comparison, the electric energy density $u_E = \\frac{1}{2}\\epsilon_0 E^2$: a field of $3 \\times 10^6$ V/m (near breakdown) stores only $\\sim 40$ $J/m^{3}$.`
    },
    {
      id: 'indrl5-mcq2',
      type: 'mcq' as const,
      question: 'The magnetic energy density in a region where $B = 0.02$ T is:',
      options: ['$\\approx 159$ $J/m^{3}$', '$\\approx 1590$ $J/m^{3}$', '$\\approx 15.9$ $J/m^{3}$', '$\\approx 1.59$ $J/m^{3}$'],
      correctAnswer: 0,
      explanation: '$u_B = B^2/(2\\mu_0) = (4 \\times 10^{-4})/(2 \\times 4\\pi \\times 10^{-7}) = (4 \\times 10^{-4})/(8\\pi \\times 10^{-7}) \\approx 4 \\times 10^{-4}/(2.51 \\times 10^{-6}) \\approx 159$ $J/m^{3}$.'
    },
    {
      id: 'indrl5-energy-budget',
      type: 'text' as const,
      content: `### Energy Budget During RL Charging

As current grows from 0 to $I_f = \\mathcal{E}/R$:

**Energy from the source:**

$$U_{\\text{source}} = \\int_0^\\infty \\mathcal{E} I\\,dt = \\mathcal{E}\\int_0^\\infty \\frac{\\mathcal{E}}{R}(1-e^{-t/\\tau})\\,dt$$

$$= \\frac{\\mathcal{E}^2}{R}\\left[t + \\tau e^{-t/\\tau}\\right]_0^\\infty$$

This integral diverges! But during the transient (finite time), we can compute:

$$U_{\\text{source}}(\\text{transient only}) = \\frac{\\mathcal{E}^2\\tau}{R} = \\frac{L\\mathcal{E}^2}{R^2}$$

Actually, the steady-state power $\\mathcal{E}^2/R$ continues forever. The finite transient energy is:

$$U_{\\text{stored}} = \\frac{1}{2}LI_f^2 = \\frac{L\\mathcal{E}^2}{2R^2}$$

$$U_{\\text{dissipated in transient}} = \\frac{L\\mathcal{E}^2}{2R^2}$$

> Like RC circuits: during the transient, equal energy is stored and dissipated.`
    },
    {
      id: 'indrl5-mcq3',
      type: 'mcq' as const,
      question: 'An RL circuit with $\\mathcal{E} = 12$ V, $R = 4\\,\\Omega$, $L = 2$ H. The total energy dissipated in $R$ during the transient (from $I = 0$ to $I \\approx I_f$) is:',
      options: ['9 J', '18 J', '4.5 J', '36 J'],
      correctAnswer: 0,
      explanation: '$I_f = 12/4 = 3$ A. $U_{\\text{stored}} = \\frac{1}{2}(2)(9) = 9$ J. By the equal-energy result, $U_{\\text{dissipated}} = 9$ J also.'
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
      options: ['Dissipated as heat in the resistor', 'Radiated as electromagnetic waves', 'Stored in the electric field', 'Returned to the source'],
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
| Energy density | $u_B = B^2/(2\\mu_0)$ |
| Rate of energy storage | $dU/dt = LI\\,dI/dt$ |
| RL charging energy split | $U_R = U_L = L\\mathcal{E}^2/(2R^2)$ |

> **Next up:** Problem-solving workshop — Part 6.`
    }
  ]
};
