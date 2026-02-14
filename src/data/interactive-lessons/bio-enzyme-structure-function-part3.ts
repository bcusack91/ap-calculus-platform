export const bioEnzymesPart3Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy3-temp',
      type: 'text' as const,
      content: `
# ## Temperature & pH Effects

### Temperature

- Increasing temperature **increases reaction rate** (more kinetic energy, more collisions)
- Until the **optimal temperature** is reached
- Above optimal: enzyme **denatures** (3D structure unfolds)
- Most human enzymes: optimal ~37°C
- Thermophilic bacteria: optimal 70-80°C

### pH

- Each enzyme has an **optimal pH**
- Deviations disrupt ionic bonds and hydrogen bonds in the tertiary structure

| Enzyme | Optimal pH | Location |
|--------|-----------|----------|
| **Pepsin** | ~2 | Stomach |
| **Trypsin** | ~8 | Small intestine |
| **Catalase** | ~7 | Most cells |
| **Salivary amylase** | ~7 | Mouth |
      `
    },
    {
      id: 'enzy3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Pepsin works best at pH 2 because:',
            options: [
              'All enzymes prefer acidic conditions',
              'The stomach is acidic and pepsin evolved to function there',
              'Low pH increases activation energy',
              'pH 2 denatures all other proteins'
            ],
            correctAnswer: 1,
            explanation: 'Pepsin evolved to function in the highly acidic environment of the stomach (pH ~2). Its optimal pH reflects its natural working conditions.'
          }
        ]
      }
    },
    {
      id: 'enzy3-conc',
      type: 'text' as const,
      content: `
# ## Enzyme & Substrate Concentration

### Effect of Enzyme Concentration
- At fixed [S], increasing [enzyme] increases rate **linearly**
- More enzyme = more active sites available

### Effect of Substrate Concentration
- At fixed [enzyme], increasing [S] increases rate until $V_{max}$
- Eventually, all active sites are occupied (saturation)
      `
    },
    {
      id: 'enzy3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What happens to an enzyme heated well above its optimal temperature?',
            options: [
              'It works faster',
              'It denatures and loses function',
              'Its Km decreases',
              'It becomes a ribozyme'
            ],
            correctAnswer: 1,
            explanation: 'Excessive heat breaks the weak bonds (H-bonds, ionic bonds, hydrophobic interactions) that maintain the enzyme\'s 3D shape, causing denaturation.'
          }
        ]
      }
    },
    {
      id: 'enzy3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Human enzymes generally have an optimal temperature near ___°C',
            options: ['0', '25', '37', '100']
          },
          {
            label: 'Denaturation disrupts the enzyme\'s ___',
            options: ['primary structure', '3D shape', 'amino acid sequence', 'peptide bonds']
          },
          {
            label: 'Increasing enzyme concentration ___ the reaction rate',
            options: ['increases', 'decreases', 'does not affect', 'halves']
          }
        ],
        correctAnswers: ['37', '3D shape', 'increases'],
        hint1: 'Normal body temperature.',
        hint2: 'Shape = function in biology.',
        hint3: 'More enzyme = more active sites.',
        explanation: 'Human enzymes work best at body temperature (37°C). Denaturation disrupts the 3D shape while preserving the primary structure. More enzyme molecules increase the rate.'
      }
    }
  ]
}
