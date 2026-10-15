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
### Key Enzymes

The CED names five enzymes for DNA replication and transcription. Four of them work at the replication fork:

| Enzyme | Function |
|---------------|----------|
| **Helicase** | Unwinds the double helix by breaking the hydrogen bonds between bases, separating the two template strands |
| **Topoisomerase** | Relieves the strain (supercoiling) that builds up ahead of the replication fork as the helix unwinds, by cutting, swiveling and rejoining the DNA backbone |
| **DNA polymerase** | Adds nucleotides to the 3′ end of a growing strand, building new DNA in the 5′ → 3′ direction using the template strand as a guide; it needs an **RNA primer** to start |
| **DNA ligase** | Seals the gaps in the sugar-phosphate backbone between DNA fragments on the lagging strand |

(The fifth, **RNA polymerase**, carries out transcription. Other proteins at the fork, and the names of the separate steps, are beyond the scope of the AP exam.)

> **Why primers?** DNA polymerase can only ADD nucleotides to an existing 3'-OH group.  It cannot start a new strand from scratch.  So a short **RNA primer**, complementary to the template, is laid down first to provide that starting 3' end. The primers are later removed and replaced with DNA.
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
              'Polymerase must read an RNA template before it can copy any DNA',
              'DNA polymerase can only extend an existing 3’-OH, not start a strand',
              'The primer shields single-stranded DNA from nucleases until it is copied',
              'The primer activates helicase so the two strands can be pulled apart'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase has a fundamental limitation — it can only add nucleotides to the 3\u2019-OH of an existing nucleic acid chain. A short RNA primer, laid down first, provides this initial 3\u2019-OH, which DNA polymerase then extends with DNA nucleotides.'
          },
          {
            question: 'If topoisomerase is inhibited while helicase continues to unwind DNA, what occurs?',
            options: [
              'The DNA unwinds on its own, so the fork no longer needs helicase',
              'Overwinding builds ahead of the fork until the fork stalls',
              'Single strands re-anneal behind the fork as ligase detaches',
              'RNA primers can no longer form, so no new strands begin'
            ],
            correctAnswer: 1,
            explanation: 'As helicase unwinds the helix, it creates overwinding (supercoiling) ahead of the fork. Without topoisomerase to relieve this tension, the DNA becomes so tightly wound that helicase can no longer separate the strands. Topoisomerase does not make primers, and ligase works behind the fork, not ahead of it.'
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
- Each Okazaki fragment requires its own RNA primer
- After synthesis, the RNA primers are removed and replaced with DNA
- **DNA ligase** seals the remaining gaps in the backbone, joining the Okazaki fragments into a continuous strand

> **The lagging strand is the "complex" strand** — it requires repeated cycles of priming, extension, primer replacement, and joining by ligase, while the leading strand is built in one continuous piece.
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
              'The leading strand, which needs ligase to attach to the origin',
              'The lagging strand, whose Okazaki fragments stay unjoined',
              'Both strands equally, since each is built from many fragments',
              'Neither strand, because DNA polymerase seals every gap itself'
            ],
            correctAnswer: 1,
            explanation: 'The leading strand is synthesized continuously and needs only one ligation event. The lagging strand consists of hundreds or thousands of Okazaki fragments, each needing to be ligated to the next. Without ligase, the lagging strand remains in fragments — a severe defect.'
          },
          {
            question: 'How many RNA primers are needed to replicate a linear DNA molecule with one origin of replication?',
            options: [
              'One, placed at the origin and shared by both forks',
              'Two, one for each leading strand at the two forks',
              'Many, one for each leading strand and each Okazaki fragment',
              'None, because eukaryotic DNA polymerases start strands de novo'
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
            question: 'The enzyme that unwinds the double helix at the replication fork:',
            answer: 'helicase',
            acceptableAnswers: ['helicase', 'Helicase', 'DNA helicase'],
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
            question: 'An antibiotic blocks the topoisomerase of bacteria but has little effect on the topoisomerase of human cells. What is the most likely reason it can act selectively?',
            options: [
              'Human cells lack topoisomerase and relieve DNA strain by other means',
              'The bacterial enzyme differs in structure from the human version',
              'Most human cells never replicate DNA, so they never need the enzyme',
              'The drug enters bacterial cells but cannot cross human cell membranes'
            ],
            correctAnswer: 1,
            explanation: 'Bacterial and human topoisomerases do the same job but differ in shape, so a drug can fit the bacterial enzyme\'s binding site without fitting the human one. Human cells do have topoisomerases, many human cells divide and replicate DNA, and the selectivity comes from the enzyme, not from the membrane.'
          }
        ]
      }
    }
  ]
};