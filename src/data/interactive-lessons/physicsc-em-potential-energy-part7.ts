export const physCEMPotEnergyPart7Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Master Formula Sheet

| Quantity | Formula |
|:---:|:---:|
| PE of two charges | $U = kq_1q_2/r$ |
| PE of $N$ charges | $U = \\sum_{i<j} kq_iq_j/r_{ij}$ |
| $U$ from potential | $U = qV$ |
| Energy density | $u = \\epsilon_0 E^2/2$ |
| Total field energy | $U = \\frac{\\epsilon_0}{2}\\int E^2\\,dV$ |
| Capacitor energy | $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$ |
| Shell self-energy | $kQ^2/(2R)$ |
| Solid sphere self-energy | $3kQ^2/(5R)$ |
| Work by $\\vec{E}$ | $W = q(V_i - V_f) = -\\Delta U$ |`
    },
    {
      id: 'pe7-mcq1',
      type: 'mcq' as const,
      question: 'An electron ($K = 100\\;\\text{eV}$) hits a proton head-on (proton at rest, much heavier). The closest approach distance is:',
      options: [
        '$14.4\\;\\text{pm}$',
        '$1.44\\;\\text{pm}$',
        '$144\\;\\text{pm}$',
        '$0.144\\;\\text{pm}$'
      ],
      correctAnswer: 0,
      explanation: '$K = ke^2/r_{\\min}$. $r_{\\min} = ke^2/K = (8.99\\times10^9)(1.6\\times10^{-19})^2/(100\\times1.6\\times10^{-19}) = 1.44\\times10^{-11}\\;\\text{m} = 14.4\\;\\text{pm}$.'
    },
    {
      id: 'pe7-worked1',
      type: 'text' as const,
      content: `## Application 1: Thomson's Plum-Pudding Model

Thomson modeled the atom as charge $+Ze$ uniformly distributed in a sphere of radius $R$, with electrons embedded in it. What is the self-energy?

### Solution

For a uniform sphere of charge $Q = Ze$:

$$U_{\\text{self}} = \\frac{3k(Ze)^2}{5R}$$

### Electron at Center

An electron at the center of this distribution has PE:

$$U_e = (-e)V(0) = (-e)\\frac{3kZe}{2R} = -\\frac{3kZe^2}{2R}$$

(We used $V(0) = 3kQ/(2R)$ for a uniform sphere.)

### Binding Energy

The total energy of the electron at the center:

$$U_{\\text{total}} = -\\frac{3kZe^2}{2R}$$

For hydrogen ($Z = 1$) with $R \\sim 10^{-10}\\;\\text{m}$:

$$U_e = -\\frac{3(8.99\\times10^9)(1.6\\times10^{-19})^2}{2(10^{-10})} \\approx -3.5\\times10^{-18}\\;\\text{J} \\approx -21.6\\;\\text{eV}$$

