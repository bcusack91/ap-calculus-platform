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
1. E. coli were grown for many generations in medium containing **heavy nitrogen** ($^{15}$N) — all DNA became uniformly "heavy"
2. Cells were transferred to medium containing **light nitrogen** ($^{14}$N)
3. DNA was extracted after each generation and centrifuged in a **CsCl density gradient**

**Results:**

| Generation | DNA bands observed | Interpretation |
|-----------|-------------------|----------------|
| 0 (all $^{15}$N) | One heavy band | All DNA is heavy |
| 1 (one round of replication in $^{14}$N) | One intermediate band | Each DNA molecule has one heavy and one light strand |
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
              '1/4',
              '3/4',
              '1/8'
            ],
            correctAnswer: 1,
            explanation: 'After generation 1: all intermediate (2/2). After generation 2: 2/4 intermediate, 2/4 light. After generation 3: 2/8 intermediate, 6/8 light. The number of intermediate molecules stays constant (2), but the total number doubles each generation. So 2/8 = 1/4.'
          },
          {
            question: 'If replication were conservative, what would Meselson and Stahl have observed after one generation?',
            options: [
              'A single band at intermediate density',
              'One heavy band and one light band',
              'A single band at light density only',
              'Heavy, intermediate, and light bands'
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
- Single circular chromosome with **one origin** of replication
- Replication proceeds **bidirectionally** from the origin, creating two replication forks that move in opposite directions and meet on the opposite side of the chromosome
- Total replication time: ~40 minutes

**Eukaryotes:**
- Multiple linear chromosomes with **many origins** (30,000-50,000 in human cells)
- Multiple origins allow the much larger genome to be replicated within the S phase time window
- Each origin opens into a **replication bubble** with a fork at each end; the forks move apart in opposite directions
- Neighboring bubbles grow until they meet and merge, so each chromosome is copied as one continuous molecule
- Each stretch of DNA is copied **exactly once** per cell cycle, so each daughter cell receives one complete copy

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
            question: 'The number of replication forks that form at a single origin of replication:',
            answer: '2',
            acceptableAnswers: ['2', 'two', 'Two'],
            placeholder: 'e.g. 1'
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
            question: 'A human genome has about 6 billion base pairs, yet a human cell copies all of it in a few hours of S phase. Which feature of eukaryotic replication best explains this?',
            options: [
              'Helicase unwinds the DNA so quickly that one fork covers the genome',
              'Copying starts at many origins, so many forks work at the same time',
              'Only the genes that are being expressed are copied in each S phase',
              'Each strand is copied by RNA polymerase, which needs no primer'
            ],
            correctAnswer: 1,
            explanation: 'Thousands of origins each open into a bubble with two forks, so many stretches of each chromosome are copied at the same time. A single fork would need far longer, every part of the genome must be copied (not just expressed genes), and DNA polymerase, not RNA polymerase, builds the new DNA strands.'
          }
        ]
      }
    }
  ]
};