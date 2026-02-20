export const mcatMolBioPart2Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb2-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 2 of 7 — Transcription**

### The Process

$$\\text{DNA (template)} \\xrightarrow{\\text{RNA Polymerase}} \\text{mRNA (pre-mRNA in eukaryotes)}$$

### Prokaryotic vs. Eukaryotic Transcription

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| RNA Polymerase | One type | Three (I, II, III) |
| Promoter | -10 (Pribnow) and -35 | TATA box (~-25) |
| Processing | None (mRNA ready immediately) | 5' cap, 3' poly-A tail, splicing |
| Location | Cytoplasm | Nucleus |
| Coupled with translation? | YES (simultaneous) | NO (transcription in nucleus, translation in cytoplasm) |

### Eukaryotic mRNA Processing

1. **5' cap** (7-methylguanosine): Protects from degradation, ribosome recognition
2. **3' poly-A tail** (~200 adenines): Protects from degradation, facilitates export
3. **Splicing**: Introns removed, exons joined (by spliceosome)

### MCAT Mnemonic

- **In**trons stay **in** the nucleus (removed)
- **Ex**ons are **ex**pressed (kept in mature mRNA)`
    },
    {
      id: 'mb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Transcription** 🎯',
      exercise: {
        questions: [
          {
            question: 'A mutation in the spliceosome would most directly cause:',
            options: ['Introns retained in mRNA → abnormal protein', 'Failure of 5\' capping', 'DNA replication errors', 'Ribosome malfunction'],
            correctAnswer: 0,
            explanation: 'The spliceosome removes introns from pre-mRNA. If defective, introns remain in the mature mRNA, leading to premature stop codons or frame shifts → nonfunctional protein or disease (e.g., some forms of spinal muscular atrophy).'
          }
        ]
      }
    },
    {
      id: 'mb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- RNA Pol II makes mRNA in eukaryotes
- Eukaryotic mRNA processing: 5' cap + 3' poly-A tail + splicing
- Introns removed, exons kept (alternative splicing = multiple proteins from one gene!)
- Prokaryotes: no processing, transcription + translation can occur simultaneously`
    }
  ]
};