This is the right order of magnitude for atomic binding ($13.6\\;\\text{eV}$ for hydrogen), showing the model isn't entirely wrong energetically.`
    },
    {
      id: 'pe7-mcq2',
      type: 'mcq' as const,
      question: 'The potential at the center of a uniformly charged sphere (total charge $Q$, radius $R$) is:',
      options: [
        '$3kQ/(2R)$',
        '$kQ/R$',
        '$kQ/(2R)$',
        '$2kQ/R$'
      ],
      correctAnswer: 0,
      explanation: '$V(0) = \\frac{kQ}{2R}(3 - 0) = 3kQ/(2R)$, using $V(r) = \\frac{kQ}{2R}(3 - r^2/R^2)$ for $r \\leq R$.'
    },
    {
      id: 'pe7-worked2',
      type: 'text' as const,
      content: `## Application 2: Energy to Charge a Capacitor from a Battery

A battery ($\\mathcal{E} = V$) charges a capacitor $C$ from $0$ to $V$.

### Energy from Battery

The battery delivers charge $Q = CV$ at voltage $V$:

$$W_{\\text{battery}} = QV = CV^2$$

### Energy Stored in Capacitor

$$U_C = \\frac{1}{2}CV^2$$

### Energy Dissipated

$$W_{\\text{dissipated}} = CV^2 - \\frac{1}{2}CV^2 = \\frac{1}{2}CV^2$$

**Exactly half** the energy from the battery is lost to heat in the wires, regardless of resistance! This can be proven by integrating:

$$W_{\\text{heat}} = \\int_0^\\infty i^2 R\\,dt$$

For an RC circuit, $i = (V/R)e^{-t/(RC)}$:

$$W_{\\text{heat}} = \\frac{V^2}{R}\\int_0^\\infty e^{-2t/(RC)}dt = \\frac{V^2}{R}\\cdot\\frac{RC}{2} = \\frac{1}{2}CV^2$$`
    },
    {
      id: 'pe7-mcq3',
      type: 'mcq' as const,
      question: 'A $100\\;\\mu\\text{F}$ capacitor charged by a $12\\;\\text{V}$ battery. Energy dissipated in the wires during charging:',
      options: [
        '$7.2\\;\\text{mJ}$',
        '$14.4\\;\\text{mJ}$',
        '$0\\;\\text{mJ}$',
        '$3.6\\;\\text{mJ}$'
      ],
      correctAnswer: 0,
      explanation: '$W_{\\text{heat}} = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-4})(144) = 7.2\\times10^{-3}\\;\\text{J} = 7.2\\;\\text{mJ}$. Equal to the energy stored in the capacitor.'
    },
    {
      id: 'pe7-classical-radius',
      type: 'text' as const,
      content: `## Application 3: Classical Electron Radius

If all the rest energy of an electron ($m_e c^2$) were stored as electrostatic self-energy:

$$\\frac{ke^2}{2r_e} = m_e c^2$$

$$r_e = \\frac{ke^2}{2m_e c^2} = \\frac{(8.99\\times10^9)(1.6\\times10^{-19})^2}{2(9.11\\times10^{-31})(3\\times10^8)^2}$$

$$= \\frac{2.30\\times10^{-28}}{1.64\\times10^{-13}} = 1.41\\times10^{-15}\\;\\text{m}$$

This is the **classical electron radius** $r_e \\approx 2.82\\;\\text{fm}$ (the conventional definition uses $ke^2/(m_e c^2)$ without the $1/2$).

While not the actual size of the electron (which is a point particle in the Standard Model), it sets the scale where classical electromagnetism fails and quantum effects dominate.`
    },
    {
      id: 'pe7-mcq4',
      type: 'mcq' as const,
      question: 'The classical electron radius $r_e = ke^2/(m_e c^2)$ is approximately:',
      options: [
        '$2.8\\;\\text{fm}$ — comparable to nuclear sizes',
        '$0.053\\;\\text{nm}$ — the Bohr radius',
        '$10^{-18}\\;\\text{m}$ — subnuclear',
        '$1\\;\\text{pm}$ — atomic scale'
      ],
      correctAnswer: 0,
      explanation: '$r_e \\approx 2.82\\times10^{-15}\\;\\text{m} = 2.82\\;\\text{fm}$, which is on the order of nuclear sizes. This is much smaller than the atom ($10^{-10}\\;\\text{m}$).'
    },
    {
      id: 'pe7-completion',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered **Electric Potential Energy** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | PE of point charges | ✅ |
| 2 | $U = qV$ | ✅ |
| 3 | PE of charge configurations | ✅ |
| 4 | Energy stored in $E$ field | ✅ |
| 5 | Calculating PE via integration | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** Electric potential energy stores the work needed to assemble a charge configuration. It can be computed from pair sums ($kq_iq_j/r$), from potential ($U = qV$), or from the field energy density ($\\epsilon_0 E^2/2$). Energy conservation with $K + U = \\text{const}$ is one of the most powerful tools in electrostatics.`
    }
  ]
};
