export const bioCellCyclePart1Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc1-intro',
      type: 'text' as const,
      content: `
## The Cell Cycle — An Overview

**Part 1 of 7**

Every living organism depends on cell division for growth, repair, and reproduction.  The **cell cycle** is the ordered sequence of events that a cell undergoes from one division to the next.

A typical mammalian cell cycle lasts about **24 hours**, though this varies enormously — some embryonic cells divide in 8 minutes, while liver cells may go years between divisions.
      `
    },
    {
      id: 'cc1-phases',
      type: 'text' as const,
      content: `
### Phases of the Cell Cycle

The cell cycle consists of two major periods:

**1. Interphase** (~90% of the cell cycle)
- **G\\(_1\\) phase** (Gap 1) — cell growth, organelle duplication, preparation for DNA synthesis
- **S phase** (Synthesis) — DNA replication; each chromosome is duplicated into two sister chromatids joined at the centromere
- **G\\(_2\\) phase** (Gap 2) — continued growth, preparation for mitosis; error-checking of replicated DNA

**2. Mitotic (M) phase** (~10% of the cell cycle)
- **Mitosis** — division of the nucleus (karyokinesis) into two genetically identical daughter nuclei
- **Cytokinesis** — division of the cytoplasm to form two separate daughter cells

| Phase | Duration (typical) | Key Events |
|-------|-------------------|------------|
| G\\(_1\\) | 10-12 hours | Growth, protein synthesis, organelle production |
| S | 6-8 hours | DNA replication |
| G\\(_2\\) | 3-4 hours | Growth, preparation for mitosis, checkpoint |
| M (mitosis + cytokinesis) | ~1 hour | Nuclear and cytoplasmic division |

> **G\\(_0\\) Phase:** Some cells exit the cell cycle and enter a quiescent state called G\\(_0\\). These cells are metabolically active but do not divide. Examples include neurons and mature muscle cells.  Some G\\(_0\\) cells can re-enter the cycle if stimulated (e.g., hepatocytes after liver damage).
      `
    },
    {
      id: 'cc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Cell Cycle Overview
      `,
      exercise: {
        questions: [
          {
            question: 'A student observes cells under a microscope and finds that 90% of the cells appear to be in interphase. What can be concluded?',
            options: [
              'Most cells are dead',
              'Interphase is the longest phase of the cell cycle, so at any given moment, the majority of dividing cells will be in interphase',
              'The cells have stopped dividing',
              'The microscope is not powerful enough to see mitotic cells'
            ],
            correctAnswer: 1,
            explanation: 'Interphase occupies approximately 90% of the cell cycle. Since the proportion of cells in each phase reflects the relative duration of that phase, ~90% of dividing cells observed at any instant will be in interphase.'
          },
          {
            question: 'During which phase does the cell replicate its DNA?',
            options: [
              'G1 phase',
              'G2 phase',
              'S phase',
              'M phase'
            ],
            correctAnswer: 2,
            explanation: 'The S (Synthesis) phase is when DNA replication occurs. Each chromosome is duplicated, producing two identical sister chromatids joined at the centromere. A cell entering S phase with 46 chromosomes exits S phase still with 46 chromosomes, but each now consists of two chromatids.'
          },
          {
            question: 'A mature neuron in the human brain is in which phase?',
            options: [
              'G1, actively preparing to divide',
              'S phase, replicating its DNA',
              'G0 — a quiescent state where the cell no longer divides',
              'M phase'
            ],
            correctAnswer: 2,
            explanation: 'Most neurons are terminally differentiated and have exited the cell cycle into G0. They remain metabolically active (conducting nerve impulses) but do not divide. This is why brain and spinal cord injuries are often permanent.'
          }
        ]
      }
    },
    {
      id: 'cc1-chromosome',
      type: 'text' as const,
      content: `
### Chromosome Organization at Each Stage

Understanding chromosome structure throughout the cell cycle is critical:

**Before S phase (G\\(_1\\)):**
- Each chromosome = 1 DNA double helix + histones = **unreplicated chromosome**
- Human cell: 46 unreplicated chromosomes

**After S phase (G\\(_2\\) and early mitosis):**
- Each chromosome = 2 identical copies (sister chromatids) joined at the centromere = **replicated chromosome**
- Human cell: 46 replicated chromosomes (= 92 chromatids)
- The chromosome number does NOT change after replication — the cell still has 46 chromosomes

**After mitosis:**
- Sister chromatids separate → each becomes an independent chromosome
- Each daughter cell: 46 unreplicated chromosomes (identical to the original)

> **Key Distinction:** "Chromosome number" counts centromeres, not chromatids.  A replicated chromosome with two sister chromatids counts as ONE chromosome.

**DNA packaging hierarchy:**
1. DNA double helix (2 nm diameter)
2. DNA wraps around **histone octamers** → **nucleosomes** ("beads on a string," 11 nm)
3. Nucleosomes coil into **30 nm fiber** (solenoid)
4. Looped domains of 30 nm fiber attached to a **protein scaffold**
5. Maximum condensation during metaphase → visible chromosomes (~1400 nm)
      `
    },
    {
      id: 'cc1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Chromosome Counting
      `,
      exercise: {
        questions: [
          {
            question: 'A human cell has completed S phase but has not yet begun mitosis. How many chromosomes and chromatids does it have?',
            options: [
              '23 chromosomes, 46 chromatids',
              '46 chromosomes, 92 chromatids',
              '92 chromosomes, 92 chromatids',
              '46 chromosomes, 46 chromatids'
            ],
            correctAnswer: 1,
            explanation: 'After S phase, each of the 46 chromosomes has been replicated into two sister chromatids joined at a centromere. The cell still has 46 chromosomes (count centromeres), but 92 chromatids (each chromosome has 2).'
          }
        ]
      }
    },
    {
      id: 'cc1-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Cell Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The phase of interphase where DNA is replicated:',
            answer: 'S phase',
            acceptableAnswers: ['S phase', 's phase', 'S', 'synthesis phase', 'Synthesis phase'],
            placeholder: 'e.g. M phase'
          },
          {
            question: 'The quiescent state entered by cells that have stopped dividing:',
            answer: 'G0',
            acceptableAnswers: ['G0', 'G0 phase', 'g0', 'G zero', 'G-zero'],
            placeholder: 'e.g. G1'
          },
          {
            question: 'The structure that joins two sister chromatids together:',
            answer: 'centromere',
            acceptableAnswers: ['centromere', 'Centromere'],
            placeholder: 'e.g. telomere'
          }
        ]
      }
    },
    {
      id: 'cc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Phase
      `,
      exercise: {
        questions: [
          {
            question: 'Cell grows and duplicates organelles before DNA synthesis:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'G1 phase'
          },
          {
            question: 'DNA replication produces sister chromatids:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'S phase'
          },
          {
            question: 'Error-checking of replicated DNA before division:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'G2 phase'
          },
          {
            question: 'Nuclear division followed by cytoplasmic division:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'M phase'
          }
        ]
      }
    },
    {
      id: 'cc1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Cell Cycle Phases
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher adds a drug that blocks DNA polymerase (the enzyme that copies DNA). In which phase would cells accumulate?',
            options: [
              'G1 — cells cannot prepare for division',
              'S phase — cells enter S but cannot replicate their DNA, so they stall in S',
              'G2 — cells cannot check their DNA',
              'M phase — cells cannot divide'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase is required during S phase to replicate DNA. Blocking it would cause cells to enter S phase but fail to complete DNA synthesis. Cells would accumulate (arrest) in S phase.'
          }
        ]
      }
    }
  ]
};