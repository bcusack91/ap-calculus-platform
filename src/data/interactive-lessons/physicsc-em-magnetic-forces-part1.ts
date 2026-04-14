export const physCEMMagForcePart1Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf1-intro',
      type: 'text' as const,
      content: `# The Lorentz Force

**Part 1 of 7 — $\\vec{F} = q\\vec{v} \\times \\vec{B}$**

### The Magnetic Force on a Moving Charge

A charged particle moving through a magnetic field experiences a force:

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

Key properties:
- The force is **perpendicular** to both $\\vec{v}$ and $\\vec{B}$
- The force does **no work** ($\\vec{F} \\perp \\vec{v} \\implies \\vec{F} \\cdot \\vec{v} = 0$)
- The force changes the **direction** of motion but not the **speed**

### Magnitude

$$|\\vec{F}| = |q|vB\\sin\\theta$$

where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$.

| $\\theta$ | Force |
|:---:|:---:|
| $0°$ or $180°$ | $F = 0$ (parallel to $\\vec{B}$) |
| $90°$ | $F = qvB$ (maximum) |
| General | $F = qvB\\sin\\theta$ |`
    },
    {
      id: 'magf1-mcq1',
      type: 'mcq' as const,
      question: 'A proton ($q = 1.6 \\times 10^{-19}$ C) moves at $3 \\times 10^6$ m/s perpendicular to a 0.5 T field. The magnetic force on it is:',
      options: ['$2.4 \\times 10^{-13}$ N', '$1.2 \\times 10^{-13}$ N', '$4.8 \\times 10^{-13}$ N', '$7.5 \\times 10^{-14}$ N'],
      correctAnswer: 0,
      explanation: '$F = qvB = (1.6 \\times 10^{-19})(3 \\times 10^6)(0.5) = 2.4 \\times 10^{-13}$ N.'
    },
    {
      id: 'magf1-cross',
      type: 'text' as const,
      content: `### Computing the Cross Product

For $\\vec{v} = v_x\\hat{x} + v_y\\hat{y} + v_z\\hat{z}$ and $\\vec{B} = B_x\\hat{x} + B_y\\hat{y} + B_z\\hat{z}$:

$$\\vec{v} \\times \\vec{B} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ v_x & v_y & v_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$

$$= (v_yB_z - v_zB_y)\\hat{x} + (v_zB_x - v_xB_z)\\hat{y} + (v_xB_y - v_yB_x)\\hat{z}$$

### Example

$\\vec{v} = 2\\hat{x} + 3\\hat{y}$ m/s, $\\vec{B} = 4\\hat{z}$ T, $q = -e$

$$\\vec{v} \\times \\vec{B} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ 2 & 3 & 0 \\\\ 0 & 0 & 4 \\end{vmatrix} = (12 - 0)\\hat{x} + (0 - 8)\\hat{y} + (0)\\hat{z} = 12\\hat{x} - 8\\hat{y}$$

$$\\vec{F} = q(\\vec{v} \\times \\vec{B}) = (-e)(12\\hat{x} - 8\\hat{y}) = -12e\\hat{x} + 8e\\hat{y}$$`
    },
    {
      id: 'magf1-mcq2',
      type: 'mcq' as const,
      question: 'A particle with charge $+2q$ has velocity $\\vec{v} = v\\hat{y}$ in a field $\\vec{B} = B\\hat{x}$. The force on the particle is:',
      options: ['$-2qvB\\hat{z}$', '$2qvB\\hat{z}$', '$2qvB\\hat{x}$', '$0$'],
      correctAnswer: 0,
      explanation: '$\\vec{v} \\times \\vec{B} = v\\hat{y} \\times B\\hat{x} = vB(\\hat{y} \\times \\hat{x}) = -vB\\hat{z}$. $\\vec{F} = 2q(-vB\\hat{z}) = -2qvB\\hat{z}$.'
    },
    {
      id: 'magf1-lorentz',
      type: 'text' as const,
      content: `### The Full Lorentz Force

When both electric and magnetic fields are present:

$$\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$$

### Velocity Selector

If $\\vec{E} = E\\hat{y}$ and $\\vec{B} = B\\hat{z}$, a positive charge moving in the $\\hat{x}$ direction:

- Electric force: $\\vec{F}_E = qE\\hat{y}$
- Magnetic force: $\\vec{F}_B = q(v\\hat{x} \\times B\\hat{z}) = -qvB\\hat{y}$

For the particle to pass undeflected:

$$qE = qvB \\implies v = \\frac{E}{B}$$

Only particles with speed $v = E/B$ pass through, regardless of charge or mass.`
    },
    {
      id: 'magf1-mcq3',
      type: 'mcq' as const,
      question: 'In a velocity selector with $E = 1000$ V/m and $B = 0.2$ T, which speed passes undeflected?',
      options: ['5000 m/s', '200 m/s', '500 m/s', '2000 m/s'],
      correctAnswer: 0,
      explanation: '$v = E/B = 1000/0.2 = 5000$ m/s.'
    },
    {
      id: 'magf1-mcq4',
      type: 'mcq' as const,
      question: 'The magnetic force on a charged particle can:',
      options: ['Change the direction but not the speed of the particle', 'Change the speed but not the direction', 'Change both speed and direction', 'Change the kinetic energy of the particle'],
      correctAnswer: 0,
      explanation: 'Since $\\vec{F} \\perp \\vec{v}$, the force does no work: $dK/dt = \\vec{F} \\cdot \\vec{v} = 0$. Speed (and KE) remain constant; only direction changes.'
    },
    {
      id: 'magf1-summary',
      type: 'text' as const,
      content: `### Summary — Part 1

| Concept | Formula |
|:---:|:---:|
| Magnetic force | $\\vec{F} = q\\vec{v} \\times \\vec{B}$ |
| Magnitude | $F = |q|vB\\sin\\theta$ |
| Full Lorentz | $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$ |
| Velocity selector | $v = E/B$ |
| Work done | $W = 0$ (always) |

> **Next up:** Circular motion of charged particles in magnetic fields — Part 2.`
    }
  ]
};
