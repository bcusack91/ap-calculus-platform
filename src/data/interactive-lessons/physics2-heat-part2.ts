export const physics2HeatPart2Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht2-intro',
      type: 'text' as const,
      content: `
# 🧊 Specific Heat Capacity

**Part 2 of 7 — Why Does Water Take So Long to Boil?**

Different substances require different amounts of energy to change temperature by the same amount. This property is called **specific heat capacity** — and it explains everything from why beaches are comfortable to why car engines use water-based coolant.
      `
    },
    {
      id: 'ht2-equation',
      type: 'text' as const,
      content: `
## The Fundamental Equation

$$Q = mc\\Delta T$$

Where:
- $Q$ = heat energy transferred (J)
- $m$ = mass of the substance (kg)
- $c$ = specific heat capacity (J/(kg·°C) or J/(kg·K))
- $\\Delta T = T_f - T_i$ = change in temperature (°C or K)

### Understanding the Variables

**Specific heat capacity** $c$ tells you: "How many joules does it take to raise 1 kg of this substance by 1°C?"

| Substance | $c$ (J/(kg·°C)) |
|---|---|
| Water | 4{,}186 |
| Ice | 2{,}090 |
| Steam | 2{,}010 |
| Aluminum | 900 |
| Iron/Steel | 450 |
| Copper | 390 |
| Lead | 128 |
| Gold | 129 |

### Sign of $Q$ and $\\Delta T$

- If $T_f > T_i$: $\\Delta T > 0$, so $Q > 0$ → substance **absorbs** heat
- If $T_f < T_i$: $\\Delta T < 0$, so $Q < 0$ → substance **releases** heat

The sign convention is built right into the equation!
      `
    },
    {
      id: 'ht2-water',
      type: 'text' as const,
      content: `
## Why Water Is Special

Water has an exceptionally high specific heat: $c = 4{,}186$ J/(kg·°C). This is about:
- **9.3×** higher than iron
- **10.7×** higher than copper
- **32.7×** higher than lead

### Consequences of Water's High Specific Heat

**1. Climate Moderation**
Coastal cities have milder climates than inland cities. Water absorbs and releases large amounts of energy with relatively small temperature changes, so oceans act as thermal buffers.

**2. Biological Importance**
The human body is ~60% water. This high specific heat helps us maintain a stable body temperature — our bodies can absorb or release significant energy without dangerous temperature swings.

**3. Cooling Systems**
Car radiators, nuclear power plants, and computer liquid cooling systems all use water because it can carry away large amounts of heat energy per degree of temperature rise.

**4. Cooking**
A pot of water takes a long time to boil — but once heated, it stays hot for a long time too. This makes water excellent for cooking (even heat distribution) and terrible for fast heating.

### Why is water's specific heat so high?

Water molecules form **hydrogen bonds** with each other. Much of the energy you add goes into breaking and rearranging these bonds rather than increasing molecular speed (temperature). This extra "energy sink" gives water its unusually high specific heat.
      `
    },
    {
      id: 'ht2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Specific Heat Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Equal masses of water ($c = 4{,}186$ J/(kg·°C)) and copper ($c = 390$ J/(kg·°C)) both absorb 1{,}000 J of heat. Which statement is correct?',
            options: [
              'Water\'s temperature increases more than copper\'s',
              'Copper\'s temperature increases more than water\'s',
              'Both temperature increases are the same (same heat absorbed)',
              'Water absorbs more energy than copper'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta T = Q/(mc)$. Since copper has a much smaller $c$, the same energy produces a much larger temperature change in copper. Water resists temperature change because of its high specific heat.'
          },
          {
            question: 'If you double the mass of a substance and keep everything else the same, the heat required to raise its temperature by $\\Delta T$ will:',
            options: [
              'Stay the same',
              'Double',
              'Quadruple',
              'Be cut in half'
            ],
            correctAnswer: 1,
            explanation: '$Q = mc\\Delta T$. Since $Q$ is directly proportional to $m$, doubling the mass doubles the required heat.'
          }
        ]
      }
    },
    {
      id: 'ht2-calc-drill',
      type: 'input-boxes' as const,
      content: `
**Specific Heat Calculation Drill** 🔢

Use $Q = mc\\Delta T$. Round answers to the nearest whole number.

1) How much heat is needed to raise 2.0 kg of water from 20°C to 80°C? ($c_w = 4{,}186$ J/(kg·°C)). Answer in **kJ**.

2) A 0.50 kg block of aluminum ($c = 900$ J/(kg·°C)) absorbs 9{,}000 J of heat. What is the temperature change in °C?

3) A 0.30 kg piece of copper ($c = 390$ J/(kg·°C)) cools from 200°C to 50°C. How much heat does it release? Answer as a positive number in **J**.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['502', '20', '17550'],
        hint1: '$Q = (2.0)(4{,}186)(80 - 20) = (2.0)(4{,}186)(60)$. Convert J to kJ by dividing by 1{,}000.',
        hint2: '$\\Delta T = Q/(mc) = 9{,}000 / (0.50 \\times 900)$.',
        hint3: '$|Q| = mc|\\Delta T| = (0.30)(390)(200 - 50) = (0.30)(390)(150)$.',
        explanation: '1) $Q = (2.0)(4{,}186)(60) = 502{,}320$ J $= 502$ kJ. 2) $\\Delta T = 9{,}000/450 = 20$°C. 3) $|Q| = (0.30)(390)(150) = 17{,}550$ J.'
      }
    },
    {
      id: 'ht2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Specific Heat Mastery**
      `,
      exercise: {
        questions: [
          {
            question: 'On a hot summer day, the sand at the beach feels much hotter than the ocean water, even though both receive the same solar energy. This is because:',
            options: [
              'Sand absorbs more solar radiation than water',
              'Sand has a much lower specific heat than water',
              'Water reflects all sunlight',
              'Sand is darker in color'
            ],
            correctAnswer: 1,
            explanation: 'Sand has a low specific heat (~800 J/(kg·°C)) compared to water (4{,}186 J/(kg·°C)). The same energy input produces a much larger temperature change in sand than in water.'
          },
          {
            question: 'It takes 13{,}500 J to raise the temperature of 0.50 kg of an unknown substance by 30°C. What is the specific heat of this substance?',
            options: [
              '225 J/(kg·°C)',
              '450 J/(kg·°C)',
              '900 J/(kg·°C)',
              '1{,}350 J/(kg·°C)'
            ],
            correctAnswer: 2,
            explanation: '$c = Q/(m\\Delta T) = 13{,}500 / (0.50 \\times 30) = 13{,}500 / 15 = 900$ J/(kg·°C). This matches aluminum!'
          }
        ]
      }
    }
  ]
}
