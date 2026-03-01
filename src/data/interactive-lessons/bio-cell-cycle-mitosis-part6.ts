export const bioCellCyclePart6Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through microscopy-based phase identification.
      
      ### Worked biological example
      A student team investigates microscopy-based phase identification. Their first interpretation step is to identify how **anaphase** and **cytokinesis** work together in the same pathway.
      
      - They classify the primary signal using **anaphase**: sister chromatids separate toward opposite poles.
      - They trace the downstream response using **cytokinesis**: division of cytoplasm to produce two daughter cells.
      - They then compare outcomes with **checkpoint** and **cyclin-CDK** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **anaphase**
      - **cytokinesis**
      - **checkpoint**
      - **cyclin-CDK**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes anaphase?',
            options: [
              'division of cytoplasm to produce two daughter cells',
              'sister chromatids separate toward opposite poles',
              'regulatory complex that drives cell-cycle transitions',
              'control step that validates readiness before progression'
            ],
            correctAnswer: 1,
            explanation: 'anaphase is best matched with: sister chromatids separate toward opposite poles.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of cytokinesis?',
            options: [
              'sister chromatids separate toward opposite poles',
              'control step that validates readiness before progression',
              'cell growth and biosynthesis before DNA replication',
              'division of cytoplasm to produce two daughter cells'
            ],
            correctAnswer: 3,
            explanation: 'cytokinesis is best matched with: division of cytoplasm to produce two daughter cells.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → anaphase
      - **Immediate processing** → cytokinesis
      - **System-level consequence** → checkpoint
      - **Measured readout** → cyclin-CDK
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | anaphase | sister chromatids separate toward opposite poles | Early shift in the primary variable |
      | cytokinesis | division of cytoplasm to produce two daughter cells | Mid-pathway change in process rate |
      | checkpoint | control step that validates readiness before progression | Downstream phenotype trend |
      | cyclin-CDK | regulatory complex that drives cell-cycle transitions | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **sister chromatids separate toward opposite poles**
      2) Term for this definition: **division of cytoplasm to produce two daughter cells**
      3) Term for this definition: **control step that validates readiness before progression**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['anaphase', 'cytokinesis', 'checkpoint'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'sister chromatids separate toward opposite poles\'.',
        hint2: 'Second blank points to cytokinesis; think about the role \'division of cytoplasm to produce two daughter cells\'.',
        hint3: 'Third blank is checkpoint; connect it to \'control step that validates readiness before progression\'.',
        explanation: 'Correct set: anaphase, cytokinesis, checkpoint. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'anaphase',
            options: ['division of cytoplasm to produce two daughter cells', 'sister chromatids separate toward opposite poles', 'regulatory complex that drives cell-cycle transitions', 'control step that validates readiness before progression']
          },
          {
            label: 'cytokinesis',
            options: ['cell growth and biosynthesis before DNA replication', 'regulatory complex that drives cell-cycle transitions', 'division of cytoplasm to produce two daughter cells', 'control step that validates readiness before progression']
          },
          {
            label: 'checkpoint',
            options: ['cell growth and biosynthesis before DNA replication', 'regulatory complex that drives cell-cycle transitions', 'DNA is replicated to form sister chromatids', 'control step that validates readiness before progression']
          }
        ],
        correctAnswers: ['sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells', 'control step that validates readiness before progression'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'anaphase, cytokinesis, and checkpoint should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because anaphase sister chromatids separate toward opposite poles, we expect ...".
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
      id: 'bio-cell-cycle-mitosis-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In microscopy-based phase identification, the observed pattern is: regulatory complex that drives cell-cycle transitions. What term should anchor the explanation?',
            options: [
              'cytokinesis',
              'cyclin-CDK',
              'anaphase',
              'checkpoint'
            ],
            correctAnswer: 1,
            explanation: 'Use cyclin-CDK because it directly maps to the described biological pattern: regulatory complex that drives cell-cycle transitions.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: cell growth and biosynthesis before DNA replication. What term should anchor the explanation?',
            options: [
              'G1 phase',
              'checkpoint',
              'cyclin-CDK',
              'S phase'
            ],
            correctAnswer: 0,
            explanation: 'Use G1 phase because it directly maps to the described biological pattern: cell growth and biosynthesis before DNA replication.'
          }
        ]
      }
    }
  ]
};
