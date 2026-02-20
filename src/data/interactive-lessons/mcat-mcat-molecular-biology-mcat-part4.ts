export const mcatMolBioPart4Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb4-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 4 of 7 — Gene Regulation**

### Prokaryotic Gene Regulation: The Operon Model

**Lac Operon** (inducible — normally OFF)
- Without lactose: Repressor binds operator → genes OFF
- With lactose: Allolactose binds repressor → repressor falls off → genes ON
- Low glucose + lactose = maximum expression (cAMP-CAP activates promoter)

**Trp Operon** (repressible — normally ON)
- Without tryptophan: Repressor inactive → genes ON (making trp)
- With tryptophan: Trp binds repressor (corepressor) → repressor active → genes OFF

### Eukaryotic Gene Regulation (Multiple Levels!)

| Level | Mechanism | Example |
|-------|-----------|---------|
| Epigenetic | DNA methylation, histone modification | Methylation → gene silencing |
| Transcriptional | Transcription factors, enhancers | Activators increase transcription |
| Post-transcriptional | mRNA stability, alternative splicing | miRNA degrades mRNA |
| Translational | mRNA availability, regulation | Iron response element |
| Post-translational | Protein modification | Phosphorylation, ubiquitination |

### Epigenetics (HIGH YIELD)

- **DNA methylation** (CpG islands): Adds methyl groups → gene silencing
- **Histone acetylation**: Loosens chromatin → gene activation
- **Histone deacetylation**: Tightens chromatin → gene silencing`
    },
    {
      id: 'mb4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Gene Regulation** 🎯',
      exercise: {
        questions: [
          {
            question: 'In the lac operon, the presence of glucose AND lactose results in:',
            options: ['Low expression — glucose keeps cAMP low, so CAP cannot fully activate transcription', 'Maximum expression', 'Complete repression', 'No effect from glucose'],
            correctAnswer: 0,
            explanation: 'With lactose present, the repressor is removed. But with glucose, cAMP is LOW → CAP is inactive → promoter only weakly bound by RNA polymerase. Maximum expression requires low glucose (high cAMP) AND lactose.'
          }
        ]
      }
    },
    {
      id: 'mb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Lac operon: inducible (normally OFF). Trp operon: repressible (normally ON).
- Eukaryotic regulation: epigenetic → transcriptional → post-transcriptional → translational → post-translational
- Methylation = silencing. Acetylation = activation.
- The lac operon is a FAVORITE MCAT topic — know it cold!`
    }
  ]
};
