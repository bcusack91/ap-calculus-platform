export const bioCellStructurePart1Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Cell Theory
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through microscope identification of unknown cells.
      
      ### Worked biological example
      A student team investigates microscope identification of unknown cells. Their first interpretation step is to identify how **plasma membrane** and **nucleus** work together in the same pathway.
      
      - They classify the primary signal using **plasma membrane**: selective barrier controlling exchange with the environment.
      - They trace the downstream response using **nucleus**: stores DNA and regulates gene expression.
      - They then compare outcomes with **ribosome** and **rough ER** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **plasma membrane**
      - **nucleus**
      - **ribosome**
      - **rough ER**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Cell Theory, what best describes plasma membrane?',
            options: [
              'translates mRNA into polypeptide chains',
              'synthesizes and folds proteins for export or membranes',
              'selective barrier controlling exchange with the environment',
              'stores DNA and regulates gene expression'
            ],
            correctAnswer: 2,
            explanation: 'plasma membrane is best matched with: selective barrier controlling exchange with the environment.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of nucleus?',
            options: [
              'stores DNA and regulates gene expression',
              'translates mRNA into polypeptide chains',
              'selective barrier controlling exchange with the environment',
              'synthesizes lipids and supports detoxification'
            ],
            correctAnswer: 0,
            explanation: 'nucleus is best matched with: stores DNA and regulates gene expression.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Cell Theory
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → plasma membrane
      - **Immediate processing** → nucleus
      - **System-level consequence** → ribosome
      - **Measured readout** → rough ER
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | plasma membrane | selective barrier controlling exchange with the environment | Early shift in the primary variable |
      | nucleus | stores DNA and regulates gene expression | Mid-pathway change in process rate |
      | ribosome | translates mRNA into polypeptide chains | Downstream phenotype trend |
      | rough ER | synthesizes and folds proteins for export or membranes | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **selective barrier controlling exchange with the environment**
      2) Term for this definition: **stores DNA and regulates gene expression**
      3) Term for this definition: **translates mRNA into polypeptide chains**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['plasma membrane', 'nucleus', 'ribosome'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'selective barrier controlling exchange with the environment\'.',
        hint2: 'Second blank points to nucleus; think about the role \'stores DNA and regulates gene expression\'.',
        hint3: 'Third blank is ribosome; connect it to \'translates mRNA into polypeptide chains\'.',
        explanation: 'Correct set: plasma membrane, nucleus, ribosome. These three terms define the core mechanism chain for Cell Theory.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'plasma membrane',
            options: ['selective barrier controlling exchange with the environment', 'synthesizes and folds proteins for export or membranes', 'translates mRNA into polypeptide chains', 'stores DNA and regulates gene expression']
          },
          {
            label: 'nucleus',
            options: ['translates mRNA into polypeptide chains', 'synthesizes lipids and supports detoxification', 'synthesizes and folds proteins for export or membranes', 'stores DNA and regulates gene expression']
          },
          {
            label: 'ribosome',
            options: ['synthesizes lipids and supports detoxification', 'modifies and sorts cargo from the ER', 'synthesizes and folds proteins for export or membranes', 'translates mRNA into polypeptide chains']
          }
        ],
        correctAnswers: ['selective barrier controlling exchange with the environment', 'stores DNA and regulates gene expression', 'translates mRNA into polypeptide chains'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'plasma membrane, nucleus, and ribosome should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because plasma membrane selective barrier controlling exchange with the environment, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - All cells share core features, but not all cells contain every organelle type.
      - Ribosomes are not membrane-bound, yet they are essential organelles.
      - Mitochondria are not only in animal cells; many eukaryotes have them.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In microscope identification of unknown cells, the observed pattern is: synthesizes and folds proteins for export or membranes. What term should anchor the explanation?',
            options: [
              'nucleus',
              'rough ER',
              'plasma membrane',
              'ribosome'
            ],
            correctAnswer: 1,
            explanation: 'Use rough ER because it directly maps to the described biological pattern: synthesizes and folds proteins for export or membranes.'
          },
          {
            question: 'In an AP-style free-response about cell theory, the observed pattern is: synthesizes lipids and supports detoxification. What term should anchor the explanation?',
            options: [
              'ribosome',
              'rough ER',
              'Golgi',
              'smooth ER'
            ],
            correctAnswer: 3,
            explanation: 'Use smooth ER because it directly maps to the described biological pattern: synthesizes lipids and supports detoxification.'
          }
        ]
      }
    }
  ]
};
