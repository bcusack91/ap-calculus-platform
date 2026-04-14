export const physCEMEnergyDenPart3Data = {
  topicSlug: "energy-density-physics-c-em",
  sections: [
    {
      id: 'eden3-intro',
      type: 'text' as const,
      content: `# Energy Density — Part 3: Energy in E Field of Charge Distributions

We can compute the total electrostatic energy of any charge distribution by integrating $u = \\frac{1}{2}\\varepsilon_0 E^2$ over all space.

### General approach

$$U = \\frac{\\varepsilon_0}{2}\\int_{\\text{all space}} E^2\\,dV$$

For distributions with symmetry, choose the appropriate volume element:
- **Spherical:** $dV = 4\\pi r^2\\,dr$
- **Cylindrical:** $dV = 2\\pi r L\\,dr$
- **Planar:** $dV = A\\,dx$`
    },
    {
      id: 'eden3-mcq1',
      type: 'mcq' as const,
      question: 'For a point charge $Q$, $E = Q/(4\\pi\\varepsilon_0 r^2)$. The energy density at distance $r$ is:',
      options: [
        '$\\dfrac{Q^2}{32\\pi^2\\varepsilon_0 r^4}$',
        '$\\dfrac{Q^2}{8\\pi\\varepsilon_0 r^4}$',
        '$\\dfrac{Q^2}{16\\pi^2\\varepsilon_0 r^2}$',
        '$\\dfrac{Q}{8\\pi\\varepsilon_0 r^2}$'
      ],
      correctAnswer: 0,
      explanation: '$u = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{1}{2}\\varepsilon_0 \\cdot \\frac{Q^2}{16\\pi^2\\varepsilon_0^2 r^4} = \\frac{Q^2}{32\\pi^2\\varepsilon_0 r^4}$.'
    },
    {
      id: 'eden3-sphere',
      type: 'text' as const,
      content: `## Example 1: Charged conducting sphere (radius $R$, charge $Q$)

The field is zero inside ($r < R$) and Coulombic outside ($r > R$):

$$E = \\begin{cases} 0 & r < R \\\\ \\dfrac{Q}{4\\pi\\varepsilon_0 r^2} & r > R \\end{cases}$$

$$U = \\frac{\\varepsilon_0}{2}\\int_R^\\infty \\left(\\frac{Q}{4\\pi\\varepsilon_0 r^2}\\right)^2 4\\pi r^2\\,dr$$

$$= \\frac{Q^2}{8\\pi\\varepsilon_0}\\int_R^\\infty \\frac{dr}{r^2} = \\frac{Q^2}{8\\pi\\varepsilon_0}\\left[-\\frac{1}{r}\\right]_R^\\infty = \\frac{Q^2}{8\\pi\\varepsilon_0 R}$$

This equals $\\frac{1}{2}CV$ with $C = 4\\pi\\varepsilon_0 R$ (capacitance of an isolated sphere).`
    },
    {
      id: 'eden3-mcq2',
      type: 'mcq' as const,
      question: 'A conducting sphere of radius $R$ carries charge $Q$. If the radius doubles (charge stays the same), how does the stored energy change?',
      options: ['Halves', 'Doubles', 'Quarters', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$U = Q^2/(8\\pi\\varepsilon_0 R)$. Doubling $R$ halves $U$. The field starts farther out, so less total field energy.'
    },
    {
      id: 'eden3-solid',
      type: 'text' as const,
      content: `## Example 2: Uniformly charged insulating sphere (radius $R$, total charge $Q$)

Inside ($r < R$): $E = \\dfrac{Qr}{4\\pi\\varepsilon_0 R^3}$

Outside ($r > R$): $E = \\dfrac{Q}{4\\pi\\varepsilon_0 r^2}$

### Interior energy

$$U_{\\text{in}} = \\frac{\\varepsilon_0}{2}\\int_0^R \\left(\\frac{Qr}{4\\pi\\varepsilon_0 R^3}\\right)^2 4\\pi r^2\\,dr = \\frac{Q^2}{8\\pi\\varepsilon_0 R^6}\\int_0^R r^4\\,dr$$

$$= \\frac{Q^2}{8\\pi\\varepsilon_0 R^6}\\cdot\\frac{R^5}{5} = \\frac{Q^2}{40\\pi\\varepsilon_0 R}$$

### Exterior energy

$$U_{\\text{out}} = \\frac{Q^2}{8\\pi\\varepsilon_0 R}$$

### Total

$$U = U_{\\text{in}} + U_{\\text{out}} = \\frac{Q^2}{8\\pi\\varepsilon_0 R}\\left(\\frac{1}{5} + 1\\right) = \\frac{3Q^2}{20\\pi\\varepsilon_0 R}$$

Equivalently: $U = \\dfrac{3}{5}\\cdot\\dfrac{Q^2}{4\\pi\\varepsilon_0 R} = \\dfrac{3}{5}\\cdot\\dfrac{kQ^2}{R}$.`
    },
    {
      id: 'eden3-mcq3',
      type: 'mcq' as const,
      question: 'For a uniformly charged sphere, what fraction of the total energy is stored inside the sphere?',
      options: ['$1/6$', '$1/5$', '$5/6$', '$1/2$'],
      correctAnswer: 0,
      explanation: '$U_{\\text{in}}/U_{\\text{total}} = [Q^2/(40\\pi\\varepsilon_0 R)] / [3Q^2/(20\\pi\\varepsilon_0 R)] = (1/40)/(3/20) = 20/(40 \\times 3) = 1/6$.'
    },
    {
      id: 'eden3-cyl',
      type: 'text' as const,
      content: `## Example 3: Infinite line charge (linear charge density $\\lambda$)

$$E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$$

$$U = \\frac{\\varepsilon_0}{2}\\int_a^b \\left(\\frac{\\lambda}{2\\pi\\varepsilon_0 r}\\right)^2 2\\pi r L\\,dr = \\frac{\\lambda^2 L}{4\\pi\\varepsilon_0}\\int_a^b \\frac{dr}{r}$$

$$= \\frac{\\lambda^2 L}{4\\pi\\varepsilon_0}\\ln\\frac{b}{a}$$

Note: This integral diverges as $a \\to 0$ or $b \\to \\infty$. An infinite line charge has infinite total energy—a sign that it's an idealization. We must always use finite bounds for physical calculations (e.g., a coaxial cable from $a$ to $b$).`
    },
    {
      id: 'eden3-mcq4',
      type: 'mcq' as const,
      question: 'The energy per unit length stored in the field of a coaxial cable (inner radius $a$, outer radius $b$, charge per length $\\lambda$) is:',
      options: [
        '$\\dfrac{\\lambda^2}{4\\pi\\varepsilon_0}\\ln(b/a)$',
        '$\\dfrac{\\lambda^2}{2\\pi\\varepsilon_0}\\ln(b/a)$',
        '$\\dfrac{\\lambda^2}{4\\pi\\varepsilon_0}(b-a)$',
        '$\\dfrac{\\lambda^2}{4\\pi\\varepsilon_0 b}$'
      ],
      correctAnswer: 0,
      explanation: 'From the integration above, $U/L = \\lambda^2 \\ln(b/a)/(4\\pi\\varepsilon_0)$. This also equals $\\frac{1}{2}(C/L)V^2$ with $C/L = 2\\pi\\varepsilon_0/\\ln(b/a)$.'
    },
    {
      id: 'eden3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Distribution | Total field energy |
|:---|:---:|
| Conducting sphere | $U = Q^2/(8\\pi\\varepsilon_0 R)$ |
| Uniformly charged sphere | $U = 3Q^2/(20\\pi\\varepsilon_0 R)$ |
| Coaxial (per length) | $U/L = \\lambda^2\\ln(b/a)/(4\\pi\\varepsilon_0)$ |
| General | $U = \\frac{\\varepsilon_0}{2}\\int E^2\\,dV$ |

> **Integration strategy:** (1) Find $\\vec{E}$ using Gauss's law. (2) Square it. (3) Integrate over appropriate volume elements using the symmetry of the problem.`
    }
  ]
};
