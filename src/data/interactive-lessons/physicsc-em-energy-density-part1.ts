export const physCEMEnergyDenPart1Data = {
  topicSlug: "energy-density-physics-c-em",
  sections: [
    {
      id: 'eden1-intro',
      type: 'text' as const,
      content: `# Energy Density — Part 1: Energy Stored in Capacitors $(\\tfrac{1}{2} CV^{2})$

A charged capacitor stores electric potential energy in the electric field between its plates. There are three equivalent expressions:

$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$$

### Derivation from first principles

To charge a capacitor, we move charge $dq$ from one plate to the other against a voltage $v = q/C$. The work is:

$$dW = v\\,dq = \\frac{q}{C}\\,dq$$

$$U = W = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{1}{C}\\left[\\frac{q^2}{2}\\right]_0^Q = \\frac{Q^2}{2C}$$

Using $Q = CV$:

$$U = \\frac{Q^2}{2C} = \\frac{(CV)^2}{2C} = \\frac{1}{2}CV^2$$`
    },
    {
      id: 'eden1-mcq1',
      type: 'mcq' as const,
      question: 'A $10$ μF capacitor is charged to $200$ V. How much energy is stored?',
      options: ['$0.2$ J', '$2$ J', '$0.02$ J', '$200$ J'],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(200)^2 = \\frac{1}{2}(10^{-5})(4 \\times 10^4) = 0.2$ J.'
    },
    {
      id: 'eden1-graphs',
      type: 'text' as const,
      content: `## Graphical interpretation

The energy $U = \\int_0^Q (q/C)\\,dq$ is the area under the $v$-vs-$q$ curve, which is a straight line from $(0,0)$ to $(Q, V)$:

$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}QV$$

### Which formula to use?

| Constraint | Best formula | Why |
|:---|:---:|:---|
| $Q$ constant (isolated) | $U = Q^2/(2C)$ | $Q$ is known; $C$ may change |
| $V$ constant (battery) | $U = \\frac{1}{2}CV^2$ | $V$ is known; $C$ may change |
| Both known | $U = \\frac{1}{2}QV$ | Direct |

When a dielectric ($\\kappa$) is inserted:
- Constant $Q$: $U_{\\text{new}} = Q^2/(2\\kappa C_0) = U_0/\\kappa$ (energy decreases)
- Constant $V$: $U_{\\text{new}} = \\frac{1}{2}\\kappa C_0 V^2 = \\kappa U_0$ (energy increases)`
    },
    {
      id: 'eden1-mcq2',
      type: 'mcq' as const,
      question: 'Two identical capacitors each store $U_0$ of energy. They are connected in parallel. What is the total energy stored?',
      options: ['$2U_0$', '$U_0$', '$4U_0$', '$U_0/2$'],
      correctAnswer: 0,
      explanation: 'In parallel, capacitances add: $C_{\\text{total}} = 2C$. If each has charge $Q$ at voltage $V = Q/C$, total charge $= 2Q$, voltage stays $V$ (same $V$ across parallel elements). $U_{\\text{total}} = \\frac{1}{2}(2C)V^2 = 2 \\cdot \\frac{1}{2}CV^2 = 2U_0$.'
    },
    {
      id: 'eden1-series',
      type: 'text' as const,
      content: `## Energy in series and parallel combinations

### Series: same $Q$, different $V$

$$U_{\\text{total}} = \\frac{Q^2}{2C_1} + \\frac{Q^2}{2C_2} = \\frac{Q^2}{2}\\left(\\frac{1}{C_1} + \\frac{1}{C_2}\\right) = \\frac{Q^2}{2C_{\\text{eq}}}$$

### Parallel: same $V$, different $Q$

$$U_{\\text{total}} = \\frac{1}{2}C_1 V^2 + \\frac{1}{2}C_2 V^2 = \\frac{1}{2}(C_1 + C_2)V^2 = \\frac{1}{2}C_{\\text{eq}}V^2$$

### Energy lost when capacitors share charge

Two capacitors $C_1$ (charged to $V_0$) and $C_2$ (uncharged) are connected:

$$V_{\\text{final}} = \\frac{C_1 V_0}{C_1 + C_2}$$

$$\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}V_0^2 \\quad (\\text{lost as heat in wires})$$`
    },
    {
      id: 'eden1-mcq3',
      type: 'mcq' as const,
      question: 'A $4$ μF capacitor charged to $100$ V is connected to an uncharged $6$ μF capacitor. How much energy is dissipated?',
      options: ['$12$ mJ', '$20$ mJ', '$8$ mJ', '$0$ mJ'],
      correctAnswer: 0,
      explanation: '$U_i = \\frac{1}{2}(4 \\times 10^{-6})(10^4) = 20$ mJ. $V_f = 4(100)/10 = 40$ V. $U_f = \\frac{1}{2}(10 \\times 10^{-6})(1600) = 8$ mJ. Lost $= 20 - 8 = 12$ mJ.'
    },
    {
      id: 'eden1-mcq4',
      type: 'mcq' as const,
      question: 'The integral $U = \\int_0^Q \\frac{q}{C}\\,dq$ assumes which of the following?',
      options: [
        'Capacitance $C$ is constant during charging',
        'Voltage $V$ is constant during charging',
        'Current is constant during charging',
        'The capacitor is ideal (no resistance)'
      ],
      correctAnswer: 0,
      explanation: 'We pulled $1/C$ out of the integral, which requires $C$ to be constant. This is true for rigid capacitors but fails if the plates move during charging.'
    },
    {
      id: 'eden1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Formula | Expression | Best used when |
|:---|:---:|:---|
| Energy | $U = \\frac{1}{2}CV^2$ | $V$ known/constant |
| Energy | $U = Q^2/(2C)$ | $Q$ known/constant |
| Energy | $U = \\frac{1}{2}QV$ | Both known |
| Derivation | $U = \\int_0^Q q/C\\,dq$ | From first principles |
| Charge sharing loss | $\\Delta U = \\frac{C_1 C_2 V_0^2}{2(C_1+C_2)}$ | Two capacitors connected |

> **Key insight:** The energy stored in a capacitor lives in the **electric field** between the plates. In Part 2, we'll see how to express this as an energy per unit volume.`
    }
  ]
};
