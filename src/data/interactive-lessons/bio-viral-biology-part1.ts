export const bioViralBiologyPart1Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir1-intro',
      type: 'text' as const,
      content: `
# 🦠 Virus Structure & Classification

Viruses are **obligate intracellular parasites** — they cannot reproduce on their own and must hijack a host cell's machinery. They exist at the boundary between living and nonliving.

### What You'll Learn
- Basic virus structure: capsid, envelope, genome
- Types of viral genomes (DNA vs RNA, single vs double-stranded)
- Why viruses are not considered truly alive
- The Baltimore classification system
      `
    },
    {
      id: 'vir1-structure',
      type: 'text' as const,
      content: `
## Anatomy of a Virus

All viruses share a minimal set of components:

| Component | Description |
|-----------|-------------|
| **Nucleic acid core** | Genome — either DNA or RNA (never both) |
| **Capsid** | Protein coat surrounding the genome; made of capsomere subunits |
| **Envelope** (some viruses) | Lipid bilayer derived from host cell membrane; studded with glycoprotein spikes |
| **Viral enzymes** (some viruses) | e.g., reverse transcriptase, RNA-dependent RNA polymerase |

### Capsid Shapes
- **Icosahedral** — 20-faced polyhedron (e.g., adenovirus, poliovirus)
- **Helical** — rod-shaped protein helix (e.g., tobacco mosaic virus, Ebola)
- **Complex** — unique morphology (e.g., bacteriophages with head, tail, and tail fibers)

> 🔑 **Enveloped viruses** (influenza, HIV, SARS-CoV-2) are more fragile outside the host because detergents and drying destroy the lipid envelope. **Naked (non-enveloped) viruses** (norovirus, rhinovirus) are hardier on surfaces.
      `
    },
    {
      id: 'vir1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which component is found in ALL viruses?',
            options: [
              'Lipid envelope',
              'Reverse transcriptase',
              'Protein capsid',
              'Ribosomes'
            ],
            correctAnswer: 2,
            explanation: 'All viruses have a protein capsid surrounding their genome. Envelopes are only in some viruses, reverse transcriptase only in retroviruses, and viruses never contain ribosomes.'
          },
          {
            question: 'Why are enveloped viruses generally more susceptible to disinfectants than naked viruses?',
            options: [
              'They have larger genomes that are easier to damage',
              'Their lipid envelope is disrupted by soap and detergents',
              'They replicate more slowly',
              'They lack a capsid for protection'
            ],
            correctAnswer: 1,
            explanation: 'The lipid bilayer envelope is disrupted by detergents, alcohol, and drying, which inactivates the virus. Enveloped viruses still have a capsid underneath, but losing envelope glycoproteins prevents host cell attachment.'
          }
        ]
      }
    },
    {
      id: 'vir1-genomes',
      type: 'text' as const,
      content: `
## Viral Genome Types

Unlike cellular organisms (which all use dsDNA), viruses display remarkable genome diversity:

| Genome Type | Abbreviation | Examples |
|------------|-------------|----------|
| **Double-stranded DNA** | dsDNA | Herpesviruses, poxviruses, adenoviruses |
| **Single-stranded DNA** | ssDNA | Parvoviruses |
| **Double-stranded RNA** | dsRNA | Reoviruses (rotavirus) |
| **Positive-sense ssRNA** (+ssRNA) | (+)ssRNA | Coronaviruses, flaviviruses, poliovirus |
| **Negative-sense ssRNA** (−ssRNA) | (−)ssRNA | Influenza, Ebola, rabies |
| **Retrovirus (ssRNA → DNA)** | ssRNA-RT | HIV, HTLV |

### Key Distinctions
- **(+) sense RNA** can be directly translated by host ribosomes (acts like mRNA)
- **(−) sense RNA** must first be converted to (+) sense by viral RNA-dependent RNA polymerase (RdRp)
- **Retroviruses** use reverse transcriptase to convert RNA → DNA, which integrates into the host genome

> 🧬 The **Baltimore classification** groups viruses into 7 classes based on genome type and mRNA production strategy. It's the most useful system for understanding replication.
      `
    },
    {
      id: 'vir1-alive',
      type: 'text' as const,
      content: `
## Are Viruses Alive?

This is one of biology's great debates. Consider the properties of life:

| Property of Life | Viruses? |
|-----------------|----------|
| Composed of cells | ❌ No — acellular particles |
| Contain genetic material | ✅ Yes — DNA or RNA |
| Reproduce independently | ❌ No — require a host cell |
| Respond to stimuli | ❌ No active response |
| Maintain homeostasis | ❌ No metabolism outside host |
| Evolve over time | ✅ Yes — mutation, natural selection |
| Grow and develop | ❌ No growth; assembled from parts |

### Scientific Consensus
Viruses are **not considered living organisms** because they:
- Lack their own ribosomes and metabolic machinery
- Cannot reproduce outside a host cell
- Do not maintain homeostasis

However, they **evolve**, contain genetic information, and are subject to natural selection — blurring the line between chemistry and biology.

> 💡 Some scientists call viruses "organisms at the edge of life" — they become biologically active only inside a host cell.
      `
    },
    {
      id: 'vir1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The protein coat surrounding a viral genome is called the ___',
            options: ['envelope', 'capsid', 'nucleoid', 'pilus']
          },
          {
            label: 'Positive-sense ssRNA viruses can be directly ___ by host ribosomes',
            options: ['transcribed', 'translated', 'replicated', 'reverse transcribed']
          },
          {
            label: 'Viruses are considered obligate intracellular ___ because they require a host cell to reproduce',
            options: ['symbionts', 'parasites', 'commensals', 'decomposers']
          },
          {
            label: 'Retroviruses use the enzyme ___ to convert their RNA genome into DNA',
            options: ['DNA polymerase', 'RNA polymerase', 'reverse transcriptase', 'helicase']
          }
        ],
        correctAnswers: ['capsid', 'translated', 'parasites', 'reverse transcriptase'],
        hint1: 'Think about the basic anatomy of a virus — what surrounds the nucleic acid?',
        hint2: 'Positive-sense RNA is equivalent to mRNA — what do ribosomes do with mRNA?',
        hint3: 'Retroviruses have a unique enzyme that goes "backwards" from RNA to DNA.',
        explanation: 'The capsid is the universal protein shell. (+)ssRNA acts as mRNA and is directly translated. Viruses are obligate intracellular parasites. Reverse transcriptase converts RNA → DNA in retroviruses like HIV.'
      }
    }
  ]
};
