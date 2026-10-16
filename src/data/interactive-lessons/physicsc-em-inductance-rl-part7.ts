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
| RL charging | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ |
| RL discharging | $I = I_0 e^{-t/\\tau}$ |
| Time constant | $\\tau = L/R$ |
| Stored energy | $U = \\frac{1}{2}LI^2$ |
| General transient | $I(t) = I_f + (I_i - I_f)e^{-t/\\tau}$ |`
    },
    {
      id: 'indrl7-mcq1',
      type: 'mcq' as const,
      question: 'A solenoid with 2000 turns, length 0.5 m, and diameter 4 cm is wound on an iron core ($\\kappa_m = 500$). Its inductance is approximately:',
      options: ['$\\approx 6.32$ H', '$\\approx 0.632$ H', '$\\approx 63.2$ H', '$\\approx 0.0632$ H'],
      correctAnswer: 0,
      explanation: '$A = \\pi(0.02)^2 = 1.26 \\times 10^{-3}$ $m^{2}$. $L = \\kappa_m \\mu_0 N^2 A/\\ell = (500)(4\\pi \\times 10^{-7})(4 \\times 10^6)(1.26 \\times 10^{-3})/0.5 \\approx 6.32$ H.'
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

When the relay opens, the collapsing $B$ induces a large $\\mathcal{E}$ that can spark across the opening contacts.

**3. Energy Storage (SMES)**

Superconducting Magnetic Energy Storage uses $R \\approx 0$ coils:
- $\\tau = L/R \\to \\infty$ (current persists indefinitely)
- Energy stored as $\\frac{1}{2}LI^2$ with no resistive losses`
    },
    {
      id: 'indrl7-mcq2',
      type: 'mcq' as const,
      question: 'An RL circuit has reached steady state with $I = 5$ A and $L = 0.2$ H. If the switch opens and the current drops to zero in $0.1$ ms, the average induced EMF is:',
      options: ['10,000 V', '1,000 V', '100 V', '100,000 V'],
      correctAnswer: 0,
      explanation: '$|\\mathcal{E}| = L|\\Delta I/\\Delta t| = 0.2 \\times 5/(10^{-4}) = 0.2 \\times 50000 = 10000$ V. This is why opening a switch in an inductive circuit can produce a spark.'
    },
    {
      id: 'indrl7-mcq3',
      type: 'mcq' as const,
      question: 'An inductor carrying $2.0$ A has been in steady state when a switch opens, so its current must now flow through a $30\\,\\Omega$ resistor. Just after the switch opens, the magnitude of the voltage across the inductor is:',
      options: ['60 V', '15 V', '0 V', '2 V'],
      correctAnswer: 0,
      explanation: 'The inductor current cannot change instantly, so $2.0$ A still flows, now through $30\\,\\Omega$: $|V_L| = I_0 R = 60$ V, equal and opposite to the resistor\'s voltage around the loop.'
    },
    {
      id: 'indrl7-mcq4',
      type: 'mcq' as const,
      question: 'In a charging RL circuit, at the instant the current is half its final value, the energy stored in the inductor is what fraction of its final stored energy?',
      options: ['$1/4$', '$1/2$', '$1/8$', '$3/4$'],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}LI^2 \\propto I^2$, so at $I = I_f/2$ the stored energy is $(1/2)^2 = 1/4$ of its final value.'
    },
    {
      id: 'indrl7-mcq5',
      type: 'mcq' as const,
      question: 'An inductor $L$ and resistor $R$ are in parallel across a battery $\\mathcal{E}$. At $t = 0$, the switch closes. The initial current through $L$ is:',
      options: ['$0$', '$\\mathcal{E}/R$', '$\\mathcal{E}/(2R)$', '$\\infty$'],
      correctAnswer: 0,
      explanation: 'The inductor current cannot change instantly, so $I_L(0) = 0$, while $R$ carries $\\mathcal{E}/R$ right away. After that, the ideal battery across $L$ makes $I_L$ grow at the rate $dI_L/dt = \\mathcal{E}/L$.'
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
