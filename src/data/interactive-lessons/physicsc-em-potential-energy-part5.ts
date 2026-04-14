export const physCEMPotEnergyPart5Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe5-intro',
      type: 'text' as const,
      content: `# Calculating PE via Integration

**Part 5 of 7 — Calculus Methods**

When charges are continuous or potentials vary spatially, we compute potential energy through integration. This part focuses on the calculus techniques used in AP Physics C: E&M.

### Three Integration Approaches

1. **$U = \\frac{1}{2}\\int \\rho V\\,dV$** — integrate charge density times potential over volume.
2. **$U = \\frac{\\epsilon_0}{2}\\int E^2\\,dV$** — integrate field energy density over all space.
3. **Shell-by-shell assembly:** Build the distribution incrementally, computing $dU = V\\,dq$ at each step.`
    },
    {
      id: 'pe5-mcq1',
      type: 'mcq' as const,
      question: 'The $1/2$ factor in $U = \\frac{1}{2}\\int \\rho V\\,dV$ accounts for:',
      options: [
        'Double-counting of pairs — each pair appears twice in the unrestricted integral',
        'The average field being half the surface field',
        'Energy splitting between $K$ and $U$',
        'The factor in $\\frac{1}{2}mv^2$'
      ],
      correctAnswer: 0,
      explanation: 'In $\\int \\rho V\\,dV$, each pair of charges $(i,j)$ is counted once when integrating over $i$ (with $V$ from $j$) and again over $j$ (with $V$ from $i$). The $1/2$ corrects this double-counting.'
    },
    {
      id: 'pe5-line',
      type: 'text' as const,
      content: `## Example 1: Self-Energy of a Uniform Line Charge

A thin rod of length $L$ with uniform charge density $\\lambda$ (total charge $Q = \\lambda L$). Find its self-energy.

### Assembly Method

Build the rod from left ($x = 0$) to right. When the rod has been built up to position $x$, the charge so far is $q(x) = \\lambda x$, and the potential at position $x$ due to this partial rod:

$$V(x) = k\\int_0^x \\frac{\\lambda\\,dx'}{x - x'} = k\\lambda\\int_0^x \\frac{dx'}{x-x'}$$

Let $u = x - x'$:

$$V(x) = k\\lambda\\int_0^x \\frac{du}{u}$$

This diverges logarithmically! The self-energy of a truly one-dimensional line charge is **infinite** — a consequence of the idealized zero-thickness model.

### Physical Interpretation

In practice, wires have finite radius $a$. The self-energy per unit length becomes:

$$\\frac{U}{L} \\sim k\\lambda^2 \\ln\\frac{L}{a}$$

The logarithmic divergence is "cut off" by the finite wire radius.`
    },
    {
      id: 'pe5-mcq2',
      type: 'mcq' as const,
      question: 'The self-energy divergence of a line charge arises because:',
      options: [
        'Zero-thickness idealization means infinite charge density at the wire',
        'The integral $\\int dr/r$ diverges',
        'Coulomb\'s law breaks down at small distances',
        'All of the above contribute'
      ],
      correctAnswer: 0,
      explanation: 'A one-dimensional charge distribution has infinite volume charge density (a delta function in the transverse directions). This causes the self-energy integral to diverge logarithmically.'
    },
    {
      id: 'pe5-shell',
      type: 'text' as const,
      content: `## Example 2: Charged Spherical Shell

A thin spherical shell of radius $R$ with total charge $Q$ uniformly distributed.

### Assembly Method

Bring charge from infinity, bit by bit, onto the shell. When charge $q$ has been placed, the potential at the shell surface is:

$$V = \\frac{kq}{R}$$

$$dU = V\\,dq = \\frac{kq}{R}dq$$

$$U = \\int_0^Q \\frac{kq}{R}dq = \\frac{k}{R}\\cdot\\frac{Q^2}{2} = \\frac{kQ^2}{2R}$$

### Field Energy Method (Verification)

$$U = \\frac{\\epsilon_0}{2}\\int_R^\\infty \\left(\\frac{kQ}{r^2}\\right)^2 4\\pi r^2\\,dr = \\frac{\\epsilon_0 k^2 Q^2}{2}\\cdot 4\\pi \\int_R^\\infty \\frac{dr}{r^2}$$

$$= \\frac{\\epsilon_0 k^2 Q^2 \\cdot 4\\pi}{2R} = \\frac{kQ^2}{2R} \\quad \\checkmark$$

Both methods agree: $U = kQ^2/(2R)$.`
    },
    {
      id: 'pe5-mcq3',
      type: 'mcq' as const,
      question: 'A uniformly charged spherical shell of radius $R$ has self-energy $kQ^2/(2R)$. If the radius is halved, the energy:',
      options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$U = kQ^2/(2R)$. Halving $R$: $U \\to kQ^2/(2 \\cdot R/2) = kQ^2/R = 2U$. The energy doubles.'
    },
    {
      id: 'pe5-coaxial',
      type: 'text' as const,
      content: `## Example 3: Energy in a Coaxial Capacitor

Inner conductor radius $a$, outer conductor radius $b$, length $L$, charge $\\pm Q$.

The field between conductors ($a < r < b$):

$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r} = \\frac{Q}{2\\pi\\epsilon_0 L r}$$

### Energy by Field Integration

$$U = \\frac{\\epsilon_0}{2}\\int_a^b E^2 \\cdot 2\\pi r L\\,dr = \\frac{\\epsilon_0}{2}\\cdot\\frac{Q^2}{4\\pi^2\\epsilon_0^2 L^2}\\cdot 2\\pi L \\int_a^b \\frac{dr}{r}$$

$$= \\frac{Q^2}{4\\pi\\epsilon_0 L}\\ln\\frac{b}{a}$$

Since $C = 2\\pi\\epsilon_0 L/\\ln(b/a)$:

$$U = \\frac{Q^2}{2C} \\quad \\checkmark$$

### Capacitance per Unit Length

$$\\frac{C}{L} = \\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$$

For a typical coaxial cable ($a = 0.5\\;\\text{mm}$, $b = 3.0\\;\\text{mm}$): $C/L \\approx 31\\;\\text{pF/m}$.`
    },
    {
      id: 'pe5-mcq4',
      type: 'mcq' as const,
      question: 'In a coaxial capacitor, most of the field energy is concentrated:',
      options: [
        'Near the inner conductor (where $E$ is largest)',
        'Near the outer conductor',
        'At the midpoint between conductors',
        'Distributed uniformly'
      ],
      correctAnswer: 0,
      explanation: '$E \\propto 1/r$, so $u \\propto E^2 \\propto 1/r^2$. The energy density is highest near the inner conductor at $r = a$. Despite the smaller volume, the higher $u$ dominates.'
    }
  ]
};
