export const bioCellCompartmentPart1Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Compartmentalization Overview
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through protein sorting in a eukaryotic secretory cell.
      
      ### Worked biological example
      A student team investigates protein sorting in a eukaryotic secretory cell. Their first interpretation step is to identify how **compartmentalization** and **lysosome** work together in the same pathway.
      
      - They classify the primary signal using **compartmentalization**: separates cellular processes into distinct membrane-bound regions.
      - They trace the downstream response using **lysosome**: contains hydrolytic enzymes for intracellular digestion.
      - They then compare outcomes with **Golgi apparatus** and **ER lumen** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **compartmentalization**
      - **lysosome**
      - **Golgi apparatus**
      - **ER lumen**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Compartmentalization Overview, what best describes compartmentalization?',
            options: [
              'separates cellular processes into distinct membrane-bound regions',
              'contains hydrolytic enzymes for intracellular digestion',
              'modifies, sorts, and packages proteins and lipids',
              'internal ER space where folding and processing occur'
            ],
            correctAnswer: 0,
            explanation: 'compartmentalization is best matched with: separates cellular processes into distinct membrane-bound regions.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of lysosome?',
            options: [
              'pinches off a membrane packet for cargo transport',
              'separates cellular processes into distinct membrane-bound regions',
              'contains hydrolytic enzymes for intracellular digestion',
              'modifies, sorts, and packages proteins and lipids'
            ],
            correctAnswer: 2,
            explanation: 'lysosome is best matched with: contains hydrolytic enzymes for intracellular digestion.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Compartmentalization Overview
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → compartmentalization
      - **Immediate processing** → lysosome
      - **System-level consequence** → Golgi apparatus
      - **Measured readout** → ER lumen
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | compartmentalization | separates cellular processes into distinct membrane-bound regions | Early shift in the primary variable |
      | lysosome | contains hydrolytic enzymes for intracellular digestion | Mid-pathway change in process rate |
      | Golgi apparatus | modifies, sorts, and packages proteins and lipids | Downstream phenotype trend |
      | ER lumen | internal ER space where folding and processing occur | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **separates cellular processes into distinct membrane-bound regions**

      2) Term for this definition: **contains hydrolytic enzymes for intracellular digestion**

      3) Term for this definition: **modifies, sorts, and packages proteins and lipids**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['compartmentalization', 'lysosome', 'Golgi apparatus'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'separates cellular processes into distinct membrane-bound regions\'.',
        hint2: 'Second blank points to lysosome; think about the role \'contains hydrolytic enzymes for intracellular digestion\'.',
        hint3: 'Third blank is Golgi apparatus; connect it to \'modifies, sorts, and packages proteins and lipids\'.',
        explanation: 'Correct set: compartmentalization, lysosome, Golgi apparatus. These three terms define the core mechanism chain for Compartmentalization Overview.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'compartmentalization',
            options: ['internal ER space where folding and processing occur', 'contains hydrolytic enzymes for intracellular digestion', 'separates cellular processes into distinct membrane-bound regions', 'modifies, sorts, and packages proteins and lipids']
          },
          {
            label: 'lysosome',
            options: ['contains hydrolytic enzymes for intracellular digestion', 'internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport', 'modifies, sorts, and packages proteins and lipids']
          },
          {
            label: 'Golgi apparatus',
            options: ['pinches off a membrane packet for cargo transport', 'short amino acid sequence directing protein destination', 'internal ER space where folding and processing occur', 'modifies, sorts, and packages proteins and lipids']
          }
        ],
        correctAnswers: ['separates cellular processes into distinct membrane-bound regions', 'contains hydrolytic enzymes for intracellular digestion', 'modifies, sorts, and packages proteins and lipids'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'compartmentalization, lysosome, and Golgi apparatus should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because compartmentalization separates cellular processes into distinct membrane-bound regions, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Organelles are dynamic and interactive, not isolated static containers.
      - Not every protein enters the secretory pathway; destination depends on targeting signals.
      - Compartmentalization improves efficiency by reducing interference, not by making diffusion faster everywhere.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In protein sorting in a eukaryotic secretory cell, the observed pattern is: internal ER space where folding and processing occur. What term should anchor the explanation?',
            options: [
              'lysosome',
              'ER lumen',
              'compartmentalization',
              'Golgi apparatus'
            ],
            correctAnswer: 1,
            explanation: 'Use ER lumen because it directly maps to the described biological pattern: internal ER space where folding and processing occur.'
          },
          {
            question: 'In an AP-style free-response about compartmentalization overview, the observed pattern is: pinches off a membrane packet for cargo transport. What term should anchor the explanation?',
            options: [
              'Golgi apparatus',
              'vesicle budding',
              'signal peptide',
              'ER lumen'
            ],
            correctAnswer: 1,
            explanation: 'Use vesicle budding because it directly maps to the described biological pattern: pinches off a membrane packet for cargo transport.'
          }
        ]
      }
    }
  ]
};
