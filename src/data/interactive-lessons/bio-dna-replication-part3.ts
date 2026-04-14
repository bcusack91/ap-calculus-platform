export const bioDnaReplicationPart3Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr3-intro',
      type: 'text' as const,
      content: `
## The Replication Machinery

**Part 3 of 7**

DNA replication requires a team of enzymes and proteins working together at the **replication fork** — the Y-shaped region where the parental double helix is unwound and new strands are synthesized.
      `
    },
    {
      id: 'dr3-enzymes',
      type: 'text' as const,
      content: `
### Key Enzymes and Proteins

| Enzyme/Protein | Function |
|---------------|----------|
| **Helicase** | Unwinds the double helix by breaking hydrogen bonds between bases; moves along the DNA using ATP hydrolysis |
| **Single-strand binding proteins (SSB)** | Bind to exposed single-stranded DNA to prevent reannealing and protect from nuclease degradation |
| **Topoisomerase (Gyrase in prokaryotes)** | Relieves torsional strain (supercoiling) ahead of the replication fork by cutting, swiveling, and re-joining the DNA backbone |
| **Primase** | RNA polymerase that synthesizes a short **RNA primer** (5-10 nucleotides) complementary to the template; provides the free 3'-OH needed by DNA polymerase |
| **DNA Polymerase III** (prokaryotes) | The main replicative polymerase; adds nucleotides to the 3' end of the primer/growing strand in the 5' → 3' direction |
| **DNA Polymerase I** (prokaryotes) | Removes RNA primers (5' → 3' exonuclease activity) and replaces them with DNA |
| **DNA Ligase** | Seals the nick (phosphodiester bond) between adjacent Okazaki fragments after primer removal |
| **Sliding clamp (PCNA in eukaryotes)** | Ring-shaped protein that encircles DNA and tethers DNA polymerase to the template, increasing processivity |
| **Clamp loader** | Uses ATP to load the sliding clamp onto DNA at primer-template junctions |

> **Why primers?** DNA polymerase can only ADD nucleotides to an existing 3'-OH group.  It cannot start a new strand from scratch.  Primase (an RNA polymerase) CAN start de novo, providing the initial 3'-OH.
      `
    },
    {
      id: 'dr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Replication Enzymes
      `,
      exercise: {
        questions: [
          {
            question: 'Why is an RNA primer necessary for DNA replication to begin?',
            options: [
              'DNA polymerase requires RNA as a template',
              'DNA polymerase can only extend an existing strand — it needs a free 3\\u2019-OH group to add nucleotides. It cannot initiate a new strand de novo.',
              'RNA primers protect the DNA from damage',
              'Primers speed up helicase activity'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase has a fundamental limitation — it can only add nucleotides to the 3\\u2019-OH of an existing nucleic acid chain. Primase synthesizes a short RNA primer to provide this initial 3\\u2019-OH, which DNA polymerase then extends with deoxyribonucleotides.'
          },
          {
            question: 'If topoisomerase is inhibited while helicase continues to unwind DNA, what occurs?',
            options: [
              'DNA replication speeds up',
              'Positive supercoiling accumulates ahead of the fork, eventually generating so much torsional strain that the fork cannot advance — replication stalls',
              'The DNA spontaneously unwinds',
              'Primers cannot be synthesized'
            ],
            correctAnswer: 1,
            explanation: 'As helicase unwinds the helix, it creates positive supercoils (overwinding) ahead of the fork. Without topoisomerase to relieve this tension, the DNA becomes so tightly wound that helicase can no longer separate the strands. Many antibiotics (fluoroquinolones) and anticancer drugs (camptothecin) target topoisomerases.'
          }
        ]
      }
    },
    {
      id: 'dr3-leading-lagging',
      type: 'text' as const,
      content: `
### Leading and Lagging Strands

Because DNA polymerase can only synthesize in the **5' → 3' direction**, and the two parental strands are antiparallel, the two daughter strands are synthesized differently:

**Leading strand:**
- Template runs 3' → 5' (so new strand grows 5' → 3' toward the fork)
- Synthesized **continuously** with a single primer
- DNA polymerase moves in the same direction as the fork

**Lagging strand:**
- Template runs 5' → 3' (so new strand must grow 5' → 3' AWAY from the fork)
- Synthesized **discontinuously** as a series of short fragments called **Okazaki fragments**
  - ~1000-2000 nt in prokaryotes; ~100-200 nt in eukaryotes
- Each Okazaki fragment requires its own RNA primer
- After synthesis, **DNA Polymerase I** removes the RNA primers and fills in with DNA
- **DNA Ligase** seals the remaining nicks, joining the Okazaki fragments into a continuous strand

> **The lagging strand is the "complex" strand** — it requires repeated cycles of priming, extension, primer removal, gap filling, and ligation.  This makes lagging strand synthesis more error-prone and slower than leading strand synthesis.
      `
    },
    {
      id: 'dr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Leading and Lagging
      `,
      exercise: {
        questions: [
          {
            question: 'A mutation knocks out DNA ligase activity.  Which strand would be most severely affected?',
            options: [
              'The leading strand — it needs ligase to connect to the origin',
              'The lagging strand — without ligase, Okazaki fragments cannot be joined into a continuous strand, resulting in fragmented DNA',
              'Both equally — ligase is needed for both',
              'Neither — ligase is not essential'
            ],
            correctAnswer: 1,
            explanation: 'The leading strand is synthesized continuously and needs only one ligation event. The lagging strand consists of hundreds or thousands of Okazaki fragments, each needing to be ligated to the next. Without ligase, the lagging strand remains in fragments — a severe defect.'
          },
          {
            question: 'How many RNA primers are needed to replicate a linear DNA molecule with one origin of replication?',
            options: [
              'One',
              'Two — one for each leading strand',
              'Many — one for each leading strand PLUS one for every Okazaki fragment on each lagging strand',
              'None — eukaryotes do not use primers'
            ],
            correctAnswer: 2,
            explanation: 'Bidirectional replication from one origin creates two replication forks. Each fork has one leading strand (one primer) and one lagging strand (many primers — one per Okazaki fragment). Total primers = 2 (leading strands) + many (all Okazaki fragments) = many primers.'
          }
        ]
      }
    },
    {
      id: 'dr3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Replication Machinery
      `,
      exercise: {
        questions: [
          {
            question: 'Short DNA fragments synthesized on the lagging strand:',
            answer: 'Okazaki fragments',
            acceptableAnswers: ['Okazaki fragments', 'okazaki fragments', 'Okazaki', 'okazaki'],
            placeholder: 'e.g. restriction fragments'
          },
          {
            question: 'The enzyme that synthesizes RNA primers:',
            answer: 'primase',
            acceptableAnswers: ['primase', 'Primase', 'RNA primase'],
            placeholder: 'e.g. polymerase'
          },
          {
            question: 'The enzyme that seals nicks between Okazaki fragments:',
            answer: 'DNA ligase',
            acceptableAnswers: ['DNA ligase', 'ligase', 'Ligase', 'DNA Ligase'],
            placeholder: 'e.g. helicase'
          }
        ]
      }
    },
    {
      id: 'dr3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'An antibiotic targets the bacterial DNA gyrase (topoisomerase II).  Why would this drug selectively affect bacteria without harming human cells?',
            options: [
              'Human cells do not have topoisomerases',
              'Bacterial DNA gyrase is structurally different from eukaryotic topoisomerases — the drug binds specifically to the bacterial enzyme. Human topoisomerases are not affected at therapeutic doses.',
              'Human cells do not replicate their DNA',
              'The antibiotic is only taken up by bacterial cells'
            ],
            correctAnswer: 1,
            explanation: 'Bacterial DNA gyrase (topoisomerase II) and eukaryotic topoisomerases are related but structurally different. Fluoroquinolone antibiotics (e.g., ciprofloxacin) specifically inhibit the bacterial enzyme. Human topoisomerase II is sufficiently different that it is not targeted at therapeutic doses.'
          }
        ]
      }
    }
  ]
};