export const chemIdealGasLawPart2Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl2-intro',
      type: 'text' as const,
      content: `
# 📏 Boyle\'s, Charles\'s, and Avogadro\'s Laws

**Part 2 of 7 — The Foundational Gas Laws**

Before the ideal gas law was discovered, scientists identified three separate relationships between gas variables. Each law holds **one or two variables constant** while examining how the remaining variables relate.

These "simple" gas laws are the building blocks of $PV = nRT$.
      `
    },
    {
      id: 'gl2-boyles',
      type: 'text' as const,
      content: `
## Boyle\'s Law (Pressure–Volume)

**At constant temperature and amount of gas:**

$$P_1V_1 = P_2V_2$$

Pressure and volume are **inversely proportional**. When you compress a gas (decrease volume), the pressure increases — and vice versa.

### Example

A gas occupies 4.00 L at 1.00 atm. What is the volume if the pressure increases to 2.00 atm?

$$V_2 = \\frac{P_1V_1}{P_2} = \\frac{(1.00)(4.00)}{2.00} = 2.00 \\text{ L}$$

### Conceptual Picture

When volume decreases, molecules hit the walls more often → more collisions per second → higher pressure.
      `
    },
    {
      id: 'gl2-charles',
      type: 'text' as const,
      content: `
## Charles\'s Law (Volume–Temperature)

**At constant pressure and amount of gas:**

$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$

Volume and temperature are **directly proportional** (temperature in Kelvin!). Heat a gas and it expands; cool it and it contracts.

### Example

A balloon has a volume of 2.50 L at 20°C. What volume will it have at 80°C? (Pressure constant)

$$T_1 = 20 + 273.15 = 293.15 \\text{ K}, \\quad T_2 = 80 + 273.15 = 353.15 \\text{ K}$$

$$V_2 = V_1 \\times \\frac{T_2}{T_1} = 2.50 \\times \\frac{353.15}{293.15} = 3.01 \\text{ L}$$

### Why Kelvin?

If you use Celsius, 0°C would imply zero volume — which is nonsensical. Kelvin starts at absolute zero, where molecular motion stops.
      `
    },
    {
      id: 'gl2-avogadros',
      type: 'text' as const,
      content: `
## Avogadro\'s Law (Volume–Amount)

**At constant temperature and pressure:**

$$\\frac{V_1}{n_1} = \\frac{V_2}{n_2}$$

Volume and amount of gas (in moles) are **directly proportional**. More molecules → more volume (at the same $T$ and $P$).

### Example

3.00 mol of gas occupies 6.00 L. What volume will 5.00 mol occupy under the same conditions?

$$V_2 = V_1 \\times \\frac{n_2}{n_1} = 6.00 \\times \\frac{5.00}{3.00} = 10.0 \\text{ L}$$

### At STP

At standard temperature and pressure (STP: 0°C, 1 atm), **1 mole of any ideal gas** occupies **22.4 L**. This is the **molar volume** at STP.
      `
    },
    {
      id: 'gl2-law-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gas Law Identification Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A sealed syringe of gas is compressed from 50 mL to 25 mL at constant temperature. The pressure will:',
            options: [
              'Double',
              'Halve',
              'Stay the same',
              'Quadruple'
            ],
            correctAnswer: 0,
            explanation: 'Boyle\'s Law: $P_1V_1 = P_2V_2$. Volume is halved, so pressure doubles. $P_2 = P_1 \\times (50/25) = 2P_1$.'
          },
          {
            question: 'Which gas law explains why a hot air balloon rises?',
            options: [
              'Boyle\'s Law',
              'Charles\'s Law',
              'Avogadro\'s Law',
              'Dalton\'s Law'
            ],
            correctAnswer: 1,
            explanation: 'Charles\'s Law: heating the air inside the balloon increases its volume, making it less dense than the surrounding cooler air, so the balloon rises.'
          },
          {
            question: 'A container at constant T and P holds 2.0 mol of O₂ in 44.8 L. If you add another 1.0 mol of O₂, the volume becomes:',
            options: [
              '22.4 L',
              '44.8 L',
              '67.2 L',
              '89.6 L'
            ],
            correctAnswer: 2,
            explanation: 'Avogadro\'s Law: $V_2 = V_1 \\times n_2/n_1 = 44.8 \\times (3.0/2.0) = 67.2$ L.'
          }
        ]
      }
    },
    {
      id: 'gl2-calculations',
      type: 'input-boxes' as const,
      content: `
**Gas Law Calculations** 🧮

1) A gas at 3.00 atm occupies 12.0 L. What is the volume at 1.50 atm? (constant T and n, in L)

2) A gas occupies 500 mL at 27°C. What volume will it occupy at 127°C at constant pressure? (in mL, round to nearest whole number)

3) 4.00 mol of gas occupies 10.0 L at a given T and P. How many moles would occupy 25.0 L? (in mol, to 2 decimal places)
      `,
      exercise: {
        inputs: [
          {
            label: 'Volume at 1.50 atm (L)',
            correctAnswer: '24.0',
            explanation: 'Boyle\'s Law: $V_2 = P_1V_1/P_2 = (3.00)(12.0)/1.50 = 24.0$ L.'
          },
          {
            label: 'Volume at 127°C (mL)',
            correctAnswer: '667',
            explanation: 'Charles\'s Law: $T_1 = 300$ K, $T_2 = 400$ K. $V_2 = 500 \\times (400/300) = 666.7 \\approx 667$ mL.'
          },
          {
            label: 'Moles at 25.0 L (mol)',
            correctAnswer: '10.00',
            explanation: 'Avogadro\'s Law: $n_2 = n_1 \\times V_2/V_1 = 4.00 \\times (25.0/10.0) = 10.00$ mol.'
          }
        ]
      }
    },
    {
      id: 'gl2-dropdown-concepts',
      type: 'dropdown-select' as const,
      content: `
**Match the Relationship** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl2-dd1',
            options: ['directly proportional', 'inversely proportional', 'unrelated'],
            correctIndex: 1,
            explanation: 'Boyle\'s Law: At constant T and n, P and V are inversely proportional ($PV = \\text{constant}$).'
          },
          {
            id: 'gl2-dd2',
            options: ['directly proportional', 'inversely proportional', 'unrelated'],
            correctIndex: 0,
            explanation: 'Charles\'s Law: At constant P and n, V and T are directly proportional ($V/T = \\text{constant}$).'
          },
          {
            id: 'gl2-dd3',
            options: ['directly proportional', 'inversely proportional', 'unrelated'],
            correctIndex: 0,
            explanation: 'Avogadro\'s Law: At constant T and P, V and n are directly proportional ($V/n = \\text{constant}$).'
          }
        ]
      }
    },
    {
      id: 'gl2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gas Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student uses Charles\'s Law with Celsius instead of Kelvin. Their result will be:',
            options: [
              'Correct, since the units cancel',
              'Slightly off due to rounding',
              'Incorrect, because the proportionality requires an absolute temperature scale',
              'Correct for temperatures above 100°C only'
            ],
            correctAnswer: 2,
            explanation: 'Charles\'s Law requires Kelvin. Using Celsius gives the wrong ratio. For example, 0°C would imply zero volume, which is nonsensical. The direct proportionality only works with an absolute (Kelvin) scale.'
          },
          {
            question: 'At STP (0°C, 1 atm), how many liters does 2.00 mol of an ideal gas occupy?',
            options: [
              '11.2 L',
              '22.4 L',
              '33.6 L',
              '44.8 L'
            ],
            correctAnswer: 3,
            explanation: 'At STP, 1 mol of an ideal gas occupies 22.4 L. So 2.00 mol occupies $2.00 \\times 22.4 = 44.8$ L.'
          }
        ]
      }
    }
  ]
}
