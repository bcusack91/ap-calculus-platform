export const bioMembraneTransportPart5Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Bulk Transport
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through endocytosis and exocytosis events.
      
      ### Worked biological example
      A student team investigates endocytosis and exocytosis events. Their first interpretation step is to identify how **aquaporin** and **active transport** work together in the same pathway.
      
      - They classify the primary signal using **aquaporin**: channel protein enabling rapid water transport.
      - They trace the downstream response using **active transport**: movement against gradient requiring energy input.
      - They then compare outcomes with **sodium-potassium pump** and **endocytosis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **aquaporin**
      - **active transport**
      - **sodium-potassium pump**
      - **endocytosis**
      `
    },
    {
      id: 'bio-membrane-transport-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Bulk Transport, what best describes aquaporin?',
            options: [
              'uptake of extracellular material via vesicle formation',
              'channel protein enabling rapid water transport',
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'movement against gradient requiring energy input'
            ],
            correctAnswer: 1,
            explanation: 'aquaporin is best matched with: channel protein enabling rapid water transport.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of active transport?',
            options: [
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'movement against gradient requiring energy input',
              'channel protein enabling rapid water transport',
              'release of intracellular cargo via vesicle fusion'
            ],
            correctAnswer: 1,
            explanation: 'active transport is best matched with: movement against gradient requiring energy input.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Bulk Transport
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → aquaporin
      - **Immediate processing** → active transport
      - **System-level consequence** → sodium-potassium pump
      - **Measured readout** → endocytosis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | aquaporin | channel protein enabling rapid water transport | Early shift in the primary variable |
      | active transport | movement against gradient requiring energy input | Mid-pathway change in process rate |
      | sodium-potassium pump | ATPase exchanging Na+ and K+ across plasma membrane | Downstream phenotype trend |
      | endocytosis | uptake of extracellular material via vesicle formation | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **channel protein enabling rapid water transport**
      2) Term for this definition: **movement against gradient requiring energy input**
      3) Term for this definition: **ATPase exchanging Na+ and K+ across plasma membrane**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aquaporin', 'active transport', 'sodium-potassium pump'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'channel protein enabling rapid water transport\'.',
        hint2: 'Second blank points to active transport; think about the role \'movement against gradient requiring energy input\'.',
        hint3: 'Third blank is sodium-potassium pump; connect it to \'ATPase exchanging Na+ and K+ across plasma membrane\'.',
        explanation: 'Correct set: aquaporin, active transport, sodium-potassium pump. These three terms define the core mechanism chain for Bulk Transport.'
      }
    },
    {
      id: 'bio-membrane-transport-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'aquaporin',
            options: ['channel protein enabling rapid water transport', 'movement against gradient requiring energy input', 'uptake of extracellular material via vesicle formation', 'ATPase exchanging Na+ and K+ across plasma membrane']
          },
          {
            label: 'active transport',
            options: ['release of intracellular cargo via vesicle fusion', 'ATPase exchanging Na+ and K+ across plasma membrane', 'movement against gradient requiring energy input', 'uptake of extracellular material via vesicle formation']
          },
          {
            label: 'sodium-potassium pump',
            options: ['ATPase exchanging Na+ and K+ across plasma membrane', 'release of intracellular cargo via vesicle fusion', 'membrane property allowing some molecules to cross more easily', 'uptake of extracellular material via vesicle formation']
          }
        ],
        correctAnswers: ['channel protein enabling rapid water transport', 'movement against gradient requiring energy input', 'ATPase exchanging Na+ and K+ across plasma membrane'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'aquaporin, active transport, and sodium-potassium pump should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because aquaporin channel protein enabling rapid water transport, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Transport direction depends on gradients and membrane proteins, not molecule intent.
      - Facilitated diffusion remains passive even though proteins are involved.
      - Osmosis describes water movement, not solute movement.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-membrane-transport-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In endocytosis and exocytosis events, the observed pattern is: uptake of extracellular material via vesicle formation. What term should anchor the explanation?',
            options: [
              'active transport',
              'sodium-potassium pump',
              'aquaporin',
              'endocytosis'
            ],
            correctAnswer: 3,
            explanation: 'Use endocytosis because it directly maps to the described biological pattern: uptake of extracellular material via vesicle formation.'
          },
          {
            question: 'In an AP-style free-response about bulk transport, the observed pattern is: release of intracellular cargo via vesicle fusion. What term should anchor the explanation?',
            options: [
              'endocytosis',
              'selective permeability',
              'sodium-potassium pump',
              'exocytosis'
            ],
            correctAnswer: 3,
            explanation: 'Use exocytosis because it directly maps to the described biological pattern: release of intracellular cargo via vesicle fusion.'
          }
        ]
      }
    }
  ]
};
