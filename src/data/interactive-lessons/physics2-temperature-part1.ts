export const physics2TemperaturePart1Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te1-intro',
      type: 'text' as const,
      content: `
# 🌡️ Temperature & Temperature Scales

**Part 1 of 7 — What Is Temperature, Really?**

You feel "hot" and "cold" every day — but what does temperature actually measure at the molecular level? Understanding this connection is the key to thermodynamics.

### Temperature Is About Motion

At the microscopic level, all matter consists of particles (atoms, molecules) in constant random motion. **Temperature is a measure of the average translational kinetic energy of these particles.**

- **Higher temperature** → particles move faster on average
- **Lower temperature** → particles move slower on average

> ⚠️ Temperature measures **average** kinetic energy, not total energy. A cup of boiling water has higher temperature than a swimming pool at 25°C, but the pool has far more total thermal energy because it contains vastly more molecules.
      `
    },
    {
      id: 'te1-scales',
      type: 'text' as const,
      content: `
## The Three Temperature Scales

### Celsius (°C)
- Based on the properties of water at 1 atm
- **0°C** = freezing point of water
- **100°C** = boiling point of water
- Used worldwide in science and daily life

### Fahrenheit (°F)
- **32°F** = freezing point of water
- **212°F** = boiling point of water
- 180 Fahrenheit degrees span the same range as 100 Celsius degrees
- Used in the United States for everyday purposes

### Kelvin (K)
- The **SI unit** of temperature — used in all physics equations
- **0 K** = absolute zero (the lowest possible temperature)
- **273.15 K** = freezing point of water
- **373.15 K** = boiling point of water
- No degree symbol: we write "300 K," not "300°K"
- **No negative values** — you cannot go below absolute zero

### Absolute Zero
At **0 K = −273.15°C = −459.67°F**, all classical molecular motion ceases. This is the theoretical lower limit of temperature. In practice, scientists have cooled matter to within billionths of a kelvin above absolute zero, but never reached it exactly.
      `
    },
    {
      id: 'te1-conversions',
      type: 'text' as const,
      content: `
## Conversion Formulas

### Celsius ↔ Kelvin
$$T_K = T_C + 273.15$$
$$T_C = T_K - 273.15$$

A change of 1°C equals a change of 1 K. These scales differ only by an offset.

### Celsius ↔ Fahrenheit
$$T_F = \\frac{9}{5}T_C + 32$$
$$T_C = \\frac{5}{9}(T_F - 32)$$

A change of 1°C equals a change of 9/5 = 1.8°F.

### Key Reference Points

| Event | °C | °F | K |
|---|---|---|---|
| Absolute zero | −273.15 | −459.67 | 0 |
| Water freezes | 0 | 32 | 273.15 |
| Human body | 37 | 98.6 | 310.15 |
| Water boils | 100 | 212 | 373.15 |

### Fun Fact
**−40° is the same on both Celsius and Fahrenheit scales!**

$$T_F = \\frac{9}{5}(-40) + 32 = -72 + 32 = -40°F \\checkmark$$
      `
    },
    {
      id: 'te1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Temperature Concepts Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Temperature is fundamentally a measure of:',
            options: [
              'The total kinetic energy of all molecules in a substance',
              'The average translational kinetic energy of molecules',
              'The potential energy stored between molecules',
              'The total thermal energy of a substance'
            ],
            correctAnswer: 1,
            explanation: 'Temperature measures the **average** translational kinetic energy per molecule, not the total energy. A large cold lake has more total energy than a small cup of hot water, but the hot water has a higher temperature.'
          },
          {
            question: 'Which temperature scale has no negative values?',
            options: [
              'Celsius',
              'Fahrenheit',
              'Kelvin',
              'All scales allow negative values'
            ],
            correctAnswer: 2,
            explanation: 'The Kelvin scale starts at absolute zero (0 K). Since you cannot have less than zero molecular kinetic energy, there are no negative Kelvin temperatures.'
          },
          {
            question: 'A temperature change of 10°C is equivalent to a change of:',
            options: [
              '10 K and 10°F',
              '10 K and 18°F',
              '283.15 K and 18°F',
              '10 K and 50°F'
            ],
            correctAnswer: 1,
            explanation: 'A change of 1°C = a change of 1 K (same size degree). A change of 1°C = a change of 9/5 = 1.8°F. So 10°C = 10 K = 18°F in terms of temperature **change**.'
          }
        ]
      }
    },
    {
      id: 'te1-conversion-drill',
      type: 'input-boxes' as const,
      content: `
**Temperature Conversion Drill** 🌡️

Convert the following temperatures. Round to the nearest whole number.

1) 68°F = ___ °C
2) 25°C = ___ K
3) 500 K = ___ °C
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '298', '227'],
        hint1: '$T_C = \\frac{5}{9}(T_F - 32) = \\frac{5}{9}(68 - 32) = \\frac{5}{9}(36)$.',
        hint2: '$T_K = T_C + 273 = 25 + 273$.',
        hint3: '$T_C = T_K - 273 = 500 - 273$.',
        explanation: '1) $T_C = \\frac{5}{9}(68 - 32) = \\frac{5}{9}(36) = 20$°C. 2) $T_K = 25 + 273 = 298$ K. 3) $T_C = 500 - 273 = 227$°C.'
      }
    },
    {
      id: 'te1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'If you double the Kelvin temperature of an ideal gas, the average kinetic energy of its molecules:',
            options: [
              'Stays the same',
              'Doubles',
              'Quadruples',
              'Increases by a factor of √2'
            ],
            correctAnswer: 1,
            explanation: 'Average KE is directly proportional to Kelvin temperature: $KE_{avg} = \\frac{3}{2}k_BT$. Doubling $T$ doubles $KE_{avg}$.'
          },
          {
            question: 'Water boils at 100°C. This temperature in Kelvin and Fahrenheit is:',
            options: [
              '373 K and 212°F',
              '273 K and 212°F',
              '373 K and 180°F',
              '100 K and 212°F'
            ],
            correctAnswer: 0,
            explanation: '$T_K = 100 + 273 = 373$ K. $T_F = \\frac{9}{5}(100) + 32 = 180 + 32 = 212$°F.'
          }
        ]
      }
    }
  ]
}
