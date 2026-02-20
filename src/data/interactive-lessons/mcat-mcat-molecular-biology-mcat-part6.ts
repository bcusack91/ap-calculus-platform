export const mcatMolBioPart6Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb6-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 6 of 7 — Biotechnology Techniques**

### PCR (Polymerase Chain Reaction)

Amplifies specific DNA sequences exponentially.

| Step | Temperature | What happens |
|------|-------------|-------------|
| Denaturation | ~95°C | Strands separate |
| Annealing | ~55°C | Primers bind to template |
| Extension | ~72°C | Taq polymerase synthesizes new DNA |

After $n$ cycles: $2^n$ copies. After 30 cycles: ~$10^9$ copies!

### Gel Electrophoresis

- DNA migrates toward positive electrode (DNA is negative)
- **Smaller fragments travel faster** (farther from wells)
- Southern blot: DNA. Northern blot: RNA. Western blot: Protein.

### Molecular Cloning

1. Cut DNA with restriction enzymes (recognize palindromic sequences)
2. Insert into vector (plasmid) using ligase
3. Transform bacteria (take up plasmid)
4. Select with antibiotic resistance

### CRISPR-Cas9

- Guide RNA directs Cas9 nuclease to specific DNA sequence
- Creates double-strand break → gene editing
- Can knock out genes or insert new sequences`
    },
    {
      id: 'mb6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Biotechnology** 🎯`,
      exercise: {
        questions: [
          {
            question: `After 20 cycles of PCR, approximately how many copies of the target DNA are produced from one template molecule?`,
            options: [`~$10^6$ ($2^{20} \\approx 10^6$)`, `20`, `40`, `200`],
            correctAnswer: 0,
            explanation: `PCR doubles DNA each cycle: $2^{20} = 1{,}048{,}576 \\approx 10^6$ copies. This exponential amplification is why PCR is so powerful for detecting tiny amounts of DNA.`
          }
        ]
      }
    },
    {
      id: 'mb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- PCR: Denature → Anneal → Extend (uses Taq polymerase, heat-stable)
- Gel electrophoresis: small fragments migrate farther
- Southern (DNA), Northern (RNA), Western (protein) blots
- CRISPR: guide RNA + Cas9 = targeted gene editing`
    }
  ]
};
