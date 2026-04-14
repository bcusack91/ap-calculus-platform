export const bioCellCompartmentPart6Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through organelle dysfunction case studies.
      
      ### Worked biological example
      A student team investigates organelle dysfunction case studies. Their first interpretation step is to identify how **signal peptide** and **proton gradient** work together in the same pathway.
      
      - They classify the primary signal using **signal peptide**: short amino acid sequence directing protein destination.
      - They trace the downstream response using **proton gradient**: difference in proton concentration across a membrane.
      - They then compare outcomes with **endosymbiosis** and **organelle targeting** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **signal peptide**
      - **proton gradient**
      - **endosymbiosis**
      - **organelle targeting**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes signal peptide?',
            options: [
              'delivery of molecules to correct intracellular compartment',
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'difference in proton concentration across a membrane',
              'short amino acid sequence directing protein destination'
            ],
            correctAnswer: 3,
            explanation: 'signal peptide is best matched with: short amino acid sequence directing protein destination.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of proton gradient?',
            options: [
              'difference in proton concentration across a membrane',
              'short amino acid sequence directing protein destination',
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'separates cellular processes into distinct membrane-bound regions'
            ],
            correctAnswer: 0,
            explanation: 'proton gradient is best matched with: difference in proton concentration across a membrane.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → signal peptide
      - **Immediate processing** → proton gradient
      - **System-level consequence** → endosymbiosis
      - **Measured readout** → organelle targeting
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | signal peptide | short amino acid sequence directing protein destination | Early shift in the primary variable |
      | proton gradient | difference in proton concentration across a membrane | Mid-pathway change in process rate |
      | endosymbiosis | origin model where mitochondria and chloroplasts derive from bacteria | Downstream phenotype trend |
      | organelle targeting | delivery of molecules to correct intracellular compartment | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **short amino acid sequence directing protein destination**

      2) Term for this definition: **difference in proton concentration across a membrane**

      3) Term for this definition: **origin model where mitochondria and chloroplasts derive from bacteria**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['signal peptide', 'proton gradient', 'endosymbiosis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'short amino acid sequence directing protein destination\'.',
        hint2: 'Second blank points to proton gradient; think about the role \'difference in proton concentration across a membrane\'.',
        hint3: 'Third blank is endosymbiosis; connect it to \'origin model where mitochondria and chloroplasts derive from bacteria\'.',
        explanation: 'Correct set: signal peptide, proton gradient, endosymbiosis. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'signal peptide',
            options: ['difference in proton concentration across a membrane', 'origin model where mitochondria and chloroplasts derive from bacteria', 'short amino acid sequence directing protein destination', 'delivery of molecules to correct intracellular compartment']
          },
          {
            label: 'proton gradient',
            options: ['delivery of molecules to correct intracellular compartment', 'separates cellular processes into distinct membrane-bound regions', 'difference in proton concentration across a membrane', 'origin model where mitochondria and chloroplasts derive from bacteria']
          },
          {
            label: 'endosymbiosis',
            options: ['contains hydrolytic enzymes for intracellular digestion', 'separates cellular processes into distinct membrane-bound regions', 'origin model where mitochondria and chloroplasts derive from bacteria', 'delivery of molecules to correct intracellular compartment']
          }
        ],
        correctAnswers: ['short amino acid sequence directing protein destination', 'difference in proton concentration across a membrane', 'origin model where mitochondria and chloroplasts derive from bacteria'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'signal peptide, proton gradient, and endosymbiosis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because signal peptide short amino acid sequence directing protein destination, we expect ...".
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
      id: 'bio-cell-compartmentalization-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In organelle dysfunction case studies, the observed pattern is: delivery of molecules to correct intracellular compartment. What term should anchor the explanation?',
            options: [
              'organelle targeting',
              'proton gradient',
              'signal peptide',
              'endosymbiosis'
            ],
            correctAnswer: 0,
            explanation: 'Use organelle targeting because it directly maps to the described biological pattern: delivery of molecules to correct intracellular compartment.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: separates cellular processes into distinct membrane-bound regions. What term should anchor the explanation?',
            options: [
              'organelle targeting',
              'lysosome',
              'compartmentalization',
              'endosymbiosis'
            ],
            correctAnswer: 2,
            explanation: 'Use compartmentalization because it directly maps to the described biological pattern: separates cellular processes into distinct membrane-bound regions.'
          }
        ]
      }
    }
  ]
};
