export const bioCellStructurePart5Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Energy Organelles
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through ATP production in high-demand muscle cells.
      
      ### Worked biological example
      A student team investigates ATP production in high-demand muscle cells. Their first interpretation step is to identify how **smooth ER** and **Golgi** work together in the same pathway.
      
      - They classify the primary signal using **smooth ER**: synthesizes lipids and supports detoxification.
      - They trace the downstream response using **Golgi**: modifies and sorts cargo from the ER.
      - They then compare outcomes with **mitochondrion** and **chloroplast** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **smooth ER**
      - **Golgi**
      - **mitochondrion**
      - **chloroplast**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Energy Organelles, what best describes smooth ER?',
            options: [
              'site of photosynthesis in plants and algae',
              'modifies and sorts cargo from the ER',
              'synthesizes lipids and supports detoxification',
              'site of aerobic ATP production'
            ],
            correctAnswer: 2,
            explanation: 'smooth ER is best matched with: synthesizes lipids and supports detoxification.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Golgi?',
            options: [
              'protein network for structure, transport, and movement',
              'modifies and sorts cargo from the ER',
              'site of aerobic ATP production',
              'synthesizes lipids and supports detoxification'
            ],
            correctAnswer: 1,
            explanation: 'Golgi is best matched with: modifies and sorts cargo from the ER.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Energy Organelles
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → smooth ER
      - **Immediate processing** → Golgi
      - **System-level consequence** → mitochondrion
      - **Measured readout** → chloroplast
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | smooth ER | synthesizes lipids and supports detoxification | Early shift in the primary variable |
      | Golgi | modifies and sorts cargo from the ER | Mid-pathway change in process rate |
      | mitochondrion | site of aerobic ATP production | Downstream phenotype trend |
      | chloroplast | site of photosynthesis in plants and algae | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **synthesizes lipids and supports detoxification**
      2) Term for this definition: **modifies and sorts cargo from the ER**
      3) Term for this definition: **site of aerobic ATP production**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['smooth ER', 'Golgi', 'mitochondrion'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'synthesizes lipids and supports detoxification\'.',
        hint2: 'Second blank points to Golgi; think about the role \'modifies and sorts cargo from the ER\'.',
        hint3: 'Third blank is mitochondrion; connect it to \'site of aerobic ATP production\'.',
        explanation: 'Correct set: smooth ER, Golgi, mitochondrion. These three terms define the core mechanism chain for Energy Organelles.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'smooth ER',
            options: ['synthesizes lipids and supports detoxification', 'site of aerobic ATP production', 'modifies and sorts cargo from the ER', 'site of photosynthesis in plants and algae']
          },
          {
            label: 'Golgi',
            options: ['site of photosynthesis in plants and algae', 'modifies and sorts cargo from the ER', 'protein network for structure, transport, and movement', 'site of aerobic ATP production']
          },
          {
            label: 'mitochondrion',
            options: ['site of photosynthesis in plants and algae', 'selective barrier controlling exchange with the environment', 'protein network for structure, transport, and movement', 'site of aerobic ATP production']
          }
        ],
        correctAnswers: ['synthesizes lipids and supports detoxification', 'modifies and sorts cargo from the ER', 'site of aerobic ATP production'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'smooth ER, Golgi, and mitochondrion should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because smooth ER synthesizes lipids and supports detoxification, we expect ...".
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
      id: 'bio-cell-structure-organelles-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In ATP production in high-demand muscle cells, the observed pattern is: site of photosynthesis in plants and algae. What term should anchor the explanation?',
            options: [
              'chloroplast',
              'mitochondrion',
              'Golgi',
              'smooth ER'
            ],
            correctAnswer: 0,
            explanation: 'Use chloroplast because it directly maps to the described biological pattern: site of photosynthesis in plants and algae.'
          },
          {
            question: 'In an AP-style free-response about energy organelles, the observed pattern is: protein network for structure, transport, and movement. What term should anchor the explanation?',
            options: [
              'cytoskeleton',
              'chloroplast',
              'mitochondrion',
              'plasma membrane'
            ],
            correctAnswer: 0,
            explanation: 'Use cytoskeleton because it directly maps to the described biological pattern: protein network for structure, transport, and movement.'
          }
        ]
      }
    }
  ]
};
