export const bioCellCyclePart1Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Cell Cycle Phases
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through epithelial tissue renewal in the small intestine.
      
      ### Worked biological example
      A student team investigates epithelial tissue renewal in the small intestine. Their first interpretation step is to identify how **G1 phase** and **S phase** work together in the same pathway.
      
      - They classify the primary signal using **G1 phase**: cell growth and biosynthesis before DNA replication.
      - They trace the downstream response using **S phase**: DNA is replicated to form sister chromatids.
      - They then compare outcomes with **G2 phase** and **prophase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **G1 phase**
      - **S phase**
      - **G2 phase**
      - **prophase**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Cell Cycle Phases, what best describes G1 phase?',
            options: [
              'chromosomes condense and spindle begins forming',
              'cell prepares for mitosis and verifies replication',
              'DNA is replicated to form sister chromatids',
              'cell growth and biosynthesis before DNA replication'
            ],
            correctAnswer: 3,
            explanation: 'G1 phase is best matched with: cell growth and biosynthesis before DNA replication.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of S phase?',
            options: [
              'chromosomes align at the metaphase plate',
              'DNA is replicated to form sister chromatids',
              'cell growth and biosynthesis before DNA replication',
              'cell prepares for mitosis and verifies replication'
            ],
            correctAnswer: 1,
            explanation: 'S phase is best matched with: DNA is replicated to form sister chromatids.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Cell Cycle Phases
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → G1 phase
      - **Immediate processing** → S phase
      - **System-level consequence** → G2 phase
      - **Measured readout** → prophase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | G1 phase | cell growth and biosynthesis before DNA replication | Early shift in the primary variable |
      | S phase | DNA is replicated to form sister chromatids | Mid-pathway change in process rate |
      | G2 phase | cell prepares for mitosis and verifies replication | Downstream phenotype trend |
      | prophase | chromosomes condense and spindle begins forming | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **cell growth and biosynthesis before DNA replication**
      2) Term for this definition: **DNA is replicated to form sister chromatids**
      3) Term for this definition: **cell prepares for mitosis and verifies replication**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['G1 phase', 'S phase', 'G2 phase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'cell growth and biosynthesis before DNA replication\'.',
        hint2: 'Second blank points to S phase; think about the role \'DNA is replicated to form sister chromatids\'.',
        hint3: 'Third blank is G2 phase; connect it to \'cell prepares for mitosis and verifies replication\'.',
        explanation: 'Correct set: G1 phase, S phase, G2 phase. These three terms define the core mechanism chain for Cell Cycle Phases.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'G1 phase',
            options: ['DNA is replicated to form sister chromatids', 'chromosomes condense and spindle begins forming', 'cell growth and biosynthesis before DNA replication', 'cell prepares for mitosis and verifies replication']
          },
          {
            label: 'S phase',
            options: ['chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate', 'cell prepares for mitosis and verifies replication', 'DNA is replicated to form sister chromatids']
          },
          {
            label: 'G2 phase',
            options: ['sister chromatids separate toward opposite poles', 'cell prepares for mitosis and verifies replication', 'chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate']
          }
        ],
        correctAnswers: ['cell growth and biosynthesis before DNA replication', 'DNA is replicated to form sister chromatids', 'cell prepares for mitosis and verifies replication'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'G1 phase, S phase, and G2 phase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because G1 phase cell growth and biosynthesis before DNA replication, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Interphase is an active preparation period, not a resting pause.
      - Mitosis and cytokinesis are related but distinct events.
      - Chromosome number remains stable through mitosis under normal conditions.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In epithelial tissue renewal in the small intestine, the observed pattern is: chromosomes condense and spindle begins forming. What term should anchor the explanation?',
            options: [
              'S phase',
              'prophase',
              'G1 phase',
              'G2 phase'
            ],
            correctAnswer: 1,
            explanation: 'Use prophase because it directly maps to the described biological pattern: chromosomes condense and spindle begins forming.'
          },
          {
            question: 'In an AP-style free-response about cell cycle phases, the observed pattern is: chromosomes align at the metaphase plate. What term should anchor the explanation?',
            options: [
              'metaphase',
              'prophase',
              'G2 phase',
              'anaphase'
            ],
            correctAnswer: 0,
            explanation: 'Use metaphase because it directly maps to the described biological pattern: chromosomes align at the metaphase plate.'
          }
        ]
      }
    }
  ]
};
