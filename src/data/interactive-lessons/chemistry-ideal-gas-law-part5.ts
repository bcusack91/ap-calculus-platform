export const chemIdealGasLawPart5Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl5-intro',
      type: 'text' as const,
      content: `# 🎈 Dalton's Law of Partial Pressures

**Part 5 of 7 — Gas Mixtures**

---

### Topics in This Part

| Section |
|---------|
| 📏 Dalton's Law |
| Using the Ideal Gas Law |
| Example |
| ⚖️ Mole Fraction |
| Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gl5-daltons-law',
      type: 'text' as const,
      content: `
## 📏 Dalton's Law

The **total pressure** of a gas mixture equals the **sum of the partial pressures** of each component gas:

$$\\boxed{P_{\\text{total}} = P_1 + P_2 + P_3 + \\cdots}$$

Each partial pressure is the pressure that gas would exert if it **alone** occupied the entire container.


---

### Using the Ideal Gas Law

Since $PV = nRT$, each gas independently obeys:

$$P_i = \\frac{n_iRT}{V}$$

And the total:

$$P_{\\text{total}} = \\frac{n_{\\text{total}}RT}{V}$$


---

### Example

> **Problem:** A 10.0 L container at 300 K holds 0.200 mol $N_{2}$ and 0.300 mol $O_{2}$.

> **Solution:**

$$P_{N_2} = \\frac{(0.200)(0.0821)(300)}{10.0} = 0.493 \\text{ atm}$$

$$P_{O_2} = \\frac{(0.300)(0.0821)(300)}{10.0} = 0.739 \\text{ atm}$$

$$P_{\\text{total}} = 0.493 + 0.739 = 1.232 \\text{ atm}$$
      `
    },
    {
      id: 'gl5-mole-fraction',
      type: 'text' as const,
      content: `
## ⚖️ Mole Fraction

The **mole fraction** ($\\chi$) of a component is the fraction of total moles that it contributes:

$$\\chi_i = \\frac{n_i}{n_{\\text{total}}}$$

The partial pressure is related to mole fraction by:

$$\\boxed{P_i = \\chi_i \\times P_{\\text{total}}}$$


---

### Example

> **Problem:** A mixture has 2.0 mol He and 3.0 mol Ne at a total pressure of 5.0 atm.

> **Solution:**

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
## 💨 Gas Collection Over Water

> 💡 **Tip:** When a gas is collected by displacement of water, the collected gas is **mixed with water vapor**. You must subtract the vapor pressure of water:

$$\\boxed{P_{\\text{gas}} = P_{\\text{total}} - P_{\\text{H}_2\\text{O}}}$$

The vapor pressure of water depends on temperature (values are given in data tables).


---

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
            question: 'A container holds 1.0 mol of $N_{2}$ and 3.0 mol of $H_{2}$ at a total pressure of 2.0 atm. What is the partial pressure of $H_{2}$?',
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
            question: 'If the mole fraction of $O_{2}$ in air is 0.21, and the total atmospheric pressure is 1.00 atm, what is the partial pressure of $O_{2}$?',
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

**1)** A flask contains 0.50 mol Ar and 1.50 mol Ne. The total pressure is 4.00 atm. What is the partial pressure of Ar? (in atm)

**2)** Hydrogen gas is collected over water at 22°C ($P_{H_2O}$ = 19.8 mmHg). The total pressure is 745 mmHg. What is the pressure of the dry hydrogen? (in mmHg, to 3 significant figures)

