export const bioPhotosynthesisPart5Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'bio-photosynthesis-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Photosynthesis: Photosynthesis Factors
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through rate responses to light, CO2, and temperature.
      
      ### Worked biological example
      A student team investigates rate responses to light, CO2, and temperature. Their first interpretation step is to identify how **Rubisco** and **photorespiration** work together in the same pathway.
      
      - They classify the primary signal using **Rubisco**: enzyme catalyzing CO2 fixation with RuBP.
      - They trace the downstream response using **photorespiration**: oxygenation pathway that reduces photosynthetic efficiency.
      - They then compare outcomes with **C4 pathway** and **CAM pathway** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Rubisco**
      - **photorespiration**
      - **C4 pathway**
      - **CAM pathway**
      `
    },
    {
      id: 'bio-photosynthesis-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Photosynthesis Factors, what best describes Rubisco?',
            options: [
              'enzyme catalyzing CO2 fixation with RuBP',
              'carbon-concentrating mechanism reducing photorespiration',
              'temporal separation of CO2 capture and Calvin cycle',
              'oxygenation pathway that reduces photosynthetic efficiency'
            ],
            correctAnswer: 0,
            explanation: 'Rubisco is best matched with: enzyme catalyzing CO2 fixation with RuBP.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of photorespiration?',
            options: [
              'enzyme catalyzing CO2 fixation with RuBP',
              'leaf pores regulating gas exchange and water loss',
              'oxygenation pathway that reduces photosynthetic efficiency',
              'carbon-concentrating mechanism reducing photorespiration'
            ],
            correctAnswer: 2,
            explanation: 'photorespiration is best matched with: oxygenation pathway that reduces photosynthetic efficiency.'
          }
        ]
      }
    },
    {
      id: 'bio-photosynthesis-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Photosynthesis Factors
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Rubisco
      - **Immediate processing** → photorespiration
      - **System-level consequence** → C4 pathway
      - **Measured readout** → CAM pathway
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Rubisco | enzyme catalyzing CO2 fixation with RuBP | Early shift in the primary variable |
      | photorespiration | oxygenation pathway that reduces photosynthetic efficiency | Mid-pathway change in process rate |
      | C4 pathway | carbon-concentrating mechanism reducing photorespiration | Downstream phenotype trend |
      | CAM pathway | temporal separation of CO2 capture and Calvin cycle | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-photosynthesis-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **enzyme catalyzing CO2 fixation with RuBP**
      2) Term for this definition: **oxygenation pathway that reduces photosynthetic efficiency**
      3) Term for this definition: **carbon-concentrating mechanism reducing photorespiration**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Rubisco', 'photorespiration', 'C4 pathway'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'enzyme catalyzing CO2 fixation with RuBP\'.',
        hint2: 'Second blank points to photorespiration; think about the role \'oxygenation pathway that reduces photosynthetic efficiency\'.',
        hint3: 'Third blank is C4 pathway; connect it to \'carbon-concentrating mechanism reducing photorespiration\'.',
        explanation: 'Correct set: Rubisco, photorespiration, C4 pathway. These three terms define the core mechanism chain for Photosynthesis Factors.'
      }
    },
    {
      id: 'bio-photosynthesis-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rubisco',
            options: ['enzyme catalyzing CO2 fixation with RuBP', 'carbon-concentrating mechanism reducing photorespiration', 'oxygenation pathway that reduces photosynthetic efficiency', 'temporal separation of CO2 capture and Calvin cycle']
          },
          {
            label: 'photorespiration',
            options: ['leaf pores regulating gas exchange and water loss', 'oxygenation pathway that reduces photosynthetic efficiency', 'carbon-concentrating mechanism reducing photorespiration', 'temporal separation of CO2 capture and Calvin cycle']
          },
          {
            label: 'C4 pathway',
            options: ['capture light energy to generate ATP and NADPH', 'leaf pores regulating gas exchange and water loss', 'carbon-concentrating mechanism reducing photorespiration', 'temporal separation of CO2 capture and Calvin cycle']
          }
        ],
        correctAnswers: ['enzyme catalyzing CO2 fixation with RuBP', 'oxygenation pathway that reduces photosynthetic efficiency', 'carbon-concentrating mechanism reducing photorespiration'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Rubisco, photorespiration, and C4 pathway should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-photosynthesis-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Rubisco enzyme catalyzing CO2 fixation with RuBP, we expect ...".
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
      id: 'bio-photosynthesis-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In rate responses to light, CO2, and temperature, the observed pattern is: temporal separation of CO2 capture and Calvin cycle. What term should anchor the explanation?',
            options: [
              'Rubisco',
              'photorespiration',
              'CAM pathway',
              'C4 pathway'
            ],
            correctAnswer: 2,
            explanation: 'Use CAM pathway because it directly maps to the described biological pattern: temporal separation of CO2 capture and Calvin cycle.'
          },
          {
            question: 'In an AP-style free-response about photosynthesis factors, the observed pattern is: leaf pores regulating gas exchange and water loss. What term should anchor the explanation?',
            options: [
              'CAM pathway',
              'C4 pathway',
              'stomata',
              'light reactions'
            ],
            correctAnswer: 2,
            explanation: 'Use stomata because it directly maps to the described biological pattern: leaf pores regulating gas exchange and water loss.'
          }
        ]
      }
    }
  ]
};
