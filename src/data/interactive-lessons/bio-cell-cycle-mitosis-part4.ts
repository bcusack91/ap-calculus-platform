export const bioCellCyclePart4Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Cytokinesis
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through cytoplasmic division in animal versus plant cells.
      
      ### Worked biological example
      A student team investigates cytoplasmic division in animal versus plant cells. Their first interpretation step is to identify how **prophase** and **metaphase** work together in the same pathway.
      
      - They classify the primary signal using **prophase**: chromosomes condense and spindle begins forming.
      - They trace the downstream response using **metaphase**: chromosomes align at the metaphase plate.
      - They then compare outcomes with **anaphase** and **cytokinesis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **prophase**
      - **metaphase**
      - **anaphase**
      - **cytokinesis**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Cytokinesis, what best describes prophase?',
            options: [
              'division of cytoplasm to produce two daughter cells',
              'sister chromatids separate toward opposite poles',
              'chromosomes align at the metaphase plate',
              'chromosomes condense and spindle begins forming'
            ],
            correctAnswer: 3,
            explanation: 'prophase is best matched with: chromosomes condense and spindle begins forming.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of metaphase?',
            options: [
              'chromosomes condense and spindle begins forming',
              'chromosomes align at the metaphase plate',
              'sister chromatids separate toward opposite poles',
              'control step that validates readiness before progression'
            ],
            correctAnswer: 1,
            explanation: 'metaphase is best matched with: chromosomes align at the metaphase plate.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Cytokinesis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → prophase
      - **Immediate processing** → metaphase
      - **System-level consequence** → anaphase
      - **Measured readout** → cytokinesis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | prophase | chromosomes condense and spindle begins forming | Early shift in the primary variable |
      | metaphase | chromosomes align at the metaphase plate | Mid-pathway change in process rate |
      | anaphase | sister chromatids separate toward opposite poles | Downstream phenotype trend |
      | cytokinesis | division of cytoplasm to produce two daughter cells | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **chromosomes condense and spindle begins forming**
      2) Term for this definition: **chromosomes align at the metaphase plate**
      3) Term for this definition: **sister chromatids separate toward opposite poles**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['prophase', 'metaphase', 'anaphase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'chromosomes condense and spindle begins forming\'.',
        hint2: 'Second blank points to metaphase; think about the role \'chromosomes align at the metaphase plate\'.',
        hint3: 'Third blank is anaphase; connect it to \'sister chromatids separate toward opposite poles\'.',
        explanation: 'Correct set: prophase, metaphase, anaphase. These three terms define the core mechanism chain for Cytokinesis.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'prophase',
            options: ['sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells', 'chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate']
          },
          {
            label: 'metaphase',
            options: ['sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells', 'control step that validates readiness before progression', 'chromosomes align at the metaphase plate']
          },
          {
            label: 'anaphase',
            options: ['control step that validates readiness before progression', 'regulatory complex that drives cell-cycle transitions', 'sister chromatids separate toward opposite poles', 'division of cytoplasm to produce two daughter cells']
          }
        ],
        correctAnswers: ['chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate', 'sister chromatids separate toward opposite poles'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'prophase, metaphase, and anaphase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because prophase chromosomes condense and spindle begins forming, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Checkpoint failure can lead to genomic instability long before visible tumors form.
      - Interphase is an active preparation period, not a resting pause.
      - Mitosis and cytokinesis are related but distinct events.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In cytoplasmic division in animal versus plant cells, the observed pattern is: division of cytoplasm to produce two daughter cells. What term should anchor the explanation?',
            options: [
              'cytokinesis',
              'prophase',
              'anaphase',
              'metaphase'
            ],
            correctAnswer: 0,
            explanation: 'Use cytokinesis because it directly maps to the described biological pattern: division of cytoplasm to produce two daughter cells.'
          },
          {
            question: 'In an AP-style free-response about cytokinesis, the observed pattern is: control step that validates readiness before progression. What term should anchor the explanation?',
            options: [
              'anaphase',
              'cytokinesis',
              'cyclin-CDK',
              'checkpoint'
            ],
            correctAnswer: 3,
            explanation: 'Use checkpoint because it directly maps to the described biological pattern: control step that validates readiness before progression.'
          }
        ]
      }
    }
  ]
};
