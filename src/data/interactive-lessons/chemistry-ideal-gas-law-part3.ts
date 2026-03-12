export const chemIdealGasLawPart3Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl3-intro',
      type: 'text' as const,
      content: `
# ⚗️ The Ideal Gas Law

**Part 3 of 7 — PV = nRT**

The three simple gas laws (Boyle\'s, Charles\'s, Avogadro\'s) each describe a two-variable relationship while holding others constant. The **ideal gas law** combines them all into one powerful equation:

$$PV = nRT$$

This single equation lets you calculate **any one variable** if you know the other three.
      `
    },
    {
      id: 'gl3-equation',
      type: 'text' as const,
      content: `
## The Equation and R

$$PV = nRT$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $P$ | Pressure | atm (or kPa) |
| $V$ | Volume | L |
| $n$ | Amount | mol |
| $R$ | Gas constant | depends on units |
| $T$ | Temperature | K (always!) |

### The Gas Constant R

The value of $R$ depends on your pressure unit:

| $R$ value | When to use |
|-----------|-------------|
| $0.0821 \\text{ L·atm/(mol·K)}$ | When $P$ is in atm |
| $8.314 \\text{ L·kPa/(mol·K)}$ | When $P$ is in kPa |
| $8.314 \\text{ J/(mol·K)}$ | For energy calculations |

Most AP Chemistry problems use $R = 0.0821$ L·atm/(mol·K).

### Rearranged Forms

- Solve for $V$: $V = \\frac{nRT}{P}$
- Solve for $P$: $P = \\frac{nRT}{V}$
- Solve for $n$: $n = \\frac{PV}{RT}$
- Solve for $T$: $T = \\frac{PV}{nR}$
      `
    },
    {
      id: 'gl3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Find Volume

What volume does 0.500 mol of gas occupy at 1.20 atm and 25°C?

$$T = 25 + 273.15 = 298.15 \\text{ K}$$

$$V = \\frac{nRT}{P} = \\frac{(0.500)(0.0821)(298.15)}{1.20} = 10.2 \\text{ L}$$

### Example 2: Find Pressure

2.00 mol of gas is in a 15.0 L container at 300 K. What is the pressure?

$$P = \\frac{nRT}{V} = \\frac{(2.00)(0.0821)(300)}{15.0} = 3.28 \\text{ atm}$$

### Example 3: Find Moles

A gas at 2.50 atm and 350 K occupies 5.00 L. How many moles?

$$n = \\frac{PV}{RT} = \\frac{(2.50)(5.00)}{(0.0821)(350)} = 0.435 \\text{ mol}$$

### Unit Conversion Reminder

Always check:
- $P$ in atm (if using $R = 0.0821$)
- $V$ in liters
- $T$ in Kelvin
- $n$ in moles
      `
    },
    {
      id: 'gl3-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Ideal Gas Law Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the ideal gas law $PV = nRT$, if temperature is doubled while holding n and V constant, what happens to the pressure?',
            options: [
              'It halves',
              'It stays the same',
              'It doubles',
              'It quadruples'
            ],
            correctAnswer: 2,
            explanation: '$P = nRT/V$. If $T$ is doubled and $n$, $V$ are constant, then $P$ doubles. Pressure is directly proportional to temperature at constant volume and moles.'
          },
          {
            question: 'What value of R should you use when pressure is given in kPa?',
            options: [
              '0.0821 L·atm/(mol·K)',
              '8.314 L·kPa/(mol·K)',
              '62.36 L·torr/(mol·K)',
              '1.987 cal/(mol·K)'
            ],
            correctAnswer: 1,
            explanation: 'When pressure is in kPa and volume is in liters, use $R = 8.314$ L·kPa/(mol·K) so the units cancel properly.'
          },
          {
            question: 'A student calculates the volume of a gas and gets a negative number. What is the most likely error?',
            options: [
              'Used the wrong value of R',
              'Forgot to convert temperature to Kelvin',
              'Made an arithmetic error in multiplication',
              'Used the wrong molar mass'
            ],
            correctAnswer: 1,
            explanation: 'Negative volume is physically impossible. The most common cause is using Celsius instead of Kelvin. For example, $-10°C$ as the temperature would give a negative answer if not converted to $263$ K.'
          }
        ]
      }
    },
    {
      id: 'gl3-calculations',
      type: 'input-boxes' as const,
      content: `
**PV = nRT Calculations** 🧮

Use $R = 0.0821$ L·atm/(mol·K). Round to appropriate significant figures.

1) What volume (in L) does 1.00 mol of ideal gas occupy at STP (0°C, 1.00 atm)? (to 3 significant figures)

2) What pressure (in atm) is exerted by 3.50 mol of gas in a 20.0 L container at 400 K? (to 3 significant figures)

3) How many moles of gas are in a 10.0 L container at 2.00 atm and 27°C? (to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Volume at STP (L)',
            correctAnswer: '22.4',
            explanation: '$V = nRT/P = (1.00)(0.0821)(273.15)/1.00 = 22.4$ L. This confirms the molar volume at STP.'
          },
          {
            label: 'Pressure (atm)',
            correctAnswer: '5.75',
            explanation: '$P = nRT/V = (3.50)(0.0821)(400)/20.0 = 5.747 \\approx 5.75$ atm.'
          },
          {
            label: 'Moles of gas',
            correctAnswer: '0.812',
            explanation: '$T = 27 + 273.15 = 300.15$ K. $n = PV/(RT) = (2.00)(10.0)/((0.0821)(300.15)) = 0.812$ mol.'
          }
        ]
      }
    },
    {
      id: 'gl3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Concept Sort** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl3-dd1',
            options: ['increase', 'decrease', 'stay the same'],
            correctIndex: 0,
            explanation: 'At constant T and n, decreasing V increases P (Boyle\'s Law / ideal gas law).'
          },
          {
            id: 'gl3-dd2',
            options: ['increase', 'decrease', 'stay the same'],
            correctIndex: 1,
            explanation: 'Adding gas (increasing n) at constant P and T means V must increase, so density ($m/V$) depends on the specifics — but at constant V and T, adding gas increases P, not decreases it. At constant P and T, V increases, so $n/V$ stays the same.'
          },
          {
            id: 'gl3-dd3',
            options: ['0°C and 1 atm', '25°C and 1 atm', '0 K and 1 atm'],
            correctIndex: 0,
            explanation: 'STP (standard temperature and pressure) is defined as 0°C (273.15 K) and 1 atm.'
          }
        ]
      }
    },
    {
      id: 'gl3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — The Ideal Gas Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A rigid (constant volume) container holds an ideal gas. If the gas is cooled from 600 K to 300 K, what happens to the pressure?',
            options: [
              'It doubles',
              'It halves',
              'It stays the same',
              'It drops to zero'
            ],
            correctAnswer: 1,
            explanation: 'At constant V and n: $P \\propto T$. Temperature is halved from 600 K to 300 K, so pressure is also halved.'
          },
          {
            question: 'Which of the following conditions would cause a gas to deviate MOST from ideal behavior?',
            options: [
              'High temperature, low pressure',
              'Low temperature, high pressure',
              'High temperature, high pressure',
              'Low temperature, low pressure'
            ],
            correctAnswer: 1,
            explanation: 'At low temperature and high pressure, gas molecules are close together and moving slowly. This means intermolecular forces become significant and particle volume is no longer negligible — both violations of KMT assumptions.'
          }
        ]
      }
    }
  ]
}
