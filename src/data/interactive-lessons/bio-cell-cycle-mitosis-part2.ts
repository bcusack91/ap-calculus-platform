export const bioCellCyclePart2Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Interphase
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through DNA replication checkpoints in S phase.
      
      ### Worked biological example
      A student team investigates DNA replication checkpoints in S phase. Their first interpretation step is to identify how **S phase** and **G2 phase** work together in the same pathway.
      
      - They classify the primary signal using **S phase**: DNA is replicated to form sister chromatids.
      - They trace the downstream response using **G2 phase**: cell prepares for mitosis and verifies replication.
      - They then compare outcomes with **prophase** and **metaphase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **S phase**
      - **G2 phase**
      - **prophase**
      - **metaphase**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Interphase, what best describes S phase?',
            options: [
              'chromosomes condense and spindle begins forming',
              'cell prepares for mitosis and verifies replication',
              'chromosomes align at the metaphase plate',
              'DNA is replicated to form sister chromatids'
            ],
            correctAnswer: 3,
            explanation: 'S phase is best matched with: DNA is replicated to form sister chromatids.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of G2 phase?',
            options: [
              'DNA is replicated to form sister chromatids',
              'cell prepares for mitosis and verifies replication',
              'chromosomes condense and spindle begins forming',
              'sister chromatids separate toward opposite poles'
            ],
            correctAnswer: 1,
            explanation: 'G2 phase is best matched with: cell prepares for mitosis and verifies replication.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Interphase
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → S phase
      - **Immediate processing** → G2 phase
      - **System-level consequence** → prophase
      - **Measured readout** → metaphase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | S phase | DNA is replicated to form sister chromatids | Early shift in the primary variable |
      | G2 phase | cell prepares for mitosis and verifies replication | Mid-pathway change in process rate |
      | prophase | chromosomes condense and spindle begins forming | Downstream phenotype trend |
      | metaphase | chromosomes align at the metaphase plate | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **DNA is replicated to form sister chromatids**
      2) Term for this definition: **cell prepares for mitosis and verifies replication**
      3) Term for this definition: **chromosomes condense and spindle begins forming**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['S phase', 'G2 phase', 'prophase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'DNA is replicated to form sister chromatids\'.',
        hint2: 'Second blank points to G2 phase; think about the role \'cell prepares for mitosis and verifies replication\'.',
        hint3: 'Third blank is prophase; connect it to \'chromosomes condense and spindle begins forming\'.',
        explanation: 'Correct set: S phase, G2 phase, prophase. These three terms define the core mechanism chain for Interphase.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'S phase',
            options: ['chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate', 'cell prepares for mitosis and verifies replication', 'DNA is replicated to form sister chromatids']
          },
          {
            label: 'G2 phase',
            options: ['sister chromatids separate toward opposite poles', 'cell prepares for mitosis and verifies replication', 'chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate']
          },
          {
            label: 'prophase',
            options: ['sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells', 'chromosomes align at the metaphase plate', 'chromosomes condense and spindle begins forming']
          }
        ],
        correctAnswers: ['DNA is replicated to form sister chromatids', 'cell prepares for mitosis and verifies replication', 'chromosomes condense and spindle begins forming'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'S phase, G2 phase, and prophase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because S phase DNA is replicated to form sister chromatids, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Mitosis and cytokinesis are related but distinct events.
      - Chromosome number remains stable through mitosis under normal conditions.
      - Checkpoint failure can lead to genomic instability long before visible tumors form.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In DNA replication checkpoints in S phase, the observed pattern is: chromosomes align at the metaphase plate. What term should anchor the explanation?',
            options: [
              'S phase',
              'G2 phase',
              'prophase',
              'metaphase'
            ],
            correctAnswer: 3,
            explanation: 'Use metaphase because it directly maps to the described biological pattern: chromosomes align at the metaphase plate.'
          },
          {
            question: 'In an AP-style free-response about interphase, the observed pattern is: sister chromatids separate toward opposite poles. What term should anchor the explanation?',
            options: [
              'anaphase',
              'cytokinesis',
              'prophase',
              'metaphase'
            ],
            correctAnswer: 0,
            explanation: 'Use anaphase because it directly maps to the described biological pattern: sister chromatids separate toward opposite poles.'
          }
        ]
      }
    }
  ]
};
