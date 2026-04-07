export const chemIdealGasLawPart3Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl3-intro',
      type: 'text' as const,
      content: `
# ⚗️ The Ideal Gas Law

**Part 3 of 7 — PV = nRT**

The three simple gas laws (Boyle's, Charles's, Avogadro's) each describe a two-variable relationship while holding others constant. The **ideal gas law** combines them all into one powerful equation:

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
| 0.0821 L·atm/(mol·K) | When $P$ is in atm |
| 8.314 L·kPa/(mol·K) | When $P$ is in kPa |
| 8.314 J/(mol·K) | For energy calculations |

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

> **Problem:** What volume does 0.500 mol of gas occupy at 1.20 atm and 25°C?

**Solution:**

$$T = 25 + 273.15 = 298.15 \\text{ K}$$

$$V = \\frac{nRT}{P} = \\frac{(0.500)(0.0821)(298.15)}{1.20} = 10.2 \\text{ L}$$

### Example 2: Find Pressure

> **Problem:** 2.00 mol of gas is in a 15.0 L container at 300 K. What is the pressure?

**Solution:**

$$P = \\frac{nRT}{V} = \\frac{(2.00)(0.0821)(300)}{15.0} = 3.28 \\text{ atm}$$

### Example 3: Find Moles

> **Problem:** A gas at 2.50 atm and 350 K occupies 5.00 L. How many moles?

**Solution:**

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

**1)** What volume (in L) does 1.00 mol of ideal gas occupy at STP (0°C, 1.00 atm)? (to 3 significant figures)

**2)** What pressure (in atm) is exerted by 3.50 mol of gas in a 20.0 L container at 400 K? (to 3 significant figures)

**3)** How many moles of gas are in a 10.0 L container at 2.00 atm and 27°C? (to 3 significant figures)
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
            label: 'If you halve the volume (constant T, n), pressure will ___',
            options: ['increase', 'decrease', 'stay the same'],
            correctIndex: 0,
            explanation: `At constant T and n, decreasing V increases P (Boyle's Law / ideal gas law).`
          },
          {
            id: 'gl3-dd2',
            label: 'If you add more gas at constant P and T, volume will ___',
            options: ['increase', 'decrease', 'stay the same'],
            correctIndex: 1,
            explanation: 'Adding gas (increasing n) at constant P and T means V must increase, so density ($m/V$) depends on the specifics — but at constant V and T, adding gas increases P, not decreases it. At constant P and T, V increases, so $n/V$ stays the same.'
          },
          {
            id: 'gl3-dd3',
            label: 'STP (standard temperature and pressure) is defined as ___',
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
          },
          {
            question: 'What volume does 0.250 mol of gas occupy at 2.00 atm and 300 K? (R = 0.0821)',
            options: [
              '3.08 L',
              '6.16 L',
              '12.3 L',
              '1.54 L'
            ],
            correctAnswer: 0,
            explanation: '$V = nRT/P = (0.250)(0.0821)(300)/2.00 = 6.1575/2.00 = 3.08$ L.'
          },
          {
            question: 'A 10.0 L container at 400 K has a pressure of 3.00 atm. How many moles of gas are present?',
            options: [
              '0.456 mol',
              '0.913 mol',
              '1.22 mol',
              '2.44 mol'
            ],
            correctAnswer: 1,
            explanation: '$n = PV/(RT) = (3.00)(10.0)/((0.0821)(400)) = 30.0/32.84 = 0.913$ mol.'
          },
          {
            question: 'If you double both the temperature and the volume of an ideal gas (constant n), the pressure will:',
            options: [
              'Double',
              'Halve',
              'Stay the same',
              'Quadruple'
            ],
            correctAnswer: 2,
            explanation: '$P = nRT/V$. If both T and V double: $P = nR(2T)/(2V) = nRT/V$. The effects cancel, so P stays the same.'
          },
          {
            question: 'Which value of R should you use if pressure is in atm and volume is in liters?',
            options: [
              '8.314 J/(mol·K)',
              '0.0821 L·atm/(mol·K)',
              '62.36 L·torr/(mol·K)',
              '1.987 cal/(mol·K)'
            ],
            correctAnswer: 1,
            explanation: 'When P is in atm and V is in L, use $R = 0.0821$ L·atm/(mol·K) so the units cancel properly.'
          },
          {
            question: 'A student solves for temperature and gets T = -50 K. What went wrong?',
            options: [
              'They forgot to convert volume to liters',
              'They used the wrong value of R',
              'Negative Kelvin is impossible — there must be a calculation error',
              'They forgot to include moles in the equation'
            ],
            correctAnswer: 2,
            explanation: 'Kelvin temperature can never be negative. A negative K value indicates a mathematical error somewhere in the calculation (wrong units, sign error, etc.).'
          },
          {
            question: 'What is the pressure exerted by 1.50 mol of gas in a 5.00 L container at 25°C?',
            options: [
              '7.34 atm',
              '3.67 atm',
              '14.7 atm',
              '0.367 atm'
            ],
            correctAnswer: 0,
            explanation: '$T = 25 + 273.15 = 298.15$ K. $P = nRT/V = (1.50)(0.0821)(298.15)/5.00 = 36.7/5.00 = 7.34$ atm.'
          },
          {
            question: 'At STP, what volume does 0.500 mol of any ideal gas occupy?',
            options: [
              '5.60 L',
              '11.2 L',
              '22.4 L',
              '44.8 L'
            ],
            correctAnswer: 1,
            explanation: 'At STP, 1 mol = 22.4 L. So 0.500 mol = $0.500 \\times 22.4 = 11.2$ L.'
          },
          {
            question: 'A gas at 1.00 atm and 273 K occupies 22.4 L. If heated to 546 K at constant pressure, the new volume is:',
            options: [
              '11.2 L',
              '22.4 L',
              '33.6 L',
              '44.8 L'
            ],
            correctAnswer: 3,
            explanation: '$V_2 = V_1 \\times T_2/T_1 = 22.4 \\times (546/273) = 22.4 \\times 2 = 44.8$ L. Doubling temperature doubles volume at constant P.'
          }
        ]
      }
    }
  ]
}
