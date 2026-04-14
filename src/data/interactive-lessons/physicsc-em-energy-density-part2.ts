export const physCEMEnergyDenPart2Data = {
  topicSlug: "energy-density-physics-c-em",
  sections: [
    {
      id: 'eden2-intro',
      type: 'text' as const,
      content: `# Energy Density — Part 2: Energy Density u = ½ε₀E²

The energy stored in a capacitor is actually stored **in the electric field itself**. We can define an energy per unit volume — the **energy density**.

### Derivation for a parallel-plate capacitor

$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}\\left(\\frac{\\varepsilon_0 A}{d}\\right)(Ed)^2 = \\frac{1}{2}\\varepsilon_0 E^2 \\cdot (Ad)$$

Since $Ad$ is the volume between the plates:

$$\\boxed{u = \\frac{U}{\\text{Volume}} = \\frac{1}{2}\\varepsilon_0 E^2}$$

This is **universal** — it applies to any electric field, not just parallel plates.`
    },
    {
      id: 'eden2-mcq1',
      type: 'mcq' as const,
      question: 'What is the energy density in a region where $E = 10^4$ V/m? ($\\varepsilon_0 = 8.85 \\times 10^{-12}$)',
      options: [
        '$4.43 \\times 10^{-4}$ J/m³',
        '$8.85 \\times 10^{-4}$ J/m³',
        '$4.43 \\times 10^{-8}$ J/m³',
        '$0.5$ J/m³'
      ],
      correctAnswer: 0,
      explanation: '$u = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{1}{2}(8.85 \\times 10^{-12})(10^8) = 4.425 \\times 10^{-4}$ J/m³.'
    },
    {
      id: 'eden2-general',
      type: 'text' as const,
      content: `## General energy from field integration

For any charge configuration, the total energy stored in the electric field is:

$$U = \\frac{\\varepsilon_0}{2}\\int_{\\text{all space}} E^2\\,dV$$

where $dV$ is a volume element. This integral extends over **all space** where $\\vec{E} \\neq 0$.

### With dielectrics

In a linear dielectric with constant $\\kappa$:

$$u = \\frac{1}{2}\\kappa\\varepsilon_0 E^2 = \\frac{1}{2}\\vec{D}\\cdot\\vec{E}$$

The general form $u = \\frac{1}{2}\\vec{D}\\cdot\\vec{E}$ works even for non-uniform dielectrics.

### Units check

$$[u] = \\frac{\\text{C}^2}{\\text{N}\\cdot\\text{m}^2} \\cdot \\frac{\\text{V}^2}{\\text{m}^2} = \\frac{\\text{C}^2}{\\text{N}\\cdot\\text{m}^2}\\cdot\\frac{\\text{N}^2\\cdot\\text{m}^2}{\\text{C}^2\\cdot\\text{m}^2} = \\frac{\\text{N}}{\\text{m}^2} = \\frac{\\text{J}}{\\text{m}^3} \\checkmark$$`
    },
    {
      id: 'eden2-mcq2',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has $E = 5000$ V/m and is filled with dielectric $\\kappa = 4$. What is the energy density?',
      options: [
        '$4.43 \\times 10^{-4}$ J/m³',
        '$1.11 \\times 10^{-4}$ J/m³',
        '$2.21 \\times 10^{-4}$ J/m³',
        '$8.85 \\times 10^{-4}$ J/m³'
      ],
      correctAnswer: 0,
      explanation: '$u = \\frac{1}{2}\\kappa\\varepsilon_0 E^2 = \\frac{1}{2}(4)(8.85 \\times 10^{-12})(25 \\times 10^6) = \\frac{1}{2}(8.85 \\times 10^{-4}) = 4.43 \\times 10^{-4}$ J/m³.'
    },
    {
      id: 'eden2-verify',
      type: 'text' as const,
      content: `## Verification: Parallel-plate capacitor

Let's verify the energy density formula reproduces $U = \\frac{1}{2}CV^2$:

$$U = \\int u\\,dV = \\frac{1}{2}\\varepsilon_0 E^2 \\cdot (Ad)$$

With $E = V/d$ and $C = \\varepsilon_0 A/d$:

$$U = \\frac{1}{2}\\varepsilon_0 \\frac{V^2}{d^2}(Ad) = \\frac{1}{2}\\frac{\\varepsilon_0 A}{d}V^2 = \\frac{1}{2}CV^2 \\checkmark$$

### Key conceptual point

The energy density formula tells us that **the energy is stored in the field, not on the charges**. This is a profound shift in perspective: the field is not just a mathematical construct but a physical entity that carries energy.

In electrostatics, the two viewpoints (energy in charges vs. energy in fields) give the same total $U$. But in electrodynamics (EM waves), only the field perspective works — there may be no charges nearby, yet the wave carries energy.`
    },
    {
      id: 'eden2-mcq3',
      type: 'mcq' as const,
      question: 'The electric field between capacitor plates is $E_0$. If the plate separation is doubled (at constant charge), what happens to the energy density between the plates?',
      options: [
        'It stays the same (energy density depends only on $E$, which is unchanged at constant $Q$)',
        'It doubles',
        'It quadruples',
        'It halves'
      ],
      correctAnswer: 0,
      explanation: 'At constant $Q$ on a parallel-plate capacitor, $E = \\sigma/\\varepsilon_0$ is independent of $d$. So $u = \\frac{1}{2}\\varepsilon_0 E^2$ is unchanged. The total energy $U = u \\cdot Ad$ doubles because the volume doubles.'
    },
    {
      id: 'eden2-mcq4',
      type: 'mcq' as const,
      question: 'Two regions have electric fields $E_1 = 100$ V/m and $E_2 = 300$ V/m. What is the ratio of their energy densities $u_2/u_1$?',
      options: ['$9$', '$3$', '$6$', '$1/9$'],
      correctAnswer: 0,
      explanation: '$u \\propto E^2$, so $u_2/u_1 = (300/100)^2 = 9$.'
    },
    {
      id: 'eden2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Quantity | Formula |
|:---|:---:|
| Energy density (vacuum) | $u = \\frac{1}{2}\\varepsilon_0 E^2$ |
| Energy density (dielectric) | $u = \\frac{1}{2}\\kappa\\varepsilon_0 E^2 = \\frac{1}{2}\\vec{D}\\cdot\\vec{E}$ |
| Total energy | $U = \\int u\\,dV = \\frac{\\varepsilon_0}{2}\\int E^2\\,dV$ |
| Energy $\\propto E^2$ | Doubling $E$ quadruples $u$ |

> **Key insight:** $u = \\frac{1}{2}\\varepsilon_0 E^2$ is one of the most important formulas in E&M. It tells us energy is stored continuously throughout space wherever an electric field exists.`
    }
  ]
};
