export const bioCellCompartmentPart2Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Organelle Functions
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through specialized organelles in hepatocytes.
      
      ### Worked biological example
      A student team investigates specialized organelles in hepatocytes. Their first interpretation step is to identify how **lysosome** and **Golgi apparatus** work together in the same pathway.
      
      - They classify the primary signal using **lysosome**: contains hydrolytic enzymes for intracellular digestion.
      - They trace the downstream response using **Golgi apparatus**: modifies, sorts, and packages proteins and lipids.
      - They then compare outcomes with **ER lumen** and **vesicle budding** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **lysosome**
      - **Golgi apparatus**
      - **ER lumen**
      - **vesicle budding**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Organelle Functions, what best describes lysosome?',
            options: [
              'internal ER space where folding and processing occur',
              'modifies, sorts, and packages proteins and lipids',
              'pinches off a membrane packet for cargo transport',
              'contains hydrolytic enzymes for intracellular digestion'
            ],
            correctAnswer: 3,
            explanation: 'lysosome is best matched with: contains hydrolytic enzymes for intracellular digestion.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Golgi apparatus?',
            options: [
              'modifies, sorts, and packages proteins and lipids',
              'short amino acid sequence directing protein destination',
              'internal ER space where folding and processing occur',
              'contains hydrolytic enzymes for intracellular digestion'
            ],
            correctAnswer: 0,
            explanation: 'Golgi apparatus is best matched with: modifies, sorts, and packages proteins and lipids.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Organelle Functions
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → lysosome
      - **Immediate processing** → Golgi apparatus
      - **System-level consequence** → ER lumen
      - **Measured readout** → vesicle budding
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | lysosome | contains hydrolytic enzymes for intracellular digestion | Early shift in the primary variable |
      | Golgi apparatus | modifies, sorts, and packages proteins and lipids | Mid-pathway change in process rate |
      | ER lumen | internal ER space where folding and processing occur | Downstream phenotype trend |
      | vesicle budding | pinches off a membrane packet for cargo transport | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **contains hydrolytic enzymes for intracellular digestion**

      2) Term for this definition: **modifies, sorts, and packages proteins and lipids**

      3) Term for this definition: **internal ER space where folding and processing occur**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['lysosome', 'Golgi apparatus', 'ER lumen'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'contains hydrolytic enzymes for intracellular digestion\'.',
        hint2: 'Second blank points to Golgi apparatus; think about the role \'modifies, sorts, and packages proteins and lipids\'.',
        hint3: 'Third blank is ER lumen; connect it to \'internal ER space where folding and processing occur\'.',
        explanation: 'Correct set: lysosome, Golgi apparatus, ER lumen. These three terms define the core mechanism chain for Organelle Functions.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'lysosome',
            options: ['modifies, sorts, and packages proteins and lipids', 'pinches off a membrane packet for cargo transport', 'internal ER space where folding and processing occur', 'contains hydrolytic enzymes for intracellular digestion']
          },
          {
            label: 'Golgi apparatus',
            options: ['short amino acid sequence directing protein destination', 'internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport', 'modifies, sorts, and packages proteins and lipids']
          },
          {
            label: 'ER lumen',
            options: ['pinches off a membrane packet for cargo transport', 'short amino acid sequence directing protein destination', 'internal ER space where folding and processing occur', 'difference in proton concentration across a membrane']
          }
        ],
        correctAnswers: ['contains hydrolytic enzymes for intracellular digestion', 'modifies, sorts, and packages proteins and lipids', 'internal ER space where folding and processing occur'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'lysosome, Golgi apparatus, and ER lumen should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because lysosome contains hydrolytic enzymes for intracellular digestion, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Not every protein enters the secretory pathway; destination depends on targeting signals.
      - Compartmentalization improves efficiency by reducing interference, not by making diffusion faster everywhere.
      - Endosymbiosis is supported by multiple lines of evidence, not just one observation.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In specialized organelles in hepatocytes, the observed pattern is: pinches off a membrane packet for cargo transport. What term should anchor the explanation?',
            options: [
              'lysosome',
              'vesicle budding',
              'ER lumen',
              'Golgi apparatus'
            ],
            correctAnswer: 1,
            explanation: 'Use vesicle budding because it directly maps to the described biological pattern: pinches off a membrane packet for cargo transport.'
          },
          {
            question: 'In an AP-style free-response about organelle functions, the observed pattern is: short amino acid sequence directing protein destination. What term should anchor the explanation?',
            options: [
              'signal peptide',
              'vesicle budding',
              'ER lumen',
              'proton gradient'
            ],
            correctAnswer: 0,
            explanation: 'Use signal peptide because it directly maps to the described biological pattern: short amino acid sequence directing protein destination.'
          }
        ]
      }
    }
  ]
};
