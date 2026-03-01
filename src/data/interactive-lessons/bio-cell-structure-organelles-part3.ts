export const bioCellStructurePart3Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Membrane-Bound Organelles
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through organelle specialization in secretory tissues.
      
      ### Worked biological example
      A student team investigates organelle specialization in secretory tissues. Their first interpretation step is to identify how **ribosome** and **rough ER** work together in the same pathway.
      
      - They classify the primary signal using **ribosome**: translates mRNA into polypeptide chains.
      - They trace the downstream response using **rough ER**: synthesizes and folds proteins for export or membranes.
      - They then compare outcomes with **smooth ER** and **Golgi** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **ribosome**
      - **rough ER**
      - **smooth ER**
      - **Golgi**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Membrane-Bound Organelles, what best describes ribosome?',
            options: [
              'modifies and sorts cargo from the ER',
              'synthesizes lipids and supports detoxification',
              'synthesizes and folds proteins for export or membranes',
              'translates mRNA into polypeptide chains'
            ],
            correctAnswer: 3,
            explanation: 'ribosome is best matched with: translates mRNA into polypeptide chains.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of rough ER?',
            options: [
              'translates mRNA into polypeptide chains',
              'site of aerobic ATP production',
              'synthesizes and folds proteins for export or membranes',
              'synthesizes lipids and supports detoxification'
            ],
            correctAnswer: 2,
            explanation: 'rough ER is best matched with: synthesizes and folds proteins for export or membranes.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Membrane-Bound Organelles
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → ribosome
      - **Immediate processing** → rough ER
      - **System-level consequence** → smooth ER
      - **Measured readout** → Golgi
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | ribosome | translates mRNA into polypeptide chains | Early shift in the primary variable |
      | rough ER | synthesizes and folds proteins for export or membranes | Mid-pathway change in process rate |
      | smooth ER | synthesizes lipids and supports detoxification | Downstream phenotype trend |
      | Golgi | modifies and sorts cargo from the ER | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **translates mRNA into polypeptide chains**
      2) Term for this definition: **synthesizes and folds proteins for export or membranes**
      3) Term for this definition: **synthesizes lipids and supports detoxification**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ribosome', 'rough ER', 'smooth ER'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'translates mRNA into polypeptide chains\'.',
        hint2: 'Second blank points to rough ER; think about the role \'synthesizes and folds proteins for export or membranes\'.',
        hint3: 'Third blank is smooth ER; connect it to \'synthesizes lipids and supports detoxification\'.',
        explanation: 'Correct set: ribosome, rough ER, smooth ER. These three terms define the core mechanism chain for Membrane-Bound Organelles.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ribosome',
            options: ['modifies and sorts cargo from the ER', 'synthesizes and folds proteins for export or membranes', 'synthesizes lipids and supports detoxification', 'translates mRNA into polypeptide chains']
          },
          {
            label: 'rough ER',
            options: ['modifies and sorts cargo from the ER', 'site of aerobic ATP production', 'synthesizes lipids and supports detoxification', 'synthesizes and folds proteins for export or membranes']
          },
          {
            label: 'smooth ER',
            options: ['synthesizes lipids and supports detoxification', 'site of aerobic ATP production', 'site of photosynthesis in plants and algae', 'modifies and sorts cargo from the ER']
          }
        ],
        correctAnswers: ['translates mRNA into polypeptide chains', 'synthesizes and folds proteins for export or membranes', 'synthesizes lipids and supports detoxification'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'ribosome, rough ER, and smooth ER should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because ribosome translates mRNA into polypeptide chains, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Mitochondria are not only in animal cells; many eukaryotes have them.
      - Cell structure should be interpreted with function, not memorized as a static list.
      - All cells share core features, but not all cells contain every organelle type.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In organelle specialization in secretory tissues, the observed pattern is: modifies and sorts cargo from the ER. What term should anchor the explanation?',
            options: [
              'rough ER',
              'Golgi',
              'ribosome',
              'smooth ER'
            ],
            correctAnswer: 1,
            explanation: 'Use Golgi because it directly maps to the described biological pattern: modifies and sorts cargo from the ER.'
          },
          {
            question: 'In an AP-style free-response about membrane-bound organelles, the observed pattern is: site of aerobic ATP production. What term should anchor the explanation?',
            options: [
              'mitochondrion',
              'smooth ER',
              'chloroplast',
              'Golgi'
            ],
            correctAnswer: 0,
            explanation: 'Use mitochondrion because it directly maps to the described biological pattern: site of aerobic ATP production.'
          }
        ]
      }
    }
  ]
};
