export const physics2CurrentResistancePart4Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `
# 🌡️ Resistivity & Temperature

**Part 4 of 7 — Why Hot Wires Resist More**

Resistance isn't fixed — it changes with temperature. Understanding this relationship is essential for designing circuits that work reliably and for understanding exotic phenomena like superconductivity.
      `
    },
    {
      id: 'cr4-temp-dependence',
      type: 'text' as const,
      content: `
## Temperature Dependence of Resistivity

For most metals, resistivity increases approximately linearly with temperature:

$$\\rho = \\rho_0 \\bigl(1 + \\alpha \\Delta T\\bigr)$$

| Symbol | Meaning |
|--------|---------|
| $\\rho$ | Resistivity at temperature $T$ |
| $\\rho_0$ | Resistivity at reference temperature $T_0$ (usually 20°C) |
| $\\alpha$ | Temperature coefficient of resistivity (°C⁻¹) |
| $\\Delta T$ | $T - T_0$ (temperature change) |

Since $R = \\rho L/A$ and the geometry changes are usually negligible:

$$R = R_0 \\bigl(1 + \\alpha \\Delta T\\bigr)$$

### Typical Temperature Coefficients

| Material | $\\alpha$ (°C⁻¹) |
|----------|------|
| Silver | $3.8 \\times 10^{-3}$ |
| Copper | $3.9 \\times 10^{-3}$ |
| Aluminum | $3.9 \\times 10^{-3}$ |
| Tungsten | $4.5 \\times 10^{-3}$ |
| Nichrome | $0.4 \\times 10^{-3}$ |
| Carbon | $-0.5 \\times 10^{-3}$ |
| Silicon | $-75 \\times 10^{-3}$ |

### Why Metals Have Positive $\\alpha$

Higher temperature → atoms vibrate more → more collisions with drifting electrons → higher resistivity.

### Why Semiconductors Have Negative $\\alpha$

Higher temperature → more electrons gain enough energy to become free carriers → **more** charge carriers → lower resistivity (despite more collisions).
      `
    },
    {
      id: 'cr4-superconductors',
      type: 'text' as const,
      content: `
## Superconductors

At very low temperatures, some materials have their resistance drop to **exactly zero**.

### Key Facts

- Below a **critical temperature** $T_c$, resistance = 0
- Current flows indefinitely with no energy loss
- Mercury: $T_c = 4.2$ K (discovered 1911)
- High-temperature superconductors: $T_c \\sim 90$–$130$ K (still very cold!)
- Applications: MRI magnets, particle accelerators, maglev trains

### Practical Wire Sizing (AWG)

**American Wire Gauge (AWG)** is the standard system for wire sizes in the US:

| AWG | Diameter (mm) | Typical Use |
|-----|--------------|-------------|
| 14 | 1.63 | 15 A circuits (lighting) |
| 12 | 2.05 | 20 A circuits (outlets) |
| 10 | 2.59 | 30 A circuits (dryers) |
| 6 | 4.11 | 60 A circuits (ranges) |

**Smaller AWG number = thicker wire = lower resistance = higher current capacity.**

Why does wire gauge matter? If a wire is too thin for the current it carries, $P = I^2 R$ causes excessive heating — a fire hazard!
      `
    },
    {
      id: 'cr4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Temperature & Resistance Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A light bulb filament (tungsten, $\\alpha = 4.5 \\times 10^{-3}$ °C⁻¹) has resistance 20 $\\Omega$ at 20°C. When operating at 2500°C, its resistance is closest to:',
            options: [
              '40 $\\Omega$',
              '120 $\\Omega$',
              '240 $\\Omega$',
              '500 $\\Omega$'
            ],
            correctAnswer: 2,
            explanation: '$R = R_0(1 + \\alpha \\Delta T) = 20(1 + 0.0045 \\times 2480) = 20(1 + 11.16) = 20(12.16) = 243$ $\\Omega \\approx 240$ $\\Omega$.'
          },
          {
            question: 'Nichrome ($\\alpha = 0.4 \\times 10^{-3}$ °C⁻¹) is used in heating elements because:',
            options: [
              'It has very low resistance',
              'Its resistance changes very little with temperature',
              'It is a superconductor',
              'It has negative temperature coefficient'
            ],
            correctAnswer: 1,
            explanation: 'Nichrome has a very small $\\alpha$, so its resistance stays nearly constant even when glowing red-hot. This makes the heating element predictable and stable.'
          },
          {
            question: 'A superconductor below its critical temperature has:',
            options: [
              'Very low but nonzero resistance',
              'Exactly zero resistance',
              'Negative resistance',
              'Infinite resistance'
            ],
            correctAnswer: 1,
            explanation: 'Below $T_c$, resistance drops to exactly zero — not just very small, but truly zero. Current can circulate indefinitely without any energy loss.'
          }
        ]
      }
    },
    {
      id: 'cr4-temp-drill',
      type: 'input-boxes' as const,
      content: `
**Temperature-Resistance Drill** 🌡️

1) A copper wire ($\\alpha = 3.9 \\times 10^{-3}$ °C⁻¹) has resistance 5.0 $\\Omega$ at 20°C. What is its resistance at 120°C? (in $\\Omega$)

2) An aluminum wire ($\\alpha = 3.9 \\times 10^{-3}$ °C⁻¹) has resistance 10.0 $\\Omega$ at 20°C. At what temperature will its resistance be 15.0 $\\Omega$? (in °C)

3) A carbon resistor ($\\alpha = -0.5 \\times 10^{-3}$ °C⁻¹) has resistance 1000 $\\Omega$ at 20°C. What is its resistance at 220°C? (in $\\Omega$)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.95', '148', '900', '6.950'],
        hint1: '$R = R_0(1 + \\alpha \\Delta T) = 5.0(1 + 0.0039 \\times 100)$.',
        hint2: '$15 = 10(1 + 0.0039 \\Delta T)$. Solve for $\\Delta T$, then add to 20°C.',
        hint3: '$R = 1000(1 + (-0.0005)(200)) = 1000(1 - 0.1)$.',
        explanation: '1) $R = 5.0(1 + 0.0039 \\times 100) = 5.0(1.39) = 6.95$ $\\Omega$. 2) $1.5 = 1 + 0.0039\\Delta T$ → $\\Delta T = 0.5/0.0039 = 128$ °C → $T = 20 + 128 = 148$ °C. 3) $R = 1000(1 - 0.1) = 900$ $\\Omega$.'
      }
    },
    {
      id: 'cr4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'As a metal wire carries current, it heats up. This causes:',
            options: [
              'The current to increase (positive feedback)',
              'The resistance to increase, reducing the current (negative feedback)',
              'No change in current',
              'The wire to become a superconductor'
            ],
            correctAnswer: 1,
            explanation: 'Metals have positive $\\alpha$: heating increases resistance. By Ohm\'s law ($I = V/R$), higher $R$ means lower $I$. This is negative feedback — the system partially self-corrects.'
          },
          {
            question: 'A household circuit uses 14 AWG wire rated for 15 A. If you run 20 A through it, the main concern is:',
            options: [
              'The voltage will drop to zero',
              'Excessive $I^2R$ heating could start a fire',
              'The wire will become a superconductor',
              'The electrons will run out'
            ],
            correctAnswer: 1,
            explanation: 'Too much current through a wire with finite resistance causes excessive Joule heating ($P = I^2R$). The wire can overheat and potentially start a fire — this is exactly why circuit breakers exist.'
          }
        ]
      }
    }
  ]
}
