export const physics2PhaseChangesPart2Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc2-intro',
      type: 'text' as const,
      content: `
# 🔥 Latent Heat

**Part 2 of 7 — Energy Without Temperature Change**

When a substance undergoes a phase change, energy is absorbed or released **without any change in temperature**. This energy is called **latent heat** (from Latin *latere* — "to lie hidden").

### The Latent Heat Equation

$$Q = mL$$

where:
- $Q$ = heat energy absorbed or released (J)
- $m$ = mass of the substance (kg)
- $L$ = **specific latent heat** (J/kg) — depends on the substance and the type of phase change
      `
    },
    {
      id: 'pc2-types',
      type: 'text' as const,
      content: `
## Two Types of Latent Heat

### Latent Heat of Fusion ($L_f$)
Energy per kilogram to **melt** a solid (or released when freezing):

$$Q_{\\text{fusion}} = m L_f$$

For water: $L_f = 334{,}000$ J/kg = $3.34 \\times 10^5$ J/kg

### Latent Heat of Vaporization ($L_v$)
Energy per kilogram to **vaporize** a liquid (or released when condensing):

$$Q_{\\text{vaporization}} = m L_v$$

For water: $L_v = 2{,}260{,}000$ J/kg = $2.26 \\times 10^6$ J/kg

### Why is $L_v \\gg L_f$?

Vaporization requires **much more** energy than fusion because:
- Melting only loosens intermolecular bonds (molecules still stay close)
- Vaporization must **completely separate** molecules against attractive forces
- For water: $L_v / L_f \\approx 6.8$ — vaporization takes almost 7× more energy!

### Sign Convention
- **Phase change requiring energy** (melting, vaporization): $Q > 0$
- **Phase change releasing energy** (freezing, condensation): $Q < 0$
      `
    },
    {
      id: 'pc2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Latent Heat Concepts** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the temperature remain constant during a phase change?',
            options: [
              'No energy is being transferred',
              'The specific heat capacity becomes infinite',
              'All energy goes into breaking/forming intermolecular bonds rather than changing kinetic energy',
              'The substance reaches thermal equilibrium with its surroundings'
            ],
            correctAnswer: 2,
            explanation: 'During a phase change, the added energy goes into overcoming intermolecular forces (potential energy) rather than increasing the average kinetic energy of molecules. Since temperature is a measure of average kinetic energy, it stays constant.'
          },
          {
            question: 'The latent heat of vaporization of water is about 6.8 times larger than its latent heat of fusion because:',
            options: [
              'Water molecules are heavier than ice molecules',
              'Boiling occurs at a higher temperature than melting',
              'Vaporization requires completely separating molecules, while melting only loosens their arrangement',
              'Steam occupies more volume than liquid water'
            ],
            correctAnswer: 2,
            explanation: 'Melting only disrupts the rigid crystal structure — molecules remain close together. Vaporization must completely overcome all intermolecular attractions and separate molecules to large distances, requiring far more energy.'
          }
        ]
      }
    },
    {
      id: 'pc2-why-constant',
      type: 'text' as const,
      content: `
## Why Temperature Stays Constant — A Closer Look

Consider heating ice at exactly 0°C:

1. You add energy → some ice melts
2. The liquid water formed is also at 0°C
3. As long as both ice and water coexist, the temperature stays at 0°C
4. Only after ALL ice has melted does the temperature begin to rise

### The Microscopic View

- **Temperature** measures the average **kinetic energy** of molecules
- During a phase change, added energy increases **potential energy** (breaking bonds)
- Since kinetic energy doesn't change → temperature doesn't change

### How Long Does It Take?

If you supply heat at a constant rate $P$ (power in watts):

$$t = \\frac{Q}{P} = \\frac{mL}{P}$$

**Example**: How long to melt 2.0 kg of ice with a 500 W heater?

$$t = \\frac{(2.0)(334{,}000)}{500} = \\frac{668{,}000}{500} = 1336 \\text{ s} \\approx 22.3 \\text{ min}$$
      `
    },
    {
      id: 'pc2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Latent Heat Calculations** 🔢

Use: $L_f = 334{,}000$ J/kg, $L_v = 2{,}260{,}000$ J/kg for water.

1) Energy needed to melt 0.50 kg of ice at 0°C (in kJ)

2) Energy released when 3.0 kg of steam at 100°C condenses to water at 100°C (in MJ)

3) Mass of ice at 0°C that can be melted by 1.00 MJ of energy (in kg)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['167', '6.78', '2.99'],
        hint1: '$Q = mL_f = (0.50)(334{,}000)$. Convert J to kJ by dividing by 1000.',
        hint2: '$Q = mL_v = (3.0)(2{,}260{,}000)$. Convert J to MJ by dividing by $10^6$.',
        hint3: '$m = Q/L_f = 1{,}000{,}000 / 334{,}000$.',
        explanation: '1) $Q = (0.50)(334{,}000) = 167{,}000$ J = **167 kJ**. 2) $Q = (3.0)(2{,}260{,}000) = 6{,}780{,}000$ J = **6.78 MJ**. 3) $m = 1{,}000{,}000/334{,}000 = 2.994$ kg ≈ **2.99 kg**.'
      }
    },
    {
      id: 'pc2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'You add 668 kJ of heat to 1.0 kg of ice at 0°C. What is the final state? ($L_f = 334$ kJ/kg, $c_w = 4{,}186$ J/(kg·°C))',
            options: [
              '1.0 kg of water at 0°C',
              '1.0 kg of water at approximately 80°C',
              '0.5 kg ice + 0.5 kg water at 0°C',
              '1.0 kg of water at 100°C'
            ],
            correctAnswer: 1,
            explanation: 'Melting 1.0 kg of ice requires $Q_1 = (1.0)(334{,}000) = 334$ kJ. Remaining energy: $668 - 334 = 334$ kJ. Temperature rise: $\\Delta T = Q/(mc) = 334{,}000/((1.0)(4{,}186)) \\approx 79.8$°C. Final state: water at about 80°C.'
          },
          {
            question: 'Which process releases more energy: freezing 1 kg of water or condensing 1 kg of steam?',
            options: [
              'Freezing (it happens at a lower temperature)',
              'Condensing (latent heat of vaporization is much larger than latent heat of fusion)',
              'They release the same energy',
              'It depends on the ambient pressure'
            ],
            correctAnswer: 1,
            explanation: 'Condensing releases $L_v = 2{,}260{,}000$ J/kg, while freezing releases $L_f = 334{,}000$ J/kg. Condensation releases about 6.8× more energy per kilogram.'
          }
        ]
      }
    }
  ]
}
