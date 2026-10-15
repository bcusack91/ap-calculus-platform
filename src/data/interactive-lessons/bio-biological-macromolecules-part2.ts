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
            question: 'During digestion, sucrose is split into glucose and fructose. Which reaction does this, and what happens to water?',
            options: [
              'It is hydrolysis, and one water molecule is used up',
              'It is dehydration synthesis, and one water molecule is released',
              'It is hydrolysis, and one water molecule is released',
              'It is dehydration synthesis, and one water molecule is used up'
            ],
            correctAnswer: 0,
            explanation: 'Breaking a covalent bond between monomers is hydrolysis: a water molecule is added across the bond, with H going to one monomer and OH to the other. Dehydration synthesis is the reverse; it builds the bond and releases water.'
          }
        ]
      }
    },
    {
      id: 'biol2-poly',
      type: 'text' as const,
      content: `
## Polysaccharides

| Polysaccharide | Function | Organism | Shape of the chains |
|---------------|----------|----------|---------|
| **Starch** | Energy storage | Plants | Glucose chains, unbranched or branched |
| **Glycogen** | Energy storage | Animals | Glucose chains, highly branched |
| **Cellulose** | Structural | Plants | Straight, unbranched glucose chains bundled into fibers |
| **Chitin** | Structural | Arthropods, fungi | Chains of a nitrogen-containing modified glucose |

**Key distinction:** Starch, glycogen, and cellulose are all built from glucose. What differs is how the monomers are connected, which changes the shape of the polymer. The coiled and branched storage polymers are easy to break down for energy; the straight cellulose chains pack into rigid fibers that most animals cannot digest. (The exact bond geometry is not tested on the AP exam.)
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
