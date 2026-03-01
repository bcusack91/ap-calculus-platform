export const bioMembraneTransportPart7Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through integrated AP transport mechanism synthesis.
      
      ### Worked biological example
      A student team investigates integrated AP transport mechanism synthesis. Their first interpretation step is to identify how **sodium-potassium pump** and **endocytosis** work together in the same pathway.
      
      - They classify the primary signal using **sodium-potassium pump**: ATPase exchanging Na+ and K+ across plasma membrane.
      - They trace the downstream response using **endocytosis**: uptake of extracellular material via vesicle formation.
      - They then compare outcomes with **exocytosis** and **selective permeability** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **sodium-potassium pump**
      - **endocytosis**
      - **exocytosis**
      - **selective permeability**
      `
    },
    {
      id: 'bio-membrane-transport-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes sodium-potassium pump?',
            options: [
              'membrane property allowing some molecules to cross more easily',
              'uptake of extracellular material via vesicle formation',
              'release of intracellular cargo via vesicle fusion',
              'ATPase exchanging Na+ and K+ across plasma membrane'
            ],
            correctAnswer: 3,
            explanation: 'sodium-potassium pump is best matched with: ATPase exchanging Na+ and K+ across plasma membrane.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of endocytosis?',
            options: [
              'net movement from higher to lower concentration',
              'release of intracellular cargo via vesicle fusion',
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'uptake of extracellular material via vesicle formation'
            ],
            correctAnswer: 3,
            explanation: 'endocytosis is best matched with: uptake of extracellular material via vesicle formation.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → sodium-potassium pump
      - **Immediate processing** → endocytosis
      - **System-level consequence** → exocytosis
      - **Measured readout** → selective permeability
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | sodium-potassium pump | ATPase exchanging Na+ and K+ across plasma membrane | Early shift in the primary variable |
      | endocytosis | uptake of extracellular material via vesicle formation | Mid-pathway change in process rate |
      | exocytosis | release of intracellular cargo via vesicle fusion | Downstream phenotype trend |
      | selective permeability | membrane property allowing some molecules to cross more easily | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **ATPase exchanging Na+ and K+ across plasma membrane**
      2) Term for this definition: **uptake of extracellular material via vesicle formation**
      3) Term for this definition: **release of intracellular cargo via vesicle fusion**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sodium-potassium pump', 'endocytosis', 'exocytosis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'ATPase exchanging Na+ and K+ across plasma membrane\'.',
        hint2: 'Second blank points to endocytosis; think about the role \'uptake of extracellular material via vesicle formation\'.',
        hint3: 'Third blank is exocytosis; connect it to \'release of intracellular cargo via vesicle fusion\'.',
        explanation: 'Correct set: sodium-potassium pump, endocytosis, exocytosis. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-membrane-transport-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sodium-potassium pump',
            options: ['release of intracellular cargo via vesicle fusion', 'membrane property allowing some molecules to cross more easily', 'uptake of extracellular material via vesicle formation', 'ATPase exchanging Na+ and K+ across plasma membrane']
          },
          {
            label: 'endocytosis',
            options: ['membrane property allowing some molecules to cross more easily', 'release of intracellular cargo via vesicle fusion', 'net movement from higher to lower concentration', 'uptake of extracellular material via vesicle formation']
          },
          {
            label: 'exocytosis',
            options: ['release of intracellular cargo via vesicle fusion', 'membrane property allowing some molecules to cross more easily', 'passive transport through membrane proteins', 'net movement from higher to lower concentration']
          }
        ],
        correctAnswers: ['ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation', 'release of intracellular cargo via vesicle fusion'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'sodium-potassium pump, endocytosis, and exocytosis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because sodium-potassium pump ATPase exchanging Na+ and K+ across plasma membrane, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Osmosis describes water movement, not solute movement.
      - Active transport is defined by movement against gradient, not merely ATP presence nearby.
      - Transport direction depends on gradients and membrane proteins, not molecule intent.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-membrane-transport-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In integrated AP transport mechanism synthesis, the observed pattern is: membrane property allowing some molecules to cross more easily. What term should anchor the explanation?',
            options: [
              'exocytosis',
              'endocytosis',
              'selective permeability',
              'sodium-potassium pump'
            ],
            correctAnswer: 2,
            explanation: 'Use selective permeability because it directly maps to the described biological pattern: membrane property allowing some molecules to cross more easily.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: net movement from higher to lower concentration. What term should anchor the explanation?',
            options: [
              'exocytosis',
              'diffusion',
              'facilitated diffusion',
              'selective permeability'
            ],
            correctAnswer: 1,
            explanation: 'Use diffusion because it directly maps to the described biological pattern: net movement from higher to lower concentration.'
          }
        ]
      }
    }
  ]
};
