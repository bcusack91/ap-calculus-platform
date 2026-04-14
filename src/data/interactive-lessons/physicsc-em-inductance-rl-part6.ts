export const physCEMIndRLPart6Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — AP Physics C: E&M Style Problems**

### Strategy for RL Circuit Problems

1. **Identify** the circuit phase: charging or discharging.
2. **Determine** the time constant $\\tau = L/R_{\\text{Th}}$.
3. **Find** initial and final conditions:
   - Charging: $I(0) = 0$, $I(\\infty) = \\mathcal{E}/R$
   - Discharging: $I(0) = I_0$, $I(\\infty) = 0$
4. **Write** the solution: $I(t) = I(\\infty) + [I(0) - I(\\infty)]e^{-t/\\tau}$
5. **Compute** voltages, power, or energy as needed.

> This general formula works for **any** RL transient: $I(t) = I_f + (I_i - I_f)e^{-t/\\tau}$.`
    },
    {
      id: 'indrl6-mcq1',
      type: 'mcq' as const,
      question: 'An RL circuit with $L = 10$ mH, $R = 50\\,\\Omega$, $\\mathcal{E} = 100$ V has been charging for a long time. At $t = 0$, the EMF is suddenly doubled to 200 V. The current at $t = 0.2$ ms is:',
      options: ['$\\approx 3.26$ A', '$\\approx 2$ A', '$\\approx 4$ A', '$\\approx 2.53$ A'],
      correctAnswer: 0,
      explanation: '$I_i = 100/50 = 2$ A. $I_f = 200/50 = 4$ A. $\\tau = 0.01/50 = 0.2$ ms. $I(0.2\\text{ ms}) = 4 + (2-4)e^{-1} = 4 - 2e^{-1} = 4 - 0.736 = 3.264$ A.'
    },
    {
      id: 'indrl6-problem2',
      type: 'text' as const,
      content: `### Worked Example: Two-Resistor RL Circuit

A circuit has $\\mathcal{E} = 30$ V, $R_1 = 10\\,\\Omega$ (in series with $L = 0.1$ H), and $R_2 = 15\\,\\Omega$ in parallel with the $R_1$-$L$ branch.

**Steady State ($t \\to \\infty$):**

Inductor acts as short circuit: $V_L = 0$, so $V_{R_1} = IR_1$.
$$I_L = \\frac{\\mathcal{E}}{R_1} \\cdot \\frac{R_2}{R_1 + R_2}$$

Wait — let's be careful. At steady state, $L$ is a wire. The parallel combination is $R_1 \\| R_2 = 10 \\times 15/25 = 6\\,\\Omega$... but this depends on the exact topology.

If $R_1$ and $L$ are in the **same branch** (series), and that branch is in parallel with $R_2$:

At steady state: voltage across each branch $= \\mathcal{E} = 30$ V.
- $I_{\\text{branch 1}} = 30/R_1 = 30/10 = 3$ A (since $L$ is a short)
- $I_{\\text{branch 2}} = 30/R_2 = 30/15 = 2$ A
- $I_{\\text{total}} = 5$ A

**Time constant:** $\\tau = L/R_1 = 0.1/10 = 0.01$ s = 10 ms (the resistance in the inductor's branch).`
    },
    {
      id: 'indrl6-mcq2',
      type: 'mcq' as const,
      question: 'A 2 H inductor carrying 3 A is suddenly disconnected from its 6 V source. If the inductor is in a closed loop with a 4 Ω resistor, how long until the current drops to 0.3 A?',
      options: ['$\\approx 1.15$ s', '$\\approx 0.5$ s', '$\\approx 2.3$ s', '$\\approx 0.23$ s'],
      correctAnswer: 0,
      explanation: '$\\tau = L/R = 2/4 = 0.5$ s. $I(t) = 3e^{-t/0.5} = 0.3$. $e^{-2t} = 0.1$. $t = -\\ln(0.1)/2 = 2.303/2 \\approx 1.15$ s.'
    },
    {
      id: 'indrl6-mcq3',
      type: 'mcq' as const,
      question: 'In an RL circuit, the current is growing as $I(t) = 5(1-e^{-100t})$ A. The voltage across the inductor at $t = 0.01$ s is:',
      options: ['$500Le^{-1}$ V, i.e., $V_L = L \\cdot 500e^{-1}$', '$500L$ V', '$0$', '$5LR$ V'],
      correctAnswer: 0,
      explanation: '$dI/dt = 500e^{-100t}$. At $t = 0.01$: $dI/dt = 500e^{-1}$. $V_L = L \\cdot 500e^{-1}$.'
    },
    {
      id: 'indrl6-energy',
      type: 'text' as const,
      content: `### Energy Dissipation During Decay

During RL decay with $I(t) = I_0 e^{-t/\\tau}$:

$$P_R(t) = I^2 R = I_0^2 R e^{-2t/\\tau}$$

Total energy dissipated:

$$U_R = \\int_0^\\infty I_0^2 R e^{-2t/\\tau}\\,dt = I_0^2 R \\cdot \\frac{\\tau}{2} = I_0^2 R \\cdot \\frac{L}{2R} = \\frac{1}{2}LI_0^2$$

This equals the initial magnetic energy stored — **energy is conserved**.`
    },
    {
      id: 'indrl6-mcq4',
      type: 'mcq' as const,
      question: 'An inductor ($L = 50$ mH, $I_0 = 4$ A) discharges through $R = 10\\,\\Omega$. The time at which the instantaneous power in $R$ is half the initial power is:',
      options: ['$\\frac{\\tau}{2}\\ln 2 \\approx 1.73$ ms', '$\\tau \\ln 2 \\approx 3.47$ ms', '$2\\tau \\approx 10$ ms', '$\\tau/2 \\approx 2.5$ ms'],
      correctAnswer: 0,
      explanation: '$P(t) = P_0 e^{-2t/\\tau}$. Set $P/P_0 = 1/2$: $e^{-2t/\\tau} = 1/2$, $t = (\\tau/2)\\ln 2$. $\\tau = L/R = 5$ ms. $t = 2.5 \\times 0.693 \\approx 1.73$ ms.'
    },
    {
      id: 'indrl6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

| Problem Type | Key Formula |
|:---:|:---:|
| General RL transient | $I(t) = I_f + (I_i - I_f)e^{-t/\\tau}$ |
| Multiple resistors | $\\tau = L/R_{\\text{Th}}$ |
| Time to reach target | $t = -\\tau\\ln[(I_f - I_{\\text{target}})/(I_f - I_i)]$ |
| Energy verification | $\\int P_R\\,dt = \\frac{1}{2}LI_0^2$ |

> **Next up:** Review and applications — Part 7.`
    }
  ]
};
