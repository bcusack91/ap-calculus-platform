export const physCEMMagForcePart4Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf4-intro',
      type: 'text' as const,
      content: `# Force on Current-Carrying Wires

**Part 4 of 7 — $\\vec{F} = I\\vec{L} \\times \\vec{B}$**

### From Charges to Currents

A current is moving charges. For $N$ charges each with charge $q$ and drift velocity $\\vec{v}_d$ in a wire of length $L$ and cross-section $A$:

$$\\vec{F} = Nq\\vec{v}_d \\times \\vec{B} = (nAL)(q\\vec{v}_d \\times \\vec{B})$$

Since $I = nqv_d A$:

$$\\boxed{\\vec{F} = I\\vec{L} \\times \\vec{B}}$$

where $\\vec{L}$ points in the direction of conventional current.

### Magnitude

$$F = BIL\\sin\\theta$$

where $\\theta$ is the angle between the wire and $\\vec{B}$.`
    },
    {
      id: 'magf4-mcq1',
      type: 'mcq' as const,
      question: 'A 2 m wire carrying 5 A is perpendicular to a 0.3 T field. The force on the wire is:',
      options: ['3 N', '1.5 N', '6 N', '0.3 N'],
      correctAnswer: 0,
      explanation: '$F = BIL\\sin 90° = (0.3)(5)(2)(1) = 3$ N.'
    },
    {
      id: 'magf4-differential',
      type: 'text' as const,
      content: `### The Differential Form

For a curved wire or non-uniform field, use the differential element:

$$d\\vec{F} = I\\,d\\vec{\\ell} \\times \\vec{B}$$

The total force is:

$$\\vec{F} = I \\int d\\vec{\\ell} \\times \\vec{B}$$

### Important Theorem

For a **uniform** field, the force on any curved wire depends only on the endpoints:

$$\\vec{F} = I\\left(\\int d\\vec{\\ell}\\right) \\times \\vec{B} = I\\vec{L}_{\\text{net}} \\times \\vec{B}$$

where $\\vec{L}_{\\text{net}}$ is the displacement vector from start to end.

> **Consequence:** A closed loop in a uniform field feels **zero net force** (but generally nonzero torque).

### Example: Semicircular Wire

A semicircular wire of radius $R$ in the $xy$-plane carries current $I$ in a uniform field $\\vec{B} = B\\hat{y}$.

$$\\vec{L}_{\\text{net}} = 2R\\hat{x} \\quad \\Rightarrow \\quad \\vec{F} = I(2R\\hat{x}) \\times (B\\hat{y}) = 2IRB\\hat{z}$$`
    },
    {
      id: 'magf4-mcq2',
      type: 'mcq' as const,
      question: 'A closed square loop carrying current sits in a uniform magnetic field. The net force on the loop is:',
      options: ['Zero', '$4BIL$', '$2BIL$', 'Depends on orientation'],
      correctAnswer: 0,
      explanation: 'For any closed loop in a uniform field, $\\vec{L}_{\\text{net}} = \\vec{0}$ (returns to starting point), so $\\vec{F} = \\vec{0}$.'
    },
    {
      id: 'magf4-parallel',
      type: 'text' as const,
      content: `### Force Between Parallel Wires

Two long parallel wires separated by distance $d$, carrying currents $I_1$ and $I_2$:

Wire 1 creates field $B_1 = \\mu_0 I_1/(2\\pi d)$ at wire 2.

Force per unit length on wire 2:

$$\\frac{F}{L} = I_2 B_1 = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

| Currents | Force |
|:---:|:---:|
| Same direction | Attractive |
| Opposite direction | Repulsive |

> This defines the **ampere**: two parallel wires 1 m apart, each carrying 1 A, attract with $F/L = 2 \\times 10^{-7}$ N/m.`
    },
    {
      id: 'magf4-mcq3',
      type: 'mcq' as const,
      question: 'Two parallel wires 0.1 m apart carry currents of 10 A and 20 A in opposite directions. The force per meter between them is:',
      options: ['$4 \\times 10^{-4}$ N/m, repulsive', '$4 \\times 10^{-4}$ N/m, attractive', '$2 \\times 10^{-4}$ N/m, repulsive', '$8 \\times 10^{-4}$ N/m, attractive'],
      correctAnswer: 0,
      explanation: '$F/L = \\mu_0 I_1 I_2/(2\\pi d) = (4\\pi \\times 10^{-7})(10)(20)/(2\\pi \\times 0.1) = 4 \\times 10^{-4}$ N/m. Opposite currents repel.'
    },
    {
      id: 'magf4-mcq4',
      type: 'mcq' as const,
      question: 'A straight wire of length $L$ carrying current $I$ lies along the $x$-axis from $x = 0$ to $x = L$ in a field $\\vec{B} = B_0(x/L)\\hat{z}$. The net force on the wire is:',
      options: ['$-\\frac{1}{2}IB_0L\\hat{y}$', '$-IB_0L\\hat{y}$', '$\\frac{1}{2}IB_0L\\hat{y}$', '$0$'],
      correctAnswer: 0,
      explanation: '$d\\vec{F} = I(dx\\hat{x}) \\times B_0(x/L)\\hat{z} = I B_0(x/L)(\\hat{x} \\times \\hat{z})dx = -IB_0(x/L)\\hat{y}\\,dx$. $F_y = -\\frac{IB_0}{L}\\int_0^L x\\,dx = -\\frac{IB_0}{L} \\cdot \\frac{L^2}{2} = -\\frac{1}{2}IB_0L$.'
    },
    {
      id: 'magf4-summary',
      type: 'text' as const,
      content: `### Summary — Part 4

| Formula | Application |
|:---:|:---:|
| $\\vec{F} = I\\vec{L} \\times \\vec{B}$ | Straight wire, uniform $\\vec{B}$ |
| $d\\vec{F} = Id\\vec{\\ell} \\times \\vec{B}$ | Curved wire or non-uniform $\\vec{B}$ |
| $F/L = \\mu_0 I_1 I_2/(2\\pi d)$ | Parallel wires |
| Closed loop, uniform $\\vec{B}$ | $\\vec{F}_{\\text{net}} = 0$ |

> **Next up:** Torque on current loops and magnetic dipoles — Part 5.`
    }
  ]
};
