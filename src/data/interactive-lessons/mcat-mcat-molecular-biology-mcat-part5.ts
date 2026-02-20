export const mcatMolBioPart5Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb5-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 5 of 7 — Mutations & DNA Repair**

### Types of Point Mutations

| Type | Change | Effect on Protein |
|------|--------|------------------|
| **Silent** | Different codon, same amino acid | None (degeneracy!) |
| **Missense** | Different codon, different amino acid | May or may not affect function |
| **Nonsense** | Codon → stop codon | Truncated protein (usually nonfunctional) |

### Frameshift Mutations

- **Insertion or deletion** (not multiples of 3) → shifts reading frame
- Every downstream amino acid is wrong → usually nonfunctional protein
- Multiples of 3 inserted/deleted → adds/removes amino acids without shifting frame

### DNA Repair Mechanisms

| Mechanism | Fixes | How |
|-----------|-------|-----|
| **Proofreading** | Replication errors | DNA Pol III $3' \\to 5'$ exonuclease |
| **Mismatch repair** | Post-replication mismatches | Recognizes mismatched bases, excises, repairs |
| **Base excision repair** | Damaged/modified bases | Glycosylase removes base → AP endonuclease → repair |
| **Nucleotide excision repair** | Bulky lesions (thymine dimers) | Excises ~12 nucleotide stretch → repairs |

### MCAT Connection: Xeroderma Pigmentosum

Defect in nucleotide excision repair → can't fix UV-induced thymine dimers → extreme skin cancer risk.`
    },
    {
      id: 'mb5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mutations** 🎯',
      exercise: {
        questions: [
          {
            question: 'A single nucleotide deletion in the second codon of an mRNA would:',
            options: ['Cause a frameshift — every codon downstream is altered', 'Only change one amino acid', 'Have no effect', 'Only affect the second amino acid'],
            correctAnswer: 0,
            explanation: 'A single deletion shifts the reading frame by one nucleotide. Every triplet downstream is now different → every amino acid from that point on is wrong. This is why frameshifts are usually devastating.'
          }
        ]
      }
    },
    {
      id: 'mb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Silent, missense, nonsense: increasing severity of point mutations
- Frameshifts (insertions/deletions not in multiples of 3) are most damaging
- Multiple repair pathways: proofreading → mismatch → base excision → nucleotide excision
- Disease connections: xeroderma pigmentosum (NER), HNPCC (mismatch repair)`
    }
  ]
};
