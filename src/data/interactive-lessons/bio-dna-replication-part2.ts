export const bioDnaReplicationPart2Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr2-intro',
      type: 'text' as const,
      content: `
## Semiconservative Replication

**Part 2 of 7**

Three models for DNA replication were proposed:
1. **Conservative** — the original double helix remains intact; a completely new copy is made
2. **Semiconservative** — each new double helix consists of one original (parental) strand and one new strand
3. **Dispersive** — parental and new DNA are interspersed throughout both strands

The **Meselson-Stahl experiment** (1958) elegantly determined which model is correct.
      `
    },
    {
      id: 'dr2-meselson',
      type: 'text' as const,
      content: `
### The Meselson-Stahl Experiment

**Design:**
1. E. coli were grown for many generations in medium containing **heavy nitrogen** (\\(^{15}\\)N) — all DNA became uniformly "heavy"
2. Cells were transferred to medium containing **light nitrogen** (\\(^{14}\\)N)
3. DNA was extracted after each generation and centrifuged in a **CsCl density gradient**

**Results:**

| Generation | DNA bands observed | Interpretation |
|-----------|-------------------|----------------|
| 0 (all \\(^{15}\\)N) | One heavy band | All DNA is heavy |
| 1 (one round of replication in \\(^{14}\\)N) | One intermediate band | Each DNA molecule has one heavy and one light strand |
| 2 | Half intermediate, half light | Half the molecules retain a heavy strand; half are entirely light |
| 3 | 1/4 intermediate, 3/4 light | Pattern continues predictably |

**Conclusion:** DNA replication is **semiconservative** — each daughter molecule contains one parental strand and one newly synthesized strand.

> **Why this rules out other models:**
> - Conservative would show heavy + light bands at generation 1 (not intermediate)
> - Dispersive would show all intermediate bands that become progressively lighter (never a pure light band)
> - Only semiconservative predicts one intermediate band at generation 1, then both intermediate and light at generation 2
      `
    },
    {
      id: 'dr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Semiconservative Replication
      `,
      exercise: {
        questions: [
          {
            question: 'In the Meselson-Stahl experiment, after 3 generations in light (14N) medium starting from all heavy (15N) DNA, what fraction of DNA molecules will have intermediate density?',
            options: [
              '1/2',
              '1/4 — each generation halves the number of molecules retaining a heavy parental strand',
              '3/4',
              '1/8'
            ],
            correctAnswer: 1,
            explanation: 'After generation 1: all intermediate (2/2). After generation 2: 2/4 intermediate, 2/4 light. After generation 3: 2/8 intermediate, 6/8 light. The number of intermediate molecules stays constant (2), but the total number doubles each generation. So 2/8 = 1/4.'
          },
          {
            question: 'If replication were conservative, what would Meselson and Stahl have observed after one generation?',
            options: [
              'One intermediate band',
              'Two bands — one heavy (the original intact molecule) and one light (the entirely new copy)',
              'One light band',
              'Three bands — heavy, intermediate, and light'
            ],
            correctAnswer: 1,
            explanation: 'Conservative replication predicts the original double helix stays fully heavy (both parental strands together) and a completely new light copy is made. This would produce two distinct bands — heavy and light — with NO intermediate. Meselson-Stahl observed intermediate, ruling this out.'
          }
        ]
      }
    },
    {
      id: 'dr2-origins',
      type: 'text' as const,
      content: `
### Origins of Replication

DNA replication begins at specific sequences called **origins of replication**:

**Prokaryotes:**
- Single circular chromosome with **one origin** (oriC in E. coli)
- Replication proceeds **bidirectionally** from the origin, creating two replication forks that move in opposite directions and meet on the opposite side of the chromosome
- Total replication time: ~40 minutes

**Eukaryotes:**
- Multiple linear chromosomes with **many origins** (30,000-50,000 in human cells)
- Multiple origins allow the much larger genome to be replicated within the S phase time window
- Each origin fires once per S phase (controlled by the **licensing system** — pre-replication complexes mark origins for use)
- Adjacent origins define a **replicon** — the segment of DNA replicated from one origin
- Replication forks from adjacent origins meet and the replicons fuse

> **Why multiple origins?** Human DNA polymerase moves at ~50 nucleotides/second. With 6.4 billion bp and bidirectional replication from one origin, it would take ~2 years. Multiple origins reduce this to ~8 hours.
      `
    },
    {
      id: 'dr2-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Replication Model
      `,
      exercise: {
        questions: [
          {
            question: 'The replication model confirmed by Meselson and Stahl:',
            answer: 'semiconservative',
            acceptableAnswers: ['semiconservative', 'Semiconservative', 'semi-conservative'],
            placeholder: 'e.g. conservative'
          },
          {
            question: 'In E. coli, the single origin of replication is called:',
            answer: 'oriC',
            acceptableAnswers: ['oriC', 'OriC', 'oricC', 'ori C'],
            placeholder: 'e.g. ori1'
          },
          {
            question: 'The isotope of nitrogen used to make heavy DNA in the Meselson-Stahl experiment:',
            answer: '15N',
            acceptableAnswers: ['15N', 'N-15', 'nitrogen-15', '15-N'],
            placeholder: 'e.g. 14C'
          }
        ]
      }
    },
    {
      id: 'dr2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'If a drug blocks the licensing of replication origins, what would be the consequence?',
            options: [
              'DNA would replicate faster',
              'Cells would be unable to initiate DNA replication at the blocked origins, preventing complete genome duplication and potentially arresting the cell cycle',
              'DNA would replicate conservatively instead',
              'The cell would use RNA instead of DNA'
            ],
            correctAnswer: 1,
            explanation: 'The licensing system ensures that pre-replication complexes are loaded at origins during G1. If licensing is blocked, origins cannot fire during S phase, DNA replication cannot initiate (or is incomplete), and the cell cannot proceed through the cell cycle.'
          }
        ]
      }
    }
  ]
};