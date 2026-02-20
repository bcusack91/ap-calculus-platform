export const mcatOrgChemPart1Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc1-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 1 of 7 — Functional Groups & Stereochemistry**

### Must-Know Functional Groups

| Group | Structure | Example |
|-------|-----------|---------|
| Alcohol | $-OH$ | Ethanol |
| Aldehyde | $-CHO$ | Formaldehyde |
| Ketone | $-CO-$ (internal) | Acetone |
| Carboxylic acid | $-COOH$ | Acetic acid |
| Ester | $-COOR$ | Ethyl acetate |
| Amide | $-CONHR$ | Peptide bond! |
| Amine | $-NH_2$ | Methylamine |
| Ether | $-O-$ | Diethyl ether |

### Stereochemistry

- **Chirality**: 4 different groups on a carbon → chiral center
- **Enantiomers**: Non-superimposable mirror images (same physical properties except optical rotation)
- **Diastereomers**: Stereoisomers that are NOT mirror images (different physical properties)
- **Meso compounds**: Have chiral centers but an internal plane of symmetry → optically inactive

### R/S Assignment (Cahn-Ingold-Prelog)

1. Assign priority by atomic number (highest = 1)
2. Orient lowest priority group away from you
3. 1→2→3 clockwise = R; counterclockwise = S`
    },
    {
      id: 'oc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Functional Groups & Stereochem** 🎯',
      exercise: {
        questions: [
          {
            question: 'A molecule with 2 chiral centers can have a maximum of how many stereoisomers?',
            options: ['4 (using $2^n$ rule)', '2', '3', '8'],
            correctAnswer: 0,
            explanation: 'Maximum stereoisomers = $2^n$ where $n$ = number of chiral centers. $2^2 = 4$. May be fewer if meso compounds exist.'
          },
          {
            question: 'The peptide bond is an example of which functional group?',
            options: ['Amide', 'Amine', 'Ester', 'Carboxylic acid'],
            correctAnswer: 0,
            explanation: 'The peptide bond ($-CO-NH-$) is an amide bond formed between the carboxyl group of one amino acid and the amino group of another, with loss of water.'
          }
        ]
      }
    },
    {
      id: 'oc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know ALL functional groups instantly — they appear in every MCAT passage
- $2^n$ rule for maximum stereoisomers
- Enantiomers: mirror images, same properties (except rotation). Diastereomers: different properties.
- Amide = peptide bond — this connects to biochemistry`
    }
  ]
};
