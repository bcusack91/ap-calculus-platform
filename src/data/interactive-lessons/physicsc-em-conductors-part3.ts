export const physCEMCondPart3Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce3-intro',
      type: 'text' as const,
      content: `# Surface Charge Distribution

**Part 3 of 7 — Where Does the Charge Go?**

On a conductor in equilibrium, all excess charge resides on the surface. But how is it distributed? The answer depends on the conductor's geometry.

### Spherical Conductor

For an isolated charged sphere, symmetry forces uniform distribution:

$$\\sigma = \\frac{Q}{4\\pi R^2}$$

### Non-Spherical Conductors

Charge concentrates at regions of **higher curvature** (sharper points). Quantitatively, for a conductor at potential $V$:

$$\\sigma = \\epsilon_0 E_n = -\\epsilon_0 \\frac{\\partial V}{\\partial n}$$

where $\\partial/\\partial n$ is the outward normal derivative at the surface.`
    },
    {
      id: 'ce3-mcq1',
      type: 'mcq' as const,
      question: 'On an isolated charged conductor, charge density is highest at:',
      options: [
        'Points of greatest curvature (sharp tips)',
        'Flat regions',
        'The geometric center',
        'Points closest to other conductors'
      ],
      correctAnswer: 0,
      explanation: 'Charge crowds at sharp points where the radius of curvature is smallest. This leads to stronger fields there.'
    },
    {
      id: 'ce3-two-spheres',
      type: 'text' as const,
      content: `## Two Connected Spheres: Quantitative

Two conducting spheres of radii $R_1$ and $R_2$ ($R_1 < R_2$) connected by a thin wire (total charge $Q$).

Equal potentials: $kQ_1/R_1 = kQ_2/R_2$, with $Q_1 + Q_2 = Q$.

$$Q_1 = \\frac{R_1}{R_1 + R_2}Q, \\quad Q_2 = \\frac{R_2}{R_1 + R_2}Q$$

Surface charge densities:

$$\\sigma_1 = \\frac{Q_1}{4\\pi R_1^2} = \\frac{Q}{4\\pi R_1(R_1+R_2)}$$

$$\\sigma_2 = \\frac{Q_2}{4\\pi R_2^2} = \\frac{Q}{4\\pi R_2(R_1+R_2)}$$

**Ratio:**

$$\\frac{\\sigma_1}{\\sigma_2} = \\frac{R_2}{R_1} > 1$$

The smaller sphere has higher $\\sigma$ and stronger surface field $E = \\sigma/\\epsilon_0$.

### Lightning Rod Principle

This explains why lightning rods work: a sharp point has enormous curvature, leading to very high $\\sigma$ and $E$, which ionizes the air and provides a discharge path.`
    },
    {
      id: 'ce3-mcq2',
      type: 'mcq' as const,
      question: 'Two connected spheres: $R_1 = 1\\;\\text{cm}$, $R_2 = 10\\;\\text{cm}$. The ratio $\\sigma_1/\\sigma_2$ is:',
      options: ['$10$', '$1$', '$100$', '$1/10$'],
      correctAnswer: 0,
      explanation: '$\\sigma_1/\\sigma_2 = R_2/R_1 = 10/1 = 10$. The small sphere has 10 times the surface charge density.'
    },
    {
      id: 'ce3-parallel-plates',
      type: 'text' as const,
      content: `## Parallel Plate Capacitor: Charge Distribution

Two large parallel conducting plates with charges $+Q$ and $-Q$:

### Inner Surfaces (Facing Each Other)

Each inner surface has charge density $\\pm\\sigma$ where $\\sigma = Q/A$.

The field between plates: $E = \\sigma/\\epsilon_0$.

### Outer Surfaces

The outer surfaces have no charge! Here's the proof:

Consider the field inside the left plate (a conductor). It must be zero. Using superposition of four surface charge distributions ($\\sigma_1, \\sigma_2, \\sigma_3, \\sigma_4$ from left to right):

$$E = \\frac{1}{2\\epsilon_0}(-\\sigma_1 + \\sigma_2 + \\sigma_3 + \\sigma_4) = 0$$

Combined with the constraint that total charge on plate 1 is $+Q$: $\\sigma_1 + \\sigma_2 = Q/A$, and similarly for plate 2, one can show $\\sigma_1 = \\sigma_4 = 0$.

**All charge is on the inner faces.**`
    },
    {
      id: 'ce3-mcq3',
      type: 'mcq' as const,
      question: 'In an ideal parallel-plate capacitor, the charge on the outer surfaces of the plates is:',
      options: ['Zero', '$\\sigma/2$ on each', '$\\sigma$ on each', 'Equal and opposite'],
      correctAnswer: 0,
      explanation: 'For a capacitor with equal and opposite total charges, all charge resides on the inner (facing) surfaces. The outer surfaces are uncharged.'
    },
    {
      id: 'ce3-concentric',
      type: 'text' as const,
      content: `## Concentric Conducting Shells

Inner shell (radius $a$, charge $+Q$) surrounded by outer shell (inner radius $b$, outer radius $c$, charge $-Q$).

Using Gauss's law in each region:

| Region | $E$ | Reasoning |
|:---:|:---:|:---:|
| $r < a$ | $0$ | Inside conductor |
| $a < r < b$ | $kQ/r^2$ | Gaussian sphere encloses $+Q$ |
| $b < r < c$ | $0$ | Inside conductor |
| $r > c$ | $0$ | Total enclosed charge = $0$ |

### Surface Charges

- Inner shell outer surface: $+Q$
- Outer shell inner surface: $-Q$ (induced)
- Outer shell outer surface: $0$ (since total charge on outer shell is $-Q$, and $-Q$ is on the inner surface)

### Potential Difference

$$V_a - V_b = -\\int_b^a \\vec{E}\\cdot d\\vec{r} = \\int_a^b \\frac{kQ}{r^2}dr = kQ\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$$`
    },
    {
      id: 'ce3-mcq4',
      type: 'mcq' as const,
      question: 'A charge $+Q$ on a solid sphere of radius $a$, surrounded by a thick shell (inner radius $b$, outer radius $c$) with charge $+3Q$. The charge on the outer surface of the shell is:',
      options: ['$+4Q$', '$+3Q$', '$+2Q$', '$-Q$'],
      correctAnswer: 0,
      explanation: 'Inner surface of shell: $-Q$ (induced by $+Q$ inside). Total shell charge: $+3Q$. Outer surface: $+3Q - (-Q) = +4Q$.'
    }
  ]
};
