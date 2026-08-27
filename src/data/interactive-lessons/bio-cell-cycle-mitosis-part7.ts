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
4. **Checkpoints** (G$_1$/S, G$_2$/M, SAC) ensure accuracy before committing to the next phase
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
              '16 — each of the 8 chromosomes has been replicated (sister chromatids), so there are 16 DNA molecules',
              '32'
            ],
            correctAnswer: 2,
            explanation: 'In G2, each chromosome has been replicated and consists of 2 sister chromatids, each containing one DNA molecule. With 8 chromosomes, there are 8 x 2 = 16 DNA molecules. Note: the chromosome count is still 8 (counted by centromeres).'
          },
          {
            question: 'HPV (Human Papillomavirus) produces the E7 protein, which binds and inactivates Rb. How does this contribute to cervical cancer?',
            options: [
              'E7 directly damages DNA',
              'E7 inactivates Rb, releasing E2F to constitutively activate S-phase genes — the cell bypasses the G1/S checkpoint and proliferates without growth factor signals',
              'E7 prevents cytokinesis',
              'E7 blocks apoptosis only'
            ],
            correctAnswer: 1,
            explanation: 'By binding and inactivating Rb, the viral E7 protein mimics the effect of Rb phosphorylation. E2F is free to activate S-phase genes regardless of growth signals or cell cycle status. Combined with E6 (which degrades p53), HPV effectively disables both major tumor suppressor pathways.'
          },
          {
            question: 'Taxol (paclitaxel) is a chemotherapy drug that stabilizes microtubules and prevents their depolymerization. How does this kill cancer cells?',
            options: [
              'It prevents DNA replication',
              'It blocks chromosome condensation',
              'It prevents sister chromatid separation — stabilized kinetochore microtubules cannot shorten during anaphase, activating the spindle assembly checkpoint and arresting cells in mitosis, eventually triggering apoptosis',
              'It prevents cytokinesis only'
            ],
            correctAnswer: 2,
            explanation: 'Taxol locks microtubules in a polymerized state. During anaphase A, kinetochore microtubules must depolymerize to pull chromatids to the poles. With stabilized microtubules, proper separation fails, the SAC is chronically activated, and prolonged mitotic arrest eventually triggers apoptosis.'
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
              'DNA — one cell gets more chromosomes',
              'Regulatory molecules (transcription factors, signaling proteins) must be asymmetrically partitioned so that the two daughter cells receive different developmental signals despite having identical genomes',
              'Mitochondria — one cell gets all the mitochondria',
              'The two cells receive different chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'Both daughter cells receive identical chromosomes through mitosis. Asymmetric division depends on the unequal distribution of cell-fate determinants (transcription factors, mRNAs, signaling molecules) during cytokinesis. The daughter that inherits "stemness" factors remains a stem cell; the other differentiates.'
          },
          {
            question: 'The unicellular organism Caulobacter crescentus divides asymmetrically into a stalked cell and a swarmer cell, despite having identical DNA. This best illustrates:',
            options: [
              'Mutation during cell division',
              'Differential gene expression — the same genome can produce different cell types by expressing different sets of genes, regulated by asymmetrically distributed transcription factors',
              'Different DNA sequences in the two cells',
              'Random variation with no regulatory basis'
            ],
            correctAnswer: 1,
            explanation: 'Both daughter cells have identical genomes, but asymmetric distribution of regulatory proteins (like CtrA in Caulobacter) during division causes different sets of genes to be expressed in each cell. This is a fundamental principle of developmental biology — identical genomes, different gene expression.'
          },
          {
            question: 'After mitosis, each daughter cell has 46 chromosomes. If a cell undergoes mitosis without cytokinesis, and then undergoes a second round of mitosis WITH cytokinesis, how many chromosomes will each final daughter cell have?',
            options: [
              '23',
              '46',
              '92 — the first division without cytokinesis doubles the chromosome number to 92 in a single cell; the second mitosis distributes these equally, giving each daughter 92 chromosomes',
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
            question: 'Sister chromatids are separated by cleavage of cohesin:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'S phase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'DNA replication occurs:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'Prophase', 'Anaphase'],
            correctAnswer: 'S phase'
          },
          {
            question: 'Cyclin B-Cdk1 (MPF) triggers entry into this phase:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase (mitosis)', 'G0'],
            correctAnswer: 'M phase (mitosis)'
          },
          {
            question: 'The Rb protein blocks E2F to prevent progression into:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase', 'Cytokinesis'],
            correctAnswer: 'S phase'
          },
          {
            question: 'The contractile ring of actin and myosin functions during:',
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
            question: 'The chemotherapy drug that stabilizes microtubules, preventing depolymerization:',
            answer: 'Taxol',
            acceptableAnswers: ['Taxol', 'taxol', 'paclitaxel', 'Paclitaxel'],
            placeholder: 'e.g. colchicine'
          },
          {
            question: 'The viral protein from HPV that inactivates Rb:',
            answer: 'E7',
            acceptableAnswers: ['E7', 'e7'],
            placeholder: 'e.g. E6'
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
            question: 'Integration question: A cancer cell has three mutations — Ras is constitutively active, p53 is non-functional, and telomerase is overexpressed. Explain how EACH mutation contributes to the cancer phenotype.',
            options: [
              'Only one mutation is needed for cancer',
              'Ras constitutively active → continuous growth signaling without growth factors; p53 non-functional → no G1/S arrest or apoptosis in response to DNA damage; telomerase overexpressed → unlimited replication capacity by maintaining telomere length (normally, somatic cells have a Hayflick limit)',
              'All three mutations have the same effect',
              'These mutations only cause cancer if inherited'
            ],
            correctAnswer: 1,
            explanation: 'Cancer typically requires multiple mutations affecting different regulatory pathways: (1) Ras (oncogene) provides constant proliferative signaling. (2) p53 (tumor suppressor) loss eliminates DNA damage checkpoints and apoptosis. (3) Telomerase (normally silent in somatic cells) allows indefinite replication by preventing telomere shortening. Together, these create an immortal, uncontrollably dividing, damage-tolerant cell.'
          }
        ]
      }
    }
  ]
};