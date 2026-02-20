export const mcatMicroPart4Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi4-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 4 of 7 — Viruses**

### Virus Structure

- **NOT cells** — obligate intracellular parasites
- Nucleic acid (DNA or RNA, never both) + protein coat (capsid)
- Some have a lipid **envelope** (from host membrane)

### Viral Classification

| Feature | Types |
|---------|-------|
| Genome | dsDNA, ssDNA, dsRNA, ssRNA (+) or (-) |
| Envelope | Enveloped or naked |
| Shape | Icosahedral, helical, complex |

### Replication Cycles

**Lytic cycle**: Attach → Inject DNA → Replicate → Assemble → Lyse → Release
**Lysogenic cycle**: Viral DNA integrates into host genome (prophage) → replicates with host → can switch to lytic under stress

### Baltimore Classification (Important for MCAT)

| Class | Genome | Key Feature |
|-------|--------|-------------|
| I | dsDNA | Direct transcription (herpes, adenovirus) |
| IV | (+)ssRNA | mRNA-ready → immediate translation (COVID-19, Zika) |
| V | (-)ssRNA | Needs RNA-dependent RNA Pol (influenza, Ebola) |
| VI | ssRNA-RT | Reverse transcriptase → DNA (HIV) |
| VII | dsDNA-RT | Reverse transcriptase intermediate (Hepatitis B) |`
    },
    {
      id: 'mi4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Virology** 🎯',
      exercise: {
        questions: [
          {
            question: 'Enveloped viruses are generally more susceptible to disinfection because:',
            options: ['The lipid envelope is easily disrupted by detergents, alcohol, and desiccation', 'They have thicker capsids', 'They replicate more slowly', 'They lack nucleic acid'],
            correctAnswer: 0,
            explanation: 'The lipid envelope is fragile — destroyed by soap, alcohol, heat, and drying. Without their envelope, these viruses can\'t attach to host cells. Naked viruses (no envelope) are more resistant to environmental conditions.'
          }
        ]
      }
    },
    {
      id: 'mi4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Viruses are obligate intracellular parasites (not alive by themselves)
- (+)ssRNA can be directly translated. (-)ssRNA needs RNA-dependent RNA Pol.
- Retroviruses (HIV): RNA → DNA via reverse transcriptase
- Enveloped viruses = fragile. Naked viruses = environmental survivors.`
    }
  ]
};
