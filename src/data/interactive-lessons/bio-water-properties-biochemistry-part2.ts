export const bioWaterPropertiesPart2Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate2-cohesion',
      type: 'text' as const,
      content: `
## Cohesion & Adhesion

### Cohesion

**Cohesion** is the attraction between molecules of the same substance. In water, hydrogen bonds create strong cohesion.

- Water molecules "stick" to each other
- Creates **surface tension** — a measure of how hard it is to break the surface
- Allows insects like water striders to walk on water

### Adhesion

**Adhesion** is the attraction between molecules of different substances.

- Water adheres to glass, cell walls, and xylem tubes
- Combined with cohesion, creates **capillary action**
- Essential for water transport in plants

### Capillary Action in Plants

Water moves up through narrow xylem vessels because:
1. **Adhesion** — water molecules cling to the xylem walls
2. **Cohesion** — water molecules pull neighboring molecules upward
3. **Transpiration pull** — evaporation at the leaves creates negative pressure
      `
    },
    {
      id: 'wate2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Capillary action in plants relies on which combination of forces?',
            options: [
              'Only cohesion',
              'Only adhesion',
              'Both cohesion and adhesion',
              'Ionic and covalent bonding'
            ],
            correctAnswer: 2,
            explanation: 'Capillary action requires both adhesion (water clinging to xylem walls) and cohesion (water molecules pulling each other along).'
          }
        ]
      }
    },
    {
      id: 'wate2-tension',
      type: 'text' as const,
      content: `
## Surface Tension & Biological Significance

Surface tension is the result of cohesive forces at the air-water interface.

| Property | Cause | Biological Example |
|----------|-------|--------------------|
| **Surface tension** | Cohesion | Water striders walk on water |
| **Capillary action** | Adhesion + cohesion | Water rises in xylem |
| **Meniscus** | Adhesion to glass | Water curves upward in a graduated cylinder |

Surface tension of water is **higher than almost any other liquid** because of the extensive hydrogen bonding network.
      `
    },
    {
      id: 'wate2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which property allows water striders to walk on water?',
            options: [
              'Adhesion',
              'Surface tension',
              'Capillary action',
              'Specific heat'
            ],
            correctAnswer: 1,
            explanation: 'Surface tension, caused by cohesive hydrogen bonds at the water surface, creates a "film" strong enough to support lightweight insects.'
          }
        ]
      }
    },
    {
      id: 'wate2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cohesion is the attraction between ___ molecules',
            options: ['same', 'different', 'polar and nonpolar', 'charged']
          },
          {
            label: 'Water rises in thin tubes due to ___',
            options: ['osmosis', 'capillary action', 'active transport', 'diffusion']
          },
          {
            label: 'The concave meniscus of water in glass occurs because of ___',
            options: ['cohesion only', 'adhesion to glass', 'gravity', 'surface tension only']
          }
        ],
        correctAnswers: ['same', 'capillary action', 'adhesion to glass'],
        hint1: 'Cohesion = same type of molecule.',
        hint2: 'Think about what makes water climb up narrow tubes.',
        hint3: 'Water curves upward because it is attracted to the glass.',
        explanation: 'Cohesion is between same molecules; capillary action combines cohesion and adhesion; the meniscus curves up because water adheres to glass more than it coheres to itself.'
      }
    }
  ]
}
