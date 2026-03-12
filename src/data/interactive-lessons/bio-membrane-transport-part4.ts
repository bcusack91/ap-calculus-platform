export const bioMembraneTransportPart4Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Active Transport
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through ATP-powered ion pumping.
      
      ### Worked biological example
      A student team investigates ATP-powered ion pumping. Their first interpretation step is to identify how **osmosis** and **aquaporin** work together in the same pathway.
      
      - They classify the primary signal using **osmosis**: water movement across a semipermeable membrane.
      - They trace the downstream response using **aquaporin**: channel protein enabling rapid water transport.
      - They then compare outcomes with **active transport** and **sodium-potassium pump** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **osmosis**
      - **aquaporin**
      - **active transport**
      - **sodium-potassium pump**
      `
    },
    {
      id: 'bio-membrane-transport-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Active Transport, what best describes osmosis?',
            options: [
              'channel protein enabling rapid water transport',
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'water movement across a semipermeable membrane',
              'movement against gradient requiring energy input'
            ],
            correctAnswer: 2,
            explanation: 'osmosis is best matched with: water movement across a semipermeable membrane.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of aquaporin?',
            options: [
              'water movement across a semipermeable membrane',
              'channel protein enabling rapid water transport',
              'movement against gradient requiring energy input',
              'uptake of extracellular material via vesicle formation'
            ],
            correctAnswer: 1,
            explanation: 'aquaporin is best matched with: channel protein enabling rapid water transport.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Active Transport
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → osmosis
      - **Immediate processing** → aquaporin
      - **System-level consequence** → active transport
      - **Measured readout** → sodium-potassium pump
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | osmosis | water movement across a semipermeable membrane | Early shift in the primary variable |
      | aquaporin | channel protein enabling rapid water transport | Mid-pathway change in process rate |
      | active transport | movement against gradient requiring energy input | Downstream phenotype trend |
      | sodium-potassium pump | ATPase exchanging Na+ and K+ across plasma membrane | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **water movement across a semipermeable membrane**
      2) Term for this definition: **channel protein enabling rapid water transport**
      3) Term for this definition: **movement against gradient requiring energy input**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['osmosis', 'aquaporin', 'active transport'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'water movement across a semipermeable membrane\'.',
        hint2: 'Second blank points to aquaporin; think about the role \'channel protein enabling rapid water transport\'.',
        hint3: 'Third blank is active transport; connect it to \'movement against gradient requiring energy input\'.',
        explanation: 'Correct set: osmosis, aquaporin, active transport. These three terms define the core mechanism chain for Active Transport.'
      }
    },
    {
      id: 'bio-membrane-transport-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'osmosis',
            options: ['ATPase exchanging Na+ and K+ across plasma membrane', 'water movement across a semipermeable membrane', 'movement against gradient requiring energy input', 'channel protein enabling rapid water transport']
          },
          {
            label: 'aquaporin',
            options: ['channel protein enabling rapid water transport', 'ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation', 'movement against gradient requiring energy input']
          },
          {
            label: 'active transport',
            options: ['movement against gradient requiring energy input', 'release of intracellular cargo via vesicle fusion', 'ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation']
          }
        ],
        correctAnswers: ['water movement across a semipermeable membrane', 'channel protein enabling rapid water transport', 'movement against gradient requiring energy input'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'osmosis, aquaporin, and active transport should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because osmosis water movement across a semipermeable membrane, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Active transport is defined by movement against gradient, not merely ATP presence nearby.
      - Transport direction depends on gradients and membrane proteins, not molecule intent.
      - Facilitated diffusion remains passive even though proteins are involved.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-membrane-transport-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In ATP-powered ion pumping, the observed pattern is: ATPase exchanging Na+ and K+ across plasma membrane. What term should anchor the explanation?',
            options: [
              'active transport',
              'sodium-potassium pump',
              'aquaporin',
              'osmosis'
            ],
            correctAnswer: 1,
            explanation: 'Use sodium-potassium pump because it directly maps to the described biological pattern: ATPase exchanging Na+ and K+ across plasma membrane.'
          },
          {
            question: 'In an AP-style free-response about active transport, the observed pattern is: uptake of extracellular material via vesicle formation. What term should anchor the explanation?',
            options: [
              'endocytosis',
              'exocytosis',
              'sodium-potassium pump',
              'active transport'
            ],
            correctAnswer: 0,
            explanation: 'Use endocytosis because it directly maps to the described biological pattern: uptake of extracellular material via vesicle formation.'
          }
        ]
      }
    }
  ]
};
