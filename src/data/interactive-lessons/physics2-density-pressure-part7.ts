export const physics2DensityPressurePart7Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp7-intro',
      type: 'text' as const,
      content: `
# 🏆 Density & Pressure — Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

Let's tie together everything from Parts 1-6 with cumulative problems, common misconceptions, and AP exam strategies.
      `
    },
    {
      id: 'dp7-concept-map',
      type: 'text' as const,
      content: `
## Concept Map — Everything Connected

$$\\text{Density } (\\rho = m/V) \\longrightarrow \\text{Pressure } (P = F/A)$$
$$\\downarrow$$
$$\\text{Depth } (P = P_0 + \\rho g h) \\longrightarrow \\text{Pascal's Law}$$
$$\\downarrow$$
$$\\text{Hydraulics } (F_1/A_1 = F_2/A_2) \\longrightarrow \\text{Manometers}$$
$$\\downarrow$$
$$\\text{Floating } (\\text{fraction} = \\rho_{\\text{obj}}/\\rho_{\\text{fluid}}) \\longrightarrow \\text{Buoyancy (next topic!)}$$

### The Big Ideas

1. **Pressure is a scalar** — it acts equally in all directions at a point
2. **Pressure increases with depth** — linearly, at rate $\\rho g$ per meter
3. **Shape doesn't matter** — only depth determines pressure (hydrostatic paradox)
4. **Pascal's Law** — pressure changes transmit throughout a fluid
5. **Density ratios** predict floating behavior
      `
    },
    {
      id: 'dp7-common-mistakes',
      type: 'text' as const,
      content: `
## Top 5 AP Mistakes for Density & Pressure

### 1. Gauge vs. Absolute
- "The pressure at 10 m depth" — is this gauge or absolute? Read carefully!
- Default on AP: usually asking for **absolute** unless stated otherwise

### 2. Units
- Density: must be in $kg/m^{3}$ $(not g/cm^{3})$ for SI calculations
- Pressure: Pa = $N/m^{2}$ (not kPa, not atm, unless specified)

### 3. Depth Direction
- $h$ is measured **downward from the surface**, not upward from the bottom
- In a closed container with pressurized gas above, $P_0 \\neq P_{\\text{atm}}$

### 4. The Shape Trap
- Students think wider containers have more pressure at the bottom — they don't!
- Pressure depends only on $\\rho$, $g$, and $h$

### 5. Forgetting the Atmosphere
- Unless the problem says "gauge" or the container is sealed with a specific pressure, assume the surface is at $P_{\\text{atm}}$
      `
    },
    {
      id: 'dp7-synthesis-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** — Multi-concept questions
      `,
      exercise: {
        questions: [
          {
            question: 'A sealed tank of water is pressurized to 3 atm at the surface. At 5 m depth, the absolute pressure is approximately:',
            options: [
              '3 atm',
              '3.5 atm',
              '4 atm',
              '1.5 atm'
            ],
            correctAnswer: 1,
            explanation: '$P = P_0 + \\rho g h = 3 \\times 10^5 + (1000)(10)(5) = 350{,}000$ Pa ≈ 3.5 atm. The surface pressure is 3 atm (not 1 atm) because the tank is pressurized.'
          },
          {
            question: 'A hydraulic lift can raise a 2000 kg car. The mechanic pushes with 200 N. What minimum area ratio ($A_2/A_1$) is needed?',
            options: [
              '10',
              '100',
              '1000',
              '50'
            ],
            correctAnswer: 1,
            explanation: 'Car weight = $2000 \\times 10 = 20{,}000$ N. $A_2/A_1 = F_2/F_1 = 20{,}000/200 = 100$.'
          },
          {
            question: 'Oil (SG = 0.85) and water are in a U-tube. The oil column is 34 cm tall. The water column height is:',
            options: [
              '40 cm',
              '34 cm',
              '28.9 cm',
              '25 cm'
            ],
            correctAnswer: 2,
            explanation: 'Equal pressures at the interface: $\\rho_{\\text{oil}} g h_{\\text{oil}} = \\rho_w g h_w$. So $h_w = h_{\\text{oil}} \\times (\\rho_{\\text{oil}}/\\rho_w) = 34 \\times 0.85 = 28.9$ cm.'
          },
          {
            question: 'A 500 $cm^{3}$ object has mass 350 g. It is placed in water. What happens?',
            options: [
              'Sinks — density is greater than water',
              'Floats with 70% submerged',
              'Floats with 30% submerged',
              'Neutrally buoyant'
            ],
            correctAnswer: 1,
            explanation: '$\\rho = 350/500 = 0.70$ $g/cm^{3}$ = 700 $kg/m^{3}$. Since 700 < 1000, it floats. Fraction submerged = 700/1000 = 70%.'
          }
        ]
      }
    },
    {
      id: 'dp7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Final Mixed Drill** (use $g = 10$ $m/s^{2}$, $P_{\\text{atm}} = 10^5$ Pa)

1) Pressure at 25 m depth in a lake (absolute, in Pa)

2) A 0.004 $m^{3}$ block of wood $(density 600 kg/m^{3})$ floats. Volume above water $(in m^{3})$

3) Force needed on a 0.002 $m^{2}$ piston to hold back water at 15 m depth (gauge force, in N)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['350000', '0.0016', '300'],
        hint1: '$P = 10^5 + (1000)(10)(25) = 10^5 + 250{,}000$.',
        hint2: 'Fraction submerged = 600/1000 = 0.6. Above water = $0.004 \\times 0.4$.',
        hint3: '$P_{\\text{gauge}} = \\rho g h = (1000)(10)(15) = 150{,}000$ Pa. $F = P \\times A$.',
        explanation: '1) $P = 350{,}000$ Pa. 2) 40% above water: $0.004 \\times 0.4 = 0.0016$ $m^{3}$. 3) $F = (150{,}000)(0.002) = 300$ N.'
      }
    },
    {
      id: 'dp7-final-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exam-Style Questions**
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "Pressure at the bottom of a swimming pool is greater near the drain because all the water flows there." Is this correct?',
            options: [
              'Yes — more water near the drain means more pressure',
              'No — in a static fluid, pressure depends only on depth, not on horizontal position',
              'Yes — the drain creates extra suction',
              'It depends on the pool shape'
            ],
            correctAnswer: 1,
            explanation: 'In a static fluid (or nearly static), pressure at the same depth is the same everywhere. The drain\'s location doesn\'t change the hydrostatic pressure. (If water is flowing, there\'s a slight dynamic effect, but for AP purposes, the answer is clear.)'
          },
          {
            question: 'You pour 1 liter of oil (SG = 0.80) into 1 liter of water. After settling, the total height of liquid in a cylindrical container of cross-section 0.01 $m^{2}$ is:',
            options: [
              '0.10 m',
              '0.15 m',
              '0.20 m',
              '0.25 m'
            ],
            correctAnswer: 2,
            explanation: 'Total volume = 2 liters = 0.002 $m^{3}$. Height = $V/A = 0.002/0.01 = 0.20$ m. The oil floats on top of the water, but the total height depends only on total volume and cross-section area.'
          }
        ]
      }
    }
  ]
}
