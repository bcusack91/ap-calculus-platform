export const bioPhotosynthesisPart7Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through integrated AP plant metabolism synthesis.
      
      ### Worked biological example
      A student team investigates integrated AP plant metabolism synthesis. Their first interpretation step is to identify how **C4 pathway** and **CAM pathway** work together in the same pathway.
      
      - They classify the primary signal using **C4 pathway**: carbon-concentrating mechanism reducing photorespiration.
      - They trace the downstream response using **CAM pathway**: temporal separation of CO2 capture and Calvin cycle.
      - They then compare outcomes with **stomata** and **light reactions** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **C4 pathway**
      - **CAM pathway**
      - **stomata**
      - **light reactions**
      `
    },
    {
      id: 'bio-photosynthesis-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes C4 pathway?',
            options: [
              'carbon-concentrating mechanism reducing photorespiration',
              'leaf pores regulating gas exchange and water loss',
              'temporal separation of CO2 capture and Calvin cycle',
              'capture light energy to generate ATP and NADPH'
            ],
            correctAnswer: 0,
            explanation: 'C4 pathway is best matched with: carbon-concentrating mechanism reducing photorespiration.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of CAM pathway?',
            options: [
              'carbon-concentrating mechanism reducing photorespiration',
              'leaf pores regulating gas exchange and water loss',
              'temporal separation of CO2 capture and Calvin cycle',
              'initiates electron flow by oxidizing water'
            ],
            correctAnswer: 2,
            explanation: 'CAM pathway is best matched with: temporal separation of CO2 capture and Calvin cycle.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → C4 pathway
      - **Immediate processing** → CAM pathway
      - **System-level consequence** → stomata
      - **Measured readout** → light reactions
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | C4 pathway | carbon-concentrating mechanism reducing photorespiration | Early shift in the primary variable |
      | CAM pathway | temporal separation of CO2 capture and Calvin cycle | Mid-pathway change in process rate |
      | stomata | leaf pores regulating gas exchange and water loss | Downstream phenotype trend |
      | light reactions | capture light energy to generate ATP and NADPH | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **carbon-concentrating mechanism reducing photorespiration**
      2) Term for this definition: **temporal separation of CO2 capture and Calvin cycle**
      3) Term for this definition: **leaf pores regulating gas exchange and water loss**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['C4 pathway', 'CAM pathway', 'stomata'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'carbon-concentrating mechanism reducing photorespiration\'.',
        hint2: 'Second blank points to CAM pathway; think about the role \'temporal separation of CO2 capture and Calvin cycle\'.',
        hint3: 'Third blank is stomata; connect it to \'leaf pores regulating gas exchange and water loss\'.',
        explanation: 'Correct set: C4 pathway, CAM pathway, stomata. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-photosynthesis-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'C4 pathway',
            options: ['temporal separation of CO2 capture and Calvin cycle', 'leaf pores regulating gas exchange and water loss', 'capture light energy to generate ATP and NADPH', 'carbon-concentrating mechanism reducing photorespiration']
          },
          {
            label: 'CAM pathway',
            options: ['temporal separation of CO2 capture and Calvin cycle', 'leaf pores regulating gas exchange and water loss', 'initiates electron flow by oxidizing water', 'capture light energy to generate ATP and NADPH']
          },
          {
            label: 'stomata',
            options: ['leaf pores regulating gas exchange and water loss', 'capture light energy to generate ATP and NADPH', 'initiates electron flow by oxidizing water', 're-energizes electrons for NADPH formation']
          }
        ],
        correctAnswers: ['carbon-concentrating mechanism reducing photorespiration', 'temporal separation of CO2 capture and Calvin cycle', 'leaf pores regulating gas exchange and water loss'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'C4 pathway, CAM pathway, and stomata should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because C4 pathway carbon-concentrating mechanism reducing photorespiration, we expect ...".
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
      id: 'bio-photosynthesis-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In integrated AP plant metabolism synthesis, the observed pattern is: capture light energy to generate ATP and NADPH. What term should anchor the explanation?',
            options: [
              'light reactions',
              'CAM pathway',
              'stomata',
              'C4 pathway'
            ],
            correctAnswer: 0,
            explanation: 'Use light reactions because it directly maps to the described biological pattern: capture light energy to generate ATP and NADPH.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: initiates electron flow by oxidizing water. What term should anchor the explanation?',
            options: [
              'photosystem II',
              'photosystem I',
              'light reactions',
              'stomata'
            ],
            correctAnswer: 0,
            explanation: 'Use photosystem II because it directly maps to the described biological pattern: initiates electron flow by oxidizing water.'
          }
        ]
      }
    }
  ]
};
