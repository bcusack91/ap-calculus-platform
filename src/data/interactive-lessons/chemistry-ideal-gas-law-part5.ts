export const chemIdealGasLawPart5Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl5-intro',
      type: 'text' as const,
      content: `
# 🎈 Dalton\'s Law of Partial Pressures

**Part 5 of 7 — Gas Mixtures**

Most gases we encounter are actually **mixtures** — air itself is about 78% N₂, 21% O₂, and 1% Ar plus trace gases. **Dalton\'s Law** tells us how to handle the pressure contributions from each gas in a mixture.
      `
    },
    {
      id: 'gl5-daltons-law',
      type: 'text' as const,
      content: `
## Dalton\'s Law

The **total pressure** of a gas mixture equals the **sum of the partial pressures** of each component gas:

$$P_{\\text{total}} = P_1 + P_2 + P_3 + \\cdots$$

Each partial pressure is the pressure that gas would exert if it **alone** occupied the entire container.

### Using the Ideal Gas Law

Since $PV = nRT$, each gas independently obeys:

$$P_i = \\frac{n_iRT}{V}$$

And the total:

$$P_{\\text{total}} = \\frac{n_{\\text{total}}RT}{V}$$

### Example

A 10.0 L container at 300 K holds 0.200 mol N₂ and 0.300 mol O₂.

$$P_{N_2} = \\frac{(0.200)(0.0821)(300)}{10.0} = 0.493 \\text{ atm}$$

$$P_{O_2} = \\frac{(0.300)(0.0821)(300)}{10.0} = 0.739 \\text{ atm}$$

$$P_{\\text{total}} = 0.493 + 0.739 = 1.232 \\text{ atm}$$
      `
    },
    {
      id: 'gl5-mole-fraction',
      type: 'text' as const,
      content: `
## Mole Fraction

The **mole fraction** ($\\chi$) of a component is the fraction of total moles that it contributes:

$$\\chi_i = \\frac{n_i}{n_{\\text{total}}}$$

The partial pressure is related to mole fraction by:

$$P_i = \\chi_i \\times P_{\\text{total}}$$

### Example

A mixture has 2.0 mol He and 3.0 mol Ne at a total pressure of 5.0 atm.

$$\\chi_{He} = \\frac{2.0}{2.0 + 3.0} = 0.40$$

$$P_{He} = 0.40 \\times 5.0 = 2.0 \\text{ atm}$$

$$\\chi_{Ne} = \\frac{3.0}{5.0} = 0.60, \\quad P_{Ne} = 0.60 \\times 5.0 = 3.0 \\text{ atm}$$

**Note**: All mole fractions must add up to 1.0: $\\chi_{He} + \\chi_{Ne} = 0.40 + 0.60 = 1.00$ ✓
      `
    },
    {
      id: 'gl5-water-collection',
      type: 'text' as const,
      content: `
## Gas Collection Over Water

When a gas is collected by displacement of water, the collected gas is **mixed with water vapor**. You must subtract the vapor pressure of water:

$$P_{\\text{gas}} = P_{\\text{total}} - P_{\\text{H}_2\\text{O}}$$

The vapor pressure of water depends on temperature (values are given in data tables).

### Example

Oxygen is collected over water at 25°C. The total pressure is 752 mmHg. The vapor pressure of water at 25°C is 23.8 mmHg.

$$P_{O_2} = 752 - 23.8 = 728 \\text{ mmHg} = 0.958 \\text{ atm}$$

This corrected pressure is then used in $PV = nRT$ to find the moles of dry gas collected.
      `
    },
    {
      id: 'gl5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Partial Pressure Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A container holds 1.0 mol of N₂ and 3.0 mol of H₂ at a total pressure of 2.0 atm. What is the partial pressure of H₂?',
            options: [
              '0.50 atm',
              '1.0 atm',
              '1.5 atm',
              '2.0 atm'
            ],
            correctAnswer: 2,
            explanation: '$\\chi_{H_2} = 3.0/(1.0+3.0) = 0.75$. $P_{H_2} = 0.75 \\times 2.0 = 1.5$ atm.'
          },
          {
            question: 'A gas is collected over water at 30°C (vapor pressure of water = 31.8 mmHg). The barometric pressure is 758 mmHg. The pressure of the dry gas is:',
            options: [
              '758 mmHg',
              '790 mmHg',
              '726 mmHg',
              '31.8 mmHg'
            ],
            correctAnswer: 2,
            explanation: '$P_{\\text{gas}} = P_{\\text{total}} - P_{H_2O} = 758 - 31.8 = 726.2 \\approx 726$ mmHg.'
          },
          {
            question: 'If the mole fraction of O₂ in air is 0.21, and the total atmospheric pressure is 1.00 atm, what is the partial pressure of O₂?',
            options: [
              '0.21 atm',
              '0.79 atm',
              '1.00 atm',
              '0.042 atm'
            ],
            correctAnswer: 0,
            explanation: '$P_{O_2} = \\chi_{O_2} \\times P_{\\text{total}} = 0.21 \\times 1.00 = 0.21$ atm.'
          }
        ]
      }
    },
    {
      id: 'gl5-calculations',
      type: 'input-boxes' as const,
      content: `
**Partial Pressure Calculations** 🧮

1) A flask contains 0.50 mol Ar and 1.50 mol Ne. The total pressure is 4.00 atm. What is the partial pressure of Ar? (in atm)

2) Hydrogen gas is collected over water at 22°C ($P_{H_2O}$ = 19.8 mmHg). The total pressure is 745 mmHg. What is the pressure of the dry hydrogen? (in mmHg, to 1 decimal place)

3) A mixture has $\\chi_{CO_2} = 0.30$ and the total pressure is 2.50 atm. What is $P_{CO_2}$? (in atm)
      `,
      exercise: {
        inputs: [
          {
            label: 'Partial pressure of Ar (atm)',
            correctAnswer: '1.00',
            explanation: '$\\chi_{Ar} = 0.50/(0.50+1.50) = 0.25$. $P_{Ar} = 0.25 \\times 4.00 = 1.00$ atm.'
          },
          {
            label: 'Pressure of dry H₂ (mmHg)',
            correctAnswer: '725.2',
            explanation: '$P_{H_2} = 745 - 19.8 = 725.2$ mmHg.'
          },
          {
            label: 'Partial pressure of CO₂ (atm)',
            correctAnswer: '0.75',
            explanation: '$P_{CO_2} = \\chi_{CO_2} \\times P_{\\text{total}} = 0.30 \\times 2.50 = 0.75$ atm.'
          }
        ]
      }
    },
    {
      id: 'gl5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Dalton\'s Law Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl5-dd1',
            options: ['add up to 1', 'add up to the total pressure', 'are all equal'],
            correctIndex: 0,
            explanation: 'Mole fractions always sum to exactly 1 (or 100% of the mixture).'
          },
          {
            id: 'gl5-dd2',
            options: ['higher than', 'lower than', 'equal to'],
            correctIndex: 0,
            explanation: 'When collecting gas over water, the total pressure includes water vapor, so the total is higher than the pressure of the dry gas alone.'
          },
          {
            id: 'gl5-dd3',
            options: ['moles of that gas', 'mass of that gas', 'volume of that gas'],
            correctIndex: 0,
            explanation: 'Partial pressure depends on the number of moles (not mass) of each gas: $P_i = n_iRT/V$.'
          }
        ]
      }
    },
    {
      id: 'gl5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Dalton\'s Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A tank contains 4.0 mol O₂ and 6.0 mol N₂ at 800 kPa total. The partial pressure of O₂ is:',
            options: [
              '200 kPa',
              '320 kPa',
              '480 kPa',
              '800 kPa'
            ],
            correctAnswer: 1,
            explanation: '$\\chi_{O_2} = 4.0/(4.0+6.0) = 0.40$. $P_{O_2} = 0.40 \\times 800 = 320$ kPa.'
          },
          {
            question: 'Why must you correct for water vapor pressure when collecting gas over water?',
            options: [
              'Water reacts with the gas',
              'Water vapor contributes to the total measured pressure',
              'The water cools the gas',
              'Water changes the molar mass of the gas'
            ],
            correctAnswer: 1,
            explanation: 'The gas you collect is mixed with water vapor, which contributes its own partial pressure. To find the pressure of the dry gas, you subtract the vapor pressure of water from the total measured pressure.'
          }
        ]
      }
    }
  ]
}
