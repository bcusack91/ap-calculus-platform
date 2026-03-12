export const bioCellCyclePart3Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'bio-cell-cycle-mitosis-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Cycle and Mitosis: Mitosis
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through chromosome movement during anaphase.
      
      ### Worked biological example
      A student team investigates chromosome movement during anaphase. Their first interpretation step is to identify how **G2 phase** and **prophase** work together in the same pathway.
      
      - They classify the primary signal using **G2 phase**: cell prepares for mitosis and verifies replication.
      - They trace the downstream response using **prophase**: chromosomes condense and spindle begins forming.
      - They then compare outcomes with **metaphase** and **anaphase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **G2 phase**
      - **prophase**
      - **metaphase**
      - **anaphase**
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Mitosis, what best describes G2 phase?',
            options: [
              'chromosomes align at the metaphase plate',
              'chromosomes condense and spindle begins forming',
              'cell prepares for mitosis and verifies replication',
              'sister chromatids separate toward opposite poles'
            ],
            correctAnswer: 2,
            explanation: 'G2 phase is best matched with: cell prepares for mitosis and verifies replication.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of prophase?',
            options: [
              'chromosomes align at the metaphase plate',
              'chromosomes condense and spindle begins forming',
              'cell prepares for mitosis and verifies replication',
              'division of cytoplasm to produce two daughter cells'
            ],
            correctAnswer: 1,
            explanation: 'prophase is best matched with: chromosomes condense and spindle begins forming.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Mitosis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → G2 phase
      - **Immediate processing** → prophase
      - **System-level consequence** → metaphase
      - **Measured readout** → anaphase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | G2 phase | cell prepares for mitosis and verifies replication | Early shift in the primary variable |
      | prophase | chromosomes condense and spindle begins forming | Mid-pathway change in process rate |
      | metaphase | chromosomes align at the metaphase plate | Downstream phenotype trend |
      | anaphase | sister chromatids separate toward opposite poles | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-cycle-mitosis-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **cell prepares for mitosis and verifies replication**
      2) Term for this definition: **chromosomes condense and spindle begins forming**
      3) Term for this definition: **chromosomes align at the metaphase plate**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['G2 phase', 'prophase', 'metaphase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'cell prepares for mitosis and verifies replication\'.',
        hint2: 'Second blank points to prophase; think about the role \'chromosomes condense and spindle begins forming\'.',
        hint3: 'Third blank is metaphase; connect it to \'chromosomes align at the metaphase plate\'.',
        explanation: 'Correct set: G2 phase, prophase, metaphase. These three terms define the core mechanism chain for Mitosis.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'G2 phase',
            options: ['cell prepares for mitosis and verifies replication', 'sister chromatids separate toward opposite poles', 'chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate']
          },
          {
            label: 'prophase',
            options: ['division of cytoplasm to produce two daughter cells', 'chromosomes condense and spindle begins forming', 'sister chromatids separate toward opposite poles', 'chromosomes align at the metaphase plate']
          },
          {
            label: 'metaphase',
            options: ['chromosomes align at the metaphase plate', 'division of cytoplasm to produce two daughter cells', 'sister chromatids separate toward opposite poles', 'control step that validates readiness before progression']
          }
        ],
        correctAnswers: ['cell prepares for mitosis and verifies replication', 'chromosomes condense and spindle begins forming', 'chromosomes align at the metaphase plate'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'G2 phase, prophase, and metaphase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-cycle-mitosis-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because G2 phase cell prepares for mitosis and verifies replication, we expect ...".
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
      id: 'bio-cell-cycle-mitosis-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In chromosome movement during anaphase, the observed pattern is: sister chromatids separate toward opposite poles. What term should anchor the explanation?',
            options: [
              'metaphase',
              'anaphase',
              'G2 phase',
              'prophase'
            ],
            correctAnswer: 1,
            explanation: 'Use anaphase because it directly maps to the described biological pattern: sister chromatids separate toward opposite poles.'
          },
          {
            question: 'In an AP-style free-response about mitosis, the observed pattern is: division of cytoplasm to produce two daughter cells. What term should anchor the explanation?',
            options: [
              'cytokinesis',
              'checkpoint',
              'metaphase',
              'anaphase'
            ],
            correctAnswer: 0,
            explanation: 'Use cytokinesis because it directly maps to the described biological pattern: division of cytoplasm to produce two daughter cells.'
          }
        ]
      }
    }
  ]
};
