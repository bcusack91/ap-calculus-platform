export const bioCellCompartmentPart7Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Compartmentalization: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through cross-unit synthesis on compartment logic.
      
      ### Worked biological example
      A student team investigates cross-unit synthesis on compartment logic. Their first interpretation step is to identify how **proton gradient** and **endosymbiosis** work together in the same pathway.
      
      - They classify the primary signal using **proton gradient**: difference in proton concentration across a membrane.
      - They trace the downstream response using **endosymbiosis**: origin model where mitochondria and chloroplasts derive from bacteria.
      - They then compare outcomes with **organelle targeting** and **compartmentalization** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **proton gradient**
      - **endosymbiosis**
      - **organelle targeting**
      - **compartmentalization**
      `
    },
    {
      id: 'bio-cell-compartmentalization-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes proton gradient?',
            options: [
              'difference in proton concentration across a membrane',
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'delivery of molecules to correct intracellular compartment',
              'separates cellular processes into distinct membrane-bound regions'
            ],
            correctAnswer: 0,
            explanation: 'proton gradient is best matched with: difference in proton concentration across a membrane.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of endosymbiosis?',
            options: [
              'difference in proton concentration across a membrane',
              'origin model where mitochondria and chloroplasts derive from bacteria',
              'contains hydrolytic enzymes for intracellular digestion',
              'delivery of molecules to correct intracellular compartment'
            ],
            correctAnswer: 1,
            explanation: 'endosymbiosis is best matched with: origin model where mitochondria and chloroplasts derive from bacteria.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → proton gradient
      - **Immediate processing** → endosymbiosis
      - **System-level consequence** → organelle targeting
      - **Measured readout** → compartmentalization
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | proton gradient | difference in proton concentration across a membrane | Early shift in the primary variable |
      | endosymbiosis | origin model where mitochondria and chloroplasts derive from bacteria | Mid-pathway change in process rate |
      | organelle targeting | delivery of molecules to correct intracellular compartment | Downstream phenotype trend |
      | compartmentalization | separates cellular processes into distinct membrane-bound regions | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **difference in proton concentration across a membrane**
      2) Term for this definition: **origin model where mitochondria and chloroplasts derive from bacteria**
      3) Term for this definition: **delivery of molecules to correct intracellular compartment**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['proton gradient', 'endosymbiosis', 'organelle targeting'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'difference in proton concentration across a membrane\'.',
        hint2: 'Second blank points to endosymbiosis; think about the role \'origin model where mitochondria and chloroplasts derive from bacteria\'.',
        hint3: 'Third blank is organelle targeting; connect it to \'delivery of molecules to correct intracellular compartment\'.',
        explanation: 'Correct set: proton gradient, endosymbiosis, organelle targeting. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'proton gradient',
            options: ['origin model where mitochondria and chloroplasts derive from bacteria', 'delivery of molecules to correct intracellular compartment', 'difference in proton concentration across a membrane', 'separates cellular processes into distinct membrane-bound regions']
          },
          {
            label: 'endosymbiosis',
            options: ['contains hydrolytic enzymes for intracellular digestion', 'separates cellular processes into distinct membrane-bound regions', 'origin model where mitochondria and chloroplasts derive from bacteria', 'delivery of molecules to correct intracellular compartment']
          },
          {
            label: 'organelle targeting',
            options: ['delivery of molecules to correct intracellular compartment', 'modifies, sorts, and packages proteins and lipids', 'contains hydrolytic enzymes for intracellular digestion', 'separates cellular processes into distinct membrane-bound regions']
          }
        ],
        correctAnswers: ['difference in proton concentration across a membrane', 'origin model where mitochondria and chloroplasts derive from bacteria', 'delivery of molecules to correct intracellular compartment'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'proton gradient, endosymbiosis, and organelle targeting should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because proton gradient difference in proton concentration across a membrane, we expect ...".
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
      id: 'bio-cell-compartmentalization-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In cross-unit synthesis on compartment logic, the observed pattern is: separates cellular processes into distinct membrane-bound regions. What term should anchor the explanation?',
            options: [
              'endosymbiosis',
              'compartmentalization',
              'organelle targeting',
              'proton gradient'
            ],
            correctAnswer: 1,
            explanation: 'Use compartmentalization because it directly maps to the described biological pattern: separates cellular processes into distinct membrane-bound regions.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: contains hydrolytic enzymes for intracellular digestion. What term should anchor the explanation?',
            options: [
              'lysosome',
              'compartmentalization',
              'organelle targeting',
              'Golgi apparatus'
            ],
            correctAnswer: 0,
            explanation: 'Use lysosome because it directly maps to the described biological pattern: contains hydrolytic enzymes for intracellular digestion.'
          }
        ]
      }
    }
  ]
};
