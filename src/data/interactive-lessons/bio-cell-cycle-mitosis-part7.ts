export const bioCellCyclePart7Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc7-intro',
      type: 'text' as const,
      content: `
## AP Review — Cell Cycle and Mitosis

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating all cell cycle and mitosis concepts.
      `
    },
    {
      id: 'cc7-summary',
      type: 'text' as const,
      content: `
### Key Principles Summary

1. The cell cycle consists of **interphase** (G$_1$, S, G$_2$) and **M phase** (mitosis + cytokinesis)
2. **Mitosis** produces two genetically identical daughter cells (preserving chromosome number)
3. **Cyclin-Cdk complexes** drive progression through each phase; cyclin degradation resets the system
4. **Checkpoints** (G$_1$/S, G$_2$/M, metaphase) ensure accuracy before committing to the next phase
5. **Cancer** results from mutations in proto-oncogenes (gain of function) and tumor suppressors (loss of function)
6. Cytokinesis uses a **cleavage furrow** (animal) or **cell plate** (plant)
      `
    },
    {
      id: 'cc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'An organism has a diploid number of 2n = 8. During G2, how many DNA molecules (double helices) are present in each cell?',
            options: [
              '4',
              '8',
              '16',
              '32'
            ],
            correctAnswer: 2,
            explanation: 'In G2, each chromosome has been replicated and consists of 2 sister chromatids, each containing one DNA molecule. With 8 chromosomes, there are 8 x 2 = 16 DNA molecules. Note: the chromosome count is still 8 (counted by centromeres).'
          },
          {
            question: 'A virus makes a protein that disables a tumor-suppressor protein, one that normally holds cells at the G1/S checkpoint until growth signals arrive. How could this contribute to cancer?',
            options: [
              'Infected cells could enter S phase and divide when they should not',
              'Infected cells could no longer replicate their DNA during S phase',
              'Infected cells would undergo apoptosis as soon as the virus entered',
              'Infected cells would stop at the G2/M checkpoint and never divide'
            ],
            correctAnswer: 0,
            explanation: 'With the G1/S brake removed, cells pass into S phase and keep dividing even when no growth signal is present, a step toward uncontrolled growth. Losing a brake speeds the cycle up; it does not block replication, trigger apoptosis, or stop cells at G2/M.'
          },
          {
            question: 'A chemotherapy drug stabilizes microtubules so they cannot shrink. How does this kill dividing cancer cells?',
            options: [
              'It blocks DNA polymerase, so cancer cells cannot replicate their DNA',
              'It prevents chromosomes from condensing at the start of prophase',
              'It freezes the spindle, so cells stall in mitosis and then die',
              'It prevents only cytokinesis, producing binucleate cells that keep dividing'
            ],
            correctAnswer: 2,
            explanation: 'The drug locks microtubules in place. Spindle microtubules must grow and shrink to capture chromosomes and move them, so the spindle cannot function properly. The metaphase checkpoint stays active, anaphase never begins, and the prolonged mitotic arrest eventually triggers apoptosis.'
          }
        ]
      }
    },
    {
      id: 'cc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'Stem cells can divide asymmetrically — producing one daughter cell that remains a stem cell and one that differentiates. What must be differently distributed during this division?',
            options: [
              'DNA — one daughter receives extra copies of the chromosomes',
              'Fate determinants — regulatory proteins are split unequally',
              'Mitochondria — one daughter receives all of the mitochondria',
              'Chromosomes — each daughter receives a different set of genes'
            ],
            correctAnswer: 1,
            explanation: 'Both daughter cells receive identical chromosomes through mitosis. Asymmetric division depends on the unequal distribution of cell-fate determinants (transcription factors, mRNAs, signaling molecules) during cytokinesis. The daughter that inherits "stemness" factors remains a stem cell; the other differentiates.'
          },
          {
            question: 'Most liver cells in an adult do not divide, but after part of the liver is surgically removed, many of the remaining cells begin dividing again until the liver regrows. Before the surgery these cells were best described as:',
            options: [
              'Resting in G0, out of the cycle but able to reenter it',
              'Permanently stuck in S phase, unable to finish copying DNA',
              'Held in metaphase, waiting for a spindle checkpoint signal',
              'Missing the genes needed to build a mitotic spindle'
            ],
            correctAnswer: 0,
            explanation: 'Cells can leave the cell cycle for G0, a nondividing state, and reenter the cycle in response to appropriate cues; loss of liver tissue supplies those cues. Cells stuck in S phase or held in metaphase would be stopped at a checkpoint or removed by apoptosis rather than working normally for years, and cells missing spindle genes could never divide again, yet these cells do.'
          },
          {
            question: 'After mitosis, each daughter cell has 46 chromosomes. If a cell undergoes mitosis without cytokinesis, and then undergoes a second round of mitosis WITH cytokinesis, how many chromosomes will each final daughter cell have?',
            options: [
              '23',
              '46',
              '92',
              '184'
            ],
            correctAnswer: 2,
            explanation: 'After the first mitosis without cytokinesis, the cell has 92 chromosomes (two complete sets, tetraploid). In the second round, these 92 chromosomes replicate during S phase (92 replicated chromosomes = 184 chromatids), then separate during mitosis. Each daughter cell receives 92 chromosomes.'
          }
        ]
      }
    },
    {
      id: 'cc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Comprehensive Matching
      `,
      exercise: {
        questions: [
          {
            question: 'Sister chromatids separate and move to opposite poles:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'S phase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'DNA replication occurs:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'Prophase', 'Anaphase'],
            correctAnswer: 'S phase'
          },
          {
            question: 'A peak of cyclin-Cdk activity at the end of G2 triggers entry into this phase:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase', 'G0'],
            correctAnswer: 'M phase'
          },
          {
            question: 'A checkpoint that stops cells with damaged DNA from starting to copy their DNA acts at the end of:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase', 'Cytokinesis'],
            correctAnswer: 'G1 phase'
          },
          {
            question: 'A cleavage furrow pinches an animal cell in two during:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Cytokinesis', 'S phase'],
            correctAnswer: 'Cytokinesis'
          }
        ]
      }
    },
    {
      id: 'cc7-input',
      type: 'input-boxes' as const,
      content: `
### Final Review
      `,
      exercise: {
        questions: [
          {
            question: 'A mutated gene whose overactive product drives uncontrolled cell division:',
            answer: 'oncogene',
            acceptableAnswers: ['oncogene', 'Oncogene', 'oncogenes'],
            placeholder: 'e.g. tumor suppressor'
          },
          {
            question: 'Division of the cytoplasm that follows mitosis:',
            answer: 'cytokinesis',
            acceptableAnswers: ['cytokinesis', 'Cytokinesis'],
            placeholder: 'e.g. karyokinesis'
          }
        ]
      }
    },
    {
      id: 'cc7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'Integration question: A cancer cell has two mutations: a growth-factor receptor that signals without its ligand, and a nonfunctional p53. How does EACH mutation contribute to the cancer phenotype?',
            options: [
              'Both mutations only block apoptosis, so damaged cells simply survive longer',
              'The receptor drives constant division, and p53 loss removes the damage arrest',
              'Only the receptor mutation matters; losing p53 has no effect on cell division',
              'These mutations cause cancer only when both are inherited through the germ line'
            ],
            correctAnswer: 1,
            explanation: 'Cancer usually requires several mutations affecting different controls. The receptor mutation (an oncogene) supplies constant proliferative signaling. Losing p53 (a tumor suppressor) removes the arrest and apoptosis that would normally stop a cell with damaged DNA. Together they produce a cell that divides without control and tolerates damage. Somatic mutations are enough; they need not be inherited.'
          }
        ]
      }
    }
  ]
};