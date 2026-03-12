export const bioCellCyclePart7Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through exam scenarios integrating cell-cycle control.
      
      ### Worked biological example
      A student team investigates exam scenarios integrating cell-cycle control. Their first interpretation step is to identify how **cytokinesis** and **checkpoint** work together in the same pathway.
      
      - They classify the primary signal using **cytokinesis**: division of cytoplasm to produce two daughter cells.
      - They trace the downstream response using **checkpoint**: control step that validates readiness before progression.
      - They then compare outcomes with **cyclin-CDK** and **G1 phase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **cytokinesis**
      - **checkpoint**
      - **cyclin-CDK**
      - **G1 phase**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes cytokinesis?',
            options: [
              'division of cytoplasm to produce two daughter cells',
              'control step that validates readiness before progression',
              'cell growth and biosynthesis before DNA replication',
              'regulatory complex that drives cell-cycle transitions'
            ],
            correctAnswer: 0,
            explanation: 'cytokinesis is best matched with: division of cytoplasm to produce two daughter cells.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of checkpoint?',
            options: [
              'regulatory complex that drives cell-cycle transitions',
              'division of cytoplasm to produce two daughter cells',
              'control step that validates readiness before progression',
              'DNA is replicated to form sister chromatids'
            ],
            correctAnswer: 2,
            explanation: 'checkpoint is best matched with: control step that validates readiness before progression.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → cytokinesis
      - **Immediate processing** → checkpoint
      - **System-level consequence** → cyclin-CDK
      - **Measured readout** → G1 phase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | cytokinesis | division of cytoplasm to produce two daughter cells | Early shift in the primary variable |
      | checkpoint | control step that validates readiness before progression | Mid-pathway change in process rate |
      | cyclin-CDK | regulatory complex that drives cell-cycle transitions | Downstream phenotype trend |
      | G1 phase | cell growth and biosynthesis before DNA replication | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **division of cytoplasm to produce two daughter cells**
      2) Term for this definition: **control step that validates readiness before progression**
      3) Term for this definition: **regulatory complex that drives cell-cycle transitions**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cytokinesis', 'checkpoint', 'cyclin-CDK'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'division of cytoplasm to produce two daughter cells\'.',
        hint2: 'Second blank points to checkpoint; think about the role \'control step that validates readiness before progression\'.',
        hint3: 'Third blank is cyclin-CDK; connect it to \'regulatory complex that drives cell-cycle transitions\'.',
        explanation: 'Correct set: cytokinesis, checkpoint, cyclin-CDK. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'cytokinesis',
            options: ['division of cytoplasm to produce two daughter cells', 'regulatory complex that drives cell-cycle transitions', 'control step that validates readiness before progression', 'cell growth and biosynthesis before DNA replication']
          },
          {
            label: 'checkpoint',
            options: ['cell growth and biosynthesis before DNA replication', 'regulatory complex that drives cell-cycle transitions', 'DNA is replicated to form sister chromatids', 'control step that validates readiness before progression']
          },
          {
            label: 'cyclin-CDK',
            options: ['DNA is replicated to form sister chromatids', 'cell growth and biosynthesis before DNA replication', 'regulatory complex that drives cell-cycle transitions', 'cell prepares for mitosis and verifies replication']
          }
        ],
        correctAnswers: ['division of cytoplasm to produce two daughter cells', 'control step that validates readiness before progression', 'regulatory complex that drives cell-cycle transitions'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'cytokinesis, checkpoint, and cyclin-CDK should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because cytokinesis division of cytoplasm to produce two daughter cells, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Chromosome number remains stable through mitosis under normal conditions.
      - Checkpoint failure can lead to genomic instability long before visible tumors form.
      - Interphase is an active preparation period, not a resting pause.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In exam scenarios integrating cell-cycle control, the observed pattern is: cell growth and biosynthesis before DNA replication. What term should anchor the explanation?',
            options: [
              'cytokinesis',
              'checkpoint',
              'cyclin-CDK',
              'G1 phase'
            ],
            correctAnswer: 3,
            explanation: 'Use G1 phase because it directly maps to the described biological pattern: cell growth and biosynthesis before DNA replication.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: DNA is replicated to form sister chromatids. What term should anchor the explanation?',
            options: [
              'S phase',
              'G2 phase',
              'cyclin-CDK',
              'G1 phase'
            ],
            correctAnswer: 0,
            explanation: 'Use S phase because it directly maps to the described biological pattern: DNA is replicated to form sister chromatids.'
          }
        ]
      }
    }
  ]
};
