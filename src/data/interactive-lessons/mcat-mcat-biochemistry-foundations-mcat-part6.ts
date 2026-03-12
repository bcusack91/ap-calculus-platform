export const mcatBiochemPart6Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc6-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 6 of 7 — Nucleic Acids & Molecular Biology**

### DNA vs RNA

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose ($2'-OH$) |
| Bases | A, T, G, C | A, U, G, C |
| Structure | Double-stranded | Usually single-stranded |
| Stability | More stable | Less stable ($2'-OH$ makes it prone to hydrolysis) |

### Base Pairing (Chargaff's Rules)

- A-T: 2 hydrogen bonds
- G-C: 3 hydrogen bonds → higher GC content = higher melting temp ($T_m$)

### Central Dogma

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

### Key Enzymes

| Process | Key Enzyme | Function |
|---------|-----------|----------|
| Replication | DNA polymerase III | Synthesizes new DNA strand ($5' \\to 3'$) |
| Replication | Helicase | Unwinds double helix |
| Replication | Primase | Makes RNA primer |
| Transcription | RNA polymerase | Synthesizes mRNA from DNA template |
| Translation | Ribosome | Reads mRNA, assembles protein |

Directionality is crucial: polymerases synthesize nucleic acid in the 5' to 3' direction by adding to a free 3'-OH.`
    },
    {
      id: 'bc6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleic Acids** 🎯`,
      exercise: {
        questions: [
          {
            question: `If a DNA sample is 30% adenine, what percent is guanine?`,
            options: [`20%`, `30%`, `40%`, `25%`],
            correctAnswer: 0,
            explanation: `By Chargaff: A = T = 30%. So A + T = 60%. G + C = 40%. Since G = C: G = 20%.`
          },
          {
            question: `DNA polymerase requires:`,
            options: [`A free $3\`-OH$ group to add nucleotides (needs a primer!)`, `A $5\`-OH$ group`, `No primer — it can start de novo`, `Only single-stranded DNA`],
            correctAnswer: 0,
            explanation: `DNA polymerase can only add nucleotides to an existing $3'-OH$ group. This is why primase must first lay down an RNA primer. RNA polymerase, in contrast, can start de novo.`
          },
          {
            question: `Higher GC content usually increases DNA melting temperature because:`,
            options: [`GC bases are larger`, `GC pairs have three hydrogen bonds`, `GC pairs are uncharged`, `GC prevents base stacking`],
            correctAnswer: 1,
            explanation: `G-C pairs form three hydrogen bonds versus two for A-T, increasing duplex stability.`
          },
          {
            question: `During replication, DNA polymerase reads the template strand in which direction?`,
            options: [`5' to 3'`, `3' to 5'`, `Both simultaneously`, `Random direction`],
            correctAnswer: 1,
            explanation: `Because synthesis is 5' to 3', the template must be read 3' to 5'.`
          }
        ]
      }
    },
    {
      id: 'bc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- GC content correlates with $T_m$ (3 H-bonds vs 2 for AT)
- DNA polymerase: $5' \\to 3'$ synthesis, needs primer, has proofreading
- RNA polymerase: no primer needed, reads template $3' \\to 5'$
- Chargaff: A=T, G=C in double-stranded DNA`
    }
  ]
};
