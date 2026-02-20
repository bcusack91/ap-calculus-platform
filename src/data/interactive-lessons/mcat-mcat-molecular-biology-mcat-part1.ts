export const mcatMolBioPart1Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb1-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 1 of 7 — DNA Replication**

### DNA Replication is Semiconservative

Each new double helix has one old strand and one new strand (Meselson-Stahl experiment).

### Key Enzymes

| Enzyme | Function |
|--------|----------|
| **Helicase** | Unwinds double helix |
| **Topoisomerase** | Relieves supercoiling ahead of replication fork |
| **Primase** | Synthesizes RNA primer |
| **DNA Pol III** | Main synthesis enzyme ($5' \\to 3'$), has proofreading ($3' \\to 5'$ exonuclease) |
| **DNA Pol I** | Removes RNA primers, fills gaps |
| **Ligase** | Joins Okazaki fragments |
| **SSB proteins** | Keep strands separated |

### Leading vs. Lagging Strand

- **Leading**: Continuous synthesis toward the fork
- **Lagging**: Discontinuous ($5' \\to 3'$ away from fork) → Okazaki fragments

### Telomeres

- Protective caps at chromosome ends (TTAGGG repeats in humans)
- Shorten with each division (no primer for end of lagging strand)
- **Telomerase** extends telomeres (active in stem cells and cancer cells)`
    },
    {
      id: 'mb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**DNA Replication** 🎯`,
      exercise: {
        questions: [
          {
            question: `DNA polymerase III requires a primer because it:`,
            options: [`Can only add nucleotides to an existing $3\`-OH$ group — it cannot start de novo`, `Needs a template to read`, `Works only in the 3\` to 5\` direction`, `Uses RNA nucleotides'`],
            correctAnswer: 0,
            explanation: `DNA Pol III adds nucleotides to the $3'-OH$ of a pre-existing strand. Primase provides an RNA primer with a free $3'-OH$ to get synthesis started. RNA polymerase does NOT need a primer.`
          },
          {
            question: `Okazaki fragments are found on the:`,
            options: [`Lagging strand only`, `Leading strand only`, `Both strands`, `Neither strand`],
            correctAnswer: 0,
            explanation: `The lagging strand is synthesized discontinuously as short Okazaki fragments because DNA Pol III can only synthesize $5' \\to 3'$, but the lagging template runs $5' \\to 3'$ away from the fork.`
          }
        ]
      }
    },
    {
      id: 'mb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- DNA replication is semiconservative, bidirectional, and semi-discontinuous
- DNA Pol III: main polymerase, needs primer, $5' \\to 3'$ synthesis + proofreading
- Leading strand: continuous. Lagging strand: Okazaki fragments.
- Telomerase: prevents chromosome shortening (cancer connection!)`
    }
  ]
};
