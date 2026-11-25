export const physCEMPwrCircPart5Data = {
  topicSlug: "power-circuits-physics-c-em",
  sections: [
    {
      id: 'pwr5-intro',
      type: 'text' as const,
      content: `# Energy Conservation in Circuits

**Part 5 of 7 — Poynting Vector and Energy Flow**

### Conservation of Energy: The Integral Form

In any circuit, the total power delivered by all EMF sources equals the total power dissipated:

$$\\sum_{\\text{sources}} \\mathcal{E}_k I_k = \\sum_{\\text{resistors}} I_j^2 R_j + \\frac{d}{dt}\\left(\\frac{1}{2}LI^2\\right) + \\frac{d}{dt}\\left(\\frac{1}{2}CV^2\\right)$$

The right side includes:
- Resistive dissipation (irreversible)
- Energy stored in inductors (magnetic field)
- Energy stored in capacitors (electric field)

### Energy Density in Fields

| Field | Energy Density |
|:---:|:---:|
| Electric | $u_E = \\frac{1}{2}\\epsilon_0 E^2$ |
| Magnetic | $u_B = \\frac{B^2}{2\\mu_0}$ |

Total energy stored:

$$U = \\int \\left(\\frac{1}{2}\\epsilon_0 E^2 + \\frac{B^2}{2\\mu_0}\\right) dV$$`
    },
    {
      id: 'pwr5-mcq1',
      type: 'mcq' as const,
      question: 'A 2 H inductor carries 3 A. The energy stored in its magnetic field is:',
      options: ['9 J', '3 J', '6 J', '18 J'],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(2)(9) = 9$ J.'
    },
    {
      id: 'pwr5-dissipation',
      type: 'text' as const,
      content: `### Energy Dissipated vs. Energy Stored

In an RL circuit with constant EMF $\\mathcal{E}$:

$$\\mathcal{E} = IR + L\\frac{dI}{dt}$$

Multiplying both sides by $I$:

$$\\underbrace{\\mathcal{E}I}_{\\text{source}} = \\underbrace{I^2R}_{\\text{dissipated}} + \\underbrace{LI\\frac{dI}{dt}}_{\\text{stored}} = I^2R + \\frac{d}{dt}\\left(\\frac{1}{2}LI^2\\right)$$

### Total Energy Budget Over Time

For an RL circuit charging from $t = 0$:

- Final current: $I_f = \\mathcal{E}/R$
- Energy stored: $U_L = \\frac{1}{2}LI_f^2 = \\frac{L\\mathcal{E}^2}{2R^2}$
- Once $I = I_f$ the inductor stores no more energy, but the resistor keeps dissipating $\\mathcal{E}I_f = \\mathcal{E}^2/R$ every second for as long as the source stays connected
- If the source is then removed and the current decays through $R$: $U_R = U_L = \\frac{L\\mathcal{E}^2}{2R^2}$

> Unlike an RC circuit, an RL circuit never stops drawing current, so there is no "half stored, half dissipated" split while charging. All of the stored $U_L$ is dissipated in $R$ when the current decays.`
    },
    {
      id: 'pwr5-mcq2',
      type: 'mcq' as const,
      question: 'An RL circuit with $\\mathcal{E} = 10$ V, $R = 5\\,\\Omega$, $L = 0.2$ H reaches steady state. The battery is then removed and the current decays through $R$. The total energy dissipated in $R$ during the decay is:',
      options: ['0.4 J', '0.2 J', '0.8 J', '2 J'],
      correctAnswer: 0,
      explanation: '$I_f = 10/5 = 2$ A, so the inductor stores $U_L = \\frac{1}{2}(0.2)(4) = 0.4$ J. With no source, that stored energy is the only energy available, and all of it ends up as heat in $R$: $U_R = U_L = 0.4$ J.'
    },
    {
      id: 'pwr5-poynting',
      type: 'text' as const,
      content: `### The Poynting Vector (Advanced)

Energy in electromagnetic fields flows according to the **Poynting vector**:

$$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$$

$\\vec{S}$ has units of $W/m^{2}$ and represents the power per unit area flowing through a surface.

### Poynting's Theorem

$$-\\frac{dU}{dt} = \\oint \\vec{S} \\cdot d\\vec{A} + \\int \\vec{J} \\cdot \\vec{E}\\,dV$$

where:
- $-dU/dt$ = rate of decrease of field energy
- $\\oint \\vec{S} \\cdot d\\vec{A}$ = power flowing out through the surface
- $\\int \\vec{J} \\cdot \\vec{E}\\,dV$ = power dissipated (Joule heating)

### Example: Resistive Wire

For a cylindrical resistor of length $\\ell$ and radius $a$:
- $E$ is along the wire: $E = V/\\ell$
- $B$ is circumferential: $B = \\mu_0 I/(2\\pi a)$
- $\\vec{S}$ points **radially inward**

$$P = |S| \\cdot (2\\pi a \\ell) = \\frac{V}{\\ell} \\cdot \\frac{\\mu_0 I}{2\\pi a \\mu_0} \\cdot 2\\pi a \\ell = IV \\quad \\checkmark$$`
    },
    {
      id: 'pwr5-mcq3',
      type: 'mcq' as const,
      question: 'The Poynting vector near a current-carrying resistor points:',
      options: ['Radially inward toward the wire', 'Along the wire in the direction of current', 'Radially outward from the wire', 'Opposite to the current direction'],
      correctAnswer: 0,
      explanation: '$\\vec{E}$ is along the wire and $\\vec{B}$ is circumferential. $\\vec{S} = \\vec{E} \\times \\vec{B}/\\mu_0$ points radially inward—energy flows from the fields into the wire where it is dissipated.'
    },
    {
      id: 'pwr5-mcq4',
      type: 'mcq' as const,
      question: 'In an LC circuit oscillating with $C = 10\\,\\mu F$ and peak voltage 100 V, the maximum energy stored in the inductor is:',
      options: ['0.05 J', '0.1 J', '0.025 J', '0.5 J'],
      correctAnswer: 0,
      explanation: 'Total energy $= \\frac{1}{2}CV_{\\max}^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05$ J. At max inductor energy, all energy is magnetic, so $U_L = 0.05$ J.'
    },
    {
      id: 'pwr5-summary',
      type: 'text' as const,
      content: `### Summary — Part 5

| Principle | Expression |
|:---:|:---:|
| Power balance | $\\mathcal{E}I = I^2R + \\frac{d}{dt}(\\frac{1}{2}LI^2)$ |
| RL decay (source removed) | $U_R = U_L = \\frac{L\\mathcal{E}^2}{2R^2}$ |
| Poynting vector | $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$ |
| Energy density | $u = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$ |

> **Next up:** Problem-solving workshop — Part 6.`
    }
  ]
};
