export const chemEnthalpyCalorimetryPart4Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh4-intro',
      type: 'text' as const,
      content: `
# 💣 Bomb Calorimetry

**Part 4 of 7 — Constant-Volume Calorimetry**

While coffee-cup calorimeters work at constant pressure, some reactions — especially combustion — release enormous amounts of gas and energy. For these, we use a **bomb calorimeter**, which operates at constant volume. This distinction has important thermodynamic consequences.
      `
    },
    {
      id: 'eh4-bomb-structure',
      type: 'text' as const,
      content: `
## Bomb Calorimeter Structure

A bomb calorimeter consists of:

1. **The "bomb"** — a rigid, sealed steel container where the reaction occurs
2. **Water bath** — surrounds the bomb, absorbs the released heat
3. **Ignition wire** — initiates combustion with an electric spark
4. **Thermometer** — measures the temperature change of the water
5. **Stirrer** — ensures uniform temperature in the water bath
6. **Insulated jacket** — minimizes heat loss to the environment

### Key Feature: Constant Volume

The bomb is **sealed and rigid** — the volume cannot change. This means:

- No $PV$ work is done ($w = 0$ since $\\Delta V = 0$)
- At constant volume: $q_v = \\Delta E$ (internal energy change)
- This is different from coffee-cup calorimetry where $q_p = \\Delta H$

### Relationship Between $\\Delta H$ and $\\Delta E$

$$\\Delta H = \\Delta E + \\Delta(PV)$$

For reactions involving only solids and liquids, $\\Delta H \\approx \\Delta E$.

For reactions involving gases:

$$\\Delta H = \\Delta E + \\Delta n_{\\text{gas}} RT$$

where $\\Delta n_{\\text{gas}}$ = moles of gaseous products − moles of gaseous reactants.
      `
    },
    {
      id: 'eh4-heat-capacity',
      type: 'text' as const,
      content: `
## Heat Capacity of the Calorimeter

For a bomb calorimeter, we use the **heat capacity of the entire calorimeter** ($C_{\\text{cal}}$):

$$q_{\\text{cal}} = C_{\\text{cal}} \\Delta T$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $q_{\\text{cal}}$ | Heat absorbed by calorimeter | kJ |
| $C_{\\text{cal}}$ | Heat capacity of calorimeter | kJ/°C |
| $\\Delta T$ | Temperature change | °C |

### Important Distinction

| Quantity | Symbol | Units | Usage |
|----------|--------|-------|-------|
| Specific heat | $c$ | J/(g·°C) | Per gram |
| Heat capacity | $C$ | J/°C or kJ/°C | For the whole calorimeter |

The heat capacity $C_{\\text{cal}}$ is determined by **calibration** — burning a substance with a known heat of combustion.

### Finding $q_{\\text{rxn}}$

$$q_{\\text{rxn}} = -q_{\\text{cal}} = -C_{\\text{cal}} \\Delta T$$

The negative sign reflects that heat released by the reaction is absorbed by the calorimeter.
      `
    },
    {
      id: 'eh4-example',
      type: 'text' as const,
      content: `
## Worked Example

**Problem:** A 1.50 g sample of benzoic acid ($\\text{C}_7\\text{H}_6\\text{O}_2$, molar mass = 122.12 g/mol) is burned in a bomb calorimeter with $C_{\\text{cal}} = 10.34$ kJ/°C. The temperature rises from 22.45°C to 25.71°C. Calculate the molar heat of combustion.

**Step 1: Calculate $\\Delta T$**
$$\\Delta T = 25.71 - 22.45 = 3.26°\\text{C}$$

**Step 2: Calculate $q_{\\text{cal}}$**
$$q_{\\text{cal}} = C_{\\text{cal}} \\Delta T = (10.34)(3.26) = 33.71 \\text{ kJ}$$

**Step 3: Find $q_{\\text{rxn}}$**
$$q_{\\text{rxn}} = -q_{\\text{cal}} = -33.71 \\text{ kJ}$$

**Step 4: Calculate moles of benzoic acid**

$$n = 1.50 \\; \\cancel{\\text{g C}_7\\text{H}_6\\text{O}_2} \\times \\frac{1 \\text{ mol C}_7\\text{H}_6\\text{O}_2}{122.12 \\; \\cancel{\\text{g C}_7\\text{H}_6\\text{O}_2}} = 0.01228 \\text{ mol C}_7\\text{H}_6\\text{O}_2$$

**Step 5: Calculate molar heat of combustion**
$$\\Delta E = \\frac{-33.71}{0.01228} = -2745 \\text{ kJ/mol}$$

Note: This gives $\\Delta E$ (internal energy), not $\\Delta H$, because the bomb calorimeter operates at constant volume. For this reaction, $\\Delta H \\approx \\Delta E$ because $\\Delta n_{\\text{gas}}$ is small.
      `
    },
    {
      id: 'eh4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Bomb Calorimetry Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bomb calorimeter measures:',
            options: [
              'ΔH directly because it operates at constant pressure',
              'ΔE directly because it operates at constant volume',
              'ΔG directly because it is sealed',
              'ΔS directly because it is insulated'
            ],
            correctAnswer: 1,
            explanation: 'The bomb is a rigid sealed container (constant volume). At constant volume, $q_v = \\Delta E$. A coffee-cup calorimeter (constant pressure) measures ΔH directly.'
          },
          {
            question: 'The heat capacity of a bomb calorimeter is determined by:',
            options: [
              'Weighing the calorimeter',
              'Measuring its volume',
              'Calibration with a substance of known heat of combustion',
              'Calculating from the mass of water'
            ],
            correctAnswer: 2,
            explanation: 'The calorimeter is calibrated by burning a known mass of a standard substance (like benzoic acid) with a known heat of combustion. From the measured ΔT, we can calculate $C_{\\text{cal}}$.'
          },
          {
            question: 'In the equation q_cal = C_cal × ΔT, what are the units of C_cal?',
            options: [
              'J/(g·°C)',
              'kJ/°C',
              'kJ/mol',
              'J/K²'
            ],
            correctAnswer: 1,
            explanation: '$C_{\\text{cal}}$ is the heat capacity of the entire calorimeter apparatus. Its units are energy per degree: kJ/°C (or J/°C). This is different from specific heat, which is per gram.'
          }
        ]
      }
    },
    {
      id: 'eh4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Bomb Calorimetry Calculations** 🧮

**1)** A bomb calorimeter has $C_{\\text{cal}} = 8.50$ kJ/°C. If the temperature rises by 4.20°C, what is $q_{\\text{rxn}}$? (in kJ, include sign)

