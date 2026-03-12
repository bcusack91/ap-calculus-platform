export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: Photosystems
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through electron flow through photosystems II and I.
      
      ### Worked biological example
      A student team investigates electron flow through photosystems II and I. Their first interpretation step is to identify how **photosystem II** and **photosystem I** work together in the same pathway.
      
      - They classify the primary signal using **photosystem II**: initiates electron flow by oxidizing water.
      - They trace the downstream response using **photosystem I**: re-energizes electrons for NADPH formation.
      - They then compare outcomes with **Calvin cycle** and **Rubisco** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **photosystem II**
      - **photosystem I**
      - **Calvin cycle**
      - **Rubisco**
      `
    },
    {
      id: 'bio-photosynthesis-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Photosystems, what best describes photosystem II?',
            options: [
              'initiates electron flow by oxidizing water',
              'enzyme catalyzing CO2 fixation with RuBP',
              'uses ATP and NADPH to fix carbon into organic molecules',
              're-energizes electrons for NADPH formation'
            ],
            correctAnswer: 0,
            explanation: 'photosystem II is best matched with: initiates electron flow by oxidizing water.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of photosystem I?',
            options: [
              're-energizes electrons for NADPH formation',
              'oxygenation pathway that reduces photosynthetic efficiency',
              'uses ATP and NADPH to fix carbon into organic molecules',
              'initiates electron flow by oxidizing water'
            ],
            correctAnswer: 0,
            explanation: 'photosystem I is best matched with: re-energizes electrons for NADPH formation.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Photosystems
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → photosystem II
      - **Immediate processing** → photosystem I
      - **System-level consequence** → Calvin cycle
      - **Measured readout** → Rubisco
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | photosystem II | initiates electron flow by oxidizing water | Early shift in the primary variable |
      | photosystem I | re-energizes electrons for NADPH formation | Mid-pathway change in process rate |
      | Calvin cycle | uses ATP and NADPH to fix carbon into organic molecules | Downstream phenotype trend |
      | Rubisco | enzyme catalyzing CO2 fixation with RuBP | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **initiates electron flow by oxidizing water**
      2) Term for this definition: **re-energizes electrons for NADPH formation**
      3) Term for this definition: **uses ATP and NADPH to fix carbon into organic molecules**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['photosystem II', 'photosystem I', 'Calvin cycle'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'initiates electron flow by oxidizing water\'.',
        hint2: 'Second blank points to photosystem I; think about the role \'re-energizes electrons for NADPH formation\'.',
        hint3: 'Third blank is Calvin cycle; connect it to \'uses ATP and NADPH to fix carbon into organic molecules\'.',
        explanation: 'Correct set: photosystem II, photosystem I, Calvin cycle. These three terms define the core mechanism chain for Photosystems.'
      }
    },
    {
      id: 'bio-photosynthesis-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'photosystem II',
            options: ['enzyme catalyzing CO2 fixation with RuBP', 'initiates electron flow by oxidizing water', 'uses ATP and NADPH to fix carbon into organic molecules', 're-energizes electrons for NADPH formation']
          },
          {
            label: 'photosystem I',
            options: ['uses ATP and NADPH to fix carbon into organic molecules', 're-energizes electrons for NADPH formation', 'oxygenation pathway that reduces photosynthetic efficiency', 'enzyme catalyzing CO2 fixation with RuBP']
          },
          {
            label: 'Calvin cycle',
            options: ['enzyme catalyzing CO2 fixation with RuBP', 'carbon-concentrating mechanism reducing photorespiration', 'oxygenation pathway that reduces photosynthetic efficiency', 'uses ATP and NADPH to fix carbon into organic molecules']
          }
        ],
        correctAnswers: ['initiates electron flow by oxidizing water', 're-energizes electrons for NADPH formation', 'uses ATP and NADPH to fix carbon into organic molecules'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'photosystem II, photosystem I, and Calvin cycle should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because photosystem II initiates electron flow by oxidizing water, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Oxygen released in photosynthesis comes from water splitting, not CO2.
      - C4 and CAM pathways are adaptations to environmental constraints, not universally superior modes.
      - Rate-limiting factors can change depending on conditions.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-photosynthesis-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In electron flow through photosystems II and I, the observed pattern is: enzyme catalyzing CO2 fixation with RuBP. What term should anchor the explanation?',
            options: [
              'Calvin cycle',
              'photosystem II',
              'Rubisco',
              'photosystem I'
            ],
            correctAnswer: 2,
            explanation: 'Use Rubisco because it directly maps to the described biological pattern: enzyme catalyzing CO2 fixation with RuBP.'
          },
          {
            question: 'In an AP-style free-response about photosystems, the observed pattern is: oxygenation pathway that reduces photosynthetic efficiency. What term should anchor the explanation?',
            options: [
              'Calvin cycle',
              'photorespiration',
              'Rubisco',
              'C4 pathway'
            ],
            correctAnswer: 1,
            explanation: 'Use photorespiration because it directly maps to the described biological pattern: oxygenation pathway that reduces photosynthetic efficiency.'
          }
        ]
      }
    }
  ]
};
