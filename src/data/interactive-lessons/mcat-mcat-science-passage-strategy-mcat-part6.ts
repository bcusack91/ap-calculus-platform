export const mcatSciPassagePart6Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp6-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 6 of 7 — Biology & Biochemistry Passage Tactics**

### Bio/Biochem Passage Features

- Experimental passages dominate (Western blots, PCR, gene knockouts)
- Figures often show gel electrophoresis, enzyme kinetics, or metabolic pathways
- Questions integrate multiple biological concepts

### Common Experimental Techniques in Passages

| Technique | What It Shows | How to Read |
|-----------|-------------|-------------|
| SDS-PAGE / Western blot | Protein size/expression | Bands = proteins; darker = more |
| PCR / gel electrophoresis | DNA fragment size | Lower bands = smaller fragments |
| ELISA | Protein concentration | Higher absorbance = more protein |
| Flow cytometry | Cell surface markers | Shifted peaks = marker present |

### Bio/Biochem Passage Strategy

1. **Identify the biological system**: What organ/pathway/molecule is being studied?
2. **Find the perturbation**: What was changed (knockout, drug, mutation)?
3. **Predict the effect**: Before looking at data, predict what should happen
4. **Compare to actual results**: Do they match? If not, why?

### Enzyme Kinetics in Passages

- **Lineweaver-Burk plots**: Double reciprocal ($1/V$ vs $1/[S]$)
- Competitive inhibitor: $K_m$ increases, $V_{max}$ unchanged
- Uncompetitive: Both $K_m$ and $V_{max}$ decrease
- Noncompetitive: $V_{max}$ decreases, $K_m$ unchanged`
    },
    {
      id: 'sp6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bio/Biochem Tactics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage shows a Western blot with a band present in wild-type but absent in a mutant strain. The most likely conclusion is:`,
            options: [`The mutant strain does not express the target protein (gene knockout or loss of expression)`, `The mutant has MORE protein`, `The experiment failed`, `The antibody is nonspecific`],
            correctAnswer: 0,
            explanation: `In a Western blot, a missing band means the protein isn't expressed (or is too small/large to appear at expected position). In a passage context, this usually means the gene was knocked out, the promoter is mutated, or the protein is rapidly degraded.`
          }
        ]
      }
    },
    {
      id: 'sp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Bio/Biochem passages often present experiments with gels, blots, or kinetics
- Always predict the outcome BEFORE reading the data
- Western blot: protein levels. PCR/gel: DNA size. ELISA: protein concentration.
- Know enzyme kinetics patterns for competitive, uncompetitive, noncompetitive inhibitors`
    }
  ]
};
