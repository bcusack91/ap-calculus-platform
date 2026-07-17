export const bioWaterPropertiesPart7Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate7-synthesis',
      type: 'text' as const,
      content: `
## Synthesis: Water Properties in AP Biology

### Big Ideas Connected

- **Big Idea 1 (Evolution):** Water's properties created the aqueous environment where life evolved
- **Big Idea 2 (Energy):** Water's thermal properties are essential for metabolic regulation
- **Big Idea 3 (Information):** pH affects enzyme shape and function (protein structure)
- **Big Idea 4 (Systems):** Water's solvent properties enable transport and homeostasis

### AP Exam Tips

1. Free-response questions often ask you to **explain a property AND its biological significance**
2. Always connect back to **hydrogen bonding** as the underlying mechanism
3. Be prepared to explain **how disrupting water's properties would affect organisms**
4. Know the difference between cohesion, adhesion, and surface tension
      `
    },
    {
      id: 'wate7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why water is essential for life on Earth?',
            options: [
              'Water is the only liquid that exists naturally',
              'Water\'s hydrogen bonding creates properties that support biological processes',
              'Water is the simplest molecule in nature',
              'Water cannot be broken down into simpler substances'
            ],
            correctAnswer: 1,
            explanation: 'Water\'s hydrogen bonding network creates unique properties — high specific heat, solvent capability, cohesion/adhesion, and density anomaly — that collectively support life.'
          },
          {
            question: 'A biologist studying an enzyme finds it works best at pH 7.4 but denatures at pH 5.0. What cellular mechanism prevents this denaturation?',
            options: [
              'Active transport of $H^{+}$ ions',
              'Buffer systems that maintain pH',
              'Osmotic regulation',
              'Passive diffusion of $OH^{-}$ ions'
            ],
            correctAnswer: 1,
            explanation: 'Biological buffer systems (like the bicarbonate buffer in blood) resist pH changes, maintaining the optimal pH range for enzyme function.'
          }
        ]
      }
    },
    {
      id: 'wate7-review',
      type: 'text' as const,
      content: `
## Key Terms Review

| Term | Definition |
|------|------------|
| **Cohesion** | Attraction between water molecules |
| **Adhesion** | Attraction between water and other substances |
| **Surface tension** | Resistance of water surface to disruption |
| **Specific heat** | Energy needed to raise 1g of water by 1°C |
| **Heat of vaporization** | Energy to convert liquid water to gas |
| **Hydrophilic** | Water-attracting (polar/charged) |
| **Hydrophobic** | Water-repelling (nonpolar) |
| **Buffer** | Substance that resists pH changes |
| **pH** | $-\\log[H^+]$; measure of acidity |
      `
    },
    {
      id: 'wate7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a drought, a plant wilts because:',
            options: [
              'Adhesion forces break down',
              'Transpiration stops and water cannot be pulled up',
              'Water becomes hydrophobic',
              'Surface tension in leaves increases'
            ],
            correctAnswer: 1,
            explanation: 'Without sufficient water, the transpiration stream (driven by evaporation, cohesion, and adhesion) fails. Turgor pressure drops and the plant wilts.'
          }
        ]
      }
    },
    {
      id: 'wate7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The property of water most important for temperature regulation is ___',
            options: ['cohesion', 'high specific heat', 'adhesion', 'low density of ice']
          },
          {
            label: 'Enzymes function within narrow ___ ranges',
            options: ['temperature', 'pH', 'both temperature and pH', 'salinity']
          },
          {
            label: 'All of water\'s emergent properties arise from its ___',
            options: ['small size', 'hydrogen bonds', 'covalent bonds', 'atomic number']
          }
        ],
        correctAnswers: ['high specific heat', 'both temperature and pH', 'hydrogen bonds'],
        hint1: 'Which property relates to how much energy is needed to change temperature?',
        hint2: 'Enzymes are sensitive to multiple environmental factors.',
        hint3: 'The one structural feature that explains all water properties.',
        explanation: 'High specific heat regulates temperature. Enzymes are affected by both temperature and pH. Hydrogen bonding is the basis for all of water\'s unique biological properties.'
      }
    }
  ]
}
