export const physCEMElecFieldPart1Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `# Electric Field Definition

**Part 1 of 7 — What Is an Electric Field?**

An **electric field** $\\vec{E}$ is a vector field that describes the force per unit positive test charge at every point in space:

$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$

where $q_0$ is a small positive test charge. The SI unit is $\\text{N/C}$ or equivalently $\\text{V/m}$.

### Key Idea

The field exists whether or not a test charge is present. A source charge $Q$ creates a field throughout space; another charge placed in that field experiences a force $\\vec{F} = q\\vec{E}$.`
    },
    {
      id: 'ef1-mcq1',
      type: 'mcq' as const,
      question: 'What are the SI units of the electric field $\\vec{E}$?',
      options: ['$\\text{C/N}$', '$\\text{N/C}$', '$\\text{J/C}$', '$\\text{N}\\cdot\\text{m}^2/\\text{C}^2$'],
      correctAnswer: 1,
      explanation: '$\\vec{E} = \\vec{F}/q_0$ has units of force per charge: $\\text{N/C}$. This is also equivalent to $\\text{V/m}$.'
    },
    {
      id: 'ef1-coulomb',
      type: 'text' as const,
      content: `## Coulomb's Law & the Point-Charge Field

For a single point charge $Q$ at the origin, the electric field at position $\\vec{r}$ is:

$$\\vec{E} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}\\hat{r} = k_e\\frac{Q}{r^2}\\hat{r}$$

where $k_e = \\frac{1}{4\\pi\\epsilon_0} \\approx 8.99 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

### Sign Convention
- $Q > 0$: $\\vec{E}$ points **radially outward** ($\\hat{r}$ direction).
- $Q < 0$: $\\vec{E}$ points **radially inward** ($-\\hat{r}$ direction).

### Worked Example

Find $|\\vec{E}|$ at $r = 0.30\\;\\text{m}$ from a charge $Q = +2.0\\;\\mu\\text{C}$.

$$|\\vec{E}| = k_e\\frac{|Q|}{r^2} = (8.99\\times10^9)\\frac{2.0\\times10^{-6}}{(0.30)^2} = \\frac{1.798\\times10^4}{0.09} = 2.0\\times10^5\\;\\text{N/C}$$`
    },
    {
      id: 'ef1-mcq2',
      type: 'mcq' as const,
      question: 'A charge $Q = -3.0\\;\\mu\\text{C}$ sits at the origin. At $r = 0.10\\;\\text{m}$, the electric field points:',
      options: [
        'Radially outward with magnitude $2.7 \\times 10^6\\;\\text{N/C}$',
        'Radially inward with magnitude $2.7 \\times 10^6\\;\\text{N/C}$',
        'Radially inward with magnitude $2.7 \\times 10^5\\;\\text{N/C}$',
        'Radially outward with magnitude $2.7 \\times 10^5\\;\\text{N/C}$'
      ],
      correctAnswer: 1,
      explanation: '$|E| = k_e|Q|/r^2 = (8.99\\times10^9)(3\\times10^{-6})/(0.01) = 2.7\\times10^6\\;\\text{N/C}$. Since $Q < 0$, the field points radially inward (toward the charge).'
    },
    {
      id: 'ef1-force',
      type: 'text' as const,
      content: `## Force on a Charge in an External Field

Once you know $\\vec{E}$, the force on any charge $q$ placed in the field is:

$$\\vec{F} = q\\vec{E}$$

- If $q > 0$: force is **parallel** to $\\vec{E}$.
- If $q < 0$: force is **antiparallel** to $\\vec{E}$.

### Newton's Second Law

The acceleration of a particle of mass $m$ and charge $q$ in a uniform field:

$$\\vec{a} = \\frac{q\\vec{E}}{m}$$

This is the basis for analyzing charged-particle motion in uniform fields (parallel plates, deflection problems).`
    },
    {
      id: 'ef1-mcq3',
      type: 'mcq' as const,
      question: 'An electron ($q = -1.6\\times10^{-19}\\;\\text{C}$, $m = 9.11\\times10^{-31}\\;\\text{kg}$) is placed in a uniform field $\\vec{E} = 1000\\;\\text{N/C}$ pointing to the right. The electron accelerates:',
      options: [
        'To the right at $1.76\\times10^{14}\\;\\text{m/s}^2$',
        'To the left at $1.76\\times10^{14}\\;\\text{m/s}^2$',
        'To the left at $1.76\\times10^{11}\\;\\text{m/s}^2$',
        'To the right at $1.76\\times10^{11}\\;\\text{m/s}^2$'
      ],
      correctAnswer: 1,
      explanation: '$|a| = |q|E/m = (1.6\\times10^{-19})(1000)/(9.11\\times10^{-31}) = 1.76\\times10^{14}\\;\\text{m/s}^2$. Since $q < 0$, the force (and acceleration) is opposite to $\\vec{E}$, i.e., to the left.'
    },
    {
      id: 'ef1-vector',
      type: 'text' as const,
      content: `## The Electric Field as a Vector Field

$\\vec{E}$ has both magnitude and direction at every point. In component form for a charge at position $\\vec{r}_s$:

$$\\vec{E}(\\vec{r}) = \\frac{kQ}{|\\vec{r}-\\vec{r}_s|^3}(\\vec{r}-\\vec{r}_s)$$

This form is especially useful when computing fields from charges not at the origin, since it automatically encodes direction.

### Derivative Connection

The electric field is related to the electric potential $V$ by:

$$\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$$

We will explore this relationship in depth in later topics.`
    },
    {
      id: 'ef1-mcq4',
      type: 'mcq' as const,
      question: 'If $V(x,y) = 3x^2 - 2y$, then $E_x$ is:',
      options: ['$-6x$', '$6x$', '$3x^2$', '$-3x^2$'],
      correctAnswer: 0,
      explanation: '$E_x = -\\partial V/\\partial x = -6x$. The electric field component is the negative partial derivative of the potential.'
    }
  ]
};
