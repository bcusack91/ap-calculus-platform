export const bioCellStructurePart4Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Endomembrane System
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through protein trafficking from rough ER to membrane.
      
      ### Worked biological example
      A student team investigates protein trafficking from rough ER to membrane. Their first interpretation step is to identify how **rough ER** and **smooth ER** work together in the same pathway.
      
      - They classify the primary signal using **rough ER**: synthesizes and folds proteins for export or membranes.
      - They trace the downstream response using **smooth ER**: synthesizes lipids and supports detoxification.
      - They then compare outcomes with **Golgi** and **mitochondrion** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **rough ER**
      - **smooth ER**
      - **Golgi**
      - **mitochondrion**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Endomembrane System, what best describes rough ER?',
            options: [
              'synthesizes lipids and supports detoxification',
              'synthesizes and folds proteins for export or membranes',
              'site of aerobic ATP production',
              'modifies and sorts cargo from the ER'
            ],
            correctAnswer: 1,
            explanation: 'rough ER is best matched with: synthesizes and folds proteins for export or membranes.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of smooth ER?',
            options: [
              'synthesizes and folds proteins for export or membranes',
              'site of photosynthesis in plants and algae',
              'modifies and sorts cargo from the ER',
              'synthesizes lipids and supports detoxification'
            ],
            correctAnswer: 3,
            explanation: 'smooth ER is best matched with: synthesizes lipids and supports detoxification.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Endomembrane System
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → rough ER
      - **Immediate processing** → smooth ER
      - **System-level consequence** → Golgi
      - **Measured readout** → mitochondrion
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | rough ER | synthesizes and folds proteins for export or membranes | Early shift in the primary variable |
      | smooth ER | synthesizes lipids and supports detoxification | Mid-pathway change in process rate |
      | Golgi | modifies and sorts cargo from the ER | Downstream phenotype trend |
      | mitochondrion | site of aerobic ATP production | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **synthesizes and folds proteins for export or membranes**
      2) Term for this definition: **synthesizes lipids and supports detoxification**
      3) Term for this definition: **modifies and sorts cargo from the ER**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['rough ER', 'smooth ER', 'Golgi'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'synthesizes and folds proteins for export or membranes\'.',
        hint2: 'Second blank points to smooth ER; think about the role \'synthesizes lipids and supports detoxification\'.',
        hint3: 'Third blank is Golgi; connect it to \'modifies and sorts cargo from the ER\'.',
        explanation: 'Correct set: rough ER, smooth ER, Golgi. These three terms define the core mechanism chain for Endomembrane System.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'rough ER',
            options: ['synthesizes lipids and supports detoxification', 'site of aerobic ATP production', 'modifies and sorts cargo from the ER', 'synthesizes and folds proteins for export or membranes']
          },
          {
            label: 'smooth ER',
            options: ['site of aerobic ATP production', 'site of photosynthesis in plants and algae', 'synthesizes lipids and supports detoxification', 'modifies and sorts cargo from the ER']
          },
          {
            label: 'Golgi',
            options: ['modifies and sorts cargo from the ER', 'site of aerobic ATP production', 'site of photosynthesis in plants and algae', 'protein network for structure, transport, and movement']
          }
        ],
        correctAnswers: ['synthesizes and folds proteins for export or membranes', 'synthesizes lipids and supports detoxification', 'modifies and sorts cargo from the ER'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'rough ER, smooth ER, and Golgi should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because rough ER synthesizes and folds proteins for export or membranes, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Cell structure should be interpreted with function, not memorized as a static list.
      - All cells share core features, but not all cells contain every organelle type.
      - Ribosomes are not membrane-bound, yet they are essential organelles.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In protein trafficking from rough ER to membrane, the observed pattern is: site of aerobic ATP production. What term should anchor the explanation?',
            options: [
              'mitochondrion',
              'Golgi',
              'smooth ER',
              'rough ER'
            ],
            correctAnswer: 0,
            explanation: 'Use mitochondrion because it directly maps to the described biological pattern: site of aerobic ATP production.'
          },
          {
            question: 'In an AP-style free-response about endomembrane system, the observed pattern is: site of photosynthesis in plants and algae. What term should anchor the explanation?',
            options: [
              'mitochondrion',
              'Golgi',
              'chloroplast',
              'cytoskeleton'
            ],
            correctAnswer: 2,
            explanation: 'Use chloroplast because it directly maps to the described biological pattern: site of photosynthesis in plants and algae.'
          }
        ]
      }
    }
  ]
};
