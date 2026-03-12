export const bioMacromoleculesPart2Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol2-carbs',
      type: 'text' as const,
      content: `
## Carbohydrates: Structure & Function

### Monosaccharides

Simple sugars with the general formula $(CH_2O)_n$:

| Sugar | Carbons | Found in |
|-------|---------|----------|
| **Glucose** | 6 (hexose) | Blood sugar, cellular respiration |
| **Fructose** | 6 (hexose) | Fruits |
| **Galactose** | 6 (hexose) | Milk |
| **Ribose** | 5 (pentose) | RNA |
| **Deoxyribose** | 5 (pentose) | DNA |

### Disaccharides

Two monosaccharides linked by a **glycosidic bond**:

| Disaccharide | Components | Source |
|-------------|------------|--------|
| **Sucrose** | Glucose + Fructose | Table sugar |
| **Lactose** | Glucose + Galactose | Milk |
| **Maltose** | Glucose + Glucose | Germinating seeds |
      `
    },
    {
      id: 'biol2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What distinguishes cellulose from starch?',
            options: [
              'Different monomers',
              'Different glycosidic linkages (α vs β)',
              'Cellulose contains nitrogen',
              'Starch is branched, cellulose is not'
            ],
            correctAnswer: 1,
            explanation: 'Both are glucose polymers, but starch uses α-1,4 linkages while cellulose uses β-1,4 linkages. This makes cellulose indigestible to most animals.'
          }
        ]
      }
    },
    {
      id: 'biol2-poly',
      type: 'text' as const,
      content: `
## Polysaccharides

| Polysaccharide | Function | Organism | Linkage |
|---------------|----------|----------|---------|
| **Starch** | Energy storage | Plants | α-1,4 glucose |
| **Glycogen** | Energy storage | Animals | α-1,4 glucose (more branched) |
| **Cellulose** | Structural | Plants | β-1,4 glucose |
| **Chitin** | Structural | Arthropods, fungi | Modified glucose (NAG) |

**Key distinction:** Starch and glycogen use **alpha (α) linkages** (digestible), while cellulose uses **beta (β) linkages** (indigestible by most animals).
      `
    },
    {
      id: 'biol2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Glycogen is to animals as ___ is to plants.',
            options: [
              'Cellulose',
              'Starch',
              'Chitin',
              'Sucrose'
            ],
            correctAnswer: 1,
            explanation: 'Both glycogen and starch are energy storage polysaccharides. Glycogen is used by animals, starch by plants.'
          }
        ]
      }
    },
    {
      id: 'biol2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The monomer of carbohydrates is a ___',
            options: ['nucleotide', 'amino acid', 'monosaccharide', 'fatty acid']
          },
          {
            label: 'Sucrose is a ___ made of glucose and fructose',
            options: ['monosaccharide', 'disaccharide', 'polysaccharide', 'lipid']
          },
          {
            label: 'Cellulose provides ___ support in plants',
            options: ['energy', 'structural', 'genetic', 'enzymatic']
          }
        ],
        correctAnswers: ['monosaccharide', 'disaccharide', 'structural'],
        hint1: 'Mono = one, saccharide = sugar.',
        hint2: 'Di = two sugars linked together.',
        hint3: 'Cellulose is the main component of cell walls.',
        explanation: 'Monosaccharides are carbohydrate monomers. Sucrose is a disaccharide. Cellulose provides structural support in plant cell walls.'
      }
    }
  ]
}
