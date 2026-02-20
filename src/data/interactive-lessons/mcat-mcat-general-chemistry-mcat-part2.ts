export const mcatGenChemPart2Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc2-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 2 of 7 — Bonding & Molecular Geometry**

### Bond Types

| Type | Description | Example |
|------|-------------|---------|
| Ionic | Metal + nonmetal, electron transfer | NaCl |
| Covalent | Nonmetal + nonmetal, electron sharing | $H_2O$ |
| Metallic | Metal + metal, electron sea | Fe |
| Coordinate | Both electrons from one atom | $NH_4^+$ |

### VSEPR Geometry

| Electron groups | Molecular geometry | Bond angle | Example |
|----------------|-------------------|------------|---------|
| 2 | Linear | 180° | $CO_2$ |
| 3 (0 lone) | Trigonal planar | 120° | $BF_3$ |
| 3 (1 lone) | Bent | ~117° | $SO_2$ |
| 4 (0 lone) | Tetrahedral | 109.5° | $CH_4$ |
| 4 (1 lone) | Trigonal pyramidal | ~107° | $NH_3$ |
| 4 (2 lone) | Bent | ~104.5° | $H_2O$ |

### Intermolecular Forces (weakest → strongest)

London dispersion < Dipole-dipole < Hydrogen bonding < Ion-dipole`
    },
    {
      id: 'gc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bonding & Geometry** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\text{XeF}_4$ has what molecular geometry?',
            options: ['Square planar (6 electron groups, 2 lone pairs)', 'Tetrahedral', 'Seesaw', 'Octahedral'],
            correctAnswer: 0,
            explanation: 'Xe has 8 valence e$^-$ + 4 from F bonds + 4 remain = 6 electron groups total (4 bonds + 2 lone pairs on Xe). This gives square planar geometry.'
          },
          {
            question: 'Which intermolecular force explains why $\\text{CH}_3\\text{OH}$ (MW 32) has a higher boiling point than $\\text{CH}_3\\text{CH}_3$ (MW 30)?',
            options: ['Hydrogen bonding in methanol', 'Greater London dispersion forces in ethane', 'Ion-dipole interactions', 'Covalent bonding differences'],
            correctAnswer: 0,
            explanation: 'Methanol has O-H bonds capable of hydrogen bonding (O is electronegative with lone pairs). Ethane only has weak London dispersion forces.'
          }
        ]
      }
    },
    {
      id: 'gc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Count ALL electron groups (bonds + lone pairs) for VSEPR
- Lone pairs compress bond angles below ideal
- H-bonding requires H bonded to F, O, or N AND a lone pair on another F, O, or N
- Boiling point: H-bonding > dipole-dipole > London (for similar MW)`
    }
  ]
};
