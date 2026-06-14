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
- Some have a lipid **envelope** (derived from host membrane)

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
      id: 'mi4-worked',
      type: 'text' as const,
      content: `### Worked Example — Why a (+)ssRNA Virus Translates Faster Than a (-)ssRNA Virus

**Scenario:** A passage compares two RNA viruses: a (+)ssRNA virus (like the common cold coronavirus) and a (-)ssRNA virus (like influenza). Both must make viral proteins after entering a host cell. The question asks which can begin translation **immediately** and why the other cannot.

**Step 1 — Recall what the ribosome reads.** Host ribosomes translate only **mRNA**, which by convention is the **(+) sense** strand (the same sequence as the mRNA).

**Step 2 — Evaluate each genome.**
- A **(+)ssRNA** genome *is* already mRNA-sense. The ribosome can latch on and translate it the moment it enters the cytoplasm — no intermediate step.
- A **(-)ssRNA** genome is complementary (antisense) to mRNA. It must first be copied into a (+) strand before any protein can be made.

**Step 3 — Identify the required enzyme.** Host cells have **no enzyme** that makes RNA from an RNA template. So a (-)ssRNA virus must **package its own RNA-dependent RNA polymerase (RdRp)** inside the virion and bring it along; only then can it transcribe its genome into translatable mRNA.

> **MCAT takeaway:** (+)ssRNA = "mRNA-ready," translated immediately. (-)ssRNA must carry its own RdRp into the cell first. Retroviruses (Class VI, e.g., HIV) are a separate case: they package **reverse transcriptase** to convert RNA → DNA before integrating into the host genome.`
    },
    {
      id: 'mi4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Virology** 🎯`,
      exercise: {
        questions: [
          {
            question: `Enveloped viruses are generally more susceptible to disinfection because:`,
            options: [`The lipid envelope is easily disrupted by detergents, alcohol, and desiccation`, `They have thicker capsids`, `They replicate more slowly`, `They lack nucleic acid`],
            correctAnswer: 0,
            explanation: `The lipid envelope is fragile — destroyed by soap, alcohol, heat, and drying. Without their envelope, these viruses cannot attach to host cells. Naked viruses (no envelope) are more resistant to environmental conditions.`
          },
          {
            question: `A (+)ssRNA virus can begin producing viral proteins immediately upon entering a host cell because its genome:`,
            options: [`Can function directly as mRNA and be translated by host ribosomes`, `Is double-stranded and self-replicating`, `Integrates into the host genome first`, `Is read by host DNA polymerase`],
            correctAnswer: 0,
            explanation: `A (+)ssRNA genome is already mRNA-sense, so host ribosomes can translate it directly. A (-)ssRNA virus must first transcribe its genome into (+) sense RNA using a packaged RNA-dependent RNA polymerase.`
          },
          {
            question: `HIV must carry the enzyme reverse transcriptase within its virion because it needs to:`,
            options: [`Convert its RNA genome into DNA for integration into the host chromosome`, `Translate its RNA directly into protein`, `Replicate its RNA without a DNA intermediate`, `Degrade host DNA`],
            correctAnswer: 0,
            explanation: `HIV is a retrovirus (Class VI). Host cells cannot make DNA from an RNA template, so HIV brings its own reverse transcriptase to synthesize DNA from its (+)ssRNA genome; that DNA is then integrated as a provirus by integrase.`
          },
          {
            question: `A bacteriophage's DNA integrates into the host bacterial chromosome as a prophage and is copied each time the cell divides, without immediately destroying the cell. This describes the:`,
            options: [`Lysogenic cycle`, `Lytic cycle`, `Budding pathway`, `Transduction cycle`],
            correctAnswer: 0,
            explanation: `In the lysogenic cycle, the phage genome integrates as a prophage and replicates passively with the host. Under stress (e.g., UV, DNA damage), it can excise and switch to the lytic cycle, producing new phage and lysing the cell.`
          },
          {
            question: `A (-)ssRNA virus such as influenza must package which enzyme inside its virion to replicate?`,
            options: [`RNA-dependent RNA polymerase (RdRp)`, `Reverse transcriptase`, `DNA gyrase`, `Host ribosome`],
            correctAnswer: 0,
            explanation: `Because host cells lack any enzyme that copies RNA from an RNA template, a (-)ssRNA virus must bring its own RdRp to transcribe its antisense genome into translatable (+) mRNA. Reverse transcriptase is used by retroviruses, not by (-)ssRNA viruses.`
          },
          {
            question: `Which statement about viral structure is correct?`,
            options: [`A virus contains either DNA or RNA, but never both, surrounded by a protein capsid`, `All viruses have a lipid envelope`, `Viruses contain both DNA and RNA simultaneously`, `Viruses possess 70S ribosomes for protein synthesis`],
            correctAnswer: 0,
            explanation: `A virion carries one type of nucleic acid (DNA or RNA) inside a protein capsid; some additionally have a host-derived lipid envelope. Viruses have no ribosomes of their own — they rely entirely on host ribosomes to translate viral proteins.`
          }
        ]
      }
    },
    {
      id: 'mi4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Viruses are obligate intracellular parasites (not alive by themselves) with DNA or RNA, never both
- (+)ssRNA can be directly translated; (-)ssRNA needs a packaged RNA-dependent RNA polymerase
- Retroviruses (HIV): RNA → DNA via reverse transcriptase, then integration
- Lytic = immediate destruction; lysogenic = integration as a prophage, with later switch possible
- Enveloped viruses = fragile; naked viruses = environmental survivors`
    }
  ]
};
