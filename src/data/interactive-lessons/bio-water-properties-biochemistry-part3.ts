export const bioWaterPropertiesPart3Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate3-specific-heat',
      type: 'text' as const,
      content: `
## High Specific Heat

Water has an unusually **high specific heat capacity**: 4.184 J/(g·°C).

This means water resists temperature change — it absorbs or releases a large amount of heat with only a small change in temperature.

### Why?

- Hydrogen bonds must be broken before kinetic energy (temperature) increases
- The extensive hydrogen bond network acts as a thermal buffer

### Biological Significance

| Scale | Example |
|-------|--------|
| **Cellular** | Cytoplasm resists temperature fluctuations |
| **Organismal** | Body temperature regulation (sweating) |
| **Environmental** | Coastal areas have milder climates |
| **Global** | Oceans moderate Earth's climate |
      `
    },
    {
      id: 'wate3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Water\'s high specific heat is due to:',
            options: [
              'Covalent bonds within the molecule',
              'The need to break hydrogen bonds before temperature rises',
              'Water\'s low molecular weight',
              'Water\'s ability to dissolve solutes'
            ],
            correctAnswer: 1,
            explanation: 'Energy input first goes to breaking hydrogen bonds between water molecules. Only after bonds break does kinetic energy (and thus temperature) increase.'
          }
        ]
      }
    },
    {
      id: 'wate3-evap',
      type: 'text' as const,
      content: `
## Evaporative Cooling & Heat of Vaporization

Water has a **high heat of vaporization** (2,260 J/g) — it takes a lot of energy to convert liquid water to gas.

### Evaporative Cooling

When water evaporates, the highest-energy molecules escape first, leaving cooler molecules behind. This cools the remaining liquid.

- **Sweating** cools the body through evaporative cooling
- **Transpiration** cools plant leaves
- **Panting** cools animals without sweat glands

Without this property, organisms would overheat during metabolic activity.
      `
    },
    {
      id: 'wate3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Evaporative cooling works because:',
            options: [
              'Cold water evaporates faster',
              'The highest-energy molecules leave the liquid',
              'Hydrogen bonds increase during evaporation',
              'Water absorbs heat from the environment when it evaporates'
            ],
            correctAnswer: 1,
            explanation: 'The fastest-moving (highest-energy) molecules escape the liquid surface, lowering the average kinetic energy (temperature) of the remaining molecules.'
          }
        ]
      }
    },
    {
      id: 'wate3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Water\'s specific heat is ___ compared to most substances',
            options: ['lower', 'higher', 'the same', 'unrelated']
          },
          {
            label: 'Sweating cools the body through ___',
            options: ['conduction', 'radiation', 'evaporative cooling', 'convection']
          },
          {
            label: 'Coastal regions have milder climates because of water\'s high ___',
            options: ['density', 'specific heat', 'viscosity', 'pH']
          }
        ],
        correctAnswers: ['higher', 'evaporative cooling', 'specific heat'],
        hint1: 'Water has one of the highest specific heats of common substances.',
        hint2: 'When sweat evaporates, it carries heat away.',
        hint3: 'Oceans absorb and release heat slowly.',
        explanation: 'Water\'s high specific heat buffers temperature changes. Sweating uses evaporative cooling. Coastal climates are moderated by the ocean\'s thermal stability.'
      }
    }
  ]
}
