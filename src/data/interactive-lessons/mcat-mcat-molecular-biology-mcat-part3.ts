export const mcatMolBioPart3Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb3-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 3 of 7 — Translation (Protein Synthesis)**

### The Genetic Code

- **Codons**: 3-nucleotide sequences on mRNA
- 64 codons total: 61 code for amino acids, 3 are stop codons
- **Degenerate** (redundant): Multiple codons for same amino acid (wobble position = 3rd base)
- **Start codon**: AUG (methionine) — also signals ribosome binding
- **Stop codons**: UAA, UAG, UGA

### Ribosome Sites

| Site | Name | Function |
|------|------|----------|
| A (Aminoacyl) | Entry | New charged tRNA enters |
| P (Peptidyl) | Holding | Growing peptide chain held here |
| E (Exit) | Exit | Empty tRNA leaves |

### Translation Steps

1. **Initiation**: Small subunit binds mRNA at 5' cap → scans for AUG → large subunit joins
2. **Elongation**: tRNA brings amino acid to A site → peptide bond forms → ribosome translocates
3. **Termination**: Stop codon in A site → release factor → polypeptide released`
    },
    {
      id: 'mb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Translation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An antibiotic that binds to the 50S ribosomal subunit would inhibit translation in:`,
            options: [`Bacteria (they have 70S = 50S + 30S ribosomes)`, `Human cells (they have 80S = 60S + 40S)`, `Both equally`, `Neither`],
            correctAnswer: 0,
            explanation: `Bacterial ribosomes are 70S (50S + 30S). Human ribosomes are 80S (60S + 40S). Drugs targeting 50S specifically affect bacteria, not human ribosomes. This is why antibiotics like chloramphenicol and erythromycin can target bacteria selectively.`
          }
        ]
      }
    },
    {
      id: 'mb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Genetic code is degenerate (redundant) but NOT ambiguous (each codon = one amino acid)
- Start: AUG (Met). Stop: UAA, UAG, UGA.
- Ribosome sites: A (aminoacyl), P (peptidyl), E (exit)
- Bacterial (70S) vs. eukaryotic (80S) ribosomes = antibiotic targeting`
    }
  ]
};
