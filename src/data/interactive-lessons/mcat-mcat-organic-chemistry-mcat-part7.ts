export const mcatOrgChemPart7Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc7-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 7 of 7 — Review & MCAT Strategy**

### Highest-Yield MCAT Organic Topics

1. **SN1/SN2/E1/E2** — almost guaranteed
2. **Functional group recognition** — in every passage
3. **Amino acid chemistry** — bridges to biochemistry
4. **Carbonyl chemistry** — reduction/oxidation
5. **Stereochemistry** — R/S, enantiomers vs diastereomers
6. **Lab techniques** — separation and purification

### Amino Acid Side Chain Chemistry (bridges to Biochem)

| Property | Amino acids |
|----------|-------------|
| Nonpolar | Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met |
| Polar uncharged | Ser, Thr, Cys, Tyr, Asn, Gln |
| Positive (basic) | Lys, Arg, His |
| Negative (acidic) | Asp, Glu |`
    },
    {
      id: 'oc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'An amino acid at pH 7 has a positively charged side chain. It is most likely:',
            options: ['Lysine (pKa of side chain ~10.5)', 'Aspartate', 'Serine', 'Alanine'],
            correctAnswer: 0,
            explanation: 'At pH 7, Lys side chain ($-NH_3^+$, pKa ~10.5) is protonated and positive. Arg (pKa ~12.5) and His (pKa ~6.0) are the other basic residues. His may or may not be protonated at pH 7.'
          },
          {
            question: 'A passage describes a molecule with a chiral center that rotates plane-polarized light +15°. Its enantiomer rotates light:',
            options: ['$-15°$ (equal and opposite)', '$+15°$', '$0°$', '$+30°$'],
            correctAnswer: 0,
            explanation: 'Enantiomers rotate plane-polarized light by equal magnitude but opposite direction. If one is +15°, the other must be -15°.'
          }
        ]
      }
    },
    {
      id: 'oc7-summary',
      type: 'text' as const,
      content: `### Organic Chemistry — Complete! ✅

Master the reaction decision chart, functional groups, and stereochemistry. These connect directly to amino acid and enzyme chemistry in Biochemistry.`
    }
  ]
};
