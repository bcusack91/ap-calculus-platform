export const bioMembraneTransportPart6Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'bio-membrane-transport-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Membrane Transport: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through transport graph analysis under perturbation.
      
      ### Worked biological example
      A student team investigates transport graph analysis under perturbation. Their first interpretation step is to identify how **active transport** and **sodium-potassium pump** work together in the same pathway.
      
      - They classify the primary signal using **active transport**: movement against gradient requiring energy input.
      - They trace the downstream response using **sodium-potassium pump**: ATPase exchanging Na+ and K+ across plasma membrane.
      - They then compare outcomes with **endocytosis** and **exocytosis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **active transport**
      - **sodium-potassium pump**
      - **endocytosis**
      - **exocytosis**
      `
    },
    {
      id: 'bio-membrane-transport-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes active transport?',
            options: [
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'release of intracellular cargo via vesicle fusion',
              'movement against gradient requiring energy input',
              'uptake of extracellular material via vesicle formation'
            ],
            correctAnswer: 2,
            explanation: 'active transport is best matched with: movement against gradient requiring energy input.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of sodium-potassium pump?',
            options: [
              'uptake of extracellular material via vesicle formation',
              'membrane property allowing some molecules to cross more easily',
              'ATPase exchanging Na+ and K+ across plasma membrane',
              'movement against gradient requiring energy input'
            ],
            correctAnswer: 2,
            explanation: 'sodium-potassium pump is best matched with: ATPase exchanging Na+ and K+ across plasma membrane.'
          }
        ]
      }
    },
    {
      id: 'bio-membrane-transport-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → active transport
      - **Immediate processing** → sodium-potassium pump
      - **System-level consequence** → endocytosis
      - **Measured readout** → exocytosis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | active transport | movement against gradient requiring energy input | Early shift in the primary variable |
      | sodium-potassium pump | ATPase exchanging Na+ and K+ across plasma membrane | Mid-pathway change in process rate |
      | endocytosis | uptake of extracellular material via vesicle formation | Downstream phenotype trend |
      | exocytosis | release of intracellular cargo via vesicle fusion | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-membrane-transport-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **movement against gradient requiring energy input**
      2) Term for this definition: **ATPase exchanging Na+ and K+ across plasma membrane**
      3) Term for this definition: **uptake of extracellular material via vesicle formation**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['active transport', 'sodium-potassium pump', 'endocytosis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'movement against gradient requiring energy input\'.',
        hint2: 'Second blank points to sodium-potassium pump; think about the role \'ATPase exchanging Na+ and K+ across plasma membrane\'.',
        hint3: 'Third blank is endocytosis; connect it to \'uptake of extracellular material via vesicle formation\'.',
        explanation: 'Correct set: active transport, sodium-potassium pump, endocytosis. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-membrane-transport-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'active transport',
            options: ['movement against gradient requiring energy input', 'ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation', 'release of intracellular cargo via vesicle fusion']
          },
          {
            label: 'sodium-potassium pump',
            options: ['ATPase exchanging Na+ and K+ across plasma membrane', 'release of intracellular cargo via vesicle fusion', 'membrane property allowing some molecules to cross more easily', 'uptake of extracellular material via vesicle formation']
          },
          {
            label: 'endocytosis',
            options: ['uptake of extracellular material via vesicle formation', 'release of intracellular cargo via vesicle fusion', 'membrane property allowing some molecules to cross more easily', 'net movement from higher to lower concentration']
          }
        ],
        correctAnswers: ['movement against gradient requiring energy input', 'ATPase exchanging Na+ and K+ across plasma membrane', 'uptake of extracellular material via vesicle formation'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'active transport, sodium-potassium pump, and endocytosis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-membrane-transport-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because active transport movement against gradient requiring energy input, we expect ...".
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
      id: 'bio-membrane-transport-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In transport graph analysis under perturbation, the observed pattern is: release of intracellular cargo via vesicle fusion. What term should anchor the explanation?',
            options: [
              'exocytosis',
              'endocytosis',
              'active transport',
              'sodium-potassium pump'
            ],
            correctAnswer: 0,
            explanation: 'Use exocytosis because it directly maps to the described biological pattern: release of intracellular cargo via vesicle fusion.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: membrane property allowing some molecules to cross more easily. What term should anchor the explanation?',
            options: [
              'diffusion',
              'exocytosis',
              'selective permeability',
              'endocytosis'
            ],
            correctAnswer: 2,
            explanation: 'Use selective permeability because it directly maps to the described biological pattern: membrane property allowing some molecules to cross more easily.'
          }
        ]
      }
    }
  ]
};
