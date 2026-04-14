export const physCEMCondPart1Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce1-intro',
      type: 'text' as const,
      content: `# Conductors in Electrostatic Equilibrium

**Part 1 of 7 — Fundamental Properties**

A conductor in **electrostatic equilibrium** is one where all charges have stopped moving. This simple condition leads to powerful consequences:

### Four Key Properties

1. **$\\vec{E} = 0$ everywhere inside** the conductor.
2. Any excess charge resides **entirely on the surface**.
3. The electric field just outside the surface is **perpendicular to the surface**: $\\vec{E} = (\\sigma/\\epsilon_0)\\hat{n}$.
4. The entire conductor is an **equipotential**: $V = \\text{const}$ throughout.

### Why These Hold

Free electrons in a conductor move in response to any internal field. If $\\vec{E} \\neq 0$ inside, charges would move — contradicting equilibrium. So $\\vec{E} = 0$ inside.

Since $\\vec{E} = -\\nabla V$ and $\\vec{E} = 0$ inside, $V$ is constant throughout the conductor.`
    },
    {
      id: 'ce1-mcq1',
      type: 'mcq' as const,
      question: 'In electrostatic equilibrium, the electric field inside a solid conductor is:',
      options: ['Zero', '$\\sigma/\\epsilon_0$', '$\\sigma/(2\\epsilon_0)$', 'Depends on the external field'],
      correctAnswer: 0,
      explanation: 'Free charges in a conductor rearrange until $\\vec{E} = 0$ inside. Any nonzero internal field would cause charge flow, contradicting equilibrium.'
    },
    {
      id: 'ce1-gauss',
      type: 'text' as const,
      content: `## Proof Using Gauss's Law

### No Interior Charge

Draw a Gaussian surface just inside the conductor surface. Since $\\vec{E} = 0$ everywhere on this surface:

$$\\oint \\vec{E}\\cdot d\\vec{A} = 0 = \\frac{q_{\\text{enc}}}{\\epsilon_0}$$

Therefore $q_{\\text{enc}} = 0$. No net charge exists inside the conductor — all excess charge is on the surface.

### Surface Field

Draw a small "pillbox" Gaussian surface straddling the conductor surface. Inside the conductor, $\\vec{E} = 0$. Outside, $\\vec{E} = E_n \\hat{n}$.

$$\\oint \\vec{E}\\cdot d\\vec{A} = E_n \\Delta A = \\frac{\\sigma \\Delta A}{\\epsilon_0}$$

$$\\boxed{E_n = \\frac{\\sigma}{\\epsilon_0}}$$

This holds regardless of conductor shape — the local field depends only on the local $\\sigma$.`
    },
    {
      id: 'ce1-mcq2',
      type: 'mcq' as const,
      question: 'A conductor with surface charge density $\\sigma = 5.0\\;\\mu\\text{C/m}^2$. The field just outside the surface is:',
      options: [
        '$5.65 \\times 10^5\\;\\text{N/C}$',
        '$2.82 \\times 10^5\\;\\text{N/C}$',
        '$1.13 \\times 10^6\\;\\text{N/C}$',
        '$5.0 \\times 10^5\\;\\text{N/C}$'
      ],
      correctAnswer: 0,
      explanation: '$E = \\sigma/\\epsilon_0 = (5.0\\times10^{-6})/(8.85\\times10^{-12}) = 5.65\\times10^5\\;\\text{N/C}$. Note: this is $\\sigma/\\epsilon_0$, not $\\sigma/(2\\epsilon_0)$, because we\'re at a conductor surface.'
    },
    {
      id: 'ce1-cavity',
      type: 'text' as const,
      content: `## Conductors with Cavities

If a conductor has a hollow cavity inside it:

- **Empty cavity:** The field inside the cavity is $\\vec{E} = 0$ and no charge appears on the cavity walls.
- **Charge $q$ in cavity:** Gauss's law applied to a surface surrounding the cavity (but inside the conductor) gives $\\vec{E} = 0$ on this surface, so $q_{\\text{enc}} = 0$ for the Gaussian surface. This means charge $-q$ is **induced on the inner cavity wall**, and charge $+q$ appears on the outer surface.

### Worked Example

A conducting shell has inner radius $a$ and outer radius $b$. A charge $+Q$ sits at the center.

- Inner surface charge: $-Q$ (uniformly distributed by symmetry).
- Outer surface charge: $+Q$ (uniformly distributed).
- Field for $r < a$: $E = kQ/r^2$ (just the point charge).
- Field for $a < r < b$: $E = 0$ (inside conductor).
- Field for $r > b$: $E = kQ/r^2$ (the shell is "transparent").`
    },
    {
      id: 'ce1-mcq3',
      type: 'mcq' as const,
      question: 'A charge $+2Q$ is placed inside a cavity in a neutral conductor. The charge on the outer surface of the conductor is:',
      options: ['$+2Q$', '$-2Q$', '$0$', '$+Q$'],
      correctAnswer: 0,
      explanation: 'The cavity walls acquire $-2Q$ to ensure $\\vec{E} = 0$ inside the conductor. Since the conductor is neutral overall, the outer surface must have $+2Q$ to conserve total charge.'
    },
    {
      id: 'ce1-uniqueness',
      type: 'text' as const,
      content: `## Uniqueness Theorem (Conceptual)

The charge distribution on a conductor in electrostatic equilibrium is **unique** — there is only one arrangement of surface charges that satisfies all boundary conditions.

This is a consequence of the **uniqueness theorem** for Laplace's equation $\\nabla^2 V = 0$:

> If $V$ is specified on all boundaries, the solution for $V$ in the region between boundaries is unique.

### Practical Consequence

Once you determine $\\sigma$ (say, by Gauss's law or symmetry), you know it's the only possible distribution. There's no need to worry about alternative configurations.`
    },
    {
      id: 'ce1-mcq4',
      type: 'mcq' as const,
      question: 'A conductor carries net charge $+Q$. All of this charge resides:',
      options: [
        'On the outer surface only',
        'Distributed uniformly throughout the volume',
        'At the center of the conductor',
        'On both inner and outer surfaces equally'
      ],
      correctAnswer: 0,
      explanation: 'In electrostatic equilibrium, excess charge resides entirely on the outer surface. (If there is no cavity with charge inside, there is no inner surface charge.)'
    }
  ]
};
