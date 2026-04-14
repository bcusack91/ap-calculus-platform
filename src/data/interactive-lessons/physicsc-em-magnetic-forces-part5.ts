export const physCEMMagForcePart5Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf5-intro',
      type: 'text' as const,
      content: `# Torque on Current Loops

**Part 5 of 7 — Magnetic Dipole Moment**

### Torque on a Rectangular Loop

Consider a rectangular loop (sides $a$ and $b$) carrying current $I$ in a uniform field $\\vec{B}$.

Forces on the sides of length $a$ (perpendicular to $\\vec{B}$):
$$F = BIa$$

These forces form a **couple** with moment arm $b\\sin\\theta$:

$$\\tau = BIa \\cdot b\\sin\\theta = BIA\\sin\\theta$$

where $A = ab$ is the area of the loop and $\\theta$ is the angle between $\\vec{B}$ and the normal to the loop.

### The Magnetic Dipole Moment

$$\\vec{\\mu} = NIA\\hat{n}$$

where $N$ is the number of turns and $\\hat{n}$ is the unit normal (right-hand rule with current direction).

$$\\boxed{\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}}$$

$$\\tau = \\mu B\\sin\\theta = NIAB\\sin\\theta$$`
    },
    {
      id: 'magf5-mcq1',
      type: 'mcq' as const,
      question: 'A circular coil of 100 turns, radius 5 cm, carries 2 A in a 0.4 T field. The maximum torque on the coil is:',
      options: ['$0.628$ N·m', '$0.314$ N·m', '$1.257$ N·m', '$6.28$ N·m'],
      correctAnswer: 0,
      explanation: '$\\mu = NIA = 100 \\times 2 \\times \\pi(0.05)^2 = 200\\pi(0.0025) = 0.5\\pi$ A·m². $\\tau_{\\max} = \\mu B = 0.5\\pi(0.4) = 0.2\\pi \\approx 0.628$ N·m.'
    },
    {
      id: 'magf5-energy',
      type: 'text' as const,
      content: `### Potential Energy of a Dipole

The potential energy of a magnetic dipole in a field is:

$$U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B\\cos\\theta$$

| Orientation | $\\theta$ | $U$ | Stability |
|:---:|:---:|:---:|:---:|
| $\\vec{\\mu} \\parallel \\vec{B}$ | $0$ | $-\\mu B$ | Stable equilibrium |
| $\\vec{\\mu} \\perp \\vec{B}$ | $90°$ | $0$ | — |
| $\\vec{\\mu}$ antiparallel $\\vec{B}$ | $180°$ | $+\\mu B$ | Unstable equilibrium |

### Work to Rotate

Work done by external agent to rotate from $\\theta_1$ to $\\theta_2$:

$$W = \\Delta U = -\\mu B(\\cos\\theta_2 - \\cos\\theta_1) = \\mu B(\\cos\\theta_1 - \\cos\\theta_2)$$

### Connection to Torque

$$\\tau = -\\frac{dU}{d\\theta} = -\\frac{d}{d\\theta}(-\\mu B\\cos\\theta) = -\\mu B\\sin\\theta$$

The negative sign confirms torque rotates toward $\\theta = 0$ (stable equilibrium).`
    },
    {
      id: 'magf5-mcq2',
      type: 'mcq' as const,
      question: 'A magnetic dipole with $\\mu = 0.5$ A·m² is initially aligned with a 2 T field. The work required by an external agent to rotate it $180°$ is:',
      options: ['2 J', '1 J', '0.5 J', '4 J'],
      correctAnswer: 0,
      explanation: '$W = \\mu B(\\cos 0° - \\cos 180°) = 0.5 \\times 2 \\times (1 - (-1)) = 0.5 \\times 2 \\times 2 = 2$ J.'
    },
    {
      id: 'magf5-general',
      type: 'text' as const,
      content: `### General Loop Shape

The torque formula $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ works for **any** flat loop shape (not just rectangular):

$$\\vec{\\mu} = NIA\\hat{n}$$

For a non-planar loop, the dipole moment is:

$$\\vec{\\mu} = \\frac{I}{2}\\oint \\vec{r} \\times d\\vec{\\ell}$$

### Force on a Dipole in a Non-Uniform Field

In a non-uniform field, there **is** a net force:

$$\\vec{F} = \\nabla(\\vec{\\mu} \\cdot \\vec{B})$$

For a dipole aligned along $z$ in a field with gradient $\\partial B/\\partial z$:

$$F_z = \\mu \\frac{\\partial B}{\\partial z}$$

> This is how the Stern-Gerlach experiment separates magnetic moments.`
    },
    {
      id: 'magf5-mcq3',
      type: 'mcq' as const,
      question: 'A dipole $\\vec{\\mu} = \\mu\\hat{z}$ in a field $\\vec{B} = B_0(1 + \\alpha z)\\hat{z}$ experiences a force:',
      options: ['$F_z = \\mu B_0\\alpha$', '$F_z = \\mu B_0$', '$F_z = 0$', '$F_z = \\mu \\alpha$'],
      correctAnswer: 0,
      explanation: '$F_z = \\mu(\\partial B_z/\\partial z) = \\mu \\cdot B_0\\alpha$.'
    },
    {
      id: 'magf5-mcq4',
      type: 'mcq' as const,
      question: 'A square loop of side $a$ carries current $I$ and has its normal at $60°$ to $\\vec{B}$. The torque on the loop is:',
      options: ['$\\frac{\\sqrt{3}}{2}Ia^2B$', '$\\frac{1}{2}Ia^2B$', '$Ia^2B$', '$2Ia^2B$'],
      correctAnswer: 0,
      explanation: '$\\tau = \\mu B\\sin\\theta = Ia^2 B \\sin 60° = \\frac{\\sqrt{3}}{2}Ia^2B$.'
    },
    {
      id: 'magf5-summary',
      type: 'text' as const,
      content: `### Summary — Part 5

| Quantity | Formula |
|:---:|:---:|
| Magnetic moment | $\\vec{\\mu} = NIA\\hat{n}$ |
| Torque | $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ |
| Potential energy | $U = -\\vec{\\mu} \\cdot \\vec{B}$ |
| Force (non-uniform $\\vec{B}$) | $\\vec{F} = \\nabla(\\vec{\\mu} \\cdot \\vec{B})$ |

> **Next up:** Problem-solving workshop — Part 6.`
    }
  ]
};
