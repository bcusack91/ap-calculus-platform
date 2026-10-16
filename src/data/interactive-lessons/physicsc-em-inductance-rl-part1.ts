export const physCEMIndRLPart1Data = {
  topicSlug: "inductance-rl-physics-c-em",
  sections: [
    {
      id: 'indrl1-intro',
      type: 'text' as const,
      content: `# Self-Inductance

**Part 1 of 7 — Definition and Calculation**

### What is Inductance?

When current flows through a coil, it creates a magnetic flux through itself. If the current changes, the flux changes, inducing an EMF that **opposes** the change (Lenz's law).

**Self-inductance** $L$ relates the flux linkage to the current:

$$\\Lambda = N\\Phi_B = LI$$

The induced EMF is:

$$\\mathcal{E} = -\\frac{d\\Lambda}{dt} = -L\\frac{dI}{dt}$$

### Units

$$[L] = \\frac{\\text{V} \\cdot \\text{s}}{\\text{A}} = \\text{Henry (H)}$$

| Quantity | Symbol | Unit |
|:---:|:---:|:---:|
| Inductance | $L$ | H |
| Flux linkage | $\\Lambda = N\\Phi_B$ | Wb (= V·s) |
| EMF | $\\mathcal{E}$ | V |`
    },
    {
      id: 'indrl1-mcq1',
      type: 'mcq' as const,
      question: 'A coil with $L = 50$ mH carries a current that changes at 200 A/s. The magnitude of the induced EMF is:',
      options: ['10 V', '1 V', '100 V', '0.1 V'],
      correctAnswer: 0,
      explanation: '$|\\mathcal{E}| = L|dI/dt| = (50 \\times 10^{-3})(200) = 10$ V.'
    },
    {
      id: 'indrl1-solenoid',
      type: 'text' as const,
      content: `### Inductance of a Solenoid

A solenoid of length $\\ell$, $N$ turns, cross-section $A$:

Magnetic field: $B = \\mu_0 n I = \\mu_0 (N/\\ell) I$

Flux through one turn: $\\Phi_B = BA = \\mu_0 (N/\\ell) I A$

Total flux linkage: $\\Lambda = N\\Phi_B = \\mu_0 N^2 A I / \\ell$

$$\\boxed{L_{\\text{solenoid}} = \\frac{\\mu_0 N^2 A}{\\ell} = \\mu_0 n^2 A \\ell}$$

### Key Dependencies

$$L \\propto N^2, \\quad L \\propto A, \\quad L \\propto 1/\\ell$$

Doubling the number of turns **quadruples** the inductance.

If a ferromagnetic core with permeability $\\mu = \\kappa_m \\mu_0$ is inserted:

$$L = \\frac{\\kappa_m \\mu_0 N^2 A}{\\ell}$$`
    },
    {
      id: 'indrl1-mcq2',
      type: 'mcq' as const,
      question: 'A solenoid has 500 turns, length 0.25 m, and cross-section area $4 \\times 10^{-4}$ $m^{2}$. Its inductance is:',
      options: ['$\\approx 0.503$ mH', '$\\approx 5.03$ mH', '$\\approx 50.3$ mH', '$\\approx 0.0503$ mH'],
      correctAnswer: 0,
      explanation: '$L = \\mu_0 N^2 A/\\ell = (4\\pi \\times 10^{-7})(250000)(4 \\times 10^{-4})/(0.25) = (4\\pi \\times 10^{-7})(250000)(1.6 \\times 10^{-3}) = 4\\pi \\times 10^{-7} \\times 400 \\approx 5.03 \\times 10^{-4}$ H $= 0.503$ mH.'
    },
    {
      id: 'indrl1-toroid',
      type: 'text' as const,
      content: `### Inductance from Flux Linkage
You do not need a formula for the shape if you know the flux. Since $N\\Phi_B = LI$,
$$L = \\frac{N\\Phi_B}{I}$$
**Example:** A 400-turn coil has $2.0 \\times 10^{-5}$ Wb through each turn when $I = 0.50$ A:
$$L = \\frac{(400)(2.0 \\times 10^{-5})}{0.50} = 0.016 \\text{ H} = 16 \\text{ mH}$$

### What Changes $L$ — and What Does Not
- **Geometry and core only.** $L$ depends on the number of turns, length, cross-sectional area, and the permeability of the core — not on the current or on how fast it changes.
- **Iron cores.** A ferromagnetic core has $\\mu_{\\text{core}} \\gg \\mu_0$, multiplying $L$ by hundreds or thousands.
- **Straight wires** are modeled as having essentially **zero** inductance; coils are the circuit elements with significant $L$.`
    },
    {
      id: 'indrl1-mcq3',
      type: 'mcq' as const,
      question: 'A 400-turn coil has $2.0 \\times 10^{-5}$ Wb of flux through each turn when its current is $0.50$ A. Its inductance is:',
      options: ['16 mH', '40 μH', '4.0 mH', '10 μH'],
      correctAnswer: 0,
      explanation: '$L = N\\Phi_B/I = (400)(2.0 \\times 10^{-5})/0.50 = 0.016$ H $= 16$ mH. Leaving out $N$ gives 40 μH, and multiplying by $I$ instead of dividing gives 4.0 mH.'
    },
    {
      id: 'indrl1-mcq4',
      type: 'mcq' as const,
      question: 'If the number of turns in a solenoid is tripled while keeping the same length and area, the inductance:',
      options: ['Increases by factor 9', 'Increases by factor 3', 'Increases by factor 6', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$L \\propto N^2$. Tripling $N$: $L \\to 9L$.'
    },
    {
      id: 'indrl1-summary',
      type: 'text' as const,
      content: `### Summary — Part 1

| Geometry | Inductance |
|:---:|:---:|
| Solenoid | $L = \\mu_0 N^2 A/\\ell$ |
| Any coil (flux known) | $L = N\\Phi_B/I$ |
| Iron core | Multiplies $L$ by $\\mu_{\\text{core}}/\\mu_0$ |
| Induced EMF | $\\mathcal{E} = -L\\,dI/dt$ |

> **Next up:** The RL circuit differential equation — Part 2.`
    }
  ]
};