**3)** A mixture has $\\chi_{CO_2} = 0.30$ and the total pressure is 2.50 atm. What is $P_{CO_2}$? (in atm)
      `,
      exercise: {
        inputs: [
          {
            label: 'Partial pressure of Ar (atm)',
            correctAnswer: '1.00',
            explanation: '$\\chi_{Ar} = 0.50/(0.50+1.50) = 0.25$. $P_{Ar} = 0.25 \\times 4.00 = 1.00$ atm.'
          },
          {
            label: 'Pressure of dry $H_{2}$ (mmHg)',
            correctAnswer: '725.2',
            explanation: '$P_{H_2} = 745 - 19.8 = 725.2$ mmHg.'
          },
          {
            label: 'Partial pressure of $CO_{2}$ (atm)',
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
**Dalton's Law Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl5-dd1',
            label: 'In a gas mixture, the mole fractions ___',
            options: ['add up to 1', 'add up to the total pressure', 'are all equal'],
            correctIndex: 0,
            explanation: 'Mole fractions always sum to exactly 1 (or 100% of the mixture).'
          },
          {
            id: 'gl5-dd2',
            label: 'When collecting gas over water, total pressure is ___ the dry gas pressure',
            options: ['higher than', 'lower than', 'equal to'],
            correctIndex: 0,
            explanation: 'When collecting gas over water, the total pressure includes water vapor, so the total is higher than the pressure of the dry gas alone.'
          },
          {
            id: 'gl5-dd3',
            label: 'Partial pressure of a gas depends on the ___',
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
**Exit Quiz — Dalton's Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A tank contains 4.0 mol $O_{2}$ and 6.0 mol $N_{2}$ at 800 kPa total. The partial pressure of $O_{2}$ is:',
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
          },
          {
            question: 'A mixture contains 2.0 mol He, 3.0 mol Ne, and 5.0 mol Ar. The mole fraction of Ne is:',
            options: [
              '0.20',
              '0.30',
              '0.50',
              '0.60'
            ],
            correctAnswer: 1,
            explanation: '$\\chi_{Ne} = 3.0/(2.0+3.0+5.0) = 3.0/10.0 = 0.30$.'
          },
          {
            question: `According to Dalton's Law, the total pressure of a gas mixture equals:`,
            options: [
              'The average of the partial pressures',
              'The product of the partial pressures',
              'The sum of all partial pressures',
              'The partial pressure of the most abundant gas'
            ],
            correctAnswer: 2,
            explanation: `Dalton's Law: $P_{\\text{total}} = P_1 + P_2 + P_3 + \\ldots$ The total pressure is the sum of each gas's partial pressure.`
          },
          {
            question: 'Gas is collected over water at 25°C (vapor pressure = 23.8 mmHg). If the total pressure is 755 mmHg, the pressure of the dry gas is:',
            options: [
              '731.2 mmHg',
              '755 mmHg',
              '778.8 mmHg',
              '23.8 mmHg'
            ],
            correctAnswer: 0,
            explanation: '$P_{\\text{dry}} = P_{\\text{total}} - P_{\\text{water}} = 755 - 23.8 = 731.2$ mmHg.'
          },
          {
            question: 'In a container at 500 kPa total, gas X has a mole fraction of 0.60. The partial pressure of gas X is:',
            options: [
              '200 kPa',
              '300 kPa',
              '400 kPa',
              '500 kPa'
            ],
            correctAnswer: 1,
            explanation: '$P_X = \\chi_X \\times P_{\\text{total}} = 0.60 \\times 500 = 300$ kPa.'
          },
          {
            question: 'The mole fractions in a gas mixture must always sum to:',
            options: [
              '0',
              '0.5',
              '1.0',
              'It depends on the pressure'
            ],
            correctAnswer: 2,
            explanation: 'By definition, mole fractions always sum to exactly 1.0 (representing 100% of the mixture).'
          },
          {
            question: `A diver's tank contains 80% $N_{2}$ and 20% $O_{2}$ at 200 atm total. The partial pressure of $O_{2}$ is:`,
            options: [
              '20 atm',
              '40 atm',
              '100 atm',
              '160 atm'
            ],
            correctAnswer: 1,
            explanation: '$P_{O_2} = 0.20 \\times 200 = 40$ atm. Each gas contributes its mole fraction times the total pressure.'
          },
          {
            question: 'If 3 gases in a container have partial pressures of 150, 250, and 300 mmHg, the total pressure is:',
            options: [
              '233 mmHg',
              '300 mmHg',
              '500 mmHg',
              '700 mmHg'
            ],
            correctAnswer: 3,
            explanation: '$P_{\\text{total}} = 150 + 250 + 300 = 700$ mmHg. Simply add all partial pressures.'
          },
          {
            question: 'Adding more of gas A to a rigid container (constant V, T) that already contains gas B will:',
            options: [
              'Decrease the partial pressure of gas B',
              'Not change the partial pressure of gas B',
              'Increase the partial pressure of gas B',
              'Decrease the total pressure'
            ],
            correctAnswer: 1,
            explanation: 'Each gas behaves independently. Adding gas A increases $P_A$ and $P_{\\text{total}}$, but $P_B$ stays the same since $n_B$, $V$, and $T$ are unchanged.'
          }
        ]
      }
    }
  ]
}
