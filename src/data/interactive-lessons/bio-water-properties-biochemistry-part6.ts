export const bioWaterPropertiesPart6Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate6-workshop',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop: Water Properties

Let's apply what you've learned about water's properties to solve AP Biology-style problems.

### Strategy for Water Property Questions

1. **Identify the property** being tested (cohesion, adhesion, specific heat, etc.)
2. **Connect to hydrogen bonding** — almost every water property question traces back to H-bonds
3. **Link to biological significance** — the AP exam emphasizes biological applications
4. **Eliminate wrong answers** by checking if the property matches the phenomenon
      `
    },
    {
      id: 'wate6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student observes that a paper towel absorbs water and the water moves upward against gravity. Which property best explains this?',
            options: [
              'Evaporative cooling',
              'Capillary action due to adhesion and cohesion',
              'High specific heat',
              'Low density of ice'
            ],
            correctAnswer: 1,
            explanation: 'Water moves upward in the paper towel fibers due to capillary action — adhesion to the cellulose fibers combined with cohesion between water molecules.'
          },
          {
            question: 'In an experiment, a student adds salt to two beakers of water. Beaker A is at 20°C and Beaker B is at 80°C. In which beaker will salt dissolve faster, and why?',
            options: [
              'Beaker A — cold water is a better solvent',
              'Beaker B — higher kinetic energy increases dissolution rate',
              'Both dissolve at the same rate',
              'Neither — salt does not dissolve in water'
            ],
            correctAnswer: 1,
            explanation: 'At higher temperatures, water molecules have more kinetic energy and interact more vigorously with solute particles, increasing the rate of dissolution.'
          }
        ]
      }
    },
    {
      id: 'wate6-practice',
      type: 'text' as const,
      content: `
# ## Practice Scenarios

### Scenario 1: Desert Organisms
Desert lizards are ectotherms that regulate body temperature behaviorally. During the hottest part of the day, they retreat to burrows where the soil retains moisture.

**Key concept:** Water's high specific heat moderates temperature underground.

### Scenario 2: Transpiration Stream
Water moves from roots to leaves in tall trees (some over 100 m tall) without any pump mechanism.

**Key concept:** Cohesion-tension theory — transpiration creates negative pressure, and cohesion/adhesion pull water upward through xylem.
      `
    },
    {
      id: 'wate6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do large bodies of water moderate nearby land temperatures?',
            options: [
              'Water reflects sunlight',
              'Water has a high specific heat and absorbs/releases heat slowly',
              'Water evaporates and creates clouds',
              'Water is transparent to infrared radiation'
            ],
            correctAnswer: 1,
            explanation: 'Water\'s high specific heat means it absorbs and releases large amounts of heat energy with relatively small temperature changes, moderating nearby temperatures.'
          }
        ]
      }
    },
    {
      id: 'wate6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transpiration in plants is driven by ___ at the leaves',
            options: ['active transport', 'evaporation', 'osmosis', 'root pressure']
          },
          {
            label: 'Sweating cools the body because water has a high ___',
            options: ['specific heat', 'heat of vaporization', 'density', 'surface tension']
          },
          {
            label: 'The cohesion-tension theory explains water transport in ___',
            options: ['blood vessels', 'xylem', 'phloem', 'stomata']
          }
        ],
        correctAnswers: ['evaporation', 'heat of vaporization', 'xylem'],
        hint1: 'Water evaporating from leaf surfaces drives the transpiration stream.',
        hint2: 'It takes a lot of energy to evaporate water.',
        hint3: 'Xylem transports water; phloem transports sugars.',
        explanation: 'Transpiration is driven by evaporation at leaf surfaces. Sweating cools via high heat of vaporization. The cohesion-tension theory describes water movement through xylem.'
      }
    }
  ]
}
