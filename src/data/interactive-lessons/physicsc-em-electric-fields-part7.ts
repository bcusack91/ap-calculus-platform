export const physCEMElecFieldPart7Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Master Formula Sheet

| Configuration | Electric Field | Where |
|:---:|:---:|:---:|
| Point charge | $E = kQ/r^2$ | Everywhere |
| Infinite line | $E = 2k\\lambda/r = \\lambda/(2\\pi\\epsilon_0 r)$ | Perpendicular distance $r$ |
| Infinite plane | $E = \\sigma/(2\\epsilon_0)$ | Everywhere (uniform) |
| Ring (axis) | $E = kQz/(R^2+z^2)^{3/2}$ | On axis at distance $z$ |
| Disk (axis) | $E = \\frac{\\sigma}{2\\epsilon_0}\\left(1 - \\frac{z}{\\sqrt{R^2+z^2}}\\right)$ | On axis at distance $z$ |
| Dipole (axial) | $E = 2kp/r^3$ | On axis, $r \\gg d$ |
| Dipole (equat.) | $E = kp/r^3$ | Perpendicular bisector, $r \\gg d$ |
| Between plates | $E = \\sigma/\\epsilon_0 = V/d$ | Uniform between plates |`
    },
    {
      id: 'ef7-mcq1',
      type: 'mcq' as const,
      question: 'A thin ring of charge $Q$ and radius $R$. The maximum on-axis field occurs at $z =$',
      options: ['$R/\\sqrt{2}$', '$R$', '$R/2$', '$2R$'],
      correctAnswer: 0,
      explanation: 'Setting $dE_z/dz = 0$ yields $z = R/\\sqrt{2}$. This was derived by differentiating $E_z = kQz(R^2+z^2)^{-3/2}$.'
    },
    {
      id: 'ef7-worked1',
      type: 'text' as const,
      content: `## Application 1: Millikan Oil Drop

A charged oil drop of mass $m = 1.6 \\times 10^{-15}\\;\\text{kg}$ is suspended between parallel plates separated by $d = 1.0\\;\\text{cm}$ with voltage $V = 500\\;\\text{V}$. Find the charge.

### Solution

The drop is in equilibrium: $qE = mg$.

$$E = \\frac{V}{d} = \\frac{500}{0.01} = 5.0 \\times 10^4\\;\\text{N/C}$$

$$q = \\frac{mg}{E} = \\frac{(1.6\\times10^{-15})(9.8)}{5.0\\times10^4} = 3.14 \\times 10^{-19}\\;\\text{C}$$

$$q \\approx 2e = 2(1.6\\times10^{-19}) = 3.2\\times10^{-19}\\;\\text{C}$$

The drop carries approximately 2 excess electrons — charge is quantized!`
    },
    {
      id: 'ef7-mcq2',
      type: 'mcq' as const,
      question: 'In the Millikan experiment, if the plate voltage is increased, a suspended drop will:',
      options: ['Accelerate upward', 'Remain suspended', 'Accelerate downward', 'Move horizontally'],
      correctAnswer: 0,
      explanation: 'At equilibrium, $qE = mg$. Increasing $V$ increases $E$, so $qE > mg$ and the drop accelerates upward.'
    },
    {
      id: 'ef7-worked2',
      type: 'text' as const,
      content: `## Application 2: Field from an Infinite Line of Charge (Integration)

An infinite straight wire with uniform $\\lambda$. Find $\\vec{E}$ at perpendicular distance $r$ by direct integration.

Place the wire along the $z$-axis. At point $P = (r, 0, 0)$, an element $dz$ at height $z$ gives:

$$dE = \\frac{k\\lambda\\,dz}{z^2 + r^2}$$

The perpendicular component:

$$dE_r = \\frac{k\\lambda\\,dz}{(z^2+r^2)} \\cdot \\frac{r}{\\sqrt{z^2+r^2}} = \\frac{k\\lambda r\\,dz}{(z^2+r^2)^{3/2}}$$

By symmetry, the $z$-components cancel. Integrating:

$$E_r = k\\lambda r\\int_{-\\infty}^{\\infty}\\frac{dz}{(z^2+r^2)^{3/2}}$$

Using $\\int_{-\\infty}^{\\infty}\\frac{dz}{(z^2+r^2)^{3/2}} = \\frac{2}{r^2}$:

$$\\boxed{E_r = \\frac{2k\\lambda}{r} = \\frac{\\lambda}{2\\pi\\epsilon_0 r}}$$

This is the same result obtained more easily using Gauss's Law.`
    },
    {
      id: 'ef7-mcq3',
      type: 'mcq' as const,
      question: 'The electric field of an infinite line charge at distance $r$ is proportional to:',
      options: ['$1/r$', '$1/r^2$', '$1/r^3$', 'constant'],
      correctAnswer: 0,
      explanation: '$E = \\lambda/(2\\pi\\epsilon_0 r) \\propto 1/r$. This is slower decay than a point charge ($1/r^2$) because the infinite line has charge extending to infinity.'
    },
    {
      id: 'ef7-synthesis',
      type: 'text' as const,
      content: `## Synthesis: How Field Falloff Depends on Geometry

| Source | Finite/Infinite | $E$ dependence |
|:---:|:---:|:---:|
| Point charge | Finite | $1/r^2$ |
| Dipole | Finite | $1/r^3$ |
| Quadrupole | Finite | $1/r^4$ |
| Infinite line | Infinite | $1/r$ |
| Infinite plane | Infinite | Constant |

### Physical Insight

- Each additional dimension of infinite extent slows the falloff by one power of $r$.
- Finite distributions always reduce to monopole ($1/r^2$) at large $r$ if net charge $\\neq 0$.
- If net charge $= 0$, the leading term is dipole ($1/r^3$), and so on.`
    },
    {
      id: 'ef7-mcq4',
      type: 'mcq' as const,
      question: 'Two infinite parallel planes with surface charge densities $+\\sigma$ and $-\\sigma$. The field between them is:',
      options: [
        '$\\sigma/\\epsilon_0$ (parallel plates result)',
        '$\\sigma/(2\\epsilon_0)$',
        '$2\\sigma/\\epsilon_0$',
        '$0$'
      ],
      correctAnswer: 0,
      explanation: 'Each plane contributes $\\sigma/(2\\epsilon_0)$. Between the plates, both fields point in the same direction, so they add: $E = \\sigma/\\epsilon_0$. Outside, they cancel.'
    },
    {
      id: 'ef7-completion',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered **Electric Fields** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Electric field definition | ✅ |
| 2 | Superposition | ✅ |
| 3 | Continuous distributions (integration) | ✅ |
| 4 | Electric field lines | ✅ |
| 5 | Dipole fields | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** The electric field is defined as $\\vec{E} = \\vec{F}/q_0$, computed from Coulomb's law via superposition (sums or integrals), and visualized through field lines. Always check limiting behavior ($r \\to \\infty$, symmetry) to verify your results.`
    }
  ]
};
