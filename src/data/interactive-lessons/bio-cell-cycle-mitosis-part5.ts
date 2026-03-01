export const bioCellCyclePart5Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Cell Cycle Regulation
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through tumor-suppressor failure in a cell lineage.
      
      ### Worked biological example
      A student team investigates tumor-suppressor failure in a cell lineage. Their first interpretation step is to identify how **metaphase** and **anaphase** work together in the same pathway.
      
      - They classify the primary signal using **metaphase**: chromosomes align at the metaphase plate.
      - They trace the downstream response using **anaphase**: sister chromatids separate toward opposite poles.
      - They then compare outcomes with **cytokinesis** and **checkpoint** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **metaphase**
      - **anaphase**
      - **cytokinesis**
      - **checkpoint**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Cell Cycle Regulation, what best describes metaphase?',
            options: [
              'chromosomes align at the metaphase plate',
              'control step that validates readiness before progression',
              'division of cytoplasm to produce two daughter cells',
              'sister chromatids separate toward opposite poles'
            ],
            correctAnswer: 0,
            explanation: 'metaphase is best matched with: chromosomes align at the metaphase plate.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of anaphase?',
            options: [
              'sister chromatids separate toward opposite poles',
              'division of cytoplasm to produce two daughter cells',
              'regulatory complex that drives cell-cycle transitions',
              'chromosomes align at the metaphase plate'
            ],
            correctAnswer: 0,
            explanation: 'anaphase is best matched with: sister chromatids separate toward opposite poles.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Cell Cycle Regulation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → metaphase
      - **Immediate processing** → anaphase
      - **System-level consequence** → cytokinesis
      - **Measured readout** → checkpoint
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | metaphase | chromosomes align at the metaphase plate | Early shift in the primary variable |
      | anaphase | sister chromatids separate toward opposite poles | Mid-pathway change in process rate |
      | cytokinesis | division of cytoplasm to produce two daughter cells | Downstream phenotype trend |
      | checkpoint | control step that validates readiness before progression | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **chromosomes align at the metaphase plate**
      2) Term for this definition: **sister chromatids separate toward opposite poles**
      3) Term for this definition: **division of cytoplasm to produce two daughter cells**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['metaphase', 'anaphase', 'cytokinesis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'chromosomes align at the metaphase plate\'.',
        hint2: 'Second blank points to anaphase; think about the role \'sister chromatids separate toward opposite poles\'.',
        hint3: 'Third blank is cytokinesis; connect it to \'division of cytoplasm to produce two daughter cells\'.',
        explanation: 'Correct set: metaphase, anaphase, cytokinesis. These three terms define the core mechanism chain for Cell Cycle Regulation.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'metaphase',
            options: ['chromosomes align at the metaphase plate', 'sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells', 'control step that validates readiness before progression']
          },
          {
            label: 'anaphase',
            options: ['regulatory complex that drives cell-cycle transitions', 'division of cytoplasm to produce two daughter cells', 'sister chromatids separate toward opposite poles', 'control step that validates readiness before progression']
          },
          {
            label: 'cytokinesis',
            options: ['control step that validates readiness before progression', 'division of cytoplasm to produce two daughter cells', 'regulatory complex that drives cell-cycle transitions', 'cell growth and biosynthesis before DNA replication']
          }
        ],
        correctAnswers: ['chromosomes align at the metaphase plate', 'sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'metaphase, anaphase, and cytokinesis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because metaphase chromosomes align at the metaphase plate, we expect ...".
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
      id: 'bio-cell-cycle-mitosis-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In tumor-suppressor failure in a cell lineage, the observed pattern is: control step that validates readiness before progression. What term should anchor the explanation?',
            options: [
              'metaphase',
              'checkpoint',
              'cytokinesis',
              'anaphase'
            ],
            correctAnswer: 1,
            explanation: 'Use checkpoint because it directly maps to the described biological pattern: control step that validates readiness before progression.'
          },
          {
            question: 'In an AP-style free-response about cell cycle regulation, the observed pattern is: regulatory complex that drives cell-cycle transitions. What term should anchor the explanation?',
            options: [
              'checkpoint',
              'cytokinesis',
              'cyclin-CDK',
              'G1 phase'
            ],
            correctAnswer: 2,
            explanation: 'Use cyclin-CDK because it directly maps to the described biological pattern: regulatory complex that drives cell-cycle transitions.'
          }
        ]
      }
    }
  ]
};
