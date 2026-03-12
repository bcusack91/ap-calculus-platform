export const bioMacromoleculesPart7Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol7-synthesis',
      type: 'text' as const,
      content: `
## AP Biology: Macromolecules Review

### Essential Comparisons

| Feature | Carbs | Lipids | Proteins | Nucleic Acids |
|---------|-------|--------|----------|---------------|
| **Monomer** | Monosaccharide | Fatty acid/glycerol | Amino acid | Nucleotide |
| **Bond** | Glycosidic | Ester | Peptide | Phosphodiester |
| **Elements** | C, H, O | C, H, O | C, H, O, N, S | C, H, O, N, P |
| **Testing** | Benedict's/Iodine | Sudan/Paper | Biuret | — |

### Key Themes
1. **Structure determines function** — the shape of a molecule determines what it can do
2. **Monomers ↔ polymers** — dehydration synthesis and hydrolysis are universal
3. **Environmental sensitivity** — pH, temperature, and salt affect protein structure
4. **Energy storage hierarchy** — sugars (quick), glycogen/starch (medium), fat (long-term)
      `
    },
    {
      id: 'biol7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which macromolecule serves as both an energy source and structural material?',
            options: [
              'Lipids',
              'Proteins',
              'Carbohydrates',
              'Nucleic acids'
            ],
            correctAnswer: 2,
            explanation: 'Carbohydrates serve as quick energy (glucose, glycogen/starch) AND structural material (cellulose in plants, chitin in arthropods).'
          }
        ]
      }
    },
    {
      id: 'biol7-tips',
      type: 'text' as const,
      content: `
## AP Exam Tips

- Be able to **identify macromolecules** from structural diagrams
- Know the **monomers, bonds, and functions** for each class
- Understand **structure-function relationships** (e.g., why cellulose is structural)
- Practice **Chargaff's rule calculations**
- Connect macromolecules to **cellular processes** (enzymes, DNA replication, membrane structure)
      `
    },
    {
      id: 'biol7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student heats an egg white and observes it turning solid and opaque. This demonstrates:',
            options: [
              'Hydrolysis of peptide bonds',
              'Denaturation of proteins',
              'Saponification of lipids',
              'Caramelization of sugars'
            ],
            correctAnswer: 1,
            explanation: 'Heating disrupts the hydrogen bonds, ionic bonds, and hydrophobic interactions in egg albumin (a protein), causing it to unfold (denature) and aggregate.'
          }
        ]
      }
    },
    {
      id: 'biol7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The test for proteins is the ___ test',
            options: ['Benedict\'s', 'Iodine', 'Biuret', 'Sudan IV']
          },
          {
            label: 'Long-term energy storage in animals uses ___',
            options: ['glycogen', 'starch', 'fat (triglycerides)', 'cellulose']
          },
          {
            label: 'DNA stores ___ information',
            options: ['energy', 'structural', 'genetic', 'metabolic']
          }
        ],
        correctAnswers: ['Biuret', 'fat (triglycerides)', 'genetic'],
        hint1: 'Biuret reagent turns purple in the presence of peptide bonds.',
        hint2: 'Which macromolecule stores the most energy per gram?',
        hint3: 'DNA is the blueprint of life.',
        explanation: 'Biuret test detects proteins. Fat is the long-term energy storage molecule. DNA stores genetic information.'
      }
    }
  ]
}
