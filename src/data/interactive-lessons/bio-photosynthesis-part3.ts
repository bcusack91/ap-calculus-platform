export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: Calvin Cycle
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through carbon fixation in stroma reactions.
      
      ### Worked biological example
      A student team investigates carbon fixation in stroma reactions. Their first interpretation step is to identify how **photosystem I** and **Calvin cycle** work together in the same pathway.
      
      - They classify the primary signal using **photosystem I**: re-energizes electrons for NADPH formation.
      - They trace the downstream response using **Calvin cycle**: uses ATP and NADPH to fix carbon into organic molecules.
      - They then compare outcomes with **Rubisco** and **photorespiration** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **photosystem I**
      - **Calvin cycle**
      - **Rubisco**
      - **photorespiration**
      `
    },
    {
      id: 'bio-photosynthesis-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Calvin Cycle, what best describes photosystem I?',
            options: [
              're-energizes electrons for NADPH formation',
              'enzyme catalyzing CO2 fixation with RuBP',
              'uses ATP and NADPH to fix carbon into organic molecules',
              'oxygenation pathway that reduces photosynthetic efficiency'
            ],
            correctAnswer: 0,
            explanation: 'photosystem I is best matched with: re-energizes electrons for NADPH formation.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Calvin cycle?',
            options: [
              'carbon-concentrating mechanism reducing photorespiration',
              'uses ATP and NADPH to fix carbon into organic molecules',
              're-energizes electrons for NADPH formation',
              'enzyme catalyzing CO2 fixation with RuBP'
            ],
            correctAnswer: 1,
            explanation: 'Calvin cycle is best matched with: uses ATP and NADPH to fix carbon into organic molecules.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Calvin Cycle
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → photosystem I
      - **Immediate processing** → Calvin cycle
      - **System-level consequence** → Rubisco
      - **Measured readout** → photorespiration
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | photosystem I | re-energizes electrons for NADPH formation | Early shift in the primary variable |
      | Calvin cycle | uses ATP and NADPH to fix carbon into organic molecules | Mid-pathway change in process rate |
      | Rubisco | enzyme catalyzing CO2 fixation with RuBP | Downstream phenotype trend |
      | photorespiration | oxygenation pathway that reduces photosynthetic efficiency | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **re-energizes electrons for NADPH formation**
      2) Term for this definition: **uses ATP and NADPH to fix carbon into organic molecules**
      3) Term for this definition: **enzyme catalyzing CO2 fixation with RuBP**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['photosystem I', 'Calvin cycle', 'Rubisco'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'re-energizes electrons for NADPH formation\'.',
        hint2: 'Second blank points to Calvin cycle; think about the role \'uses ATP and NADPH to fix carbon into organic molecules\'.',
        hint3: 'Third blank is Rubisco; connect it to \'enzyme catalyzing CO2 fixation with RuBP\'.',
        explanation: 'Correct set: photosystem I, Calvin cycle, Rubisco. These three terms define the core mechanism chain for Calvin Cycle.'
      }
    },
    {
      id: 'bio-photosynthesis-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'photosystem I',
            options: ['enzyme catalyzing CO2 fixation with RuBP', 'uses ATP and NADPH to fix carbon into organic molecules', 're-energizes electrons for NADPH formation', 'oxygenation pathway that reduces photosynthetic efficiency']
          },
          {
            label: 'Calvin cycle',
            options: ['uses ATP and NADPH to fix carbon into organic molecules', 'oxygenation pathway that reduces photosynthetic efficiency', 'enzyme catalyzing CO2 fixation with RuBP', 'carbon-concentrating mechanism reducing photorespiration']
          },
          {
            label: 'Rubisco',
            options: ['temporal separation of CO2 capture and Calvin cycle', 'enzyme catalyzing CO2 fixation with RuBP', 'oxygenation pathway that reduces photosynthetic efficiency', 'carbon-concentrating mechanism reducing photorespiration']
          }
        ],
        correctAnswers: ['re-energizes electrons for NADPH formation', 'uses ATP and NADPH to fix carbon into organic molecules', 'enzyme catalyzing CO2 fixation with RuBP'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'photosystem I, Calvin cycle, and Rubisco should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because photosystem I re-energizes electrons for NADPH formation, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - C4 and CAM pathways are adaptations to environmental constraints, not universally superior modes.
      - Rate-limiting factors can change depending on conditions.
      - Plants respire continuously; photosynthesis does not replace respiration.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-photosynthesis-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In carbon fixation in stroma reactions, the observed pattern is: oxygenation pathway that reduces photosynthetic efficiency. What term should anchor the explanation?',
            options: [
              'photosystem I',
              'photorespiration',
              'Rubisco',
              'Calvin cycle'
            ],
            correctAnswer: 1,
            explanation: 'Use photorespiration because it directly maps to the described biological pattern: oxygenation pathway that reduces photosynthetic efficiency.'
          },
          {
            question: 'In an AP-style free-response about calvin cycle, the observed pattern is: carbon-concentrating mechanism reducing photorespiration. What term should anchor the explanation?',
            options: [
              'C4 pathway',
              'CAM pathway',
              'Rubisco',
              'photorespiration'
            ],
            correctAnswer: 0,
            explanation: 'Use C4 pathway because it directly maps to the described biological pattern: carbon-concentrating mechanism reducing photorespiration.'
          }
        ]
      }
    }
  ]
};
