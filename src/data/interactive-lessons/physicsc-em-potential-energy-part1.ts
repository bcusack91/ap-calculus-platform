export const physCEMPotEnergyPart1Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe1-intro',
      type: 'text' as const,
      content: `# Electric Potential Energy of Point Charges

**Part 1 of 7 — Foundations**

The **electric potential energy** $U$ of a system of charges is the work done by an external agent to assemble the configuration from infinity (where $U = 0$).

### Two Point Charges

For charges $q_1$ and $q_2$ separated by distance $r_{12}$:

$$U = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r_{12}} = \\frac{kq_1 q_2}{r_{12}}$$

### Sign Convention

- $q_1 q_2 > 0$ (same sign): $U > 0$ — work was done **against** the repulsive force.
- $q_1 q_2 < 0$ (opposite sign): $U < 0$ — the attractive force does work (energy released).

### Reference Point

$U = 0$ when $r_{12} \\to \\infty$. The charges are "free" at infinity.`
    },
    {
      id: 'pe1-mcq1',
      type: 'mcq' as const,
      question: 'The potential energy of two charges $+2\\;\\mu\\text{C}$ and $-3\\;\\mu\\text{C}$ separated by $0.10\\;\\text{m}$ is:',
      options: [
        '$-0.54\\;\\text{J}$',
        '$+0.54\\;\\text{J}$',
        '$-5.4\\;\\text{J}$',
        '$+5.4\\;\\text{J}$'
      ],
      correctAnswer: 0,
      explanation: '$U = kq_1q_2/r = (8.99\\times10^9)(2\\times10^{-6})(-3\\times10^{-6})/(0.10) = -0.54\\;\\text{J}$. Negative because the charges attract.'
    },
    {
      id: 'pe1-work',
      type: 'text' as const,
      content: `## Work-Energy Theorem

The work done by the electric force on a charge moving from $A$ to $B$:

$$W_{\\text{elec}} = U_A - U_B = -\\Delta U$$

By conservation of energy:

$$K_A + U_A = K_B + U_B$$

$$\\Delta K = -\\Delta U = W_{\\text{elec}}$$

### Worked Example

A proton ($q = +e$, $m = 1.67\\times10^{-27}\\;\\text{kg}$) starts at rest, $0.10\\;\\text{m}$ from a fixed charge $Q = +5.0\\;\\mu\\text{C}$. Find its speed at $r = 1.0\\;\\text{m}$.

$$K_i + U_i = K_f + U_f$$

$$0 + \\frac{keQ}{0.10} = \\frac{1}{2}mv^2 + \\frac{keQ}{1.0}$$

$$\\frac{1}{2}mv^2 = keQ\\left(\\frac{1}{0.10} - \\frac{1}{1.0}\\right) = (8.99\\times10^9)(1.6\\times10^{-19})(5\\times10^{-6})(9)$$

$$= 6.47\\times10^{-14}\\;\\text{J}$$

$$v = \\sqrt{\\frac{2(6.47\\times10^{-14})}{1.67\\times10^{-27}}} = 2.78\\times10^{13/2} \\approx 2.78\\times10^{6.5} \\approx 8.8\\times10^6\\;\\text{m/s}$$`
    },
    {
      id: 'pe1-mcq2',
      type: 'mcq' as const,
      question: 'Two protons are released from rest at separation $r$. As they fly apart, their total kinetic energy equals:',
      options: [
        '$ke^2/r$',
        '$ke^2/(2r)$',
        '$2ke^2/r$',
        '$0$'
      ],
      correctAnswer: 0,
      explanation: 'By energy conservation: $K_f = U_i - U_f = ke^2/r - 0 = ke^2/r$. The total $K$ is shared equally between the two protons.'
    },
    {
      id: 'pe1-relation',
      type: 'text' as const,
      content: `## Relationship: PE, Potential, and Field

Three closely related quantities:

| Quantity | Symbol | Definition | Units |
|:---:|:---:|:---:|:---:|
| Electric field | $\\vec{E}$ | Force per charge | N/C |
| Electric potential | $V$ | PE per charge | V = J/C |
| Potential energy | $U$ | Energy of configuration | J |

### Connections

$$U = qV \\quad \\text{(PE from potential)}$$

$$\\vec{E} = -\\nabla V \\quad \\text{(field from potential)}$$

$$\\vec{F} = -\\nabla U = q\\vec{E} \\quad \\text{(force from PE)}$$

$$\\Delta U = q\\Delta V = -q\\int_A^B \\vec{E}\\cdot d\\vec{l}$$

These relationships form a web: given any one, you can derive the others (with appropriate derivatives or integrals).`
    },
    {
      id: 'pe1-mcq3',
      type: 'mcq' as const,
      question: 'The force on a charge $q$ can be written as $\\vec{F} = -\\nabla U$. This is because the electric force is:',
      options: [
        'Conservative',
        'Constant',
        'Central',
        'Non-dissipative'
      ],
      correctAnswer: 0,
      explanation: 'The electric force is conservative: work depends only on endpoints, not path. This allows us to define a potential energy $U$ with $\\vec{F} = -\\nabla U$.'
    },
    {
      id: 'pe1-escape',
      type: 'text' as const,
      content: `## Escape Energy

The minimum kinetic energy needed for a charge $q$ to escape from a charge $Q$ at distance $r$:

$$K_{\\min} = |U| = \\frac{k|qQ|}{r}$$

At escape, $v \\to 0$ as $r \\to \\infty$, so $K_f + U_f = 0$.

### Worked Example

An alpha particle ($q = +2e$, $m = 6.64\\times10^{-27}\\;\\text{kg}$) at the surface of a gold nucleus ($Q = +79e$, $R = 7.0\\times10^{-15}\\;\\text{m}$). Find the escape speed.

$$\\frac{1}{2}mv^2 = \\frac{kqQ}{R} = \\frac{(8.99\\times10^9)(2)(79)(1.6\\times10^{-19})^2}{7.0\\times10^{-15}}$$

$$= \\frac{(8.99\\times10^9)(158)(2.56\\times10^{-38})}{7.0\\times10^{-15}} = 5.24\\times10^{-12}\\;\\text{J}$$

$$v = \\sqrt{\\frac{2(5.24\\times10^{-12})}{6.64\\times10^{-27}}} = 3.97\\times10^7\\;\\text{m/s}$$

This is about $13\\%$ of the speed of light — relativistic corrections would be needed for precision.`
    },
    {
      id: 'pe1-mcq4',
      type: 'mcq' as const,
      question: 'An electron is at distance $r$ from a proton. The minimum energy to free the electron to infinity is:',
      options: ['$ke^2/r$', '$ke^2/(2r)$', '$2ke^2/r$', '$ke^2/r^2$'],
      correctAnswer: 0,
      explanation: '$U = -ke^2/r$ (attractive). To reach $U = 0$ at infinity, need $K = |U| = ke^2/r$.'
    }
  ]
};
