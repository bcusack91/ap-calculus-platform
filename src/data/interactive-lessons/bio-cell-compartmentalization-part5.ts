export const bioCellCompartmentPart5Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Endosymbiotic Theory
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through evidence for organelle evolutionary origin.
      
      ### Worked biological example
      A student team investigates evidence for organelle evolutionary origin. Their first interpretation step is to identify how **vesicle budding** and **signal peptide** work together in the same pathway.
      
      - They classify the primary signal using **vesicle budding**: pinches off a membrane packet for cargo transport.
      - They trace the downstream response using **signal peptide**: short amino acid sequence directing protein destination.
      - They then compare outcomes with **proton gradient** and **endosymbiosis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **vesicle budding**
      - **signal peptide**
      - **proton gradient**
      - **endosymbiosis**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Endosymbiotic Theory, what best describes vesicle budding?',
            options: [
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'pinches off a membrane packet for cargo transport',
              'difference in proton concentration across a membrane',
              'short amino acid sequence directing protein destination'
            ],
            correctAnswer: 1,
            explanation: 'vesicle budding is best matched with: pinches off a membrane packet for cargo transport.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of signal peptide?',
            options: [
              'difference in proton concentration across a membrane',
              'delivery of molecules to correct intracellular compartment',
              'short amino acid sequence directing protein destination',
              'pinches off a membrane packet for cargo transport'
            ],
            correctAnswer: 2,
            explanation: 'signal peptide is best matched with: short amino acid sequence directing protein destination.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Endosymbiotic Theory
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → vesicle budding
      - **Immediate processing** → signal peptide
      - **System-level consequence** → proton gradient
      - **Measured readout** → endosymbiosis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | vesicle budding | pinches off a membrane packet for cargo transport | Early shift in the primary variable |
      | signal peptide | short amino acid sequence directing protein destination | Mid-pathway change in process rate |
      | proton gradient | difference in proton concentration across a membrane | Downstream phenotype trend |
      | endosymbiosis | origin model where mitochondria and chloroplasts derive from bacteria | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **pinches off a membrane packet for cargo transport**

      2) Term for this definition: **short amino acid sequence directing protein destination**

      3) Term for this definition: **difference in proton concentration across a membrane**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['vesicle budding', 'signal peptide', 'proton gradient'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'pinches off a membrane packet for cargo transport\'.',
        hint2: 'Second blank points to signal peptide; think about the role \'short amino acid sequence directing protein destination\'.',
        hint3: 'Third blank is proton gradient; connect it to \'difference in proton concentration across a membrane\'.',
        explanation: 'Correct set: vesicle budding, signal peptide, proton gradient. These three terms define the core mechanism chain for Endosymbiotic Theory.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'vesicle budding',
            options: ['difference in proton concentration across a membrane', 'pinches off a membrane packet for cargo transport', 'short amino acid sequence directing protein destination', 'origin model where mitochondria and chloroplasts derive from bacteria']
          },
          {
            label: 'signal peptide',
            options: ['origin model where mitochondria and chloroplasts derive from bacteria', 'short amino acid sequence directing protein destination', 'delivery of molecules to correct intracellular compartment', 'difference in proton concentration across a membrane']
          },
          {
            label: 'proton gradient',
            options: ['origin model where mitochondria and chloroplasts derive from bacteria', 'difference in proton concentration across a membrane', 'separates cellular processes into distinct membrane-bound regions', 'delivery of molecules to correct intracellular compartment']
          }
        ],
        correctAnswers: ['pinches off a membrane packet for cargo transport', 'short amino acid sequence directing protein destination', 'difference in proton concentration across a membrane'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'vesicle budding, signal peptide, and proton gradient should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because vesicle budding pinches off a membrane packet for cargo transport, we expect ...".
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
      id: 'bio-cell-compartmentalization-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In evidence for organelle evolutionary origin, the observed pattern is: origin model where mitochondria and chloroplasts derive from bacteria. What term should anchor the explanation?',
            options: [
              'proton gradient',
              'signal peptide',
              'endosymbiosis',
              'vesicle budding'
            ],
            correctAnswer: 2,
            explanation: 'Use endosymbiosis because it directly maps to the described biological pattern: origin model where mitochondria and chloroplasts derive from bacteria.'
          },
          {
            question: 'In an AP-style free-response about endosymbiotic theory, the observed pattern is: delivery of molecules to correct intracellular compartment. What term should anchor the explanation?',
            options: [
              'proton gradient',
              'endosymbiosis',
              'organelle targeting',
              'compartmentalization'
            ],
            correctAnswer: 2,
            explanation: 'Use organelle targeting because it directly maps to the described biological pattern: delivery of molecules to correct intracellular compartment.'
          }
        ]
      }
    }
  ]
};
