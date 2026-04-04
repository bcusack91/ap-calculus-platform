export const physics2CurrentResistancePart2Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `
# 🔌 Resistance & Resistivity

**Part 2 of 7 — Why Charges Slow Down**

Current doesn't flow freely — every material resists it to some degree. Understanding **resistance** and **resistivity** lets you predict how much current a given voltage will push through any conductor.
      `
    },
    {
      id: 'cr2-resistance',
      type: 'text' as const,
      content: `
## What Is Resistance?

**Resistance** measures how much a material opposes the flow of electric current.

$$R = \\frac{V}{I}$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $R$ | Resistance | Ohm ($\\Omega$) |
| $V$ | Voltage | Volt (V) |
| $I$ | Current | Ampere (A) |

$$1 \\;\\Omega = 1 \\;\\text{V/A}$$

### Physical Picture

Think of resistance like friction for charges. As electrons drift through a conductor, they collide with the vibrating lattice of atoms. Each collision:
- Transfers kinetic energy to the lattice (→ heat)
- Slows the electron down before the electric field accelerates it again

More collisions → more resistance → less current for a given voltage.
      `
    },
    {
      id: 'cr2-resistivity',
      type: 'text' as const,
      content: `
## Resistivity and the Resistance Formula

Resistance depends on both the **material** and the **geometry** of the conductor:

$$R = \\frac{\\rho L}{A}$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $\\rho$ | Resistivity | $\\Omega \\cdot \\text{m}$ |
| $L$ | Length | m |
| $A$ | Cross-sectional area | m² |

### What Each Factor Does

| Change | Effect on $R$ | Why? |
|--------|---------------|------|
| Longer wire | $R$ increases | More material for electrons to travel through |
| Thicker wire | $R$ decreases | More "lanes" for electrons to flow |
| Higher $\\rho$ | $R$ increases | Material itself resists more |

### Typical Resistivities (at 20°C)

| Material | $\\rho$ ($\\Omega \\cdot \\text{m}$) | Type |
|----------|------|------|
| Silver | $1.59 \\times 10^{-8}$ | Conductor |
| Copper | $1.68 \\times 10^{-8}$ | Conductor |
| Aluminum | $2.65 \\times 10^{-8}$ | Conductor |
| Nichrome | $1.10 \\times 10^{-6}$ | Alloy (heating elements) |
| Silicon | $640$ | Semiconductor |
| Glass | $10^{10}$ – $10^{14}$ | Insulator |
| Rubber | $\\sim 10^{13}$ | Insulator |

### Conductors vs. Insulators vs. Semiconductors

- **Conductors** ($\\rho \\sim 10^{-8}$): many free electrons, very low resistance
- **Semiconductors** ($\\rho \\sim 10^{-1}$ to $10^{3}$): few free carriers at room temp; resistance decreases with temperature
- **Insulators** ($\\rho > 10^{8}$): almost no free carriers, extremely high resistance
      `
    },
    {
      id: 'cr2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Resistance Concepts Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A wire is replaced by one that is twice as long and has twice the diameter. The new resistance is:',
            options: [
              'The same as before',
              'Half the original',
              'Twice the original',
              'Four times the original'
            ],
            correctAnswer: 1,
            explanation: '$R = \\rho L/A$. Doubling length: $L \\to 2L$ (×2). Doubling diameter: $A = \\pi(d/2)^2 \\to \\pi(2d/2)^2 = 4A$ (×4). Net: $R \\to 2R/4 = R/2$. The new resistance is half.'
          },
          {
            question: 'Which material would make the best wire for carrying current with minimal energy loss?',
            options: [
              'Nichrome ($\\rho = 1.10 \\times 10^{-6}$ $\\Omega\\cdot$m)',
              'Copper ($\\rho = 1.68 \\times 10^{-8}$ $\\Omega\\cdot$m)',
              'Silicon ($\\rho = 640$ $\\Omega\\cdot$m)',
              'Glass ($\\rho \\sim 10^{12}$ $\\Omega\\cdot$m)'
            ],
            correctAnswer: 1,
            explanation: 'Lower resistivity means less resistance and less energy loss. Copper has the lowest $\\rho$ among the choices (silver is even lower but more expensive).'
          }
        ]
      }
    },
    {
      id: 'cr2-proportionality',
      type: 'dropdown-select' as const,
      content: `
**Resistance Proportionality Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the length of a wire is tripled, resistance becomes',
            options: ['one-third', 'unchanged', '3× bigger', '9× bigger']
          },
          {
            label: 'If the diameter is doubled (area quadruples), resistance becomes',
            options: ['one-fourth', 'one-half', '2× bigger', '4× bigger']
          },
          {
            label: 'If the wire is stretched to twice its length (volume constant), resistance becomes',
            options: ['unchanged', '2× bigger', '4× bigger', '8× bigger']
          }
        ],
        correctAnswers: ['3× bigger', 'one-fourth', '4× bigger'],
        hint1: '$R \\propto L$. Tripling length triples resistance.',
        hint2: '$R \\propto 1/A$. Quadrupling area gives one-fourth the resistance.',
        hint3: 'Stretching to $2L$ at constant volume means $A \\to A/2$. So $R \\to \\rho(2L)/(A/2) = 4\\rho L/A = 4R$.',
        explanation: '$R = \\rho L/A$. Direct proportionality with $L$, inverse with $A$. Stretching changes both $L$ and $A$.'
      }
    },
    {
      id: 'cr2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Resistance Calculation Drill** 🔧

Use $\\rho_{\\text{Cu}} = 1.68 \\times 10^{-8}$ $\\Omega\\cdot$m.

1) A copper wire is 10.0 m long with cross-sectional area $2.0 \\times 10^{-6}$ m². What is its resistance? (in $\\Omega$)

2) A copper wire has resistance 0.50 $\\Omega$ and length 5.0 m. What is its cross-sectional area? (in m², scientific notation like 1.7e-7)

3) You need a copper wire with resistance exactly 1.0 $\\Omega$ and diameter 1.0 mm. How long must it be? (in m, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.084', '1.68e-7', '47'],
        hint1: '$R = \\rho L / A = (1.68 \\times 10^{-8})(10.0) / (2.0 \\times 10^{-6})$.',
        hint2: '$A = \\rho L / R = (1.68 \\times 10^{-8})(5.0) / 0.50$.',
        hint3: '$L = RA/\\rho$. Area = $\\pi(d/2)^2 = \\pi(0.0005)^2 = 7.85 \\times 10^{-7}$ m². $L = (1.0)(7.85 \\times 10^{-7}) / (1.68 \\times 10^{-8})$.',
        explanation: '1) $R = (1.68 \\times 10^{-8})(10) / (2 \\times 10^{-6}) = 0.084$ $\\Omega$. 2) $A = (1.68 \\times 10^{-8})(5) / 0.50 = 1.68 \\times 10^{-7}$ m². 3) $A = \\pi(5 \\times 10^{-4})^2 = 7.85 \\times 10^{-7}$ m². $L = (1.0)(7.85 \\times 10^{-7}) / (1.68 \\times 10^{-8}) = 46.7 \\approx 47$ m.'
      }
    },
    {
      id: 'cr2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'The resistance of a semiconductor (like silicon) as temperature increases will:',
            options: [
              'Increase (more collisions)',
              'Decrease (more charge carriers are freed)',
              'Stay the same',
              'First increase, then decrease'
            ],
            correctAnswer: 1,
            explanation: 'In semiconductors, higher temperature frees more charge carriers from the lattice. The increase in carriers outweighs the increase in collisions, so resistance decreases.'
          },
          {
            question: 'Two wires of the same material have the same resistance. Wire A is twice as long as Wire B. The ratio of their diameters $d_A / d_B$ is:',
            options: [
              '$1$',
              '$\\sqrt{2}$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: '$R = \\rho L / A$. Same $R$ and $\\rho$: $L_A / A_A = L_B / A_B$. $A_A = A_B (L_A / L_B) = 2A_B$. Since $A \\propto d^2$: $d_A^2 = 2 d_B^2$, so $d_A / d_B = \\sqrt{2}$.'
          }
        ]
      }
    }
  ]
}
