export const physCEMDielecPart4Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec4-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 4: Electric Field in Dielectrics

Understanding the electric field inside and outside dielectric materials is essential for AP Physics C: E&M. We apply Gauss's law (in both $\\vec{E}$ and $\\vec{D}$ forms) and boundary conditions.

### Parallel-plate capacitor (fully filled)

For a capacitor with free charge density $\\sigma_f$ and dielectric $\\kappa$:

$$E_{\\text{inside}} = \\frac{\\sigma_f}{\\kappa\\varepsilon_0} = \\frac{V}{d}$$

$$D_{\\text{inside}} = \\sigma_f \\quad (\\text{independent of } \\kappa)$$

The voltage across the gap is $V = Ed = \\sigma_f d / (\\kappa\\varepsilon_0)$.`
    },
    {
      id: 'dielec4-mcq1',
      type: 'mcq' as const,
      question: 'A capacitor with plate separation $d = 2$ mm holds charge density $\\sigma_f = 4.43 \\times 10^{-8}$ C/m² and is filled with dielectric $\\kappa = 5$. What is the voltage across the plates? ($\\varepsilon_0 = 8.85 \\times 10^{-12}$)',
      options: ['$2.0$ V', '$10.0$ V', '$0.4$ V', '$50.0$ V'],
      correctAnswer: 0,
      explanation: '$V = \\sigma_f d/(\\kappa\\varepsilon_0) = (4.43 \\times 10^{-8})(2 \\times 10^{-3})/(5 \\times 8.85 \\times 10^{-12}) = 8.86 \\times 10^{-11}/4.425 \\times 10^{-11} = 2.0$ V.'
    },
    {
      id: 'dielec4-spherical',
      type: 'text' as const,
      content: `## Dielectric Around a Spherical Conductor

Consider a conducting sphere of radius $a$ carrying charge $Q$, surrounded by a dielectric shell ($\\kappa$) extending from $r = a$ to $r = b$, with vacuum beyond.

Using Gauss's law for $\\vec{D}$:

$$D(4\\pi r^2) = Q \\implies D = \\frac{Q}{4\\pi r^2}$$

The electric field depends on the region:

$$E(r) = \\begin{cases} 0 & r < a \\\\[6pt] \\dfrac{Q}{4\\pi\\kappa\\varepsilon_0 r^2} & a < r < b \\\\[6pt] \\dfrac{Q}{4\\pi\\varepsilon_0 r^2} & r > b \\end{cases}$$

Notice the field is reduced by $\\kappa$ only in the dielectric region.

### Potential

$$V(a) - V(\\infty) = \\int_a^b \\frac{Q}{4\\pi\\kappa\\varepsilon_0 r^2}\\,dr + \\int_b^\\infty \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\,dr$$

$$= \\frac{Q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{\\kappa}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) + \\frac{1}{b}\\right]$$`
    },
    {
      id: 'dielec4-mcq2',
      type: 'mcq' as const,
      question: 'At the boundary $r = b$ between a dielectric shell and vacuum, which quantity is continuous?',
      options: [
        '$D_r$ (radial component of $\\vec{D}$)',
        '$E_r$ (radial component of $\\vec{E}$)',
        'Both $D_r$ and $E_r$',
        'Neither'
      ],
      correctAnswer: 0,
      explanation: 'With no free surface charge at the boundary, the normal component of $\\vec{D}$ is continuous: $D_{r,\\text{in}} = D_{r,\\text{out}}$. But $E_r$ jumps by a factor of $\\kappa$ since $D = \\varepsilon E$.'
    },
    {
      id: 'dielec4-coax',
      type: 'text' as const,
      content: `## Coaxial Cable with Dielectric

A coaxial cable has inner radius $a$, outer radius $b$, and the gap is filled with dielectric $\\kappa$. The capacitance per unit length is:

$$\\frac{C}{L} = \\frac{2\\pi\\kappa\\varepsilon_0}{\\ln(b/a)}$$

**Derivation:** Using Gauss's law for a cylindrical surface of radius $r$ and length $L$:

$$D \\cdot 2\\pi r L = \\lambda_{\\text{free}} L$$

$$E = \\frac{\\lambda_{\\text{free}}}{2\\pi\\kappa\\varepsilon_0 r}$$

$$V = \\int_a^b E\\,dr = \\frac{\\lambda_{\\text{free}}}{2\\pi\\kappa\\varepsilon_0}\\ln\\frac{b}{a}$$

$$\\frac{C}{L} = \\frac{\\lambda_{\\text{free}}}{V} = \\frac{2\\pi\\kappa\\varepsilon_0}{\\ln(b/a)}$$`
    },
    {
      id: 'dielec4-mcq3',
      type: 'mcq' as const,
      question: 'A coaxial cable has $a = 1$ mm, $b = 5$ mm, and is filled with dielectric $\\kappa = 2.3$. What is $C/L$? ($\\varepsilon_0 = 8.85 \\times 10^{-12}$, $\\ln 5 \\approx 1.609$)',
      options: [
        '$\\approx 80$ pF/m',
        '$\\approx 35$ pF/m',
        '$\\approx 160$ pF/m',
        '$\\approx 55$ pF/m'
      ],
      correctAnswer: 0,
      explanation: '$C/L = 2\\pi(2.3)(8.85 \\times 10^{-12})/\\ln(5) = 2\\pi(2.036 \\times 10^{-11})/1.609 \\approx 1.279 \\times 10^{-10}/1.609 \\approx 7.95 \\times 10^{-11} \\approx 80$ pF/m.'
    },
    {
      id: 'dielec4-mcq4',
      type: 'mcq' as const,
      question: 'In a region where a dielectric has spatially varying $\\kappa(r)$, which Gauss\'s-law form is easiest to apply?',
      options: [
        '$\\oint \\vec{D}\\cdot d\\vec{A} = Q_{\\text{free}}$, because $\\vec{D}$ depends only on free charges',
        '$\\oint \\vec{E}\\cdot d\\vec{A} = Q_{\\text{total}}/\\varepsilon_0$, because $\\vec{E}$ is the physical field',
        'Both are equally difficult',
        'Neither applies; use Poisson\'s equation instead'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{D}$ depends only on free charges regardless of the dielectric profile. After finding $\\vec{D}$, convert via $\\vec{E} = \\vec{D}/(\\kappa(r)\\varepsilon_0)$.'
    },
    {
      id: 'dielec4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Geometry | $E$ in dielectric | $C$ |
|:---|:---:|:---:|
| Parallel plate | $\\sigma_f/(\\kappa\\varepsilon_0)$ | $\\kappa\\varepsilon_0 A/d$ |
| Spherical shell | $Q/(4\\pi\\kappa\\varepsilon_0 r^2)$ | derived via $V$ integral |
| Coaxial | $\\lambda_f/(2\\pi\\kappa\\varepsilon_0 r)$ | $2\\pi\\kappa\\varepsilon_0 L/\\ln(b/a)$ |

> **Strategy:** Always start with the $\\vec{D}$ form of Gauss's law when dielectrics are present. Find $\\vec{D}$ from free charges, then convert to $\\vec{E} = \\vec{D}/(\\kappa\\varepsilon_0)$ in each region.`
    }
  ]
};
