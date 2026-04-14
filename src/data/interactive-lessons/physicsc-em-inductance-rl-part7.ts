export const physCEMIndRLPart7Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Concept | Formula |
|:---:|:---:|
| Self-inductance | $\\Lambda = LI$, $\\mathcal{E} = -L\\,dI/dt$ |
| Solenoid | $L = \\mu_0 N^2 A/\\ell$ |
| Toroid | $L = \\mu_0 N^2 h \\ln(b/a)/(2\\pi)$ |
| RL charging | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ |
| RL discharging | $I = I_0 e^{-t/\\tau}$ |
| Time constant | $\\tau = L/R$ |
| Stored energy | $U = \\frac{1}{2}LI^2$ |
| Energy density | $u_B = B^2/(2\\mu_0)$ |
| General transient | $I(t) = I_f + (I_i - I_f)e^{-t/\\tau}$ |`
    },
    {
      id: 'indrl7-mcq1',
      type: 'mcq' as const,
      question: 'A solenoid with 2000 turns, length 0.5 m, and diameter 4 cm is wound on an iron core ($\\kappa_m = 500$). Its inductance is approximately:',
      options: ['$\\approx 6.32$ H', '$\\approx 0.632$ H', '$\\approx 63.2$ H', '$\\approx 0.0632$ H'],
      correctAnswer: 0,
      explanation: '$A = \\pi(0.02)^2 = 4\\pi \\times 10^{-4}$ m². $L = \\kappa_m \\mu_0 N^2 A/\\ell = 500 \\times 4\\pi \\times 10^{-7} \\times 4 \\times 10^6 \\times 4\\pi \\times 10^{-4}/0.5$. $= 500 \\times (4\\pi)^2 \\times 10^{-7} \\times 10^6 \\times 10^{-4}/0.5 = 500 \\times 16\\pi^2 \\times 10^{-5}/0.5 \\approx 500 \\times 158 \\times 10^{-5} \\times 2 \\approx 6.32$ H.'
    },
    {
      id: 'indrl7-applications',
      type: 'text' as const,
      content: `### Real-World Applications

**1. Ignition Coils**

Car ignition systems use RL decay to generate high voltages. When current through the inductor is interrupted:

$$\\mathcal{E}_{\\text{induced}} = -L\\frac{dI}{dt}$$

A rapid $dI/dt$ (fast switch-off) produces thousands of volts to create a spark.

**2. Electromagnetic Relays**

An inductor creates a magnetic field to pull a switch contact. The RL time constant determines how quickly the relay engages.

**Flyback protection:** When the relay opens, collapsing $B$ induces large $\\mathcal{E}$. A diode across the inductor provides a current path, preventing voltage spikes.

**3. Energy Storage (SMES)**

Superconducting Magnetic Energy Storage uses $R \\approx 0$ coils:
- $\\tau = L/R \\to \\infty$ (current persists indefinitely)
- Energy stored as $\\frac{1}{2}LI^2$ with no resistive losses

**4. Transformers**

Mutual inductance $M$ couples two coils:
$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}, \\quad M = k\\sqrt{L_1 L_2}$$
where $k$ is the coupling coefficient ($0 \\leq k \\leq 1$).`
    },
    {
      id: 'indrl7-mcq2',
      type: 'mcq' as const,
      question: 'An RL circuit has reached steady state with $I = 5$ A and $L = 0.2$ H. If the switch opens and the current drops to zero in $0.1$ ms, the average induced EMF is:',
      options: ['10,000 V', '1,000 V', '100 V', '100,000 V'],
      correctAnswer: 0,
      explanation: '$|\\mathcal{E}| = L|\\Delta I/\\Delta t| = 0.2 \\times 5/(10^{-4}) = 0.2 \\times 50000 = 10000$ V. This is why flyback diodes are essential!'
    },
    {
      id: 'indrl7-mcq3',
      type: 'mcq' as const,
      question: 'Two inductors $L_1 = 3$ H and $L_2 = 6$ H are connected in series (no mutual coupling). A current of 2 A flows through them. The total energy stored is:',
      options: ['18 J', '9 J', '36 J', '12 J'],
      correctAnswer: 0,
      explanation: 'In series: $L_{\\text{eq}} = L_1 + L_2 = 9$ H. $U = \\frac{1}{2}L_{\\text{eq}}I^2 = \\frac{1}{2}(9)(4) = 18$ J.'
    },
    {
      id: 'indrl7-mcq4',
      type: 'mcq' as const,
      question: 'At what time does the energy stored in the inductor of a charging RL circuit equal the energy already dissipated in the resistor?',
      options: ['Never exactly, but they asymptotically approach equality as $t \\to \\infty$', 'At $t = \\tau$', 'At $t = 2\\tau$', 'They are always equal'],
      correctAnswer: 0,
      explanation: 'At any finite time, $U_L(t) = \\frac{1}{2}LI^2(t)$ and $U_R(t) = \\int_0^t I^2R\\,dt$. These are not equal at any finite $t$, but both approach $L\\mathcal{E}^2/(2R^2)$ as $t \\to \\infty$. Only in the limit are they equal.'
    },
    {
      id: 'indrl7-mcq5',
      type: 'mcq' as const,
      question: 'An inductor $L$ and resistor $R$ are in parallel across a battery $\\mathcal{E}$. At $t = 0$, the switch closes. The initial current through $L$ is:',
      options: ['$0$', '$\\mathcal{E}/R$', '$\\mathcal{E}/(R+R_L)$', '$\\infty$'],
      correctAnswer: 0,
      explanation: 'At $t = 0$, the inductor opposes any instantaneous change in current: $I_L(0) = 0$. All current initially flows through $R$: $I_R = \\mathcal{E}/R$. Over time, $I_L \\to \\mathcal{E}/R_L$ (if inductor has some $R_L$) or $\\to \\infty$ for ideal $L$ in parallel (steady state requires re-analysis).'
    },
    {
      id: 'indrl7-completion',
      type: 'text' as const,
      content: `### 🎉 Topic Complete!

You've mastered **Inductance & RL Circuits** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Self-inductance definition and calculation | ✅ |
| 2 | RL circuit differential equation | ✅ |
| 3 | RL charging and discharging | ✅ |
| 4 | Time constant $\\tau = L/R$ | ✅ |
| 5 | Energy stored in inductor | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key takeaway:** RL circuits are governed by the same first-order ODE structure as RC circuits, with the duality $L \\leftrightarrow C$, $I \\leftrightarrow V$. Master the general transient formula $I(t) = I_f + (I_i - I_f)e^{-t/\\tau}$, the energy relation $U = \\frac{1}{2}LI^2$, and the critical behavior of inductors as open circuits at $t = 0$ and short circuits at $t = \\infty$.`
    }
  ]
};