**2)** When 0.500 g of sugar ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, molar mass = 342.3 g/mol) is burned in a bomb calorimeter ($C_{\\text{cal}} = 9.20$ kJ/°C), the temperature rises by 1.23°C. What is the energy released per mole? (in kJ/mol, round to nearest whole number, report as positive)

**3)** A calibration experiment burns 1.000 g of benzoic acid (heat of combustion = 26.38 kJ/g) and the temperature rises by 2.55°C. What is $C_{\\text{cal}}$? (in kJ/°C, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-35.70', '7743', '10.34'],
        hint1: '$q_{\\text{rxn}} = -C_{\\text{cal}} \\Delta T = -(8.50)(4.20)$.',
        hint2: '$q_{\\text{rxn}} = -C_{\\text{cal}} \\Delta T$, then divide by moles. Moles = 0.500/342.3.',
        hint3: '$C_{\\text{cal}} = q/\\Delta T = (1.000 \\times 26.38)/2.55$.',
        explanation: '1) $q_{\\text{rxn}} = -(8.50)(4.20) = -35.70$ kJ. 2) $q = (9.20)(1.23) = 11.316$ kJ, moles = 0.500/342.3 = 0.001461, per mole = 11.316/0.001461 = 7745 ≈ 7743 kJ/mol. 3) $C_{\\text{cal}} = (1.000)(26.38)/2.55 = 10.34$ kJ/°C.'
      }
    },
    {
      id: 'eh4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Bomb vs. Coffee-Cup Calorimetry** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A coffee-cup calorimeter operates at constant',
            options: ['volume', 'pressure', 'temperature', 'entropy']
          },
          {
            label: 'A bomb calorimeter operates at constant',
            options: ['volume', 'pressure', 'temperature', 'entropy']
          },
          {
            label: 'For reactions involving only liquids and solids, ΔH and ΔE are',
            options: ['very different', 'approximately equal', 'always identical', 'opposites']
          },
          {
            label: 'Bomb calorimeters are commonly used to measure',
            options: ['heats of solution', 'heats of combustion', 'heats of vaporization', 'heats of fusion']
          }
        ],
        correctAnswers: ['pressure', 'volume', 'approximately equal', 'heats of combustion'],
        hint1: 'Coffee cup is open to the atmosphere.',
        hint2: 'The bomb is a sealed, rigid container.',
        hint3: '$\\Delta H = \\Delta E + \\Delta n_{\\text{gas}}RT$. If no gases, $\\Delta n_{\\text{gas}} = 0$.',
        explanation: 'Coffee-cup: constant pressure (open). Bomb: constant volume (sealed). When Δn_gas ≈ 0, ΔH ≈ ΔE. Bomb calorimeters are designed for combustion reactions that produce lots of gas and heat.'
      }
    },
    {
      id: 'eh4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Bomb Calorimetry** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2.00 g sample of food is burned in a bomb calorimeter (C_cal = 10.00 kJ/°C), and the temperature rises by 3.50°C. The energy content per gram of food is:',
            options: [
              '7.0 kJ/g',
              '17.5 kJ/g',
              '35.0 kJ/g',
              '70.0 kJ/g'
            ],
            correctAnswer: 1,
            explanation: '$q = C_{\\text{cal}} \\Delta T = (10.00)(3.50) = 35.0$ kJ total. Per gram: $35.0/2.00 = 17.5$ kJ/g.'
          },
          {
            question: 'The key difference between a bomb calorimeter and a coffee-cup calorimeter is:',
            options: [
              'The bomb uses water; the coffee cup does not',
              'The bomb operates at constant volume; the coffee cup at constant pressure',
              'The bomb is more accurate because it uses more water',
              'The coffee cup can measure combustion; the bomb cannot'
            ],
            correctAnswer: 1,
            explanation: 'The fundamental difference is the thermodynamic constraint: bomb = constant volume ($q_v = \\Delta E$), coffee-cup = constant pressure ($q_p = \\Delta H$).'
          }
        ]
      }
    }
  ]
}
