export const physCEMElecFieldPart3Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `# Electric Fields from Continuous Charge Distributions

**Part 3 of 7 — Integration Techniques**

When charge is spread continuously over a line, surface, or volume, we replace the sum with an integral:

$$\\vec{E} = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{dq}{r^2}\\hat{r}$$

### Charge Density Types

| Geometry | Symbol | Definition | Units |
|:---:|:---:|:---:|:---:|
| Line | $\\lambda$ | $dq = \\lambda\\,dl$ | C/m |
| Surface | $\\sigma$ | $dq = \\sigma\\,dA$ | $C/m^{2}$ |
| Volume | $\\rho$ | $dq = \\rho\\,dV$ | $C/m^{3}$ |

### Integration Strategy
1. Choose a coordinate system exploiting symmetry.
2. Express $dq$ in terms of the integration variable.
3. Write $d\\vec{E}$ from the element $dq$.
4. Use symmetry to cancel components where possible.
5. Integrate the surviving component(s).`
    },
    {
      id: 'ef3-mcq1',
      type: 'mcq' as const,
      question: 'A thin rod has total charge $Q$ and length $L$. If charge is uniformly distributed, the linear charge density is:',
      options: ['$\\lambda = Q/L$', '$\\lambda = Q/L^2$', '$\\lambda = QL$', '$\\lambda = Q/(2\\pi L)$'],
      correctAnswer: 0,
      explanation: 'For a uniform linear distribution, $\\lambda = Q/L$ in units of C/m.'
    },
    {
      id: 'ef3-rod',
      type: 'text' as const,
      content: `## Electric Field of a Finite Charged Rod

A rod of length $L$ with uniform charge density $\\lambda$ lies along the $x$-axis from $x = 0$ to $x = L$. Find $\\vec{E}$ at point $P = (d, 0)$ where $d > L$.

A small element at position $x$ has charge $dq = \\lambda\\,dx$, and is a distance $(d - x)$ from $P$.

$$dE = \\frac{k\\lambda\\,dx}{(d-x)^2}$$

All contributions point in $+x$. Integrating:

$$E = k\\lambda \\int_0^L \\frac{dx}{(d-x)^2}$$

Let $u = d - x$, $du = -dx$. When $x = 0$, $u = d$; when $x = L$, $u = d - L$.

$$E = k\\lambda \\int_{d}^{d-L} \\frac{-du}{u^2} = k\\lambda\\left[\\frac{1}{u}\\right]_{d}^{d-L} = k\\lambda\\left(\\frac{1}{d-L} - \\frac{1}{d}\\right)$$

$$\\boxed{E = \\frac{k\\lambda L}{d(d-L)} = \\frac{kQ}{d(d-L)}}$$

**Check:** As $d \\gg L$, $E \\to kQ/d^2$ — the field of a point charge, as expected.`
    },
    {
      id: 'ef3-mcq2',
      type: 'mcq' as const,
      question: 'In the rod calculation above, if we take $d \\to \\infty$ with $Q = \\lambda L$ fixed, the field behaves as:',
      options: ['$kQ/d^2$', '$kQ/d$', '$2k\\lambda/d$', '$k\\lambda/(d-L)$'],
      correctAnswer: 0,
      explanation: 'Far from any finite charge distribution, the field approaches that of a point charge: $E \\to kQ/d^2$.'
    },
    {
      id: 'ef3-ring',
      type: 'text' as const,
      content: `## Electric Field on the Axis of a Charged Ring

A ring of radius $R$ carries total charge $Q$ uniformly. Find $\\vec{E}$ at distance $z$ along the axis.

Each element $dq$ is at distance $r = \\sqrt{R^2 + z^2}$ from the field point. By symmetry, the components perpendicular to the axis cancel in pairs.

The axial component from each element:

$$dE_z = \\frac{k\\,dq}{R^2 + z^2}\\cdot\\frac{z}{\\sqrt{R^2+z^2}}$$

Integrating over the full ring ($\\int dq = Q$):

$$\\boxed{E_z = \\frac{kQz}{(R^2 + z^2)^{3/2}}}$$

### Critical Points

Taking the derivative to find the maximum field:

$$\\frac{dE_z}{dz} = kQ\\frac{(R^2+z^2)^{3/2} - z\\cdot\\frac{3}{2}(R^2+z^2)^{1/2}\\cdot 2z}{(R^2+z^2)^3} = 0$$

$$R^2 + z^2 - 3z^2 = 0 \\implies z = \\pm\\frac{R}{\\sqrt{2}}$$

The field is maximum at $z = R/\\sqrt{2}$.`
    },
    {
      id: 'ef3-mcq3',
      type: 'mcq' as const,
      question: 'The electric field on the axis of a uniformly charged ring at $z = 0$ (the center) is:',
      options: ['$0$', '$kQ/R^2$', '$kQ/(2R^2)$', '$2kQ/R^2$'],
      correctAnswer: 0,
      explanation: 'At $z = 0$: $E_z = kQ(0)/(R^2)^{3/2} = 0$. By symmetry, every element\'s contribution is canceled by the diametrically opposite element.'
    },
    {
      id: 'ef3-disk',
      type: 'text' as const,
      content: `## Electric Field on the Axis of a Uniformly Charged Disk

A disk of radius $R$ with surface charge density $\\sigma$. We can build the disk from concentric rings of radius $r'$ and width $dr'$:

$$dq = \\sigma \\cdot 2\\pi r'\\,dr'$$

Using the ring result with $r'$ replacing $R$:

$$dE_z = \\frac{k(\\sigma\\,2\\pi r'\\,dr')z}{(r'^2 + z^2)^{3/2}}$$

$$E_z = k\\sigma 2\\pi z\\int_0^R \\frac{r'\\,dr'}{(r'^2+z^2)^{3/2}}$$

Let $u = r'^2 + z^2$:

$$E_z = \\frac{\\sigma z}{2\\epsilon_0}\\left[-\\frac{1}{\\sqrt{u}}\\right]_{z^2}^{R^2+z^2} = \\frac{\\sigma}{2\\epsilon_0}\\left(1 - \\frac{z}{\\sqrt{R^2+z^2}}\\right)$$

### Infinite-Plane Limit

As $R \\to \\infty$:

$$\\boxed{E = \\frac{\\sigma}{2\\epsilon_0}}$$

This is the field of an infinite plane of charge — uniform, independent of distance!`
    },
    {
      id: 'ef3-mcq4',
      type: 'mcq' as const,
      question: 'An infinite plane with surface charge density $\\sigma = 4.0\\;\\mu\\text{C/m}^2$. The electric field magnitude near the plane is:',
      options: [
        '$2.26 \\times 10^5\\;\\text{N/C}$',
        '$4.52 \\times 10^5\\;\\text{N/C}$',
        '$1.13 \\times 10^5\\;\\text{N/C}$',
        '$9.04 \\times 10^5\\;\\text{N/C}$'
      ],
      correctAnswer: 0,
      explanation: '$E = \\sigma/(2\\epsilon_0) = (4\\times10^{-6})/(2 \\times 8.85\\times10^{-12}) = 2.26\\times10^5\\;\\text{N/C}$.'
    }
  ]
};
