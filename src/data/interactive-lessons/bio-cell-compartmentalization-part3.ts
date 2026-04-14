export const bioCellCompartmentPart3Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Membrane Surfaces
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through membrane microenvironments with distinct pH.
      
      ### Worked biological example
      A student team investigates membrane microenvironments with distinct pH. Their first interpretation step is to identify how **Golgi apparatus** and **ER lumen** work together in the same pathway.
      
      - They classify the primary signal using **Golgi apparatus**: modifies, sorts, and packages proteins and lipids.
      - They trace the downstream response using **ER lumen**: internal ER space where folding and processing occur.
      - They then compare outcomes with **vesicle budding** and **signal peptide** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Golgi apparatus**
      - **ER lumen**
      - **vesicle budding**
      - **signal peptide**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Membrane Surfaces, what best describes Golgi apparatus?',
            options: [
              'modifies, sorts, and packages proteins and lipids',
              'internal ER space where folding and processing occur',
              'pinches off a membrane packet for cargo transport',
              'short amino acid sequence directing protein destination'
            ],
            correctAnswer: 0,
            explanation: 'Golgi apparatus is best matched with: modifies, sorts, and packages proteins and lipids.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of ER lumen?',
            options: [
              'modifies, sorts, and packages proteins and lipids',
              'pinches off a membrane packet for cargo transport',
              'difference in proton concentration across a membrane',
              'internal ER space where folding and processing occur'
            ],
            correctAnswer: 3,
            explanation: 'ER lumen is best matched with: internal ER space where folding and processing occur.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Membrane Surfaces
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Golgi apparatus
      - **Immediate processing** → ER lumen
      - **System-level consequence** → vesicle budding
      - **Measured readout** → signal peptide
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Golgi apparatus | modifies, sorts, and packages proteins and lipids | Early shift in the primary variable |
      | ER lumen | internal ER space where folding and processing occur | Mid-pathway change in process rate |
      | vesicle budding | pinches off a membrane packet for cargo transport | Downstream phenotype trend |
      | signal peptide | short amino acid sequence directing protein destination | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **modifies, sorts, and packages proteins and lipids**

      2) Term for this definition: **internal ER space where folding and processing occur**

      3) Term for this definition: **pinches off a membrane packet for cargo transport**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Golgi apparatus', 'ER lumen', 'vesicle budding'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'modifies, sorts, and packages proteins and lipids\'.',
        hint2: 'Second blank points to ER lumen; think about the role \'internal ER space where folding and processing occur\'.',
        hint3: 'Third blank is vesicle budding; connect it to \'pinches off a membrane packet for cargo transport\'.',
        explanation: 'Correct set: Golgi apparatus, ER lumen, vesicle budding. These three terms define the core mechanism chain for Membrane Surfaces.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Golgi apparatus',
            options: ['modifies, sorts, and packages proteins and lipids', 'short amino acid sequence directing protein destination', 'pinches off a membrane packet for cargo transport', 'internal ER space where folding and processing occur']
          },
          {
            label: 'ER lumen',
            options: ['short amino acid sequence directing protein destination', 'difference in proton concentration across a membrane', 'internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport']
          },
          {
            label: 'vesicle budding',
            options: ['short amino acid sequence directing protein destination', 'origin model where mitochondria and chloroplasts derive from bacteria', 'difference in proton concentration across a membrane', 'pinches off a membrane packet for cargo transport']
          }
        ],
        correctAnswers: ['modifies, sorts, and packages proteins and lipids', 'internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Golgi apparatus, ER lumen, and vesicle budding should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Golgi apparatus modifies, sorts, and packages proteins and lipids, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Compartmentalization improves efficiency by reducing interference, not by making diffusion faster everywhere.
      - Endosymbiosis is supported by multiple lines of evidence, not just one observation.
      - Organelles are dynamic and interactive, not isolated static containers.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In membrane microenvironments with distinct pH, the observed pattern is: short amino acid sequence directing protein destination. What term should anchor the explanation?',
            options: [
              'signal peptide',
              'vesicle budding',
              'ER lumen',
              'Golgi apparatus'
            ],
            correctAnswer: 0,
            explanation: 'Use signal peptide because it directly maps to the described biological pattern: short amino acid sequence directing protein destination.'
          },
          {
            question: 'In an AP-style free-response about membrane surfaces, the observed pattern is: difference in proton concentration across a membrane. What term should anchor the explanation?',
            options: [
              'vesicle budding',
              'signal peptide',
              'proton gradient',
              'endosymbiosis'
            ],
            correctAnswer: 2,
            explanation: 'Use proton gradient because it directly maps to the described biological pattern: difference in proton concentration across a membrane.'
          }
        ]
      }
    }
  ]
};
