export const physCEMDielecPart2Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec2-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 2: Effect on Capacitance

Inserting a dielectric between capacitor plates changes the capacitance. The result depends on whether the capacitor is **isolated** (constant $Q$) or **connected to a battery** (constant $V$).

### Fundamental result

$$C = \\kappa C_0$$

where $C_0$ is the vacuum capacitance. For a parallel-plate capacitor:

$$C = \\frac{\\kappa \\varepsilon_0 A}{d}$$

Since $\\kappa \\geq 1$, the capacitance **always increases** when a dielectric is inserted.`
    },
    {
      id: 'dielec2-mcq1',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor with $C_0 = 10$ pF is filled with a dielectric of $\\kappa = 5$. What is the new capacitance?',
      options: ['$50$ pF', '$2$ pF', '$10$ pF', '$15$ pF'],
      correctAnswer: 0,
      explanation: '$C = \\kappa C_0 = 5 \\times 10 = 50$ pF.'
    },
    {
      id: 'dielec2-constantQ',
      type: 'text' as const,
      content: `## Case 1: Constant Charge (Isolated Capacitor)

If the capacitor is charged to $Q$ and then **disconnected** from the battery before the dielectric is inserted:

| Quantity | Before | After | Change |
|:---|:---:|:---:|:---:|
| Charge | $Q$ | $Q$ | same |
| Capacitance | $C_0$ | $\\kappa C_0$ | $\\times \\kappa$ |
| Voltage | $V_0 = Q/C_0$ | $V_0/\\kappa$ | $\\div \\kappa$ |
| Electric field | $E_0$ | $E_0/\\kappa$ | $\\div \\kappa$ |
| Energy | $U_0 = Q^2/(2C_0)$ | $U_0/\\kappa$ | $\\div \\kappa$ |

The energy **decreases**. Where does it go? The dielectric is pulled into the gap—the "missing" energy went into doing the work of pulling it in.`
    },
    {
      id: 'dielec2-mcq2',
      type: 'mcq' as const,
      question: 'An isolated capacitor stores $U_0 = 12$ μJ. A dielectric with $\\kappa = 3$ is inserted. What is the new stored energy?',
      options: ['$4$ μJ', '$36$ μJ', '$12$ μJ', '$6$ μJ'],
      correctAnswer: 0,
      explanation: 'At constant $Q$: $U = U_0/\\kappa = 12/3 = 4$ μJ. Energy decreases because the dielectric is pulled in by the field.'
    },
    {
      id: 'dielec2-constantV',
      type: 'text' as const,
      content: `## Case 2: Constant Voltage (Battery Connected)

If the battery remains connected while the dielectric is inserted:

| Quantity | Before | After | Change |
|:---|:---:|:---:|:---:|
| Voltage | $V_0$ | $V_0$ | same |
| Capacitance | $C_0$ | $\\kappa C_0$ | $\\times \\kappa$ |
| Charge | $Q_0 = C_0 V_0$ | $\\kappa Q_0$ | $\\times \\kappa$ |
| Electric field | $E_0 = V_0/d$ | $E_0$ | same |
| Energy | $U_0 = \\tfrac{1}{2}C_0 V_0^2$ | $\\kappa U_0$ | $\\times \\kappa$ |

The energy **increases** because the battery does work pushing additional charge onto the plates. In fact, the work done by the battery is $W_{\\text{batt}} = \\Delta Q \\cdot V = (\\kappa - 1)Q_0 V_0$, and:

$$W_{\\text{batt}} = 2\\Delta U + W_{\\text{mech}}$$

where $W_{\\text{mech}}$ is the work done pulling the dielectric in.`
    },
    {
      id: 'dielec2-mcq3',
      type: 'mcq' as const,
      question: 'A capacitor connected to a 12 V battery has $C_0 = 20$ nF. A dielectric ($\\kappa = 4$) is inserted. What charge does the battery deliver to the capacitor?',
      options: ['$720$ nC', '$240$ nC', '$960$ nC', '$60$ nC'],
      correctAnswer: 0,
      explanation: '$Q_0 = C_0 V = 20 \\times 12 = 240$ nC. After: $Q = \\kappa Q_0 = 960$ nC. Additional charge $= 960 - 240 = 720$ nC.'
    },
    {
      id: 'dielec2-partial',
      type: 'text' as const,
      content: `## Partial Dielectric Filling

If a dielectric of thickness $t < d$ is inserted into a gap of width $d$, the system acts as **two capacitors in series**: one with dielectric (thickness $t$) and one with vacuum (thickness $d - t$).

$$\\frac{1}{C} = \\frac{1}{C_{\\text{diel}}} + \\frac{1}{C_{\\text{vac}}} = \\frac{t}{\\kappa \\varepsilon_0 A} + \\frac{d - t}{\\varepsilon_0 A}$$

$$C = \\frac{\\varepsilon_0 A}{d - t + t/\\kappa} = \\frac{\\varepsilon_0 A}{d - t(1 - 1/\\kappa)}$$

When $t = d$: $C = \\kappa\\varepsilon_0 A/d$ (fully filled, as expected).`
    },
    {
      id: 'dielec2-mcq4',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has plate separation $d$ and area $A$. A dielectric slab with $\\kappa = 3$ and thickness $d/2$ is inserted. What is the resulting capacitance?',
      options: [
        '$\\dfrac{3\\varepsilon_0 A}{2d}$',
        '$\\dfrac{2\\varepsilon_0 A}{d}$',
        '$\\dfrac{3\\varepsilon_0 A}{d}$',
        '$\\dfrac{\\varepsilon_0 A}{d}$'
      ],
      correctAnswer: 0,
      explanation: '$C = \\varepsilon_0 A / [d - t(1 - 1/\\kappa)] = \\varepsilon_0 A / [d - (d/2)(1 - 1/3)] = \\varepsilon_0 A / [d - d/3] = \\varepsilon_0 A / (2d/3) = 3\\varepsilon_0 A/(2d)$.'
    }
  ]
};
