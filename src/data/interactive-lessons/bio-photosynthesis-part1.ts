export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: Light Reactions
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through light-dependent ATP/NADPH production.
      
      ### Worked biological example
      A student team investigates light-dependent ATP/NADPH production. Their first interpretation step is to identify how **light reactions** and **photosystem II** work together in the same pathway.
      
      - They classify the primary signal using **light reactions**: capture light energy to generate ATP and NADPH.
      - They trace the downstream response using **photosystem II**: initiates electron flow by oxidizing water.
      - They then compare outcomes with **photosystem I** and **Calvin cycle** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **light reactions**
      - **photosystem II**
      - **photosystem I**
      - **Calvin cycle**
      `
    },
    {
      id: 'bio-photosynthesis-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Light Reactions, what best describes light reactions?',
            options: [
              'initiates electron flow by oxidizing water',
              'uses ATP and NADPH to fix carbon into organic molecules',
              're-energizes electrons for NADPH formation',
              'capture light energy to generate ATP and NADPH'
            ],
            correctAnswer: 3,
            explanation: 'light reactions is best matched with: capture light energy to generate ATP and NADPH.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of photosystem II?',
            options: [
              'initiates electron flow by oxidizing water',
              're-energizes electrons for NADPH formation',
              'capture light energy to generate ATP and NADPH',
              'enzyme catalyzing CO2 fixation with RuBP'
            ],
            correctAnswer: 0,
            explanation: 'photosystem II is best matched with: initiates electron flow by oxidizing water.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Light Reactions
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → light reactions
      - **Immediate processing** → photosystem II
      - **System-level consequence** → photosystem I
      - **Measured readout** → Calvin cycle
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | light reactions | capture light energy to generate ATP and NADPH | Early shift in the primary variable |
      | photosystem II | initiates electron flow by oxidizing water | Mid-pathway change in process rate |
      | photosystem I | re-energizes electrons for NADPH formation | Downstream phenotype trend |
      | Calvin cycle | uses ATP and NADPH to fix carbon into organic molecules | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **capture light energy to generate ATP and NADPH**
      2) Term for this definition: **initiates electron flow by oxidizing water**
      3) Term for this definition: **re-energizes electrons for NADPH formation**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['light reactions', 'photosystem II', 'photosystem I'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'capture light energy to generate ATP and NADPH\'.',
        hint2: 'Second blank points to photosystem II; think about the role \'initiates electron flow by oxidizing water\'.',
        hint3: 'Third blank is photosystem I; connect it to \'re-energizes electrons for NADPH formation\'.',
        explanation: 'Correct set: light reactions, photosystem II, photosystem I. These three terms define the core mechanism chain for Light Reactions.'
      }
    },
    {
      id: 'bio-photosynthesis-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'light reactions',
            options: ['uses ATP and NADPH to fix carbon into organic molecules', 're-energizes electrons for NADPH formation', 'initiates electron flow by oxidizing water', 'capture light energy to generate ATP and NADPH']
          },
          {
            label: 'photosystem II',
            options: ['re-energizes electrons for NADPH formation', 'uses ATP and NADPH to fix carbon into organic molecules', 'enzyme catalyzing CO2 fixation with RuBP', 'initiates electron flow by oxidizing water']
          },
          {
            label: 'photosystem I',
            options: ['re-energizes electrons for NADPH formation', 'uses ATP and NADPH to fix carbon into organic molecules', 'enzyme catalyzing CO2 fixation with RuBP', 'oxygenation pathway that reduces photosynthetic efficiency']
          }
        ],
        correctAnswers: ['capture light energy to generate ATP and NADPH', 'initiates electron flow by oxidizing water', 're-energizes electrons for NADPH formation'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'light reactions, photosystem II, and photosystem I should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because light reactions capture light energy to generate ATP and NADPH, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Plants respire continuously; photosynthesis does not replace respiration.
      - Oxygen released in photosynthesis comes from water splitting, not CO2.
      - C4 and CAM pathways are adaptations to environmental constraints, not universally superior modes.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-photosynthesis-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In light-dependent ATP/NADPH production, the observed pattern is: uses ATP and NADPH to fix carbon into organic molecules. What term should anchor the explanation?',
            options: [
              'light reactions',
              'photosystem I',
              'Calvin cycle',
              'photosystem II'
            ],
            correctAnswer: 2,
            explanation: 'Use Calvin cycle because it directly maps to the described biological pattern: uses ATP and NADPH to fix carbon into organic molecules.'
          },
          {
            question: 'In an AP-style free-response about light reactions, the observed pattern is: enzyme catalyzing CO2 fixation with RuBP. What term should anchor the explanation?',
            options: [
              'Rubisco',
              'photosystem I',
              'Calvin cycle',
              'photorespiration'
            ],
            correctAnswer: 0,
            explanation: 'Use Rubisco because it directly maps to the described biological pattern: enzyme catalyzing CO2 fixation with RuBP.'
          }
        ]
      }
    }
  ]
};
