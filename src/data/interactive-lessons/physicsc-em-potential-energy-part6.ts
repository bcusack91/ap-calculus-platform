export const physCEMPotEnergyPart6Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop: Potential Energy

**Part 6 of 7 — AP-Style Practice**

### Key Formulas

| Formula | Expression |
|:---:|:---:|
| Two charges | $U = kq_1 q_2/r$ |
| $N$ charges | $U = \\sum_{i<j} kq_iq_j/r_{ij}$ |
| Energy density | $u = \\epsilon_0 E^2/2$ |
| Capacitor | $U = \\frac{1}{2}CV^2 = Q^2/(2C) = QV/2$ |
| Sphere (shell) | $U = kQ^2/(2R)$ |
| Sphere (solid) | $U = 3kQ^2/(5R)$ |
| From potential | $U = qV$ |`
    },
    {
      id: 'pe6-mcq1',
      type: 'mcq' as const,
      question: 'A particle with charge $q = +2\\;\\mu\\text{C}$ moves from a point where $V = 200\\;\\text{V}$ to where $V = 50\\;\\text{V}$. The work done by the electric force is:',
      options: [
        '$3.0 \\times 10^{-4}\\;\\text{J}$',
        '$-3.0 \\times 10^{-4}\\;\\text{J}$',
        '$5.0 \\times 10^{-4}\\;\\text{J}$',
        '$1.0 \\times 10^{-4}\\;\\text{J}$'
      ],
      correctAnswer: 0,
      explanation: '$W = q(V_i - V_f) = (2\\times10^{-6})(200 - 50) = 3.0\\times10^{-4}\\;\\text{J}$. Positive: the charge moves to lower potential spontaneously.'
    },
    {
      id: 'pe6-problem1',
      type: 'text' as const,
      content: `## Problem 1: Closest Approach (Rutherford Scattering)

An alpha particle ($q = 2e$, $m = 6.64\\times10^{-27}\\;\\text{kg}$) with kinetic energy $K_0 = 5.0\\;\\text{MeV}$ approaches a gold nucleus ($Q = 79e$) head-on. Find the distance of closest approach.

### Solution

At closest approach, $K = 0$ (momentarily at rest). By conservation of energy:

$$K_0 + 0 = 0 + \\frac{k(2e)(79e)}{r_{\\min}}$$

$$r_{\\min} = \\frac{k \\cdot 158e^2}{K_0}$$

Converting $K_0$ to joules: $5.0\\;\\text{MeV} = 5.0 \\times 10^6 \\times 1.6\\times10^{-19} = 8.0\\times10^{-13}\\;\\text{J}$

$$r_{\\min} = \\frac{(8.99\\times10^9)(158)(1.6\\times10^{-19})^2}{8.0\\times10^{-13}}$$

$$= \\frac{(8.99\\times10^9)(158)(2.56\\times10^{-38})}{8.0\\times10^{-13}} = \\frac{3.64\\times10^{-26}}{8.0\\times10^{-13}} = 4.55\\times10^{-14}\\;\\text{m}$$

$$r_{\\min} \\approx 45.5\\;\\text{fm}$$

This is larger than the gold nucleus ($R \\approx 7\\;\\text{fm}$), consistent with Rutherford's observation that alphas bounce back.`
    },
    {
      id: 'pe6-mcq2',
      type: 'mcq' as const,
      question: 'If the alpha particle\'s kinetic energy is doubled, the distance of closest approach:',
      options: ['Halves', 'Doubles', 'Quarters', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$r_{\\min} = k(2e)(79e)/K_0 \\propto 1/K_0$. Doubling $K_0$ halves $r_{\\min}$.'
    },
    {
      id: 'pe6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Energy Released in Nuclear Fission

A uranium-235 nucleus ($Q = 92e$, $R \\approx 7\\;\\text{fm}$) splits into two fragments of equal charge $46e$, starting in contact ($r = 2R$). Estimate the kinetic energy released.

### Solution

Initially, the two fragments are touching ($r_i = 2R$). Finally, they are far apart ($r_f \\to \\infty$).

$$\\Delta K = U_i - U_f = \\frac{k(46e)(46e)}{2R} - 0$$

$$= \\frac{k \\cdot 2116 \\cdot e^2}{2R} = \\frac{(8.99\\times10^9)(2116)(2.56\\times10^{-38})}{2(7\\times10^{-15})}$$

$$= \\frac{4.87\\times10^{-26}}{1.4\\times10^{-14}} = 3.48\\times10^{-12}\\;\\text{J}$$

$$= \\frac{3.48\\times10^{-12}}{1.6\\times10^{-13}} \\approx 22\\;\\text{MeV}$$

This is just the Coulomb energy — the actual fission release is $\\sim 200\\;\\text{MeV}$, with most coming from the strong nuclear force.`
    },
    {
      id: 'pe6-mcq3',
      type: 'mcq' as const,
      question: 'In dielectric breakdown of air ($E_{\\max} \\approx 3\\times10^6\\;\\text{V/m}$), the maximum energy density the field can reach is approximately:',
      options: [
        '$40\\;\\text{J/m}^3$',
        '$400\\;\\text{J/m}^3$',
        '$4\\;\\text{J/m}^3$',
        '$4000\\;\\text{J/m}^3$'
      ],
      correctAnswer: 0,
      explanation: '$u = \\epsilon_0 E^2/2 = (8.85\\times10^{-12})(9\\times10^{12})/2 \\approx 40\\;\\text{J/m}^3$. Air breaks down before the field energy density can exceed this.'
    },
    {
      id: 'pe6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Two-Capacitor Problem

A capacitor $C_1 = 10\\;\\mu\\text{F}$ charged to $V_0 = 100\\;\\text{V}$ is connected to an uncharged $C_2 = 10\\;\\mu\\text{F}$. Find the final voltage and the energy lost.

### Solution

Charge is conserved: $Q = C_1 V_0 = 10^{-3}\\;\\text{C}$.

After connection: $V_f = Q/(C_1 + C_2) = 10^{-3}/(20\\times10^{-6}) = 50\\;\\text{V}$.

**Initial energy:** $U_i = \\frac{1}{2}C_1 V_0^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.050\\;\\text{J}$

**Final energy:** $U_f = \\frac{1}{2}(C_1+C_2)V_f^2 = \\frac{1}{2}(2\\times10^{-5})(2500) = 0.025\\;\\text{J}$

**Energy lost:** $\\Delta U = 0.050 - 0.025 = 0.025\\;\\text{J}$

Exactly half the energy is lost to heat in the connecting wires (via transient currents), regardless of wire resistance! This is a classic result.

### General Formula

For $C_1 = C_2 = C$: $\\Delta U/U_i = 1/2$ always.

For arbitrary $C_1, C_2$:

$$\\frac{\\Delta U}{U_i} = \\frac{C_2}{C_1 + C_2}$$`
    },
    {
      id: 'pe6-mcq4',
      type: 'mcq' as const,
      question: 'A $20\\;\\mu\\text{F}$ capacitor at $V = 200\\;\\text{V}$ is connected to an uncharged $60\\;\\mu\\text{F}$ capacitor. The fraction of energy lost is:',
      options: ['$3/4$', '$1/4$', '$1/2$', '$2/3$'],
      correctAnswer: 0,
      explanation: '$\\Delta U/U_i = C_2/(C_1+C_2) = 60/(20+60) = 3/4$. Three-quarters of the initial energy is dissipated.'
    }
  ]
};
