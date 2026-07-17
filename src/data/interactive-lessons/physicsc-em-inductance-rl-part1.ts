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
      content: `### Inductance of a Toroid

A toroid with $N$ turns, inner radius $a$, outer radius $b$, height $h$:

$$B = \\frac{\\mu_0 NI}{2\\pi r} \\quad (a < r < b)$$

Flux through one turn:

$$\\Phi_B = \\int_a^b B \\cdot h\\,dr = \\frac{\\mu_0 NIh}{2\\pi}\\int_a^b \\frac{dr}{r} = \\frac{\\mu_0 NIh}{2\\pi}\\ln\\frac{b}{a}$$

$$\\boxed{L_{\\text{toroid}} = \\frac{\\mu_0 N^2 h}{2\\pi}\\ln\\frac{b}{a}}$$

### Inductance of a Coaxial Cable

Inner radius $a$, outer radius $b$, length $\\ell$:

$$L = \\frac{\\mu_0 \\ell}{2\\pi}\\ln\\frac{b}{a}$$

(This is the same form as the toroid with $N = 1$.)

### Inductance Per Unit Length

$$\\frac{L}{\\ell} = \\frac{\\mu_0}{2\\pi}\\ln\\frac{b}{a}$$`
    },
    {
      id: 'indrl1-mcq3',
      type: 'mcq' as const,
      question: 'A toroid with 1000 turns, inner radius 8 cm, outer radius 12 cm, and height 3 cm has inductance:',
      options: ['$\\approx 2.43$ mH', '$\\approx 24.3$ mH', '$\\approx 0.243$ mH', '$\\approx 243$ mH'],
      correctAnswer: 0,
      explanation: '$L = \\mu_0 N^2 h \\ln(b/a)/(2\\pi) = (4\\pi \\times 10^{-7})(10^6)(0.03)\\ln(1.5)/(2\\pi)$. $= (2 \\times 10^{-7})(10^6)(0.03)(0.405) = 2 \\times 10^{-1} \\times 0.03 \\times 0.405 \\approx 2.43 \\times 10^{-3}$ H.'
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
| Toroid | $L = \\mu_0 N^2 h \\ln(b/a)/(2\\pi)$ |
| Coaxial cable | $L/\\ell = \\mu_0 \\ln(b/a)/(2\\pi)$ |
| Induced EMF | $\\mathcal{E} = -L\\,dI/dt$ |

> **Next up:** The RL circuit differential equation — Part 2.`
    }
  ]
};
