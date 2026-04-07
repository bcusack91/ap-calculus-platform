export const chemIdealGasLawPart1Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl1-intro',
      type: 'text' as const,
      content: `
# 🌬️ Gas Properties & Kinetic Molecular Theory

**Part 1 of 7 — Understanding Gas Behavior**

Gases are everywhere — the air you breathe, the atmosphere above you, the propane in a grill tank. What makes gases unique among the states of matter is their ability to **expand to fill any container**, be **easily compressed**, and exert **pressure** on the walls of their container.

In this lesson, we explore the four key measurable properties of gases and the **kinetic molecular theory (KMT)** that explains gas behavior at the molecular level.
      `
    },
    {
      id: 'gl1-four-variables',
      type: 'text' as const,
      content: `
## 💨 The Four Gas Variables

Every gas sample is described by four measurable quantities:

| Variable | Symbol | SI Unit | Common Units |
|----------|--------|---------|--------------|
| **Pressure** | $P$ | Pascal (Pa) | atm, mmHg, torr, kPa |
| **Volume** | $V$ | m³ | liters (L) |
| **Temperature** | $T$ | Kelvin (K) | °C (must convert!) |
| **Amount** | $n$ | moles (mol) | — |


---

### Pressure

Pressure is **force per unit area**: $P = F/A$. Gas molecules exert pressure by colliding with container walls.

Key conversions:
- $1 \\text{ atm} = 760 \\text{ mmHg} = 760 \\text{ torr} = 101.325 \\text{ kPa}$


---

### Temperature

Temperature must always be in **Kelvin** for gas law calculations:

$$T(K) = T(°C) + 273.15$$

At $0 \\text{ K}$ (absolute zero), molecular motion theoretically stops.


---

### Volume

Volume is typically measured in **liters (L)** in chemistry. $1 \\text{ L} = 1000 \\text{ mL} = 0.001 \\text{ m}^3$.


---

### Amount

The amount of gas is measured in **moles** ($n$), which connects to the number of particles via Avogadro's number ($6.022 \\times 10^{23}$).
      `
    },
    {
      id: 'gl1-kmt',
      type: 'text' as const,
      content: `
## ⏱️ Kinetic Molecular Theory (KMT)

The kinetic molecular theory describes an **ideal gas** with the following assumptions:

1. **Gas particles are in constant, random motion** — they travel in straight lines until they collide.
2. **Collisions are perfectly elastic** — no kinetic energy is lost during collisions.
3. **Gas particles have negligible volume** — the volume of individual molecules is tiny compared to the container.
4. **No intermolecular forces** — gas particles don't attract or repel each other.
5. **Average kinetic energy is proportional to temperature** (in Kelvin):

$$KE_{\\text{avg}} = \\frac{3}{2}k_BT$$

where $k_B = 1.38 \\times 10^{-23}$ J/K is the Boltzmann constant.


---

### Root Mean Square Speed

The average speed of gas molecules depends on temperature and molar mass:

$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$

where $R = 8.314$ J/(mol·K) and $M$ is the molar mass in kg/mol.

**Key insight**: Lighter molecules move faster at the same temperature.
      `
    },
    {
      id: 'gl1-pressure-concepts',
      type: 'multiple-choice' as const,
      content: `
**Gas Properties Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT an assumption of the kinetic molecular theory for an ideal gas?',
            options: [
              'Gas particles are in constant, random motion',
              'Collisions between gas particles are perfectly elastic',
              'Gas particles exert attractive forces on each other',
              'The volume of individual gas particles is negligible'
            ],
            correctAnswer: 2,
            explanation: 'KMT assumes there are NO intermolecular forces between gas particles. If attractive forces existed, the gas would behave non-ideally. This is one of the key assumptions that distinguishes an ideal gas from a real gas.'
          },
          {
            question: 'A gas sample is at 25°C. What is this temperature in Kelvin?',
            options: [
              '248.15 K',
              '273.15 K',
              '298.15 K',
              '325.15 K'
            ],
            correctAnswer: 2,
            explanation: '$T(K) = T(°C) + 273.15 = 25 + 273.15 = 298.15$ K. Always convert to Kelvin before using gas law equations.'
          },
          {
            question: 'At the same temperature, which gas has the highest average molecular speed?',
            options: [
              'O₂ (M = 32 g/mol)',
              'N₂ (M = 28 g/mol)',
              'He (M = 4 g/mol)',
              'CO₂ (M = 44 g/mol)'
            ],
            correctAnswer: 2,
            explanation: '$v_{\\text{rms}} = \\sqrt{3RT/M}$. At the same temperature, speed is inversely related to the square root of molar mass. Helium has the smallest molar mass (4 g/mol), so it moves the fastest.'
          }
        ]
      }
    },
    {
      id: 'gl1-unit-conversions',
      type: 'input-boxes' as const,
      content: `
**Unit Conversion Practice** 🧮

Convert the following gas measurements:

**1)** Convert 2.50 atm to mmHg.

**2)** Convert 350 K to °C (to 3 significant figures).

**3)** Convert 0.500 L to mL.
      `,
      exercise: {
        inputs: [
          {
            label: '2.50 atm in mmHg',
            correctAnswer: '1900',
            explanation: '$2.50 \\text{ atm} \\times 760 \\text{ mmHg/atm} = 1900 \\text{ mmHg}$.'
          },
          {
            label: '350 K in °C',
            correctAnswer: '76.85',
            explanation: '$T(°C) = T(K) - 273.15 = 350 - 273.15 = 76.85°C$.'
          },
          {
            label: '0.500 L in mL',
            correctAnswer: '500',
            explanation: '$0.500 \\text{ L} \\times 1000 \\text{ mL/L} = 500 \\text{ mL}$.'
          }
        ]
      }
    },
    {
      id: 'gl1-kmt-dropdown',
      type: 'dropdown-select' as const,
      content: `
