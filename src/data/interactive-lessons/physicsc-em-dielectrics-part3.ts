export const physCEMDielecPart3Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec3-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 3: Polarization and Bound Charges

When an external electric field is applied to a dielectric, the molecules inside become **polarized**: positive and negative charges within each molecule shift slightly. This creates **bound charges** on the dielectric surfaces.

### Molecular picture

- **Polar molecules** (e.g., H₂O): permanent dipoles rotate to partially align with $\\vec{E}$.
- **Non-polar molecules** (e.g., N₂): the external field **induces** a dipole by displacing the electron cloud.

In both cases, the net effect is an internal field $\\vec{E}_p$ that **opposes** the applied field $\\vec{E}_0$.`
    },
    {
      id: 'dielec3-mcq1',
      type: 'mcq' as const,
      question: 'When a dielectric slab is placed in a uniform external field $\\vec{E}_0$, the polarization of the dielectric creates an internal field $\\vec{E}_p$ that:',
      options: [
        'Opposes $\\vec{E}_0$, reducing the net field inside',
        'Adds to $\\vec{E}_0$, increasing the net field inside',
        'Is perpendicular to $\\vec{E}_0$',
        'Has no effect on the net field'
      ],
      correctAnswer: 0,
      explanation: 'Polarization creates bound surface charges whose field opposes the applied field. The net field inside is $E = E_0 - E_p = E_0/\\kappa < E_0$.'
    },
    {
      id: 'dielec3-polarization',
      type: 'text' as const,
      content: `## The Polarization Vector $\\vec{P}$

The **polarization** $\\vec{P}$ is the dipole moment per unit volume:

$$\\vec{P} = \\varepsilon_0 (\\kappa - 1) \\vec{E} = \\varepsilon_0 \\chi_e \\vec{E}$$

where $\\chi_e = \\kappa - 1$ is the **electric susceptibility**.

### Bound charge densities

Polarization produces bound charges:

| Type | Formula | Location |
|:---|:---:|:---|
| Surface bound charge | $\\sigma_b = \\vec{P} \\cdot \\hat{n}$ | On dielectric surfaces |
| Volume bound charge | $\\rho_b = -\\nabla \\cdot \\vec{P}$ | Inside non-uniform dielectric |

For a **uniform** dielectric in a uniform field, $\\nabla \\cdot \\vec{P} = 0$, so there is no volume bound charge—only surface bound charges appear.`
    },
    {
      id: 'dielec3-mcq2',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor with field $E = 1000$ V/m is filled with a dielectric ($\\kappa = 4$). What is the bound surface charge density $\\sigma_b$?',
      options: [
        '$3\\varepsilon_0 \\times 1000$ C/m²',
        '$4\\varepsilon_0 \\times 1000$ C/m²',
        '$\\varepsilon_0 \\times 1000$ C/m²',
        '$5\\varepsilon_0 \\times 1000$ C/m²'
      ],
      correctAnswer: 0,
      explanation: '$P = \\varepsilon_0(\\kappa - 1)E = \\varepsilon_0(3)(1000) = 3000\\varepsilon_0$. The bound surface charge density equals $P$, so $\\sigma_b = 3\\varepsilon_0 \\times 1000$ C/m².'
    },
    {
      id: 'dielec3-fields',
      type: 'text' as const,
      content: `## Relating Free, Bound, and Total Fields

Inside a parallel-plate capacitor with dielectric:

$$E_{\\text{total}} = E_{\\text{free}} - E_{\\text{bound}} = \\frac{\\sigma_f}{\\varepsilon_0} - \\frac{\\sigma_b}{\\varepsilon_0}$$

Since $\\sigma_b = \\sigma_f(1 - 1/\\kappa)$:

$$E_{\\text{total}} = \\frac{\\sigma_f}{\\varepsilon_0}\\left(1 - 1 + \\frac{1}{\\kappa}\\right) = \\frac{\\sigma_f}{\\kappa\\varepsilon_0}$$

This confirms our earlier result from Gauss's law.

### The three fields at a glance

$$\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P}$$

| Field | Sources | Gauss's law |
|:---|:---|:---:|
| $\\vec{E}$ | All charges (free + bound) | $\\oint \\vec{E}\\cdot d\\vec{A} = (Q_f + Q_b)/\\varepsilon_0$ |
| $\\vec{D}$ | Free charges only | $\\oint \\vec{D}\\cdot d\\vec{A} = Q_f$ |
| $\\vec{P}$ | Bound charges only | $\\oint \\vec{P}\\cdot d\\vec{A} = -Q_b$ |`
    },
    {
      id: 'dielec3-mcq3',
      type: 'mcq' as const,
      question: 'In a dielectric with $\\kappa = 5$, if the free surface charge density is $\\sigma_f$, what fraction of $\\sigma_f$ appears as bound surface charge?',
      options: ['$4/5$', '$1/5$', '$5/6$', '$4/6$'],
      correctAnswer: 0,
      explanation: '$\\sigma_b = \\sigma_f(1 - 1/\\kappa) = \\sigma_f(1 - 1/5) = 4\\sigma_f/5$. Four-fifths of the free charge is "cancelled" by bound charges.'
    },
    {
      id: 'dielec3-mcq4',
      type: 'mcq' as const,
      question: 'For a uniform linear dielectric slab in a uniform external field, the volume bound charge density $\\rho_b$ is:',
      options: [
        'Zero everywhere inside the dielectric',
        'Equal to $\\sigma_b$ everywhere',
        'Non-zero and uniform',
        'Non-zero only at the center'
      ],
      correctAnswer: 0,
      explanation: '$\\rho_b = -\\nabla \\cdot \\vec{P}$. For uniform $\\vec{P}$ (uniform $\\kappa$ and uniform $\\vec{E}$), the divergence vanishes: $\\rho_b = 0$. Bound charges appear only on the surfaces.'
    },
    {
      id: 'dielec3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Concept | Expression |
|:---|:---:|
| Polarization | $\\vec{P} = \\varepsilon_0(\\kappa - 1)\\vec{E}$ |
| Susceptibility | $\\chi_e = \\kappa - 1$ |
| Bound surface charge | $\\sigma_b = \\vec{P}\\cdot\\hat{n}$ |
| Bound volume charge | $\\rho_b = -\\nabla\\cdot\\vec{P}$ |
| $D$–$E$–$P$ relation | $\\vec{D} = \\varepsilon_0\\vec{E} + \\vec{P}$ |
| Bound/free ratio | $\\sigma_b/\\sigma_f = 1 - 1/\\kappa$ |

> **Key insight:** Bound charges are the microscopic reason $\\kappa$ reduces the field. They are not "real" free charges—they arise from molecular polarization and always partially cancel the applied field.`
    }
  ]
};
