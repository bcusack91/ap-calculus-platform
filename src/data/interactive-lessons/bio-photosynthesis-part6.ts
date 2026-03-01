export const bioPhotosynthesisPart6Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through photosynthesis experiment data analysis.
      
      ### Worked biological example
      A student team investigates photosynthesis experiment data analysis. Their first interpretation step is to identify how **photorespiration** and **C4 pathway** work together in the same pathway.
      
      - They classify the primary signal using **photorespiration**: oxygenation pathway that reduces photosynthetic efficiency.
      - They trace the downstream response using **C4 pathway**: carbon-concentrating mechanism reducing photorespiration.
      - They then compare outcomes with **CAM pathway** and **stomata** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **photorespiration**
      - **C4 pathway**
      - **CAM pathway**
      - **stomata**
      `
    },
    {
      id: 'bio-photosynthesis-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes photorespiration?',
            options: [
              'carbon-concentrating mechanism reducing photorespiration',
              'leaf pores regulating gas exchange and water loss',
              'oxygenation pathway that reduces photosynthetic efficiency',
              'temporal separation of CO2 capture and Calvin cycle'
            ],
            correctAnswer: 2,
            explanation: 'photorespiration is best matched with: oxygenation pathway that reduces photosynthetic efficiency.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of C4 pathway?',
            options: [
              'temporal separation of CO2 capture and Calvin cycle',
              'capture light energy to generate ATP and NADPH',
              'carbon-concentrating mechanism reducing photorespiration',
              'oxygenation pathway that reduces photosynthetic efficiency'
            ],
            correctAnswer: 2,
            explanation: 'C4 pathway is best matched with: carbon-concentrating mechanism reducing photorespiration.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → photorespiration
      - **Immediate processing** → C4 pathway
      - **System-level consequence** → CAM pathway
      - **Measured readout** → stomata
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | photorespiration | oxygenation pathway that reduces photosynthetic efficiency | Early shift in the primary variable |
      | C4 pathway | carbon-concentrating mechanism reducing photorespiration | Mid-pathway change in process rate |
      | CAM pathway | temporal separation of CO2 capture and Calvin cycle | Downstream phenotype trend |
      | stomata | leaf pores regulating gas exchange and water loss | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **oxygenation pathway that reduces photosynthetic efficiency**
      2) Term for this definition: **carbon-concentrating mechanism reducing photorespiration**
      3) Term for this definition: **temporal separation of CO2 capture and Calvin cycle**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['photorespiration', 'C4 pathway', 'CAM pathway'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'oxygenation pathway that reduces photosynthetic efficiency\'.',
        hint2: 'Second blank points to C4 pathway; think about the role \'carbon-concentrating mechanism reducing photorespiration\'.',
        hint3: 'Third blank is CAM pathway; connect it to \'temporal separation of CO2 capture and Calvin cycle\'.',
        explanation: 'Correct set: photorespiration, C4 pathway, CAM pathway. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-photosynthesis-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'photorespiration',
            options: ['carbon-concentrating mechanism reducing photorespiration', 'leaf pores regulating gas exchange and water loss', 'oxygenation pathway that reduces photosynthetic efficiency', 'temporal separation of CO2 capture and Calvin cycle']
          },
          {
            label: 'C4 pathway',
            options: ['temporal separation of CO2 capture and Calvin cycle', 'capture light energy to generate ATP and NADPH', 'carbon-concentrating mechanism reducing photorespiration', 'leaf pores regulating gas exchange and water loss']
          },
          {
            label: 'CAM pathway',
            options: ['leaf pores regulating gas exchange and water loss', 'initiates electron flow by oxidizing water', 'temporal separation of CO2 capture and Calvin cycle', 'capture light energy to generate ATP and NADPH']
          }
        ],
        correctAnswers: ['oxygenation pathway that reduces photosynthetic efficiency', 'carbon-concentrating mechanism reducing photorespiration', 'temporal separation of CO2 capture and Calvin cycle'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'photorespiration, C4 pathway, and CAM pathway should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because photorespiration oxygenation pathway that reduces photosynthetic efficiency, we expect ...".
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
      id: 'bio-photosynthesis-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In photosynthesis experiment data analysis, the observed pattern is: leaf pores regulating gas exchange and water loss. What term should anchor the explanation?',
            options: [
              'photorespiration',
              'C4 pathway',
              'stomata',
              'CAM pathway'
            ],
            correctAnswer: 2,
            explanation: 'Use stomata because it directly maps to the described biological pattern: leaf pores regulating gas exchange and water loss.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: capture light energy to generate ATP and NADPH. What term should anchor the explanation?',
            options: [
              'photosystem II',
              'light reactions',
              'stomata',
              'CAM pathway'
            ],
            correctAnswer: 1,
            explanation: 'Use light reactions because it directly maps to the described biological pattern: capture light energy to generate ATP and NADPH.'
          }
        ]
      }
    }
  ]
};
