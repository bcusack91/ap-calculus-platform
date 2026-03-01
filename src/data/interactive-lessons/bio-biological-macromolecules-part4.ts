export const bioMacromoleculesPart4Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol4-proteins',
      type: 'text' as const,
      content: `
## Proteins: Structure & Function

### Amino Acids

All amino acids have:
- A central **carbon** (α-carbon)
- An **amino group** ($-NH_2$)
- A **carboxyl group** ($-COOH$)
- A **hydrogen** atom
- A variable **R group** (side chain) — determines the amino acid's properties

**20 different amino acids** exist, differing only in their R groups.

### Peptide Bonds

Amino acids link via **peptide bonds** (dehydration synthesis between $-COOH$ and $-NH_2$).

- 2 amino acids → dipeptide
- 3+ amino acids → polypeptide
- Functional polypeptide → protein

### R Group Categories

| Category | Properties | Effect |
|----------|-----------|--------|
| Nonpolar | Hydrophobic | Fold into protein interior |
| Polar | Hydrophilic | Found on protein surface |
| Charged (+) | Positive charge | Form ionic bonds |
| Charged (−) | Negative charge | Form ionic bonds |
      `
    },
    {
      id: 'biol4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which level of protein structure is determined by the gene sequence?',
            options: [
              'Primary',
              'Secondary',
              'Tertiary',
              'Quaternary'
            ],
            correctAnswer: 0,
            explanation: 'The primary structure (amino acid sequence) is directly determined by the gene (DNA sequence). All higher levels of structure depend on the primary sequence.'
          }
        ]
      }
    },
    {
      id: 'biol4-structure',
      type: 'text' as const,
      content: `
## Levels of Protein Structure

| Level | Bonds | Description |
|-------|-------|-------------|
| **Primary (1°)** | Peptide bonds | Linear sequence of amino acids |
| **Secondary (2°)** | Hydrogen bonds | α-helices and β-pleated sheets |
| **Tertiary (3°)** | R-group interactions | 3D folding of a single polypeptide |
| **Quaternary (4°)** | Multiple polypeptides | Multiple subunits together |

### Tertiary Structure Bonds
- **Hydrogen bonds** between R groups
- **Ionic bonds** between charged R groups
- **Hydrophobic interactions** (nonpolar R groups cluster inside)
- **Disulfide bridges** (covalent bonds between cysteine residues)

### Denaturation
Changes in **pH, temperature, or salt concentration** can disrupt these bonds and unfold the protein — this is **denaturation**. The primary structure remains intact but the protein loses its function.
      `
    },
    {
      id: 'biol4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Denaturation disrupts which levels of protein structure?',
            options: [
              'Only primary',
              'Only secondary',
              'Secondary, tertiary, and quaternary',
              'All four levels'
            ],
            correctAnswer: 2,
            explanation: 'Denaturation unfolds the 3D structure (disrupting secondary, tertiary, and quaternary bonds) but does NOT break peptide bonds — the primary structure remains intact.'
          }
        ]
      }
    },
    {
      id: 'biol4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amino acids are linked by ___ bonds',
            options: ['glycosidic', 'peptide', 'phosphodiester', 'ester']
          },
          {
            label: 'The variable part of each amino acid is the ___',
            options: ['amino group', 'carboxyl group', 'R group', 'peptide bond']
          },
          {
            label: 'α-helices and β-pleated sheets are examples of ___ structure',
            options: ['primary', 'secondary', 'tertiary', 'quaternary']
          }
        ],
        correctAnswers: ['peptide', 'R group', 'secondary'],
        hint1: 'Formed by dehydration synthesis between -COOH and -NH₂.',
        hint2: 'This side chain makes each amino acid unique.',
        hint3: 'Regular repeating patterns stabilized by backbone H-bonds.',
        explanation: 'Peptide bonds link amino acids. The R group (side chain) varies among the 20 amino acids. α-helices and β-sheets are secondary structures.'
      }
    }
  ]
}
