export const physCEMDielecPart7Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec7-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 7: Review & Applications

### Complete formula sheet

| Quantity | Vacuum | With dielectric ($\\kappa$) |
|:---|:---:|:---:|
| Permittivity | $\\varepsilon_0$ | $\\varepsilon = \\kappa\\varepsilon_0$ |
| $C$ (parallel plate) | $\\varepsilon_0 A/d$ | $\\kappa\\varepsilon_0 A/d$ |
| $C$ (coaxial) | $2\\pi\\varepsilon_0 L/\\ln(b/a)$ | $2\\pi\\kappa\\varepsilon_0 L/\\ln(b/a)$ |
| $E$ field | $\\sigma/\\varepsilon_0$ | $\\sigma_f/(\\kappa\\varepsilon_0)$ |
| Energy density | $\\frac{1}{2}\\varepsilon_0 E^2$ | $\\frac{1}{2}\\kappa\\varepsilon_0 E^2$ |

### The three key relationships

$$\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\kappa\\varepsilon_0 \\vec{E}$$

$$\\vec{P} = \\varepsilon_0(\\kappa - 1)\\vec{E}$$

$$\\sigma_b = \\sigma_f\\left(1 - \\frac{1}{\\kappa}\\right)$$`
    },
    {
      id: 'dielec7-mcq1',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor ($A = 0.01$ m², $d = 1$ mm) is filled with a dielectric ($\\kappa = 6$). What is the capacitance? ($\\varepsilon_0 = 8.85 \\times 10^{-12}$)',
      options: ['$531$ pF', '$88.5$ pF', '$53.1$ pF', '$5.31$ nF'],
      correctAnswer: 0,
      explanation: '$C = \\kappa\\varepsilon_0 A/d = 6(8.85 \\times 10^{-12})(0.01)/(10^{-3}) = 5.31 \\times 10^{-10} = 531$ pF.'
    },
    {
      id: 'dielec7-apps',
      type: 'text' as const,
      content: `## Real-World Applications

### Ceramic capacitors
High-$\\kappa$ ceramics ($\\kappa \\sim 1000{-}10{,}000$) allow enormous capacitance in tiny packages. Used in every electronic circuit.

### Electrolytic capacitors
A thin oxide layer ($d \\sim$ nm) serves as the dielectric, giving very high $C$ but with polarity constraints.

### Capacitive sensors
Many touchscreens use the change in capacitance when your finger (a water-based dielectric, $\\kappa \\approx 80$) approaches the sensor electrodes.

### Cable insulation
The dielectric in coaxial cables (polyethylene, $\\kappa \\approx 2.3$) determines both the capacitance per unit length and the characteristic impedance:

$$Z_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{\\mu_0}{\\kappa\\varepsilon_0}}\\ln\\frac{b}{a}$$

### Energy storage
Supercapacitors use high-$\\kappa$ materials with nanometer-scale gaps to achieve farad-level capacitances for energy storage in electric vehicles and grid systems.`
    },
    {
      id: 'dielec7-mcq2',
      type: 'mcq' as const,
      question: 'A capacitor with $C_0 = 100$ pF in vacuum is charged to $Q = 5$ nC and isolated. A dielectric ($\\kappa = 5$) is inserted. What are the final voltage and energy?',
      options: [
        '$V = 10$ V, $U = 25$ nJ',
        '$V = 50$ V, $U = 125$ nJ',
        '$V = 10$ V, $U = 50$ nJ',
        '$V = 2$ V, $U = 5$ nJ'
      ],
      correctAnswer: 0,
      explanation: '$V_0 = Q/C_0 = 5 \\times 10^{-9}/10^{-10} = 50$ V. After: $V = V_0/\\kappa = 10$ V. $U = \\frac{1}{2}QV = \\frac{1}{2}(5 \\times 10^{-9})(10) = 25$ nJ.'
    },
    {
      id: 'dielec7-conceptual',
      type: 'text' as const,
      content: `## Conceptual Review

### Common exam mistakes

| Mistake | Correction |
|:---|:---|
| Confusing constant $Q$ vs. constant $V$ | Always identify whether battery is connected |
| Assuming $E$ unchanged with dielectric | $E$ is reduced by $\\kappa$ (at constant $Q$); constant only with battery |
| Adding series capacitors directly | Series: add reciprocals. Parallel: add directly |
| Forgetting bound charges | Bound charges reduce $E$ inside; $\\sigma_b = P \\cdot \\hat{n}$ |
| Ignoring breakdown limits | Real capacitors limited by $V_{\\max} = E_{\\max} d$ |

### Integration problems to practice

1. Find $C$ for a coaxial cable where $\\kappa(r) = \\kappa_0(a/r)$ varies with radius.
2. Compute the force pulling a dielectric slab into a parallel-plate capacitor at constant $V$.
3. Derive the energy stored using $u = \\frac{1}{2}\\vec{D}\\cdot\\vec{E}$ integrated over all space.`
    },
    {
      id: 'dielec7-mcq3',
      type: 'mcq' as const,
      question: 'A dielectric slab ($\\kappa = 3$, area $A$, thickness $d$) is partially inserted a distance $x$ into a parallel-plate capacitor (plate length $L$, width $w$, separation $d$) connected to battery $V$. What is $C(x)$?',
      options: [
        '$\\dfrac{\\varepsilon_0 w}{d}[\\kappa x + (L - x)]$',
        '$\\dfrac{\\kappa\\varepsilon_0 wL}{d}$',
        '$\\dfrac{\\varepsilon_0 wL}{d}$',
        '$\\dfrac{\\varepsilon_0 w}{d}(\\kappa L - x)$'
      ],
      correctAnswer: 0,
      explanation: 'Two parallel capacitors: one with dielectric (area $wx$) and one vacuum (area $w(L-x)$). $C = \\kappa\\varepsilon_0 wx/d + \\varepsilon_0 w(L-x)/d = (\\varepsilon_0 w/d)[\\kappa x + (L-x)]$.'
    },
    {
      id: 'dielec7-mcq4',
      type: 'mcq' as const,
      question: 'The force pulling the dielectric slab in the previous problem into the capacitor (at constant $V$) is:',
      options: [
        '$F = \\dfrac{(\\kappa - 1)\\varepsilon_0 w V^2}{2d}$',
        '$F = \\dfrac{\\kappa\\varepsilon_0 w V^2}{2d}$',
        '$F = 0$ (no force)',
        '$F = \\dfrac{\\varepsilon_0 w V^2}{d}$'
      ],
      correctAnswer: 0,
      explanation: '$F = \\frac{\\partial U}{\\partial x}\\bigg|_V = \\frac{1}{2}V^2 \\frac{dC}{dx}$. $dC/dx = \\varepsilon_0 w(\\kappa - 1)/d$. So $F = (\\kappa - 1)\\varepsilon_0 w V^2/(2d)$, constant and directed inward.'
    },
    {
      id: 'dielec7-summary',
      type: 'text' as const,
      content: `## Topic Complete: Dielectrics

You've mastered all aspects of dielectrics for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Dielectric constant $\\kappa$ | ✅ |
| 2 | Effect on capacitance | ✅ |
| 3 | Polarization & bound charges | ✅ |
| 4 | $E$ field in dielectrics | ✅ |
| 5 | Dielectric breakdown | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Exam tip:** On free-response questions, always state whether the capacitor is at constant $Q$ or constant $V$ before computing changes in $C$, $V$, $E$, and $U$. This is one of the most commonly tested distinctions on the AP exam.`
    }
  ]
};
