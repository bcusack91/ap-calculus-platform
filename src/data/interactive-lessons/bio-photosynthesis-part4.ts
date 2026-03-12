export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: C3 vs C4 vs CAM
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through photorespiration and alternate carbon pathways.
      
      ### Worked biological example
      A student team investigates photorespiration and alternate carbon pathways. Their first interpretation step is to identify how **Calvin cycle** and **Rubisco** work together in the same pathway.
      
      - They classify the primary signal using **Calvin cycle**: uses ATP and NADPH to fix carbon into organic molecules.
      - They trace the downstream response using **Rubisco**: enzyme catalyzing CO2 fixation with RuBP.
      - They then compare outcomes with **photorespiration** and **C4 pathway** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Calvin cycle**
      - **Rubisco**
      - **photorespiration**
      - **C4 pathway**
      `
    },
    {
      id: 'bio-photosynthesis-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For C3 vs C4 vs CAM, what best describes Calvin cycle?',
            options: [
              'oxygenation pathway that reduces photosynthetic efficiency',
              'uses ATP and NADPH to fix carbon into organic molecules',
              'enzyme catalyzing CO2 fixation with RuBP',
              'carbon-concentrating mechanism reducing photorespiration'
            ],
            correctAnswer: 1,
            explanation: 'Calvin cycle is best matched with: uses ATP and NADPH to fix carbon into organic molecules.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Rubisco?',
            options: [
              'enzyme catalyzing CO2 fixation with RuBP',
              'temporal separation of CO2 capture and Calvin cycle',
              'uses ATP and NADPH to fix carbon into organic molecules',
              'oxygenation pathway that reduces photosynthetic efficiency'
            ],
            correctAnswer: 0,
            explanation: 'Rubisco is best matched with: enzyme catalyzing CO2 fixation with RuBP.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: C3 vs C4 vs CAM
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Calvin cycle
      - **Immediate processing** → Rubisco
      - **System-level consequence** → photorespiration
      - **Measured readout** → C4 pathway
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Calvin cycle | uses ATP and NADPH to fix carbon into organic molecules | Early shift in the primary variable |
      | Rubisco | enzyme catalyzing CO2 fixation with RuBP | Mid-pathway change in process rate |
      | photorespiration | oxygenation pathway that reduces photosynthetic efficiency | Downstream phenotype trend |
      | C4 pathway | carbon-concentrating mechanism reducing photorespiration | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **uses ATP and NADPH to fix carbon into organic molecules**
      2) Term for this definition: **enzyme catalyzing CO2 fixation with RuBP**
      3) Term for this definition: **oxygenation pathway that reduces photosynthetic efficiency**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Calvin cycle', 'Rubisco', 'photorespiration'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'uses ATP and NADPH to fix carbon into organic molecules\'.',
        hint2: 'Second blank points to Rubisco; think about the role \'enzyme catalyzing CO2 fixation with RuBP\'.',
        hint3: 'Third blank is photorespiration; connect it to \'oxygenation pathway that reduces photosynthetic efficiency\'.',
        explanation: 'Correct set: Calvin cycle, Rubisco, photorespiration. These three terms define the core mechanism chain for C3 vs C4 vs CAM.'
      }
    },
    {
      id: 'bio-photosynthesis-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calvin cycle',
            options: ['oxygenation pathway that reduces photosynthetic efficiency', 'uses ATP and NADPH to fix carbon into organic molecules', 'carbon-concentrating mechanism reducing photorespiration', 'enzyme catalyzing CO2 fixation with RuBP']
          },
          {
            label: 'Rubisco',
            options: ['carbon-concentrating mechanism reducing photorespiration', 'oxygenation pathway that reduces photosynthetic efficiency', 'temporal separation of CO2 capture and Calvin cycle', 'enzyme catalyzing CO2 fixation with RuBP']
          },
          {
            label: 'photorespiration',
            options: ['temporal separation of CO2 capture and Calvin cycle', 'carbon-concentrating mechanism reducing photorespiration', 'leaf pores regulating gas exchange and water loss', 'oxygenation pathway that reduces photosynthetic efficiency']
          }
        ],
        correctAnswers: ['uses ATP and NADPH to fix carbon into organic molecules', 'enzyme catalyzing CO2 fixation with RuBP', 'oxygenation pathway that reduces photosynthetic efficiency'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Calvin cycle, Rubisco, and photorespiration should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Calvin cycle uses ATP and NADPH to fix carbon into organic molecules, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Rate-limiting factors can change depending on conditions.
      - Plants respire continuously; photosynthesis does not replace respiration.
      - Oxygen released in photosynthesis comes from water splitting, not CO2.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-photosynthesis-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In photorespiration and alternate carbon pathways, the observed pattern is: carbon-concentrating mechanism reducing photorespiration. What term should anchor the explanation?',
            options: [
              'C4 pathway',
              'photorespiration',
              'Rubisco',
              'Calvin cycle'
            ],
            correctAnswer: 0,
            explanation: 'Use C4 pathway because it directly maps to the described biological pattern: carbon-concentrating mechanism reducing photorespiration.'
          },
          {
            question: 'In an AP-style free-response about c3 vs c4 vs cam, the observed pattern is: temporal separation of CO2 capture and Calvin cycle. What term should anchor the explanation?',
            options: [
              'stomata',
              'CAM pathway',
              'photorespiration',
              'C4 pathway'
            ],
            correctAnswer: 1,
            explanation: 'Use CAM pathway because it directly maps to the described biological pattern: temporal separation of CO2 capture and Calvin cycle.'
          }
        ]
      }
    }
  ]
};
