export const physCEMDielecPart1Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec1-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 1: The Dielectric Constant κ

When an insulating material (a **dielectric**) is placed between the plates of a capacitor, the electric field inside is reduced. The factor by which it is reduced is the **dielectric constant** $\\kappa$ (kappa).

$$\\kappa = \\frac{E_0}{E_d} \\geq 1$$

where $E_0$ is the field without the dielectric and $E_d$ is the field with it.

### Key properties

| Quantity | Symbol | Relation |
|:---|:---:|:---:|
| Dielectric constant | $\\kappa$ | dimensionless, $\\geq 1$ |
| Permittivity of dielectric | $\\varepsilon$ | $\\varepsilon = \\kappa\\varepsilon_0$ |
| Vacuum | $\\kappa = 1$ | $\\varepsilon = \\varepsilon_0$ |

Common values: vacuum $\\kappa = 1$, air $\\approx 1.0006$, paper $\\approx 3.7$, glass $\\approx 5{-}10$, water $\\approx 80$.`
    },
    {
      id: 'dielec1-mcq1',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has electric field $E_0$ in vacuum. A dielectric with $\\kappa = 4$ fills the gap while the charge on the plates is held constant. What is the new electric field?',
      options: ['$E_0/4$', '$4E_0$', '$E_0/2$', '$E_0$'],
      correctAnswer: 0,
      explanation: 'With charge held constant, inserting a dielectric reduces the field by a factor of $\\kappa$: $E_d = E_0/\\kappa = E_0/4$.'
    },
    {
      id: 'dielec1-permittivity',
      type: 'text' as const,
      content: `## Permittivity of a Dielectric

The permittivity $\\varepsilon$ of a dielectric material generalizes the vacuum permittivity:

$$\\varepsilon = \\kappa \\varepsilon_0$$

Gauss's law in a dielectric medium becomes:

$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{free}}}{\\varepsilon} = \\frac{Q_{\\text{free}}}{\\kappa \\varepsilon_0}$$

This means the field from free charges is reduced by $\\kappa$ when the dielectric fills the entire region.

### Why this matters

In the AP Physics C framework, you replace $\\varepsilon_0 \\to \\kappa\\varepsilon_0$ whenever a linear dielectric fills the space. All capacitance, energy, and field formulas update accordingly.`
    },
    {
      id: 'dielec1-mcq2',
      type: 'mcq' as const,
      question: 'If the permittivity of a dielectric is $\\varepsilon = 5\\varepsilon_0$, what is the dielectric constant $\\kappa$?',
      options: ['$5$', '$1/5$', '$5\\varepsilon_0$', '$\\varepsilon_0/5$'],
      correctAnswer: 0,
      explanation: '$\\varepsilon = \\kappa\\varepsilon_0$, so $\\kappa = \\varepsilon / \\varepsilon_0 = 5\\varepsilon_0 / \\varepsilon_0 = 5$.'
    },
    {
      id: 'dielec1-gauss',
      type: 'text' as const,
      content: `## Gauss's Law with Dielectrics

We can define the **displacement field** $\\vec{D}$:

$$\\vec{D} = \\varepsilon \\vec{E} = \\kappa \\varepsilon_0 \\vec{E}$$

Gauss's law for $\\vec{D}$ involves only **free** charges:

$$\\oint \\vec{D} \\cdot d\\vec{A} = Q_{\\text{free, enc}}$$

This is extremely useful because $\\vec{D}$ depends only on the free charge distribution, **not** on how the dielectric responds.

For a parallel-plate capacitor with surface charge density $\\sigma_f$ (free):

$$D = \\sigma_f \\implies E = \\frac{\\sigma_f}{\\kappa \\varepsilon_0}$$`
    },
    {
      id: 'dielec1-mcq3',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has free surface charge density $\\sigma_f = 8.85 \\times 10^{-9}$ $C/m^{2}$ and is filled with a dielectric ($\\kappa = 2$). What is $E$ inside the dielectric? (Use $\\varepsilon_0 = 8.85 \\times 10^{-12}$ $C^{2}/(N\\cdot m^{2})$.)',
      options: ['$500$ V/m', '$1000$ V/m', '$250$ V/m', '$2000$ V/m'],
      correctAnswer: 0,
      explanation: '$E = \\sigma_f/(\\kappa\\varepsilon_0) = (8.85 \\times 10^{-9})/(2 \\times 8.85 \\times 10^{-12}) = 10^3/2 = 500$ V/m.'
    },
    {
      id: 'dielec1-mcq4',
      type: 'mcq' as const,
      question: 'Which of the following is true about the displacement field $\\vec{D}$ across a dielectric boundary (no free surface charge at the boundary)?',
      options: [
        'The normal component of $\\vec{D}$ is continuous',
        'The tangential component of $\\vec{D}$ is continuous',
        '$\\vec{D}$ is always zero inside a dielectric',
        '$\\vec{D}$ is always equal to $\\varepsilon_0 \\vec{E}$'
      ],
      correctAnswer: 0,
      explanation: 'The boundary condition from $\\oint \\vec{D}\\cdot d\\vec{A} = Q_{\\text{free,enc}}$ with no free surface charge gives $D_{1\\perp} = D_{2\\perp}$—the normal component is continuous.'
    },
    {
      id: 'dielec1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Formula |
|:---|:---:|
| Dielectric constant | $\\kappa = E_0/E_d \\geq 1$ |
| Permittivity | $\\varepsilon = \\kappa\\varepsilon_0$ |
| Gauss (with dielectric) | $\\oint \\vec{E}\\cdot d\\vec{A} = Q_{\\text{free}}/(\\kappa\\varepsilon_0)$ |
| Displacement field | $\\vec{D} = \\kappa\\varepsilon_0\\vec{E}$ |
| Gauss for $\\vec{D}$ | $\\oint \\vec{D}\\cdot d\\vec{A} = Q_{\\text{free,enc}}$ |

> **Key insight:** The dielectric constant $\\kappa$ quantifies how much an insulating material reduces the electric field compared to vacuum. All electrostatic formulas generalize by replacing $\\varepsilon_0 \\to \\kappa\\varepsilon_0$.`
    }
  ]
};
