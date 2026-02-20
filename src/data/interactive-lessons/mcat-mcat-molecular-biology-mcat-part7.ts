export const mcatMolBioPart7Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb7-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 7 of 7 — Viruses & Recombinant DNA**

### Virus Structure & Classification

| Feature | DNA Viruses | RNA Viruses | Retroviruses |
|---------|------------|------------|-------------|
| Genome | dsDNA usually | ssRNA or dsRNA | ssRNA |
| Replication | Host DNA Pol | RNA-dependent RNA Pol (RdRp) | Reverse transcriptase → DNA → integrase |
| Example | Herpes, Adenovirus | Influenza, Ebola | HIV |

### Viral Life Cycles

**Lytic cycle**: Virus replicates → lyses host cell → releases new virions
**Lysogenic cycle**: Viral DNA integrates into host genome (prophage) → replicates with host → can switch to lytic

### Retroviruses (HIV)

$$\\text{ssRNA} \\xrightarrow{\\text{Reverse transcriptase}} \\text{dsDNA} \\xrightarrow{\\text{Integrase}} \\text{Provirus (in host DNA)}$$

### Prions

- NOT viruses — misfolded proteins (no nucleic acid!)
- Convert normal proteins to misfolded form
- Cannot be destroyed by standard sterilization
- Example: Mad cow disease (BSE), Creutzfeldt-Jakob disease`
    },
    {
      id: 'mb7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Viruses** 🎯',
      exercise: {
        questions: [
          {
            question: 'HIV is difficult to treat because:',
            options: ['Reverse transcriptase has no proofreading → high mutation rate → drug resistance', 'HIV has a DNA genome', 'Antibiotics kill HIV-infected cells', 'HIV only infects red blood cells'],
            correctAnswer: 0,
            explanation: 'Reverse transcriptase lacks $3\' \\to 5\'$ exonuclease (proofreading) activity, causing a very high mutation rate. This allows HIV to quickly evolve resistance to single drugs, which is why combination therapy (HAART) is used.'
          }
        ]
      }
    },
    {
      id: 'mb7-summary',
      type: 'text' as const,
      content: `### Molecular Biology — Complete! ✅

From DNA replication to gene regulation to virology — molecular biology is the most heavily tested content on the MCAT Bio/Biochem section. Master the central dogma, regulation, and biotechnology techniques.`
    }
  ]
};
