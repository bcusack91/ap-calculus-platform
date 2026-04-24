export const physics2DensityPressurePart3Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp3-intro',
      type: 'text' as const,
      content: `
# 📏 Manometers & Pressure Measurement

**Part 3 of 7 — Measuring Pressure Like a Physicist**

How do we actually *measure* pressure? This part covers the tools and techniques that appear on AP exams — manometers, barometers, and pressure conversions.
      `
    },
    {
      id: 'dp3-barometer',
      type: 'text' as const,
      content: `
## The Mercury Barometer

A classic barometer is a tube of mercury inverted in a mercury dish. The atmosphere pushes down on the dish, supporting a column of mercury:

$$P_{\\text{atm}} = \\rho_{\\text{Hg}} g h$$

At sea level:
$$h = \\frac{P_{\\text{atm}}}{\\rho_{\\text{Hg}} g} = \\frac{101{,}325}{(13{,}600)(9.8)} \\approx 0.760 \\text{ m} = 760 \\text{ mm}$$

This is why atmospheric pressure is sometimes stated as "760 mmHg" or "760 torr."

### Why Mercury?

Mercury is very dense ($\\rho = 13{,}600$ kg/m³), so the column is only 76 cm tall. A water barometer would need a column over **10 meters** tall!
      `
    },
    {
      id: 'dp3-manometer',
      type: 'text' as const,
      content: `
## U-Tube Manometers

A **manometer** is a U-shaped tube partially filled with liquid, used to measure the pressure of a gas:

### Open Manometer

One side is connected to a gas, the other is open to the atmosphere.

- If the gas side is **lower**, $P_{\\text{gas}} > P_{\\text{atm}}$
- If the gas side is **higher**, $P_{\\text{gas}} < P_{\\text{atm}}$

$$P_{\\text{gas}} = P_{\\text{atm}} + \\rho g \\Delta h \\quad \\text{(gas side lower)}$$
$$P_{\\text{gas}} = P_{\\text{atm}} - \\rho g \\Delta h \\quad \\text{(gas side higher)}$$

Where $\\Delta h$ is the **height difference** between the two columns.

### Closed Manometer

One side is sealed (vacuum above the liquid). The height difference directly gives the gas pressure:

$$P_{\\text{gas}} = \\rho g h$$
      `
    },
    {
      id: 'dp3-units-conversion',
      type: 'text' as const,
      content: `
## Pressure Unit Conversions

You need to be fluent with these on the AP exam:

| Unit | Equivalent |
|:---:|:---:|
| 1 atm | 101,325 Pa |
| 1 atm | 760 mmHg (torr) |
| 1 atm | 14.7 psi |
| 1 bar | 100,000 Pa |
| 1 kPa | 1000 Pa |

### Quick Conversion Strategy

**To convert mmHg → Pa:**
$$P(\\text{Pa}) = \\frac{P(\\text{mmHg})}{760} \\times 101{,}325$$

Or equivalently: 1 mmHg ≈ 133.3 Pa.
      `
    },
    {
      id: 'dp3-manometer-quiz',
      type: 'multiple-choice' as const,
      content: `
**Manometer Reasoning Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An open manometer shows the mercury level is 40 mm higher on the gas side than the open side. The gas pressure is:',
            options: [
              'Greater than atmospheric by 40 mmHg',
              'Less than atmospheric by 40 mmHg',
              'Exactly atmospheric',
              'Cannot determine without knowing the liquid'
            ],
            correctAnswer: 1,
            explanation: 'Gas side higher means the gas pressure is weaker than atmospheric — the atmosphere pushes mercury down on the open side, raising it on the gas side. The gas pressure is *less* than atmospheric by $\\rho g \\Delta h$.'
          },
          {
            question: 'Why can\'t you use a water manometer to measure pressures much above 1 atm?',
            options: [
              'Water evaporates too easily',
              'Water would require a 10+ meter column, which is impractical',
              'Water is too viscous',
              'Water doesn\'t exert pressure'
            ],
            correctAnswer: 1,
            explanation: '1 atm of pressure supports ~10.3 m of water. Measuring 2 atm would need a ~20 m column — impractical. Mercury\'s high density keeps columns short.'
          },
          {
            question: 'A gas has a pressure of 2.5 atm (absolute). The gauge pressure is:',
            options: [
              '2.5 atm',
              '1.5 atm',
              '3.5 atm',
              '0 atm'
            ],
            correctAnswer: 1,
            explanation: '$P_{\\text{gauge}} = P_{\\text{abs}} - P_{\\text{atm}} = 2.5 - 1.0 = 1.5$ atm.'
          }
        ]
      }
    },
    {
      id: 'dp3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Pressure Measurement Drill** (use $g = 10$ m/s²)

A closed-end manometer has mercury ($\\rho = 13{,}600$ kg/m³) with a height of 0.50 m.

1) Gas pressure in Pa

2) Gas pressure in atm (round to 2 decimals)

3) Gas pressure in mmHg

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['68000', '0.67', '500'],
        hint1: '$P = \\rho g h = (13{,}600)(10)(0.50)$.',
        hint2: 'Convert Pa to atm: divide by 101,325.',
        hint3: '0.50 m = 500 mm.',
        explanation: '$P = (13{,}600)(10)(0.50) = 68{,}000$ Pa. In atm: $68{,}000/101{,}325 \\approx 0.67$ atm. In mmHg: 500 mm (since the column height is 0.50 m = 500 mm of mercury).'
      }
    },
    {
      id: 'dp3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'On top of a tall mountain, a barometer reads 650 mmHg instead of 760 mmHg. This means:',
            options: [
              'The barometer is broken',
              'Atmospheric pressure is lower at higher altitude',
              'Mercury is less dense at altitude',
              'Gravity is significantly weaker'
            ],
            correctAnswer: 1,
            explanation: 'At higher altitude, there is less atmosphere above you pressing down. Lower $P_{\\text{atm}}$ means a shorter mercury column. This is how altimeters work!'
          },
          {
            question: 'Two identical containers are connected at the bottom. One has water, the other has mercury. When connected, the levels will adjust so that:',
            options: [
              'Both surfaces are at the same height',
              'Pressure at the connecting point is equal from both sides',
              'Mercury rises and water drops',
              'Nothing happens — they don\'t mix'
            ],
            correctAnswer: 1,
            explanation: 'The fluid levels adjust until the pressure at the connecting point is equal from both sides: $\\rho_1 g h_1 = \\rho_2 g h_2$. Since mercury is denser, its column will be shorter.'
          }
        ]
      }
    }
  ]
}
