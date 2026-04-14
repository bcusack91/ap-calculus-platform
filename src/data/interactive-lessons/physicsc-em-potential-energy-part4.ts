export const physCEMPotEnergyPart4Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe4-intro',
      type: 'text' as const,
      content: `# Energy Stored in the Electric Field

**Part 4 of 7 — Field Energy Density**

Energy can be thought of as stored in the electric field itself, not just in the charge configuration. The **energy density** (energy per unit volume) of an electric field is:

$$u = \\frac{\\epsilon_0 E^2}{2} = \\frac{1}{2}\\epsilon_0|\\vec{E}|^2$$

The total energy stored in the field over all space:

$$U = \\int u\\,dV = \\frac{\\epsilon_0}{2}\\int E^2\\,dV$$

This is mathematically equivalent to $U = \\frac{1}{2}\\int \\rho V\\,dV$, but provides a different physical perspective: energy is **distributed throughout space** wherever $\\vec{E} \\neq 0$.`
    },
    {
      id: 'pe4-mcq1',
      type: 'mcq' as const,
      question: 'The energy density of an electric field $E = 3.0 \\times 10^5\\;\\text{V/m}$ is approximately:',
      options: [
        '$0.40\\;\\text{J/m}^3$',
        '$0.80\\;\\text{J/m}^3$',
        '$4.0\\;\\text{J/m}^3$',
        '$0.04\\;\\text{J/m}^3$'
      ],
      correctAnswer: 0,
      explanation: '$u = \\epsilon_0 E^2/2 = (8.85\\times10^{-12})(9\\times10^{10})/2 = 0.40\\;\\text{J/m}^3$.'
    },
    {
      id: 'pe4-capacitor',
      type: 'text' as const,
      content: `## Energy in a Parallel-Plate Capacitor

Between the plates: $E = \\sigma/\\epsilon_0 = V/d$ (uniform).

The volume between the plates is $Ad$.

$$U = u \\times \\text{volume} = \\frac{\\epsilon_0 E^2}{2}(Ad) = \\frac{\\epsilon_0}{2}\\left(\\frac{V}{d}\\right)^2 Ad = \\frac{\\epsilon_0 A V^2}{2d}$$

Since $C = \\epsilon_0 A/d$:

$$\\boxed{U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV}$$

These are three equivalent expressions for capacitor energy.

### Derivation from Charging

As we charge the capacitor, the voltage increases linearly: $V = Q/C$.

$$U = \\int_0^Q V\\,dq = \\int_0^Q \\frac{q}{C}dq = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2$$

The integral shows that each subsequent increment of charge requires more work because $V$ increases.`
    },
    {
      id: 'pe4-mcq2',
      type: 'mcq' as const,
      question: 'A capacitor $C = 10\\;\\mu\\text{F}$ is charged to $V = 100\\;\\text{V}$. The stored energy is:',
      options: [
        '$0.050\\;\\text{J}$',
        '$0.100\\;\\text{J}$',
        '$1.0\\;\\text{J}$',
        '$0.50\\;\\text{J}$'
      ],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10\\times10^{-6})(100)^2 = 0.050\\;\\text{J} = 50\\;\\text{mJ}$.'
    },
    {
      id: 'pe4-sphere-field',
      type: 'text' as const,
      content: `## Field Energy of a Charged Sphere

For a conducting sphere of radius $R$ with charge $Q$:

$$E(r) = \\begin{cases} 0 & r < R \\\\ kQ/r^2 & r > R \\end{cases}$$

The energy stored in the field:

$$U = \\frac{\\epsilon_0}{2}\\int_R^\\infty E^2 \\cdot 4\\pi r^2\\,dr = \\frac{\\epsilon_0}{2}\\int_R^\\infty \\frac{k^2Q^2}{r^4}\\cdot 4\\pi r^2\\,dr$$

$$= 2\\pi\\epsilon_0 k^2 Q^2 \\int_R^\\infty \\frac{dr}{r^2} = 2\\pi\\epsilon_0 k^2 Q^2 \\cdot \\frac{1}{R}$$

Using $k = 1/(4\\pi\\epsilon_0)$:

$$U = 2\\pi\\epsilon_0 \\cdot \\frac{Q^2}{16\\pi^2\\epsilon_0^2}\\cdot\\frac{1}{R} = \\frac{Q^2}{8\\pi\\epsilon_0 R} = \\frac{kQ^2}{2R}$$

$$\\boxed{U = \\frac{kQ^2}{2R} = \\frac{Q^2}{8\\pi\\epsilon_0 R}}$$

This equals $Q^2/(2C)$ with $C = 4\\pi\\epsilon_0 R$ — consistent!`
    },
    {
      id: 'pe4-mcq3',
      type: 'mcq' as const,
      question: 'Comparing the field energy of a conducting sphere ($kQ^2/(2R)$) to the self-energy of a uniform sphere ($3kQ^2/(5R)$), the uniform sphere has:',
      options: [
        'More energy ($3/5 > 1/2$), because field exists inside too',
        'Less energy',
        'Equal energy',
        'Cannot compare — different physical situations'
      ],
      correctAnswer: 0,
      explanation: '$3/5 = 0.60 > 0.50 = 1/2$. The uniform sphere has more energy because it has a nonzero field inside ($r < R$), contributing additional energy density.'
    },
    {
      id: 'pe4-dielectric',
      type: 'text' as const,
      content: `## Energy Density with Dielectrics

In a dielectric medium with dielectric constant $\\kappa$:

$$u = \\frac{1}{2}\\epsilon_0\\kappa E^2 = \\frac{1}{2}\\epsilon E^2 = \\frac{1}{2}\\vec{D}\\cdot\\vec{E}$$

where $\\epsilon = \\kappa\\epsilon_0$ and $\\vec{D} = \\epsilon\\vec{E}$.

### Capacitor with Dielectric

Inserting a dielectric ($\\kappa > 1$) into a capacitor:

**At constant voltage:** $C \\to \\kappa C$, $U = \\frac{1}{2}CV^2 \\to \\frac{1}{2}\\kappa C V^2$ — energy **increases** (battery does work pushing more charge).

**At constant charge:** $C \\to \\kappa C$, $U = Q^2/(2C) \\to Q^2/(2\\kappa C)$ — energy **decreases** (dielectric is pulled in; field does work).

### Force on Dielectric

At constant charge, $U$ decreases as the dielectric enters. The force pulling it in:

$$F = -\\frac{dU}{dx} = \\frac{Q^2}{2C^2}\\frac{dC}{dx}$$`
    },
    {
      id: 'pe4-mcq4',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor is charged and disconnected from the battery. A dielectric slab ($\\kappa = 3$) is inserted. The stored energy:',
      options: [
        'Decreases to $U/3$',
        'Increases to $3U$',
        'Stays the same',
        'Decreases to $U/9$'
      ],
      correctAnswer: 0,
      explanation: 'At constant $Q$: $U = Q^2/(2C)$. With dielectric: $C \\to 3C$, so $U \\to Q^2/(6C) = U/3$. The energy decreases — the dielectric is pulled in by the field.'
    }
  ]
};
