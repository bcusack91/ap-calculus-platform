export const bioMacromoleculesPart1Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol1-intro',
      type: 'text' as const,
      content: `
# 🧬 Biological Macromolecules

Living organisms are built from four classes of **biological macromolecules**: carbohydrates, lipids, proteins, and nucleic acids.

### Polymer Formation

Most macromolecules are **polymers** — long chains of repeating subunits called **monomers**.

| Reaction | Process |
|----------|--------|
| **Dehydration synthesis** | Monomers joined by removing water |
| **Hydrolysis** | Polymers broken apart by adding water |

$$\\text{Monomer} + \\text{Monomer} \\rightarrow \\text{Polymer} + H_2O$$
$$\\text{Polymer} + H_2O \\rightarrow \\text{Monomers}$$
      `
    },
    {
      id: 'biol1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which reaction breaks polymers into monomers?',
            options: [
              'Dehydration synthesis',
              'Hydrolysis',
              'Condensation',
              'Oxidation'
            ],
            correctAnswer: 1,
            explanation: 'Hydrolysis (hydro = water, lysis = breaking) breaks polymers by adding water across the bond.'
          }
        ]
      }
    },
    {
      id: 'biol1-overview',
      type: 'text' as const,
      content: `
# ## The Four Classes

| Macromolecule | Monomer | Function | Elements |
|--------------|---------|----------|----------|
| **Carbohydrates** | Monosaccharides | Energy, structure | C, H, O |
| **Lipids** | Fatty acids + glycerol | Energy storage, membranes | C, H, O |
| **Proteins** | Amino acids | Enzymes, structure, transport | C, H, O, N, S |
| **Nucleic acids** | Nucleotides | Genetic information | C, H, O, N, P |

Note: Lipids are **not true polymers** — they don't form by linking identical monomers.
      `
    },
    {
      id: 'biol1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which macromolecule is NOT a true polymer?',
            options: [
              'Proteins',
              'Carbohydrates',
              'Lipids',
              'Nucleic acids'
            ],
            correctAnswer: 2,
            explanation: 'Lipids (fats) are not true polymers. They form by joining glycerol to fatty acids, not by linking identical monomers.'
          }
        ]
      }
    },
    {
      id: 'biol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydration synthesis ___ water',
            options: ['adds', 'removes', 'neutralizes', 'absorbs']
          },
          {
            label: 'Proteins are made of ___ monomers',
            options: ['nucleotide', 'amino acid', 'monosaccharide', 'fatty acid']
          },
          {
            label: 'The element unique to nucleic acids is ___',
            options: ['sulfur', 'nitrogen', 'phosphorus', 'iron']
          }
        ],
        correctAnswers: ['removes', 'amino acid', 'phosphorus'],
        hint1: 'De-hydration = removal of water.',
        hint2: 'There are 20 types of these building blocks.',
        hint3: 'DNA has a sugar-phosphate backbone.',
        explanation: 'Dehydration synthesis removes water. Proteins are amino acid polymers. Phosphorus is found in nucleic acids but not in most carbohydrates or lipids.'
      }
    }
  ]
}