**KMT Concepts Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl1-dd1',
            label: 'If temperature increases, average kinetic energy ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: 'Average KE is proportional to temperature. Increasing T increases the average kinetic energy of gas molecules.'
          },
          {
            id: 'gl1-dd2',
            label: 'If temperature increases at constant volume, pressure ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: 'Higher temperature means faster molecular speeds, so molecules hit the walls harder and more frequently, increasing pressure.'
          },
          {
            id: 'gl1-dd3',
            label: 'At the same temperature, He atoms move ___ O₂ molecules',
            options: ['faster than', 'slower than', 'the same speed as'],
            correctIndex: 0,
            explanation: '$v_{\\text{rms}} = \\sqrt{3RT/M}$. Lighter molecules (smaller M) have higher speeds at the same temperature.'
          },
          {
            id: 'gl1-dd4',
            label: 'According to KMT, the volume of individual gas particles is ___',
            options: ['zero', 'very large', 'negligible compared to container volume'],
            correctIndex: 2,
            explanation: 'KMT assumes that the volume of individual gas particles is negligible compared to the total volume of the container.'
          }
        ]
      }
    },
    {
      id: 'gl1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gas Properties & KMT** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Standard atmospheric pressure is equal to which of the following?',
            options: [
              '760 torr',
              '101.325 kPa',
              '1 atm',
              'All of the above'
            ],
            correctAnswer: 3,
            explanation: 'All three values represent the same standard atmospheric pressure: 1 atm = 760 torr = 101.325 kPa. These are all equivalent.'
          },
          {
            question: 'According to KMT, what happens when gas molecules collide with each other?',
            options: [
              'They lose kinetic energy as heat',
              'They stick together briefly',
              'Kinetic energy is conserved (elastic collision)',
              'They slow down permanently'
            ],
            correctAnswer: 2,
            explanation: 'KMT assumes perfectly elastic collisions, meaning the total kinetic energy is conserved. No energy is lost to heat or other forms during collisions.'
          },
          {
            question: 'Convert 3.50 atm to mmHg.',
            options: [
              '1330 mmHg',
              '2660 mmHg',
              '3500 mmHg',
              '266 mmHg'
            ],
            correctAnswer: 1,
            explanation: '$3.50 \\text{ atm} \\times 760 \\text{ mmHg/atm} = 2660 \\text{ mmHg}$.'
          },
          {
            question: 'What temperature in Kelvin corresponds to -40°C?',
            options: [
              '233.15 K',
              '313.15 K',
              '240 K',
              '313 K'
            ],
            correctAnswer: 0,
            explanation: '$T(K) = -40 + 273.15 = 233.15$ K. Always add 273.15 to convert Celsius to Kelvin.'
          },
          {
            question: 'Which of the following is NOT a measurable property of a gas?',
            options: [
              'Pressure',
              'Color',
              'Temperature',
              'Volume'
            ],
            correctAnswer: 1,
            explanation: 'The four measurable gas properties are pressure (P), volume (V), temperature (T), and amount (n). Color is not one of the standard gas variables.'
          },
          {
            question: 'According to KMT, the average kinetic energy of gas molecules is directly proportional to:',
            options: [
              'Pressure',
              'Volume',
              'Temperature in Kelvin',
              'Number of moles'
            ],
            correctAnswer: 2,
            explanation: '$KE_{\\text{avg}} = \\frac{3}{2}k_BT$. Average kinetic energy depends only on the absolute temperature (Kelvin).'
          },
          {
            question: 'At the same temperature, which gas molecule has the greatest average speed?',
            options: [
              'CO₂ (M = 44 g/mol)',
              'N₂ (M = 28 g/mol)',
              'H₂ (M = 2 g/mol)',
              'Ar (M = 40 g/mol)'
            ],
            correctAnswer: 2,
            explanation: '$v_{\\text{rms}} = \\sqrt{3RT/M}$. The lightest molecule (H₂, M = 2 g/mol) has the greatest average speed at any given temperature.'
          },
          {
            question: 'Which assumption of KMT breaks down at very high pressures?',
            options: [
              'Gas particles are in constant random motion',
              'Collisions are perfectly elastic',
              'Gas particles have negligible volume',
              'Average KE is proportional to temperature'
            ],
            correctAnswer: 2,
            explanation: 'At very high pressures, gas molecules are forced close together and their individual volumes become significant relative to the container volume, violating the "negligible volume" assumption.'
          },
          {
            question: 'What is 500 kPa expressed in atm? (1 atm = 101.325 kPa)',
            options: [
              '4.93 atm',
              '5.00 atm',
              '50.7 atm',
              '0.203 atm'
            ],
            correctAnswer: 0,
            explanation: '$500 \\div 101.325 = 4.93$ atm. Divide by 101.325 kPa/atm to convert.'
          },
          {
            question: 'Why does a bicycle tire feel warm after being pumped up quickly?',
            options: [
              'Friction between the pump and the tire',
              'Compressing the gas increases the average kinetic energy of the molecules',
              'The rubber absorbs heat from the sun',
              'Chemical reactions inside the tire'
            ],
            correctAnswer: 1,
            explanation: 'When gas is compressed rapidly, work is done on the gas molecules, increasing their kinetic energy and thus the temperature. This is consistent with KMT — faster molecules mean higher temperature.'
          }
        ]
      }
    }
  ]
}
