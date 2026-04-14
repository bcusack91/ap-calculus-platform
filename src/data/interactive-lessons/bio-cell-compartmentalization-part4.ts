export const bioCellCompartmentPart4Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Intracellular Transport
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through vesicle trafficking between ER and Golgi.
      
      ### Worked biological example
      A student team investigates vesicle trafficking between ER and Golgi. Their first interpretation step is to identify how **ER lumen** and **vesicle budding** work together in the same pathway.
      
      - They classify the primary signal using **ER lumen**: internal ER space where folding and processing occur.
      - They trace the downstream response using **vesicle budding**: pinches off a membrane packet for cargo transport.
      - They then compare outcomes with **signal peptide** and **proton gradient** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **ER lumen**
      - **vesicle budding**
      - **signal peptide**
      - **proton gradient**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Intracellular Transport, what best describes ER lumen?',
            options: [
              'difference in proton concentration across a membrane',
              'internal ER space where folding and processing occur',
              'short amino acid sequence directing protein destination',
              'pinches off a membrane packet for cargo transport'
            ],
            correctAnswer: 1,
            explanation: 'ER lumen is best matched with: internal ER space where folding and processing occur.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of vesicle budding?',
            options: [
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'short amino acid sequence directing protein destination',
              'internal ER space where folding and processing occur',
              'pinches off a membrane packet for cargo transport'
            ],
            correctAnswer: 3,
            explanation: 'vesicle budding is best matched with: pinches off a membrane packet for cargo transport.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Intracellular Transport
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → ER lumen
      - **Immediate processing** → vesicle budding
      - **System-level consequence** → signal peptide
      - **Measured readout** → proton gradient
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | ER lumen | internal ER space where folding and processing occur | Early shift in the primary variable |
      | vesicle budding | pinches off a membrane packet for cargo transport | Mid-pathway change in process rate |
      | signal peptide | short amino acid sequence directing protein destination | Downstream phenotype trend |
      | proton gradient | difference in proton concentration across a membrane | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **internal ER space where folding and processing occur**

      2) Term for this definition: **pinches off a membrane packet for cargo transport**

      3) Term for this definition: **short amino acid sequence directing protein destination**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ER lumen', 'vesicle budding', 'signal peptide'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'internal ER space where folding and processing occur\'.',
        hint2: 'Second blank points to vesicle budding; think about the role \'pinches off a membrane packet for cargo transport\'.',
        hint3: 'Third blank is signal peptide; connect it to \'short amino acid sequence directing protein destination\'.',
        explanation: 'Correct set: ER lumen, vesicle budding, signal peptide. These three terms define the core mechanism chain for Intracellular Transport.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ER lumen',
            options: ['difference in proton concentration across a membrane', 'short amino acid sequence directing protein destination', 'internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport']
          },
          {
            label: 'vesicle budding',
            options: ['origin model where mitochondria and chloroplasts derive from bacteria', 'difference in proton concentration across a membrane', 'short amino acid sequence directing protein destination', 'pinches off a membrane packet for cargo transport']
          },
          {
            label: 'signal peptide',
            options: ['delivery of molecules to correct intracellular compartment', 'difference in proton concentration across a membrane', 'short amino acid sequence directing protein destination', 'origin model where mitochondria and chloroplasts derive from bacteria']
          }
        ],
        correctAnswers: ['internal ER space where folding and processing occur', 'pinches off a membrane packet for cargo transport', 'short amino acid sequence directing protein destination'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'ER lumen, vesicle budding, and signal peptide should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because ER lumen internal ER space where folding and processing occur, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Endosymbiosis is supported by multiple lines of evidence, not just one observation.
      - Organelles are dynamic and interactive, not isolated static containers.
      - Not every protein enters the secretory pathway; destination depends on targeting signals.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In vesicle trafficking between ER and Golgi, the observed pattern is: difference in proton concentration across a membrane. What term should anchor the explanation?',
            options: [
              'ER lumen',
              'signal peptide',
              'proton gradient',
              'vesicle budding'
            ],
            correctAnswer: 2,
            explanation: 'Use proton gradient because it directly maps to the described biological pattern: difference in proton concentration across a membrane.'
          },
          {
            question: 'In an AP-style free-response about intracellular transport, the observed pattern is: origin model where mitochondria and chloroplasts derive from bacteria. What term should anchor the explanation?',
            options: [
              'organelle targeting',
              'signal peptide',
              'proton gradient',
              'endosymbiosis'
            ],
            correctAnswer: 3,
            explanation: 'Use endosymbiosis because it directly maps to the described biological pattern: origin model where mitochondria and chloroplasts derive from bacteria.'
          }
        ]
      }
    }
  ]
};
