export const bioProteinsPart4Data = {
  topicSlug: 'proteins',
  sections: [
    {
      id: 'prot4-review',
      type: 'text' as const,
      content: `
## 🎯 AP Review: Proteins

### Must-know synthesis points

1. **20 amino acids → ~20,000 distinct proteins** in the human cell — diversity comes from sequence and length.
2. **Four levels of structure** — primary (sequence) → secondary (α-helix / β-sheet, H-bonds) → tertiary (R-group interactions) → quaternary (multiple polypeptides).
3. **Sequence determines shape; shape determines function.** Sickle cell and prion diseases both demonstrate this.
4. **Denaturation** disrupts higher-order structure (heat, pH, salts) and usually destroys function.
5. **Enzymes lower activation energy** through a complementary active site (induced fit).

### Common AP traps

- Don't say "proteins are made of nucleotides." Nucleotides → nucleic acids; **amino acids → proteins**.
- Quaternary structure exists **only** for proteins with **two or more** polypeptide chains.
- Hydrogen bonds dominate **secondary** structure; R-group interactions dominate **tertiary**.
      `
    },
    {
      id: 'prot4-workshop',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'A polypeptide is 150 amino acids long. How many peptide bonds does it contain, and how many water molecules were released during its synthesis?',
            options: ['150 bonds, 150 waters', '149 bonds, 149 waters', '149 bonds, 150 waters', '151 bonds, 150 waters'],
            correctAnswer: 1,
            explanation: 'For n amino acids you form (n − 1) peptide bonds and release (n − 1) waters. So 150 amino acids → 149 bonds → 149 waters.'
          }
        ]
      }
    },
    {
      id: 'prot4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'An enzyme normally active at 37 °C is exposed briefly to 90 °C. The reaction rate drops to zero. The most likely explanation is:',
            options: [
              'The substrate evaporated',
              'The enzyme denatured, destroying its active site',
              'Enzymes work better above 80 °C',
              'High temperature converted the enzyme into a lipid'
            ],
            correctAnswer: 1,
            explanation: 'Heat disrupts the H-bonds, ionic interactions, and disulfide bridges that maintain protein 3D structure. The active site loses shape — no substrate binding.'
          }
        ]
      }
    },
    {
      id: 'prot4-dropdown',
      type: 'dropdown-select' as const,
      content: `**AP Synthesis** 🔬`,
      exercise: {
        dropdowns: [
          { label: 'The level of structure determined by amino acid sequence is ___', options: ['primary', 'secondary', 'tertiary', 'quaternary'] },
          { label: 'α-helices and β-pleated sheets are stabilized by ___ bonds', options: ['ionic', 'covalent', 'hydrogen', 'glycosidic'] },
          { label: 'Hemoglobin\'s 4-subunit shape is its ___ structure', options: ['primary', 'secondary', 'tertiary', 'quaternary'] }
        ],
        correctAnswers: ['primary', 'hydrogen', 'quaternary'],
        hint1: 'Sequence = first level.',
        hint2: 'Backbone H-bonding.',
        hint3: 'Multiple chains.',
        explanation: 'Primary = sequence. Secondary structures (α-helix, β-sheet) are stabilized by backbone H-bonds. Hemoglobin\'s assembly of 4 subunits is its quaternary structure.'
      }
    }
  ]
}
