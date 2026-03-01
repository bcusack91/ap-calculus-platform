export const bioMembraneTransportPart3Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Osmosis
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through water potential shifts in plant cells.
      
      ### Worked biological example
      A student team investigates water potential shifts in plant cells. Their first interpretation step is to identify how **facilitated diffusion** and **osmosis** work together in the same pathway.
      
      - They classify the primary signal using **facilitated diffusion**: passive transport through membrane proteins.
      - They trace the downstream response using **osmosis**: water movement across a semipermeable membrane.
      - They then compare outcomes with **aquaporin** and **active transport** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **facilitated diffusion**
      - **osmosis**
      - **aquaporin**
      - **active transport**
      `
    },
    {
      id: 'bio-membrane-transport-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Osmosis, what best describes facilitated diffusion?',
            options: [
              'channel protein enabling rapid water transport',
              'water movement across a semipermeable membrane',
              'movement against gradient requiring energy input',
              'passive transport through membrane proteins'
            ],
            correctAnswer: 3,
            explanation: 'facilitated diffusion is best matched with: passive transport through membrane proteins.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of osmosis?',
            options: [
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'water movement across a semipermeable membrane',
              'passive transport through membrane proteins',
              'channel protein enabling rapid water transport'
            ],
            correctAnswer: 1,
            explanation: 'osmosis is best matched with: water movement across a semipermeable membrane.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Osmosis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → facilitated diffusion
      - **Immediate processing** → osmosis
      - **System-level consequence** → aquaporin
      - **Measured readout** → active transport
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | facilitated diffusion | passive transport through membrane proteins | Early shift in the primary variable |
      | osmosis | water movement across a semipermeable membrane | Mid-pathway change in process rate |
      | aquaporin | channel protein enabling rapid water transport | Downstream phenotype trend |
      | active transport | movement against gradient requiring energy input | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **passive transport through membrane proteins**
      2) Term for this definition: **water movement across a semipermeable membrane**
      3) Term for this definition: **channel protein enabling rapid water transport**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['facilitated diffusion', 'osmosis', 'aquaporin'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'passive transport through membrane proteins\'.',
        hint2: 'Second blank points to osmosis; think about the role \'water movement across a semipermeable membrane\'.',
        hint3: 'Third blank is aquaporin; connect it to \'channel protein enabling rapid water transport\'.',
        explanation: 'Correct set: facilitated diffusion, osmosis, aquaporin. These three terms define the core mechanism chain for Osmosis.'
      }
    },
    {
      id: 'bio-membrane-transport-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'facilitated diffusion',
            options: ['movement against gradient requiring energy input', 'channel protein enabling rapid water transport', 'passive transport through membrane proteins', 'water movement across a semipermeable membrane']
          },
          {
            label: 'osmosis',
            options: ['ATPase exchanging Na+ and K+ across plasma membrane', 'water movement across a semipermeable membrane', 'channel protein enabling rapid water transport', 'movement against gradient requiring energy input']
          },
          {
            label: 'aquaporin',
            options: ['channel protein enabling rapid water transport', 'ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation', 'movement against gradient requiring energy input']
          }
        ],
        correctAnswers: ['passive transport through membrane proteins', 'water movement across a semipermeable membrane', 'channel protein enabling rapid water transport'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'facilitated diffusion, osmosis, and aquaporin should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because facilitated diffusion passive transport through membrane proteins, we expect ...".
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
      id: 'bio-membrane-transport-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In water potential shifts in plant cells, the observed pattern is: movement against gradient requiring energy input. What term should anchor the explanation?',
            options: [
              'active transport',
              'facilitated diffusion',
              'aquaporin',
              'osmosis'
            ],
            correctAnswer: 0,
            explanation: 'Use active transport because it directly maps to the described biological pattern: movement against gradient requiring energy input.'
          },
          {
            question: 'In an AP-style free-response about osmosis, the observed pattern is: ATPase exchanging Na+ and K+ across plasma membrane. What term should anchor the explanation?',
            options: [
              'aquaporin',
              'sodium-potassium pump',
              'endocytosis',
              'active transport'
            ],
            correctAnswer: 1,
            explanation: 'Use sodium-potassium pump because it directly maps to the described biological pattern: ATPase exchanging Na+ and K+ across plasma membrane.'
          }
        ]
      }
    }
  ]
};
