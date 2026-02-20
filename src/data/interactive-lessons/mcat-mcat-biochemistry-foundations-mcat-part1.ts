export const mcatBiochemPart1Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc1-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 1 of 7 — Amino Acids & Protein Structure**

### The 20 Amino Acids — Classify by Side Chain

| Category | Amino Acids | Key Feature |
|----------|-------------|-------------|
| Nonpolar/Hydrophobic | G, A, V, L, I, P, F, W, M | Interior of proteins |
| Polar uncharged | S, T, C, Y, N, Q | H-bonding |
| Positively charged (pH 7) | K, R, H | Basic side chains |
| Negatively charged (pH 7) | D, E | Acidic side chains |

### Protein Structure Levels

| Level | Held together by | Description |
|-------|-----------------|-------------|
| Primary (1°) | Peptide bonds (covalent) | Amino acid sequence |
| Secondary (2°) | H-bonds (backbone N-H to C=O) | $\\alpha$-helix, $\\beta$-sheet |
| Tertiary (3°) | Hydrophobic, ionic, disulfide, H-bonds | 3D shape of one polypeptide |
| Quaternary (4°) | Same as tertiary | Multiple subunit assembly |

### Disulfide Bonds

Cysteine + Cysteine → Cystine (C-S-S-C), covalent bond stabilizing tertiary structure.`
    },
    {
      id: 'bc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Amino Acids & Protein Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'Proline is unique among amino acids because it:',
            options: ['Has a cyclic side chain bonded to the backbone nitrogen, creating rigidity', 'Is the only nonpolar amino acid', 'Has the smallest side chain', 'Can form disulfide bonds'],
            correctAnswer: 0,
            explanation: 'Proline is an imino acid — its side chain cyclizes back to the backbone N, creating a rigid kink. This is why proline is a "helix breaker" in $\\alpha$-helices.'
          },
          {
            question: '$\\alpha$-helices are stabilized primarily by:',
            options: ['Hydrogen bonds between backbone C=O and N-H groups 4 residues apart', 'Disulfide bonds', 'Hydrophobic interactions', 'Ionic bonds between side chains'],
            correctAnswer: 0,
            explanation: '$\\alpha$-helices are stabilized by H-bonds between the C=O of residue $i$ and the N-H of residue $i+4$. These are backbone (not side chain) interactions, making them secondary structure.'
          }
        ]
      }
    },
    {
      id: 'bc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know amino acid categories cold (nonpolar, polar, positive, negative)
- Proline = helix breaker (rigid ring); Glycine = most flexible (no side chain)
- Primary: sequence. Secondary: $\\alpha$-helix/$\\beta$-sheet. Tertiary: 3D fold. Quaternary: subunits.
- Disulfide bonds (Cys-Cys) = only COVALENT bond in tertiary structure`
    }
  ]
};
