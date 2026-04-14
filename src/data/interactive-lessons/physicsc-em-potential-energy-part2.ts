export const physCEMPotEnergyPart2Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe2-intro',
      type: 'text' as const,
      content: `# U = qV — Potential Energy from Electric Potential

**Part 2 of 7 — Connecting PE and Potential**

The electric potential $V$ at a point in space is the potential energy per unit charge:

$$V = \\frac{U}{q} \\implies U = qV$$

For a point charge $Q$ creating the potential:

$$V(r) = \\frac{kQ}{r}$$

For a charge $q$ placed at a point where the potential is $V$:

$$U = qV$$

### Key Distinction

- $V$ is a property of the **source** charges (exists even without a test charge).
- $U$ is a property of the **system** (requires both source and test charge).`
    },
    {
      id: 'pe2-mcq1',
      type: 'mcq' as const,
      question: 'A proton ($q = +e$) is at a point where $V = 100\\;\\text{V}$. Its potential energy is:',
      options: [
        '$1.6 \\times 10^{-17}\\;\\text{J}$',
        '$100\\;\\text{J}$',
        '$100\\;\\text{eV}$',
        '$1.6 \\times 10^{-19}\\;\\text{J}$'
      ],
      correctAnswer: 0,
      explanation: '$U = qV = (1.6\\times10^{-19})(100) = 1.6\\times10^{-17}\\;\\text{J}$. In electron-volts, this is $100\\;\\text{eV}$, but the question asks for SI units.'
    },
    {
      id: 'pe2-electronvolt',
      type: 'text' as const,
      content: `## The Electron-Volt (eV)

The **electron-volt** is a convenient energy unit: the energy gained by an electron accelerated through $1\\;\\text{V}$:

$$1\\;\\text{eV} = e \\times 1\\;\\text{V} = 1.602 \\times 10^{-19}\\;\\text{J}$$

### Unit Conversions

| Energy | eV | Joules |
|:---:|:---:|:---:|
| Visible photon | $\\sim 2\\;\\text{eV}$ | $3.2 \\times 10^{-19}\\;\\text{J}$ |
| Ionization of H | $13.6\\;\\text{eV}$ | $2.18 \\times 10^{-18}\\;\\text{J}$ |
| Nuclear binding | $\\sim \\text{MeV}$ | $\\sim 10^{-13}\\;\\text{J}$ |
| Particle physics | $\\sim \\text{GeV}$ | $\\sim 10^{-10}\\;\\text{J}$ |

### Using $U = qV$ with eV

If $q = e$ and $\\Delta V = 500\\;\\text{V}$:

$$\\Delta U = e \\cdot 500\\;\\text{V} = 500\\;\\text{eV} = 500 \\times 1.6\\times10^{-19} = 8.0\\times10^{-17}\\;\\text{J}$$`
    },
    {
      id: 'pe2-mcq2',
      type: 'mcq' as const,
      question: 'An electron accelerated from rest through $\\Delta V = 2000\\;\\text{V}$ gains kinetic energy of:',
      options: ['$2000\\;\\text{eV}$', '$2000\\;\\text{J}$', '$1000\\;\\text{eV}$', '$4000\\;\\text{eV}$'],
      correctAnswer: 0,
      explanation: '$\\Delta K = |q|\\Delta V = e \\times 2000\\;\\text{V} = 2000\\;\\text{eV}$. The electron gains $2000\\;\\text{eV}$ of kinetic energy.'
    },
    {
      id: 'pe2-superposition',
      type: 'text' as const,
      content: `## Potential from Multiple Charges

Since potential is a scalar, the total potential at a point is the algebraic sum:

$$V(\\vec{r}) = \\sum_i \\frac{kq_i}{|\\vec{r} - \\vec{r}_i|}$$

No vector components to worry about! This is much simpler than computing $\\vec{E}$.

### Worked Example

Charges $+Q$ at $(0,0)$ and $-Q$ at $(d,0)$. Find $V$ at $(d/2, h)$.

$$r_1 = \\sqrt{(d/2)^2 + h^2}, \\quad r_2 = \\sqrt{(d/2)^2 + h^2}$$

By symmetry, $r_1 = r_2 = r$:

$$V = \\frac{kQ}{r} + \\frac{k(-Q)}{r} = 0$$

The potential on the entire perpendicular bisector of a dipole is zero!

### PE of a Test Charge

If we place charge $q$ at this point:

$$U = qV = q \\cdot 0 = 0$$

Zero potential energy doesn't mean zero force — $\\vec{E} \\neq 0$ on the bisector.`
    },
    {
      id: 'pe2-mcq3',
      type: 'mcq' as const,
      question: 'At a point where $V = 0$, the electric field is:',
      options: [
        'Not necessarily zero — $V=0$ does not imply $\\vec{E} = 0$',
        'Always zero',
        'Undefined',
        'Always pointing outward'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{E} = -\\nabla V$. A single value $V = 0$ says nothing about the gradient. Example: the perpendicular bisector of a dipole has $V = 0$ but $\\vec{E} \\neq 0$.'
    },
    {
      id: 'pe2-path',
      type: 'text' as const,
      content: `## Path Independence and $\\Delta V$

Since the electric force is conservative:

$$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E}\\cdot d\\vec{l}$$

This integral is **path-independent**. Around any closed loop:

$$\\oint \\vec{E}\\cdot d\\vec{l} = 0$$

### Deriving $\\vec{E}$ from $V$

$$E_x = -\\frac{\\partial V}{\\partial x}, \\quad E_y = -\\frac{\\partial V}{\\partial y}, \\quad E_z = -\\frac{\\partial V}{\\partial z}$$

### Worked Example

Given $V(x,y) = 3x^2y - 2y^2$ (in volts, with $x,y$ in meters):

$$E_x = -\\frac{\\partial V}{\\partial x} = -6xy$$

$$E_y = -\\frac{\\partial V}{\\partial y} = -3x^2 + 4y$$

At $(1, 2)$: $E_x = -12\\;\\text{V/m}$, $E_y = -3 + 8 = 5\\;\\text{V/m}$.

$$|\\vec{E}| = \\sqrt{144 + 25} = 13\\;\\text{V/m}$$`
    },
    {
      id: 'pe2-mcq4',
      type: 'mcq' as const,
      question: 'If $V = Ar^2$ (with $A$ constant) in spherical coordinates, then $E_r$ is:',
      options: ['$-2Ar$', '$2Ar$', '$Ar^2$', '$-Ar$'],
      correctAnswer: 0,
      explanation: '$E_r = -\\partial V/\\partial r = -2Ar$. The field increases linearly with $r$ (as inside a uniform charge distribution).'
    }
  ]
};
