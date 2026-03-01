export const bioMembraneTransportPart2Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Passive Transport
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through diffusion down concentration gradients.
      
      ### Worked biological example
      A student team investigates diffusion down concentration gradients. Their first interpretation step is to identify how **diffusion** and **facilitated diffusion** work together in the same pathway.
      
      - They classify the primary signal using **diffusion**: net movement from higher to lower concentration.
      - They trace the downstream response using **facilitated diffusion**: passive transport through membrane proteins.
      - They then compare outcomes with **osmosis** and **aquaporin** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **diffusion**
      - **facilitated diffusion**
      - **osmosis**
      - **aquaporin**
      `
    },
    {
      id: 'bio-membrane-transport-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Passive Transport, what best describes diffusion?',
            options: [
              'passive transport through membrane proteins',
              'channel protein enabling rapid water transport',
              'net movement from higher to lower concentration',
              'water movement across a semipermeable membrane'
            ],
            correctAnswer: 2,
            explanation: 'diffusion is best matched with: net movement from higher to lower concentration.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of facilitated diffusion?',
            options: [
              'movement against gradient requiring energy input',
              'water movement across a semipermeable membrane',
              'net movement from higher to lower concentration',
              'passive transport through membrane proteins'
            ],
            correctAnswer: 3,
            explanation: 'facilitated diffusion is best matched with: passive transport through membrane proteins.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Passive Transport
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → diffusion
      - **Immediate processing** → facilitated diffusion
      - **System-level consequence** → osmosis
      - **Measured readout** → aquaporin
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | diffusion | net movement from higher to lower concentration | Early shift in the primary variable |
      | facilitated diffusion | passive transport through membrane proteins | Mid-pathway change in process rate |
      | osmosis | water movement across a semipermeable membrane | Downstream phenotype trend |
      | aquaporin | channel protein enabling rapid water transport | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **net movement from higher to lower concentration**
      2) Term for this definition: **passive transport through membrane proteins**
      3) Term for this definition: **water movement across a semipermeable membrane**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['diffusion', 'facilitated diffusion', 'osmosis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'net movement from higher to lower concentration\'.',
        hint2: 'Second blank points to facilitated diffusion; think about the role \'passive transport through membrane proteins\'.',
        hint3: 'Third blank is osmosis; connect it to \'water movement across a semipermeable membrane\'.',
        explanation: 'Correct set: diffusion, facilitated diffusion, osmosis. These three terms define the core mechanism chain for Passive Transport.'
      }
    },
    {
      id: 'bio-membrane-transport-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'diffusion',
            options: ['water movement across a semipermeable membrane', 'channel protein enabling rapid water transport', 'passive transport through membrane proteins', 'net movement from higher to lower concentration']
          },
          {
            label: 'facilitated diffusion',
            options: ['passive transport through membrane proteins', 'water movement across a semipermeable membrane', 'movement against gradient requiring energy input', 'channel protein enabling rapid water transport']
          },
          {
            label: 'osmosis',
            options: ['water movement across a semipermeable membrane', 'movement against gradient requiring energy input', 'ATPase exchanging Na+ and K+ across plasma membrane', 'channel protein enabling rapid water transport']
          }
        ],
        correctAnswers: ['net movement from higher to lower concentration', 'passive transport through membrane proteins', 'water movement across a semipermeable membrane'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'diffusion, facilitated diffusion, and osmosis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because diffusion net movement from higher to lower concentration, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Facilitated diffusion remains passive even though proteins are involved.
      - Osmosis describes water movement, not solute movement.
      - Active transport is defined by movement against gradient, not merely ATP presence nearby.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-membrane-transport-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In diffusion down concentration gradients, the observed pattern is: channel protein enabling rapid water transport. What term should anchor the explanation?',
            options: [
              'osmosis',
              'aquaporin',
              'facilitated diffusion',
              'diffusion'
            ],
            correctAnswer: 1,
            explanation: 'Use aquaporin because it directly maps to the described biological pattern: channel protein enabling rapid water transport.'
          },
          {
            question: 'In an AP-style free-response about passive transport, the observed pattern is: movement against gradient requiring energy input. What term should anchor the explanation?',
            options: [
              'aquaporin',
              'sodium-potassium pump',
              'active transport',
              'osmosis'
            ],
            correctAnswer: 2,
            explanation: 'Use active transport because it directly maps to the described biological pattern: movement against gradient requiring energy input.'
          }
        ]
      }
    }
  ]
};
