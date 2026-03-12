export const bioMembraneTransportPart1Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Membrane Structure
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through solute movement across phospholipid bilayers.
      
      ### Worked biological example
      A student team investigates solute movement across phospholipid bilayers. Their first interpretation step is to identify how **selective permeability** and **diffusion** work together in the same pathway.
      
      - They classify the primary signal using **selective permeability**: membrane property allowing some molecules to cross more easily.
      - They trace the downstream response using **diffusion**: net movement from higher to lower concentration.
      - They then compare outcomes with **facilitated diffusion** and **osmosis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **selective permeability**
      - **diffusion**
      - **facilitated diffusion**
      - **osmosis**
      `
    },
    {
      id: 'bio-membrane-transport-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Membrane Structure, what best describes selective permeability?',
            options: [
              'passive transport through membrane proteins',
              'membrane property allowing some molecules to cross more easily',
              'water movement across a semipermeable membrane',
              'net movement from higher to lower concentration'
            ],
            correctAnswer: 1,
            explanation: 'selective permeability is best matched with: membrane property allowing some molecules to cross more easily.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of diffusion?',
            options: [
              'net movement from higher to lower concentration',
              'channel protein enabling rapid water transport',
              'passive transport through membrane proteins',
              'membrane property allowing some molecules to cross more easily'
            ],
            correctAnswer: 0,
            explanation: 'diffusion is best matched with: net movement from higher to lower concentration.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Membrane Structure
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → selective permeability
      - **Immediate processing** → diffusion
      - **System-level consequence** → facilitated diffusion
      - **Measured readout** → osmosis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | selective permeability | membrane property allowing some molecules to cross more easily | Early shift in the primary variable |
      | diffusion | net movement from higher to lower concentration | Mid-pathway change in process rate |
      | facilitated diffusion | passive transport through membrane proteins | Downstream phenotype trend |
      | osmosis | water movement across a semipermeable membrane | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **membrane property allowing some molecules to cross more easily**
      2) Term for this definition: **net movement from higher to lower concentration**
      3) Term for this definition: **passive transport through membrane proteins**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['selective permeability', 'diffusion', 'facilitated diffusion'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'membrane property allowing some molecules to cross more easily\'.',
        hint2: 'Second blank points to diffusion; think about the role \'net movement from higher to lower concentration\'.',
        hint3: 'Third blank is facilitated diffusion; connect it to \'passive transport through membrane proteins\'.',
        explanation: 'Correct set: selective permeability, diffusion, facilitated diffusion. These three terms define the core mechanism chain for Membrane Structure.'
      }
    },
    {
      id: 'bio-membrane-transport-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'selective permeability',
            options: ['membrane property allowing some molecules to cross more easily', 'net movement from higher to lower concentration', 'water movement across a semipermeable membrane', 'passive transport through membrane proteins']
          },
          {
            label: 'diffusion',
            options: ['passive transport through membrane proteins', 'channel protein enabling rapid water transport', 'water movement across a semipermeable membrane', 'net movement from higher to lower concentration']
          },
          {
            label: 'facilitated diffusion',
            options: ['water movement across a semipermeable membrane', 'movement against gradient requiring energy input', 'channel protein enabling rapid water transport', 'passive transport through membrane proteins']
          }
        ],
        correctAnswers: ['membrane property allowing some molecules to cross more easily', 'net movement from higher to lower concentration', 'passive transport through membrane proteins'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'selective permeability, diffusion, and facilitated diffusion should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because selective permeability membrane property allowing some molecules to cross more easily, we expect ...".
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
      id: 'bio-membrane-transport-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In solute movement across phospholipid bilayers, the observed pattern is: water movement across a semipermeable membrane. What term should anchor the explanation?',
            options: [
              'osmosis',
              'diffusion',
              'facilitated diffusion',
              'selective permeability'
            ],
            correctAnswer: 0,
            explanation: 'Use osmosis because it directly maps to the described biological pattern: water movement across a semipermeable membrane.'
          },
          {
            question: 'In an AP-style free-response about membrane structure, the observed pattern is: channel protein enabling rapid water transport. What term should anchor the explanation?',
            options: [
              'facilitated diffusion',
              'aquaporin',
              'active transport',
              'osmosis'
            ],
            correctAnswer: 1,
            explanation: 'Use aquaporin because it directly maps to the described biological pattern: channel protein enabling rapid water transport.'
          }
        ]
      }
    }
  ]
};
